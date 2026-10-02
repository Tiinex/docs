# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-02 21:40:25
  - Authors: Anchor
  - Why: Make lineage shrinkage deterministic and recoverable before project-wide Reduction/deletion.
  - Summary: Define and dogfood a Reduction profile that compresses already-terminal lineages while preserving separate completion, eligibility, and deletion boundaries.
  - Status: ready/local

---

# Lineage Closure Reduction Operational Profile

## Objective

Define a reusable Tiinex operational profile for reducing an already-qualified terminal lineage without making Reduction itself mean completion, currentness, destructive eligibility, or deletion authority.

The profile must reconcile canonical `tiinex.reduction.v1`, existing placement and expansion precedent, Core lineage topology/currentness/lifecycle projections, and the separate destructive-lineage eligibility companion.

## Done Criteria

- lineage-local, Workspace-level, and project-level Reduction roles are distinguishable without creating new Reduction schemas merely for scope
- completion/terminal state remains owned by qualified lifecycle/currentness evidence rather than Reduction prose or placement
- a lineage-local Reduction can preserve immutable leaf recovery and truthful collapse boundaries before historical source is considered for removal
- the profile composes with existing Core `reduction-preflight` and destructive eligibility rather than creating parallel delete semantics
- one small terminal lineage is dogfooded through Reduction and destructive eligibility without performing deletion

## Scope

- design and dogfood the operational profile using existing schemas/contracts where sufficient
- prefer lineage-local subject placement for a Reduction that reduces one work lineage
- use `.topics/reductions/...` for cross-lineage Workspace/project composition rather than generic relocation of every Reduction
- keep destructive apply out of scope
- do not treat lexical `Status`, filenames, timestamps, directory placement, or the mere existence of a Reduction as completion evidence

## Dependencies

- canonical `tiinex.reduction.v1`
- maintained destructive-lineage eligibility companion
- existing Reduction placement/expansion decisions
- Core lineage topology and `project-lineage-operative-state`
- Core `project-lifecycle-readiness` and `reduction-preflight`

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: hMQ7dCdNKKtNeHmee9bNXbl0GGju2NLa0uW-FQuJVBo