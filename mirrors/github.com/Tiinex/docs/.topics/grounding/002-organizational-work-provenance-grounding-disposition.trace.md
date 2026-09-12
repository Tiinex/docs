# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 09:59:47
  - Trace: [001-1-anchor-to-axiom-docs-major-006-organizational-work-provenance-grounding-semantics-handoff.trace.md](handoffs/001-1-anchor-to-axiom-docs-major-006-organizational-work-provenance-grounding-semantics-handoff.trace.md)
  - Origin:
    - [relative](handoffs/001-1-anchor-to-axiom-docs-major-006-organizational-work-provenance-grounding-semantics-handoff.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-12 10:35:14
  - Authors: Axiom
  - Why: Classify repeated fresh-successor grounding friction without inventing relation, membership, or authority semantics.
  - Summary: Organizational work provenance remains optional explicit relation context; unresolved is truthful when no qualified edge exists.
  - Status: ready/local

---

# Organizational Work Provenance Grounding Disposition

The repeated `organizational-work-provenance-unresolved` result is a truthful optional-context state when the selected current work lineage has no qualified declared work-provenance edge. It is not, by itself, a semantic defect and must not be repaired by inference.

## Decision

- State: accepted
- Subject: organizational work provenance in cold-start grounding
- Decision: existing Tiinex semantics are sufficient. Organizational work provenance is established only by an explicit qualified typed relation from the current work source to an upstream organizational work target whose own qualified context identifies the relevant Project and/or Organization. `tiinex.relation.v1` is sufficient for this edge; no new schema is warranted.
- Unresolved Meaning: when no such qualified edge is present on the selected current work lineage, grounding should report organizational work provenance as unresolved/undeclared and continue without inventing membership, ownership, delegation, responsibility, or authority.
- Blocking Boundary: unresolved organizational work provenance is informational unless a controlling Task, Handoff, acceptance criterion, or other qualified authority explicitly requires that context for the next action.

## Basis

- `tiinex.relation.v1` exists for typed non-Parent relationships and explicitly preserves exact relation type, direction, scope, target, provenance, and interpretation limits without broadening `Parent`.
- `tiinex.project.v1`, `tiinex.party.organization.v1`, `tiinex.party.role.v1`, `tiinex.task.v1`, and `tiinex.workspace.v1` do not authorize repository, Workspace, Role, Parent, package, filename, or conversation adjacency to become work membership or organizational provenance.
- The qualified Site relation `site::.topics/tooling/020-3-1-anchor-cold-start-grounding-work-provenance-relation.trace.md` demonstrates the intended shape: source work `advances` a qualified controlling Business work artifact at `work-level provenance`, while reverse discovery is only a projection of that same edge.
- The two accepted fresh-Anchor probes correctly left the slot unresolved instead of manufacturing an edge. No material decision depended on the missing optional context.
- The current portable grounding projection already keeps the condition fail-visible and non-blocking, so the observed Core behavior is semantically compatible with this disposition.

## Consequences

- Docs: no canonical schema mutation is required for Major 006.
- Business / owning work repository: author a concrete work-provenance Relation only when there is a truthful organizational claim worth preserving. The relation belongs with the source work's natural repository or other explicit owner; Business is not automatically the instance owner merely because the target is organizational.
- Relation shape: use a specific predicate such as `advances` only when it is true for that concrete edge; preserve source, target, direction, and `work-level provenance` scope. Do not universalize one predicate or require a standalone Relation artifact when another active contract already owns the same explicit edge semantics.
- Target context: grounding may follow the qualified relation target to already-declared Project/Organization context, but that traversal does not create project membership, organization membership, repository ownership, delegation, Role holding, or responsibility transfer.
- Core / Loom: no implementation correction is required from the observed Major 006 evidence. Core should keep unresolved provenance informational and fail-visible. A Tooling change is warranted only if future behavior blocks ordinary act-ready continuation without explicit authority requiring the context, fabricates an edge/context, or loses a qualified declared edge that is present.
- Anchor: if fresh-successor acceptance specifically requires organizational provenance for a chosen current frontier, add or route one truthful explicit relation instance for that frontier before replay; otherwise accept the unresolved slot as accurate.

## Review Conditions

- Reopen canonical semantics only if an evidenced use case cannot represent needed organizational work provenance with the existing Relation plus explicit Project/Organization target context.
- Reopen Tooling behavior only if a qualified declared work-provenance edge is not projected, an undeclared edge is inferred, or optional unresolved context is incorrectly promoted to a blocker.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-anchor-to-axiom-docs-major-006-organizational-work-provenance-grounding-semantics-handoff.trace.md](handoffs/001-1-anchor-to-axiom-docs-major-006-organizational-work-provenance-grounding-semantics-handoff.trace.md)
  - Value: e890A8504dLprQk79XFfy8d2EnwtvlN9ZTdMH1Faq2w

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: efm5kfHTwvIKiVb1mSTrZZit6wpPeo369W256MNztB0