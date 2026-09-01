# Continuity Context

- Envelope Schema: [tiinex.root.v1](../.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-01 00:59:00
  - Trace: [Human-First And Domain-Neutral Canonical Clarification — Axiom Return](001-1-1-1-1-1-1-1-axiom-to-anchor-human-first-domain-neutral-canonical-clarification-return-handoff.trace.md)
  - Origin:
    - [relative](001-1-1-1-1-1-1-1-axiom-to-anchor-human-first-domain-neutral-canonical-clarification-return-handoff.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-01 18:34:00
  - Authors: Anchor
  - Why: Close the remaining Foundation grounding seam: reusable operational guidance should be composable and recoverable without inventing Role inheritance, duplicating prompt prose across roles, or relying on hidden conversational state.
  - Summary: Bounded Axiom semantic discovery for composable operational grounding, applicability/binding, and recipient recovery using existing Tiinex authority before considering any new Policy schema.
  - Status: ready/local

---

# Composable Operational Grounding — Anchor To Axiom

## Handoff Parties

- Purpose: determine the smallest canonical semantic model for reusable operational guidance that can be grounded alongside Role/Handoff context without turning guidance into Role inheritance, authority inflation, or hidden prompt state
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role](https://github.com/Tiinex/business/blob/6d02d69dc08ec0a58a2538be8b7b11464ca60790/.topics/roles/001-1-anchor-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](https://github.com/Tiinex/business/blob/6d02d69dc08ec0a58a2538be8b7b11464ca60790/.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- operational-grounding-semantic-discovery
  - Transfer Kind: work-and-responsibility
  - Description: inspect current Party/Role, Relation, Handoff, Event Session, Decision/Process-adjacent, annotation/interaction, and other relevant maintained semantics and decide whether they already express reusable operational guidance plus bounded applicability strongly enough for a fresh recipient to recover how to work without role-prose duplication or chat memory
  - Boundary: prefer composition of existing semantic owners; do not introduce a new schema merely because a `Policy` label feels convenient

- applicability-binding-boundary
  - Transfer Kind: work-and-responsibility
  - Description: state what canonical predicate/binding can truthfully mean that operational guidance applies to a Role, Handoff, Project, Session, or other bounded context; distinguish semantic applicability from mere package carriage, adjacency, Required Context availability, authorship, or runtime loading
  - Boundary: generic Relation capacity must not silently become inheritance, delegation, holder propagation, responsibility merge, or universal policy authority

- recipient-grounding-composition
  - Transfer Kind: work-and-responsibility
  - Description: define what a fresh recipient may compose when grounding one work turn (for example Role + selected Handoff + applicable process/guidance + required interaction context), what remains separately owned, and which missing bindings must fail closed rather than be guessed from names, paths, package pointers, or prompt conventions
  - Boundary: package discovery-only Role pointers remain grounding/navigation aids only and do not gain semantic participation or applicability meaning

- policy-gap-disposition
  - Transfer Kind: work-and-responsibility
  - Description: explicitly accept or reject the need for a maintained generic Policy/Operating Guidance schema. If existing authority is sufficient, identify the exact composition pattern and reject unnecessary schema creation. If a real gap remains, specify only the irreducible semantic job and the minimum canonical change needed; do not implement broad descendants in this turn.
  - Boundary: no `tiinex.policy.v1` is pre-authorized by this Handoff

## Required Context

- current-party-role-authority
  - Material: current Party and Role schema notes
  - Material Reference: [Party](../.schemas/party/tiinex.party.v1.schema.md)
  - Purpose: generic actor/participant authority and Role/capacity specialization boundary
  - Availability: available

- current-role-authority
  - Material: current Role schema note
  - Material Reference: [Role](../.schemas/party/role/tiinex.party.role.v1.schema.md)
  - Purpose: role/capacity semantics, holder limits, and allowed companion relation references
  - Availability: available

- current-relation-authority
  - Material: current Relation schema note
  - Material Reference: [Relation](../.schemas/relation/tiinex.relation.v1.schema.md)
  - Purpose: typed non-Parent relation semantics and boundary between direct projected edges and standalone Relation artifacts
  - Availability: available

- current-handoff-authority
  - Material: current Handoff schema note
  - Material Reference: [Handoff](../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Purpose: endpoint/capacity, transfer, Required Context, Reference Context, retained responsibility, exclusion, and completion boundaries
  - Availability: available

- prior-role-participant-discovery
  - Material: prior Axiom role/participant durable-claim boundary discovery
  - Material Reference: [Role participant boundary discovery](001-1-1-axiom-role-participant-durable-claim-semantic-boundary-discovery.trace.md)
  - Purpose: preserve the accepted fail-closed result that generic Relation capacity does not authorize Role inheritance, delegation, holder inference, or a privileged participant machine channel
  - Availability: available

## Reference Context

- event-session
  - Material: Event Session schema
  - Material Reference: [Event Session](../.schemas/event/session/tiinex.event.session.v1.schema.md)
  - Purpose: candidate owner for bounded activity/session context; inspect without assuming it owns reusable policy semantics
  - Availability: available

- interaction-and-annotation-families
  - Material: maintained interaction, annotation, presentation, and related schema families
  - Material Reference: [Schema index](../.schemas/README.md)
  - Purpose: ensure an existing compositional owner is not missed before proposing a new semantic family
  - Availability: available

- prior-human-first-return
  - Material: prior Axiom return that preserved human-readable declared meaning as the primary shared semantic surface
  - Material Reference: [Human-first return](001-1-1-1-1-1-1-1-axiom-to-anchor-human-first-domain-neutral-canonical-clarification-return-handoff.trace.md)
  - Purpose: constrain any grounding model to declared artifact meaning rather than runtime-private or LLM-invented semantics
  - Availability: available

## Retained Responsibilities

- architecture-and-routing
  - Retained By: Anchor
  - Responsibility: decide whether the Axiom result closes Foundation grounding, whether any Process/Role repair should be materialized, and whether Loom receives a bounded Tooling implementation Handoff

- tooling-implementation
  - Retained By: Loom
  - Responsibility: no implementation responsibility transfers in this semantic discovery turn; consume only a later Anchor-qualified semantic disposition

- human-collaboration-observation
  - Retained By: Sigma
  - Responsibility: continue providing human evidence about collaboration friction and whether grounded interaction is understandable; Sigma feedback does not itself define canonical composition semantics

## Exclusions And Dependencies

- role-inheritance
  - Kind: excluded-scope
  - Description: do not create or infer a base Role, shared-role inheritance, Role specialization merge, holder propagation, delegation, or responsibility merge merely to reuse operating guidance

- participant-machine-channel
  - Kind: excluded-scope
  - Description: do not reinterpret package-local Role pointers or arbitrary typed relation labels as semantic participation/applicability channels

- hidden-prompt-state
  - Kind: excluded-scope
  - Description: runtime-private prompts, conversation memory, provider instructions, and role-session folklore must not become undeclared semantic authority

- package-semantic-promotion
  - Kind: excluded-scope
  - Description: package carriage, ancestor placement, Required Context closure, and grounding availability do not by themselves prove semantic applicability; preserve the package discovery-only boundary

- tooling-implementation
  - Kind: excluded-scope
  - Description: do not modify Site Tooling in this Axiom turn; return a semantic result first

- host-safety-model
  - Kind: excluded-scope
  - Description: do not use this grounding work to infer, probe, tune against, or bypass host safety/checkpoint behavior

## Completion Expectation

- Signal Kind: result
- Signal Meaning: Axiom returns one bounded semantic discovery/result that says whether current authority already supports composable operational grounding, identifies exact applicability/binding and fail-closed boundaries, explicitly accepts or rejects a new Policy/Operating Guidance schema need, and gives Anchor a Tooling-facing projection only if semantics require one
- Return To: Anchor
- Return To Reference: [Anchor Role](https://github.com/Tiinex/business/blob/6d02d69dc08ec0a58a2538be8b7b11464ca60790/.topics/roles/001-1-anchor-role.trace.md)

## Interpretation Limits

- Does Not Mean: a Policy schema exists, Role inheritance is approved, every process is a policy, Required Context proves applicability, package pointers gain semantic authority, runtime prompt text becomes canon, or Loom is authorized to implement before Anchor disposition
- Must Not Be Used To Claim: holder assignment, delegation, participant status, Handoff acceptance, responsibility transfer beyond explicit Transfers, universal applicability from generic Relation capacity, semantic authority from package placement, or host-safety causality
- Authority Limits: Axiom owns this bounded semantic reconciliation; Anchor retains architecture and next-turn routing; Loom retains Tooling implementation; Sigma retains human observation/acceptance where relevant

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Human-First And Domain-Neutral Canonical Clarification — Axiom Return](001-1-1-1-1-1-1-1-axiom-to-anchor-human-first-domain-neutral-canonical-clarification-return-handoff.trace.md)
  - Value: HQobAfmMFQuEKn_LkSYgDamj_2wXSA7kHyJxkNOlLjE

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:1_PS76JcWhRjX5lJgagLj1Oi3Rh44wW89j7mxbIP9EA
