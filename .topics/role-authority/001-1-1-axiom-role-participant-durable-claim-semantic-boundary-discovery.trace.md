# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/46738b4224a2f4aa04aa4a882f3db8b51d25fceb/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-08-31 21:42:00
  - Trace: [Role, Participant And Durable-Claim Semantics — Axiom Handoff](001-1-anchor-to-axiom-role-participant-durable-claim-handoff.trace.md)
  - Origin:
    - [relative](001-1-anchor-to-axiom-role-participant-durable-claim-handoff.trace.md)
- Current
  - Current Schema: [tiinex.discovery.v1](../.schemas/discovery/tiinex.discovery.v1.schema.md)
  - Created At: 2026-08-31 23:08:00
  - Authors: Axiom
  - Why: Resolve the six transferred semantic questions at the smallest current authority boundary without implementing Tooling or manufacturing role inheritance, holder, delegation, acceptance, or transport-derived meaning.
  - Summary: Bounded Axiom discovery: participant-role context is already expressible through explicit Party/Role plus typed Relation carried as Handoff context; durable-claim truth is owned by the Business workflow process; runtime semantic promotion is already bounded by existing adapter/runtime/preservation authority; recipient propagation must preserve exact declared semantic closure without inference. Two cross-cutting principles remain distributed rather than globally canonical and need only narrow clarification if Anchor wants them enforced as universal rules: one Root human-first semantic-ordering clause and one Schema Contract domain-neutral generic-base clause.
  - Status: completed/local

---

# Role, Participant, Durable-Claim And Semantic-Portability Boundary Discovery

## Discovery Intent

- Intent: determine the smallest current semantic authority that lets a cold recipient recover endpoint Role authority, additional participant-role context, truthful durable workflow state, human-first semantic meaning, domain-neutral generic schema meaning, and runtime-independent recoverability while keeping continuity Parent, typed Relation, Handoff transfer, holder identity, delegation, acceptance, and role inheritance distinct.
- Starting Question: which of the six transferred concerns are already authorized by current Party/Role/Handoff/Relation/Business/runtime contracts, and where—if anywhere—is a new canonical statement required rather than a new schema family?

## Discovery Field

- Field: the exact carried `tiinex-business`, `tiinex-docs`, and `tiinex-site` Workspace representations qualified for the selected Axiom cold-start route, the selected Handoff and its Required Context, and current relevant Reference Context read through Tiinex after preferred-path qualification
- In Scope: Docs Root, Lineage Policy, schema-contract guidance, Party, Role, Relation, Handoff, Adapter, Runtime, External Payload and related preservation boundaries; Business workflow-observation reconciliation and current Role material; carried Site evidence about runtime-local checkpoint/receipt carriage; cold-recipient semantic closure and Tooling preservation implications
- Out Of Scope: Tooling implementation; Viewer design; source-repository mutation; creation of role inheritance; holder assignment; delegation; Handoff acceptance; a new Participant schema; a global Relation predicate registry; treating free-text labels, package adjacency, paths, chat memory, runtime caches, or carrier JSON as semantic authority

## Discovery Method

- Method: perform the Start-authorized Tiinex bootstrap; qualify the exact selected route with `minimal-bootstrap-only`; use exact carried Workspace bytes as the evidence field; compare each transferred concern against the current readable schema/process owner; distinguish existing semantic authority from mere representational capacity and from implementation convenience; fail closed whenever a machine-specific projection would require guessing an undeclared predicate or holder.
- Cold-Start Qualification: preferred path passed and substantive Axiom work was authorized. The continuation pointer remained opaque to the host before Tiinex qualification.
- Current Workspace Representations: Business SHA-256 `940229d5bbaff5fe5b1c708f8cefff7ac883fa82afbf229f944160455f3183c5`; Docs SHA-256 `d24be79ace4ca7f5d9a020320dabe7da3af240951ff0e585df3e4238a7ab3c96`; Site SHA-256 `f47e66832d465f8b03435f299df0147a5b1640ea466110f4db522b51453fd406`.
- Primary Docs Authority: `.topics/.schemas/tiinex.root.v1.schema.md`; `LINEAGE_POLICY.md`; `README.md`; `.topics/.schemas/README.md`; `.topics/.schemas/schema/contract/tiinex.schema.contract.v1.schema.md`; `.topics/.schemas/party/tiinex.party.v1.schema.md`; `.topics/.schemas/party/role/tiinex.party.role.v1.schema.md`; `.topics/.schemas/relation/tiinex.relation.v1.schema.md`; `.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md`; `.topics/.schemas/adapter/tiinex.adapter.v1.schema.md`; `.topics/.schemas/adapter/digital/tiinex.digital.adapter.v1.schema.md`; `.topics/.schemas/runtime/tiinex.runtime.v1.schema.md`; current external-payload and preservation-oriented contracts in the carried Docs Workspace.
- Primary Business Authority: carried `.topics/processes/002-1-workflow-observation-reconciliation.trace.md`, current Role artifacts, and `.topics/initiatives/001-2-2-portable-handoff-cold-start-ingress-task.trace.md`.
- Primary Site Evidence: carried `.topics/tooling/002-1-1-1-1-1-1-1-1-1-1-1-2-1-1-anchor-iteration-efficiency-return-review-evidence.trace.md` and its explicit distinction between runtime-local generated checkpoint/receipt material and canonical Workspace source.

