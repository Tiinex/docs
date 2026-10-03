# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-03 11:01:28
  - Trace: [001-1-1-1-project-workspace-scaffold-migration-task.trace.md](001-1-1-1-project-workspace-scaffold-migration-task.trace.md)
  - Origin:
    - [relative](001-1-1-1-project-workspace-scaffold-migration-task.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-03 12:39:09
  - Authors: Anchor
  - Why: Prevent fallback schema authority and misleading empty legacy directories from becoming durable migration debt.
  - Summary: Close Scaffold post-publication synchronization debt and qualify bounded empty-directory pruning for VS Code Replace before migration continues.
  - Status: ready/local

---

# Scaffold Publication Synchronization And Replace Hygiene Qualification

## Supported Claim Or Question

- Supported Claim Or Question: whether the accepted Structural Scaffold contract has now completed its published Docs → synchronized Core → dependent Native readiness path, and whether VS Code Replace can stop preserving misleading empty legacy directories after migration or incoming replacement.
- Evidence Role: closes the publication/synchronization debt discovered during Scaffold migration and qualifies the bounded Replace hygiene correction before migration continues.
- Target Artifact: [Project Workspace Scaffold Migration](catalog/001-1-1-1-project-workspace-scaffold-migration-task.trace.md)
- Review Context: Major 015 migration prerequisite gate before Site, Verse Playthings, and VS Code structural relocation continues.

## Provenance

- Known Source: current carried Docs/Core/Native/VS Code Workspace material plus immutable published Docs commit `70bdfd1efe39057f2453d3ef40c35799f92fd63e`.
- Preservation Basis: exact local scaffold schema blob matched published Docs blob `dbb802f6aea7f85a151b6144ef37ac0cf0fc34a2`; Core published schema synchronization/check receipts; re-authored Native Scaffold artifacts; Core targeted tests; Native audit/package tests; bounded Replace cleanup behavioral test.
- Provenance Limits: the Native Scaffold repair and VS Code Replace source correction remain local to the current carrier until the user commits/pushes them; the VS Code repository dependency tree is not carried in the Handoff Package, so the normal repository `npm test`/typecheck gate is deferred to an installed dependency environment.

## Evidence Material

- Material Kind: post-publication schema readiness and host migration-hygiene qualification.
- Material: Docs `tiinex.scaffold.v1` is published at exact commit `70bdfd1efe39057f2453d3ef40c35799f92fd63e`. Core `schemas sync --published` rewrote exactly three generated support outputs while preserving 184 unchanged outputs; `schemas check --published` then reported zero drift and zero stale local schema copies. The generated Scaffold binding now has publication state `published-immutable-canonical`, the exact Docs commit/blob, and immutable permalink/raw URL.
- Native Repair: all eight first-party Scaffold artifacts were re-authored against the published immutable Scaffold schema, including Parent Schema references along the catalog lineage; direct Native artifact audit reports 8 files, 0 errors, 0 warnings, and no identifier-only `Current Schema: tiinex.scaffold.v1` fallback remains. Native tests pass 2/2 against the exact current local Core Workspace and package check includes all eight Scaffold artifacts.
- Core Regression Gate: targeted schema/scaffold/reference batch passes 30/30 after published synchronization.
- VS Code Replace Hygiene: Replace now invokes a bounded empty-directory cleanup after incoming files are materialized. Cleanup considers only directories observed before Replace, orders deepest-first, removes only actually empty directories, preserves ignored/symlink-overlapping protected paths, never targets the Workspace root, and rolls back any already-pruned directories if the cleanup itself fails. A transpiled behavioral test verified deepest-first removal, protected-empty preservation, non-empty preservation, and restoration. The repository-level TypeScript gate could not run in the carried Workspace because `node_modules/@types/node` and `@types/vscode` are intentionally absent from the carrier; the source test suite was updated to exercise the new helper once dependencies are installed.

## Preservation And Fidelity

- Preservation State: Scaffold semantic authority remains Docs-owned; Core only synchronizes generated/runtime support; Native carries first-party Scaffold material; VS Code only performs bounded host filesystem hygiene during explicitly authorized Replace.
- Fidelity Notes: historical immutable Reduction URLs and historical artifact reference debt were not rewritten. Native Scaffold bodies were preserved while Continuity schema authority and integrity were regenerated against the published source.
- Known Losses: Native re-authoring intentionally changes Continuity timestamps/self-integrity and descendant Parent-integrity values; this is the qualified repair, not preservation of the pre-publication fallback bytes.

## Interpretation Limits

- Not Yet Used As: authority to resume all remaining Workspace relocation without each Workspace's own relocation preview/apply/audit gate.
- Does Not Prove: that every historical empty directory is safe to remove outside Replace, that ignored directories should be removed, or that future Scaffold schema revisions may skip Schema Development publication verification.
- Must Not Be Treated As: permission for recursive directory deletion, permission to rewrite historical immutable source references, or a replacement for the final project-wide Major 015 audit.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-project-workspace-scaffold-migration-task.trace.md](001-1-1-1-project-workspace-scaffold-migration-task.trace.md)
  - Value: MZdV8wpgzE1NXp44qnzV0ERMAc8NmRvRV_o9zRtxGFU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: qqUqvX-iOzvP8Hv5f3suwX7P18LN3fC0Vv25qaVd5ME