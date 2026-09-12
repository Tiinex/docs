# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-10 09:37:36
  - Trace: [001-5-1-refactor-anchor-to-axiom-secure-transport-v1-concrete-profile-re.trace.md](001-5-1-refactor-anchor-to-axiom-secure-transport-v1-concrete-profile-re.trace.md)
  - Origin:
    - [relative](001-5-1-refactor-anchor-to-axiom-secure-transport-v1-concrete-profile-re.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-10 09:54:31
  - Authors: Axiom
  - Why: The first qualified Core implementation returned the concrete profile choices that Docs explicitly retained for independent semantic review.
  - Summary: Accept the exact Secure Transport V1 password profile while gating host adoption on empty-password rejection and truthful schema-reference rendering.
  - Status: ready/local

---

# Secure Transport V1 concrete password profile decision

The first Core Secure Transport V1 password profile is accepted as the canonical concrete V1 profile at the exact profile identifier/version and parameter grammar below. This decision does not make the profile a universal future default and does not authorize host adoption until the two bounded Core conformance corrections in this decision qualify.

## Decision

- State: accepted
- Subject: `tiinex.transport.envelope.v1` concrete password profile and Core conformance boundary
- Decision: accept profile id `tiinex.password.pbkdf2-hmac-sha256.aes-256-kw.aes-256-gcm.v1` with `Profile Version: 1` and exact-match semantics; require non-empty password input and a truthful non-mutable schema reference before this implementation is treated as conforming canonical V1 behavior.
- Canonical payload profile:
  - `Content Encryption Algorithm`: `AES-256-GCM`
  - `Content Encryption Parameters`: `{"binaryFraming":"webcrypto-ciphertext-concatenated-tag","keyBits":256,"nonceBytes":12,"tagBits":128}`
  - `Nonce Or IV Encoding`: `base64url-no-padding`
  - `Payload Authentication Rule`: `authenticated-encryption-required`
  - `Security Metadata Authentication Rule`: `authenticate-profile-and-workspace-binding`
  - `Recipient Change Payload Rule`: `protected-payload-bytes-unchanged`
- Canonical password recipient slot grammar:
  - `Slot Kind`: `password`
  - `KDF Algorithm`: `PBKDF2-HMAC-SHA-256`
  - `KDF Parameters`: `{"derivedKeyBits":256,"iterations":600000,"passwordEncoding":"utf8-no-normalization","saltBytes":16}`
  - `KDF Salt Encoding`: `base64url-no-padding`
  - `Key Wrap Algorithm`: `AES-256-KW`
  - `Key Wrap Parameters`: `{"contentKeyAlgorithm":"AES-256-GCM","wrappedKeyFormat":"raw","wrappingKeyBits":256}`
  - `Wrapped Content Key Encoding`: `base64url-no-padding`
  - `Slot Verification Rule`: `unwrap-then-authenticate-protected-payload`
- Canonical key/nonce behavior: each protected Workspace representation uses a fresh random 256-bit AES-GCM content key and fresh 12-byte nonce; each password slot uses a fresh random 16-byte KDF salt; AES-GCM uses a 128-bit authentication tag.
- Canonical recipient-change behavior: adding, removing, or replacing password recipient slots rewraps the same authenticated content key and must leave the protected payload bytes unchanged.
- Password input boundary: the empty string is not a valid password for this V1 profile. Core must not manufacture or replace a password recipient slot from an empty password. An empty candidate supplied while opening must not unlock a slot and must remain within the existing wrong-password/locked failure semantics rather than creating a new durable result vocabulary.
- Password byte semantics: `utf8-no-normalization` is accepted exactly. This profile applies UTF-8 encoding to the supplied password text without Unicode normalization. A host using this profile must not silently normalize or otherwise transform the password and still claim the same profile semantics. A later normalized-input profile requires a separately reviewed profile/version pair.
- Password policy boundary: this decision adds no minimum length beyond non-empty, no composition rule, and no general password-strength policy. Hosts may apply stricter input policy at their own UX boundary, but such policy is not transport-envelope semantic truth and must not change the bytes presented to this profile after acceptance.
- Schema reference boundary: until a qualified immutable canonical locator for the current Docs `tiinex.transport.envelope.v1` representation exists, a generated Transport Envelope must render `Current Schema` as the plain schema id `tiinex.transport.envelope.v1`. A mutable `blob/main`, `blob/master`, latest-style, or equivalent branch locator may not stand in for exact schema-representation authority. Once a truthful immutable canonical locator is qualified, the normal Markdown-link form may be used.
- Exact-match boundary: consumers must fail closed on any unsupported profile id/version, KDF algorithm/parameters, key-wrap algorithm/parameters, content-encryption algorithm/parameters, encoding, or authentication rule. No host or runtime default may repair or reinterpret a mismatch.
- Semantic boundary: authenticated decryption proves only the cryptographic condition declared by the transport contract. It does not create Workspace identity, Handoff authority, provenance, semantic truth, acceptance, recipient identity, or provider qualification. The selected authoritative Handoff route Workspace remains clear under Secure Transport V1.

## Basis

- The accepted Transport Envelope contract intentionally deferred its first concrete KDF cost, AEAD, key-wrap, and binary-framing choices for independent review while requiring every concrete profile to be explicit and fail closed.
- The returned Core proposal declares all cryptographically material profile parameters explicitly, uses fresh per-protected-representation content-key/nonce material and fresh per-slot salt material, authenticates the profile/workspace binding, and preserves the accepted same-content-key recipient-rotation semantics without changing payload bytes.
- The exact 600000-iteration PBKDF2-HMAC-SHA-256 setting is accepted for this reviewed profile/version, not as a schema-wide or permanent default. Future cost or algorithm changes must not be silently substituted under this exact profile/version pair.
- `webcrypto-ciphertext-concatenated-tag` closes the previously deferred binary-format boundary by naming one deterministic ciphertext/tag framing rather than leaving host behavior implicit.
- Empty password acceptance would turn a password recipient slot into an intentionally unsecret offline opening value and contradict the minimum meaning of password-sealed representation. Rejecting only empty input closes that semantic/security validity gap without inventing a broad password-complexity policy.
- Root schema-reference authority separates schema identity from schema location, permits Plain Schema Id when no useful exact locator is available, and explicitly forbids treating a mutable branch/latest locator as equivalent to an immutable exact-representation locator.

## Consequences

- The concrete profile identifier and exact grammar above may be treated as the canonical Secure Transport V1 password profile only after the returned Core implementation conforms to the two bounded corrections below and its existing qualification suite remains green.
- Core change request 1: reject empty password input for new/replacement password slots before derivation or wrapping; an empty open candidate must not derive/unwrap as a valid password and must resolve as wrong-password/locked. Add focused tests proving empty cannot create, replace, or unlock a canonical V1 password slot while non-empty behavior remains unchanged.
- Core change request 2: stop rendering the Transport Envelope `Current Schema` with the mutable `https://github.com/Tiinex/docs/blob/main/...` target. Render the plain id `tiinex.transport.envelope.v1` while no qualified immutable target is available; add or update focused renderer qualification coverage for that exact form. A later immutable target may replace the plain id only when its provenance is qualified rather than guessed.
- No Core algorithm, cost, salt length, key size, nonce length, tag length, encoding, recipient rewrap, AAD binding, fail-closed result, route-clear, or sealed-name-tree change is requested by this review.
- Anchor retains integration/disposition and Loom/Refactor Anchor retains any Core mechanics correction. CLI and graphical host exposure remains downstream of corrected Core qualification.

## Review Conditions

- Any change to the exact accepted profile id/version pair or parameter grammar requires a new bounded Docs review; implementations must not silently update costs, encodings, framing, normalization, algorithms, or failure semantics under this accepted pair.
- If a later Docs publication supplies a truthful immutable canonical locator for the current Transport Envelope schema representation, Core may adopt that locator without changing schema semantic identity; the locator must still be qualified and must not be inferred from branch naming.
- A future request for password normalization, password-length policy, other credential systems, signing, or carrier-sealed routing is outside this decision and requires separately scoped authority.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-5-1-refactor-anchor-to-axiom-secure-transport-v1-concrete-profile-re.trace.md](001-5-1-refactor-anchor-to-axiom-secure-transport-v1-concrete-profile-re.trace.md)
  - Value: Sh4Lx2O3JPWjrhmjDggslYZ5K6SEDcgSy-tvt8_GZ34

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: Q0uzrFV9W2jlhg5EIAzFDU9iVS1PMP5Zz7wY7lgsZxw