## Discovery Boundaries

- Continuity Boundary: `Parent` remains singular direct continuity ancestry. Neither Handoff context nor Relation nor package placement may be re-read as Parent.
- Endpoint Boundary: Handoff has exactly one `From` and one `To`. Endpoint Role identity/capacity is distinct from any additional participant context.
- Party/Role Boundary: Party/Role can describe a participant or capacity, including an explicit `Holder State`, but a Role artifact does not prove that a person holds it and does not prove delegation, consent, attendance, authority, acceptance, or representation unless separately supported.
- Relation Boundary: Relation can carry a specific typed non-Parent relationship with explicit Relation Type, Direction, Scope, target, uncertainty, and limits. That capacity does not create a globally normalized predicate and does not authorize role inheritance.
- Handoff Boundary: only `Transfers` transfers work/responsibility. Required and Reference Context aid interpretation and do not transfer responsibility, prove acceptance, or create delegation.
- Durable-State Boundary: durable/permanent/accepted/completed workflow language must be truthful about recoverable state, but the current cross-role operating rule is a Business workflow/process convention rather than an inherited Role-schema permission or responsibility merge.
- Runtime Boundary: physical transport or cache persistence does not promote runtime-local state to canonical Tiinex meaning. Promotion requires deliberate semantic materialization under an appropriate typed artifact/reference.
- Mutation Boundary: this Discovery does not publish or mutate remote Docs, Business, or Site authority. Proposed clarification text below is a disposition recommendation, not an already-authorized canonical change.

## Discovery Outcome

### 1. Additional participant-role context — existing authority is sufficient for semantic recovery

Current authority can represent additional participant-role context without widening Handoff endpoints:

- Use the existing Party/Role artifact for the participant or participant capacity. Preserve its declared `Holder State`; leave holder unknown when unknown.
- Use an explicit `tiinex.relation.v1` artifact, or a schema-owned typed Relation declaration where an owning contract already permits it, to connect the Handoff context to that Party/Role.
- The Relation must name its Relation Type, Direction, Scope, target, uncertainty, and interpretation limits readably. For this use, its boundary must expressly deny transfer, holder assignment, delegation, acceptance, consent, attendance, and role inheritance.
- When the participant context is required for a cold recipient to interpret the transfer, list that Relation artifact in the Handoff `Required Context`; if it is merely useful but non-blocking, list it as `Reference Context`.
- Keep the Handoff itself at exactly one `From` and one `To`. Required Context does not become a third endpoint and does not transfer responsibility.

No separate generic `Participant` schema is needed for this transfer: current Party is already the generic bounded actor/participant authority, and Role is its role/capacity specialization.

Machine-projection limit: current authority is sufficient to preserve and recover the exact Relation artifact, but it is not sufficient for Tooling to normalize arbitrary relation labels into a privileged field such as `participantRolePointers`. A dedicated machine participant-role channel would need an explicit predicate/binding or an explicit Handoff contract addition. Until then, Tooling should preserve the typed Relation and its target exactly and leave any specialized participant-role projection unresolved rather than guessing.

### 2. Durable/permanent claim language — Business process owns the current rule

The carried Business `.topics/processes/002-1-workflow-observation-reconciliation.trace.md` already states the operative rule: a significant role-language claim or workflow deviation must not become hidden session folklore, and language implying a durable, permanent, accepted, or completed change must correspond to recoverable project state the role can point to; otherwise the role must describe it as observation, proposal, intention, or session steering.

That is a workflow/process truthfulness convention governing how roles operate across sessions. It does not require a Role-schema change and should not be encoded as inherited Role authority. When a concrete durable semantic state exists, the state itself should be represented by its existing semantic owner—Task, Decision, Evidence, Relation, Handoff, schema change, or another appropriate artifact. The Business process governs truthful wording and recovery behavior; it does not make conversation or runtime state durable merely by naming it.

