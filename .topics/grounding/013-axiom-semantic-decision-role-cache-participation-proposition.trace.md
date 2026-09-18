# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-17 20:51:13
  - Trace: [018-anchor-to-axiom-role-cache-participation-semantic-review.trace.md](handoffs/018-anchor-to-axiom-role-cache-participation-semantic-review.trace.md)
  - Origin:
    - [relative](handoffs/018-anchor-to-axiom-role-cache-participation-semantic-review.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-17 21:23:58
  - Authors: Axiom
  - Why: Return the independently owned Axiom semantic judgment required by the qualified bounded review Task.
  - Summary: Axiom affirms that qualified Role presence in package/cache is grounding availability and, by itself, does not establish semantic participant membership for current work.
  - Status: ready/local

---

# Axiom Semantic Decision — Role Cache Participation Proposition

The proposition is semantically affirmed within its exact bounded scope: carrying or caching qualified Role material makes that Role available for grounding and qualification, but does not itself make the Role a semantic participant in the current work.

## Decision

Package/cache presence of a qualified Role, by itself, must not establish semantic participant membership for current work. Participant membership requires a separate qualified source of current-work semantic authority, such as an explicit participant declaration or authoritative relation, or a qualified assignment/Handoff where that mechanism is itself authorized. Qualified Role presence can establish the identity and semantics of the Role material; it cannot, without that separate authority, establish that the Role participates now.

## Basis

Treating carriage or cache presence as participation authority would make a transport and grounding mechanism mutate work semantics merely because material was included for convenience, recovery, provenance, or possible use. That collapses the distinction between availability and selection, creates ambient authority, and makes membership depend on package construction rather than an explicit semantic act.

Role qualification answers whether the carried Role material is valid and what it means. It does not answer whether current work selected that Role as a participant. The qualified grounding for this review demonstrates the distinction directly: the Axiom Role is carried and qualified, while the participant map remains unestablished absent explicit participant authority; this session's bounded Axiom authority instead arises from the exact selected Handoff plus an authorized Handoff assignment mode. The separate assignment evidence is what establishes the bounded current participation, not the cache presence that made the Role material available.

This separation preserves auditability, compositionality, and fail-closed authority. Adding or removing non-selected cached Role material cannot silently add or remove semantic participants, while separately authorized participation can still resolve against cached Role material when needed.

## Consequences

Consumers must not derive a current participant set from package inventory, cache contents, carried Role pointers, endpoint labels, filenames, or nearby topology. When no explicit qualified participant authority exists, participant membership remains unresolved rather than being inferred from presence.

Cached qualified Role material remains useful grounding evidence and may be used to resolve or validate a Role after a separate participation or assignment authority selects it. This decision does not mean a carried Role is invalid, irrelevant, or barred from participation; it means only that carriage or cache presence alone is insufficient semantic authority for current-work membership.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [018-anchor-to-axiom-role-cache-participation-semantic-review.trace.md](handoffs/018-anchor-to-axiom-role-cache-participation-semantic-review.trace.md)
  - Value: Hyfd2yQw9lcwe4bR7E8bfE6jEktgGUOlS4RJ_qzFZc4

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: T4NWb7PoJmNzbLmbsQyNe0CE9QipWhnGZI97w9uOxnQ