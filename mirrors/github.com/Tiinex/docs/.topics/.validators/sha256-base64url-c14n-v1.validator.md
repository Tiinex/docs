# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/5986f0e5d48273f135e8fe4ef33dda20cea052f4/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.validation.method.v1](https://github.com/Tiinex/docs/blob/7aecdb99551c4b6850665cdee418f0b9907d9616/.topics/.schemas/tiinex.validation.method.v1.schema.md)
  - Created At: 2026-06-27 00:00:00
  - Summary: Canonical validation method definition for SHA-256 base64url canonical-byte integrity checks.

---

# SHA-256 Base64url Canonical Byte Integrity Method

- Status: canonical validator definition
- Canonical Identifier: sha256-base64url-c14n-v1

## Method Identity

- Name: SHA-256 base64url canonical byte integrity
- Version: 1
- Method Family: digest
- Canonical Identifier: sha256-base64url-c14n-v1

## Verification Scope

- Verifies: same canonical bytes for the declared target
- Does Not Verify: truth, authorship, identity, intent, consent, semantic correctness, schema validity, freshness, permission, or historical provenance
- Target Types: Tiinex markdown artifact targets identified by `self` or a markdown-linked target
- Required Inputs: declared target text, target resolution context, canonicalization rules, SHA-256 digest implementation, and base64url encoder
- Output Signal: unpadded base64url encoding of the SHA-256 digest of the canonical target bytes

## Canonicalization

- Canonicalization Name: Tiinex markdown continuity canonicalization v1
- Text Encoding: UTF-8
- Line Endings: CRLF and CR are normalized to LF
- Line Trailing Whitespace: spaces and tabs at the end of each line are removed
- Document Trailing Whitespace: trailing whitespace at the end of the document is removed before section detection
- Integrity Section Rule: if a line whose trimmed text is exactly `# Continuity Integrity` exists, that line and every following line are excluded from the canonical source
- Slice Rule: after the integrity section is excluded, the remaining lines before that heading are joined with LF and no additional trim is applied to the slice
- Digest Rule: SHA-256 is computed over the UTF-8 bytes of the canonical source, then encoded as unpadded base64url

## Trust Boundary

- Trust Boundary: correct target resolution, canonicalization, SHA-256 digest computation, and base64url encoding
- Required Context: the target markdown text exactly as resolved for validation and the method definition for `sha256-base64url-c14n-v1`
- Machine Verifiable: yes
- Human Verifiable: partial
- Replayable: yes when the target remains available with the same resolved content
- Cryptographic Strength: SHA-256 collision and preimage resistance under ordinary contemporary assumptions
- Social Or Legal Strength: none by itself

## Failure Modes

- Failure Modes: wrong target, stale target, stale digest after edit, relative path resolving to a different artifact, unavailable target, ambiguous target, canonicalization mismatch, copied value from another target, text encoding mismatch, implementation bug, or unsupported method parser
- Ambiguity Risks: a matching digest proves byte equality for the resolved target only; it does not prove that the resolved target was the intended target
- Misuse Risks: using byte-integrity language as if it proves truth, authorship, consent, lineage completeness, or approval
- Known Weaknesses: local-only targets may be difficult for later readers to replay unless the exact target text is preserved or recoverable

## Recommended Use

- Recommended Use: byte-integrity checks for stable Tiinex markdown artifacts, schema artifacts, and generated local artifacts whose target text is known
- Not Recommended For: proving truth, authorship, identity, intent, consent, permission, semantic correctness, schema validity, or complete provenance
- Example UI Labels: byte-integrity verified, byte-integrity mismatch, target unavailable, target ambiguous

## Machine Verifiability

- Validation Input: target markdown text
- Validation Output: base64url SHA-256 digest string
- Expected Comparison: exact string match with `Value`
- Success Meaning: the resolved target has the same canonical bytes as the method output claims
- Failure Meaning: the target, method, canonicalization, or recorded value does not currently match

## Human Verifiability

- Human Review: a reader can inspect the method identifier, target, and value, but should use a machine implementation to recompute the digest
- Human-Readable Claim: byte-integrity only
- Human-Readable Limitation: not a truth, authorship, consent, approval, or provenance claim

## Examples

- Plain Method Identifier: `sha256-base64url-c14n-v1`
- Linked Method Identifier: `[sha256-base64url-c14n-v1](commit-pinned permalink to this validator artifact)`
- Target Field: `Towards`
- Value Field: `Value`

Rules

- A linked method identifier must use `sha256-base64url-c14n-v1` as link text.
- A linked method identifier must use a commit-pinned permalink when this validator artifact has been committed and the permalink is available.
- This validator definition is not an executable validator implementation.
- This validator definition is not a validation result ledger.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: 5VAKBpvh56FMvFbTGy9cIaMhGC7ikixKkuFmVDPWNS8