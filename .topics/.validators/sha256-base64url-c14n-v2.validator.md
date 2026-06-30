# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3466e50d739a9ba65319297cef79c6b09844b1d7/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.validation.method.v1](https://github.com/Tiinex/docs/blob/3466e50d739a9ba65319297cef79c6b09844b1d7/.topics/.schemas/tiinex.validation.method.v1.schema.md)
  - Created At: 2026-06-27 00:00:00
  - Trace: [sha256-base64url-c14n-v1.validator.md](sha256-base64url-c14n-v1.validator.md)
  - Origin:
    - [relative](sha256-base64url-c14n-v1.validator.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/3466e50d739a9ba65319297cef79c6b09844b1d7/.topics/.validators/sha256-base64url-c14n-v1.validator.md)
- Current
  - Current Schema: [tiinex.validation.method.v1](https://github.com/Tiinex/docs/blob/3466e50d739a9ba65319297cef79c6b09844b1d7/.topics/.schemas/tiinex.validation.method.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Canonical validation method definition for SHA-256 base64url canonical-byte integrity checks that preserve footer continuity.

---

# SHA-256 Base64url Canonical Byte Integrity Method V2

- Status: maintained canonical validator definition
- Canonical Identifier: sha256-base64url-c14n-v2

## Method Identity

- Name: SHA-256 base64url canonical byte integrity with footer-continuity preservation
- Version: 2
- Method Family: digest
- Canonical Identifier: sha256-base64url-c14n-v2
- Supersedes: sha256-base64url-c14n-v1 for new artifacts that need footer validator, signature, attestation, or review-entry continuity.

## Verification Scope

- Verifies: same canonical bytes for `Towards: self` after neutralizing only the active checksum value being computed; for non-self targets, verifies that the current entry matches the resolved target artifact's primary v2 self digest unless an explicit later method defines direct-target recomputation.
- Does Not Verify: truth, authorship, identity, intent, consent, semantic correctness, schema validity, freshness, permission, legal compliance, or historical provenance.
- Target Types: Tiinex markdown artifact targets identified by `self` or a markdown-linked target.
- Required Inputs: declared target text or resolved target artifact, target resolution context, canonicalization rules, SHA-256 digest implementation, active integrity entry selection, primary target self-entry selection when `Towards` is non-self, and base64url encoder.
- Output Signal: unpadded base64url encoding of the SHA-256 digest of the canonical self target bytes, or the target artifact's validated primary v2 self digest when the current entry points at a non-self target.
- Identity Use: a `Towards: self` entry may be used as a content-derived snapshot fingerprint for search, deduplication, discovery, issue/comment references, or artifact recovery, but it is not a stable logical artifact identifier.
- Root Compatibility: this method does not add new footer fields; self semantics are carried by `Towards: self` so CP143a-root-style method entries remain valid without an `Entry Role` field.

## Canonicalization

- Canonicalization Name: Tiinex markdown continuity canonicalization v2
- Text Encoding: UTF-8
- Line Endings: CRLF and CR are normalized to LF.
- Line Trailing Whitespace: spaces and tabs at the end of each line are removed.
- Document Trailing Whitespace: trailing whitespace at the end of the document is removed before active checksum neutralization.
- Integrity Section Rule: the `# Continuity Integrity` section remains inside the canonical source when present.
- Active Entry Rule: for `Towards: self`, the validator must identify the active integrity method entry whose value is being computed inside the current artifact. For non-self targets, the current entry is a comparison entry unless an explicit later method defines direct-target recomputation.
- Self Entry Rule: new v2-authored artifacts should include exactly one primary self entry identified by `Towards: self`.
- Primary Seal Rule: the primary self entry is the footer-continuity seal for the artifact snapshot and should be computed after all fixed sibling validator, signature, attestation, target, and review entries intended for that sealed snapshot have been added.
- Non-Self Target Rule: if `Towards` is not `self`, validators should prefer resolving the target artifact, validating or reading that target artifact's primary `sha256-base64url-c14n-v2` self entry, and comparing that target self `Value` to the current entry `Value`.
- Non-Self Target Mode Rule: a non-self v2 entry must not silently switch between target-self-digest mode and direct-target-recompute mode.
- Direct Target Recompute Rule: if the resolved target has no primary v2 self entry, direct canonicalization of the target may be used only when a later method, local schema contract, or explicit direct-target mode defines that behavior; otherwise validators should report unavailable, ambiguous, or unsupported target self digest rather than guessing.
- Target Self Digest Rule: when target-self-digest mode is used, the active value neutralization happens in the target artifact's primary self entry for target validation, not in the current artifact's non-self comparison entry.
- Cycle Avoidance Rule: validators must not require computing two mutually dependent v2 `Value` fields in the same canonical source; if multiple values are needed, compute external target values first and compute the primary self seal last.
- Value Neutralization Rule: within the active integrity method entry, only the content after the first `Value:` field label is replaced with an empty value before digest computation.
- Sibling Footer Preservation Rule: all other Continuity Integrity entries, signature references, validator entries, attestation references, targets, method identifiers, and footer lines remain in the canonical source.
- Multiple Value Rule: if the active integrity method entry contains more than one `Value:` field, validation is ambiguous and should fail unless a descendant method explicitly defines entry-local disambiguation.
- Missing Value Rule: if the active integrity method entry has no `Value:` field, validation is ambiguous and should fail unless the artifact is being prepared for initial value insertion.
- Slice Rule: after active value neutralization, the remaining lines are joined with LF and no additional trim is applied to the slice.
- Digest Rule: SHA-256 is computed over the UTF-8 bytes of the canonical source, then encoded as unpadded base64url.

## Trust Boundary

- Trust Boundary: correct target resolution, active integrity entry selection, canonicalization, SHA-256 digest computation, and base64url encoding.
- Required Context: the target markdown text exactly as resolved for validation, the method definition for `sha256-base64url-c14n-v2`, the active integrity entry being validated for `Towards: self`, and the target artifact primary self entry when a non-self entry uses target-self-digest mode.
- Machine Verifiable: yes
- Human Verifiable: partial
- Replayable: yes when the target remains available with the same resolved content and the active entry can be identified.
- Cryptographic Strength: SHA-256 collision and preimage resistance under ordinary contemporary assumptions.
- Social Or Legal Strength: none by itself.

## Failure Modes

- Failure Modes: wrong target, stale target, stale digest after edit, missing primary self entry on new v2-authored artifacts, missing target primary self entry for non-self target-self-digest mode, duplicate primary self entries, wrong active integrity entry, ambiguous multiple values, circular value dependency, silent switching between target-self-digest and direct-target-recompute modes, relative path resolving to a different artifact, unavailable target, ambiguous target, canonicalization mismatch, copied value from another target, text encoding mismatch, implementation bug, unsupported method parser, or footer mutation after validation.
- Ambiguity Risks: a matching digest proves byte equality for the resolved target under this method only; it does not prove that the resolved target was the intended target.
- Misuse Risks: using byte-integrity language as if it proves truth, authorship, consent, approval, legal compliance, lineage completeness, or semantic validity.
- Known Weaknesses: a party with write access can remove or modify footer entries and recompute a new digest; downstream commit-pinned links, external validation records, parent entries, target self digests, or lineage continuity are still needed to expose historical mutation. A self digest is a snapshot fingerprint, not a permanent logical artifact id.

## Recommended Use

- Recommended Use: byte-integrity checks for stable Tiinex markdown artifacts, schema artifacts, generated local artifacts, searchable snapshot fingerprints, and artifacts whose Continuity Integrity footer may contain multiple validators, signatures, attestations, target digests, or review entries that should remain continuity-bound.
- Not Recommended For: proving truth, authorship, identity, intent, consent, permission, legal compliance, semantic correctness, schema validity, or complete provenance.
- Example UI Labels: footer-continuity byte-integrity verified, footer-continuity byte-integrity mismatch, target unavailable, target ambiguous, active value ambiguous.

## Machine Verifiability

- Validation Input: target markdown text and active integrity entry identifier or position for `Towards: self`; resolved target artifact and its primary v2 self entry for non-self target-self-digest comparison.
- Validation Output: base64url SHA-256 digest string.
- Expected Comparison: for `Towards: self`, exact string match with the active self entry `Value`; for non-self target-self-digest mode, exact string match between the current entry `Value` and the resolved target artifact's validated primary v2 self `Value`.
- Success Meaning: for `Towards: self`, the current artifact has the same canonical bytes as the method output claims, including preserved footer continuity except for the active value itself, and the value is a content-derived snapshot fingerprint for the sealed artifact. For non-self target-self-digest mode, success means the current artifact records the same snapshot fingerprint as the resolved target artifact's primary v2 self digest.
- Failure Meaning: the target, active entry selection, target self-entry selection, method, canonicalization, mode, or recorded value does not currently match.

## Human Verifiability

- Human Review: a reader can inspect the method identifier, target, value, and preserved footer entries, but should use a machine implementation to recompute the digest.
- Human-Readable Claim: byte-integrity with footer-continuity preservation.
- Human-Readable Limitation: not a truth, authorship, consent, approval, legal compliance, stable logical identity, or provenance claim.

## Examples

- Plain Method Identifier: `sha256-base64url-c14n-v2`
- Linked Method Identifier Example: `[sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/<commit-sha>/.topics/.validators/sha256-base64url-c14n-v2.validator.md)`
- Target Field: `Towards`
- Value Field: `Value`
- Recommended Self Entry:
  - `Towards: self`
  - `Value: <computed last for the sealed snapshot>`

Rules

- A linked method identifier must use `sha256-base64url-c14n-v2` as link text.
- A linked method identifier must use a commit-pinned permalink when this validator artifact has been committed and the permalink is available.
- This validator definition is not an executable validator implementation.
- This validator definition is not a validation result ledger.
- This validator definition intentionally preserves sibling footer entries so removal or mutation of validator, signature, target, review, or attestation entries changes the canonical bytes.
- Signatures, attestations, and external validation entries should not be defined so that they must sign the final self value they themselves help seal, unless a later two-phase signing method explicitly defines that fixed-point workflow.
- Ordinary v2 workflow should compute or validate target self values first, add fixed review/signature/attestation entries, and compute the primary self seal last.
- Non-self entries should record the target artifact's primary v2 self digest when available; direct target recomputation belongs in a later explicit method or contract rather than an implicit fallback.

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [sha256-base64url-c14n-v1.validator.md](https://github.com/Tiinex/docs/blob/3466e50d739a9ba65319297cef79c6b09844b1d7/.topics/.validators/sha256-base64url-c14n-v1.validator.md)
  - Value: kFrR8XyRdcOiVrVoWFUzAQJ-sc7FpnYhPEh-2NpSAws

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: TFV8o9W1nwToWlr2pZFEwwtKFys2YHlbHsmWcbyssUg