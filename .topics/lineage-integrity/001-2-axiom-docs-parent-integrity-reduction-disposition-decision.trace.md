# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 22:05:23
  - Trace: [001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md](handoffs/001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md)
  - Origin:
    - [relative](handoffs/001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-12 22:28:02
  - Authors: Axiom
  - Why: Anchor and Reduction need one landed semantic disposition separating Docs authority from shared Tooling mechanics.
  - Summary: Axiom classifies one corrected Docs digest defect plus two remaining Tooling resolver defects and bounds Reduction accordingly.
  - Status: ready/local

---

# Integrity Major 001 — Docs Parent Integrity Disposition

## Decision

- State: accepted/local
- Subject: the two exact Docs `lineage.parent.integrityMismatch` findings delegated by Anchor to Axiom
- Decision: classify `.topics/.schemas/tiinex.workspace.v1.schema.md` as a mixed case: its original pinned-parent c14n-v1 value was stale/incorrect and is corrected locally to the exact digest of the declared historical Root, while the remaining post-repair resolver error is a shared Tooling defect because the resolver substitutes current stable-identity Root material for the explicit historical commit pin and then compares against target self-integrity. Classify `.topics/.validators/tiinex-reduction-destructive-lineage-eligibility-v1.validator.md` as Tooling-only: its declared c14n-v1 value exactly matches direct canonicalization of the carried parent bytes, but the resolver incorrectly compares that direct-target value to the parent's c14n-v2 self value. No further Docs weakening or digest substitution is authorized.
- Reduction Disposition: Reduction Major 001 may treat both mismatch meanings as semantically classified and does not need more Axiom semantic work. It must not treat the affected lineage as mechanically clean or destructively eligible on the basis of the current portable `resolve-lineage` result. Any destructive-lineage operation that depends on these resolver findings must remain blocked or unresolved until Loom/shared Tooling requalifies method-aware parent-integrity comparison and exact historical/ref parent resolution, or an equivalently exact independent qualification path is accepted by the responsible owner.

## Basis

- [Integrity Major 001 — Docs Parent Integrity Mismatch Classification Evidence](001-1-axiom-docs-parent-integrity-mismatch-classification-evidence.trace.md) preserves the exact pinned-parent digest comparison, direct c14n-v1 recomputation, Git blob identity, portable implementation defect, individual clean audits, and post-repair resolver diagnostics.
- `sha256-base64url-c14n-v1` verifies direct canonical bytes of the declared target; a non-self entry is not semantically interchangeable with a target's self c14n-v2 entry.
- An explicit commit-pinned Parent identity must not be reduced to current same-path/stable-identity bytes when exact historical material is required for integrity replay.

## Consequences

- The local Docs Workspace carries exactly one canonical Docs correction: `.topics/.schemas/tiinex.workspace.v1.schema.md` parent integrity value changes from `MB29XuzpMrwUc396COqKR2nVPX4E9gmUv0CS1zLYSKY` to `EZxpiMk3z_FLLiUY_fZ3TV1ui4zgq34d-gu2TWHVI3g` for the declared Root at commit `cca53fc8c52fd27b92b9429420efd613913a88bd`.
- The Reduction destructive-lineage validator requires no Docs semantic change for this finding.
- Anchor should route the shared resolver reproduction to Loom and preserve the current two errors as implementation evidence rather than requesting a Docs workaround.
- No remote publication, release, push, destructive apply, or broad audit cleanup is authorized by this decision.

## Review Conditions

- The Tooling blocker may be reconsidered after a resolver implementation can distinguish direct-target c14n-v1 comparison from target-self comparison and can preserve repository/ref identity for explicitly pinned Parent targets, followed by a rerun showing the two in-scope false positives resolved without weakening Docs semantics.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md](handoffs/001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md)
  - Value: oHwE5BCpfvn73Xu4x5zUDIe3T9gUhScJD-ENOdBX3zI

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: biDVVF0bh8q0ffFyAL3HPetE2W9YaVWzbEl9BAWtDxo