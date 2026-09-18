# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-10 00:39:29
  - Trace: [001-password-sealed-workspace-transport-semantics.trace.md](001-password-sealed-workspace-transport-semantics.trace.md)
  - Origin:
    - [relative](001-password-sealed-workspace-transport-semantics.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-10 01:21:01
  - Authors: Anchor
  - Why: The accepted allocation decision identified one unowned deterministic envelope surface and an unresolved sealed-Handoff-route question; both now have a bounded V1 contract.
  - Summary: Qualify the narrow Transport Envelope schema, sealed Handoff Package binding, and clear authoritative-route boundary for Secure Transport V1.
  - Status: accepted/local

---

# Password-sealed Workspace transport V1 contract qualification

## Decision

- State: accepted
- Subject: canonical V1 password-sealed Workspace transport envelope, package carriage and route boundary
- Decision: introduce `tiinex.transport.envelope.v1` as the narrow deterministic owner of non-secret password-sealed transport profile, recipient-slot, open/recovery and cryptographic-authentication metadata; refine `tiinex.handoff.package.v1` with a conditional `password-sealed-workspace-byte-tree` binding that composes `tiinex.external.payload.v1` for ciphertext bytes and the Transport Envelope for open semantics; preserve Workspace identity, Workspace Representation, Privacy Boundary, integrity and Handoff authority under their existing owners. In V1 Handoff-carrier mode, the Workspace containing the authoritative selected Handoff route must remain a clear verified complete snapshot. Other carried Workspaces, including Required Context, may be independently sealed and remain unresolved until authorized open plus ordinary post-open qualification succeeds.

## Basis

- `tiinex.workspace.v1` already owns Workspace identity; sealing is representation transport and must not mint a second identity.
- `tiinex.workspace.representation.v1` already owns independently meaningful Workspace-to-byte-tree binding, decoder, coverage and provider-readiness semantics. The Handoff Package keeps its narrow direct clear shortcut and does not replace generic representation authority.
- `tiinex.external.payload.v1` already owns payload identity, location, exact stored bytes, integrity, access and recovery. Protected ciphertext necessarily has independent access/recovery semantics, so sealed package carriage references an External Payload instead of duplicating ciphertext path or digest fields.
- `tiinex.privacy.boundary.v1` already owns disclosure/sharing policy, but does not own deterministic KDF, AEAD, key-wrap or recipient-slot metadata.
- The actual unowned V1 semantic is the deterministic non-secret opening contract: explicit profile/version, content-encryption parameters, authenticated security-metadata binding, password KDF salt/parameters, key-wrap parameters, wrapped content key and fail-closed open/recovery results. `tiinex.transport.envelope.v1` owns only that gap.
- The Business outcome requires each protected Workspace to use one fresh random content key and independently usable password slots that wrap/unlock the same key without re-encrypting or duplicating the protected payload. The envelope contract now states that invariant without choosing a universal KDF cost or host-specific binary layout.
- Hiding a protected Workspace tree conflicts with the existing selected Handoff path contract when the authoritative Handoff itself is inside that tree. Requiring the selected-route Workspace to remain clear is the smallest V1 rule that preserves exact cold-start routing without inventing carrier-sealed manifests or leaking protected paths.

## Consequences

- New maintained contract: [Transport Envelope](../../.schemas/transport/envelope/tiinex.transport.envelope.v1.schema.md). It owns explicit versioned non-secret profile fields, password recipient slots, runtime-only secret limits, fail-closed open/recovery outcomes, cryptographic-authentication interpretation limits and multi-Workspace isolation.
- Refined maintained contract: [Handoff Package](../../.schemas/coordination/handoff/package/tiinex.handoff.package.v1.schema.md). It now supports the existing clear `exact-workspace-byte-tree-archive` binding plus `password-sealed-workspace-byte-tree`. The sealed mode requires a protected External Payload descriptor and Transport Envelope, forbids outer `Workspace Artifact Inner Path` and duplicated ciphertext-integrity fields, and uses `Binding State: sealed` only for carrier-level protected-representation qualification.
- Unchanged semantic owners: [Workspace Representation](../../.schemas/relation/workspace/representation/tiinex.workspace.representation.v1.schema.md), [External Payload](../../.schemas/external/payload/tiinex.external.payload.v1.schema.md), and [Privacy Boundary](../../.schemas/privacy/boundary/tiinex.privacy.boundary.v1.schema.md) retain their existing jobs. Encryption does not become semantic authority, provenance, acceptance, Parent truth or Workspace identity.
- Sealed post-open correlation does not leak an inner path. After successful authenticated open, the receiver must find exactly one decrypted archive entry whose bytes exactly equal the visible Workspace Artifact bytes. Zero or multiple matches fail closed; only then may the internal path be derived, followed by safe path normalization, complete coverage and ordinary Workspace/schema/integrity qualification before provider activation.
- Wrong password, missing authorized slot, unsupported declared profile, unavailable decoder/key-unwrapper, malformed metadata, payload-integrity mismatch, authentication failure, truncation, unsafe recovered paths or incomplete recovery remain locked/unsupported/failed and must not fall back to plaintext, guessing or partial qualification.
- Passwords, derived password keys and plaintext content keys remain runtime-only and are forbidden as durable artifact, Handoff, log, receipt or continuation fields.
- Multiple protected Workspaces in one carrier are independent: each has its own External Payload, Transport Envelope, content key and recipient-slot set. Unlocking one must not imply access to another.
- The selected authoritative Handoff route Workspace is clear-only in V1. A sealed Required Context Workspace may be carried, but dependent work remains unresolved until authorized open and post-open qualification. Carrier-sealed routing, encrypted selected-route discovery and hidden route manifests remain outside V1.
- Core is now semantically unblocked to implement host-neutral mechanics only: fresh per-Workspace content-key generation, independently qualified KDF/key-wrap/AEAD profile execution, envelope parsing/validation, recipient-slot unlock, authenticated open, fail-closed error classification and exact-byte roundtrip. Core must not invent defaults that are absent from the declared profile, persist secrets, treat authentication as semantic truth, or activate a Workspace provider before post-open qualification.
- Current portable Tooling has no exact `tiinex.transport.envelope.v1` validator/module. The schema note itself has verified c14n-v2 integrity and Root-readable qualification, but exact runtime validation/implementation is intentionally deferred to the subsequent Core work.

## Review Conditions

- Review when Core proposes the first concrete interoperable profile identifiers and algorithm parameter grammar; those values must be independently qualified against this semantic contract rather than silently becoming Docs defaults.
- Review if exact-byte roundtrip testing shows the unique visible Workspace-artifact byte correlation is insufficient or ambiguous for a valid complete Workspace archive.
- Review before allowing the Workspace that contains the selected authoritative Handoff route to be sealed, or before introducing carrier-sealed routing.
- Review before adding Passkeys/WebAuthn, biometrics, hardware/security keys, recipient identity attestation, artifact signing, ZipCrypto or any durable secret material.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-password-sealed-workspace-transport-semantics.trace.md](001-password-sealed-workspace-transport-semantics.trace.md)
  - Value: pGaAYis2ibS3zeaYzLigLBRIMezZ-w4LQR9cT7kRnk8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: BydfjdJeWEjMwO2GNbGvq9q3gqz941xVSD9rpctNVM0