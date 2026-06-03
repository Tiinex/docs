# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.machine.runtime.v1](tiinex.machine.runtime.v1.schema.md)
  - Created At: 2026-05-29 23:21:06
  - Trace: [tiinex.machine.runtime.v1.schema.md](tiinex.machine.runtime.v1.schema.md)
- Current
  - Current Schema: [tiinex.ai.runtime.v1](tiinex.ai.runtime.v1.schema.md)
  - Created At: 2026-05-29 23:21:06
  - Summary: Shared schema for AI-oriented runtime artifacts layered on top of the broader machine runtime contract.

---

# tiinex.ai.runtime.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.schema.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/f6df89beabd41572ab334d45b8238e9866ac10ba/.topics/trace-format/001.trace.md)

## Summary

This schema id names AI-oriented runtime artifacts that add model, role,
request, or tool-use semantics above the broader machine runtime contract.

## Required Body Expectations

Artifacts using `tiinex.ai.runtime.v1` should satisfy the broader
`tiinex.machine.runtime.v1` contract and should additionally make the
AI-facing runtime shape readable.

The body should include, at minimum:

- some signal of the AI runtime identity such as provider, model, role, or lane
  when that signal is known
- a readable request, task, or prompt framing summary when that materially
  affects interpretation
- at least one AI-shaped outcome surface such as final output, tool result, or
  unresolved state

## Recommended Body Sections

- metadata
- request or task framing
- model, provider, or role information
- tool use or step ledger
- final output or outcome
- technical details

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.ai.runtime.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Summary`
- parent signal when the runtime artifact continues another trace

## Required AI Runtime Semantics

AI runtime artifacts using `tiinex.ai.runtime.v1` should make it clear:

- what AI-facing runtime identity is known
- what request, prompt, or task framing materially shaped the run
- what AI-shaped output or unresolved state a later reader should carry forward

## Recommended Fields

- explicit provider, model, role, or lane when known
- explicit request or task framing summary
- explicit tool use or step ledger when relevant
- explicit final output or unresolved state

## File Naming Conventions

Artifacts using `tiinex.ai.runtime.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<ai-runtime-stem>.trace.md`

Examples:

- `001-sigma.trace.md`
- `001-1-agent.trace.md`
- `001-1-model-run.trace.md`

## What This Schema Is For

Use `tiinex.ai.runtime.v1` when the artifact is primarily trying to:

- preserve AI-runtime-observed evidence
- capture an agent-lane, model-shaped, or tool-using execution result
- keep AI-specific runtime semantics attached to a broader machine runtime
  artifact

## What This Schema Is Not For

It is not primarily for:

- generic machine-runtime artifacts that do not need AI semantics
- hand-authored design threads
- free prose without bounded runtime state
- current Tiinex-runtime-specific exports when a narrower child schema exists

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- AI runtime should stay AI-specific without pretending every AI runtime looks
  exactly like current Tiinex runtime surfaces
- narrower child schemas may add project-specific semantics above this layer

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.ai.runtime.v1
  - Created At: 2026-05-29 23:21:06
  - Summary: AI runtime trace for one agent-lane export.

---

# Agent Lane Export

## Metadata

- Provider: ExampleAI
- Model: example-model
- Role: Analyst

## Outcome

- Final Summary: The run returned one unresolved recommendation.
```

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.machine.runtime.v1.schema.md](tiinex.machine.runtime.v1.schema.md)
  - Value: DA05k4rYCXYCh2c06MFB845xEYEYdY4T4-fMkolA49A