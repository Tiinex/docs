# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-03 11:04:00
  - Trace: [001-1-1-1-1-1-zero-reference-scaffold-migration-wave-evidence.trace.md](001-1-1-1-1-1-zero-reference-scaffold-migration-wave-evidence.trace.md)
  - Origin:
    - [relative](001-1-1-1-1-1-zero-reference-scaffold-migration-wave-evidence.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-03 11:10:59
  - Authors: Anchor
  - Summary: Qualify Core reference-safe relocation through the first non-zero-reference App Scaffold migration dogfood.
  - Status: ready/local

---

# App Reference-safe Scaffold Relocation Evidence

## Supported Claim Or Question

- Supported Claim Or Question: whether Core can relocate a non-trivial subject subtree while deterministically rebasing relative references, cascading Parent integrity updates, resealing only changed artifacts, and preserving unrelated bytes
- Evidence Role: qualifies the generic reference-safe relocation mechanism through the first non-zero-reference Workspace dogfood
- Target Artifact: [Project Workspace Scaffold Migration](001-1-1-1-project-workspace-scaffold-migration-task.trace.md)
- Review Context: App `.topics/refactor` → `.topics/work/refactor` migration after the zero-reference wave

## Provenance

- Known Source: exact App carrier material, accepted Scaffold migration plan, Core relocation implementation/tests, pre-relocation checkpoint bytes, and post-apply Core inspect
- Preservation Basis: changed artifacts were transformed by the same Core projection exercised by the targeted regression; unrelated top-level App artifacts were compared/restored to exact checkpoint bytes after minimal-mutation hardening
- Provenance Limits: no remote commit/push is claimed and this dogfood does not cover cross-Workspace Parent digest cascades

## Evidence Material

- Material: exact App reference-safe relocation result plus Core targeted qualification
- Material Kind: migration-mechanics dogfood and post-apply verification
- Structural Change: `.topics/refactor` → `.topics/work/refactor`
- Moved Tiinex Artifacts: 5
- Relative Reference Rewrites: 3
- Parent Integrity Updates: 4
- Changed/Resealed Artifacts: 5
- Unaffected Top-level Artifacts Preserved Byte-exact: 3
- Old Root Remaining: false
- New Root Present: true
- Core Post-apply Inspect Findings: 0
- Targeted Core Tests: 7 passed, 0 failed across composite/migration and relocation behavior
- Minimal-mutation Correction: an initial dogfood pass unnecessarily resealed three unaffected App artifacts; Core was corrected to preserve exact original bytes unless reference content or a local Parent digest actually changes, and those three App bytes were restored from the pre-relocation Handoff checkpoint before qualification

## Preservation And Fidelity

- Preservation State: current App lineage resolves cleanly after migration; changed bytes are limited to coordinate rebasing, Parent-digest cascade, and resulting self-integrity reseal
- Fidelity Notes: internal child-to-root relative links that remain semantically identical are not rewritten merely because both endpoints moved together
- Known Losses: none; pre-relocation bytes remain recoverable from the preceding Handoff Package

## Interpretation Limits

- Not Yet Used As: proof that high-impact multi-root or cross-Workspace migrations are safe without project-wide reference planning
- Does Not Prove: that immutable historical URLs should be rewritten; relocation intentionally preserves external/versioned recovery locators
- Must Not Be Treated As: permission to bypass post-apply inspect or exact checkpointing for later migration waves

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-1-1-zero-reference-scaffold-migration-wave-evidence.trace.md](001-1-1-1-1-1-zero-reference-scaffold-migration-wave-evidence.trace.md)
  - Value: ivdERq7iw4aA9HAGbmXt2Dr8qxnEL7c8ihJy3u0Blh0

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: z2semQiAQcLf98wmJ8Oraduu4H7xD_srZs3pwuo5ysM