# Topics

This folder contains durable topic records in strict Markdown.

The goal is portability first.

These files should render clearly in ordinary Markdown viewers, convert cleanly to PDF, and remain usable as external documentation without requiring frontmatter support.

## Purpose

- Keep topic history versioned and expandable over time.
- Preserve the same core truth as the topic preview, even when the layout is different.
- Keep source provenance visible without letting one source own the topic.
- Make room for external material, test output, screenshots, and proof references so topics remain auditable over time.
- Keep headings stable enough that a writer and parser can still work against them later.

## Files In This Folder

- `README.md`: the current topic format and folder guidance.
- `*.topic.md`: one durable topic record per topic.

## Export Path

The current bounded exporter is `docs/tools/export-topics.mjs`.

Default behavior:

- reads topic-shaped state from `youtube/tools/feedback-review-state.json`
- writes `.topic.md` files into this folder
- can target one topic or all current topics

The exporter is a transition aid.

It should stay shaped around source-neutral topic records rather than YouTube-specific presentation details.

## Exporter Usage

Run from the workspace root:

```text
node docs/tools/export-topics.mjs
```

Export one topic only:

```text
node docs/tools/export-topics.mjs --topic-id agent-topic-1
```

Preview one topic without writing files:

```text
node docs/tools/export-topics.mjs --topic-id agent-topic-1 --stdout
```

Override the source state or destination folder when testing migration paths:

```text
node docs/tools/export-topics.mjs --state-file <path> --output-dir <path>
```

## Topic File Naming

Use the suffix `.topic.md` for topic files.

This keeps the durable topic artifact explicit and leaves room for future tooling distinctions without forcing frontmatter today.

## Topic Heading Order

Use this section order unless there is a strong reason to change it:

1. `# <Topic Title>`
2. `## Topic Metadata`
3. `## Current Status`
4. `## Source Summary`
5. `## Topic Summary`
6. `## Retained Messages`
7. `## Role Reviews`
8. `## Evidence Register`
9. `## Decision Log`
10. `## Follow-up`

## Section Rules

### Topic Metadata

Use flat bullet lines for durable identifiers and timestamps.

Recommended fields:

- Topic ID
- Lifecycle
- Review State
- Created or First Seen
- Last Seen
- Participants
- Tags

### Current Status

Use flat bullet lines for the active operational state.

Recommended fields:

- Moderator Feedback
- Human Feedback
- Human Gate
- Alignment
- Next Step

### Source Summary

Use flat bullet lines that describe origin transparently without making the source the owner of the topic.

Recommended fields:

- Sources
- Source Kinds
- Message Count
- Evidence Count

### Topic Summary

Write 1 to 3 short paragraphs explaining what the topic is really about.

This section should say the same thing as the preview surface at the meaning level, not necessarily with the same exact wording.

### Retained Messages

Use one `### Message N` block per retained message.

Inside each message block, keep these bullet fields when available:

- Source
- Source Kind
- Participant
- Entry ID
- Intent
- Published
- Evidence Status
- Evidence Note
- Proof Reference

Then include the message text as a Markdown blockquote.

### Role Reviews

Use one `### <Role>` block per review lane.

Recommended fields:

- Reviewed At
- Status
- Reviewer Kind
- Model
- Model Track
- Stance
- Summary
- Recommendation

### Evidence Register

Use this section for anything that is not just a retained source message or a role review.

Examples:

- screenshots
- HUD snapshots
- test outputs
- replay notes
- external documents
- bug reports from other repos
- proof artifacts

Use one `### Evidence N` block per evidence item.

Recommended fields:

- Type
- Status
- Source
- Reference
- Captured At
- Captured By
- Why It Matters

If the evidence is large, summarize it here and link or point to the fuller artifact.

### Decision Log

Use dated bullet lines for meaningful topic decisions.

Examples:

- accepted a gate decision
- moved alignment to calibrating
- marked evidence stale
- attached a new proof artifact

### Follow-up

Use flat bullets for what remains open, deferred, or intentionally out of scope.

## Auditability Rule

If a conclusion in the topic depends on something outside the retained messages, that outside material should appear in `## Evidence Register` or be explicitly referenced from it.

That includes:

- external research
- screenshots
- test runs
- local command outputs that matter to the decision
- proof files
- observations taken from another repo or system

If the topic depends on it, the topic should point to it.

## Portability Rule

Do not use YAML frontmatter for these topic files right now.

Keep metadata in ordinary Markdown so the files remain easy to preview, email, paste into other tools, and export to PDF.
