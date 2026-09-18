# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 21:26:48
  - Trace: [012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md](012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md)
  - Origin:
    - [relative](012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 21:53:20
  - Authors: Axiom
  - Why: Axiom completed the delegated Docs semantic classification; Anchor now owns Business migration/integration and Loom owns the required common-author correction.
  - Summary: Return identifier-only historical Role Parent continuity semantics and the narrow Loom authoring contract for Anchor/Prism migration.
  - Status: ready/local

---

# Axiom To Anchor — Identifier-Only Historical Role Parent Cutover Return

## Handoff Parties

- Purpose: return the accepted semantic rule for direct continuation from exact historical Role Parents whose `Current Schema` declares only the Role schema identifier, plus the narrow Loom authoring contract needed to finish Anchor/Prism migration without inferring historical schema-revision equality.
- From: Axiom
- From Kind: role
- From Reference: [Axiom Role — Canonical Holder Cutover Continuation](business::.topics/roles/001-2-1-axiom-canonical-holder-cutover-role.trace.md)
- To: Anchor
- To Kind: role
- To Reference: [Anchor Role — Thin-Lineage Orchestration Discipline Continuation](business::.topics/roles/001-1-1-1-1-anchor-thin-lineage-orchestration-discipline-role.trace.md)

## Transfers

- identifier-only-parent-semantic-integration
  - Transfer Kind: work
  - Description: integrate the accepted rule that exact historical artifact continuity may proceed through a Parent whose exact bytes/integrity and schema identifier are qualified while its exact historical schema revision remains unresolved, with the child preserving `Parent Schema` as the plain identifier rather than linking it to today's amended schema revision.
  - Controlling Artifact: [Identifier-Only Historical Role Parent Cutover Semantic Disposition](../017-identifier-only-historical-role-parent-cutover-semantic-disposit.trace.md)
  - Boundary: this permits truthful direct lineage continuation only; it does not validate the historical Parent against today's Role contract or create a second current Role representation.

- anchor-prism-business-migration
  - Transfer Kind: work
  - Description: after the required Loom authoring correction qualifies, revise the active Anchor and Prism Roles by ordinary direct continuation from their latest active historical Parents, emit direct canonical Assignment Modes under the current Role schema, qualify exact post-migration digests, and reconcile them into the controlling complete active-Role migration set.
  - Controlling Artifact: [Identifier-Only Historical Role Parent Cutover Semantic Disposition](../017-identifier-only-historical-role-parent-cutover-semantic-disposit.trace.md)
  - Boundary: Anchor owns Business mutation and migration completeness; Axiom's semantic return does not itself migrate either Role or declare the active set complete.

- loom-identifier-only-historical-parent-authoring-correction
  - Transfer Kind: work
  - Description: implement the narrow common-author/reference-authority behavior that preserves a historical Parent's exact plain schema-id declaration as identifier-only authority, renders the child Parent Schema as the same plain id, withholds same-revision historical body validation, and never substitutes today's runtime canonical schema target for the absent historical target.
  - Controlling Artifact: [Identifier-Only Historical Role Parent Cutover Semantic Disposition](../017-identifier-only-historical-role-parent-cutover-semantic-disposit.trace.md)
  - Boundary: Loom may reuse the existing historical Parent audit split; it must preserve current child Assignment Modes strictness, exact Parent integrity, and fail-closed contradictory-target behavior.

- hard-cutover-reconciliation
  - Transfer Kind: work
  - Description: reconcile the qualified Anchor/Prism migrations and Loom correction under the existing canonical holder hard-cutover gate, then continue the complete active-Role migration and eventual legacy-positive bridge removal only when the pre-existing gate is fully satisfied.
  - Controlling Artifact: [Canonical Holder Assignment Mode Hard Cutover Semantic Disposition](../015-canonical-holder-assignment-mode-hard-cutover-semantic-dispositi.trace.md)
  - Boundary: this return does not weaken or bypass the complete-migration gate for legacy bridge removal.

## Required Context

- identifier-only-historical-parent-decision
  - Material: accepted Axiom semantic disposition defining direct continuation, identifier-only Parent Schema provenance, historical audit/current candidate separation, fail-closed boundaries and Loom mechanics.
  - Material Reference: [Identifier-Only Historical Role Parent Cutover Semantic Disposition](../017-identifier-only-historical-role-parent-cutover-semantic-disposit.trace.md)
  - Purpose: controlling semantic result of this return.
  - Availability: available

- current-role-schema
  - Material: current amended `tiinex.party.role.v1` schema that remains the exact governing schema for newly authored current Role children and requires direct canonical Assignment Modes.
  - Material Reference: [Party Role Schema](docs::.topics/.schemas/party/role/tiinex.party.role.v1.schema.md)
  - Purpose: current-child validation authority; not historical Parent revision authority.
  - Availability: available

- controlling-business-cutover-task
  - Material: Business Identifier-Only Historical Role Parent Cutover Semantics Task.
  - Material Reference: [Identifier-Only Historical Role Parent Cutover Semantics](business::.topics/initiatives/001-2-7-5-1-2-1-1-1-identifier-only-historical-role-parent-cutover-semantics.trace.md)
  - Purpose: organizational migration scope and acceptance boundary.
  - Availability: available

- active-anchor-historical-parent
  - Material: exact active Anchor historical Role Parent with identifier-only Current Schema.
  - Material Reference: [Anchor Role — Thin-Lineage Orchestration Discipline Continuation](business::.topics/roles/001-1-1-1-1-anchor-thin-lineage-orchestration-discipline-role.trace.md)
  - Purpose: real migration Parent governed by the returned generic rule.
  - Availability: available

- active-prism-historical-parent
  - Material: exact active Prism historical Role Parent with the same identifier-only Current Schema shape.
  - Material Reference: [Prism Role](business::.topics/roles/001-8-1-prism-role.trace.md)
  - Purpose: second real migration Parent proving the rule is not Role-label-specific.
  - Availability: available

## Reference Context

- incoming-identifier-only-cutover-handoff
  - Material: Anchor-to-Axiom Handoff that transferred this semantic work.
  - Material Reference: [Anchor To Axiom — Identifier-Only Historical Role Parent Cutover](012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md)
  - Purpose: original transfer, exclusions, retained responsibilities and completion expectation.
  - Availability: available

- core-historical-parent-audit-qualification
  - Material: Loom qualification proving the historical-Parent/current-candidate audit separation for exact historical Parents with exact schema-reference authority.
  - Material Reference: [Pre-Migration Role Parent Audit Cutover Correction Qualification](core::.topics/grounding/evidence/015-pre-migration-role-parent-audit-cutover-correction-qualification.trace.md)
  - Purpose: implementation evidence that the historical validation split is already mechanically viable; it is not semantic authority for identifier-only treatment.
  - Availability: available

- canonical-holder-hard-cutover-decision
  - Material: accepted hard-cutover Decision requiring one current Role format and direct canonical Assignment Modes.
  - Material Reference: [Canonical Holder Assignment Mode Hard Cutover Semantic Disposition](../015-canonical-holder-assignment-mode-hard-cutover-semantic-dispositi.trace.md)
  - Purpose: governing one-representation and legacy-removal boundary that remains unchanged.
  - Availability: available

## Retained Responsibilities

- business-role-migration-and-completeness
  - Retained By: Anchor
  - Responsibility: mutate and qualify the active Anchor/Prism Role continuations, maintain the explicit complete active operational Role migration set, reconcile specialist returns and decide Business acceptance/checkpoint progression.
  - Boundary: Axiom does not mutate Business and does not infer migration completeness from carried Role inventory.

- core-common-author-correction-and-qualification
  - Retained By: Loom
  - Responsibility: implement and qualify the generic identifier-only historical Parent authoring behavior, preserve adversarial revision-isolation tests and later complete canonical-only legacy cleanup under the existing gate.
  - Boundary: Loom implements the accepted semantics and must not invent historical schema revision authority from current schema material.

- semantic-contradiction-review
  - Retained By: Axiom
  - Responsibility: review only a later concrete contradiction showing that truthful direct Parent continuity cannot be represented by existing Root schema-reference semantics or that a genuine cross-schema transition requires additional semantic authority.
  - Boundary: authoring inconvenience, identifier-only historical material or availability of today's schema bytes do not by themselves reopen this Decision.

## Exclusions And Dependencies

- no-historical-revision-inference
  - Kind: excluded-scope
  - Description: do not convert an identifier-only historical `Current Schema` into an exact link to today's amended Role schema from identifier equality, current runtime schema availability, repository location, Role label, filename, creation time or adjacent Parent Schema fields.
  - Responsible Party Or Role: Anchor / Loom.

- no-history-rewrite-or-lineage-branch
  - Kind: excluded-scope
  - Description: do not rewrite historical Anchor/Prism bytes and do not branch around the latest active Role merely to reach an older Parent with an exact schema target.
  - Responsible Party Or Role: Anchor.

- loom-authoring-correction-required
  - Kind: unresolved-dependency
  - Description: ordinary Anchor/Prism migration remains mechanically blocked until Loom qualifies the identifier-only historical Parent reference-authority correction described by Decision 017.
  - Responsible Party Or Role: Loom.

- legacy-removal-gate-unchanged
  - Kind: unresolved-dependency
  - Description: the temporary legacy positive holder bridge may be removed only after the complete active Role migration and canonical-only Core qualification required by the existing hard-cutover Decision; this return does not satisfy that gate by itself.
  - Responsible Party Or Role: Anchor / Loom.

## Completion Expectation

- Signal Kind: none
- Signal Meaning: this Handoff is the requested Axiom semantic return for identifier-only historical Role Parent cutover. No further Axiom signal is required unless Anchor or Loom encounters a concrete semantic contradiction while integrating the accepted rule.
- Return To: Anchor

## Interpretation Limits

- Does Not Mean: the historical Anchor or Prism Parent used today's amended Role schema revision; either Role has already been migrated; Loom's required authoring correction is already implemented; the complete active Role migration is established; or the legacy bridge may now be removed.
- Must Not Be Used To Claim: schema-revision equality from identifier equality, current validity of historical no-Assignment-Modes Role bytes, Business migration completion, Core implementation acceptance, holder identity, participant relevance, process applicability, delegation authority or source-mutation authority.
- Authority Limits: Axiom has completed only the bounded Docs semantic disposition. Anchor retains Business migration/integration/acceptance authority and Loom retains Core implementation/qualification authority.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md](012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md)
  - Value: 4DM-FzdeIdnMJgd_c1d8kD7CBoA_C0o_btjQy9rhnmg

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: sNBK8h6rpg_3-gKMwknUWd6SZhz7aEZGhscCjxC34Ok