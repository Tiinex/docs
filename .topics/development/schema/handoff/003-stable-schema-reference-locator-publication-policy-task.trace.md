# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-22 13:42:00
  - Trace: [recipient-relative Handoff transport package semantics result](002-1-1-recipient-relative-handoff-transport-package-semantics-result.trace.md)
  - Origin:
    - [relative](002-1-1-recipient-relative-handoff-transport-package-semantics-result.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 14:12:00
  - Authors: Tiinusen; Architect
  - Status: draft/local
  - Why: Resolve the publication and portability policy for schema-reference link targets before publishing the current docs tranche, so Tiinex does not rely on resolver-specific repair where ordinary Markdown could preserve stable traversal directly.
  - Summary: Reconcile identifier-versus-locator semantics for Envelope Schema, Parent Schema, and Current Schema references; prefer immutable canonical locators for published external schema representations where available while preserving explicit self/local/unpublished and discovery/latest boundaries.

---

# Reconcile Stable Schema Reference Locator Publication Policy

## Objective

Define the smallest coherent authoring/publication rule for schema-reference fields so their link labels remain semantic schema identifiers while their link targets provide the most stable usable representation locator available, including outside Tiinex-specific tooling.

## Done Criteria

- Treat this as a representation/authoring-policy reconciliation, not a presumption that current artifacts are invalid under current Root.
- Recover current Root and corpus authority before changing any schema. Determine whether current contracts already distinguish schema identifier from representation locator sufficiently, and whether the missing truth belongs in Root, schema-authoring guidance, both, or neither.
- Preserve the semantic distinction:

```text
Markdown link label
→ schema semantic identifier / key

Markdown link target
→ representation locator / traversal route
```

- Preserve ordinary-Markdown portability as a first-class design pressure. A copied, mirrored, printed, archived, or normally rendered Tiinex artifact should retain the strongest practical traversal path available without requiring Tiinex-specific resolver repair when a stable canonical locator already exists.
- Qualify the publication default for `Envelope Schema`, `Parent Schema`, and `Current Schema` when the referenced schema is a different already-published canonical artifact and an immutable canonical locator is available. Pressure-test whether commit-pinned permalinks should be required or preferred for this case.
- Explicitly classify mutable branch locators such as `blob/master/...`. Do not treat a mutable latest locator as equivalent to an immutable exact-representation permalink merely because both resolve in a browser.
- Preserve self-reference as a distinct case. A schema artifact whose `Current Schema` target is itself may legitimately use a relative self-link when that link remains correct when the file is moved together with itself.
- Preserve local/unpublished targets as a distinct case. Relative/local locators may remain the only truthful route before publication; tools and authors must not fabricate a commit-pinned permalink that does not yet exist.
- Decide the role of plain schema identifiers when no useful locator is available. Preserve identifier truth without pretending that exact representation material has been resolved.
- Keep discovery/latest semantics outside this tranche. Mutable/latest discovery may later intentionally ask for current material, but that is a different truth from exact schema-reference representation binding.
- Keep the rule origin-neutral. GitHub commit permalinks are a current implementation of an immutable canonical locator, not the semantic definition of stable schema representation authority.
- Reconcile historical mixed corpus usage such as relative links, `blob/master` links, and commit-pinned links. Decide whether the current tranche requires immediate corpus normalization, future-authoring guidance plus explicit representation debt, or a bounded normalization gate before Site/refactor merges to master.
- Do not perform a broad corpus rewrite merely for visual consistency unless the governing policy and migration boundary justify it. If normalization is deferred, preserve a concrete durable debt/gate so it is not forgotten before master merge.
- Preserve exact representation semantics across mirrors and resolvers. A host may resolve a stable locator through local material, mirror, supplied package, connector, cache, or network, but resolution convenience must not rewrite the declared schema identifier or silently substitute a different representation.
- Produce explicit downstream guidance for portable Tooling: distinguish semantic schema identity from locator resolution state; preserve unresolved material as unresolved; do not infer exact representation from label alone when exact material matters.
- Return one complete updated Tiinex/docs workspace ZIP containing a durable Schemer result and any justified docs mutations. Do not attach duplicate loose artifacts by default. Terminal completion requires separate extraction/roundtrip verification and an actual downloadable ZIP.

## Scope

This task is limited to schema-reference identifier/locator representation policy and publication portability for the current docs corpus. It may make a small canonical docs clarification only if existing authority cannot express the required distinction cleanly.

Valid outcomes include:

```text
A. current semantics sufficient
→ durable authoring/publication policy only
→ explicit normalization debt/gate if needed

B. bounded Root or schema-authoring clarification
→ mutate only the true owning authority

C. bounded corpus normalization required now
→ prove why publication without it would create contradictory current authority

D. insufficient evidence
→ preserve the ambiguity
→ do not manufacture a rule
```

## Dependencies

- Current recipient-relative transport result: [recipient-relative Handoff transport package semantics result](002-1-1-recipient-relative-handoff-transport-package-semantics-result.trace.md)
- Current Root: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Current Handoff schema as one mixed-reference example: [tiinex.handoff.v1](../../../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
- Current Digital Adapter schema as one mixed-reference example: [tiinex.digital.adapter.v1](../../../.schemas/adapter/digital/tiinex.digital.adapter.v1.schema.md)
- Current canonical byte-integrity method: [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: _I--Hm0zXL6ujzg7ugxlDQgPO0PEHmUi0Et4_JkaBcU
