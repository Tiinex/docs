import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_STATE_FILE = path.resolve(__dirname, "../../youtube/tools/feedback-review-state.json");
const DEFAULT_OUTPUT_DIR = path.resolve(__dirname, "../topics");

function printUsage() {
  console.log(`Usage:
  node docs/tools/export-topics.mjs [--state-file <path>] [--output-dir <path>] [--topic-id <id>] [--stdout]

Examples:
  node docs/tools/export-topics.mjs
  node docs/tools/export-topics.mjs --topic-id agent-topic-1
  node docs/tools/export-topics.mjs --topic-id agent-topic-1 --stdout`);
}

function parseArgs(args) {
  const parsed = {
    stateFile: DEFAULT_STATE_FILE,
    outputDir: DEFAULT_OUTPUT_DIR,
    topicId: null,
    stdout: false
  };

  for (let index = 0; index < args.length; index += 1) {
    const token = args[index];
    const nextValue = args[index + 1];

    switch (token) {
      case "--state-file":
      case "--output-dir":
      case "--topic-id":
        if (!nextValue || nextValue.startsWith("--")) {
          throw new Error(`${token} requires a value.`);
        }
        index += 1;
        break;
      case "--stdout":
        break;
      case "--help":
      case "-h":
        parsed.help = true;
        break;
      default:
        throw new Error(`Unknown option: ${token}`);
    }

    switch (token) {
      case "--state-file":
        parsed.stateFile = path.resolve(nextValue);
        break;
      case "--output-dir":
        parsed.outputDir = path.resolve(nextValue);
        break;
      case "--topic-id":
        parsed.topicId = nextValue.trim();
        break;
      case "--stdout":
        parsed.stdout = true;
        break;
      default:
        break;
    }
  }

  return parsed;
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function normalizeText(value) {
  const normalized = String(value ?? "").trim();
  return normalized || null;
}

function slugify(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "topic";
}

function formatTimestamp(value) {
  const normalized = normalizeText(value);
  if (!normalized) {
    return null;
  }

  const parsed = new Date(normalized);
  if (Number.isNaN(parsed.getTime())) {
    return normalized;
  }

  const year = parsed.getUTCFullYear();
  const month = String(parsed.getUTCMonth() + 1).padStart(2, "0");
  const day = String(parsed.getUTCDate()).padStart(2, "0");
  const hour = String(parsed.getUTCHours()).padStart(2, "0");
  const minute = String(parsed.getUTCMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute} UTC`;
}

function unique(values) {
  return [...new Set((values || []).map((value) => normalizeText(value)).filter(Boolean))];
}

function formatList(values, fallback = "-") {
  const normalized = unique(values);
  return normalized.length > 0 ? normalized.join(", ") : fallback;
}

function renderBullet(label, value) {
  const normalized = normalizeText(value);
  return normalized ? `- ${label}: ${normalized}` : null;
}

function getEvidenceItems(topic) {
  if (Array.isArray(topic.evidenceItems)) {
    return topic.evidenceItems;
  }

  if (Array.isArray(topic.evidenceRegister)) {
    return topic.evidenceRegister;
  }

  return [];
}

function buildTopicFileName(topic) {
  const topicIdPart = slugify(topic.topicId);
  const titlePart = slugify(topic.title);
  return `${topicIdPart}-${titlePart}.topic.md`;
}

function buildTopicSummary(topic, roleReviewLanes) {
  if (normalizeText(topic.summary)) {
    return String(topic.summary)
      .split(/\r?\n\s*\r?\n/g)
      .map((paragraph) => normalizeText(paragraph))
      .filter(Boolean);
  }

  const completedSummaries = roleReviewLanes
    .map((lane) => normalizeText(lane.summary))
    .filter(Boolean);

  if (completedSummaries.length > 0) {
    return [
      "No dedicated topic summary has been recorded yet.",
      "The current understanding is carried by the stored role reviews and retained messages below."
    ];
  }

  return [
    "No dedicated topic summary has been recorded yet.",
    "This topic file currently reflects retained messages, status, and any stored evidence or review lanes."
  ];
}

function buildDecisionLog(topic, roleReviewLanes) {
  const explicitEntries = Array.isArray(topic.decisionLog)
    ? topic.decisionLog
        .map((entry) => {
          const note = normalizeText(entry?.note);
          if (!note) {
            return null;
          }

          const at = formatTimestamp(entry?.at) || "Undated";
          const by = normalizeText(entry?.by);
          return by ? `- ${at}: ${note} (${by}).` : `- ${at}: ${note}.`;
        })
        .filter(Boolean)
    : [];

  if (explicitEntries.length > 0) {
    return explicitEntries;
  }

  const entries = [];

  for (const lane of roleReviewLanes) {
    const reviewedAt = formatTimestamp(lane.reviewedAt) || "Undated";
    const role = normalizeText(lane.role) || "Unknown role";
    entries.push(`- ${reviewedAt}: ${role} review lane recorded.`);
  }

  if (topic.alignmentUpdatedAt) {
    const at = formatTimestamp(topic.alignmentUpdatedAt) || "Undated";
    const by = normalizeText(topic.alignmentUpdatedBy) || "Unknown";
    entries.push(`- ${at}: alignment state updated by ${by}.`);
  }

  if (entries.length === 0) {
    entries.push("- No explicit topic decisions have been recorded yet.");
  }

  return entries;
}

function buildFollowUp(topic) {
  const nextStep = normalizeText(topic.nextStep);
  if (nextStep) {
    return [`- ${nextStep.charAt(0).toUpperCase()}${nextStep.slice(1)}.`];
  }

  return ["- No explicit follow-up has been recorded yet."];
}

function renderEvidenceRegister(topic) {
  const evidenceItems = getEvidenceItems(topic);

  const lines = ["## Evidence Register", ""];

  if (evidenceItems.length === 0) {
    lines.push("No external evidence is attached yet.", "", "When this topic starts depending on other material, record it here.", "", "### Evidence Entry Template", "");
    lines.push("- Type: screenshot, test output, replay note, external document, proof artifact, or other bounded evidence");
    lines.push("- Status: current, stale, challenged, falsified, archived, or reference-only");
    lines.push("- Source: repo path, URL, screenshot name, terminal result, or other origin");
    lines.push("- Reference: exact file path, command, link, or transcript pointer");
    lines.push("- Captured At: timestamp");
    lines.push("- Captured By: actor or role");
    lines.push("- Why It Matters: short reason this evidence changes trust in the topic");
    return lines;
  }

  evidenceItems.forEach((item, index) => {
    lines.push(`### Evidence ${index + 1}`, "");
    [
      renderBullet("Type", item.type),
      renderBullet("Status", item.status),
      renderBullet("Source", item.source),
      renderBullet("Reference", item.reference),
      renderBullet("Captured At", formatTimestamp(item.capturedAt)),
      renderBullet("Captured By", item.capturedBy),
      renderBullet("Why It Matters", item.whyItMatters)
    ].filter(Boolean).forEach((line) => lines.push(line));

    const summary = normalizeText(item.summary);
    if (summary) {
      lines.push("", summary);
    }

    lines.push("");
  });

  return lines;
}

