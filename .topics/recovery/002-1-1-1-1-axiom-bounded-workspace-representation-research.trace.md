# Continuity Context

- Envelope Schema: [tiinex.root.v1](../.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Trace: [Bounded Artifact Scope Representation — Axiom Handoff](002-1-1-1-anchor-to-axiom-bounded-workspace-representation-handoff.trace.md)
  - Origin:
    - [relative](002-1-1-1-anchor-to-axiom-bounded-workspace-representation-handoff.trace.md)
- Current
  - Current Schema: [tiinex.discovery.research.v1](../.schemas/discovery/research/tiinex.discovery.research.v1.schema.md)
  - Created At: 2026-08-31 00:52:44
  - Authors: Axiom
  - Why: Resolve the canonical representation blocker for intentional intra-Workspace scoped export without weakening complete Workspace semantics or moving transport authority into source identity.
  - Summary: Axiom decision-support research establishing an explicit bounded Workspace Representation mode and its Loom-facing activation and Parent-closure boundaries.
  - Status: completed/local

---

# Bounded Workspace Representation — Axiom Research Result

## Research Question

- Question: can existing Semantic Package, External Payload, and generic Relation semantics safely represent an intentional bounded subset of one source Workspace for Handoff/export, or is an explicit bounded Workspace Representation contract required to preserve Workspace identity, exact scope, provider activation, Parent recovery, and fail-closed behavior?

## Source Field

- In Scope: the carried Docs Root recovery contract, `tiinex.workspace.v1`, `tiinex.semantic.package.v1`, `tiinex.external.payload.v1`, `tiinex.relation.v1`, the incoming Anchor-to-Axiom Handoff, the prior Axiom Parent recovery review, the carried Site `tiinex.workspace.representation.v1` companion and Loom scoped-export impact discovery, and exact carried Business/Docs/Site source continuity.
- Out Of Scope: implementing Tooling or Viewer code, changing carrier filename/dimension policy, broad export UX, remote publication, repository mutation, hidden network recovery, and substituting a fresh remote checkout for the carried source chain.
- Source Or Origin: exact carried Workspace bytes from the qualified `003` Handoff carrier. The Site representation schema copy is implementation/reference material; this turn places the governing semantic answer in Docs.

## Method

- Method: compare the semantic owners of package discovery, payload bytes, generic relations, Workspace identity, complete Workspace representation activation, and Root Parent recovery; test complete, intentionally bounded, legacy partial/unknown, detached Parent closure, multiple bounded scopes for one Workspace, and omitted-parent cases against Loom's identified manufacture/recipient seams.
- Boundary: prefer the smallest extension that leaves existing complete Workspace/provider behavior unchanged, gives bounded scope one explicit positive meaning, keeps source Workspace identity separate from payload/transport, and fails closed when endpoint, scope, correlation, integrity, selection, or Parent recovery cannot qualify.

## Findings

- Existing Semantic Package semantics are insufficient as the owning bounded-Workspace contract. `tiinex.semantic.package.v1` owns a portable schema/Transition discovery and transport boundary; package containment is explicitly not semantic ownership, and the contract does not bind arbitrary Workspace-relative source entries to one Workspace provider surface.
- Existing External Payload semantics are necessary but insufficient. `tiinex.external.payload.v1` correctly owns payload identity, location, media/format metadata, exact payload-byte integrity, access, and recovery context, but it does not own Workspace identity, Workspace-relative entry correlation, bounded coverage meaning, or provider activation.
- Generic Relation semantics are also insufficient by themselves. `tiinex.relation.v1` can state a non-Parent relation, but it intentionally does not define deterministic Workspace-tree correlation, archive decoder/mapping qualification, coverage semantics, selection authority, or ready-provider failure conditions.
- The specialized Workspace Representation relation is therefore the correct semantic owner. The canonical Docs answer is an extension of `tiinex.workspace.representation.v1`, not a weakening of `tiinex.workspace.v1`, not a new Parent relation, and not a Semantic Package reinterpretation.
- Existing complete behavior remains unchanged. `Representation Kind: exact-workspace-byte-tree-archive`, `Coverage: complete`, `Activation Rule: verified-complete-only`, `Coverage Requirement: complete`, and `Selection Rule: exactly-one-binding-per-workspace` retain their current meaning.
- Intentional scope now has a distinct positive state: `Coverage: bounded` with `Representation Kind: exact-bounded-workspace-byte-tree-archive`. Legacy `partial` and `unknown` remain non-ready states and must not be used as shortcuts for scoped export.
- Bounded scope is exact and payload-derived only after qualification. `Scope Basis: exact-representation-entry-set` plus `Included Entry Authority: qualified-decoded-entry-set` means the semantic scope is exactly the normalized decoded representation-entry set after payload integrity, decoder, mapping, and collision checks qualify.
- Bounded omission has deliberately weak meaning. `Omitted Entry Meaning: outside-representation-not-absent-from-workspace` forbids interpreting an omitted path as absent from the source Workspace or interpreting the source Workspace itself as partial.
- The bounded relation keeps a direct Workspace identity anchor. A bounded representation must include the bound Workspace artifact at `Workspace Artifact Inner Path`; that entry establishes direct correlation to the semantic Workspace endpoint but does not claim complete Workspace coverage.
- Bounded provider activation is separate from complete Workspace activation. `Activation Rule: verified-bounded-only`, `Coverage Requirement: bounded`, and `Selection Rule: explicit-binding-per-bounded-scope` authorize only a bounded Workspace-representation provider. A consumer must preserve `bounded` in materialization/cache/API state and must not alias it to `complete` merely because every requested path resolves.
- Multiple different bounded representations may exist for one Workspace. Because each may carry a different exact entry set, the consumer must select the exact Workspace Representation artifact through explicit Handoff/package/reference authority; Workspace identity, filename, adjacency, archive basename, or path similarity cannot choose among them.
- Detached recovery material is not Workspace representation membership. `Recovery Closure Boundary: separate-qualified-closure` keeps exact Parent bytes, cache entries, or package-local dependencies carried outside the representation payload as transport recovery only. They become representation members only if they are also entries of the bounded representation payload.
- Root Parent Origin remains the source-side authority. Bounded transport may preserve or augment recovery for an already-truthful Parent edge, but it cannot repair false/missing source `Origin`, invent semantic Parent identity, or promote a package copy to source provenance.
- Omitted Parent closure remains fail-closed. For every carried artifact whose Parent representation is outside bounded scope, Tooling must qualify an exact recovery mapping/representation, use an already-qualified version-stable route together with exact Parent-byte qualification when required, expand scope, or fail closed. URI-only success is not exact Parent qualification.
- The Workspace artifact's own continuity is not exempt. If its Parent falls outside the bounded payload, recipient qualification must use the same separately qualified Parent/recovery closure model or expand scope/fail closed; an implementation rule that only searches inside the bounded archive is not semantic authority.
- Canonical Docs contract: `.topics/.schemas/relation/workspace/representation/tiinex.workspace.representation.v1.schema.md`, self seal `ZnL0uFsniOfLKBLp7X3NUDDS8RobgJ1tx_Op9oiYs6c` under `sha256-base64url-c14n-v2`.
- Runtime validation boundary: the carried portable runtime still embeds the older complete-only Workspace Representation validator and also audits a schema note as though it were an instance, producing the same required-instance-heading error on the pre-existing Site schema. This is implementation lag/evaluation mismatch, not a reason to weaken the Docs contract; Loom must update the schema module and bounded-instance validator before claiming implementation conformance.

## Synthesis

- Synthesis: a bounded Workspace Representation contract is required. The smallest safe answer is to extend the existing relation-owned `tiinex.workspace.representation.v1` contract with a distinct `bounded` coverage mode, conditional `## Representation Scope`, a distinct bounded representation kind, bounded-only activation, and explicit-binding selection. This leaves complete Workspace semantics intact while giving scoped export one exact machine-readable representation surface.
- Supporting Roles: External Payload continues to own exact archive bytes and integrity; generic Relation remains the parent semantic family; Semantic Package may independently package schema/Transition neighborhoods but does not authorize bounded Workspace activation; Root continues to own Parent/Origin recovery truth.
- Loom Activation Consequence: update the canonical schema mirror/validator and recipient-v2 provider model so a qualified bounded binding yields a bounded provider/materialization state, never `complete`. Preserve exact entry-set scope through cache and recipient projections rather than erasing coverage.
- Loom Manufacture Consequence: accept an explicit carrier/source inclusion set, manufacture the bounded representation payload from exactly the selected Workspace-relative source entries plus the required bound Workspace artifact, and project Parent-boundary dependencies separately. Do not treat detached closure as representation entries.
- Loom Parent Consequence: reuse exact Parent-target c14n-v2 qualification and detached dependency closure. Update any Workspace-target resolver that assumes the Workspace artifact Parent must be inside the same archive; otherwise expand scope or fail closed.
- Loom Export Consequence: do not promote non-`all` export scopes until the bounded representation artifact, exact External Payload, entry-set correlation, explicit binding selection, and all Parent/recovery closure are qualified. Export UI/read models consume that qualified result; they do not define scope semantics.
- No New Route Identity: bounded representation does not require recipient-specific Handoff route identity, carrier filenames, or duplicate carriers. Route/Pointer/package location remains transport addressing only.
- Governing Docs: the extended Workspace Representation schema plus corrected Root and this research result.
- Remaining Work: Anchor should route these exact consequences to Loom; Loom owns implementation/tests; Sigma may later evaluate product behavior after implementation exists.

## Interpretation Limits

- Limits: this research and local schema update do not remotely publish Docs, implement Tooling, prove bounded export works, make every Handoff scoped, redefine a Workspace as a subset, make detached Parent bytes representation members, create source provenance from package placement, or authorize hidden network recovery. The first safe implementation remains fail-closed wherever exact bounded binding or Parent closure cannot be requalified.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Bounded Artifact Scope Representation — Axiom Handoff](002-1-1-1-anchor-to-axiom-bounded-workspace-representation-handoff.trace.md)
  - Value: 6yZO7W9aWSuYxurZrSmAbnlJtPZwK1TCRL8mcUl3IN8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: GMQUtEm47shixWJRfSg4JS6LuDUG5LO3N5yLs9Df3gk
