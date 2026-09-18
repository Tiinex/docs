# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 21:23:27
  - Trace: [001-2-7-5-1-2-1-1-1-identifier-only-historical-role-parent-cutover-semantics.trace.md](business::.topics/initiatives/001-2-7-5-1-2-1-1-1-identifier-only-historical-role-parent-cutover-semantics.trace.md)
  - Origin:
    - [relative](business::.topics/initiatives/001-2-7-5-1-2-1-1-1-identifier-only-historical-role-parent-cutover-semantics.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 21:23:57
  - Authors: Anchor
  - Summary: Identifier-Only Historical Role Parent Cutover Semantics
  - Status: ready/local

---

# Identifier-Only Historical Role Parent Cutover Semantics

## Objective

Determine the canonical semantic treatment of an immutable historical `tiinex.party.role.v1` Parent whose exact artifact bytes and integrity are qualified but whose historical `Current Schema` declaration names only the schema identifier and does not carry an exact schema target.

This must allow Anchor to decide whether direct Role continuity can be preserved for the active Anchor and Prism lineages during the Assignment Modes hard cutover without reinterpreting old bytes as the amended current Role schema, branching around the latest Role, rewriting history, or creating a second operational Role representation.

## Done Criteria

- Distinguish exact historical artifact identity/integrity, historical schema identifier, exact schema-source provenance, and current governing candidate schema authority.
- State whether direct current Role continuation is semantically permitted when the Parent's exact historical schema revision is not recoverable from its own `Current Schema` field.
- If permitted, define exactly what the child may claim in its Parent Schema/provenance and what remains unresolved/audit-only about the historical Parent.
- If not permitted, define the smallest truthful migration/reconciliation path that preserves Role identity and history without bypassing the latest active Role.
- Do not infer that identifier equality means schema-revision equality.
- Do not introduce Role-label exceptions, prose parsing, LLM/chat-specific semantics, permanent compatibility authority, or a second current Role format.
- Preserve the hard-cutover rule: current child Roles validate strictly against direct canonical `Assignment Modes`; legacy mappings remain migration evidence only.
- Return one qualified semantic disposition with a narrow Loom contract only if implementation changes are actually required.

## Scope

Docs semantic/schema authority for historical Parent schema-reference provenance during the canonical holder cutover. No Business mutation and no Core implementation.

## Dependencies

- Business `Identifier-Only Historical Role Parent Cutover Semantics`.
- Docs `Canonical Holder Assignment Mode Hard Cutover Semantic Disposition`.
- Core `Pre-Migration Role Parent Audit Cutover Correction Qualification`.
- Exact real failures from current Anchor/Prism parent shapes.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-7-5-1-2-1-1-1-identifier-only-historical-role-parent-cutover-semantics.trace.md](business::.topics/initiatives/001-2-7-5-1-2-1-1-1-identifier-only-historical-role-parent-cutover-semantics.trace.md)
  - Value: amoVp5X7FQ83c1SuPpW0Fw5PX_E6MTp7QwyyzrPscsw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: iNZX1GHL3yP-qup2z1kmUf9MUM8bBE94T1COQ1T64MA