# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.discovery.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/discovery/tiinex.discovery.v1.schema.md)
  - Created At: 2026-08-30 17:03:00
  - Trace: [Axiom Role Graph And Process Current-State Discovery](001-axiom-role-graph-process-current-state-discovery.trace.md)
  - Origin:
    - [relative](001-axiom-role-graph-process-current-state-discovery.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/46738b4224a2f4aa04aa4a882f3db8b51d25fceb/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-08-31 21:42:00
  - Authors: Anchor
  - Why: Close the semantic gap between endpoint Role grounding, optional Participant-role context, durable workflow corrections, and three cross-runtime semantic principles without inventing holder/delegation/inheritance semantics inside Tooling.
  - Summary: Anchor-to-Axiom handoff for the smallest semantic clarification needed for recipient-visible Role/Participant grounding, durable-claim behavior, domain-neutral schema meaning, and runtime-agnostic Tiinex artifact authority.
  - Status: ready/local

---

# Role, Participant And Durable-Claim Semantics — Axiom Handoff

## Handoff Parties

- Purpose: determine the smallest current semantic authority needed so recipient roles can distinguish endpoint Role authority, additional participant-role context, human participation, and durable workflow state without relying on chat memory or inventing inheritance/delegation semantics
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role](https://github.com/Tiinex/business/blob/5fa225bbba1fafec91a9a9b948dcd1163037dfa0/.topics/roles/001-1-anchor-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](https://github.com/Tiinex/business/blob/5fa225bbba1fafec91a9a9b948dcd1163037dfa0/.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- participant-grounding-clarification
  - Transfer Kind: work-and-responsibility
  - Description: determine what current Role/Handoff/Relation/Participant authority can legitimately express additional participant-role context for a cold recipient without asserting a human holder, delegation, acceptance, or invented base-role inheritance

- durable-claim-semantic-boundary
  - Transfer Kind: work-and-responsibility
  - Description: determine whether the rule that significant durable/permanent language must correspond to durable recoverable state belongs purely to Business process convention, requires Role-domain authority, or needs another existing semantic owner; prefer no schema change when current authority is sufficient

- recipient-propagation-boundary
  - Transfer Kind: work-and-responsibility
  - Description: specify the minimum semantic information Tooling must preserve so a fresh recipient can recover relevant Role/process corrections while keeping Parent continuity, typed Relation, Handoff transfer, participant context, and holder identity distinct

- human-first-truth-ordering-review
  - Transfer Kind: work-and-responsibility
  - Description: determine whether current Core/Root/lineage authority already states strongly enough that Tiinex meaning is first human-comprehensible, then recoverable by LLMs, then machine-verifiable without any of the three receiving privileged or contradictory semantics; prefer clarification of existing authority over a new schema when current contracts already carry the principle

- domain-neutral-schema-review
  - Transfer Kind: work-and-responsibility
  - Description: determine whether current schema authority explicitly prevents generic Tiinex concepts from being defined around one profession, software-development vocabulary, provider, repository host, or other field-specific implementation; preserve strict semantics while allowing field-specific specializations/adapters below the generic contract

- runtime-agnostic-semantic-promotion-review
  - Transfer Kind: work-and-responsibility
  - Description: determine the smallest canonical boundary for meaning-bearing runtime/companion metadata: information that must survive runtime, affect interpretation/authority/continuity, or be recoverable by a later human/LLM/tool should prefer a typed Tiinex artifact/schema, while genuinely ephemeral caches/checkpoints/scratch state remains runtime-local and non-authoritative

## Required Context

- prior-role-graph-discovery
  - Material: Axiom Role Graph And Process Current-State Discovery
  - Material Reference: [Axiom Role Graph And Process Current-State Discovery](001-axiom-role-graph-process-current-state-discovery.trace.md)
  - Purpose: preserve the existing fail-closed conclusion that current authority does not define generic concrete-role inheritance
  - Availability: available

## Reference Context

- business-workflow-reconciliation
  - Material: Business Workflow Observation Reconciliation process topic
  - Purpose: product/process intent for truthful state language, improvement/defer behavior, recipient visibility, and minimal behavioral acceptance
  - Availability: available

- current-role-artifacts
  - Material: carried Business Anchor, Axiom, Loom, and Sigma Role artifacts
  - Purpose: compare the requested behavior with current role responsibility/authority before proposing any semantic change
  - Availability: available

- current-cold-start-evidence
  - Material: current carrier behavior where endpoint Role material can qualify while participant-role grounding remains separately unresolved/empty
  - Purpose: keep the semantic question tied to an observed recipient boundary without treating current Tooling shape as canonical meaning
  - Availability: available

- current-core-and-lineage-principle-material
  - Material: carried Business Tiinex Core project plus Docs README, context, and Lineage Policy statements that schemas describe artifact meaning rather than runtime and that humans/LLMs/Tooling should interpret the same artifacts without hidden provider-specific meaning
  - Purpose: distinguish already-authorized human/runtime-neutral meaning from genuinely missing domain-neutral or semantic-promotion authority before proposing new schema text
  - Availability: available

- current-tooling-runtime-boundary-evidence
  - Material: returned Site Tooling behavior and Anchor review showing generated `.tiinex/checkpoints/**/receipt.json` and `plan.json` runtime state was physically carried inside the Site Workspace despite Loom Evidence classifying generated checkpoints/receipts as runtime-local
  - Purpose: provide one concrete runtime-versus-semantic boundary case without promoting the current implementation bug into canonical meaning
  - Availability: available

## Retained Responsibilities

- architecture-and-process-disposition
  - Retained By: Anchor
  - Responsibility: decide how Axiom's semantic result changes Business process or cross-role architecture and how Loom should consume it

- tooling-implementation
  - Retained By: Loom
  - Responsibility: implement only qualified semantics and preserve unknown/unavailable state rather than guessing

- human-observation-and-deferral
  - Retained By: Sigma
  - Responsibility: provide human workflow observations and accept/defer meaningful changes when relevant; no holder relation is inferred merely from this Handoff

## Exclusions And Dependencies

- generic-role-inheritance
  - Kind: excluded-scope
  - Description: do not invent or repurpose schema inheritance as concrete Role inheritance unless new explicit product meaning and authority is separately established

- holder-or-delegation-inference
  - Kind: excluded-scope
  - Description: do not infer that a carried Role artifact or participant-role pointer proves a human holder, delegation, consent, or acceptance

- broad-schema-redesign
  - Kind: excluded-scope
  - Description: prefer a bounded discovery/decision using existing authority; propose schema work only if the requested distinction cannot be represented truthfully otherwise

- remote-mutation
  - Kind: excluded-scope
  - Description: no GitHub mutation is authorized by this Handoff

## Completion Expectation

- Signal Kind: result
- Signal Meaning: Axiom returns one bounded semantic discovery/decision identifying what is already authorized, what remains unknown, the smallest required authority change if any, and concrete acceptance implications for Loom/Anchor without implementing Tooling
- Return To: Anchor
- Return To Reference: [Anchor Role](https://github.com/Tiinex/business/blob/5fa225bbba1fafec91a9a9b948dcd1163037dfa0/.topics/roles/001-1-anchor-role.trace.md)

## Interpretation Limits

- Does Not Mean: a new Role inheritance model is approved, participant Role pointers prove holder identity, Business process prose is canonical schema authority, Tooling implementation is authorized to guess unresolved semantics, or Sigma accepted a schema change
- Must Not Be Used To Claim: delegation, holder assignment, role inheritance, acceptance, or durable state solely from labels, package adjacency, chat memory, or transport JSON

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Axiom Role Graph And Process Current-State Discovery](001-axiom-role-graph-process-current-state-discovery.trace.md)
  - Value: nKkk6Mlh77CceNV2lOHD4fRXf-DdPpaaEkIqg3dNUPo

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: ETgoayWUTHTcXxP--PRxOAOriqwRBY5TjZ_Fq6scUnk
