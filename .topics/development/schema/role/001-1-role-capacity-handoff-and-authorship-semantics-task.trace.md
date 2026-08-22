# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-08-22 09:52:00
  - Trace: [001-recipient-and-authoring-capacity-dogfood-topic.trace.md](001-recipient-and-authoring-capacity-dogfood-topic.trace.md)
  - Origin:
    - [relative](001-recipient-and-authoring-capacity-dogfood-topic.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 09:54:00
  - Authors: Tiinusen; Architect
  - Status: draft/local
  - Why: Turn the observed role/capacity blind spot into bounded Schemer work before stateless Handoffs or authoring surfaces grow parallel ad-hoc role semantics.
  - Summary: Reconcile reusable Role artifacts, Handoff endpoint capacity, authoring capacity, holder/assignment truth, and authority/acceptance boundaries using existing Tiinex schema authority before adding new concepts.

---

# Reconcile Role Capacity Across Handoff And Artifact Authoring

## Objective

Qualify and, only where necessary, refine Tiinex role/capacity semantics so a stateless recipient can discover the intended working capacity from durable artifacts, a Handoff can distinguish recipient identity from recipient role/lens when both matter, and authored artifacts can preserve materially relevant authoring capacity without conflating authorship, role holder state, authority, or acceptance.

## Done Criteria

- Treat the parent Finding as the observed dogfood problem, not as a pre-decided schema solution.
- Recover before inventing: inspect current Root, Party, Party Role, Relation, Handoff, relevant author-envelope companion conventions, and corpus examples before proposing a new field, extension, relation, or schema family.
- Determine whether `tiinex.party.role.v1` is the correct durable artifact for reusable collaboration capacities such as Schemer, Tooling, Dev, tester, taste reviewer, or architecture reviewer; maintain or refine it only where current authority is insufficient.
- Review the provisional [Schemer Role dogfood artifact](../../roles/001-schemer-role.trace.md) as concrete evidence. Preserve its useful bounded-capacity intent, but do not treat its current shape as canonical if schema authority requires another representation.
- Determine whether current Handoff endpoint semantics (`From` / `To` plus `Kind: party | role | unknown`) can losslessly express a concrete party receiving work in a specific role/capacity. If both truths need independent representation, define the smallest generic Handoff/Role/Relation correction rather than a Site-specific workaround.
- Preserve the rule that a Handoff may target a required role/capacity without proving which party currently holds it, that the intended party accepted it, or that delegation authority exists.
- Determine a bounded representation for authoring capacity when the capacity materially changes interpretation of an artifact. It must remain optional rather than mandatory ceremony, support multi-author cases without one ambiguous shared role, and remain distinct from `Authors`, artifact subject roles, holder state, authority, and acceptance.
- Do not turn Role into model-personality or prompt-engineering prose. Durable Role semantics should describe collaboration capacity, scope, allowed actions, non-authority, review/holder boundaries, and interpretation limits.
- If current schemas already support these truths through existing typed relations or envelope extensions, prefer that authority and document the usage rather than inventing duplicate surfaces.
- If canonical schema material changes, update only the necessary schema notes/index/companion examples and recompute affected self-integrity. Return a durable Schemer result/disposition that identifies what now governs and any deliberately separate follow-on debt.
- Keep the broader Site compiler/inheritance/creation-projection debt discovered during v480 outside this task unless a concrete Role/Handoff schema representation cannot be made machine-authoritative without addressing one directly. Record such a blocker/follow-on instead of widening into generic compiler work.
- The handoff is not complete merely because work exists in a worker-local runtime. Terminal completion requires the full updated Tiinex/docs workspace to be packaged, roundtrip-verified, and actually returned as a downloadable attachment together with durable result/evidence.

## Scope

This is a bounded schema/governance reconciliation for role capacity in Handoff and artifact authoring. It may refine Handoff, Party Role, Root envelope extensions, or relation usage only where current authority demonstrably cannot express the discovered truths. It does not implement Tiinex/site runtime support, redesign generic packaging, or define a universal ownership ontology.

## Dependencies

- Finding: [recipient and authoring capacity dogfood topic](001-recipient-and-authoring-capacity-dogfood-topic.trace.md)
- Provisional role dogfood artifact: [Schemer Role](../../roles/001-schemer-role.trace.md)
- Published Handoff: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
- Published Party Role: [tiinex.party.role.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/party/role/tiinex.party.role.v1.schema.md)
- Published Party: [tiinex.party.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/party/tiinex.party.v1.schema.md)
- Published Relation: [tiinex.relation.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/relation/tiinex.relation.v1.schema.md)
- Current Root: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: s4PkIryrX2ZMKqJoRM-JhPWL8V-N6qc4t-AqnuOX8q8