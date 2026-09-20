# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 13:17:50
  - Trace: [001-1-1-1-1-1-axiom-to-anchor-docs-major-007-minimal-carrier-material-recipient-semantics-return.trace.md](../handoff-package/handoffs/001-1-1-1-1-1-axiom-to-anchor-docs-major-007-minimal-carrier-material-recipient-semantics-return.trace.md)
  - Origin:
    - [relative](../handoff-package/handoffs/001-1-1-1-1-1-axiom-to-anchor-docs-major-007-minimal-carrier-material-recipient-semantics-return.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-12 22:05:04
  - Authors: Anchor
  - Why: Reduction cannot safely classify affected Docs lineage while two exact parent-integrity mismatches remain unexplained.
  - Summary: Classify two exact Docs parent-integrity mismatches without weakening pinned-parent or stable-identity semantics.
  - Status: ready/local

---

# Integrity Major 001 — Docs Parent Integrity Mismatch Classification

## Objective

Classify and resolve the two exact Docs lineage parent-integrity mismatches currently reported by portable `resolve-lineage`, without treating stable-identity matches as equivalent to exact pinned parent bytes and without weakening integrity semantics merely to make the audit green.

## Current Evidence

Portable lineage resolution over the current Docs Workspace reports exactly two `lineage.parent.integrityMismatch` errors:

- `.topics/.schemas/tiinex.workspace.v1.schema.md` declares a parent target pinned to `tiinex.root.v1` at GitHub ref `cca53fc8c52fd27b92b9429420efd613913a88bd`, while the loaded stable-identity parent bytes do not match the child's declared integrity value.
- `.topics/.validators/tiinex-reduction-destructive-lineage-eligibility-v1.validator.md` declares parent `../.schemas/validation/method/tiinex.validation.method.v1.schema.md`, while the loaded stable-identity parent bytes do not match the child's declared integrity value.

The finding proves a mismatch in the loaded local lineage projection; it does not by itself prove which side is stale, whether the child intentionally pins historical bytes, or whether the local resolver requires exact historical material.

## Done Criteria

- Recover the exact declared Parent identity/integrity basis for each affected child and compare it to the currently loaded parent material.
- Determine separately for each mismatch whether it is: a legitimate historical/pinned-parent relationship requiring exact historical resolution; a stale/incorrect child integrity declaration; a changed parent whose stable identity must not substitute for pinned bytes; or another explicit contract defect.
- Preserve the distinction between stable identity, exact artifact bytes, repository/ref context and current local material.
- If a Docs semantic artifact is actually wrong and the repair is within Axiom authority, make the minimum canonical correction and re-run lineage/audit evidence.
- If the mismatch is caused by shared resolver/Tooling behavior rather than Docs semantics, do not patch around it in Docs; return a bounded Loom-routable finding with exact reproduction and expected semantics.
- Produce durable Decision/Validation evidence sufficient for Reduction Major 001 to know whether affected Docs lineage may be classified/reduced safely.
- Do not broaden into unrelated Docs audit warnings or historical cleanup.

## Scope

The two exact Docs parent-integrity mismatch findings and the minimum canonical semantic correction/evidence needed to classify them.

## Dependencies

- Current Docs Workspace and exact affected child/parent artifacts.
- Canonical Root/Parent/integrity semantics and repository/ref interpretation.
- Business Role context for Axiom/Anchor boundaries.
- Reduction Major 001 consumes the disposition but does not grant semantic authority.

## Exclusions

- No broad schema refactor, generic audit cleanup, release, publication, push or remote mutation.
- No weakening of integrity comparison or substitution of current stable-identity bytes for an explicitly pinned historical Parent.
- No assumption that a mismatch is a defect in Docs merely because the portable resolver reports an error.

## Return Boundary

Return one qualified Axiom-to-Anchor carrier with per-mismatch classification, exact evidence, any justified minimal Docs correction, re-run lineage result, and a clear statement of whether Reduction may treat the affected material as semantically classified or must wait for Loom/other owner work.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-1-1-axiom-to-anchor-docs-major-007-minimal-carrier-material-recipient-semantics-return.trace.md](../handoff-package/handoffs/001-1-1-1-1-1-axiom-to-anchor-docs-major-007-minimal-carrier-material-recipient-semantics-return.trace.md)
  - Value: lk0jgEJvhSFFh7RzhqjxnUobVVFftuYHniKeAG5FN8E

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: pnLk9yihcrnSM4E4cCBrCRZX9UdYCas8hHx-jddjwm0