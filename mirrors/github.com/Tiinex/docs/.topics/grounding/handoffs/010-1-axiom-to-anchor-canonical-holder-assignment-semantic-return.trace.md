# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 17:24:51
  - Trace: [010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md](010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md)
  - Origin:
    - [relative](010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 17:50:24
  - Authors: Axiom
  - Why: Axiom completed the delegated holder-assignment semantic closure; Anchor and Loom now own Business reconciliation, Core implementation, acceptance validation and checkpoint progression.
  - Summary: Return the accepted canonical holder-assignment mode contract, exact legacy Role mappings, Loom acceptance criteria and Anchor reconciliation boundary.
  - Status: ready/local

---

# Axiom To Anchor — Canonical Holder Assignment Semantic Return

## Handoff Parties

- Purpose: return the accepted canonical holder-assignment disposition so Anchor can integrate the Business acceptance path and Loom can implement deterministic Role-holder authorization without full-sentence whitelisting, heuristic prose parsing, historical Role rewrites or durable-holder invention.
- From: Axiom
- From Kind: role
- From Reference: [Axiom Role](business::.topics/roles/001-2-axiom-role.trace.md)
- To: Anchor
- To Kind: role
- To Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)

## Transfers

- canonical-holder-assignment-semantic-integration
  - Transfer Kind: work
  - Description: consume the accepted semantic distinction between human-readable Holder State, canonical Assignment Modes, binding assertion, binding authorization, bounded binding result and durable holder identity.
  - Controlling Artifact: [Canonical Holder Assignment Mode Semantic Disposition](../013-canonical-holder-assignment-mode-semantic-disposition.trace.md)
  - Boundary: no new schema family, participant model, delegation model, source authority or readiness lifecycle is authorized; only the narrow Holder Relationship assignment-mode primitive is identified.

- loom-holder-normalization-implementation
  - Transfer Kind: work
  - Description: implement the Decision's deterministic normalized assignment-mode contract and exact current-Role legacy mappings so Anchor/Axiom/Loom/Kodax session authorization is mode-based rather than prose-based; preserve invocation, Handoff, user-session and participation distinctions.
  - Controlling Artifact: [Canonical Holder Assignment Mode Semantic Disposition](../013-canonical-holder-assignment-mode-semantic-disposition.trace.md)
  - Boundary: Core must consume structured normalized mode authority with exact provenance and must not authorize by raw Holder State sentence comparison, fuzzy parsing, substring/keyword tests, embeddings or generic LLM interpretation.

- holder-authorization-acceptance-validation
  - Transfer Kind: work
  - Description: validate at minimum Anchor, Axiom, Loom, Kodax and Pilot positive cases plus Sigma/Glimmer/unknown-prose negative or narrower-mode cases exactly as specified by the Decision; prove Kodax session parity and Loom/Kodax/Pilot invocation normalization without widening other modes.
  - Controlling Artifact: [Canonical Holder Assignment Mode Semantic Disposition](../013-canonical-holder-assignment-mode-semantic-disposition.trace.md)
  - Boundary: passing current positive cases does not authorize unmapped future prose or establish durable holder identity.

