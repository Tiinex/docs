# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-14 13:50:00
  - Trace: [001-anchor-to-axiom-thin-lineage-anchor-grounding-semantics.trace.md](handoffs/001-anchor-to-axiom-thin-lineage-anchor-grounding-semantics.trace.md)
  - Origin:
    - [relative](handoffs/001-anchor-to-axiom-thin-lineage-anchor-grounding-semantics.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-14 12:14:38
  - Authors: Axiom
  - Why: Axiom found no semantic gap requiring a new schema; the durable need is an explicit Role/process and Tooling projection boundary.
  - Summary: Use existing Role/Relation/Handoff/Workspace authority for thin-lineage grounding; keep grounded-to-act bounded and treat wider orchestration sufficiency as a separate diagnostic.
  - Status: ready/local

---

# Thin-Lineage Anchor Grounding Semantic Disposition

Current Tiinex semantics are sufficient for the thin-lineage Anchor problem. No new Participant schema, Relation predicate, canonical readiness state, or third Handoff endpoint is authorized or needed. The durable change is a narrower operating contract: preserve explicit Role/capability relevance and source authority as qualified facts, keep `grounded-to-act` bounded to the selected Handoff action, and make wider orchestration sufficiency a separate Role/process-facing diagnostic.

## Decision

- State: accepted
- Subject: thin-lineage Anchor participant/capability grounding, source authority, orchestration sufficiency and successor acceptance
- Decision: use existing Party/Role, typed Relation, Handoff context, Workspace representation and Role/process authority; add no new semantic schema or global relation predicate.

### Participant and capability context

1. `Party` / `Role` owns actor and capability semantics. A Role artifact says what a capacity is; its presence does not say that the Role is relevant to the current work, held in the current session, delegated, participating, accepting, or attending.
2. Current-work relevance is owned by the controlling semantic artifact that actually declares it: Handoff Required/Reference Context, Task/Decision/process authority, or an explicit typed Relation when the relation itself needs durable preservation. When a cold recipient must recover a Role/Party/Relation to interpret or execute a Handoff, list that exact material as Required Context; use Reference Context when it is useful but nonblocking.
3. A typed Relation may connect current work/context to a Party or Role without widening the Handoff endpoints. Its Type, Direction, Scope, target, uncertainty and limits remain local explicit authority. No global `participant` predicate is introduced by this decision.
4. Handoff still has exactly one `From` and one `To`. Required/Reference Context is not a third endpoint and does not transfer responsibility.
5. Tooling may carry an explicit recipient `participantRolePointer` / Role-grounding pointer when a route-manufacture requirement names that Role. That pointer is transport/discovery grounding only. It does not declare semantic participation. Current Core text already states this boundary and must retain it.
6. The current Anchor-to-Axiom route declares no additional participant-role grounding requirement. Therefore an empty `participantRolePointers` projection is correct even though Loom and Sigma Role artifacts are physically present in the carried Business Workspace. Their carriage is not relevance or participation authority.

### Source-authority classification

- **Complete carried Workspace**: a qualified complete Workspace representation gives exact carried source bytes for the declared Workspace boundary. It does not prove repository currentness beyond that snapshot, semantic acceptance, holder/delegation/participation, or that package placement itself is authority. Reconcile before overwriting a possibly newer source frontier.
- **Bounded Workspace representation or qualified cache**: authority is exact only for the explicitly qualified represented entries/scope. Omitted paths are outside the representation, not absent from the source Workspace. A bounded representation must never be promoted to complete because all currently requested paths happen to resolve. Detached/cache material remains recovery/material carriage, not inferred Workspace membership.
- **Explicit qualified reference or Pointer**: the reference/pointer is a selector and resolution aid. Once it resolves one exact qualified target, the target's owning semantics govern. The reference alone does not create transfer, participation, holder assignment, delegation, acceptance, source freshness, or source bytes. Required Context can make resolution blocking; Reference Context remains nonblocking.
- **Unavailable authoritative source**: preserve `unavailable`, `unresolved`, or `unknown` and withhold any stronger action whose correctness depends on that source. Emit an exact blocker/request naming the needed material, owner/basis and why it blocks. Do not substitute repository-global search, connectors, nearby files, package adjacency, filename guessing, or lookalike cached material unless an explicit recovery authority permits that path. Work that does not depend on the missing source may continue within a visibly narrower boundary.

### `grounded-to-act` and orchestration sufficiency

`grounded-to-act` remains the bounded selected-route readiness result: selected Handoff authority, explicit recipient Role-holder binding, Required Context closure, carried Workspace qualification, cold-start continuity, selected-route Parent leaf and current frontier are sufficient for the next bounded Handoff action. It must not be interpreted as "knows the organization", "has discovered all relevant Roles", or "is ready for every planning decision".

Wider orchestration sufficiency is not a new canonical lifecycle state. It is a Role/process-facing diagnostic over explicit qualified facts. Before substantive multi-role planning, Anchor should be able to account for the current frontier, its own Role/holder binding, relevant capability/participant context needed by the work, source-state/blockers, delegation and human-gate expectations, and any declared turn/recovery constraints. Unknown optional organization-wide context does not block sparse work; unknown context that the controlling work makes necessary does.

### Exact proposed Business Anchor Role delta

Anchor owns any Business mutation. The following text is the recommended smallest durable Role addition, not a mutation made by Axiom:

- **Participant/capability discovery** — "Before substantive multi-role planning, recover or explicitly bound the relevant participant/capability landscape from qualified Role, Relation, Handoff, Task, Decision or process authority. Availability of a Role artifact does not make it relevant, and relevance does not establish holder identity, delegation, acceptance or semantic participation."
- **Delegation norm** — "Prefer qualified specialist Roles for work within their lanes when that improves authority fidelity, independent review, organizational learning or bounded parallelism across scarce/expensive turns. Anchor may implement directly when rational and within authority, but direct implementation must not become a default that prevents discovery or use of actual organizational capability."
- **Turn and recovery stewardship** — "When host-turn scarcity, expensive specialist calls or volatile working storage are evidenced, treat them as orchestration constraints: batch exact-source inspection where safe, use bounded parallel specialist work without scope growth, keep coordination surfaces compact, and establish durable recovery at stable progression boundaries."
- **Exact-source blocker discipline** — "When an action requires exact authoritative source that is unavailable or unqualified, stop the stronger action and emit an exact blocker/request naming the required material, owner/basis and blocking reason. Do not substitute opportunistic repository/connector search, filename inference or source lookalikes unless explicit recovery authority permits it."

No Anchor wording should require "all Roles" or make every available Role a participant. The operating target is the smallest relevant capability landscape for the controlling work.

### Blind thin-lineage successor acceptance rubric

A blind fresh Anchor passes only when it can, without prior chat context:

1. bootstrap through the declared Start/Tooling path and keep opaque routing material opaque until Tooling qualification;
2. bind its current Role explicitly rather than inferring holder identity from account, chat, transport or package recipient;
3. recover the bounded current work/frontier and distinguish complete, bounded/cache, pointer/reference and unavailable source states;
4. recover or explicitly bound the Roles/capabilities relevant to the controlling work without treating Role inventory or package presence as participation;
5. preserve `grounded-to-act` as bounded action readiness and state any remaining orchestration gap separately;
6. delegate a specialist lane when the work warrants it, or give a bounded reason direct Anchor execution is rational, without using Sigma as continuous steering;
7. turn missing exact authoritative source into a precise blocker instead of remote archaeology or connector exploration by default;
8. recognize human gates from controlling authority, present the smallest decision-relevant surface first, and preserve the result in the owning durable artifact when durable meaning is required; and
9. leave a recoverable checkpoint/Handoff at a stable progression boundary.

Any Sigma intervention that supplies recoverable Role identity, current-work location, source authority, delegation ownership, Role system structure, hidden plan/history, or the distinction between bounded action readiness and orchestration sufficiency counts as successor correction/reconstruction and is a failure event. A legitimate human gate does not count as correction when the controlling work explicitly needs a new human preference, priority, observed actual path, usability/product judgment, risk tradeoff, accept/reject/defer decision, or genuinely new constraint that was not recoverable from durable authority. Sigma may challenge framing or supply such new judgment without becoming the successor's hidden context carrier or continuous manager.

The acceptance threshold is semantic rather than conversational: any human prompt that reconstructs qualified recoverable context is a failure; human input that contributes genuinely new bounded judgment at an identified gate is not.

### Smallest Tooling-facing contract for Loom

Loom may implement mechanics but must not redefine these semantics:

1. Keep existing `grounded-to-act` behavior bounded; do not add participant discovery to that state or rename it into organization-wide readiness.
2. Expose wider orchestration sufficiency, if useful, only as a separate diagnostic/projection with provenance to exact qualified declarations. It is not a canonical lifecycle state and must fail visible when a required dimension is unresolved.
3. Project Role/capability grounding only from explicit route grounding requirements or exact semantic artifacts that name the Role/capability. Never enumerate a Workspace/package Role inventory and call it relevant.
4. Preserve the existing `participantRolePointer` boundary: it grounds one exact Role material for recipient discovery; it does not itself claim semantic participation. If semantic participation/relation meaning is required, project the exact owning Handoff/Relation/context authority separately rather than normalizing arbitrary Relation labels into a privileged predicate.
5. For every projected source fact, preserve the distinction among complete Workspace, bounded representation, qualified cache/detached material, pointer/reference resolution and unavailable authority. Include exact provenance/basis sufficient to explain the classification.
6. When required authoritative source is unavailable, return an exact blocker and do not automatically invoke GitHub, connectors, repository search or adjacency inference as substitute authority.
7. Do not infer holder identity, delegation, acceptance, Role inheritance, participant identity, organizational membership or source currentness from chat position, account identity, filenames, package membership, transport destination or Role-file presence.
8. A route may carry explicitly requested Role-grounding pointers to make capability material cheaply discoverable. Carrier manufacture/configuration remains transport grounding authority; a separate semantic basis is required for any stronger participation claim.

## Basis

- Current Party/Role semantics already distinguish Role capacity from holder state and do not make artifact presence proof of a holder.
- Current Relation semantics already provide typed non-Parent relationships with explicit direction, scope and target, so an additional participant/capability relationship can be preserved without widening Parent or inventing a Participant schema.
- Current Handoff semantics already separate endpoints, transfers, Required Context, Reference Context, retained responsibilities and unavailable material. This is enough to carry the exact semantic closure a cold recipient needs.
- Current Workspace-representation semantics already distinguish complete and bounded source representations and explicitly deny promotion of filenames, paths, routes or transport into Workspace identity/authority.
- Prior Axiom disposition already concluded that Party/Role plus typed Relation and Handoff context are sufficient for participant-role recovery, while a privileged machine participant channel requires explicit binding rather than arbitrary relation-label normalization.
- Current Core implementation reinforces rather than supersedes that boundary: Role-grounding pointers are explicit route-carriage mechanics and state that they do not declare semantic participation; `grounded-to-act` is computed from bounded Handoff/holder/context/continuity/frontier evidence rather than organization-wide discovery.
- The controlling Business Epic asks for wider orchestration sufficiency but explicitly prefers Role/process/Decision guidance over accidental Tooling authority and reserves Business mutation to Anchor and shared Tooling implementation to Loom.

## Consequences

- Docs needs no new schema or relation predicate for this work. This Decision is the durable semantic disposition.
- Anchor should apply or explicitly reject/defer the proposed Role wording in Business and reconcile it with Loom's parallel implementation return.
- Loom can implement an orchestration diagnostic and exact Role-grounding/source-blocker projection without making transport configuration semantic participation authority.
- A fresh successor may be `grounded-to-act` while still having a visible orchestration gap; that is not a contradiction.
- The present Axiom route's empty participant-role pointer set is a correct projection, not missing evidence, because no explicit route participant-role grounding requirement was declared.
- Carrying a complete Business Workspace can make Role material available for inspection, but availability alone cannot answer which Roles are relevant. The controlling task/process or explicit relation/context declaration must supply that relevance.

## Review Conditions

Review this decision only if one of the following occurs:

- a canonical schema later introduces an explicit participant/capability predicate or Handoff field whose semantics supersede the current typed-Relation/context pattern;
- Loom finds a concrete implementation requirement that cannot be satisfied without machine-readable relevance semantics and returns that exact semantic blocker;
- a blind successor test shows that the current explicit authority cannot recover the minimum relevant capability landscape without human reconstruction; or
- Business changes Role/process authority so the proposed Anchor operating boundary no longer matches the organizational model.

## Immediate Next Questions

- Anchor: which subset of the proposed Role delta belongs directly in the Anchor Role versus a shared workflow/recovery process artifact?
- Loom/Anchor: which exact current controlling artifacts should be transformed into explicit route Role-grounding requirements for the next blind successor carrier, without confusing grounding with participation?
- Validation: after Business/Core integration, can a cold successor pass the rubric with zero Sigma reconstruction prompts while still allowing legitimate bounded human gates?

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-anchor-to-axiom-thin-lineage-anchor-grounding-semantics.trace.md](handoffs/001-anchor-to-axiom-thin-lineage-anchor-grounding-semantics.trace.md)
  - Value: MsxxMdNAtKP8-IvnCUYlA89pG5_w9DQTSNP15ZN-qck

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: UJH1zGt1PzKpQDY5bserR6lRLBpLpA1DPAiCZJC3afM