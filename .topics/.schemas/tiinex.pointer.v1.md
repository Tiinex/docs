# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.continuation.v1.md](tiinex.continuation.v1.md)
- Current
  - Current Schema: [tiinex.pointer.v1](tiinex.pointer.v1.md)
  - Created At: 2026-05-28 20:37:20
  - Summary: Shared schema for pointer artifacts that redirect a reader toward a parent trace, origin target, or other continuity anchor.

---

# tiinex.pointer.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../rfc/rfc-editor-friendly/001-2-rfc-envelope.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/rfc/rfc-editor-friendly/001-2-rfc-envelope.trace.md)
  - [browse + git](https://github.com/Tiinex/docs/blob/d44f99cefd92c2bf2603127ee0dde5c9f951e505/.topics/rfc/rfc-editor-friendly/001-2-rfc-envelope.trace.md)

## Summary

This schema id names pointer artifacts whose main job is to redirect a reader
toward another continuity anchor rather than to carry a large body of their own.

It is intended for roots, handoff surfaces, relocation markers, or other thin
artifacts that primarily preserve where continuity should continue next.

## Required Body Expectations

Artifacts using `tiinex.pointer.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the artifact as a pointer or continuity redirect
- a short explanation of what the pointer anchors or forwards to

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.pointer.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Summary`
- `Current -> Origin` or equivalent locator signal when the pointer depends on
  an external or upstream target

## Required Pointer Semantics

Pointer artifacts using `tiinex.pointer.v1` should make it clear:

- what continuity target the reader should follow next
- whether that target is carried as a direct parent trace, an origin candidate,
  or another explicit continuity locator
- whether the pointer is acting as a root anchor, relocation marker, or thin
  forwarding artifact

Pointer artifacts should not pretend to be full continuity bodies when their
main purpose is simply to preserve the next readable continuity hop.

## Recommended Fields

- `Parent -> Trace` when the pointer forwards to a direct continuity parent
- `Current -> Summary`
- `Current -> Origin` when the pointer depends on an external or upstream
  continuity target

## File Naming Conventions

Artifacts using `tiinex.pointer.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<slug>.trace.md`

Examples:

- `001.trace.md`
- `001-root.trace.md`
- `001-upstream-anchor.trace.md`

Rules:

- keep the lineage label first
- use a short slug only when it helps distinguish multiple pointer artifacts
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.pointer.v1` when the artifact is primarily trying to:

- anchor a local topic space to an upstream or external trace
- preserve a next-hop continuity target in a thin readable form
- keep a continuity root lightweight without inventing a large body
- mark relocation or forwarding behavior explicitly

## What This Schema Is Not For

Do not use this schema for full topic documents, runtime evidence exports, or
archive carriers with their own packaging semantics.

It is not primarily for:

- hand-authored design threads
- runtime evidence bodies
- archive containers
- schema notes themselves

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.pointer.v1
  - Created At: 2026-05-28 03:21:34
  - Summary: Anchors the local docs RFC space to the latest upstream trace.
  - Origin:
    git://github.com/Tiinex/.github@12651d4ba629243f4177de6e22dc35a778a269c6:.topics/rfc/001-1-1-1.trace.md

---

# Pointer

This artifact anchors the local topic space to the latest upstream trace.
```

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- a pointer artifact may carry very little body beyond its envelope and one
  short explanation
- thinness is expected here; the point is to preserve where continuity should
  continue, not to restate the downstream artifact in full
- pointer artifacts are especially useful for roots, upstream anchors, and
  relocation markers

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.continuation.v1.md](tiinex.continuation.v1.md)
  - Value: vDk5fGFGqrH5ffKACjV1VbWONhyjmntwwQo1oSQIUkY