- anchor-business-reconciliation
  - Transfer Kind: work
  - Description: reconcile Loom's qualified Core return against the controlling Business holder-normalization Task and decide Business acceptance/checkpoint progression.
  - Controlling Artifact: [Canonical Holder Assignment Mode Normalization](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Boundary: Axiom has not mutated Business and this semantic return is not Business acceptance or Core implementation proof.

## Required Context

- canonical-holder-assignment-semantic-decision
  - Material: accepted Axiom semantic disposition defining canonical Assignment Modes, exact legacy mappings, fail-closed boundaries and Loom acceptance criteria.
  - Material Reference: [Canonical Holder Assignment Mode Semantic Disposition](../013-canonical-holder-assignment-mode-semantic-disposition.trace.md)
  - Purpose: controlling semantic result of this Handoff.
  - Availability: available

- controlling-business-holder-task
  - Material: Business Canonical Holder Assignment Mode Normalization Task.
  - Material Reference: [Canonical Holder Assignment Mode Normalization](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Purpose: organizational acceptance boundary for Anchor reconciliation, Loom implementation and checkpoint progression.
  - Availability: available

## Reference Context

- incoming-axiom-handoff
  - Material: Anchor-to-Axiom semantic delegation that this return satisfies.
  - Material Reference: [Anchor To Axiom — Canonical Holder Assignment Semantics](010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md)
  - Purpose: original transfer, exclusions and completion expectation.
  - Availability: available

- accepted-holder-binding-gate
  - Material: accepted Holder Binding And Implementation Source Authority semantic disposition.
  - Material Reference: [Holder Binding And Implementation Source Authority Semantic Disposition](../007-holder-binding-implementation-source-authority-semantic-disposition.trace.md)
  - Purpose: retained authority separation between recipient Role, binding assertion, binding authorization, bounded result and durable holder identity.
  - Availability: available

- current-business-role-set
  - Material: current qualified Business Role artifacts used by the Decision's exact legacy normalization, including Anchor, Axiom, Loom, Kodax, Pilot, Prism, Playthings, Glimmer and Sigma.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: acceptance evidence for the exact current mappings only; Role inventory itself is not holder authority.
  - Availability: available

## Retained Responsibilities

- business-integration-and-acceptance
  - Retained By: Anchor
  - Responsibility: reconcile the semantic result and Loom implementation against the controlling Business Task, decide acceptance, and advance checkpoint/recovery work only after exact acceptance evidence exists.
  - Boundary: Axiom's Decision does not mutate Business or declare the production blocker closed.

- core-implementation-and-qualification
  - Retained By: Loom
  - Responsibility: implement structured normalized assignment-mode consumption, exact provenance, fail-visible diagnostics and the positive/negative acceptance cases in Core.
  - Boundary: Loom implements the accepted semantics; Core does not redefine Role assignment modes or create holder authority from session input/transport/prose.

- role-artifact-ownership
  - Retained By: the owning Business Role/process authorities
  - Responsibility: decide whether/when current Role artifacts are later revised to carry a future structured `Assignment Modes` field.
  - Boundary: historical Role prose does not need to be rewritten solely to satisfy current Tooling; any future Role edit remains separately authorized Business work.

- docs-schema-amendment
  - Retained By: Axiom / Docs semantic authority
  - Responsibility: if a later separately delegated Docs change adds `Assignment Modes` to the canonical `tiinex.party.role.v1` schema contract, preserve this Decision's optional/backward-compatible semantics and token boundaries.
  - Boundary: this return identifies the narrow missing primitive but does not claim that the canonical Role schema file has already been amended.

- semantic-contradiction-review
  - Retained By: Axiom
  - Responsibility: review only a later concrete contradiction showing that the mode-set model plus existing holder-class/boundary semantics cannot represent a truthful Role assignment mechanism.
  - Boundary: implementation inconvenience, a new prose variant, or failure to carry structured/mapped authority is not by itself a semantic contradiction.

## Exclusions And Dependencies

- no-prose-whitelist
  - Kind: excluded-scope
  - Description: do not repair Kodax by adding its full Holder State sentence, punctuation variant or additional current sentences to a Core whitelist.
  - Responsible Party Or Role: Loom

- no-heuristic-holder-parser
  - Kind: excluded-scope
  - Description: do not infer positive assignment modes from keywords, substrings, punctuation normalization, fuzzy similarity, embeddings or generic natural-language interpretation of arbitrary Holder State prose.
  - Responsible Party Or Role: Loom

- no-historical-role-rewrite-as-fix
  - Kind: excluded-scope
  - Description: do not rewrite Kodax or other historical Role Holder State prose merely to match a currently accepted Tooling sentence. Use the exact Decision mapping for current artifacts and structured modes for future deterministic authoring.
  - Responsible Party Or Role: Anchor / Loom

- no-holder-identity-collapse
  - Kind: excluded-scope
  - Description: normalized assignment modes and a matching session/invocation assertion do not establish durable Party identity, participation, acceptance, delegation, source authority or remote-write permission.
  - Responsible Party Or Role: Anchor / Loom

- schema-amendment-not-yet-claimed
  - Kind: unresolved-dependency
  - Description: the Decision identifies an optional structured `Assignment Modes` primitive within `tiinex.party.role.v1`; the canonical schema artifact itself remains unchanged until separately authorized Axiom/Docs work performs that amendment.
  - Responsible Party Or Role: Axiom / Anchor

- loom-implementation-pending
  - Kind: unresolved-dependency
  - Description: semantic closure is qualified, but Core behavior remains pending until Loom implements and qualifies the Decision contract and Anchor reconciles the result against the Business Task.
  - Responsible Party Or Role: Loom / Anchor

## Completion Expectation

- Signal Kind: none
- Signal Meaning: this Handoff is the requested Axiom semantic return. No further Axiom completion signal is required unless Loom/Anchor validation exposes a concrete semantic contradiction or a separately authorized Docs schema amendment is delegated.

## Interpretation Limits

- Does Not Mean: current Holder State prose is now globally parseable; every occurrence of `session`, `invocation` or `Handoff` authorizes assignment; a Role-only Handoff endpoint binds a holder; a matching session assertion establishes durable identity; or Business/Core integration is complete.
- Must Not Be Used To Claim: new participant/process/delegation/source authority, acceptance, remote mutation, schema-file amendment, or positive authorization for any Role artifact not covered by exact structured modes or an exact qualified semantic mapping.
- Authority Limits: this return governs bounded Docs semantics for Role holder-assignment mode normalization. Anchor retains Business/orchestration/acceptance authority, Loom retains Core implementation, Business Role owners retain Role mutation authority, and Axiom retains Docs semantic contradiction/schema work only when separately authorized.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md](010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md)
  - Value: VoJoLg3YDNiuDUq5WVpZ2BC-KInlnf5nGQdbwjawBy4

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: l5wyRb8PFmUgQ4NRqC-X_e566EislgoS8b5TBkncMsw