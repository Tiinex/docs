# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.signal.v1](tiinex.signal.v1.md)
  - Created At: 2026-05-28 22:30:03
  - Trace: [tiinex.signal.v1.md](tiinex.signal.v1.md)
- Current
  - Current Schema: [tiinex.feedback.v1](tiinex.feedback.v1.md)
  - Created At: 2026-05-28 22:30:03
  - Summary: Shared schema for interaction-oriented feedback artifacts that specialize preserved signal with response and dialog semantics.

---

# tiinex.feedback.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.signal.v1](tiinex.signal.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names feedback-oriented artifacts whose main job is to preserve
interaction-shaped feedback in a way that remains useful to later traces,
readers, and tools.

It exists so responses, critiques, replies, or other feedback events can be
carried as first-class readable artifacts when the interaction semantics matter,
rather than being reduced to a thin pointer or flattened into generic signal.

## Required Body Expectations

Artifacts using `tiinex.feedback.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the feedback artifact or feedback slice
- the source surface or channel where the feedback came from
- the feedback signal itself as a quote, bounded summary, or both
- some explanation of what trace, artifact, work item, or interaction target the
  feedback bears on
- some signal of the interactive relation, such as reply target, request for
  change, response direction, or thread/disposition state

## Recommended Body Sections

The exact section names may vary, but feedback documents should usually provide
some combination of:

- source or provenance
- feedback signal
- interaction target or subject
- interpretation
- relevance to current work
- response or disposition
- linked evidence or external references

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.feedback.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the feedback artifact continues or specializes another
  trace

## Required Feedback Semantics

Feedback artifacts using `tiinex.feedback.v1` should make it clear:

- where the feedback came from
- whether the carried signal is a direct quote, a normalized summary, or a
  mixed representation
- what artifact, trace, task, topic, or interaction target the feedback is
  about
- whether the feedback is positive, negative, corrective, requesting change, or
  otherwise materially relevant
- what makes the artifact feedback rather than merely observed signal, such as
  directed response, reply semantics, or dialog state

If the original feedback lives on an external platform, the artifact should
preserve enough readable signal that the feedback remains useful even if the
external page later changes, disappears, or becomes inconvenient to access.

Feedback artifacts should not pretend to be mere forwarding pointers when the
main value is actually the preserved signal itself.

Feedback artifacts also should not collapse all externally gathered signal into
feedback when the interaction relation is weak or absent; in those cases,
`tiinex.signal.v1` is usually the better fit.

## Validation-Friendly Shape

Keep feedback artifacts in a stable order so humans and validators can scan
them the same way.

Preferred order:

1. title
2. source surface or channel
3. feedback signal
4. interaction target or subject
5. response or disposition
6. linked evidence or external references

Preferred anchors:

- `Source`
- `Feedback Signal`
- `Relevance`
- `Response`
- `Disposition`

If a section is omitted, leave it out cleanly rather than renaming it for a
one-off use. Use close equivalents only when the artifact genuinely needs a
different label, and keep the meaning obvious in the first line.

## Recommended Fields

- `Current -> Why`
- `Current -> Summary`
- explicit source surface such as Reddit, GitHub, Discord, YouTube, or another
  named channel
- explicit source reference such as a URL, issue number, post id, or comment id
- explicit indication of whether the feedback is quoted or summarized
- explicit target or subject of the feedback when that is known
- explicit interaction or reply context when that matters
- explicit disposition such as open, acknowledged, deferred, incorporated, or
  rejected when that state is known

## File Naming Conventions

Artifacts using `tiinex.feedback.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<feedback-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2.trace.md`
- `001-2-reddit-comment.trace.md`
- `001-3-github-issue.trace.md`

Rules:

- keep the lineage label first
- use a short slug when it helps distinguish one feedback artifact from another
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.feedback.v1` when the artifact is primarily trying to:

- preserve interaction-oriented feedback in a trace-readable form
- keep comments, issues, reviews, replies, or other responses attached to
  current work
- let later traces refer to feedback as a durable readable artifact
- capture enough signal and interaction context that interpretation does not
  depend entirely on a live external platform

## What This Schema Is Not For

Do not use this schema for thin redirect artifacts, broad design threads, or
ordinary task execution notes.

It is not primarily for:

- pointer-only forwarding
- schema notes themselves
- generic task planning
- opaque runtime evidence dumps
- passively gathered signal whose interaction semantics do not matter

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Parent
  - Parent Schema: tiinex.signal.v1
  - Created At: 2026-05-28 22:30:03
  - Trace: tiinex.signal.v1.md
- Current
  - Current Schema: tiinex.feedback.v1
  - Created At: 2026-05-28 22:30:03
  - Summary: Reddit comment requesting clearer explanation of the parent-linking behavior.

---

# Reddit Feedback On Parent Linking

## Source

- Surface: Reddit
- Reference: https://reddit.example.invalid/comment/abc123

## Feedback Signal

- Type: quoted summary
- Signal: The parent-link explanation is hard to follow and should show the committed target more explicitly.

## Relevance

- About: schema-lineage readability
- Current Disposition: open
```

## Interpretation Notes

- one feedback artifact may preserve one feedback event or one tightly bounded
  feedback slice
- a feedback artifact should preserve enough source context that later traces
  can use it without guessing what was actually said
- a feedback artifact should also preserve enough interaction context that a
  reader can tell why this is feedback rather than generic observed signal
- if the artifact becomes mostly execution planning rather than preserved
  feedback signal, a task schema may be the better fit

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.signal.v1.md](tiinex.signal.v1.md)
  - Value: 9Jki6oB-WdgbxilF6XPjRl6aNMpA-JlqehPh9_VgMRI