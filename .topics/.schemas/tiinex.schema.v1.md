# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Current
  - Current Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Summary: Shared schema-definition contract for Tiinex schema notes.

---

# tiinex.schema.v1

- Status: provisional shared schema note
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/aa33725304f5bef2fbfb9ed0b46bb6c1fe71fa01/.topics/trace-format/001.trace.md)

## Summary

This schema id defines how shared human-readable Tiinex schema artifacts should
be written.

It exists to stop schema notes from becoming too generic, too improvisational,
or too vague about expected fields and interpretation rules.

## Required Structure

Artifacts using `tiinex.schema.v1` should include:

- a title naming the schema id being defined
- `Status`
- `Origin`
- `Summary`
- one or more sections that make the schema operational rather than only
  descriptive

## Required Sections

- `## Summary`
- at least one contract-bearing section such as:
  - `## Required Structure`
  - `## Required Fields`
  - `## Required Body Expectations`
  - `## Envelope Expectations`

## Recommended Sections

- `## Recommended Fields`
- `## Optional Fields`
- `## Interpretation Notes`
- `## Minimal Example`
- `## What This Schema Is For`
- `## What This Schema Is Not For`

## Required Semantics

Schema artifacts should make it clear:

- what the schema names
- what fields or structures are expected
- what is required versus recommended versus optional
- what the schema is not intended to cover

The goal is to reduce improvisation by giving a reader enough structure to say
whether an artifact plausibly follows the schema.

When information is intentionally withheld, schema-bearing artifacts should not
silently omit or blur that fact.

Redacted values or redacted information should be marked as `[Redacted]` and
should include a valid reason when that reason can be disclosed safely.

## Origin Rules

Schema artifacts should keep an `Origin` block so the reader can follow the
design lineage back to the topic or artifact that currently grounds the schema
note.

Origin candidates may be rendered as a compact list and may use composite
labels such as `browse + git`.

If the grounding artifact or primary schema home lives in another repository,
the `Origin` block should include at least one committed cross-repo candidate
that a remote reader can resolve without access to the local filesystem.

For current Tiinex practice, that normally means a `browse + git` candidate.

Cross-repo origin should not rely only on a local absolute path or a same-host
relative path, because those do not travel well across repositories or
machines.

## Schema Reference Rules

If a schema-bearing field points to a schema artifact in another repository,
and the current branch has a usable git origin for that target repository,
the reference should use an origin-backed URL rather than only a local
relative or absolute path.

This applies to fields such as:

- `Envelope Schema`
- `Parent Schema`
- `Current Schema`
- `Schema Definition`

Local relative or absolute schema paths are acceptable when the target schema
is in the same repository, or when no usable git origin-backed target exists.

## Timestamp Rules

When schema artifacts describe or exemplify `Created At` fields carried through
the continuity envelope, they should use the UTC timestamp shape inherited from
`tiinex.continuation.v1`.

That means `YYYY-MM-DD hh:mm:ss` with UTC implied, and without timezone
suffixes, local zone names, or numeric offsets.

Later schema notes do not need to restate that rule in full unless they add a
genuine local specialization.

## Schema Lineage Validation Rules

An artifact should not be treated as validated only because its immediate
schema id looks plausible in isolation.

Validation should read the schema lineage backward through the relevant schema
links until the chain reaches its root schema note, or until the next step is
no longer a schema artifact and the validator intentionally stops there.

For current Tiinex practice, that usually means checking inherited constraints
from earlier schema notes such as the continuity envelope contract rather than
requiring every later schema note to restate those rules verbatim.

## File Naming Conventions

Schema artifacts should normally use the schema id itself as the filename stem.

Recommended shared form:

- `<schema-id>.md`

Examples:

- `tiinex.schema.v1.md`
- `tiinex.continuation.v1.md`
- `tiinex.topic.v1.md`

This keeps the filename directly aligned with the schema identity a reader sees
inside the document.

Avoid introducing extra decorative prefixes or slugs unless a separate schema
explicitly requires them.

## Minimal Example

```md
# tiinex.example.v1

- Status: provisional shared schema note
- Origin:
  - [relative](../trace-format/001.trace.md)
  - [browse + git](https://example.invalid/repo/blob/commit/.topics/trace-format/001.trace.md)

## Summary

This schema id names an example schema used for demonstration.

## Required Structure

Artifacts using `tiinex.example.v1` should include A, B, and C.

## Recommended Fields

- X
- Y

## Interpretation Notes

- readers should treat this as an example-only schema
```

## Non-Goals

This schema does not attempt to define every possible schema-authoring style.

It defines a practical shared best practice for schema artifacts in the current
`.topics` schema space.