### 3. Minimum cold-recipient propagation — preserve exact semantic closure, not inferred convenience fields

A fresh recipient needs the smallest exact closure that preserves each semantic owner separately:

- the selected Handoff bytes, including From/To identity or Role endpoint, Transfers, Required Context, Reference Context distinction, Retained Responsibilities, Exclusions/Dependencies, Completion Expectation, and Interpretation Limits;
- exact Root continuity facts for the selected route: Current schema identity, direct Parent, recoverable Origin, and integrity;
- endpoint Role artifacts or explicit endpoint-capacity Role references required by the Handoff;
- every Role/Party/Relation artifact explicitly declared as Required Context for participant-role interpretation;
- every Business process/schema correction artifact explicitly declared as Required Context for recipient behavior;
- explicit holder state only where declared by Role/Party authority, including `unknown` rather than inferred identity;
- exact typed Relation meaning and unresolved targets/uncertainty rather than filename, label, package, or adjacency normalization.

Required Context is the blocking semantic closure. Reference Context remains non-blocking interpretive material. Parent, typed Relation, Handoff transfer, participant context, Role holder state, delegation, and acceptance must stay separate in storage and projection.

### 4. Human-first truth ordering — current authority is consistent but the universal rule is distributed

Current material strongly supports the requested principle:

- `LINEAGE_POLICY.md` states human-first continuity and allows human-directed LLM/tool assistance.
- Root makes machine validation/generation authority explicit while keeping the artifact readable and machine contracts bounded to their own acceptance surface.
- Schema Contract states that machine-extractable contracts do not replace human judgment or LLM review and that LLMs must not silently decide undeclared semantics.
- Party, Role, Adapter, Runtime, Discovery, and other families repeatedly require human-readable meaning recoverable without a specialized app.

What is missing is one canonical Root-level statement that joins those truths into the requested semantic ordering. If Anchor intends this to be a cross-schema invariant rather than a repeated design convention, the smallest authority change is one clarification in `tiinex.root.v1` rather than a new schema:

> Human-readable declared artifact meaning is the primary shared semantic surface. LLMs may recover or explain that same declared meaning without inventing missing authority; machines may validate or generate only the explicit machine contract surface. Machine validation authority may be stricter about acceptance shape, but it does not create a contradictory semantic meaning. LLM or runtime-private state must not silently override or invent artifact semantic authority.

This preserves Root's existing machine Validation/Generation Authority while making semantic priority and non-contradiction explicit.

### 5. Domain-neutral generic schemas — current practice is strong, but the generic-base invariant is not globally explicit

Current generic families already model domain neutrality: Adapter explicitly spans physical, natural, human, social, institutional, digital, procedural, archive, runtime, and mixed boundaries; Digital Adapter explicitly says it is not software-development-only; schema and workspace documentation repeatedly separates semantic authority from applications, programming languages, providers, repository paths, and runtime.

The missing piece is one universal contract-design rule for schemas that claim generic/base scope. If Anchor wants that invariant to be enforceable rather than inferred from current practice, the smallest change belongs in `tiinex.schema.contract.v1`, not a new domain-neutrality schema:

> A schema that claims generic or base scope must express its core semantics independently of any single profession, vendor/provider, repository host, programming language, framework, application, or field-specific implementation unless that specialization is itself the schema's explicit scope. Narrow descendants, adapters, interfaces, origins, or other specializations may add field-specific vocabulary without redefining the generic parent around it.

This keeps strict semantics while allowing GitHub-specific, digital-specific, profession-specific, or other narrow contracts below an explicitly generic parent.

### 6. Runtime-agnostic semantic promotion — existing authority is sufficient

Existing Adapter/Runtime/External-Payload/preservation boundaries already support the needed rule:

- runtime holding, staging, cache, transport convenience, working notes, and preserved material are distinct;
- runtime/LLM context is not preservation by itself;
- cache is operational convenience unless explicitly declared preserved material;
- portable semantics should survive implementations and environments;
- runtime artifacts exist specifically to preserve execution state/results when that state itself has durable interpretive value;
- external payload references provide readable recovery boundaries for larger machine material without making raw transport state semantic authority.

Therefore no new schema is required. The canonical promotion rule is:

1. If metadata is genuinely ephemeral and no later semantic/recovery dependency relies on it, it may remain runtime-local and non-authoritative.
2. If the information must survive the runtime, changes how a later reader interprets authority/continuity/state, or must be recoverable by a later human/LLM/tool, deliberately materialize the meaning under the appropriate existing Tiinex artifact/schema and preserve provenance and limits.
3. Physical carriage alone does not promote a runtime cache/checkpoint/receipt. A generated `.tiinex` checkpoint or receipt remains runtime-local unless a separate semantic artifact explicitly authorizes its preservation or references the relevant meaning.

