# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.continuation.v1.schema.md](tiinex.continuation.v1.schema.md)
- Current
  - Current Schema: [tiinex.encrypted.v1](tiinex.encrypted.v1.schema.md)
  - Created At: 2026-05-30 00:00:00
  - Summary: Shared base schema for readable continuity shells that describe an encrypted or otherwise directly unreadable payload.

---

# tiinex.encrypted.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.schema.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/tools/validator/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/tools/validator/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/main/.topics/tools/validator/001.trace.md)

## Summary

This schema id names a readable continuity shell for an encrypted payload.

It is intended for artifacts where the payload itself may be encrypted,
unreadable, or intentionally hidden, but a thin outer layer should still carry
enough continuity signal that a human or runtime can reason about what the
payload is, why it exists, and what kind of protection or access barrier is in
play.

## Required Body Expectations

Artifacts using `tiinex.encrypted.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the artifact as an encrypted payload or encrypted carrier
- a short explanation of what payload the shell refers to
- enough visible metadata that a reader can distinguish the payload from an
  ordinary missing file or broken artifact

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.encrypted.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Summary`
- parent signal when the encrypted shell was derived from another continuity
  artifact

## Required Encrypted Semantics

Artifacts using `tiinex.encrypted.v1` should make it clear:

- that a payload exists even when the payload body itself is not directly
  readable
- whether the unreadability is expected rather than accidental
- what visible continuity signal remains outside the encrypted layer
- whether a readable companion artifact, manifest, pointer, or archive metadata
  still exists outside the encrypted layer

Encrypted artifacts should not present encryption, redaction, or access
restriction as if the payload were simply absent.

## Optional Fields

Artifacts using `tiinex.encrypted.v1` may include these fields when the signal
is known and disclosable:

- `Reason`
- `Encryption`

### Optional Field Semantics

- `Reason` explains why the encrypted layer exists or why the payload is being
  carried in this protected form.
- `Encryption` identifies the protection state, encryption scheme, or other
  human-meaningful encryption descriptor without requiring the outer shell to
  reveal the protected content itself.

These fields are optional because some payloads will need to hide one or both
signals, but when they are present they should be treated as first-class
explanatory metadata rather than as freeform decoration.

## Recommended Body Sections

The exact section names may vary, but encrypted artifacts should usually
provide some combination of:

- payload identity or carrier path
- visibility or access state
- reason for protection
- encryption description
- readable companion metadata
- repair or recovery notes

## What This Schema Is For

Use `tiinex.encrypted.v1` when the artifact is primarily trying to:

- preserve continuity around a payload that is encrypted or otherwise not
  directly readable
- make encryption or protection state explicit instead of leaving it implicit
- expose a thin readable shell above an inaccessible payload
- provide a base schema that more specific encrypted carrier formats can later
  specialize

## What This Schema Is Not For

Do not use this schema for ordinary readable `.trace.md` artifacts, plain
pointer notes, or archive containers whose main semantics are already captured
by a more specific carrier schema.

It is not primarily for:

- generic continuity roots
- plain readable payloads without a protected layer
- one concrete encryption container format when a narrower subtype schema would
  better describe it

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.encrypted.v1
  - Created At: 2026-05-30 00:00:00
  - Summary: Thin readable shell for an encrypted payload.

---

# Encrypted Payload

- Payload: customer-export.bin
- Visibility: encrypted
- Reason: user-portable protected export
- Encryption: age recipient-set v1
```

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- this schema is meant to keep the outer shell readable even when the payload
  is not
- `Reason` and `Encryption` are optional, but they exist so runtimes and humans
  can move through encrypted layers without flattening them into generic
  failure
- narrower schemas may later specialize archive format, transport mode, or key
  distribution rules on top of this base signal

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.continuation.v1.schema.md](tiinex.continuation.v1.schema.md)
  - Value: PnrETNDMEDVWoBuub1zyIEayeFdNlOrLY6GNk8pTsOc
