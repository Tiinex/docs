# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-03 13:29:14
  - Trace: [001-1-1-1-1-10-vscode-reference-safe-scaffold-relocation-evidence.trace.md](001-1-1-1-1-10-vscode-reference-safe-scaffold-relocation-evidence.trace.md)
  - Origin:
    - [relative](001-1-1-1-1-10-vscode-reference-safe-scaffold-relocation-evidence.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-03 14:38:01
  - Authors: Anchor
  - Why: Close the final special Site structure and make filesystem hygiene explicit before project-wide Major 016 closure.
  - Summary: Preserve Site structural convergence, schema-authority cleanup, and the bounded multi-root empty-directory operator.
  - Status: ready/local

---

# Site Scaffold Relocation, Schema Convergence, and Empty-directory Operator Evidence

## Supported Claim Or Question

- Supported Claim Or Question: whether the remaining Site legacy subject roots can converge under `.topics/work`, the stale Site-local Workspace schema copy can be retired without losing recoverability, and VS Code can safely prune already-empty directory chains across a multi-root Workspace
- Evidence Role: preserve the final Site structural migration and the bounded operator hygiene added before project-wide closure
- Target Artifact: [Project Workspace Scaffold Migration](001-1-1-1-project-workspace-scaffold-migration-task.trace.md)
- Review Context: Major 016 continuation from checkpoint `016-1-1`

## Provenance

- Known Source: exact `016-1-1` carried Workspace bytes, current Core `projectScaffoldArtifactRelocation`, current Core published schema-reference authority, and the immutable Site Git snapshot identified below
- Preservation Basis: exact global Core relocation projection, projected-vs-applied byte comparison for all Tiinex artifacts, post-apply Core inspection, exact immutable Git recovery for the retired Site-local schema, and deterministic integrity verification of repaired Workspace entrypoints
- Site Local Workspace-schema Recovery Snapshot: `Tiinex/site@499d79b79c794e6fe154e487ca0786f314eeb035`, path `.topics/.schemas/tiinex.workspace.v1.schema.md`, Git blob `3ca66af5967dc31e8fa1bc6765500832deb9530c`
- Canonical Workspace-schema Authority: `Tiinex/docs@302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6`, path `.topics/.schemas/tiinex.workspace.v1.schema.md`, Git blob `62f712beac5693f8400fdbe6a28d89346656a2c1`
- Local-copy Difference: Site and canonical Docs schema files have the same size and schema body; the Site copy differs only in the previously classified stale c14n-v1 Parent-integrity value while canonical Docs carries the corrected value
- Provenance Limits: this Evidence does not claim remote mutation by the current Anchor; the immutable Site snapshot is recovery authority for the retired local copy and the canonical Docs binding is the active schema authority

## Evidence Material

- Material: global Core relocation projection and applied Site migration for `.topics/refactor`, `.topics/tooling`, and `.topics/viewer`
- Material Kind: reference-safe artifact relocation, schema-authority convergence, bounded exact-byte retirement, filesystem hygiene, and operator qualification evidence
- Site Structural Changes: `.topics/refactor` → `.topics/work/refactor`; `.topics/tooling` → `.topics/work/tooling`; `.topics/viewer` → `.topics/work/viewer`
- Tiinex Artifacts Moved: 186
- Global Relocation Materials: 1480 Tiinex artifacts
- Reference Rewrites: 175
- Parent Integrity Updates: 185
- Self Reseals: 197
- Byte-changed Artifacts: 197
- Applied Changed Outputs: 316 across App, Business, Core, Docs, Site, and VS Code
- Projected-vs-applied Audit: expected artifacts `1480`; actual artifacts `1480`; missing `0`; unexpected `0`; byte mismatches `0`
- Post-relocation Core Inspect: App, Business, Core, Docs, Site, and VS Code all zero findings
- Targeted Core Relocation Tests: `2/2 PASS`
- Empty Directory Dogfood: the new bounded cleanup helper planned and removed `9/9` now-empty Site legacy directories deepest-first; `.topics` and `.topics/.workspaces` remained protected

## Site Workspace-schema Convergence

- Site Local Schema State: the Site-local `.topics/.schemas/tiinex.workspace.v1.schema.md` was still selected by both current Site Workspace entrypoints but carried the old stale Parent-integrity value and was not Site-owned canonical schema authority
- Current Entrypoint Repair: `.topics/.workspaces/tiinex-site.workspace.md` now binds both Envelope Root and Current Workspace schema to Core-qualified immutable Docs authority; `.topics/.workspaces/viewer.workspace.md` now binds Current Workspace schema to the same immutable Docs authority
- Integrity Repair: `tiinex-site.workspace.md` c14n-v2 self integrity verifies after repair; `viewer.workspace.md` c14n-v1 self digest verifies after repair
- Local Schema Retirement: `.topics/.schemas/tiinex.workspace.v1.schema.md` deleted only after exact immutable Site recovery was proven and both current entrypoints ceased depending on the local copy
- Post-retirement Site Inspect: zero errors, zero warnings, zero info findings
- Remaining Legacy/Special Roots: `.topics/refactor`, `.topics/tooling`, `.topics/viewer`, and `.topics/.schemas` absent after apply

## VS Code Empty-directory Operator

- Command: `Tiinex: Prune Empty Directories`
- Scope: all currently open VS Code Workspace Folders in one explicit invocation
- Multi-root Boundary: each Workspace root is cleaned separately; any nested Workspace root is excluded from its parent Workspace traversal and is handled only as its own root
- Cascading Empty-parent Behavior: discovery identifies directory chains that become empty after descendants are removed; apply runs deepest-first so `a/b/c` can be removed before `a/b`, then `a`
- Mutation Boundary: empty-directory `rmdir` only; never recursive deletion; if concurrent work makes a directory non-empty after preview, that directory is skipped rather than forced
- Protected Material: Workspace roots are never removable; `.git`, `.hg`, and `.svn` subtrees are not traversed; `.topics` and `.topics/.workspaces` may be traversed but are never removed; symlinks and other non-directory entries are treated as material and never followed
- Operating-system Boundary: implementation uses Node/VS Code filesystem and path APIs only, with normalized relative paths and no shell/PowerShell/Bash dependency
- Operator Boundary: command presents the discovered count and per-Workspace summary and requires explicit confirmation before mutation
- Qualification Probe: TypeScript syntax transpilation passed; nested-parent convergence/protection behavior passed; symlink/race-safe behavior passed; command contribution and registration checks passed
- Full VS Code Typecheck Limitation: the carried Workspace does not include `@types/node` / `@types/vscode`, so the normal repository typecheck cannot complete inside the carrier; this remains a local dependency-availability limitation rather than a claimed passing full suite

## Preservation And Fidelity

- Preservation State: every projected Tiinex artifact byte after Site relocation exactly matches Core projection; the retired Site-local schema remains exactly recoverable from the immutable Git snapshot above
- Fidelity Notes: no immutable historical recovery URL was modernized merely because current coordinates changed; only current references whose targets changed were rebased
- Known Losses: no unrecoverable bytes; intentional filesystem-coordinate convergence and retirement of one stale redundant local schema copy only

## Interpretation Limits

- Not Yet Used As: proof that the entire Major 016 project audit and Project Reduction are complete
- Does Not Prove: that historical schema-reference warnings require repair; material-equivalent immutable historical references remain governed by existing Core equivalence semantics
- Must Not Be Treated As: authority for recursive directory deletion, deletion of nested Workspace roots, deletion of non-empty directories, or deletion of version-control metadata

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-1-10-vscode-reference-safe-scaffold-relocation-evidence.trace.md](001-1-1-1-1-10-vscode-reference-safe-scaffold-relocation-evidence.trace.md)
  - Value: N5sWCLuCUHG4y1pD-DBGjIuhciHqgx160Qjd0ncJzEw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: RGinKkg-0NMtLbT48zfrYIOvPS3D41evsyVrX4c5dqg