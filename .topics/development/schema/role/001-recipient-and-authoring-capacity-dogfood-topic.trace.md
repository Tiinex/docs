# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-22 00:47:00
  - Trace: [Handoff representation reconciliation result](../handoff/001-1-1-1-1-handoff-schema-representation-reconciliation-result.trace.md)
  - Origin:
    - [relative](../handoff/001-1-1-1-1-handoff-schema-representation-reconciliation-result.trace.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/development/schema/handoff/001-1-1-1-1-handoff-schema-representation-reconciliation-result.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-08-22 09:52:00
  - Authors: Tiinusen; Architect
  - Why: Preserve the role/capacity blind spot exposed by real Handoff dogfooding before another stateless worker handoff depends on chat-level role boilerplate.
  - Summary: Finding that recipient identity, recipient capacity, authoring capacity, role holder state, authority, and acceptance are distinct truths that current Handoff and Role semantics should reconcile explicitly.

---

# Recipient And Authoring Capacity Dogfood Topic

This topic preserves the role/capacity blind spot exposed by real Handoff dogfooding before another stateless worker or human handoff depends on chat-level role boilerplate.

## Current Read

A recipient identity and a recipient capacity are distinct truths. The same party may receive a handoff as developer, tester, taste reviewer, architecture reviewer, or another bounded role; a completely fresh LLM run may receive only a workspace ZIP and one Handoff reference.

Current `tiinex.handoff.v1` classifies each endpoint as `party | role | unknown`. That may be lossy when both a concrete party and a required role/capacity matter simultaneously.

Reusable Role artifacts are a plausible durable replacement for fresh-session role boilerplate. Current `tiinex.party.role.v1` already provides strong candidate primitives such as `In Scope`, `Out Of Scope`, `May Do`, `Does Not Authorize`, holder state, review boundary, and interpretation limits. Role semantics should describe bounded collaboration capacity rather than become model-personality or prompt-engineering prose.

Authorship has the same separation problem from another direction. `Authors`, authoring capacity, artifact-subject role, current holder or assignment, delegation/authority, and recipient acceptance are distinct truths. Authoring capacity can materially affect how Feedback, Decision, Discovery, Evidence, review, or other authored claims should be interpreted, but making it mandatory on every artifact would create ceremony rather than information.

## Design Direction

- Recover before inventing across Root, Party, Party Role, Relation, Handoff, and existing author-envelope conventions.
- Determine whether Party Role is the correct reusable capacity artifact for stateless worker roles such as Schemer, Tooling, Dev, tester, taste reviewer, or architecture reviewer.
- Determine whether Handoff needs a way to preserve both concrete party identity and required recipient capacity without collapsing them into one endpoint kind.
- Determine an optional, multi-author-safe representation for authoring capacity only when the capacity materially changes interpretation.
- Preserve holder/assignment, delegation authority, and acceptance as separate truths rather than deriving them from Role or Handoff delivery.
- Prefer existing typed relation or envelope-extension authority when it already owns the needed semantics.

## Risks

- A new role field could accidentally become shadow prompt boilerplate rather than durable domain semantics.
- One ambiguous `Authoring Role` field would fail multi-author artifacts.
- Treating a Role reference as holder or authority proof would collapse distinctions current Party Role explicitly preserves.
- Changing Handoff merely because current Site tooling has broader inheritance/compiler debt would mix schema design with implementation compatibility.

## Next Artifacts

- Provisional [Schemer Role](../../roles/001-schemer-role.trace.md) for concrete dogfood evidence.
- Bounded Schemer Task to reconcile Role, Handoff endpoint capacity, and authoring-capacity semantics.
- Handoff to Schemer that references the Role artifact instead of carrying role boilerplate in the transport prompt.

## Interpretation Limits

This topic does not decide that Handoff must change, does not require every artifact to declare a role, does not establish a universal ownership ontology, and does not prove that a new schema family is needed. A Role reference does not by itself prove that a specific party holds the role, accepted a handoff, or possesses authority beyond separately declared boundaries.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: B4Rb5TZ_QQ10msaFvWihj7_vra1qIMIqiYcYI4mJ5vU