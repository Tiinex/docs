# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 19:35:27
  - Trace: [014-canonical-holder-assignment-mode-hard-cutover-semantics.trace.md](../014-canonical-holder-assignment-mode-hard-cutover-semantics.trace.md)
  - Origin:
    - [relative](../014-canonical-holder-assignment-mode-hard-cutover-semantics.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 19:36:20
  - Authors: Anchor
  - Why: The interim exact legacy mapping solves the production blocker but violates the operator requirement to remove replaced representations after qualified migration.
  - Summary: Delegate canonical-only holder Assignment Modes schema and migration cutover semantics.
  - Status: ready/local

---

# Anchor To Axiom — Canonical Holder Assignment Mode Hard Cutover

## Handoff Parties

- Purpose: replace the temporary legacy holder-assignment bridge with one canonical current Role representation and define the schema/migration cutover needed before Core removes legacy authorization support.
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](business::.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- canonical-holder-hard-cutover-semantics
  - Transfer Kind: work-and-responsibility
  - Description: define and, where semantically justified, amend the Role schema contract so current operational Roles carry canonical Assignment Modes directly and legacy holder mappings can be removed after migration.
  - Controlling Artifact: [Canonical Holder Assignment Mode Hard Cutover Semantics](../014-canonical-holder-assignment-mode-hard-cutover-semantics.trace.md)
  - Boundary: Docs semantic/schema authority only; no Business Role mutation and no Core implementation.

- legacy-supersession-boundary
  - Transfer Kind: work-and-responsibility
  - Description: state exactly which backward-compatibility provisions of the prior holder Decision become migration-only and cease to authorize current Tooling after hard cutover.
  - Controlling Artifact: [Canonical Holder Assignment Mode Hard Cutover Semantics](../014-canonical-holder-assignment-mode-hard-cutover-semantics.trace.md)
  - Boundary: historical artifacts may remain auditable through pinned historical provenance; audit preservation must not become permanent runtime compatibility.

## Required Context

- docs-workspace
  - Material: current Docs Workspace containing the accepted holder semantic Decision and canonical Role schema material.
  - Material Reference: [Docs Workspace](docs::.topics/.workspaces/tiinex-docs.workspace.md)
  - Purpose: writable semantic/schema authority workspace.
  - Availability: available

- prior-holder-decision
  - Material: accepted Canonical Holder Assignment Mode Semantic Disposition that introduced structured Assignment Modes and the temporary exact current-Role mapping bridge.
  - Material Reference: [Canonical Holder Assignment Mode Semantic Disposition](../013-canonical-holder-assignment-mode-semantic-disposition.trace.md)
  - Purpose: exact semantic basis to refine/supersede for hard cutover.
  - Availability: available

- business-holder-task
  - Material: controlling Business Canonical Holder Assignment Mode Normalization Task.
  - Material Reference: [Canonical Holder Assignment Mode Normalization](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Purpose: organizational lineage and bounded holder-normalization scope.
  - Availability: available

## Reference Context

- active-business-roles
  - Material: current Business Role declarations whose Holder Relationship semantics must be migrated to one canonical machine-readable representation before legacy Core support is deleted.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: exact migration population and semantic comparison evidence only; Business remains read-only to Axiom.
  - Availability: available

## Retained Responsibilities

- business-role-migration
  - Retained By: Anchor
  - Responsibility: revise and qualify the active Business Role artifacts to the accepted canonical schema/modes after Axiom returns.
  - Boundary: Axiom does not mutate Business.

- core-cutover
  - Retained By: Loom
  - Responsibility: after canonical schema and active Role migration are available, remove legacy holder mappings/fallbacks and legacy-positive tests from Core, then qualify canonical-only grounding.
  - Boundary: Loom does not invent schema semantics or preserve compatibility contrary to the accepted cutover.

## Exclusions And Dependencies

- no-permanent-legacy-fallback
  - Kind: excluded-scope
  - Description: do not retain exact legacy Role mapping, prose matching, compatibility parsing or dual active machine-authority paths as the steady-state solution.
  - Responsible Party Or Role: Axiom / Anchor / Loom.

- no-historical-rewrite-requirement
  - Kind: excluded-scope
  - Description: historical immutable carriers/artifacts need not be rewritten merely to remain historical audit evidence; their existence does not require current runtime authorization support.
  - Responsible Party Or Role: Axiom.

## Completion Expectation

- Signal Kind: return
- Signal Meaning: return the qualified canonical-only holder-assignment schema/migration disposition, any required Docs schema amendment, explicit supersession boundary, and exact Anchor/Loom acceptance criteria.
- Return To: Anchor

## Interpretation Limits

- Does Not Mean: active Business Role migration or Core legacy removal has already occurred.
- Must Not Be Treated As: authority to mutate Business or Core from this Axiom lane.
- Must Not Be Used To Claim: historical artifacts must remain executable under current Tooling merely because they remain auditable.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [014-canonical-holder-assignment-mode-hard-cutover-semantics.trace.md](../014-canonical-holder-assignment-mode-hard-cutover-semantics.trace.md)
  - Value: W_jOwoll661jCy0e7caUmza3UMJjC1OHAa-bB5SFeXw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: J-H5l2NqqGvW47pYBTo5d6hTpGfegHyfHoJZxWqVx_4