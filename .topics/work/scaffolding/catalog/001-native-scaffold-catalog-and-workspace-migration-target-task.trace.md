# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-10-02 21:24:49
  - Trace: [001-4-structural-scaffold-acceptance-decision.trace.md](../001-4-structural-scaffold-acceptance-decision.trace.md)
  - Origin:
    - [relative](../001-4-structural-scaffold-acceptance-decision.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-03 10:50:19
  - Authors: Anchor
  - Summary: Define the composable Native Scaffold catalog that becomes the structural target for Workspace migration.
  - Status: ready/local

---

# Native Scaffold Catalog And Workspace Migration Target

## Objective

Define the minimum first-party Native Scaffold catalog that can serve as the deterministic structural target for migration of the 17 current Tiinex Workspaces after historical Reduction, without encoding legacy subject-directory improvisation into the new structure.

## Done Criteria

- universal Workspace structure is separated from optional capabilities so Git-untracked empty directories are not treated as durable repository state
- reusable first-party Scaffold instances exist for Workspace base, work root, process root, reduction root, schema-authority Workspace structure, organization Workspace structure, and software-repository structure
- every current Workspace can be assigned a bounded set of these Scaffolds without requiring a Workspace-specific one-off template
- legacy subject work such as `refactor`, `grounding`, `viewer`, `tooling`, `recovery`, or similar work-lineage roots is not blessed as a new universal top-level convention merely because it exists historically
- migration remains a separate plan/apply concern: Scaffold describes desired structure; migration reconciles current paths to that structure
- Native remains content authority, Docs remains semantic-contract authority, and Core remains mechanics/planning authority

## Scope

- define and qualify the first catalog only; do not migrate Workspace source paths in this tranche
- preserve `tiinex.native.workspace-base.v1` for recovery but allow a v2 base to supersede it for new selection
- directory-only Scaffold entries are preferred where content-generation authority is not yet needed
- no deletion or movement is authorized by Scaffold qualification

## Dependencies

- accepted `tiinex.scaffold.v1` semantic placement and acceptance lineage
- qualified Native `tiinex.native.workspace-base.v1`
- Major 015 project-wide historical Reduction and surviving Workspace structure inventory
- future Core composite Scaffold/migration projection

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-4-structural-scaffold-acceptance-decision.trace.md](../001-4-structural-scaffold-acceptance-decision.trace.md)
  - Value: T_JYNt6jkjlKQDBnW9SkWqX4srB2ZEBtw2GTj1l0S5c

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: TPWlSWzYsoPCNjm3JUMq_fqaDnNgGcP-Cm4gfKpGwk4