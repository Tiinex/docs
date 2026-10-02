# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-02 21:41:40
  - Trace: [001-1-existing-reduction-lifecycle-and-eligibility-landscape-evidence.trace.md](001-1-existing-reduction-lifecycle-and-eligibility-landscape-evidence.trace.md)
  - Origin:
    - [relative](001-1-existing-reduction-lifecycle-and-eligibility-landscape-evidence.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-02 21:42:23
  - Authors: Anchor
  - Summary: Proposed operational profile for lineage-local, Workspace, and project Reduction using the existing canonical Reduction and destructive-eligibility contracts.
  - Status: ready/local

---

# Lineage Closure Reduction Operational Profile Decision

## Decision

- State: proposed-for-dogfood
- Subject: operational use of canonical `tiinex.reduction.v1` for lineage closure, Workspace consolidation, project consolidation, and later destructive eligibility
- Decision: keep one canonical Reduction schema and define scope-specific usage profiles through placement, qualified source identity, lifecycle evidence, hierarchical composition, and the existing separate destructive-lineage eligibility companion
- Completion Boundary: a lineage becomes a closure-Reduction candidate only after qualified lifecycle/currentness evidence establishes the relevant terminal state; Reduction existence, prose, placement, or chronology never creates completion
- Lineage Closure Placement: author the local Reduction with the work subject lineage when it reduces one bounded lineage; its semantic Parent/placement must remain on a surviving truthful ancestor or qualified carry-forward anchor rather than depending on material proposed for deletion
- Lineage Closure Source: `Source Context` must preserve exact identities for the reduced terminal material. When later destructive eligibility is intended, every disappearing semantic leaf must additionally be recoverable through an immutable repository/ref/path locator, explicit disposition/reason, and truthful historical collapse boundary compatible with the maintained eligibility companion
- Workspace Reduction: place cross-lineage Workspace composition under `.topics/reductions/workspace/`; it reduces qualified local Reductions and preserves their unresolved loss/uncertainty rather than replacing their provenance
- Project Reduction: place multi-Workspace composition under Business `.topics/reductions/project/`; it reduces qualified Workspace/local Reductions and acts as the project-level recoverability/frontier index without revalidating upstream claims
- Operative State Use: Core Lineage Operative State may project topology, explicit qualified currentness, and lifecycle readiness for classification, but it does not itself produce `reducible`, destructive eligibility, or delete authority
- Destructive Boundary: Core `reduction-preflight` owns read-only composition and exact candidate-set eligibility. `eligible` remains necessary evidence only; destructive apply remains a separate future capability/authority and is not introduced by this Decision

## Basis

- `tiinex.reduction.v1` already supports lineage reduction and hierarchical composition of prior qualified Reductions while explicitly excluding completion, closure, destructive eligibility, deletion authorization, and release readiness from ordinary Reduction qualification
- the maintained destructive-lineage eligibility companion already defines fail-closed exact candidate set, snapshot, currentness, immutable leaf, Parent-closure, and contract-binding requirements
- Site placement/expansion precedent already separates semantic placement from repository locality and requires exact recoverability for semantically removed leaves
- Business Reduction Major 001 demonstrates non-destructive project-wide attention reduction without manufacturing closure or delete authority
- Core already has Parent graph traversal, lifecycle readiness, Lineage Operative State, and `reduction-preflight`; introducing another workflow engine or Reduction schema would duplicate existing ownership rather than close the observed gap

## Consequences

- no `tiinex.reduction.v2` or dedicated completion-Reduction schema is introduced for these scope distinctions
- local lineage Reduction remains subject-local; generic `.topics/reductions/` is reserved for cross-lineage composition scopes such as Workspace/project Reduction
- a future Native `Reduce Terminal Lineage` process/transition may scaffold this flow only after dogfood confirms the profile; Native must not redefine completion or eligibility semantics owned by Docs/Core
- project-wide cleanup must proceed from qualified local/Workspace Reductions toward project composition, then exact destructive eligibility, then separately authorized deletion
- the next gate is one small terminal-lineage dogfood through Reduction plus `reduction-preflight`; no source deletion is authorized by this proposed Decision

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-existing-reduction-lifecycle-and-eligibility-landscape-evidence.trace.md](001-1-existing-reduction-lifecycle-and-eligibility-landscape-evidence.trace.md)
  - Value: 75Qml7GCuF_dRAqcXfhAxI8fc3fydQnil66EgCsQDuk

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: Pw_Qt7-F0TA6HYQKkk6R4MJpnW-TpbiEDTPgWKs0Uac