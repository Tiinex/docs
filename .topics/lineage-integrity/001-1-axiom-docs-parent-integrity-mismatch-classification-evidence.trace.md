# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 22:05:23
  - Trace: [001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md](handoffs/001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md)
  - Origin:
    - [relative](handoffs/001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](../.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-09-12 22:26:24
  - Authors: Axiom
  - Why: Reduction Major 001 needs durable per-mismatch evidence before affected lineage can be semantically classified.
  - Summary: Exact evidence classifying one stale pinned-parent digest and two remaining Tooling-owned resolver false positives after the minimal Docs repair.
  - Status: ready/local

---

# Integrity Major 001 — Docs Parent Integrity Mismatch Classification Evidence

## Supported Claim Or Question

- Supported Claim Or Question: whether each of the two reported `lineage.parent.integrityMismatch` findings is a canonical Docs defect, a historical/pinned-parent resolution defect, or a shared Tooling integrity-comparison defect, and whether the bounded Docs repair is sufficient for Reduction disposition
- Evidence Role: supports the per-mismatch classification, the one-line Docs correction, the exact Loom-routable reproduction, and the post-repair Reduction disposition

## Provenance

- Known Source: the exact carried Docs Workspace selected by the Anchor-to-Axiom Handoff; canonical `sha256-base64url-c14n-v1` semantics in that Workspace; the exact historical Root artifact at GitHub commit `cca53fc8c52fd27b92b9429420efd613913a88bd`; the exact Validation Method artifact at GitHub commit `13991b5a13ab911ed9abd63646f92c8a9362ea01`; and portable `resolve-lineage`/`audit` runs over the continued local Workspace
- Preservation Basis: exact digest values, Git blob identity where locally replayable, the minimal corrected source value, and post-repair resolver diagnostics are preserved in this evidence artifact while the corrected source bytes remain in the local Docs Workspace carried by the return package
- Provenance Limits: no remote repository write, publication, release, push, destructive lineage apply, or broad Docs cleanup was performed; the historical Root was read at its explicit commit pin and was not imported as current Workspace material; full runtime JSON receipts remain runtime-local rather than being promoted wholesale into canonical Docs source

## Evidence Material

- Material Kind: exact digest, source-identity, and resolver-diagnostic record
- Material: `sha256-base64url-c14n-v1` canonicalizes the declared target directly, excluding `# Continuity Integrity` and everything after it; non-self entries therefore compare the current entry `Value` to the direct canonical digest of the resolved target, not to an arbitrary self-integrity entry on that target. Mismatch 1: `.topics/.schemas/tiinex.workspace.v1.schema.md` names Root at commit `cca53fc8c52fd27b92b9429420efd613913a88bd` and originally recorded `MB29XuzpMrwUc396COqKR2nVPX4E9gmUv0CS1zLYSKY`; the exact pinned Root at that commit carries self c14n-v1 `EZxpiMk3z_FLLiUY_fZ3TV1ui4zgq34d-gu2TWHVI3g`, which is the same direct c14n-v1 digest for that target, so the child declaration was stale/incorrect. The local Docs correction changes only that value to `EZxpiMk3z_FLLiUY_fZ3TV1ui4zgq34d-gu2TWHVI3g`. The carried current Root instead has self c14n-v2 `QXbg7uxlhO1ou4PukRaub3fSJ_Ef32mSubsI2ib1LH0`; after the correction, portable `resolve-lineage` still resolves the pinned historical target by current path and reports expected `EZxpiMk3z_FLLiUY_fZ3TV1ui4zgq34d-gu2TWHVI3g` versus actual current-root self value `QXbg7uxlhO1ou4PukRaub3fSJ_Ef32mSubsI2ib1LH0`, proving historical/ref context is being collapsed into current stable-identity material. Mismatch 2: `.topics/.validators/tiinex-reduction-destructive-lineage-eligibility-v1.validator.md` records parent c14n-v1 `zy2VZGF-AMEVjvaFuggR3INb9RHm9veCZDXd1XQKtZY`; direct c14n-v1 recomputation over the carried `.topics/.schemas/validation/method/tiinex.validation.method.v1.schema.md` is exactly `zy2VZGF-AMEVjvaFuggR3INb9RHm9veCZDXd1XQKtZY`, and the carried parent Git blob SHA is `12ad3ecedb3d027417377e069a50b2188bbf9052`, exactly matching that file at commit `13991b5a13ab911ed9abd63646f92c8a9362ea01`. Portable `resolve-lineage` nevertheless compares the child c14n-v1 value to the parent's self c14n-v2 `C0az3msKICiqcp2tNF5uWe-qN7Mw7LZdbCcZfSDsx1k` and reports a mismatch. The relevant shared implementation path is `runtime/src/lineage/lineage.integrity.js`: `withParentIntegrityStatus` compares all expected parent-integrity values against `selfIntegrityValuesForNode(match)` without method-aware direct-target recomputation. Post-repair individual portable audits of both affected child artifacts are clean with zero errors and zero warnings. The full post-repair Workspace `resolve-lineage` still reports exactly two errors, both `lineage.parent.integrityMismatch`, with the diagnostics above; this remaining failure is Tooling-owned evidence rather than a reason to weaken Docs semantics.

## Preservation And Fidelity

- Preservation State: exact corrected Docs source remains in the continued local Workspace; exact classification values and post-repair diagnostic pairs are embedded here for return-carrier replay and review
- Fidelity Notes: all digest strings, commit ids, Git blob SHA, affected paths, resolver methods, and expected/actual diagnostic values are preserved exactly; the c14n-v1 value for the Validation Method parent was recomputed directly from the carried bytes, and its Git blob identity was independently matched to the pinned repository version
- Known Losses: full command stdout and complete unrelated lineage warning inventory are not embedded; only the two in-scope error diagnostics, relevant integrity semantics, bounded audit result, and source identity needed for this classification are preserved

## Interpretation Limits

- Does Not Prove: broad Docs repository health, remote publication, remote acceptance, shared Tooling repair, release readiness, or destructive-lineage eligibility
- Must Not Be Treated As: permission to substitute current stable-identity bytes for an explicit historical pin, permission to compare c14n-v1 direct-target values to unrelated target self entries, a clean `resolve-lineage` result, or authorization for destructive Reduction
- Not Yet Used As: remote publication evidence, Loom implementation acceptance, a mechanically clean lineage receipt, or destructive Reduction authorization

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md](handoffs/001-anchor-to-axiom-integrity-major-001-docs-parent-integrity-mismat.trace.md)
  - Value: oHwE5BCpfvn73Xu4x5zUDIe3T9gUhScJD-ENOdBX3zI

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 5rtXrGBf_CUEPTkSe-tksRXmXLCfOzXx3AGc3eX3Kjs