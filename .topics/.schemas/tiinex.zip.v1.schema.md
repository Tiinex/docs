# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.archive.v1](tiinex.archive.v1.schema.md)
  - Created At: 2026-05-28 20:32:58
  - Trace: [tiinex.archive.v1.schema.md](tiinex.archive.v1.schema.md)
- Current
  - Current Schema: [tiinex.zip.v1](tiinex.zip.v1.schema.md)
  - Created At: 2026-05-28 20:33:35
  - Summary: Shared schema for zip-based archive carriers that preserve minimum traceable continuity semantics.

---

# tiinex.zip.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.schema.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names zip-based archive carriers that specialize the more
general archive continuity contract.

It exists so `.trace.zip` and similar zip-borne carriers can describe what is
visible before opening, what requires zip access, and what may remain
recoverable even when the payload is encrypted or partially unreadable.

## Required Body Expectations

Artifacts using `tiinex.zip.v1` should satisfy the archive base contract and
also make the zip-specific transport surface explicit.

The body should include, at minimum:

- the carrier path or filename for the zip
- whether the zip is readable, encrypted, redacted, or otherwise restricted
- how an entry trace or manifest should be found
- what continuity-relevant metadata is available outside the payload

## Recommended Body Sections

The exact section names may vary, but zip schema documents should usually
provide some combination of:

- carrier path
- manifest expectations
- entry trace selection
- encryption and visibility handling
- repair and degradation behavior

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.zip.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Summary`
- parent signal when the zip schema itself evolves from another schema note

## Required Zip Semantics

Zip carriers using `tiinex.zip.v1` should make it clear:

- whether the zip itself is the only continuity carrier or whether a readable
  companion trace surface remains outside the payload
- how a runtime or reader should discover the entry trace or manifest inside
  the zip
- what continuity metadata, if any, remains visible before decryption or zip
  access
- whether missing readability is caused by encryption, redaction, corruption,
  or simple absence

If a zip payload is encrypted, continuity metadata needed for repair should not
be assumed readable unless a companion readable surface exposes it explicitly.

## File Naming Conventions

Artifacts using `tiinex.zip.v1` should normally use the archived node basename
and the `.trace.zip` suffix.

Recommended form:

- `<lineage>.trace.zip`
- `<lineage>-<slug>.trace.zip`

Examples:

- `001.trace.zip`
- `001-1-1.trace.zip`
- `001-1-1-branch.trace.zip`

Rules:

- keep the lineage label first
- preserve the archived node basename when possible
- use an optional slug only when it improves human discrimination
- keep the `.trace.zip` suffix stable

## What This Schema Is For

Use `tiinex.zip.v1` when the artifact is primarily trying to:

- carry continuity through a zip container
- define minimum traceable behavior for `.trace.zip` carriers
- support repair across visible, hidden, encrypted, or partially readable zip
  payloads
- specialize the archive contract for one concrete container format

## What This Schema Is Not For

Do not use this schema for non-zip archive formats, ordinary readable
`.trace.md` artifacts, or runtime evidence files.

It is not primarily for:

- generic archive rules that belong in `tiinex.archive.v1`
- hand-authored topic continuity
- raw runtime traces
- schema notes unrelated to zip carriers

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.zip.v1
  - Created At: 2026-05-28 20:33:35
  - Summary: Zip carrier for the 001-1-1 lineage slice.

---

# Zip Carrier

## Carrier Path

- File: 001-1-1.trace.zip
- Visibility: encrypted
- Entry Trace: 001-1-1.trace.md
- Companion Metadata: 001-1-1.trace.md remains readable outside the payload
```

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- zip carriers may keep readable continuity outside the payload, inside the
  payload, or across both surfaces
- encrypted zip payloads should not erase repair semantics; they should make
  visibility limits explicit instead
- if entry selection depends on a manifest, the manifest location should be
  discoverable without guesswork

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.archive.v1.schema.md](tiinex.archive.v1.schema.md)
  - Value: JDE32nLLWMWamVnOmN8JKIwSbQyhjwqaCoSXDuy6qZw