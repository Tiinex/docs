# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-03 10:51:49
  - Trace: [001-1-1-native-scaffold-catalog-v1-and-migration-target-decision.trace.md](001-1-1-native-scaffold-catalog-v1-and-migration-target-decision.trace.md)
  - Origin:
    - [relative](001-1-1-native-scaffold-catalog-v1-and-migration-target-decision.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-03 11:01:28
  - Authors: Anchor
  - Summary: Migrate all current Workspaces toward the accepted Native Scaffold catalog through bounded reference-safe waves.
  - Status: ready/local

---

# Project Workspace Scaffold Migration

## Objective

Converge current Tiinex Workspaces toward the accepted Native Scaffold catalog through exact read-only planning, bounded path relocation, reference-preserving transformation where required, post-apply qualification, and recoverable checkpoints.

## Done Criteria

- every migrated Workspace has an explicit selected Scaffold set and exact current-to-desired path plan
- no subject root is moved merely because of its name; the move must be part of the accepted legacy-subject-to-work placement policy
- zero-reference relocations preserve exact artifact bytes while changing only path coordinates
- relocations that affect relative or Workspace-qualified references are not applied until Core can deterministically rebase those references and reseal affected integrity relationships
- post-apply audit proves no unexpected removal, byte drift, broken Parent resolution, or unresolved Scaffold conflict
- Site `.topics/.schemas` receives an explicit semantic disposition rather than being treated as canonical schema authority by directory name
- Handoff Package checkpoints bound each materially risky migration wave

## Scope

- all 17 Major 015 Workspaces
- migration only; historical destructive Reduction remains governed by its separate exact eligibility contract
- preserve subject subtree names under `.topics/work/<subject>` in this tranche
- first dogfood wave is limited to Workspaces whose root relocation requires no reference rewrite according to the project-wide relocation impact projection

## Dependencies

- accepted Native Scaffold catalog v1 migration-target Decision
- Core composite Scaffold and migration projection
- project-wide relocation impact Evidence
- future generic Core reference-rebase/integrity-reseal mechanics for non-zero-reference migration waves

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-native-scaffold-catalog-v1-and-migration-target-decision.trace.md](001-1-1-native-scaffold-catalog-v1-and-migration-target-decision.trace.md)
  - Value: G0ifuNFvjZBy_FxS1ftpnr1k9ZLap1dWrbArq0pSpbw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: MZdV8wpgzE1NXp44qnzV0ERMAc8NmRvRV_o9zRtxGFU