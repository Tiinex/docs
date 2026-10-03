# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-03 10:51:48
  - Trace: [001-1-current-workspace-shape-and-scaffold-capability-evidence.trace.md](001-1-current-workspace-shape-and-scaffold-capability-evidence.trace.md)
  - Origin:
    - [relative](001-1-current-workspace-shape-and-scaffold-capability-evidence.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-03 10:51:49
  - Authors: Anchor
  - Summary: Adopt a small composable first-party Scaffold catalog as the target for Workspace migration.
  - Status: ready/local

---

# Native Scaffold Catalog V1 And Migration Target Decision

## Decision

- Decision State: accepted-for-local-dogfood
- Catalog Principle: first-party Native Scaffolds are composable capabilities selected explicitly for a Workspace or repository; do not create one bespoke template per repository
- Universal Workspace Base: introduce `tiinex.native.workspace-base.v2` as the preferred new-selection base with only `.topics` and `.topics/.workspaces` required; keep workspace-base v1 for lineage/recovery but do not use its required empty `work/processes/reductions` directories as the universal migration target
- Work Capability: `tiinex.native.workspace-work.v1` owns `.topics/work`
- Process Capability: `tiinex.native.workspace-process.v1` owns `.topics/processes`
- Reduction Capability: `tiinex.native.workspace-reduction.v1` owns `.topics/reductions`
- Schema Authority Capability: `tiinex.native.workspace-schema-authority.v1` owns canonical schema-authority roots `.topics/.schemas` and `.topics/.validators` with `.adapters`, `.interfaces`, `.origins`, and `.tools` represented as optional supporting roots
- Organization Capability: `tiinex.native.workspace-organization.v1` owns durable organization roots `.topics/initiatives`, `.topics/roles`, `.topics/decisions`, `.topics/executive`, `.topics/financing`, and `.topics/use-cases`
- Software Repository Capability: `tiinex.native.repository-software-package.v1` owns repository-level `src` and `test` as required structural roots and `tools`, `.github`, and `docs` as optional support roots
- Migration Placement Rule: legacy work subject roots that are not reserved authority/organization roots are candidates to converge beneath `.topics/work/<existing-subject>` while preserving the subject subtree name; this is migration policy, not implicit Scaffold ancestry and not automatic deletion
- Reserved Roots: `.workspaces`, canonical dot-authority roots, `work`, `processes`, `reductions`, and selected organization roots remain at their declared structural level; migration must not flatten or reinterpret them as generic subjects
- Apply Boundary: Scaffold selection and plan projection remain read-only; path moves require a separate migration plan/apply receipt and post-apply qualification

## Basis

- accepted `tiinex.scaffold.v1` already separates desired structure from mutation, lifecycle, Parent, and Reduction semantics
- current workspace-base v1 proved the mechanism but over-specifies repository-durable empty directories for a universal base
- current Major 015 inventory exposes stable capabilities shared by many Workspaces while legacy subject roots remain heterogeneous and history-shaped
- capability composition allows Business, Docs, package repositories, and hosts to share primitives without encoding seventeen special templates

## Consequences

- Native should materialize the seven catalog entries above before Workspace migration begins
- Core needs one explicit multi-Scaffold composition/migration projection that unions compatible entries, reports current-to-desired placement changes, and blocks conflicts without moving source by itself
- Business migration selects base + organization + process/reduction capabilities as actually needed
- Docs migration selects base + schema-authority + process/reduction/work capabilities as actually needed
- software/package/host repositories select base + software-repository plus work/reduction/process capabilities according to durable content and migration intent
- subject migration preserves names under `.topics/work/` rather than inventing a new taxonomy in this tranche
- first-party Entry/Transition/Process content migration into Native remains a later content-placement tranche and is not silently bundled into filesystem structure migration

## Review Conditions

Revisit the catalog if composite dogfood requires repository-specific structure that cannot be expressed by additive capability selection, or if a stable role appears across multiple Workspaces that cannot be represented without duplicating semantics.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-current-workspace-shape-and-scaffold-capability-evidence.trace.md](001-1-current-workspace-shape-and-scaffold-capability-evidence.trace.md)
  - Value: y1k9tAE_S6CfHHKOqT6XahGuUYZckIe3NoGnXYrnzuk

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: G0ifuNFvjZBy_FxS1ftpnr1k9ZLap1dWrbArq0pSpbw