The carried Site evidence where `.tiinex/checkpoints/**/plan.json` and `receipt.json` were physically included despite being classified as runtime-local is an implementation/carrier defect boundary, not evidence that those files acquired canonical semantic authority.

### Smallest authority-change set

No new schema family is required for the six transferred questions.

- No change required: Party/Role participant semantics.
- No change required: Handoff endpoint/transfer semantics.
- No change required: Relation capacity for exact additional participant context.
- No change required: Role schema for durable-claim language.
- No change required: runtime/preservation schema family for semantic promotion.
- Clarification recommended only if a universal invariant is intended: one Root human-first/non-contradictory semantic-ordering clause.
- Clarification recommended only if a universal invariant is intended: one Schema Contract domain-neutral generic/base rule.

The prior role-inheritance conclusion remains unchanged: generic Relation capacity still does not authorize concrete Role inheritance, specialization merge, delegation, or holder inference.

### Loom acceptance implications

A conforming Tooling implementation should:

- preserve exact selected Handoff and Required Context closure before claiming cold-recipient readiness;
- preserve endpoint Role authority separately from additional participant Party/Role/Relation context;
- never derive holder identity, delegation, acceptance, consent, attendance, or role inheritance from participant context;
- preserve Relation Type/Direction/Scope/target/uncertainty exactly and leave a specialized `participantRolePointers` projection unavailable unless an explicit machine binding is later authorized;
- keep Parent, relation, transfer, participant context, holder state, and completion expectation as distinct semantic families;
- preserve Business workflow/process corrections as explicit required material when they are necessary for fresh-recipient behavior rather than relying on chat/session memory;
- treat runtime-local `.tiinex` cache/checkpoint/receipt/plan material as non-source by default and exclude it from canonical Workspace source carriage unless a typed semantic artifact explicitly authorizes preservation;
- never create human-first or domain-neutral semantics in Tooling. If Anchor adopts the two clarifications, Tooling mirrors the exact canonical text/contract rather than inventing a substitute.

These are acceptance constraints only; this Discovery does not implement Tooling.

### Anchor disposition implications

Anchor can close the current semantic assignment without expanding Role/Handoff/Relation schema families:

- accept the Business workflow reconciliation artifact as the current durable-claim language owner;
- route participant-role context through explicit Party/Role plus typed Relation in Handoff context, keeping Handoff endpoints unchanged;
- keep any specialized machine participant-role pointer channel fail-closed until explicit binding authority exists;
- decide whether to authorize the two narrow global clarifications above in Root and Schema Contract;
- route Loom only the preservation/projection acceptance boundaries after that disposition;
- keep role inheritance as a separate unresolved product-semantic question under the prior Axiom discovery.

## Interpretation Limits

- This Discovery identifies current authority and the smallest missing global clarifications; it does not itself amend Root, Schema Contract, Role, Relation, Handoff, Runtime, Adapter, Business process, or Tooling source.
- “Existing authority is sufficient” means the meaning can be represented and recovered without inventing semantics; it does not guarantee that current Tooling exposes a dedicated convenience field for that meaning.
- An explicit Relation Type in one artifact is authoritative for that relation instance within its declared bounds; it is not automatically a globally registered predicate or a Role-inheritance vocabulary.
- Required Context makes material necessary for the selected Handoff's interpretation/readiness; it does not transfer responsibility or prove recipient acceptance.
- Business process truthfulness rules do not prove that a claimed durable state actually exists; the corresponding recoverable artifact/state must exist separately.
- The proposed Root and Schema Contract sentences are recommendations pending Anchor disposition, not canonical authority created by this Discovery.
- Does Not Mean: a new Role inheritance model, a third Handoff endpoint, a holder assignment, delegation, acceptance, consent, attendance proof, machine-only semantics, domainless schemas, or automatic promotion of runtime files has been approved.
- Must Not Be Used To Claim: semantic authority from chat memory, labels, filenames, package adjacency, transport JSON, runtime cache survival, or Tooling projection fields that are not grounded in declared Tiinex artifacts/contracts.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Role, Participant And Durable-Claim Semantics — Axiom Handoff](001-1-anchor-to-axiom-role-participant-durable-claim-handoff.trace.md)
  - Value: ETgoayWUTHTcXxP--PRxOAOriqwRBY5TjZ_Fq6scUnk

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:aae4iOJugUhf3ifxSeSLa7HPHJdFJ33Wo_wNMAxn5ps