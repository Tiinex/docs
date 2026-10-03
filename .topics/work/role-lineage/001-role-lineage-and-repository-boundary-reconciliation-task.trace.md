# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-11 17:31:36
  - Authors: Anchor
  - Why: The current Playthings-to-Prism naming correction and prior Business-heavy orchestration exposed a need to distinguish Role identity continuity from repository ownership without inventing Parent edges.
  - Summary: Canonical reconciliation of Role rename continuity and the boundary between Business-hosted Role identity and repository-local specialist work.
  - Status: ready/local

---

# Role Lineage And Repository-Boundary Reconciliation

## Objective

Reconcile current Tiinex Role continuity after repository-boundary correction, especially the ambiguous `Playthings` → `Prism` rename and the distinction between organizational Role references and specialist work ownership.

## Done Criteria

- Determine whether a readable Role rename that preserves the same capacity should continue through `Parent`, typed `Relation`, or another already-canonical mechanism.
- Audit the current Business Role branch for any new Role artifacts whose declared continuity does not match their actual identity/capacity continuity.
- Confirm that Business may remain the organizational home for reusable Role artifacts while Site/Core/Extensions/Verses own their own Task/Handoff/Evidence Parent lineages.
- Confirm that a Handoff endpoint reference to a Business Role does not make Business the owner or Parent of the Handoff work.
- Give Anchor an exact disposition for the historical sibling `001-9-prism-role.trace.md`, the earlier `001-8-playthings-role.trace.md`, and the next truthful current Prism endpoint without rewriting history.
- Identify any narrow canonical Docs clarification required; do not introduce a new schema family unless existing authority is insufficient.

## Scope

Role/Parent/Relation/Handoff semantics and current organizational Role lineage only. This is not a product implementation, carrier-lineage rewrite, repository migration, or mass cleanup.

## Dependencies

- Current Role schema and Parent/Relation/Handoff semantics in Docs.
- Current Business Role branch and repository-boundary correction.
- Current repo-local orchestration frontiers in Core, Site, Verse Playthings, VS Code and Chrome as concrete examples.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: nDqWSRlYlskH5xXPO6_Rfp_BMR_ZUB_emhLZgZSRYeM