function renderTopic(topic, roleReviewLanes) {
  const messages = Array.isArray(topic.messages) ? topic.messages : [];
  const firstSeen = formatTimestamp(topic.firstSeenAt || messages[0]?.publishedAt);
  const lastSeen = formatTimestamp(topic.lastSeenAt || messages[messages.length - 1]?.publishedAt);
  const sourceLabels = unique((topic.sourceSummary || []).map((entry) => entry.sourceLabel).concat(messages.map((message) => message.sourceLabel)));
  const sourceKinds = unique((topic.sourceSummary || []).flatMap((entry) => entry.sourceKinds || []).concat(messages.map((message) => message.sourceKind)));
  const participants = unique(topic.participantAliases || messages.map((message) => message.participantAlias));
  const summaryParagraphs = buildTopicSummary(topic, roleReviewLanes);
  const decisionLog = buildDecisionLog(topic, roleReviewLanes);
  const followUp = buildFollowUp(topic);
  const lines = [
    `# ${normalizeText(topic.title) || normalizeText(topic.topicId) || "Untitled Topic"}`,
    "",
    "## Topic Metadata",
    "",
    renderBullet("Topic ID", topic.topicId),
    renderBullet("Lifecycle", topic.lifecycleStatus),
    renderBullet("Review State", topic.reviewState),
    renderBullet("First Seen", firstSeen),
    renderBullet("Last Seen", lastSeen),
    renderBullet("Participants", formatList(participants)),
    renderBullet("Tags", formatList(topic.tags || []))
  ].filter(Boolean);

  lines.push("", "## Current Status", "");
  [
    renderBullet("Moderator Feedback", topic.moderatorFeedbackStatus),
    renderBullet("Human Feedback", topic.humanFeedbackStatus),
    renderBullet("Human Gate", topic.humanGateDecision),
    renderBullet("Alignment", topic.alignmentStatus),
    renderBullet("Next Step", topic.nextStep)
  ].filter(Boolean).forEach((line) => lines.push(line));

  lines.push("", "## Source Summary", "");
  [
    renderBullet("Sources", formatList(sourceLabels)),
    renderBullet("Source Kinds", formatList(sourceKinds)),
    renderBullet("Message Count", String(messages.length)),
    renderBullet("Evidence Count", String(getEvidenceItems(topic).length))
  ].filter(Boolean).forEach((line) => lines.push(line));

  lines.push("", "## Topic Summary", "");
  summaryParagraphs.forEach((paragraph) => lines.push(paragraph, ""));
  if (lines[lines.length - 1] === "") {
    lines.pop();
  }

  lines.push("", "## Retained Messages", "");
  if (messages.length === 0) {
    lines.push("No retained messages are stored for this topic.");
  } else {
    messages.forEach((message, index) => {
      lines.push(`### Message ${index + 1}`, "");
      [
        renderBullet("Source", message.sourceLabel),
        renderBullet("Source Kind", message.sourceKind),
        renderBullet("Participant", message.participantAlias),
        renderBullet("Entry ID", message.entryId),
        renderBullet("Intent", message.intent),
        renderBullet("Published", formatTimestamp(message.publishedAt)),
        renderBullet("Evidence Status", message.evidenceStatus),
        renderBullet("Evidence Note", message.evidenceReason),
        renderBullet("Proof Reference", message.evidenceProofRef)
      ].filter(Boolean).forEach((line) => lines.push(line));

      const text = normalizeText(message.textPreview) || normalizeText(message.text) || "-";
      lines.push("", `> ${text.replace(/\n/g, "\n> ")}`, "");
    });
    if (lines[lines.length - 1] === "") {
      lines.pop();
    }
  }

  lines.push("", "## Role Reviews", "");
  if (roleReviewLanes.length === 0) {
    lines.push("No stored role reviews are attached to this topic.");
  } else {
    roleReviewLanes.forEach((lane) => {
      lines.push(`### ${normalizeText(lane.role) || "Role"}`, "");
      [
        renderBullet("Reviewed At", formatTimestamp(lane.reviewedAt)),
        renderBullet("Status", lane.status),
        renderBullet("Reviewer Kind", lane.reviewerKind),
        renderBullet("Model", lane.modelName),
        renderBullet("Model Track", lane.modelTrack),
        renderBullet("Stance", lane.stance),
        renderBullet("Summary", lane.summary),
        renderBullet("Recommendation", lane.recommendation)
      ].filter(Boolean).forEach((line) => lines.push(line));
      lines.push("");
    });
    if (lines[lines.length - 1] === "") {
      lines.pop();
    }
  }

  lines.push("", ...renderEvidenceRegister(topic), "", "## Decision Log", "");
  decisionLog.forEach((line) => lines.push(line));
  lines.push("", "## Follow-up", "");
  followUp.forEach((line) => lines.push(line));
  lines.push("");

  return `${lines.join("\n")}\n`;
}

