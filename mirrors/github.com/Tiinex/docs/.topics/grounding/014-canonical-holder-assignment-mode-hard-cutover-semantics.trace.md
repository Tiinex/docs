# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 17:24:06
  - Trace: [001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Origin:
    - [relative](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 19:35:27
  - Authors: Anchor
  - Why: Operator requires replaced holder semantics to hard-cut over after migration rather than preserve multiple active artifact/tooling representations.
  - Summary: Define canonical-only Role Assignment Modes migration and remove permanent legacy holder authorization.
  - Status: ready/local

---

# Canonical Holder Assignment Mode Hard Cutover Semantics

## Objective

Supersede the temporary exact-legacy-role-mapping bridge with one canonical holder-assignment representation for current operational Roles.

Amend the Role semantic/schema contract so current operational `tiinex.party.role.v1` artifacts carry machine-readable canonical Assignment Modes directly, and define a hard-cutover migration boundary after which current Tooling must not authorize from legacy Role mappings, Holder State prose, compatibility fallbacks, or historical-role exceptions.

Historical immutable artifacts may remain auditable under their own pinned schema/source provenance, but they must not require current runtime compatibility support merely because they exist.

## Required Questions

- What exact `tiinex.party.role.v1` schema amendment is required for canonical Assignment Modes?
- Should the field be required for the new current operational Role schema revision, or otherwise constrained so there is only one active canonical machine-authority representation after cutover?
- How should old pinned Role artifacts remain historical/auditable without keeping legacy runtime authorization alive?
- What exact migration condition proves that all active Business Roles are canonical before the Core legacy bridge is removed?
- Which old mapping/compatibility semantics from the prior Canonical Holder Assignment Mode Semantic Disposition are explicitly superseded after cutover?
- What fail-closed diagnostic should current Tooling emit when current operational Role material lacks canonical Assignment Modes after cutover?
- Does schema/authoring support need amendment so Master Anchor can revise the active Business Role artifacts through qualified Tooling rather than maintaining parallel hand-authored formats?

## Done Criteria

- Produce one qualified semantic/schema disposition that explicitly supersedes permanent legacy holder-assignment compatibility for current operational Roles.
- Amend or qualify the canonical `tiinex.party.role.v1` schema contract so Assignment Modes is a first-class machine-readable semantic field at the correct Holder Relationship location.
- Define the exact canonical token domain and preserve separation between Holder State, binding assertion, assignment authorization, bounded binding result and durable holder identity.
- Define a migration/hard-cutover rule: migrate active Roles, qualify/audit them, then remove legacy Core mappings/fallbacks and legacy-positive tests.
- Preserve historical artifact auditability through pinned historical provenance without requiring current Tooling to positively authorize their deprecated representation.
- Provide exact acceptance criteria for Master Anchor Business Role migration and Loom Core cleanup.
- Return one qualified Axiom-to-Anchor Handoff.

## Scope

Docs semantic/schema authority for the holder-assignment hard cutover only.

No Business Role mutation and no Core implementation in this lane.

## Dependencies

- Business Task: Canonical Holder Assignment Mode Normalization;
- Axiom Decision: Canonical Holder Assignment Mode Semantic Disposition;
- Loom return: Canonical Holder Assignment Mode Normalization Qualification;
- operator direction that replaced semantics should be migrated and legacy runtime support removed rather than maintained indefinitely.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Value: sHcRIrW-bE0NbTMBahP5wbeJg3VVtpaeU5wqWGajp_0

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: W_jOwoll661jCy0e7caUmza3UMJjC1OHAa-bB5SFeXw