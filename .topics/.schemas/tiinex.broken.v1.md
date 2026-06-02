# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.continuation.v1.md](tiinex.continuation.v1.md)
- Current
  - Current Schema: [tiinex.broken.v1](tiinex.broken.v1.md)
  - Created At: 2026-05-28 18:11:57
  - Summary: Intentional broken placeholder schema used to make mismatch or invalid-continuation discrimination explicit.

---

# tiinex.broken.v1

- Status: intentional mismatch placeholder
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/aa33725304f5bef2fbfb9ed0b46bb6c1fe71fa01/.topics/trace-format/001.trace.md)

## Summary

This schema id is a deliberate broken placeholder used to show how a reader can
quickly discriminate that a continuation edge or artifact classification is not
currently valid.

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- this file exists to keep the schema link chain intact even when the schema id
  is intentionally broken for testing, demonstration, or explicit mismatch
  handling
- readers should treat the broken state as meaningful signal rather than as a
  valid expected schema for the referenced parent or artifact

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.continuation.v1.md](tiinex.continuation.v1.md)
  - Value: g1FgFUTWiq5FD5l16K38s13BQWYyAxLbQwgpIHxm3jo