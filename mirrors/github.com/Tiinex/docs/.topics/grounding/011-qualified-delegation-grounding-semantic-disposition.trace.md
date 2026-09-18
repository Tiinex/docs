# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-14 23:39:37
  - Trace: [005-anchor-to-axiom-qualified-delegation-grounding-semantics.trace.md](handoffs/005-anchor-to-axiom-qualified-delegation-grounding-semantics.trace.md)
  - Origin:
    - [relative](handoffs/005-anchor-to-axiom-qualified-delegation-grounding-semantics.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-14 23:56:52
  - Authors: Axiom
  - Why: Close the production gap where the correct specialist Role was known but delegation still fell back to plain chat instead of a recoverable Tiinex Task/Handoff/return chain.
  - Summary: Accept existing Tiinex primitives for specialist delegation: forward-select relevance, establish separate delegation and source authority, transfer a repo-local Task through Handoff, require a qualified return, and keep Anchor reconciliation/acceptance separate.
  - Status: ready/local

---

# Qualified Delegation Grounding Semantic Disposition

Current Tiinex semantics are sufficient for converting an explicitly relevant specialist Role/capability into a qualified delegation and return/reconciliation chain. No Delegation, Participant, Capability-Map, Process-Applicability or new readiness schema is required. The missing durable contract is a **forward-qualified delegation closure** that keeps capability, relevance, delegation authority, repo-local Task/source authority, Handoff transfer, session participation, completion signal and later acceptance/reconciliation as distinct claims.

## Decision

- State: accepted
- Subject: qualified specialist delegation from current-work relevance through repo-local Task, Handoff transfer, return and Anchor reconciliation
- Decision: use existing Role, Task/Epic, Handoff, Decision, typed Relation, Workspace/source-authority and exact pointer/reference semantics. Make the standing *discipline for how Anchor delegates* a Role obligation; let exact current work decide *whether delegation is applicable/required and which specialist is selected*; use a reusable Process only when procedure reuse is valuable and only under the already accepted forward process-applicability rules.

### Seven claims that must remain separate

1. **Role capability** — the exact qualified Role owns its intrinsic capability, authority/responsibility boundary and holder-assignment semantics. Role material being available or cached does not make the Role relevant, delegated, participating or held.
2. **Current-work relevance** — qualified current-scope authority forward-selects the Role/capability for a bounded scope. The selector may be the controlling Task/Epic/Handoff/Decision/Role or an exact typed Relation whose edge itself deserves preservation. Relevance means the capability is pertinent/candidate authority for this work; it is not a delegation.
3. **Delegation applicability/requiredness** — separate qualified authority says Anchor may or must transfer the bounded work instead of performing it directly. A general delegation norm may make qualified Tiinex transport mandatory *once delegation is chosen* without making every relevant Role mandatory to delegate to. Only explicit current-work/Role/Decision/process authority may make delegation itself required.
4. **Repo-local Task and source authority** — the delegated work is controlled by an exact Task in the natural owning Workspace/repository for the specialist lane when that Task can be truthfully created or selected there. Permission to create or mutate that Task/source is a separate implementation-source authority claim; repository placement, carriage or mechanical writability is not enough.
5. **Handoff transfer** — a qualified Handoff from Anchor to the selected Role, with the exact Task under `Transfers`, is the bounded transfer declaration. Only `Transfers` moves work/responsibility. Endpoint identity, Required Context, transport delivery or chat prompting alone do not delegate.
6. **Recipient execution/participation** — the Role-capacity transfer may be established while durable holder identity and a semantic participant map remain unresolved. Actual bounded session execution additionally requires an explicit session Role binding authorized by exact Role/holder authority. This does not manufacture a Party identity or broader participation semantics.
7. **Return, completion and reconciliation** — the outbound Handoff may require a qualified return to Anchor, but `Completion Expectation` does not prove completion or automatic responsibility return. The specialist's result/evidence plus a qualified return Handoff supplies the returned result/disposition and any explicit transfer needed for follow-on work. Anchor retains or reacquires only the responsibilities explicitly preserved/transferred and separately decides Business acceptance/integration/reconciliation.

### Sufficient current-work authority for selecting a delegate

A bounded Anchor may select a specialist Role/capability only when all of the following are established:

1. **Exact capability material** — the qualified Role truthfully contains the capability/authority needed for the bounded work.
2. **Forward relevance selector** — qualified current authority either names that exact Role/capability or gives Anchor bounded discretion to select a Role by stated capability/criteria. A typed Relation may preserve this selector when the relevance edge itself needs durable independent provenance.
3. **Anchor delegation authority** — exact Anchor Role, Task/Epic, Decision or other controlling authority permits Anchor to transfer that bounded work/responsibility. The Handoff to be authored cannot bootstrap this authority because `tiinex.handoff.v1` explicitly does not prove that `From` possessed delegation authority.
4. **No contradictory boundary** — source/repository/Role/process authority does not prohibit the proposed transfer or place the work outside the specialist lane.

If the Role is merely discoverable, or only its generic capability is known, current-work relevance remains not-established. If relevance is established but Anchor lacks delegation authority, the Role is a relevant capability but the transfer remains blocked. If delegation is discretionary, Anchor may still choose direct execution when controlling authority permits it; the standing discipline below controls the path only when delegation is chosen or explicitly required.

### Business-root / Epic provenance to a specialist repo-local Task

The specialist Task should live in the Workspace/repository that naturally owns the delegated work and source surface. This does **not** grant the specialist Business mutation and does not require the specialist Task to live in Business.

Preserve the connection to controlling Business work through existing semantics:

- the repo-local Task may declare a qualified continuity `Parent` when direct artifact continuation is genuinely intended; Parent remains continuity ancestry and does not itself establish organizational membership, ownership or mutation permission;
- when the durable claim is specifically that the specialist Task **advances** or otherwise contributes to a Business Task/Epic, preserve that work-level provenance as an explicit qualified typed Relation from the repo-local Task/work to the exact Business controlling target, using a truthful local predicate and bounded scope;
- carry the exact Business controlling Task/Epic as Required Context when the specialist cannot correctly execute/review/return without it; Required Context is material closure, not Business mutation authority;
- keep Business integration/acceptance as an explicit Anchor retained responsibility in the outbound Handoff.

A cross-repository Parent, typed Relation, Required Context reference or package carriage never authorizes the specialist to mutate Business. Existing-source use or new-source creation authority must be established separately for every Workspace/repository that will actually be written.

### Minimum qualified delegation chain

The smallest recoverable chain is:

1. **Controlling current work** — an exact Task/Epic/Decision/Role declaration establishes the bounded objective and either selects the specialist directly or gives Anchor bounded selection authority.
2. **Qualified specialist Role** — exact Role material establishes capability and its authority/holder boundaries.
3. **Repo-local specialist Task** — an authorized owner creates/selects one Task that states objective, done criteria, scope and source boundary for the delegated lane. Preserve truthful Business work provenance separately when needed.
4. **Outbound Anchor -> specialist Handoff** — `To` names the Role; `Transfers` names the specialist Task and transfers `work` or `work-and-responsibility` as intended; Required Context carries the exact controlling work/process/source authority needed by the recipient; Retained Responsibilities keeps Business integration/acceptance with Anchor; Completion Expectation requires a qualified return to Anchor when return is expected.
5. **Recipient grounding** — exact Role material + explicit authorized session Role binding + Required Context closure qualify the recipient for the bounded Handoff. The endpoint does not prove durable holder identity, acceptance or semantic participant membership.
6. **Specialist result/evidence** — the specialist performs only the transferred Task within its own qualified source/process authority and creates whatever durable result/evidence/decision the Task requires.
7. **Return specialist -> Anchor Handoff** — the specialist returns the exact result/disposition and explicitly transfers any follow-on integration/reconciliation work that should move to Anchor. A return Handoff is not upstream acceptance by itself.
8. **Anchor reconciliation/acceptance** — Anchor compares the returned result with the controlling Business/current frontier, performs any required base/incoming/current reconciliation, integrates only within qualified source authority, and records acceptance/completion through the artifact that actually owns that state. The original Handoff or return transport does not prove Business acceptance.

### Delegation discipline: Role obligation + direct invocation, optional Process

The durable semantic minimum is a **composition**, not a new Process or schema:

- **Standing Anchor Role obligation** — once Anchor chooses or is required to delegate bounded specialist work, Anchor must use the qualified Tiinex Task/Handoff/return path rather than a plain chat prompt. The Role obligation is appropriate because this is recurring conduct expected of Anchor across work items.
- **Direct current-work invocation** — the controlling Task/Epic/Decision/Handoff determines whether delegation is relevant, discretionary or required for the current bounded scope and supplies the exact forward delegate selector. This prevents a standing Role norm from making every discoverable specialist mandatory.
- **Optional reusable Process** — a Process may document the operational sequence or host/tool mechanics when repetition warrants it, but its applicability/requiredness must still be forward selected under the accepted Process Applicability disposition. Process inventory or procedure presence never decides who to delegate to.

Recommended smallest Business Anchor Role clause (Anchor owns any Business mutation):

> **Qualified delegation discipline** — When qualified current authority selects or authorizes a specialist Role/capability for bounded work and Anchor chooses or is required to delegate, create/select the exact authorized repo-local Task and transfer it through a qualified Tiinex Handoff to that Role, with explicit retained responsibility and return expectation. Do not substitute a plain chat prompt, Role inventory, endpoint label or package carriage for delegation. Relevance alone does not delegate; Handoff endpoint alone does not transfer; source/task creation and the sender's delegation authority must each be independently established.

This clause defines *how* delegation must occur. It does not make every relevant Role mandatory and does not authorize new source creation.

### Return and reconciliation contract

The outbound Handoff should normally preserve:

- Anchor as the retained owner of Business integration/acceptance and cross-return reconciliation;
- the exact specialist Task as the controlling transferred work;
- `Signal Kind: return`, a concrete `Signal Meaning`, and `Return To: Anchor` when Anchor requires a qualified return;
- exact result/evidence targets in Required/Reference Context when already known and materially required.

The return Handoff should:

- identify the exact delegated Task and produced result/evidence as controlling context;
- transfer only the follow-on work/responsibility that actually moves to Anchor;
- state any unresolved dependency or source/process blocker still open;
- avoid claiming Business acceptance, upstream completion, publication or merge merely because the return was manufactured/delivered.

If Anchor retained integration responsibility in the outbound Handoff, that responsibility never left Anchor and need not be "returned". The return carries the specialist result and any new bounded follow-on transfer; acceptance remains a later Anchor-owned claim.

### Fail-closed rules

A cold Anchor/recipient must preserve these as distinct blockers rather than compensating with chat or inventory inference:

- **delegate relevance not established** — exact Role/capability may be known, but no qualified current-work selector makes it relevant;
- **delegation authority not established** — relevance is known, but no exact authority permits Anchor to transfer the bounded work;
- **delegate Role/capability material unavailable** — selector exists but exact Role material needed to verify capability/boundary cannot be resolved;
- **repo-local Task/source authority not established** — the intended owning Workspace/repository is known but existing-source mutation and/or new-source creation authority needed to place/select the Task is unresolved;
- **process applicability/requiredness not established** — a delegation/process discipline is needed but the current scope has no qualified forward process/Role/current-work authority;
- **recipient holder binding not established** — the Handoff reaches a Role but the consuming session is not explicitly and semantically authorized to act in that Role;
- **return expectation/target not established** — the transfer lacks a truthful completion-facing return contract when later reconciliation depends on one;
- **result/completion evidence not established** — a return route exists or a Handoff arrived, but exact result/completion evidence is missing;
- **reconciliation/acceptance authority not established** — Anchor has a returned result but cannot yet integrate, mutate, accept or close the upstream work under exact current authority.

For every blocker, name the exact missing authority/material and owner/basis. Do not substitute Role inventory, reverse Relations, nearby Tasks, repository/global search, package adjacency, transport delivery, chat prompting or an opportunistic writable path.

### Role relevance, delegation and participation are not synonyms

- `Role is capable` — intrinsic Role fact.
- `Role is relevant` — current-work selector fact.
- `Role is selected for delegation` — current-work decision/authority fact.
- `work is delegated to Role` — qualified Handoff `Transfers` fact, supported by separate sender delegation authority.
- `this session may act as Role` — explicit binding assertion + qualified binding authorization.
- `Role/Party is a semantic participant` — only an explicit participant/relation declaration if such durable participation meaning is needed.
- `recipient accepted / work is active / work completed / Business accepted` — each requires its own qualified evidence/state authority.

A transport `participantRolePointer`, Handoff endpoint or cached Role material may help resolve exact Role bytes; none of them collapses these states.

### Tooling-facing contract for Loom/Anchor reconciliation

Core may make this chain mechanically obvious but must not choose a delegate or generate a plan. A useful projection should keep at least these dimensions independently attributable:

1. selected current work and exact forward delegate/capability selector provenance;
2. exact Role material and intrinsic capability/boundary provenance;
3. delegation applicability/requiredness plus exact sender delegation-authority provenance;
4. specialist Task identity, owning Workspace/repository and existing/new-source authority state;
5. outbound Handoff endpoint + exact `Transfers` declaration + retained responsibilities + return expectation;
6. recipient session binding assertion, authorization and durable-holder state separately;
7. returned result/evidence, return Handoff and reconciliation/acceptance authority separately;
8. explicit unresolved blocker(s) whenever any required link is absent.

Tooling may validate/resolve these existing declarations and surface provenance. It must not infer relevance from Role inventory, delegation from endpoint labels, source permission from writability, participation from Role cache, acceptance from transport, completion from return expectation, or organizational provenance from Parent/package adjacency.

### Positive and negative acceptance cases

Accepted:

- current Task explicitly selects `Role R` for bounded review, exact `R` Role material proves the review capability, Anchor is authorized to delegate, an authorized owner creates/selects the specialist repo Task, and an Anchor -> `R` Handoff transfers that Task with return-to-Anchor expectation;
- current work gives Anchor bounded authority to choose any qualified security reviewer, Anchor selects one exact Role using qualified Role material and records the selector/basis, then follows the same Task/Handoff/return chain;
- a repo-local specialist Task carries a typed `advances` work-provenance Relation to the controlling Business Task while Business integration remains an Anchor retained responsibility;
- the specialist returns qualified result/evidence through a return Handoff; Anchor later records upstream acceptance after independent reconciliation.

Rejected:

- Role `R` is carried/cached and capable, therefore delegate to `R`;
- Role `R` is relevant, therefore `R` has already been delegated or is participating;
- `To: R` appears in a Handoff with no matching `Transfers`, therefore work transferred;
- a Handoff transfer exists, therefore Anchor possessed authority to delegate;
- Business Task/Epic is Parent/Required Context of a specialist Task, therefore the specialist may mutate Business;
- the target repository is writable, therefore Anchor may create the specialist Task there;
- a plain chat prompt plus a Role name is an equivalent substitute for Task/Handoff transport;
- Completion Expectation says `return`, therefore the specialist completed or Anchor accepted;
- a return Handoff arrived, therefore upstream Business work is reconciled/accepted/closed.

### No missing semantic primitive

No missing canonical semantic primitive is demonstrated. Existing Role, Task/Epic, Handoff, Decision, typed Relation, Workspace/source authority and pointer/reference semantics can express the full chain. The durable gap is operating/projection discipline: explicit forward delegate selection, explicit source/task authority, exact Handoff transfer, explicit return expectation, and separate reconciliation/acceptance.

A new semantic construct should be considered only if a future concrete case cannot truthfully express one of these distinct claims with existing controlling artifacts. In particular, no global `delegate`, `participant`, `capability relevance`, `delegation requiredness` or `returned` predicate is authorized by this Decision.

## Basis

- The accepted Thin-Lineage Anchor Grounding disposition already separates Role capability/material availability from current-work relevance, holder state, delegation and participation and already recommends qualified specialist delegation rather than default direct implementation.
- The accepted Process Applicability disposition already requires forward selection and keeps availability, applicability, requiredness, execution, ownership and completion distinct; the same rule prevents a reusable delegation Process from selecting its own current applicability.
- The accepted Holder Binding And Implementation Source Authority disposition already separates session binding assertion/authorization/durable identity and existing-source mutation from new-source creation authority.
- The accepted Blank-Workspace Role-Cache disposition already requires a forward-qualified semantic closure and forbids cache/Role-pointer/inventory/reverse discovery from creating relevance, process or source authority.
- The accepted Organizational Work Provenance disposition already provides optional explicit typed Relation semantics for truthful repo-local work -> Business work provenance without creating membership, responsibility or mutation authority.
- `tiinex.handoff.v1` states that only `Transfers` moves work/responsibility, Required/Reference Context does not transfer responsibility, Retained Responsibilities stays outside the transfer, Completion Expectation does not create a lifecycle transition, and the Handoff itself does not prove sender delegation authority, recipient acceptance or completion.
- `tiinex.party.role.v1` owns bounded Role capability/authority and Holder Relationship without proving a current holder.
- `tiinex.relation.v1` can preserve precise non-Parent work-provenance or current-work relevance edges without turning one local predicate into a global semantic keyword.
- The controlling Business Qualified Delegation Grounding And Transport Discipline Task explicitly requires fresh Anchor delegation through Tiinex rather than plain chat and keeps Business acceptance with Anchor.

## Consequences

- Docs requires no new schema family for qualified delegation grounding.
- Anchor should integrate the standing qualified-delegation Role obligation, preserving the already accepted capability-discovery/process/source disciplines, and should ensure future controlling work forward-selects specialist relevance/delegation rather than relying on Role inventory.
- Anchor should keep Business integration/acceptance in Retained Responsibilities when delegating repo-local specialist work and use explicit work-provenance Relation authority when organizational provenance must be recoverable.
- Loom may expose/qualify the delegation chain and exact blockers but must not select a delegate, manufacture a Task/source grant, infer participation or treat a return as acceptance.
- Blind acceptance should test at least: selected relevant Role + valid delegate authority + repo-local Task/source authority + Handoff transfer + qualified return; relevant Role with no delegate authority; delegate with no source/task authority; Handoff endpoint without Transfer; valid return without upstream acceptance; and nearby unselected Role/Task material remaining non-authoritative.
- A fresh Anchor that knows the right specialist but sends only a plain chat prompt fails the delegation-discipline acceptance test even if the specialist answer is substantively good.

## Review Conditions

Review this Decision only if a concrete future case proves that existing Role/Task/Handoff/Relation/source-authority primitives cannot truthfully distinguish delegate relevance, transfer authority, Task ownership, session binding, return responsibility and acceptance; if a later canonical schema supersedes one of these primitives; or if blind validation demonstrates that a correctly authored forward delegation chain cannot be recovered mechanically without heuristic inventory/reverse discovery.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [005-anchor-to-axiom-qualified-delegation-grounding-semantics.trace.md](handoffs/005-anchor-to-axiom-qualified-delegation-grounding-semantics.trace.md)
  - Value: 7n4XzrIqGL6C7TNn2Bd8DFpK6jBg2-n92_gQQI45VLg

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: fw8nRXxPK7IysgFi3o--0J7VAc8dVclhMPxRkucWvlw