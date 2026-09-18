# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-10 00:39:29
  - Trace: [001-password-sealed-workspace-transport-semantics.trace.md](001-password-sealed-workspace-transport-semantics.trace.md)
  - Origin:
    - [relative](001-password-sealed-workspace-transport-semantics.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-10 09:36:57
  - Authors: Anchor
  - Why: The accepted Docs V1 contract deliberately deferred exact algorithm/profile defaults to an independently qualified implementation proposal; Loom has now returned that proposal and its semantics must be reviewed before becoming canonical host behavior.
  - Summary: Independent Docs review of the first qualified Core password profile, parameter grammar, password validity boundary and transport-envelope schema target before CLI/host adoption.
  - Status: active/local

---

# Secure Transport V1 concrete profile review

## Objective

Independently review the first qualified Core Secure Transport V1 implementation profile against the accepted Docs transport-envelope semantics before CLI or graphical hosts treat that profile as canonical V1 behavior.

The review is semantic/contract work in Docs. Core implementation evidence is input, not semantic authority.

## Done Criteria

- Decide whether the concrete Core profile identifier `tiinex.password.pbkdf2-hmac-sha256.aes-256-kw.aes-256-gcm.v1` and its exact parameter grammar are acceptable canonical V1 values, or return precise changes rather than silently blessing implementation defaults.
- Review the proposed concrete parameters: PBKDF2-HMAC-SHA-256, 600000 iterations, 16-byte random salt, 256-bit derived wrapping key, AES-256-KW, fresh 256-bit AES-GCM content key, 12-byte random nonce, 128-bit GCM tag, `webcrypto-ciphertext-concatenated-tag`, `utf8-no-normalization`, and base64url-no-padding encodings.
- Preserve the accepted V1 property that recipient-slot changes may rewrap the same content key while leaving the exact protected Workspace payload bytes unchanged.
- Decide the password-input validity boundary exposed by the semantic profile. The current Core primitive demonstrably accepts an empty string as a password; determine whether V1 must reject an empty password in Core/profile semantics or whether the contract deliberately leaves strength policy to hosts. Do not invent broad password-complexity policy without a qualified security reason.
- Review the transport-envelope schema target coordinate used by Core. The implementation renderer currently uses `https://github.com/Tiinex/docs/blob/main/.topics/.schemas/transport/envelope/tiinex.transport.envelope.v1.schema.md`; current Docs source does not provide a truthful new commit-pinned remote coordinate in this local frontier. Define or confirm the correct durable target policy without fabricating a remote commit SHA.
- Confirm that the exact profile/parameter field names and machine grammar are compatible with `tiinex.transport.envelope.v1` and the sealed `tiinex.handoff.package.v1` binding semantics.
- Preserve fail-closed interpretation: unsupported profile/KDF/wrap/AEAD declarations never fall back to host defaults, authenticated decryption never becomes semantic authority, and the selected authoritative Handoff route Workspace remains clear in V1.
- Return either an accepted Docs Decision/contract refinement or a precise Core change request. Do not mutate Core in this lane.

## Scope

Writable scope is `Tiinex/docs` only. Review/refine canonical Secure Transport V1 semantics, schema notes, profile identifiers/parameter grammar, password-input validity boundary, and schema-target addressing policy as needed.

Do not implement cryptography, modify Core/CLI/VS Code/App/Site/Business, introduce carrier-sealed routing, add Passkeys/WebAuthn/ZipCrypto/signing, or expand into generic credential management.

## Dependencies

- [Password-sealed Workspace transport semantics](001-password-sealed-workspace-transport-semantics.trace.md)
- [Password-sealed Workspace transport semantic allocation](001-1-password-sealed-workspace-transport-semantic-allocation.trace.md)
- [Password-sealed Workspace transport V1 contract qualification](001-3-password-sealed-workspace-transport-v1-contract-qualification.trace.md)
- [Transport Envelope schema](../../.schemas/transport/envelope/tiinex.transport.envelope.v1.schema.md)
- Current returned Core Secure Transport V1 implementation and focused qualification evidence, carried read-only in the delegation Handoff.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-password-sealed-workspace-transport-semantics.trace.md](001-password-sealed-workspace-transport-semantics.trace.md)
  - Value: pGaAYis2ibS3zeaYzLigLBRIMezZ-w4LQR9cT7kRnk8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: YCFhWFzzfUgZ5T5XFdMyRdx4ejxSD_-80Y3qZyOwwqI