# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-14 17:31:29
  - Trace: [003-anchor-to-axiom-holder-source-authority-semantics.trace.md](handoffs/003-anchor-to-axiom-holder-source-authority-semantics.trace.md)
  - Origin:
    - [relative](handoffs/003-anchor-to-axiom-holder-source-authority-semantics.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-14 17:52:32
  - Authors: Axiom
  - Why: Preserve fail-closed grounding while preventing transport, explicit session input, Workspace carriage, completeness, writability, adjacency, or neutral implementation wording from becoming semantic authority.
  - Summary: Qualified semantic disposition separating recipient compatibility, session binding assertion, binding authorization, durable holder identity, source identity, existing-source mutation authority, and new-source creation authority without adding schema.
  - Status: ready/local

---

# Holder Binding And Implementation Source Authority Semantic Disposition

Current Tiinex semantics are sufficient for the two Test 2 authority gaps. No new Holder, Assignment, Implementation Source, Workspace, Handoff or readiness schema is required. The durable contract is to keep four claims separate and make each one fail visible: recipient Role compatibility, current-session Role binding, durable holder identity, and implementation-source authority. Existing Role/Handoff/Task/Decision/Relation/Workspace semantics can express the needed authority when the controlling work states it explicitly; carriage, writability and route position never fill a missing declaration.

## Decision

- State: accepted
- Subject: consuming-session Role binding authority and implementation-source use/creation authority for thin-lineage grounding
- Decision: use existing Role Holder Relationship, explicit current-session binding, bounded Handoff/Task/Decision authority, optional typed Relation authority, Workspace/source identity and repository boundaries; add no new canonical schema or global Relation predicate.

### Holder claims that must remain separate

1. **Recipient Role compatibility** — the selected Handoff names a Role endpoint and exact Role material qualifies that capacity. This says which capacity the transfer targets. It does not bind the consuming session, identify a holder, prove consent or prove a human identity.
2. **Current-session Role binding assertion** — the consuming session/host/operator supplies an explicit assertion that this session is operating in one Role capacity. The assertion is a runtime fact with its own provenance. It must never be reconstructed from the Handoff `To`, transport destination, provider identity, assistant/user position, package placement or participant inventory.
3. **Binding authorization** — qualified semantic authority permits that kind of assignment for the bounded scope. A matching assertion without authorization is still only an assertion.
4. **Durable holder identity** — an exact Party/person/runtime identity is stated as the Role holder through qualified holder authority. This is optional for a role-capacity session and must not be manufactured merely to make Tooling act-ready.

### Accepted holder-assignment authority paths

Existing `tiinex.party.role.v1` is sufficient because `Holder Relationship` owns holder state and may point to companion relation/party authority. Existing Handoff and Relation semantics supply the bounded work and assignment context.

A cold Role session may be treated as **authorized for the current Role capacity** when all of the following are true:

1. the selected Handoff and exact Role material qualify the recipient Role and bounded work;
2. the session supplies an explicit matching Role-binding assertion; and
3. exact semantic authority permits that assignment mode.

For the current Anchor/Axiom pattern, a Role whose `Holder Relationship` explicitly says `Holder State: assignable per explicit session or Handoff` is semantic authorization for an explicit current-session Role-capacity binding within otherwise qualified controlling work. The explicit session input instantiates the bounded binding; the Role artifact authorizes that assignment mode; the selected Handoff/Task bounds the work. None of those facts proves a durable human or Party identity.

Other valid authority paths include:

- a Role `Current Holder` declaration when exact and current enough for the bounded work;
- a Role `Relation Artifact` / typed Relation that explicitly binds a Party or bounded runtime/session descriptor to the Role with direction, scope, validity and limits;
- a Decision or other qualified authority that explicitly assigns a Party/session to the Role and is selected by the controlling work, with a Relation used when the assignment edge itself needs durable preservation.

A Handoff to a concrete Party with `To Capacity` may preserve bounded intent for that Party to participate in the named capacity, but the Handoff still does not prove general Role holding, acceptance or durable session identity. A role-only Handoff endpoint never binds the current session by itself.

If the Role's holder semantics are silent, unknown, contradictory, or require a different assignment instrument, explicit `holder-role` input remains an **unqualified binding assertion**. Tooling must not promote it to authorized session binding merely because it matches the recipient label.

### Holder blocker behavior

When a Role recipient requires a current-session binding and authorization is missing, preserve `unresolved` / discussion-only behavior and emit an exact request equivalent to:

> Provide an explicit current-session Role-capacity binding together with qualified authorization for that binding: either a recipient Role Holder Relationship that permits explicit session/Handoff assignment, or exact holder-assignment authority such as a qualified Current Holder / Relation / Decision. Do not infer the binding from the Handoff recipient, transport, provider, chat position or package placement.

A durable holder identity is not required when the qualified Role explicitly permits anonymous/current-session capacity binding and the current work does not require a concrete Party. If concrete identity is required by the work, that identity remains a separate blocking requirement.

### Implementation-source claims that must remain separate

Implementation-source grounding has three independent layers:

1. **Source identity/material** — which Workspace/repository/root/existing bytes are qualified and available.
2. **Existing-source mutation/use authority** — whether the current work explicitly permits modifying or using an already-existing implementation source.
3. **New-source creation authority** — whether the current work explicitly permits creating a new implementation source coordinate and, if so, the bounded destination in which the recipient may choose/create it.

Local filesystem writability, complete or bounded Workspace carriage, repository presence, directory adjacency, Task executability, package inclusion and successful materialization are mechanical/source facts only. None creates layer 2 or 3.

### Existing implementation source authorization

`existing-source-authorized` is established only when qualified current-scope authority does both of the following:

- selects an exact existing implementation source or exact Workspace/repository/root that resolves the source; and
- explicitly authorizes the current Role/work to implement, modify, repair or otherwise write that source within a bounded scope.

The declaration may live in the controlling Handoff Transfer/Boundary plus Required Context, in a Task/Epic, Decision, standing Role authority, or in a typed Relation when the work-to-source authorization edge itself needs durable preservation. A separate Relation is optional; this Decision does not create a global `implementation source` predicate.

A current Handoff pattern such as a bounded implementation Transfer plus Required Context whose exact Workspace is described as the `Primary writable implementation source` is a valid human-readable existing-source authorization for that Handoff scope when the Handoff is otherwise qualified. The Workspace identifies the source; the controlling Handoff supplies the write purpose. Required Context membership without the explicit purpose does not itself authorize mutation.

The exact source material must still be qualified/available before modifying it. Authorization to modify a source does not convert stale, missing or unresolved bytes into current source.

### New implementation source creation authorization

`new-source-creation-authorized` requires a stronger explicit declaration because no existing source coordinate can supply the target by itself. Qualified current-scope authority must state that new implementation source may be created and must bound the destination sufficiently to prevent repository/location invention. At minimum it must identify or resolve the owning Workspace/repository/root (or another exact source boundary), the work scope for which creation is permitted, and any material path/ownership constraints needed by that repository.

The recipient may choose an exact new path/name only when the controlling authority explicitly delegates that bounded choice. A generic instruction to `implement`, an executable Task, an empty directory, a writable Workspace, or the fact that Business is carried is not new-source creation authority.

A standing Role may grant new-source creation authority only when that is genuinely part of the Role's bounded authority across the declared scope; current work must still select the applicable repository/work boundary. A Decision may separately authorize a new source family or placement when that governance choice deserves durable authority.

### Explicit prohibition and unresolved source authority

An explicit read-only/no-mutation boundary is stronger than absence and should remain visible as a prohibition. Absence of positive authority is not automatically a prohibition; it is unresolved.

For grounding/projection purposes, treat source authority as two non-exclusive dimensions rather than one lifecycle enum:

- `existingSourceUse`: `authorized` | `explicitly-prohibited` | `unresolved` | `not-applicable`
- `newSourceCreation`: `authorized` | `explicitly-prohibited` | `unresolved` | `not-applicable`

A human-facing summary may say `existing-source-authorized`, `new-source-creation-authorized`, `source-mutation-prohibited`, or `source-authority-unresolved`, but those labels are derived diagnostics, not a new canonical Tiinex state machine. Existing-source use and new-source creation may both be authorized for one bounded work item.

### Workspace purpose and repository boundaries

Workspace and repository authority participates as **identity, destination and constraint**, not as a grant:

- a qualified Workspace may establish exact repository/root/source identity and coverage;
- Workspace summary/purpose or repository-boundary material may establish what kind of source the repository is intended to own;
- an explicit repository/Workspace read-only or ownership boundary may rule out a proposed mutation target and therefore block it;
- a boundary that merely says a repository is an implementation repository does not authorize the current work to write it;
- host-reported writability is only a mechanical capability and must be projected separately from semantic permission.

The current Business boundary is organizational coordination/Role/initiative authority. Its carriage or local writability therefore cannot be treated as application/product implementation-source creation permission. If controlling authority intentionally authorizes Business-local implementation work, that authority must say so explicitly and remain bounded; adjacency is never the reason.

### Source-authority blocker behavior

When mutation or source creation is necessary but the applicable dimension is unresolved, stop that stronger action and emit an exact request equivalent to:

> Provide exact qualified current-work authority that either (a) names/resolves the existing implementation source and explicitly authorizes mutation/use for this bounded work, or (b) explicitly authorizes creation of new implementation source and bounds the owning Workspace/repository/root plus delegated placement scope. Workspace carriage, completeness, writability, directory adjacency and generic implementation wording are insufficient.

If source identity/material is itself missing, use the existing exact-source blocker discipline in addition to the authority blocker. Do not repair either gap through repository-global search, connector discovery or filename guessing unless separate recovery authority permits it.

## Tooling-Facing Projection Contract

Core may expose diagnostics and exact provenance but may not create holder or implementation-source authority. The preferred implementation is the same semantics-neutral pass-through pattern already used for process applicability: exact qualified upstream authority in; exact facts out; absence stays unresolved.

### Holder projection

Project these claims separately:

1. **Recipient Role** — exact selected Handoff endpoint, Role artifact/path/digest and compatibility.
2. **Binding assertion** — whether an explicit current-session Role binding was supplied; asserted Role label; optional holder/session id; assertion source such as `explicit-input`; never label this fact as carried semantic authority merely because it was supplied on the CLI/session surface.
3. **Binding authorization** — `qualified` | `unresolved` | `blocked`, with exact provenance to the Role Holder Relationship and/or exact Current Holder / Relation / Decision authority that permits or rejects the assignment mode.
4. **Bounded session binding result** — may be `authorized-for-current-session` only when the assertion matches the recipient Role and binding authorization is qualified. Preserve its bounded work/session scope.
5. **Durable holder identity** — `qualified` only when exact Party/holder authority establishes it; otherwise `unresolved` even when the current session binding is authorized.

`grounded-to-act` remains bounded route action readiness. For Role recipients it may rely on an explicit matching session binding only when that binding's authorization basis is qualified. It must not require a durable Party identity where the Role permits current-session assignment, and it must not treat a matching unqualified assertion as authorization.

### Implementation-source projection

Project these surfaces independently:

1. **Workspace/source facts** — exact Workspace identity, repository/ref/root when declared, coverage/material state, source artifact provenance, and exact purpose/boundary text that already exists. Do not convert those facts into mutation authority.
2. **Mechanical writability/capability** — when known, expose it as host/runtime capability only. `writable` must never mean `authorized`.
3. **Existing-source use authority** — `authorized` / `explicitly-prohibited` / `unresolved` / `not-applicable`, exact target(s), bounded scope and exact owning declaration provenance.
4. **New-source creation authority** — same state vocabulary, exact owning Workspace/repository/root/placement boundary when authorized, and exact owning declaration provenance.
5. **Contradictions** — if current-work authorization conflicts with an explicit repository/Role/read-only boundary, project `blocked`/contradictory evidence rather than choosing whichever source is more convenient.

Every positive or negative authority state must show the exact semantic owner: artifact/path, schema, section/declaration or selected Relation facts, target scope and the forward current-work/Required-Context edge that made it relevant. Core must not classify arbitrary prose heuristically, normalize package placement into permission, or scan Workspace inventory for candidate source authority. When no explicit upstream-qualified authority classification/selector is supplied, expose the exact source facts and return the authority dimension as `unresolved`.

An upstream projection suitable for Core must itself say it is explicit and qualified and must carry provenance to the authoritative artifact(s). Core may pass through that projection without redefining its semantics, just as current process-applicability mechanics do.

### Required unresolved codes

Equivalent field/code names are an implementation choice, but the semantic failures must remain distinguishable:

- `session-holder-binding-assertion-missing`
- `session-holder-binding-authorization-not-established`
- `session-holder-role-mismatch`
- `durable-holder-identity-required-but-unresolved`
- `existing-implementation-source-authority-not-established`
- `new-implementation-source-creation-authority-not-established`
- `implementation-source-mutation-explicitly-prohibited`
- `implementation-source-authority-conflict`

The current generic exact-material blocker remains separate from these authority blockers.

## Exact Proposed Anchor Operating Delta

Anchor owns any Business mutation. The smallest durable addition is:

- **Session-holder assignment discipline** — "Treat recipient Role compatibility, current-session binding assertion, binding authorization and durable holder identity as separate claims. An explicit session binding may be used only when exact Role/assignment authority permits that binding mode; never self-assign from Handoff recipient, transport, provider or chat position. Do not require a fabricated Party identity when the Role explicitly permits bounded session assignment."
- **Implementation-source authority discipline** — "Before source mutation, recover exact current-work authority for the specific existing source and/or explicit permission to create new source within a bounded owning Workspace/repository/root. Workspace/source identity, carriage and host writability are selectors/capabilities, not grants. If authority is absent or conflicts with repository/Role boundaries, stop mutation and issue the exact authority request rather than choosing a convenient path."

No wording should force every Handoff to carry a holder Party or a dedicated source Relation. Use the smallest existing authority that truthfully owns the claim; create a Relation/Decision only when the assignment/source edge itself needs durable independent preservation.

## Test 2 Disposition

Under this Decision, the bounded Test 2 behavior classifies as follows:

- `Anchor` recipient Role compatibility: qualified.
- session's self-supplied `Anchor` binding: an explicit binding assertion, but its semantic authorization must come from exact Anchor Holder Relationship/assignment authority rather than from the Anchor-to-Anchor route itself.
- bounded writable Business Workspace: qualified source/material and mechanical capability evidence only.
- neutral implementation Task + Business writability: does not establish either existing-source mutation authority or new-source creation authority.
- the test-created bookkeeping source therefore remains validation evidence only unless a later controlling authority explicitly adopts/authorizes it.

## Basis

- `tiinex.party.role.v1` already separates Role identity/boundary from `Holder Relationship`, supports explicit holder state and optional Current/Possible/Unknown Holder plus Relation Artifact, and explicitly rejects treating a Role as proof that a particular person holds it.
- The current Axiom and Anchor Roles already state `Holder State: assignable per explicit session or Handoff; no permanent holder asserted`, which supplies the missing semantic authorization mode for explicit bounded session bindings without inventing Party identity.
- `tiinex.handoff.v1` already separates endpoints/capacities, Transfers, Required Context, retained responsibility and interpretation limits; it explicitly says endpoint/capacity does not prove holder state and package/workspace membership does not create transfer authority.
- `tiinex.relation.v1` already supports a bounded typed non-Parent assignment/source edge when that edge deserves independent preservation; no global predicate is required.
- `tiinex.workspace.v1` owns portable Workspace/source declarations and source identity/discovery surfaces, not current-work mutation authorization.
- `REPOSITORY_BOUNDARIES.md` explicitly says repository placement does not change semantic authority and separates Business organizational authority, Docs semantic authority and Core implementation ownership.
- Existing Business implementation Handoffs demonstrate the sufficient pattern for existing source: bounded implementation Transfer plus exact Required Context whose Purpose explicitly identifies the selected Workspace as the writable implementation source, while neighboring Workspaces are explicitly read-only.
- Test 2 demonstrates the rejected pattern: neutral implementation work plus a carried/writable Business Workspace does not authorize a new implementation source coordinate.
- Current Core already separates explicit session holder input from recipient Role inference and already uses semantics-neutral upstream pass-through for process applicability; those mechanics are evidence for feasibility, not the source of this Decision.

## Consequences

- No canonical schema family or new readiness lifecycle state is opened by this task.
- Holder introspection becomes stricter without forcing permanent identity: session assertion and semantic authorization are separate, while `grounded-to-act` stays bounded.
- Source mutation becomes sparse and deterministic: exact current work must authorize existing-source use and/or bounded new-source creation; Workspace/repository facts select and constrain rather than grant.
- Loom can implement the parallel Core task without inventing semantics by projecting exact holder/source provenance and consuming only explicit qualified upstream source-authority classification.
- Anchor should integrate the two operating clauses above, reconcile the Loom return against this Decision and rerun the blind successor tests with at least the Test 2 negative case plus positive existing-source and new-source-creation cases.

## Review Conditions

Review this Decision only if a future canonical assignment/access/source-authority schema supersedes these composable primitives, if a Role cannot truthfully express its session-assignment mode without a new construct, or if blind validation proves that explicit current-work source authorization cannot be recovered without heuristic prose interpretation even when the controlling artifacts are correctly authored.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [003-anchor-to-axiom-holder-source-authority-semantics.trace.md](handoffs/003-anchor-to-axiom-holder-source-authority-semantics.trace.md)
  - Value: gaUsi6jHciIaZxdLiJzyV4bfCrPCrc3tObB3Fa8Mo9s

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: AmpyDA-izaltAy52EgWUfVLApxlis2cHzHqhmysnLIc