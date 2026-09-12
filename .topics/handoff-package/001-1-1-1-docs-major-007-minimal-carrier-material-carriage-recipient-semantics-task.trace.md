# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 10:36:51
  - Trace: [001-1-1-axiom-to-anchor-docs-major-006-organizational-work-provenance-se.trace.md](../grounding/handoffs/001-1-1-axiom-to-anchor-docs-major-006-organizational-work-provenance-se.trace.md)
  - Origin:
    - [relative](../grounding/handoffs/001-1-1-axiom-to-anchor-docs-major-006-organizational-work-provenance-se.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-12 12:51:42
  - Authors: Anchor
  - Why: Transport design exposed that current package semantics require one or more complete Workspaces even when the real job may only be qualified Tiinex bootstrap; this must be resolved canonically before host implementation.
  - Summary: Define truthful bootstrap-only, qualified material/Role carriage and recipient/transport boundaries without fake Workspaces or opaque sidecar authority.
  - Status: ready/local

---

# Docs Major 007 — Minimal Carrier, Material Carriage, And Recipient Semantics

## Objective

Define the smallest truthful Tiinex package/carrier semantics that allow a recipient to bootstrap Tiinex without requiring fake project material, while preserving explicit material ownership, Role/recipient separation, bounded Workspace Representation, and human-readable carrier structure.

## Problem Statement

Current `tiinex.handoff.package.v1` requires one or more Workspace Snapshot Bindings. Operator design now exposes a useful distinction that the contract does not model cleanly:

- a package may exist only to provide the Tiinex Start convention and exact portable Tooling bootstrap;
- a package may carry qualified material such as a complete or bounded Workspace Representation without delegating work;
- a package may carry Role artifacts as material/context without making those Roles recipients or session holders;
- a package may carry one or more qualified Handoff routes that do create explicit recipient-facing delivery actions;
- Transport UX should derive recipients from explicit Handoff/transport semantics, never from the mere presence of Role artifacts.

The current requirement for at least one Workspace risks forcing fake Workspace material into a carrier whose only real purpose is qualified bootstrap.

## Done Criteria

- Decide whether a valid Tiinex carrier may contain zero Workspace/Workspace-Representation bindings and zero Handoff routes while still providing a qualified Start + portable bootstrap convention.
- If zero-material carriage is valid, define exactly what it proves and what it does not prove. At minimum, bootstrap capability must not imply Role identity, session holder binding, work authority, project context, Handoff acceptance, or grounded-to-act readiness.
- Decide whether this belongs inside the existing `tiinex.handoff.package.v1` contract/Package Role domain or requires a new package/carrier semantic role. Prefer extension of established human-readable artifact contracts over new special-purpose artifact types unless a real semantic distinction requires one.
- Define material carriage independently of whole-Workspace carriage. A Role or other artifact may only be carried through a qualified owning material representation, normally complete or bounded Workspace Representation; package placement or copied bytes must not become ownership authority.
- Define Role carriage semantics explicitly: carried Role presence does not imply recipient, participant, holder, consent, delegation, organization membership or work ownership.
- Define the recipient/delivery boundary: concrete `To Sigma` / `To Anchor` / `To Kodax` style delivery projection may only come from qualified explicit Handoff/transport semantics, not from carried Role context.
- Define a generic package-level human transport instruction that can exist even without a Handoff route, and distinguish it from route-specific Handoff transport instructions. The instruction remains a projection of authoritative carrier artifacts rather than a new semantic artifact.
- Preserve current package cleanliness: recipient-facing package top level remains established human-readable Tiinex Markdown artifacts plus declared ZIP payloads. Do not introduce JSON sidecar artifacts, opaque host manifests or application-local state as semantic authority merely to support Transport UX.
- Clarify that mechanical/internal verification data may remain implementation detail inside an existing declared payload when already allowed, but must not replace human-readable carrier artifacts or become a new required top-level source of truth.
- Return exact owner split for Docs contract changes, Core manufacture/orientation/transport projection, and later VS Code Transport presentation.

## Dependencies

- Current `tiinex.handoff.package.v1` contract and its complete-Workspace binding rule.
- Current `tiinex.workspace.representation.v1` complete/bounded material semantics.
- Current Role, Pointer and Handoff endpoint/holder boundaries.
- Core Major 008 bounded Handoff-carrier recipient-closure work as read-only mechanical feasibility context.
- Current Extension VS Code Transport design as read-only consumer context.

## Scope

Canonical package/carrier, material, Role and recipient semantics only.

## Reference Design Constraints

- `Transport` is an operator delivery queue, not new Tiinex semantic authority.
- A package without Handoff routes should need no fake recipient child nodes in a host UI.
- `Copy Package`, generic `Copy Transport Text`, and `Close` can be host actions for any manufactured carrier.
- Route-specific recipient rows should exist only when the carrier itself qualifies explicit Handoff routes.
- Discovery/Incoming forwarding to Transport must not mutate/repack carrier bytes merely to make them deliverable.

## Exclusions

- No Core implementation mutation.
- No VS Code implementation mutation.
- No invention of JSON artifacts or hidden manifests as semantic truth.
- No fake Workspace, fake Role relation or fake Handoff solely to satisfy current package shape.
- No claim that zero-material bootstrap carriage is grounded work authority.

## Acceptance Boundary

Success means Anchor has one canonical, human-first semantic disposition that Core can implement generically and VS Code can present mechanically without host-specific Handoff/package meaning.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-axiom-to-anchor-docs-major-006-organizational-work-provenance-se.trace.md](../grounding/handoffs/001-1-1-axiom-to-anchor-docs-major-006-organizational-work-provenance-se.trace.md)
  - Value: N3SvMm9qBUBqnJH2ep7YaKA8EGcPDGWpzfXzTENMfAE

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: ToUOUk-MLWlY0IdbzN7A86T086Vi-3-IzPfQM8u544M