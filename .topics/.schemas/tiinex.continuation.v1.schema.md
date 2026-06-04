# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
- Current
  - Current Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Summary: Shared continuity-envelope schema layered on top of the base schema contract.

---

# tiinex.continuation.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
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
  `YYYY-MM-DD hh:mm:ss` UTC without milliseconds.

Timestamp-bearing envelope fields should not add timezone suffixes, local zone
names, or numeric offsets. UTC is the implied time basis for this shape.

When `Envelope Schema`, `Parent Schema`, or `Current Schema` points to a schema
artifact in another repository, and a usable git origin-backed target exists,
the reference should use that origin-backed URL rather than only a local
relative or absolute path.

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
- The `Parent` block is backward-only. It may name the immediate ancestor chain
  for the current artifact, but it should not point to child artifacts, planned
  descendants, or next steps.
- If a forward reference matters, keep it in the body of the current artifact
  instead of encoding it as ancestry in `Parent`.
- `Origin` should be treated as an ordered candidate list rather than one flat
  locator string.
- Origin candidate labels may be composite forms such as `browse + git`.
- Parent and current timestamps should use the same UTC time shape.
- Artifacts should not intentionally discard known ancestry or present a false
  parent chain when the real continuity relation is still available.
- Artifacts should also not use the continuity envelope to mislead a reader
  about where the current artifact came from, even when the schema note is not
  acting as a full policy layer.

## Ancestry Conduct

The continuity envelope should prefer preserving ancestry over cosmetically
simplifying it.

Current Tiinex practice should favor:

- keeping the real parent relation when it is known
- carrying enough origin or trace information that a reader can follow the
  lineage backward
- avoiding deliberate breaks, rewrites, or substitutions that make the lineage
  look cleaner at the cost of true ancestry

Continuity should also preserve a practical stability gradient across the
lineage.

Current Tiinex practice should prefer:

- treating the latest leaf as the most changeable part of the chain
- treating earlier parents as progressively more stable as the lineage extends
  backward
- adding a new leaf to carry new reasoning, decisions, or operational work
  rather than casually rewriting an older parent that already grounded later
  artifacts

This does not mean parent artifacts become immutable.

It means parent mutation should be rarer, more justified, and more obviously
recoverable than ordinary leaf evolution.

When an older parent must change, the reason should usually be continuity
repair, false ancestry correction, schema correction, or another bounded fix
rather than routine forward progress.

If lineage must be interrupted, simplified, or partially withheld, that should
be made explicit rather than presented as if the artifact had a different
history.

Forward-looking material is allowed, but it should live in body sections or in
explicit child artifacts. The envelope's ancestry fields are for the past of
the current artifact, not for its descendants.

## Current Block Rules

- `Current` is the present artifact summary, not a duplicate of the body.
- `Why` should explain why the artifact exists.
- `Summary` should act as a compact fallback description rather than a second
  full truth source.
- `Authors` is lightweight metadata, not part of the critical recovery chain.

## Footer Rules

Artifacts using this envelope should allow a relation-oriented footer.

The current baseline expects:

- a method-labeled validation entry when a parent trace exists

Footer integrity is relation-first. The baseline does not require a default
self-hash for every artifact.

Preferred for new artifacts:

- use the validation method itself as the left-hand label
- let the method decide which companion rows belong under that validation entry
- make the validated relation explicit inside the entry rather than hiding it in
  a fused field name

Recommended method-labeled form:

- `sha256-base64url-c14n-v1`
  - `Towards: [001.trace.md](https://example.invalid/repo/blob/commit/001.trace.md)`
  - `Value: <digest>`

For `sha256-base64url-c14n-v1`, the method means:

- hash the trace markdown referenced by `Towards`
- normalize newlines to `\n`
- trim trailing whitespace per line
- trim trailing blank lines at the end of the source
- exclude the final integrity line before hashing
- encode the `sha256` digest as `base64url`

When the validated trace has a usable browseable origin-backed target, `Towards`
should prefer a markdown link whose label is the trace filename.

Legacy compatibility:

- `Parent-Integrity` remains valid as a shorthand for the parent-directed
  integrity relation when older tooling or existing artifacts still use it

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

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

- sha256-base64url-c14n-v1
  - Towards: [001.trace.md](https://example.invalid/repo/blob/commit/001.trace.md)
  - Value: bjFEUCMaNITbyCVFSoJ6EVVsOLMfYIq6NDXSD9nreXw
```

## Non-Goals

This schema note does not define the full body semantics of every artifact that
may appear inside the envelope.

It only defines how the continuity envelope should be shaped and interpreted.

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
  - Value: Tx-dk2o9Y_K-b0PIRrvwgbIlc5LPW8AlHjqhH5s17_A