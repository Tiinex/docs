# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
- Current
  - Current Schema: [tiinex.signal.v1](tiinex.signal.v1.schema.md)
  - Created At: 2026-05-28 22:30:03
  - Summary: Shared schema for externally or indirectly gathered signal artifacts that preserve useful observed signal in a trace-readable form.

---

# tiinex.signal.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names signal-oriented artifacts whose main job is to preserve
relevant observed signal in a way that remains useful to later traces, readers,
and tools.

It exists so comments, issues, reviews, mentions, or other externally gathered
signals can be carried as first-class readable artifacts rather than reduced to
thin pointers or left stranded on external platforms.

## Required Body Expectations

Artifacts using `tiinex.signal.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the signal artifact or signal slice
- the source surface or channel where the signal was gathered
- the signal itself as a quote, bounded summary, or both
- some explanation of what trace, artifact, topic, or work item the signal
  bears on

## Recommended Body Sections

The exact section names may vary, but signal documents should usually provide
some combination of:

- source or provenance
- signal
- representation method
- interpretation
- relevance to current work
- disposition or follow-up relevance
- linked evidence or external references

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.signal.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the signal artifact continues or specializes another trace

## Required Signal Semantics

Signal artifacts using `tiinex.signal.v1` should make it clear:

- where the signal came from
- whether the carried signal is a direct quote, a normalized summary, an
  excerpt, or a mixed representation
- what artifact, trace, task, or topic the signal is about
- whether the signal was passively observed, collected, or otherwise gathered
  rather than treated as a thin forward link

If the original signal lives on an external platform, the artifact should
preserve enough readable signal that it remains useful even if the external page
later changes, disappears, or becomes inconvenient to access.

Signal artifacts should not pretend to be mere forwarding pointers when the
main value is actually the preserved signal itself.

## Validation-Friendly Shape

Keep signal artifacts in a stable order so humans and validators can scan them
the same way.

Preferred order:

1. title
2. source surface or channel
3. signal
4. interpretation or relevance
5. disposition or follow-up relevance
6. linked evidence or external references

Preferred anchors:

- `Source`
- `Signal`
- `Relevance`
- `Disposition`
- `Follow-up`

If a section is omitted, leave it out cleanly rather than renaming it for a
one-off use. Use close equivalents only when the artifact genuinely needs a
different label, and keep the meaning obvious in the first line.

## Recommended Fields

- `Current -> Why`
- `Current -> Summary`
- explicit source surface such as Reddit, GitHub, Discord, YouTube, or another
  named channel
- explicit source reference such as a URL, issue number, post id, or comment id
- explicit indication of whether the signal is quoted, excerpted, or summarized
- explicit note of how the signal was gathered when that matters to later
  interpretation
- explicit disposition when the current work already knows whether the signal is
  open, acknowledged, deferred, incorporated, or rejected

## File Naming Conventions

Artifacts using `tiinex.signal.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<signal-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2.trace.md`
- `001-2-reddit-signal.trace.md`
- `001-3-github-issue.trace.md`

Rules:

- keep the lineage label first
- use a short slug when it helps distinguish one signal artifact from another
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.signal.v1` when the artifact is primarily trying to:

- preserve externally or indirectly gathered signal in a trace-readable form
- keep comments, issues, reviews, mentions, or other observed signals attached
  to current work
- let later traces refer to the gathered signal as a durable readable artifact
- capture enough signal that interpretation does not depend entirely on a live
  external platform

## What This Schema Is Not For

Do not use this schema for thin redirect artifacts, broad design threads,
ordinary task execution notes, or interaction-specific feedback when the
interaction semantics matter.

It is not primarily for:

- pointer-only forwarding
- schema notes themselves
- generic task planning
- opaque runtime evidence dumps
- multi-turn feedback loops whose interaction semantics deserve a narrower
  specialization

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.signal.v1
  - Created At: 2026-05-28 22:30:03
  - Summary: GitHub issue reporting confusion about the parent-linking behavior.

---

# GitHub Signal On Parent Linking

## Source

- Surface: GitHub
- Reference: https://github.example.invalid/issues/42

## Signal

- Type: quoted summary
- Signal: The parent-link explanation is hard to follow and should show the committed target more explicitly.

## Relevance

- About: schema-lineage readability
- Current Disposition: open
```

## Interpretation Notes

- one signal artifact may preserve one signal event or one tightly bounded
  signal slice
- a signal artifact should preserve enough source context that later traces can
  use it without guessing what was actually said
- if the artifact becomes mostly action planning rather than preserved signal, a
  task schema may be the better fit

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
  - Value: bnJAxnpWclzbm1xcxqD44e-Odf3XV5VyUbbu8Hh6__8