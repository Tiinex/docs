# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-14 14:25:00
  - Trace: [002-anchor-to-axiom-process-applicability-grounding-semantics.trace.md](handoffs/002-anchor-to-axiom-process-applicability-grounding-semantics.trace.md)
  - Origin:
    - [relative](handoffs/002-anchor-to-axiom-process-applicability-grounding-semantics.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-14 13:29:26
  - Authors: Axiom
  - Why: Axiom found existing semantics sufficient; the durable missing rule is target-side forward discoverability of exact process authority without inventory or reverse-relation scanning.
  - Summary: Use existing Role/Task/Handoff/Decision/Relation semantics with forward process-authority selection and Required-Context closure; keep process state dimensions distinct.
  - Status: ready/local

---

# Process Applicability And Cold-Grounding Semantic Disposition

Current Tiinex semantics are sufficient for process applicability and cold discovery. No Process schema, applicability schema, global Relation predicate, Role inventory rule, or new readiness lifecycle state is required. The missing operating contract is a **forward applicability closure**: when current work depends on a process, the controlling work must explicitly select the exact process authority needed to establish applicability/obligation, and a cold Handoff must carry that authority as Required Context when it is not already recoverable from the selected route/frontier. A qualified process artifact being present or discoverable is availability only.

## Decision

- State: accepted
- Subject: process applicability, requiredness, cold discoverability and Tooling projection for thin-lineage Roles
- Decision: use existing Role, Task/Epic, Handoff, Decision and typed Relation semantics to declare process applicability; make material process authority forward-discoverable from controlling work/Required Context; keep availability, applicability, requiredness, active execution, ownership and completion evidence separate.

### Process state distinctions

1. **Availability** — exact process material is qualified, carried, cached or resolvable. Availability says the process can be read. It does not say that the process applies, is mandatory, is active, is owned by the current Role, or has completed.
2. **Applicability** — qualified current-scope authority states that the process governs or is relevant to the bounded work/context. This may be stated directly by the controlling Role/Task/Epic/Handoff/Decision or by an explicit typed Relation whose source/target/scope preserve the binding. Applicability does not by itself establish mandatory execution unless the governing authority also gives the process obligatory effect.
3. **Requiredness** — qualified authority states that following the process is an obligation for the bounded work. Requiredness may be expressed directly by the controlling work or by an operative/adoption Decision plus an applicable process contract whose effect is explicitly mandatory. `Handoff -> Required Context` means the **material** is required to understand/perform the Handoff; membership in Required Context alone must not be reinterpreted as proof that the referenced process is mandatory.
4. **Active execution** — qualified current work states that an execution/step/instance of the process is presently underway. Applicability or requiredness does not create active execution.
5. **Ownership/responsibility** — comes from explicit Role/Task/Handoff/Decision responsibility authority. Process applicability does not assign a holder, owner, delegate or participant.
6. **Completion evidence** — comes from qualified result/Evidence/Decision/Handoff-return or other explicit completion authority. Applicability, requiredness, current Task status, process placement or package carriage does not prove completion.

### Where process authority originates

The authority is intentionally composable rather than centralized in one schema:

- A **process artifact** owns the reusable procedure and may state generic applicability/trigger conditions such as `Use this process when ...`. That condition is authoritative process meaning once the process has been legitimately selected, but the existence of the artifact does not bind it to current work.
- A **Decision** may adopt a process as operative guidance for a bounded domain/scope and define its effect. The existing Foundation Cross-Repository Work Turn adoption is a valid example.
- A **typed Relation** may preserve a specific bounded applicability edge. The existing `operational guidance applies to`, direction `current adoption -> target context`, with an explicit target and scope is a valid relation instance. Its human-readable type is local semantic authority; this Decision does not elevate that string into a global privileged predicate.
- A **Role** may declare a standing process obligation only when it genuinely applies to that Role across the declared Role scope. Roles must not enumerate every process that could ever become relevant.
- A **Task/Epic/Handoff/Decision** may directly invoke or require an exact process for its own bounded scope. When that declaration is explicit enough to establish applicability and obligation, a separate Relation is optional.
- A **Handoff Required Context declaration** is the normal cold-delivery closure for exact process authority that the recipient needs but cannot otherwise recover from the selected controlling route. It supplies discoverability/material closure; it does not manufacture process applicability by package membership.

### Exact declaration and resolution rule

A process is cold-grounding discoverable only through a **forward selector from qualified current authority**. A fresh Role must not reverse-scan a Workspace for relations pointing at its Task, enumerate the Processes branch, or search all carried Roles/processes.

Accepted declaration patterns are:

1. **Direct current-work invocation** — the controlling Role/Task/Epic/Handoff/Decision names the exact process, the bounded scope in which it applies, and any requiredness/ownership effect that matters. The process artifact is then selected material, not inventory.
2. **Adoption + applicability relation** — an operative Decision identifies the process and its effect; a typed Relation binds that authority to an exact target context with explicit direction/scope. For a cold recipient starting from the target side, the selected Handoff or controlling work must also name/carry the applicability authority chain (Relation + operative Decision + process as needed) rather than relying on reverse-relation discovery.
3. **Standing Role obligation** — the current Role explicitly names a process as standing authority within a bounded Role scope; the selected Handoff must carry/resolve that Role and process authority when a cold recipient requires it.

Cold resolution is therefore:

1. start from the exact selected Handoff, explicit holder Role and qualified current-work frontier;
2. inspect only process references/declarations directly present in those controlling artifacts and their exact Required Context/qualified pointers or cache material;
3. follow only those declared references/Relations needed to reach the process procedure and any separate adoption/applicability authority;
4. classify each state dimension independently from the exact declaration that owns it; and
5. if a necessary process, Decision, Relation or controlling declaration is missing/unavailable, return that dimension as unresolved with an exact blocker. Do not substitute repository-wide scanning, reverse-edge discovery, filenames, package adjacency, process inventory, chat memory or remote search.

A complete Workspace may make many process artifacts **available** but does not change this resolution rule. When Business is absent, a qualified bounded Workspace/cache/pointer is equally sufficient if it carries/resolves the exact controlling declaration and process-authority chain within its qualified scope. Omitted siblings remain unknown rather than implicitly non-applicable.

### Accepted and rejected examples

Accepted:

- A Handoff says `use Cross-Repository Work Turn for this transfer`, bounds the scope, and carries the exact process as Required Context.
- A Task points to an operative process-adoption Decision and an exact applicability Relation for that Task; the Handoff carries those exact artifacts for the cold recipient.
- A Role states a standing review process obligation for that Role scope and the current Handoff resolves that Role/process material.

Rejected:

- `the process file is in Business`, therefore it applies;
- `this Role often does this work`, therefore every nearby process applies;
- find all Relation artifacts whose targets happen to equal the current Task and treat them as obligations;
- infer a universal `process applies to` predicate from arbitrary Relation Type wording;
- treat Handoff Required Context membership alone as process applicability or requiredness;
- treat a process's generic `Applicability` prose as permission to discover that process by inventory scan;
- infer active execution, responsibility or completion from applicability/requiredness.

### Exact proposed Business Anchor Role delta

Anchor owns Business mutation. The current `Anchor Role — Thin-Lineage Orchestration Discipline Continuation` already contains the correct participant/source/delegation discipline; it needs only this additional process-discoverability rule after this semantic question is closed:

- **Process applicability discovery** — "Before substantive planning or delegation, recover process obligations only from qualified current-scope Role, Task/Epic, Handoff, Decision or typed Relation authority. When an applicable process must survive a cold Handoff, make the exact process authority chain forward-discoverable through the controlling work and Required Context (process plus any separate adoption/applicability authority not already carried by the controlling artifact). Do not rely on process inventory, reverse-Relation scanning, filenames or carriage. Preserve availability, applicability, requiredness, active execution, ownership and completion as separate facts."

No existing Business process needs semantic rewriting merely to make it discoverable. The Foundation `process -> adoption Decision -> applicability Relation` pattern is valid; the missing rule is to select/carry that chain from the target-side Handoff/current work when a cold recipient must obey it.

### Tooling-facing projection contract for Loom

Loom may implement additive diagnostics/projections but must not create process authority. Equivalent field names are an implementation choice; the semantic contract is:

1. Tooling may project a process item only when the selected qualified current authority explicitly selects it or selects exact applicability authority that resolves to it. Do not enumerate process inventory or perform reverse-relation discovery to create candidates.
2. For each projected process, keep separate dimensions for **material availability**, **applicability**, **requiredness**, **active execution**, **ownership/responsibility**, and **completion evidence**. Do not upgrade one dimension from another.
3. Every non-unresolved dimension must show exact provenance: owning artifact/path, schema, relevant section/declaration or Relation Type/Direction/Scope/Target, the selected-current-work or Required-Context edge that made it discoverable, and source classification (complete Workspace, bounded representation/cache, qualified pointer/reference, or unavailable).
4. A process artifact's generic Applicability section may be projected as a process-owned condition after the process has been explicitly selected. Tooling must not silently evaluate free-text conditions into current-work applicability unless a separate qualified declaration already makes that match explicit.
5. When an explicit applicability Relation is selected, Tooling may project its exact relation facts and bounded target/scope. It must not normalize arbitrary Relation labels into a global policy/process predicate or infer other targets.
6. If process material is available but no current-scope applicability declaration is selected, expose `applicability unresolved/not declared`; availability is not a positive applicability result.
7. If applicability is explicit but obligation strength is absent, expose `requiredness unresolved/not declared`; do not assume applicable means mandatory.
8. If a declared required process or its applicability authority is unavailable, return an exact blocker naming the missing artifact/reference, owning declaration/basis and why execution cannot safely continue. Do not auto-search repositories/connectors.
9. `grounded-to-act` remains unchanged and bounded. Process diagnostics may reveal a separate orchestration gap, but they do not broaden that readiness state or create a new canonical lifecycle state.
10. Explain empty/unresolved process projection explicitly: no process selector was declared for this route/current work, or declared authority could not be qualified. Empty must not be filled from carried inventory.

## Basis

- `tiinex.party.role.v1` already supports bounded Role scope, authority/responsibility and required instruments without proving holder/authority from Role presence.
- `tiinex.relation.v1` already supports typed non-Parent edges with explicit type, direction, scope, target and interpretation limits; it does not require a globally registered predicate.
- `tiinex.handoff.v1` already distinguishes Transfers, Required Context, Reference Context, retained responsibility and unavailable dependencies; Required Context is explicitly the place for material needed to understand or perform the transfer.
- Business already demonstrates a sound process representation: reusable process Topic, explicit adoption Decision, and a typed applicability Relation to one target context. Its own boundary correctly rejects package/location/runtime inference and global predicate normalization.
- Another accepted Business process carries its own generic `## Applicability` condition, confirming that reusable process artifacts can own trigger semantics without becoming automatically applicable to every work item.
- The current Anchor Role continuation already forbids inventory/carriage inference and reserves process-applicability semantics as the remaining open question, so only one small follow-on operating clause is needed.
- Current Core first-return mechanics already separate route readiness, participant context and source provenance and explicitly keep process applicability unresolved pending semantic authority. No implementation behavior needs to be promoted into semantics.

## Consequences

- Docs needs no new schema family or global Relation vocabulary for this task.
- Cold process discovery becomes sparse and deterministic: controlling work selects exact process authority; Required Context carries it when necessary; absence of a selector remains absence of authority rather than a prompt to scan.
- The existing Foundation process/adoption/applicability lineage remains semantically valid. For cold target-side use, future Handoffs must carry/select the relevant chain rather than assume reverse graph discovery.
- Anchor should add the single proposed process-applicability-discovery clause to the Anchor Role (or explicitly place equivalent operating text in a controlling shared workflow artifact) and then use it when manufacturing blind successor Handoffs.
- Loom can now implement process introspection/projection against explicit selected authority and fail visibly when no selector/binding exists, without inventing process semantics.

## Review Conditions

Review this decision only if a future canonical Process schema defines stronger process-instance/applicability semantics, a canonical typed process relation vocabulary is adopted, or a blind successor shows that explicit forward selection plus Required Context cannot recover necessary process obligations without human reconstruction.

## Immediate Next Questions

- Anchor: apply the exact Role clause directly, or place equivalent text in a shared orchestration process and reference it from Anchor Role authority?
- Anchor/Loom: for the blind successor carrier, which exact process authority chains are materially required by the selected work and therefore belong in Required Context?
- Validation: does a fresh Role distinguish available/applicable/required/active/owned/completed process states without reverse scanning or Sigma reconstruction?

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [002-anchor-to-axiom-process-applicability-grounding-semantics.trace.md](handoffs/002-anchor-to-axiom-process-applicability-grounding-semantics.trace.md)
  - Value: YletNgyM1C2rYKckMvbaWkQlW-R5JBCXMGh-uGPR5ec

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: UGk-pc_jwWgnU9pUbk2aGhnjAtfstO1XduoGbuHdyhk