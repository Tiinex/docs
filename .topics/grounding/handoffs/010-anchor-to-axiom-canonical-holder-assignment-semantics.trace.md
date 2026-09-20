# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 17:24:50
  - Trace: [012-canonical-holder-assignment-semantics.trace.md](../012-canonical-holder-assignment-semantics.trace.md)
  - Origin:
    - [relative](../012-canonical-holder-assignment-semantics.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 17:24:51
  - Authors: Anchor
  - Why: Holder authorization currently depends on exact prose variants and blocks Kodax despite explicit-session semantics.
  - Summary: Delegate canonical holder-assignment semantics to Axiom.
  - Status: ready/local

---

# Anchor To Axiom — Canonical Holder Assignment Semantics

## Handoff Parties

- Purpose: resolve the semantic contract behind explicit bounded Role holder assignment so Core no longer depends on exact human-readable Holder State sentences.
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](business::.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- holder-assignment-semantics
  - Transfer Kind: work-and-responsibility
  - Description: define canonical assignment-mode semantics and exact fail-closed boundaries for qualified Role Holder Relationship material.
  - Controlling Artifact: [Canonical Holder Assignment Semantics](../012-canonical-holder-assignment-semantics.trace.md)
  - Boundary: semantic disposition only; no Core or Business mutation.

## Required Context

- docs-workspace
  - Material: current Docs Workspace containing canonical Role schema semantics and prior grounding dispositions.
  - Material Reference: [Docs Workspace](docs::.topics/.workspaces/tiinex-docs.workspace.md)
  - Purpose: writable semantic authority workspace.
  - Availability: available

- business-holder-task
  - Material: controlling Business holder-normalization Task and current qualified Role artifacts.
  - Material Reference: [Canonical Holder Assignment Mode Normalization](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Purpose: organizational lineage and exact acceptance boundary.
  - Availability: available

## Reference Context

- current-role-set
  - Material: current Business Role declarations for Anchor, Axiom, Loom and Kodax, including their exact Holder Relationship values.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: semantic comparison evidence only; Business remains read-only to Axiom.
  - Availability: available

## Retained Responsibilities

- implementation
  - Retained By: Loom
  - Responsibility: implement the accepted semantic contract in Core after Axiom returns.
  - Boundary: Axiom does not implement Tooling.

- business-integration
  - Retained By: Anchor
  - Responsibility: reconcile the return, stage Loom implementation and checkpoint recovery.
  - Boundary: Axiom does not mutate Business.

## Exclusions And Dependencies

- no-prose-whitelist-expansion
  - Kind: excluded-scope
  - Description: do not solve the defect by adding more full-sentence Holder State strings to Core.
  - Responsible Party Or Role: Axiom / Loom.

- no-heuristic-parser
  - Kind: excluded-scope
  - Description: do not authorize arbitrary Holder State prose through fuzzy/natural-language interpretation.
  - Responsible Party Or Role: Axiom / Loom.

## Completion Expectation

- Signal Kind: return
- Signal Meaning: return the qualified holder-assignment semantic disposition and Axiom-to-Anchor Handoff with exact Loom acceptance criteria.
- Return To: Anchor

## Interpretation Limits

- Does Not Mean: session self-assertion alone creates assignment authority or durable holder identity.
- Must Not Be Treated As: participant, process, source, delegation or acceptance authority.
- Must Not Be Used To Claim: Core implementation is complete before Loom qualification.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [012-canonical-holder-assignment-semantics.trace.md](../012-canonical-holder-assignment-semantics.trace.md)
  - Value: NSsV7XQjqhu5iiOTAwcbiewupnfuzAhgkeJuFgRzvRc

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: VoJoLg3YDNiuDUq5WVpZ2BC-KInlnf5nGQdbwjawBy4