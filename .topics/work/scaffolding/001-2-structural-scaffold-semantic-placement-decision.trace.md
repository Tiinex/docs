# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-02 20:44:59
  - Trace: [001-1-existing-contract-and-structure-landscape-evidence.trace.md](001-1-existing-contract-and-structure-landscape-evidence.trace.md)
  - Origin:
    - [relative](001-1-existing-contract-and-structure-landscape-evidence.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-02 20:46:07
  - Authors: Anchor
  - Why: Keep filesystem/project structure distinct from artifact generation, lifecycle, Workspace identity, and Reduction.
  - Summary: Land the minimal semantic placement and responsibility boundaries for a new Structural Scaffold contract.
  - Status: ready/local

---

# Structural Scaffold Semantic Placement

## Decision

- Decision State: accepted-for-schema-development
- Tiinex will introduce one domain-neutral Structural Scaffold contract as a direct Root descendant with proposed schema id `tiinex.scaffold.v1` and canonical Docs path `.topics/.schemas/scaffold/tiinex.scaffold.v1.schema.md`.
- Structural Scaffold owns reusable physical/materialization structure: target kind, declared directory/file entries, requiredness, entry role, placement/naming authority references, composition, collision/overwrite/merge policy, generation bindings, and validation boundary.
- Structural Scaffold does not own artifact body generation, Transition applicability/lifecycle, Parent ancestry, process completion, Reduction carry-forward, destructive eligibility, or host-specific UI.
- `tiinex.schema.generation.v1` remains the authority for schema-guided artifact content/skeleton generation.
- `tiinex.transition.definition.v1` remains the authority for when outputs are created, lifecycle effects, destination bindings, output placement intent, and naming authority at invocation time.
- `tiinex.workspace.v1` remains the authority for Workspace identity/source/discovery. Scaffold v1 will not require a Workspace-schema revision or default Scaffold field; selection/binding is explicit at invocation/catalog level until dogfood proves a durable Workspace binding is needed.
- Docs owns the Scaffold schema; Core will own qualification/planning mechanics; Native may carry first-party qualified Scaffold instances; hosts consume Core plans rather than reimplementing scaffold semantics.

## Basis

- [Structural Scaffolding Contract Landscape](001-1-existing-contract-and-structure-landscape-evidence.trace.md)
- Existing Workspace initialization creates/seals a Workspace artifact but does not define a reusable directory grammar.
- Existing Schema Generation is intentionally artifact-content-oriented.
- Existing Transition Definition already says concrete path selection belongs to a resolver/planner, leaving room for a separate structural authority without duplicating transition semantics.
- The new Native Workspace provides a first-party content boundary separate from Core mechanics and Docs authority.

## Consequences

- Schema Development may proceed to author `tiinex.scaffold.v1` without modifying Workspace, Reduction, Entry, or Process schemas in this tranche.
- The first Core implementation should be plan/projection-first and source-mutation-free.
- The first Native instance should be a conservative Tiinex Workspace scaffold that establishes `.topics/.workspaces`, `work`, `processes`, and `reductions` roots while allowing domain-specific durable roots rather than hard-coding every repository taxonomy.
- Historical Workspaces are not migrated by this decision.
- A future Workspace-to-Scaffold default binding or Lineage Operative State projection requires separate evidence and design.

## Review Conditions

Revisit this decision if dogfood proves that explicit Scaffold selection cannot support deterministic Workspace initialization, or if the Scaffold contract starts duplicating Schema Generation, Transition Definition, or Workspace source semantics.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-existing-contract-and-structure-landscape-evidence.trace.md](001-1-existing-contract-and-structure-landscape-evidence.trace.md)
  - Value: rbo1zf9fVrjIaRG71Tj58dzPm3Q_b4MmjedH7YsyckU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: C5eja2jcJ0y8OZ6Nwbk-hCwhLNAMbKOjpjeif-w9114