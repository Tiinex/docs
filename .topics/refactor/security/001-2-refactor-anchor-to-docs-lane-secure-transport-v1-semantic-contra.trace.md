# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-10 00:39:29
  - Trace: [001-password-sealed-workspace-transport-semantics.trace.md](001-password-sealed-workspace-transport-semantics.trace.md)
  - Origin:
    - [relative](001-password-sealed-workspace-transport-semantics.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-10 00:58:06
  - Authors: Anchor
  - Why: Parallelize a non-overlapping canonical semantics lane while VS Code finishes Receive/Discovery work, without allowing hosts to invent encryption formats.
  - Summary: Delegate minimum Docs transport-envelope/profile semantics for password-sealed Workspaces before Core implementation.
  - Status: ready/local

---

# Refactor Anchor → Docs lane: Secure Transport V1 semantic contract completion

## Handoff Parties

- Purpose: delegate the minimum canonical Docs work needed to turn the accepted password-sealed Workspace transport decision into a qualified V1 transport-envelope/profile contract that Core can implement without inventing semantics.
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
- To: Anchor
- To Kind: role
- To Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)

## Transfers

- secure-transport-docs-contract
  - Transfer Kind: work
  - Description: complete the active Docs Task for password-sealed Workspace transport. Review the existing Workspace Representation, External Payload, Privacy Boundary, Handoff Package/Pointer and integrity contracts, then author the minimum canonical transport-envelope/profile semantics required for password-based Workspace-sealed transport. Introduce new schema authority only where the existing contracts do not own the required deterministic metadata.
  - Controlling Artifact: [Password-sealed Workspace transport semantics](001-password-sealed-workspace-transport-semantics.trace.md)
  - Boundary: Docs is the sole writable Workspace. Core and Business are read-only context. Do not implement cryptography, CLI behavior, VS Code UX, provider behavior, App/Site changes, package publication or remote writes.

- handoff-sealed-route-review
  - Transfer Kind: work
  - Description: resolve or explicitly bound the semantic question raised by the accepted Decision: how a Handoff package/Pointer may identify and route to an authoritative Handoff artifact when that artifact would otherwise reside inside a sealed Workspace without leaking protected internal paths. V1 may choose to prohibit sealing the authoritative Handoff Workspace if that is the narrowest qualified rule; do not force a complex carrier-sealed design.
  - Controlling Artifact: [Password-sealed Workspace transport semantic allocation](001-1-password-sealed-workspace-transport-semantic-allocation.trace.md)
  - Boundary: preserve V1 scope. Carrier-sealed routing remains out of scope unless evidence proves it is unavoidable for Workspace-sealed transport.

## Required Context

- docs-workspace
  - Material: current complete Docs source including the active Secure Transport Task and accepted semantic-allocation Decision.
  - Material Reference: [Docs Workspace](docs::.topics/.workspaces/tiinex-docs.workspace.md)
  - Purpose: canonical schema and semantic authority; sole writable implementation surface for this lane.
  - Availability: available

- core-workspace
  - Material: current complete Core source and Handoff/package mechanics.
  - Material Reference: [Core Workspace](core::.topics/.workspaces/tiinex-core.workspace.md)
  - Purpose: read-only evidence of the mechanics the Docs contract must be implementable against; not semantic authority and not writable here.
  - Availability: available

- business-workspace
  - Material: current Business source including Secure Transport & Recipient Encryption V1 outcome and Anchor role/authority context.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: controlling cross-repository outcome and bounded organizational authority.
  - Availability: available

## Reference Context

- none

## Retained Responsibilities

- core-implementation
  - Retained By: Anchor
  - Retained By Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
  - Responsibility: create and qualify repo-local Core implementation Tasks only after the Docs contract returns and is independently reconciled.
  - Boundary: Docs lane must not patch Core or pre-approve a cryptographic implementation.

- cli-and-host-consumers
  - Retained By: Anchor
  - Retained By Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
  - Responsibility: sequence CLI headless proof before VS Code/App/Site exposure after Core primitives qualify.
  - Boundary: no consumer UX or host behavior is delegated here.

- current-frontier-reconciliation
  - Retained By: Anchor
  - Retained By Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
  - Responsibility: three-way reconcile the returned Docs Workspace against this exact child input and the then-current integration frontier before accepting it.
  - Boundary: child return is a candidate/delta; no whole-carrier overlay.

## Exclusions And Dependencies

- cryptographic-implementation
  - Kind: excluded-scope
  - Description: no AES-GCM, KDF, wrapping-key, nonce, random-key, binary envelope or secret-handling implementation is authorized in Core or any host.
  - Responsible Party Or Role: Refactor Anchor after Docs return.

- password-secret-storage
  - Kind: excluded-scope
  - Description: passwords and derived key material are runtime secrets and must not become durable Tiinex artifacts, logs, receipts, routing text or continuation state.
  - Responsible Party Or Role: Docs lane must preserve this interpretation limit; later implementation belongs to Core/hosts.

- non-v1-features
  - Kind: excluded-scope
  - Description: ZipCrypto, Passkeys/WebAuthn, biometrics, hardware/security keys, cryptographic artifact signing/identity attestation and carrier-sealed mode remain outside V1.
  - Responsible Party Or Role: Refactor Anchor.

- schema-minimality
  - Kind: unresolved-dependency
  - Description: first determine whether existing schema owners can be extended or composed. A new transport-envelope/profile schema is justified only for semantics that are actually unowned and required for deterministic fail-closed decode/qualification.
  - Responsible Party Or Role: Docs lane.

## Completion Expectation

- Signal Kind: return
- Signal Meaning: return one normal Tiinex Handoff carrying the complete changed Docs Workspace plus only the read-only Business/Core context needed to reproduce qualification. The return must identify exact new/refined contracts, why each semantic owner is correct, remaining interpretation limits, and the concrete Core implementation boundary now unblocked. If the Handoff-route leakage issue cannot be resolved within V1 without carrier-sealed complexity, return a narrow prohibition/blocker instead of inventing broader semantics.
- Return To: Anchor
- Return To Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)

## Interpretation Limits

- Does Not Mean: Secure Transport V1 is implemented, AES/KDF choices are qualified by Docs alone, Core/CLI/VS Code may expose encryption, or encrypted payload integrity proves Workspace semantic truth.
- Must Not Be Used To Claim: package placement, recipient/password metadata, ciphertext authentication or successful decryption creates semantic Parent/provenance/authority; or that the child lane may mutate Core/Business because they are carried.
- Authority Limits: canonical Docs semantic/schema work only, bounded by the active Docs Task and accepted Business outcome.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-password-sealed-workspace-transport-semantics.trace.md](001-password-sealed-workspace-transport-semantics.trace.md)
  - Value: pGaAYis2ibS3zeaYzLigLBRIMezZ-w4LQR9cT7kRnk8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: Cg1Ljz7NiiZmE8AhqyJoA2sYO8lNa4hf1kj5ADZjpIA