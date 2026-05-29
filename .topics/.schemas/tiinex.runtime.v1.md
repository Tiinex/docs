# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.schema.v1.md](tiinex.schema.v1.md)
- Current
  - Current Schema: [tiinex.runtime.v1](tiinex.runtime.v1.md)
  - Created At: 2026-05-29 23:21:06
  - Summary: Shared schema for bounded runtime artifacts that preserve observed runs, sessions, or process state in a readable form.

---

# tiinex.runtime.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/f6df89beabd41572ab334d45b8238e9866ac10ba/.topics/trace-format/001.trace.md)

## Summary

This schema id names bounded runtime artifacts whose main job is to preserve an
observed run, session, or process state in a readable trace form.

It exists so runtime-shaped work can be carried without forcing every runtime
artifact into either free prose or a machine-only dump.

## Required Body Expectations

Artifacts using `tiinex.runtime.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the runtime artifact
- some signal of runtime identity, subject, or run instance
- some signal of actor, producer, or runtime kind
- some signal of start, finish, or current status
- some signal of outcome, current state, or emitted result

## Recommended Body Sections

The exact section names may vary, but runtime documents should usually provide
some combination of:

- metadata
- actor or producer
- status or lifecycle
- outcome or current state
- emitted artifacts or consequences
- technical details

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.runtime.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Summary`
- parent signal when the runtime artifact continues another trace

## Required Runtime Semantics

Runtime artifacts using `tiinex.runtime.v1` should make it clear:

- that the artifact is about one bounded observed run, session, or process
- what or who performed that runtime when that is known
- whether the runtime is completed, failed, interrupted, ongoing, or otherwise
  materially unfinished
- what outcome, state, or emitted effect a later reader should treat as the
  current read

If an artifact cannot plausibly answer those questions, it is usually not a
runtime artifact.

## Recommended Fields

- `Current -> Summary`
- explicit runtime identity or subject
- explicit actor or producer kind
- explicit status or lifecycle state
- explicit outcome or current state
- explicit emitted artifacts when they exist

## File Naming Conventions

Artifacts using `tiinex.runtime.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<runtime-stem>.trace.md`

Examples:

- `001.trace.md`
- `001-runtime.trace.md`
- `001-1-session.trace.md`

Rules:

- keep the lineage label first
- use a short runtime stem only when it improves human discrimination
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.runtime.v1` when the artifact is primarily trying to:

- preserve a bounded observed run or session
- describe current or completed runtime state in readable form
- act as a base contract for more specific human, machine, or other runtime
  specializations

## What This Schema Is Not For

Do not use this schema for ordinary topic notes, generic task planning, or free
reflection.

It is not primarily for:

- hand-authored design threads
- pointer-only artifacts
- shared schema notes
- narrative journaling without a bounded runtime

## Interpretation Notes

- runtime does not mean every event over time
- runtime here means one bounded observed run, session, or process artifact
- child schemas may specialize this contract for human or machine runtime
  without weakening the base questions above

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.runtime.v1
  - Created At: 2026-05-29 23:21:06
  - Summary: Runtime record for one bounded validation session.

---

# Validation Session Runtime

## Metadata

- Run Id: validation-2026-05-29-01
- Actor Kind: machine
- Status: completed

## Outcome

- Result: one validation report artifact was emitted
```

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.schema.v1.md](tiinex.schema.v1.md)
  - Value: vn_2yYmkY1ePZ-U_9oLGuA83l2zcOBI8qZP4Z4gbXcg