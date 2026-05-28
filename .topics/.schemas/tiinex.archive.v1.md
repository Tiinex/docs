# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.schema.v1.md](tiinex.schema.v1.md)
- Current
  - Current Schema: [tiinex.archive.v1](tiinex.archive.v1.md)
  - Created At: 2026-05-28 20:32:58
  - Summary: Shared schema for archive-backed continuity carriers that preserve traceable lineage through packaging surfaces.

---

# tiinex.archive.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names archive-backed continuity carriers that package one or
more trace artifacts without erasing lineage semantics.

It exists so archive transport, packaging scope, and repair-relevant metadata
can be described explicitly instead of being inferred loosely from filenames or
container behavior.

## Required Body Expectations

Artifacts using `tiinex.archive.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the archive carrier
- the archive format or carrier kind being described
- the packaging scope for the archived lineage slice
- the entry or root trace the archive is meant to expose
- enough repair-relevant metadata to understand what continuity was preserved,
  degraded, redacted, or externalized

## Recommended Body Sections

The exact section names may vary, but archive schema documents should usually
provide some combination of:

- packaging scope
- entry trace or root trace
- parent carry-through expectations
- visibility, redaction, or encryption handling
- repair and degradation semantics

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.archive.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Summary`
- parent signal when the archive schema itself evolves from another schema note

## Required Archive Semantics

Archive carriers using `tiinex.archive.v1` should make it clear:

- whether the archive is a replacement carrier, export copy, or another
  transport mode
- what lineage scope the archive covers
- what trace should be treated as the entry or root reading target
- whether parent continuity remains directly readable, degraded, or delegated to
  companion metadata
- whether any continuity-relevant signal was redacted, encrypted, or omitted

Archive carriers should not pretend that packaged continuity was fully readable
unless the relevant trace or carrier metadata was actually available.

## File Naming Conventions

Artifacts using `tiinex.archive.v1` should normally follow the basename of the
node they archive and use an archive-specific carrier suffix.

Recommended form:

- `<lineage>.trace.<carrier>`
- `<lineage>-<slug>.trace.<carrier>`

Examples:

- `001.trace.zip`
- `001-1-1.trace.zip`
- `001-archive.trace.tar`

Rules:

- keep the lineage label first
- preserve the archived node basename when the archive replaces or carries that
  node
- let carrier-specific subtype schemas define additional suffix rules

## What This Schema Is For

Use `tiinex.archive.v1` when the artifact is primarily trying to:

- carry traceable continuity through an archive container
- preserve lineage signal while packaging or moving a trace slice
- expose repair-relevant metadata for archived continuity
- define minimum traceable behavior for archive carriers independent of one
  concrete archive format

## What This Schema Is Not For

Do not use this schema for ordinary readable `.trace.md` topic documents,
runtime evidence files, or schema notes that are not archive carriers.

It is not primarily for:

- hand-authored topic continuity
- runtime evidence exports
- pointer-only documents unless they specifically act as archive carriers
- one archive format's container-specific behavior when a subtype schema can
  carry that instead

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.archive.v1
  - Created At: 2026-05-28 20:32:58
  - Summary: Archive carrier for the 001-1-1 lineage slice.

---

# Archive Carrier

## Packaging Scope

- Mode: replacement
- Scope: partial branch
- Entry Trace: 001-1-1.trace.md
- Carrier Path: 001-1-1.trace.zip
```

## Interpretation Notes

- archive carriers may preserve continuity directly, or through a companion
  trace surface that remains readable outside the payload
- repair logic should treat packaging scope and visibility state as first-class
  signal, not as guessed side effects
- subtype schemas such as zip should narrow the container-specific behavior

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.schema.v1.md](tiinex.schema.v1.md)
  - Value: IB0etpEst9JWS3BFhgxylzW76uPcR8kXWLpeC7RXyu4