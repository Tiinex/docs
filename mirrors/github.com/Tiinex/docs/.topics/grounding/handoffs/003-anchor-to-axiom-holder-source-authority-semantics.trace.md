# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-14 17:31:29
  - Trace: [006-holder-binding-and-implementation-source-authority-semantics-task.trace.md](../006-holder-binding-and-implementation-source-authority-semantics-task.trace.md)
  - Origin:
    - [relative](../006-holder-binding-and-implementation-source-authority-semantics-task.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-14 17:31:29
  - Authors: Anchor
  - Why: Axiom owns the semantic classification needed before Tooling can safely harden these two authority gaps.
  - Summary: Delegate Test 2 holder/source authority semantics to Axiom.
  - Status: ready/local

---

# Anchor To Axiom — Holder And Source Authority Semantics

## Handoff Parties

- Purpose: resolve the remaining thin-lineage semantic authority gaps exposed by bounded Test 2 without enlarging recipient coaching.
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](business::.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- holder-source-authority-semantics
  - Transfer Kind: work-and-responsibility
  - Description: classify consuming-session holder assignment authority and implementation-source authorization/creation semantics.
  - Controlling Artifact: [Holder Binding And Implementation Source Authority Semantics](../006-holder-binding-and-implementation-source-authority-semantics-task.trace.md)
  - Boundary: semantic classification/recommendation only; Business integration and Core implementation remain outside Axiom.

- tooling-facing-authority-contract
  - Transfer Kind: work
  - Description: return exact qualified facts, provenance and unresolved states that Tooling may project without semantic invention.
  - Controlling Artifact: [Holder Binding And Implementation Source Authority Semantics](../006-holder-binding-and-implementation-source-authority-semantics-task.trace.md)
  - Boundary: Tooling must not infer assignment or source authority from transport/carriage convenience.

## Required Context

- docs-workspace
  - Material: current Docs Workspace containing prior thin-lineage, Role/Relation and process-applicability semantic dispositions plus this Task/Handoff.
  - Material Reference: [Docs Workspace](docs::.topics/.workspaces/tiinex-docs.workspace.md)
  - Purpose: writable semantic authority basis.
  - Availability: available

- business-workspace
  - Material: current Business Workspace containing the controlling grounding Epic and Test 2 diagnostic disposition.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: read-only organizational/test evidence; only Anchor mutates Business.
  - Availability: available

- core-workspace
  - Material: current Core Workspace containing bounded Workspace readiness and grounding introspection mechanics.
  - Material Reference: [Core Workspace](core::.topics/.workspaces/tiinex-core.workspace.md)
  - Purpose: read-only mechanical evidence; implementation does not define semantics.
  - Availability: available

## Reference Context

- prior-process-disposition
  - Material: accepted process-applicability cold-grounding semantic disposition.
  - Material Reference: [Process Applicability Cold-Grounding Semantic Disposition](../005-process-applicability-cold-grounding-semantic-disposition.trace.md)
  - Purpose: preserve accepted forward-authority and non-inference boundaries.
  - Availability: available

## Retained Responsibilities

- business-integration
  - Retained By: Anchor
  - Responsibility: integrate accepted semantic outcome into Business Role/process/task authority and recovery.
  - Boundary: Axiom returns recommendations/evidence only.

- tooling-implementation
  - Retained By: Loom / Core
  - Responsibility: implement semantics-preserving diagnostics/projections under a parallel bounded Task.
  - Boundary: Loom may not invent the semantic outcome.

## Exclusions And Dependencies

- no-business-core-mutation
  - Kind: excluded-scope
  - Description: Business and Core remain read-only for this Axiom return.
  - Responsible Party Or Role: Axiom.

## Completion Expectation

- Signal Kind: return
- Signal Meaning: return a qualified semantic disposition and exact Tooling-facing authority contract to Anchor.
- Return To: Anchor

## Interpretation Limits

- Does Not Mean: recipient Role equals session holder, Workspace writability equals implementation authority, or Axiom may authorize product/source placement by convenience.
- Must Not Be Used To Claim: whole-program readiness, product acceptance, or authority outside the controlling semantic Task.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [006-holder-binding-and-implementation-source-authority-semantics-task.trace.md](../006-holder-binding-and-implementation-source-authority-semantics-task.trace.md)
  - Value: A3J1W-WILTnVOl6DFroqTAMG2XQdSVQVnFmK_jkuIBc

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: gaUsi6jHciIaZxdLiJzyV4bfCrPCrc3tObB3Fa8Mo9s