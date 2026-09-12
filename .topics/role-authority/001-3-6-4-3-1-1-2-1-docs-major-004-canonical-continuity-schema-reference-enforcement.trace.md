# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 00:05:00
  - Trace: [001-3-6-4-3-1-1-2-axiom-to-anchor-docs-major-003-anchor-successor-grounding-evolut.trace.md](001-3-6-4-3-1-1-2-axiom-to-anchor-docs-major-003-anchor-successor-grounding-evolut.trace.md)
  - Origin:
    - [relative](001-3-6-4-3-1-1-2-axiom-to-anchor-docs-major-003-anchor-successor-grounding-evolut.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-12 00:50:30
  - Authors: Anchor
  - Why: New Core/Site Major 005 Evidence still uses bare Current Schema ids while surrounding continuity uses immutable canonical schema locators, despite Core Major 004.
  - Summary: Adjudicate the remaining mixed continuity schema-reference blind spot on newly authored ordinary artifacts.
  - Status: ready/local

---

# Docs Major 004 — Canonical Continuity Schema Reference Enforcement

## Objective

Resolve the remaining semantic/qualification blind spot where newly created ordinary Tiinex artifacts can still carry mixed continuity schema references, for example immutable Envelope/Parent references alongside a bare `Current Schema: tiinex.evidence.v1`, even after Core Major 004 repaired canonical schema-reference generation for common authoring.

## Done Criteria

- State the canonical requirement for `Envelope Schema`, `Parent Schema`, and `Current Schema` references on ordinary persisted artifacts when an immutable canonical schema target is available.
- Distinguish authoring requirements from ingestion/preservation of historical artifacts whose schema locator is unavailable, stale or mixed.
- Determine whether a newly authored mixed-reference artifact is invalid, degraded, warning-only, or otherwise qualified, and which operation must fail closed or surface the finding.
- Classify ownership among Docs semantics, Core authoring/audit/manufacture enforcement, and host UI diagnostics without making VS Code or Site invent their own policy.
- Preserve historical mixed-reference bytes rather than mass rewriting them; specify prospective correction/continuation behavior where historical material materially needs repair.
- Use the newly returned Core/Site Major 005 Evidence artifacts as concrete reproduction examples, because both still contain bare `Current Schema: tiinex.evidence.v1` while surrounding continuity uses immutable schema locators.
- Return exact canonical Docs delta if the existing contract is underspecified, plus a bounded Core/host acceptance recommendation.

## Scope

Canonical schema-reference continuity semantics and qualification boundary only. No Core implementation, no host-specific fix, no historical mass rewrite.

## Dependencies

- Current canonical Docs schema-reference/lineage contracts.
- Accepted Core Major 004 canonical schema-reference authoring repair.
- New Core/Site Major 005 Evidence artifacts that reproduce the residual mixed-reference condition.

## Acceptance Boundary

Human readability does not relax authority. A short schema id may remain a useful label, but it must not silently substitute for an available immutable canonical target when the continuity contract requires exact schema authority.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-3-6-4-3-1-1-2-axiom-to-anchor-docs-major-003-anchor-successor-grounding-evolut.trace.md](001-3-6-4-3-1-1-2-axiom-to-anchor-docs-major-003-anchor-successor-grounding-evolut.trace.md)
  - Value: 2Pcx3gMlmKuiy2CdbBA98jw2UdKSVBDcZ5RtMDx7FE8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: FJMSmB-IIC8EBS8wrknm9aFZtlqcHn9-tI88gtrByXE