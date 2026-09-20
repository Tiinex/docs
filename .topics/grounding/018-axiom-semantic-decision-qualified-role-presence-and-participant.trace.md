# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-19 08:08:21
  - Trace: [020-anchor-to-axiom-qualified-role-presence-semantic-review.trace.md](handoffs/020-anchor-to-axiom-qualified-role-presence-semantic-review.trace.md)
  - Origin:
    - [relative](handoffs/020-anchor-to-axiom-qualified-role-presence-semantic-review.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-19 08:38:12
  - Authors: Axiom
  - Why: Return the independently owned Axiom semantic judgment required by the currently selected bounded review Handoff.
  - Summary: Axiom affirms that qualified Role package/cache presence is grounding availability and, by itself, does not establish semantic participant membership for current work.
  - Status: ready/local

---

# Axiom Semantic Decision — Qualified Role Presence And Participant Membership

## Decision

**Affirmed.** Package/cache presence of a qualified Role, by itself, must not establish semantic participant membership for current work.

A qualified Role artifact establishes that the Role material is valid enough to identify and interpret according to its own authority. Package or cache presence establishes that this material is available to grounding. Neither fact, alone or together, is a semantic assertion that the Role is a participant in the current work.

Semantic participant membership is a current-work relation. Establishing that relation requires separate qualified authority whose semantics actually declare or entail participation for that work, such as an explicit participant declaration or an authoritative participant Relation. A different mechanism may establish a different bounded fact—such as holder assignment, delegation, or Handoff work authority—without thereby becoming participant-membership authority unless that mechanism explicitly carries that semantic meaning.

## Reasoning

The proposition preserves a necessary separation between **material availability** and **semantic selection**. Role qualification answers whether a Role artifact is trustworthy and what the Role means. Cache/package carriage answers whether that material is present for recovery, grounding, provenance, validation, or possible later reference. Participant membership answers a different question: whether current work has semantically selected that Role into its participant relation.

If carriage itself established participation, transport construction would silently mutate work semantics. Adding a qualified Role to a recovery cache, provenance bundle, or package for possible use would add a participant; removing it for packaging reasons would remove one. That would turn an availability mechanism into ambient authority, make participant sets depend on carrier composition, and prevent fail-closed reasoning about current-work membership.

The current qualified grounding illustrates the distinction without needing any inference from package topology. Axiom Role material is present and qualified. Axiom's bounded authority for this review is established through the exact selected Handoff together with an authorized Handoff assignment mode. Separately, the grounding reports that the semantic participant map is not established because no explicit participant declaration or authoritative participant Relation is present. Those facts are compatible because holder/work assignment and participant membership are distinct semantic slots.

Accordingly, cached or carried Role material may be used to resolve, validate, or interpret a Role **after** separate authority selects or references it. Presence is therefore useful grounding evidence, but it is not selection evidence.

## Consequences

- Consumers must not derive semantic participant membership from package inventory, cache contents, carried Role pointers, repository proximity, filenames, endpoint labels, or chat position.
- When participant authority is absent, participant membership remains unestablished rather than being inferred from Role presence.
- Separately qualified Handoff, holder, delegation, or work authority retains its own bounded meaning and must not be automatically promoted into participant-membership authority.
- A carried qualified Role is not thereby invalid, irrelevant, or prohibited from participation; it can become a participant when separately qualified semantic authority establishes that relation.

## Scope Boundary

This decision is limited to the exact proposition under review. It does not declare the overall acceptance rerun complete, does not mutate Business, does not grant product implementation authority, and does not infer any additional participant, source, delegate, or process authority.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [020-anchor-to-axiom-qualified-role-presence-semantic-review.trace.md](handoffs/020-anchor-to-axiom-qualified-role-presence-semantic-review.trace.md)
  - Value: DZ0JdxX55EbCBn3WHHmlZmbjv2XTj8L-ip7KsYqdcSw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: pf_9FE9jCcCrDAaUPkBHRLn7lqlgM5VLHKP6PLdGBQY