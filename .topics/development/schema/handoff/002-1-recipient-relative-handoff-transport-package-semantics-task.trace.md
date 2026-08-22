# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-08-22 13:22:00
  - Trace: [002-recipient-relative-handoff-transport-packaging-dogfood-topic.trace.md](002-recipient-relative-handoff-transport-packaging-dogfood-topic.trace.md)
  - Origin:
    - [relative](002-recipient-relative-handoff-transport-packaging-dogfood-topic.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 13:24:00
  - Authors: Tiinusen; Architect
  - Status: draft/local
  - Why: Convert the recipient-relative transport/package dogfood findings into bounded Schemer work before Viewer or portable Tooling implements a hidden state model or a second package authority.
  - Summary: Reconcile semantic boundaries for disposable Handoff transport packages, workspace-contained durable artifacts, recipient-relative material closure, mirrors, partial workspace materialization, optional bootstrap, and provider-neutral external resolution without prematurely designing implementation mechanics.

---

# Reconcile Recipient-Relative Handoff Transport Package Semantics

## Objective

Determine the smallest semantically correct authority model for recipient-relative Handoff transport so existing workspace truth can be packaged for stateless or sandboxed recipients without turning packages into lineage/state, duplicating canonical artifact authority, hiding partial-workspace truth, or making runtime/provider limitations look like missing Tiinex capability.

## Done Criteria

- Treat the parent Topic as dogfood evidence and design pressure, not as a pre-decided schema solution.
- Recover before inventing. Inspect current `tiinex.handoff.v1`, `tiinex.semantic.package.v1`, `tiinex.external.payload.v1`, workspace/source/access/package-adjacent authority, Relation, Party/Role where relevant, and corpus examples before proposing any new schema or field.
- Preserve the current Handoff boundary: Handoff declares semantic transfer/context/retained responsibility/completion expectation; ZIP/package/resolver mechanics do not define transfer semantics or recipient acceptance/completion state.
- Determine how Tiinex should represent, or deliberately avoid representing, a derived disposable Handoff transport package whose job is only to carry already-owned workspace material plus non-authoritative transport convenience.
- Preserve the invariant that Tiinex artifacts live in workspaces/lineages with independent meaning. Do not require or normalize loose package-root Tiinex artifacts outside those workspaces. A Handoff artifact remains inside its owning workspace lineage.
- Qualify optional bootstrap handling. Bootstrap may be carried as a package toggle for fresh stateless recipients, but must remain orientation/transport convenience rather than workspace authority, Handoff state, or canonical artifact content.
- Distinguish canonical artifact authority from transport materialization. A package-local mirror/materialization of an external artifact must not become a new semantic identity or authority merely because it is physically present, copied from another Handoff package, or accessible through a different provider.
- Determine what truth is required when a package carries only a bounded subset/materialization of an external workspace. Partial materialization must not masquerade as a complete workspace snapshot, but avoid inventing durable ceremony if transport-local exact closure evidence is sufficient.
- Reconcile recipient-relative material closure. A semantic Handoff may be valid while transport readiness is incomplete because required context cannot currently be resolved for one recipient environment. Preserve that distinction explicitly.
- Preserve environment capability separately from system capability. Direct sandbox network unavailability must not imply Tiinex lacks external resolution when an authorized host/runtime connector, local workspace, supplied package, cache/mirror, or other provider can return the required exact material.
- Decide the semantic boundary for provider-neutral material resolution. Portable tooling should be able to request exact required material and consume a host-resolved result without making GitHub, ChatGPT connectors, one filesystem, or one network model canonical semantics.
- Pressure-test reuse of material from a prior Handoff package. A prior package may be a byte/material source when exact representation identity/provenance is preserved, but the package itself must not become artifact authority or Handoff lifecycle state merely through reuse.
- Preserve the specialized current meaning of `tiinex.semantic.package.v1`. Do not silently generalize it into a generic Handoff transport envelope unless current authority and corpus evidence actually justify that change.
- Determine whether any genuinely missing semantic concept warrants a new canonical schema, an extension to an existing schema, a usage convention over existing schemas, or no docs mutation at all. Prefer `NO SCHEMA CHANGE` when runtime-local/package-local mechanics can remain implementation detail without losing durable truth.
- Produce explicit implementation guidance for later Architect/Tooling work: which truths portable/shared Tooling may derive, which must come from canonical artifacts, what must fail closed, and what must never be persisted as hidden state.
- Preserve the intended shared-consumer architecture as a non-semantic implementation boundary: one portable material-closure/planning capability should be usable by Viewer, LLM workers, CLI/automation, and host integrations rather than duplicated as Viewer-only logic. Schemer should qualify semantic preconditions, not implement Site or Tooling.
- Keep broader v480 Site inheritance/create-authoring debt outside this task unless one exact schema-side representation is impossible without resolving it. Record separate follow-on debt instead of widening.
- Return one complete updated Tiinex/docs workspace ZIP containing the durable Schemer result and any justified docs mutations. Do not separately attach duplicate result/schema files by default. Terminal completion requires workspace ZIP creation, separate extraction/roundtrip verification, and an actual downloadable attachment.

## Scope

This is a bounded schema/governance reconciliation for Handoff transport packaging and recipient-relative material closure. It may clarify or minimally mutate canonical docs only where durable semantic truth is otherwise unowned. It does not implement the Viewer, package builder, host connectors, network fetch, CLI, LLM runtime integration, or generic Site compiler fixes.

A valid outcome may be:

```text
A. current authority sufficient
→ no canonical schema mutation
→ implementation guidance only

B. one bounded existing-schema clarification
→ mutate only the exact owning schema(s)

C. one genuinely missing generic transport/package authority
→ propose the smallest new canonical concept
→ prove why existing Handoff / Semantic Package / External Payload / Access / workspace authorities cannot own it

D. insufficient evidence
→ preserve the dogfood finding
→ do not manufacture a schema
```

## Dependencies

- Dogfood topic: [recipient-relative Handoff transport packaging](002-recipient-relative-handoff-transport-packaging-dogfood-topic.trace.md)
- Current local Handoff schema with endpoint-capacity correction: [tiinex.handoff.v1](../../../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
- Current semantic package authority: [tiinex.semantic.package.v1](../../../.schemas/package/semantic/tiinex.semantic.package.v1.schema.md)
- Current external payload authority: [tiinex.external.payload.v1](../../../.schemas/external/payload/tiinex.external.payload.v1.schema.md)
- Current Role/capacity reconciliation result: [role capacity schema reconciliation result](../role/001-1-1-role-capacity-schema-reconciliation-result.trace.md)
- Current Root: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: IlHnWrv42pWiXMyRBnLA37Wrdgrb3f6NvKHLAd49kUM
