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
  - Created At: 2026-09-10 00:40:43
  - Authors: Anchor
  - Why: Core and hosts need a qualified semantic boundary before implementing password-protected transport without inventing a second Workspace identity or overclaiming ciphertext integrity.
  - Summary: Keep encrypted Workspace transport as a representation layer and allocate payload, disclosure and future envelope semantics to their proper owners.
  - Status: accepted/local

---

# Password-sealed Workspace transport semantic allocation

## Decision

- State: accepted
- Subject: semantic ownership and interpretation of password-sealed Workspace transport
- Decision: treat password sealing as a transport/representation layer around exact Workspace bytes, never as a new Workspace identity or semantic authority. `tiinex.workspace.representation.v1` remains the semantic binding owner between a Workspace and represented byte-tree material; `tiinex.external.payload.v1` remains the owner of the encrypted payload identity/location/exact stored bytes and integrity reference; `tiinex.privacy.boundary.v1` remains the owner of disclosure/sharing policy. Password/KDF/content-key wrapping metadata requires an explicit qualified transport-envelope contract before Core implementation. A locked encrypted payload must not be reported as a qualified complete Workspace snapshot merely because the outer carrier knows its Workspace id or has verified ciphertext bytes.

## Basis

- Existing Workspace Representation already separates semantic Workspace identity from representation payload bytes, decoder requirements, coverage and provider qualification.
- Existing External Payload already owns payload format/location/integrity/access boundaries and explicitly prevents payload integrity from proving semantic correctness, authorship, provenance or truth.
- Existing Privacy Boundary already owns sharing, serialization and disclosure policy, but its free-text access policy is not a deterministic cryptographic envelope or key-management contract.
- Reusing these owners avoids inventing a parallel encrypted-Workspace identity while still exposing the one real semantic gap: a deterministic, versioned envelope capable of declaring authenticated-encryption profile, KDF profile, recipient slots and key wrapping without serializing passwords or derived key material.
- The Business outcome requires filename/tree confidentiality. Therefore an outer carrier may identify that a protected Workspace exists, but it must not require disclosure of that Workspace's internal filename tree merely to transport or inventory the sealed payload.

## Consequences

- Core implementation is gated on a Docs-qualified transport-envelope/profile contract; hosts must not invent their own password format.
- A protected Workspace uses a fresh random content key for its sealed byte-tree payload. Recipient password slots wrap/unlock that content key independently; adding recipients must not require duplicating or re-encrypting the Workspace payload.
- Passwords and derived key material are runtime secrets and must not become Tiinex artifact fields, Handoff prose, logs, receipts or persistent continuation material.
- Ciphertext authentication proves only the authenticated encrypted representation bytes/profile binding. After successful open, recovered Workspace bytes still pass through the normal exact-byte, Workspace Representation, schema, integrity and Handoff qualification paths.
- Wrong password, unsupported profile, malformed recipient slot, authentication failure, truncated payload or unavailable decoder/key-unwrapper remains locked/failed and must not fall back to plaintext, alternate decoding or partial landing.
- Outer Handoff/package qualification must distinguish `locked protected representation` from `qualified Workspace bytes`. Required Context dependent on a locked Workspace remains unresolved until an authorized open reproduces and validates the exact Workspace representation.
- V1 may expose Workspace identity and protection state in the outer carrier. It must not expose the protected Workspace's internal file/tree inventory. Carrier-sealed transport that also hides outer Workspace inventory/routing remains out of scope.
- The current exact internal Handoff-route/path model needs explicit review for a Handoff whose authoritative artifact is itself inside a sealed Workspace. Until that contract is qualified, implementation must not silently leak an internal path or claim route resolution through encrypted bytes.
- ZipCrypto, Passkeys/WebAuthn, biometrics, hardware keys, cryptographic artifact signatures and identity attestations remain outside this V1 decision.

## Review Conditions

- Review when the transport-envelope contract is drafted against actual Core package mechanics and exact-byte roundtrip tests.
- Review if `tiinex.workspace.representation.v1` cannot express the post-unlock binding/decoder requirements without ambiguous new semantics.
- Review the Handoff package/Pointer contract before allowing the selected authoritative Handoff Workspace itself to be sealed.
- Review if password KDF portability forces a profile change; algorithm/cost defaults may evolve through versioned transport profiles without redefining Workspace or Parent semantics.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-password-sealed-workspace-transport-semantics.trace.md](001-password-sealed-workspace-transport-semantics.trace.md)
  - Value: pGaAYis2ibS3zeaYzLigLBRIMezZ-w4LQR9cT7kRnk8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 4BcgGBBrh-4I60by8NQIWV9yBCIOEmdEOmoJkEk3Gy8