# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.schema.v1.md](tiinex.schema.v1.md)
- Current
  - Current Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Summary: Shared continuity-envelope schema layered on top of the base schema contract.

---

# tiinex.continuation.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/aa33725304f5bef2fbfb9ed0b46bb6c1fe71fa01/.topics/trace-format/001.trace.md)

## Summary

This schema id names the continuity-envelope shape used to orient a reader
before they consume the main body.

It is not the schema for the entire artifact body. It is the schema for the
continuity context envelope that sits above the body and helps a reader or
runtime decide whether to keep reading.

## Required Structure

Artifacts using `tiinex.continuation.v1` should expose a `# Continuity Context`
section near the top of the document.

The envelope should support this discrimination-first structure:

- `Envelope Schema`
- optional `Parent` block when parent signal exists
- `Current` block

### Required Fields

- `Envelope Schema`
- `Current`
- `Current -> Current Schema`
- `Current -> Created At`

### Required Field Semantics

- `Envelope Schema` identifies the envelope-reading contract itself.
- `Current -> Current Schema` identifies the current artifact schema carried by
  the envelope.
- `Current -> Created At` records artifact creation time in
  `YYYY-MM-DD hh:mm:ss` without milliseconds.

## Recommended Fields

- `Parent -> Parent Schema`
- `Parent -> Created At`
- `Parent -> Trace`
- `Parent -> Origin`
- `Current -> Why`
- `Current -> Summary`

These fields are not universally mandatory, but they are strongly recommended
when the corresponding signal is known.

## Optional Fields

- `Current -> Authors`
- additional driver-compatible origin candidates under `Parent -> Origin`
- future reference groups with timestamps and integrity values

## Parent Block Rules

- Omit the entire `Parent` block when no parent signal exists.
- If the `Parent` block exists, `Trace` should remain the direct continuity
  relation.
- `Origin` should be treated as an ordered candidate list rather than one flat
  locator string.
- Origin candidate labels may be composite forms such as `browse + git`.
- Parent and current timestamps should use the same time shape.

## Current Block Rules

- `Current` is the present artifact summary, not a duplicate of the body.
- `Why` should explain why the artifact exists.
- `Summary` should act as a compact fallback description rather than a second
  full truth source.
- `Authors` is lightweight metadata, not part of the critical recovery chain.

## Footer Rules

Artifacts using this envelope should allow a relation-oriented footer.

The current baseline expects:

- `Parent-Integrity` when a parent trace exists

Footer integrity is relation-first. The baseline does not require a default
self-hash for every artifact.

## File Naming Conventions

Artifacts using `tiinex.continuation.v1` should normally use lineage-first
trace filenames.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2-rfc-envelope.trace.md`
- `001-1-grounding.trace.md`

Rules:

- keep the lineage label first so parent-child ordering stays legible
- use an optional slug only when it improves human discrimination
- keep the `.trace.md` suffix stable
- do not encode the full schema id into every continuation filename when the
  surrounding topic space already carries that information

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Parent
  - Parent Schema: tiinex.continuation.v1
  - Created At: 2026-05-28 16:46:58
  - Trace: [001.trace.md](../001.trace.md)
  - Origin:
    - [relative](../001.trace.md)
    - [browse + git](https://example.invalid/repo/blob/commit/001.trace.md)
- Current
  - Current Schema: tiinex.topic.v1
  - Created At: 2026-05-28 16:54:32
  - Why: Carries the current work forward.
  - Summary: Topic continuation for the current redesign.

---

# Continuity Integrity

- Parent-Integrity: sha256:...
```

## Non-Goals

This schema note does not define the full body semantics of every artifact that
may appear inside the envelope.

It only defines how the continuity envelope should be shaped and interpreted.

---

# Continuity Integrity

- Parent-Integrity: B6SW2AYgDzJMyO80C2o6GXOYVTO9pR2kQFfws8VsCEs