async function main() {
  const parsed = parseArgs(process.argv.slice(2));
  if (parsed.help) {
    printUsage();
    return;
  }

  const state = await readJson(parsed.stateFile);
  const topics = Array.isArray(state.topics) ? state.topics : [];
  const roleReviewLanes = Array.isArray(state.roleReviewLanes) ? state.roleReviewLanes : [];
  const exportTopics = parsed.topicId
    ? topics.filter((topic) => normalizeText(topic.topicId) === parsed.topicId)
    : topics;

  if (exportTopics.length === 0) {
    throw new Error(parsed.topicId
      ? `Topic not found: ${parsed.topicId}`
      : "No topics found in the source state.");
  }

  if (parsed.stdout) {
    const topic = exportTopics[0];
    const topicRoleReviews = roleReviewLanes.filter((lane) => normalizeText(lane.topicId) === normalizeText(topic.topicId));
    process.stdout.write(renderTopic(topic, topicRoleReviews));
    return;
  }

  await mkdir(parsed.outputDir, { recursive: true });
  const written = [];

  for (const topic of exportTopics) {
    const topicRoleReviews = roleReviewLanes.filter((lane) => normalizeText(lane.topicId) === normalizeText(topic.topicId));
    const fileName = buildTopicFileName(topic);
    const filePath = path.join(parsed.outputDir, fileName);
    await writeFile(filePath, renderTopic(topic, topicRoleReviews), "utf8");
    written.push(filePath);
  }

  console.log(JSON.stringify({
    command: "export-topics",
    stateFile: parsed.stateFile,
    outputDir: parsed.outputDir,
    topicCount: written.length,
    files: written
  }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
