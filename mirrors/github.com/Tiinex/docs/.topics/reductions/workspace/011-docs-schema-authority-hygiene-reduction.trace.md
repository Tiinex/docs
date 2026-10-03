# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.reduction.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/reduction/tiinex.reduction.v1.schema.md)
  - Created At: 2026-10-03 18:20:00
  - Trace: [010-docs-fresh-start-reduction.trace.md](010-docs-fresh-start-reduction.trace.md)
  - Origin:
    - [relative](010-docs-fresh-start-reduction.trace.md)
- Current
  - Current Schema: [tiinex.reduction.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/reduction/tiinex.reduction.v1.schema.md)
  - Created At: 2026-10-03 19:11:13
  - Authors: Anchor
  - Why: Keep the canonical Docs schema tree structurally truthful and fully valid before new post-cleanup material is populated.
  - Summary: Reduce the misplaced and self-integrity-ambiguous root-level Workspace schema source into the canonical workspace family placement with exact recovery.
  - Status: ready/local

---

# Docs Schema Authority Hygiene Reduction

## Source Context

- Reduced Workspace: `docs`
- Immutable Recovery Snapshot: `Tiinex/docs@d0e2b274558c2ee931c84318e4b84411a9da3265`
- Retired Source Path: `.topics/.schemas/tiinex.workspace.v1.schema.md`
- Retired Source Git Blob: `62f712beac5693f8400fdbe6a28d89346656a2c1`
- Recovery Qualification: the exact pre-change Workspace schema bytes in the carried Major 017 baseline match that immutable Git blob.
- Trigger: project-wide schema hygiene before new post-cleanup material is populated.

## Reduced State

- The old root-level Workspace schema placement is no longer current.
- Docs schema directory convention already declares that `tiinex.root.v1.schema.md` remains at the schema root while child schemas live in family directories.
- `tiinex.workspace.v1` is a child of `tiinex.root.v1`; keeping it beside Root was therefore a historical placement exception with no current semantic need.
- The old Workspace schema source also carried only its historical c14n-v1 Root-target integrity entry and no primary c14n-v2 self entry, so shared schema-source validation classified it as `integrity.c14n-v2.ambiguous`.

## Carry-Forward State

- Canonical current path: `.topics/.schemas/workspace/tiinex.workspace.v1.schema.md`.
- Workspace schema semantics and schema identity remain `tiinex.workspace.v1`; this Reduction changes source organization and deterministic source integrity, not the Workspace artifact contract.
- The historical Root-target c14n-v1 integrity entry is preserved rather than rewritten as false history.
- The current Workspace schema now adds one verified c14n-v2 `Towards: self` entry and uses the correct `../tiinex.root.v1.schema.md` relative Origin from its family directory.
- `.topics/.schemas/README.md` now catalogs all 109 current schema source files; there are no unlisted current schema sources and no dead catalog links.

## Validation

- Pre-change schema-source audit: 109 schemas total; 108 clean; exactly 1 invalid (`tiinex.workspace.v1`, `integrity.c14n-v2.ambiguous`).
- Post-change schema-source audit: 109/109 `qualified-local-schema-source`; 0 errors; 0 warnings.
- Placement audit: after relocation, Root is the only `.schema.md` source at `.topics/.schemas/` root; every child schema is directory-scoped as required by the declared Docs convention.
- Core local schema synchronization: `ready`; 109 schemas; 6 generated outputs updated; 181 generated outputs unchanged; 0 findings.
- Core schema check after synchronization: `ready`; drift `0`; stale local schema copies `0`.
- All 17 carried Workspaces inspect with 0 errors, 0 warnings, and 0 info findings against the synchronized local Core state.
- Focused schema-source/sync/material/reference regression batch: 36/36 tests pass.

## Publication Boundary

- The relocated/resealed Workspace schema is qualified locally but is not claimed published by this Reduction.
- After the user commits and pushes Docs, Core published schema synchronization must bind `tiinex.workspace.v1` to the new immutable Docs path/revision before this schema hygiene frontier is considered terminally published.
- Existing immutable references to the retired published source remain historical references and are not mass-rewritten merely because canonical source placement changes.

## Loss And Uncertainty

- No semantic Workspace-schema fields or validation rules are intentionally removed.
- The retired exact source remains recoverable from the immutable snapshot and blob above.
- This Reduction does not authorize broader schema-family rearrangement; the audit found no second root-placement violation or second schema-source validation failure in the current 109-schema set.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [010-docs-fresh-start-reduction.trace.md](010-docs-fresh-start-reduction.trace.md)
  - Value: RyrgnFNpUIFxKoShZsJjG4zhJNduqDKAmLtYAH8RkLc

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: rt7g5sj1CocT6zI_w4AdH-sxYVxqu9GxmoK6L4W9tgw