# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-14 14:24:00
  - Trace: [Process Applicability And Role-Grounding Semantics](../004-process-applicability-and-role-grounding-semantics-task.trace.md)
  - Origin:
    - [relative](../004-process-applicability-and-role-grounding-semantics-task.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-14 14:25:00
  - Authors: Anchor
  - Why: Reuse the now-grounded Axiom specialist for a second bounded semantic pass focused on process applicability before blind fresh-Anchor validation.
  - Summary: Delegate process-applicability and Role-grounding semantics to Axiom while Anchor retains Business mutation and cross-role integration.
  - Status: ready/local

---

# Anchor To Axiom — Process Applicability Grounding Semantics

## Handoff Parties

- Purpose: determine the semantic process-applicability/discovery contract for thin-lineage Role grounding without turning inventory or Tooling projection into authority.
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role — Thin-Lineage Orchestration Discipline Continuation](business::.topics/roles/001-1-1-1-1-anchor-thin-lineage-orchestration-discipline-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](business::.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- process-applicability-semantics
  - Transfer Kind: work-and-responsibility
  - Description: classify how qualified current work establishes which existing processes are applicable/required/active for a Role and how a cold recipient can recover that fact.
  - Controlling Artifact: [Process Applicability And Role-Grounding Semantics](../004-process-applicability-and-role-grounding-semantics-task.trace.md)
  - Boundary: process carriage, directory inventory and nearby Role files do not create applicability.

- tooling-facing-process-contract
  - Transfer Kind: work
  - Description: return exact facts/provenance/unresolved states Loom may project without semantic invention.
  - Controlling Artifact: [Process Applicability And Role-Grounding Semantics](../004-process-applicability-and-role-grounding-semantics-task.trace.md)
  - Boundary: Axiom does not implement Core.

## Required Context

- docs-workspace
  - Material: current integrated Docs Workspace including the first Axiom semantic disposition and existing Role/Relation/Handoff/process semantics.
  - Material Reference: [Docs Workspace](docs::.topics/.workspaces/tiinex-docs.workspace.md)
  - Purpose: writable semantic authority and exact first-return basis.
  - Availability: available

- business-workspace
  - Material: current integrated Business Workspace including the controlling Epic, new Anchor Role continuation, process lineages and second-tranche integration Task.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: read-only organizational/process evidence; only Anchor may mutate Business.
  - Availability: available

- core-workspace
  - Material: current integrated Core Workspace including Loom's qualified first-return grounding projection mechanics.
  - Material Reference: [Core Workspace](core::.topics/.workspaces/tiinex-core.workspace.md)
  - Purpose: read-only current mechanical evidence; implementation does not define semantics.
  - Availability: available

## Reference Context

- prior-axiom-disposition
  - Material: first fresh Axiom thin-lineage semantic disposition.
  - Material Reference: [Thin-Lineage Anchor Grounding Semantic Disposition](../003-thin-lineage-anchor-grounding-semantic-disposition.trace.md)
  - Purpose: accepted semantic boundary and first-run findings that this task extends rather than reopens without evidence.
  - Availability: available

## Retained Responsibilities

- business-integration
  - Retained By: Anchor
  - Responsibility: decide and author Business Role/process changes, reconcile parallel Core return, recovery and later blind validation.
  - Boundary: Axiom returns exact recommendations only.

- tooling-implementation
  - Retained By: Loom / Core
  - Responsibility: implement semantics-preserving introspection/projection mechanics under separate Task.
  - Boundary: no semantic invention from Core convenience.

## Exclusions And Dependencies

- no-inventory-as-authority
  - Kind: excluded-scope
  - Description: do not define process applicability from physical carriage, folder scanning, filenames or all known processes.
  - Responsible Party Or Role: Axiom preserves semantic boundary; Anchor integrates.

- no-business-mutation
  - Kind: excluded-scope
  - Description: Business remains Anchor-owned for this initiative.
  - Responsible Party Or Role: Anchor.

## Completion Expectation

- Signal Kind: none
- Signal Meaning: return a qualified semantic disposition and Axiom-to-Anchor Handoff with exact process-applicability rules, Tooling-facing projection contract and unresolved boundaries.

## Interpretation Limits

- Does Not Mean: every Role must discover every process, process presence means applicability, or Axiom may mutate Business/Core.
- Must Not Be Used To Claim: holder/delegation/participation authority from process or Role inventory, global readiness, publication authority or remote action.
- Authority Limits: Docs semantic/process classification and recommendations under the controlling Business Epic only.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Process Applicability And Role-Grounding Semantics](../004-process-applicability-and-role-grounding-semantics-task.trace.md)
  - Value: G7P3FkcuyRwnMr0ZpjsCS74xDVF0-A69vvEwNO27JS4

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:YletNgyM1C2rYKckMvbaWkQlW-R5JBCXMGh-uGPR5ec
