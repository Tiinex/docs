# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.schema.v1.md](tiinex.schema.v1.md)
- Current
  - Current Schema: [tiinex.decision.v1](tiinex.decision.v1.md)
  - Created At: 2026-05-28 22:50:17
  - Summary: Shared schema for decision-bearing artifacts that state what has been decided, on what basis, and what now follows.

---

# tiinex.decision.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names decision-oriented artifacts whose main job is to record
what has been decided in a way that remains usable to later traces, readers,
and tools.

It exists so accepted, rejected, deferred, or superseded decisions can be
carried as first-class readable artifacts rather than being buried inside topic
threads, task notes, or reduction summaries.

## Required Body Expectations

Artifacts using `tiinex.decision.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the decision artifact or decision slice
- the decision itself in a form that a later reader can act on
- some indication of the decision state such as accepted, rejected, deferred,
  or superseded
- some explanation of what the decision is about

## Recommended Body Sections

The exact section names may vary, but decision documents should usually provide
some combination of:

- decision statement
- status or state
- basis or rationale
- alternatives considered
- consequences or downstream effects
- supersession or review conditions

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.decision.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the decision continues or specializes another trace

## Required Decision Semantics

Decision artifacts using `tiinex.decision.v1` should make it clear:

- what was decided
- what the decision state currently is
- what artifact, task, topic, or question the decision applies to
- what a later reader may now treat as the operative direction

If a decision is provisional, reversible, or pending later review, the artifact
should say so explicitly rather than letting a reader infer finality from terse
wording.

Decision artifacts should not pretend to be generic discussion notes when the
main value is the landed outcome itself.

## Recommended Fields

- `Current -> Why`
- `Current -> Summary`
- explicit decision state
- explicit subject or affected scope
- explicit rationale or decision basis
- explicit consequence or carry-forward impact
- explicit superseded-by or review conditions when those are known

## File Naming Conventions

Artifacts using `tiinex.decision.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<decision-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2.trace.md`
- `001-2-parent-link-decision.trace.md`
- `001-3-schema-split.trace.md`

Rules:

- keep the lineage label first
- use a short slug when it helps distinguish one decision artifact from another
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.decision.v1` when the artifact is primarily trying to:

- preserve a landed outcome
- tell later readers what now governs a question or branch of work
- record that one option was accepted, rejected, deferred, or superseded
- separate decision state from surrounding discussion or planning

## What This Schema Is Not For

Do not use this schema for broad exploration, mere task execution, or passive
signal capture.

It is not primarily for:

- long-form design discussion without a landed outcome
- generic task planning
- pointer-only forwarding
- opaque runtime evidence dumps
- passively gathered external signal

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-05-28 22:50:17
  - Summary: Decision to keep task recursion instead of adding a separate node schema.

---

# Task Recursion Decision

## Decision

- State: accepted
- Decision: task recursion remains the preferred structure for now

## Basis

- a separate node layer would add category complexity without enough immediate value

## Consequences

- future task artifacts may carry subtasks recursively
```

## Interpretation Notes

- a decision artifact should optimize for what now governs, not for replaying
  every branch of prior discussion
- if the artifact remains mostly unsettled reasoning, a topic schema may be the
  better fit
- if the artifact is mostly about work to be done after the decision, a task
  schema may be the better fit for that follow-on work

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.schema.v1.md](tiinex.schema.v1.md)
  - Value: B3v5vJQ-G4dnOt9WPHdzNiBbU77wWJQNokGKqLrjgxY