# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-09 23:48:32
  - Trace: [001-secure-transport-recipient-encryption.trace.md](../../../business::.topics/initiatives/refactor/security/001-secure-transport-recipient-encryption.trace.md)
  - Origin:
    - [relative](../../../business::.topics/initiatives/refactor/security/001-secure-transport-recipient-encryption.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-10 00:39:29
  - Authors: Anchor
  - Why: Secure transport must reuse Tiinex semantic owners and fail closed before Core or hosts expose encryption behavior.
  - Summary: Define the minimum canonical semantics for password-protected, filename-opaque Workspace transport before implementation.
  - Status: active/local

---

# Password-sealed Workspace transport semantics

## Objective

Define the smallest canonical semantic contract needed for password-protected Tiinex Workspace transport before Core, CLI, VS Code, App or Site expose encryption behavior.

## Done Criteria

- Canonical semantics distinguish Workspace identity, Workspace representation, encrypted payload bytes, recipient/password access material, integrity/authentication, Handoff routing and semantic authority.
- V1 can represent a complete Workspace whose internal byte-tree is sealed so filenames and directory structure are not exposed by the outer carrier.
- Multiple password recipient slots may independently authorize recovery of one Workspace content key without treating the password or recipient slot as Workspace identity.
- Multiple Workspaces in one carrier may have independent protection state, content keys and recipient sets.
- Password/KDF material is versioned and explicit enough for fail-closed decoding without making a particular KDF cost parameter a Business semantic.
- Wrong password, unsupported crypto profile, unavailable decoder/key-unwrapper, tampered payload or incomplete recovery remain unresolved/fail-closed rather than being repaired by filename, package placement or transport heuristics.
- The semantic design reuses existing `tiinex.workspace.representation.v1`, `tiinex.external.payload.v1`, `tiinex.privacy.boundary.v1`, Handoff/package and integrity owners where possible; new schema authority is introduced only where an actual unowned semantic remains.
- ZipCrypto, Passkeys/WebAuthn, biometrics, hardware keys, cryptographic artifact signing and carrier-sealed routing are explicitly outside V1.

## Scope

Canonical Docs semantics and schema-boundary analysis for password-based Workspace-sealed transport. This task may define or refine the minimum semantic surfaces required for encrypted Workspace representations, recipient/password slots and disclosure boundaries. It must not implement cryptography, host UX or provider behavior.

## Dependencies

- [Secure Transport & Recipient Encryption](business::.topics/initiatives/refactor/security/001-secure-transport-recipient-encryption.trace.md) is the controlling cross-repository outcome.
- Existing Workspace Representation, External Payload, Privacy Boundary, Handoff Package and integrity contracts remain authoritative unless a qualified semantic gap requires a narrow extension.
- Core must not implement a new format until this task identifies the owning semantic surfaces and interpretation limits.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-secure-transport-recipient-encryption.trace.md](../../../business::.topics/initiatives/refactor/security/001-secure-transport-recipient-encryption.trace.md)
  - Value: mE5p0IRNHqTZSCit6271ytohhQB8ly1yCGlOpgkPPw8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: pGaAYis2ibS3zeaYzLigLBRIMezZ-w4LQR9cT7kRnk8