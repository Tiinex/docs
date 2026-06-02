#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const requiredSections = [
  "Reward Source",
  "Reward Terms",
  "Claimant",
  "Submission Artifact",
  "Eligibility Evidence",
  "Settlement State",
];

const allowedStates = new Set([
  "open",
  "submitted",
  "in_review",
  "accepted",
  "rejected",
  "expired",
  "blocked",
  "paid",
  "disputed",
  "unknown",
]);

function hasSection(markdown, section) {
  const pattern = new RegExp(`^##\\s+${section.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m");
  return pattern.test(markdown);
}

function getSectionBody(markdown, section) {
  const lines = markdown.split(/\r?\n/);
  const startIndex = lines.findIndex((line) => line.trim() === `## ${section}`);
  if (startIndex === -1) {
    return null;
  }

  const body = [];
  for (const line of lines.slice(startIndex + 1)) {
    if (/^##\s+/.test(line)) {
      break;
    }
    body.push(line);
  }
  return body.join("\n");
}

function findSettlementState(markdown) {
  const sectionBody = getSectionBody(markdown, "Settlement State");
  if (sectionBody === null) {
    return null;
  }

  const stateMatch = sectionBody.match(/^\s*-\s*State:\s*([A-Za-z_]+)\s*$/m);
  return stateMatch ? stateMatch[1] : null;
}

function validateBountyTrace(markdown) {
  const errors = [];

  if (!/Current Schema:.*tiinex\.bounty\.v1/.test(markdown)) {
    errors.push("Current Schema must reference tiinex.bounty.v1.");
  }

  if (!/Authors:\s*\S+/.test(markdown)) {
    errors.push("Current -> Authors must be present.");
  }

  for (const section of requiredSections) {
    if (!hasSection(markdown, section)) {
      errors.push(`Missing required section: ${section}.`);
    }
  }

  const settlementState = findSettlementState(markdown);
  if (!settlementState) {
    errors.push("Settlement State must include a '- State: <value>' row.");
  } else if (!allowedStates.has(settlementState)) {
    errors.push(`Settlement State '${settlementState}' is not normalized.`);
  }

  if (/State:\s*paid\b/i.test(markdown) && !hasSection(markdown, "Payment Evidence")) {
    errors.push("Paid claims must include Payment Evidence.");
  }

  if (/Counted As Collected:\s*yes/i.test(markdown) && !/State:\s*(accepted|paid)\b/i.test(markdown)) {
    errors.push("Collected claims must be accepted or paid.");
  }

  return errors;
}

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: node scripts/validate-bounty-trace.mjs <trace-file>");
  process.exit(2);
}

const markdown = await readFile(filePath, "utf8");
const errors = validateBountyTrace(markdown);

if (errors.length > 0) {
  console.error(`Bounty trace validation failed for ${filePath}:`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Bounty trace validation passed for ${filePath}.`);
