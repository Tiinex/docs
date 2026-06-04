# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.runtime.v1](tiinex.runtime.v1.schema.md)
  - Created At: 2026-05-29 23:21:06
  - Trace: [tiinex.runtime.v1.schema.md](tiinex.runtime.v1.schema.md)
- Current
  - Current Schema: [tiinex.machine.runtime.v1](tiinex.machine.runtime.v1.schema.md)
  - Created At: 2026-05-29 23:21:06
  - Summary: Shared schema for machine-produced runtime artifacts layered on top of the broader runtime contract.

---

# tiinex.machine.runtime.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/f6df89beabd41572ab334d45b8238e9866ac10ba/.topics/trace-format/001.trace.md)

## Summary

This schema id names machine-produced runtime artifacts that add execution,
producer, or emitted-artifact semantics above the broader runtime base.

## Required Body Expectations

Artifacts using `tiinex.machine.runtime.v1` should satisfy the broader
`tiinex.runtime.v1` contract and should additionally make the machine runtime
shape readable.

The body should include, at minimum:

- some signal of the producing system, process, or executable surface
- some machine-runtime-specific status such as completion, failure, or emitted
  export state when that is known
- enough technical detail that a later reader can tell what the machine run did

## Recommended Body Sections

- metadata
- producer or execution surface
- status or exit state
- outputs or emitted artifacts
- technical details

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.machine.runtime.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Summary`
- parent signal when the runtime artifact continues another trace

## Required Machine Runtime Semantics

Machine runtime artifacts using `tiinex.machine.runtime.v1` should make it
clear:

- what produced the runtime artifact
- whether the machine run completed, failed, or remains in progress
- what output, export, or emitted side effect the reader should care about

## Recommended Fields

- explicit producer or execution surface
- explicit status or exit state
- explicit emitted artifacts or outputs
- explicit technical details when they materially affect interpretation

## File Naming Conventions

Artifacts using `tiinex.machine.runtime.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<machine-runtime-stem>.trace.md`

Examples:

- `001-runtime.trace.md`
- `001-export.trace.md`
- `001-1-validator.trace.md`

## What This Schema Is For

Use `tiinex.machine.runtime.v1` when the artifact is primarily trying to:

- preserve a machine-produced runtime export
- capture execution state, emitted artifacts, or technical runtime details
- act as the broader machine-runtime base for narrower child schemas such as AI
  runtime

## What This Schema Is Not For

It is not primarily for:

- human-session artifacts
- hand-authored design threads
- free prose without runtime state
- AI-specific runtime semantics when a narrower child schema exists

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- machine runtime should stay broad enough for non-AI execution surfaces
- child schemas may add AI- or domain-specific semantics above this layer

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.machine.runtime.v1
  - Created At: 2026-05-29 23:21:06
  - Summary: Machine runtime export for one validator run.

---

# Validator Run

## Metadata

- Producer: tiinex.validate
- Status: completed

## Outcome

- Emitted Artifact: validation-report.json
```

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.runtime.v1.schema.md](tiinex.runtime.v1.schema.md)
  - Value: 9uHxstqGKHNDbQFInQ8POyTsxptaoNyXxqti7yk6u1A