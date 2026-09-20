# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 00:50:44
  - Trace: [001-3-6-4-3-1-1-2-1-1-anchor-to-axiom-docs-major-004-canonical-continuity-schema-refer.trace.md](001-3-6-4-3-1-1-2-1-1-anchor-to-axiom-docs-major-004-canonical-continuity-schema-refer.trace.md)
  - Origin:
    - [relative](001-3-6-4-3-1-1-2-1-1-anchor-to-axiom-docs-major-004-canonical-continuity-schema-refer.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-12 01:07:32
  - Authors: Axiom
  - Why: Adjudicate the Major 005 mixed-reference reproductions without falsely strengthening local/unpublished schema references or rewriting historical bytes.
  - Summary: Per-field exact-authority rule for continuity schema references, prospective fail-closed authoring, historical preservation, and Core/host owner split.
  - Status: ready/local

---

# Docs Major 004 — Canonical Continuity Schema Reference Disposition

This Decision closes the canonical semantic question raised by the Major 005 mixed-reference reproductions. Schema-reference strength is evaluated per continuity field against qualified authority for the exact schema representation governing that field; mixed Markdown-link/plain-id presentation is not independently a validity class.

## Decision

### Canonical Rule

- `Envelope Schema`, `Parent Schema`, and `Current Schema` are evaluated independently. A stronger representation in one field does not upgrade or invalidate another field by proximity.
- For a newly authored ordinary persisted artifact candidate, when creation, continuation, staging, or manufacture has qualified an immutable canonical locator for the **exact schema representation** governing a field, that field MUST use Markdown Link form with that exact qualified target. Knowingly leaving that field as a plain schema id is an authoring/qualification error and the new candidate MUST NOT be sealed, accepted, or manufactured unchanged.
- A locator counts as available canonical reference authority only when the target is qualified for the exact governing representation. Schema-id equality, repository/path presence, a historical permalink, a mutable branch locator, or another artifact's/reference field's stronger shape does not establish that authority.
- A stale or historical immutable locator whose represented bytes/material identity do not match the exact governing schema material MUST NOT be emitted merely to make a field look stronger.
- When no qualified exact locator is available, a plain schema id remains truthful and valid. This includes local/unpublished schema material and other states where only semantic schema identity is established. Tooling MUST NOT fabricate a canonical target from path, host, repository, filename, schema id, or an older binding.
- Self-relative and truthful local/relative representations remain valid according to the existing Root contract. This Decision does not convert every local artifact into a publication claim.
- A Markdown Link whose label/schema identity contradicts the resolved representation remains an error/unresolved contradiction under the existing Root contract.

### Qualification And Preservation Boundary

- **New candidate / active authoring context:** if qualified exact reference authority exists for a field and the candidate uses only a plain id, surface an error and fail closed before sealing/acceptance/manufacture. The candidate may be deterministically re-rendered before it becomes durable source.
- **Existing, received, or historical artifact:** preserve the bytes. Present-day discovery of a stronger canonical locator does not prove that locator was available and qualified when the artifact was authored. Audit/editor assistance MAY surface a warning/degraded reference when stronger exact authority is currently known and the weakness is useful to expose, but MUST NOT rewrite the artifact in place or retroactively manufacture an authoring-time fact.
- Historical correction, when semantically necessary, proceeds through a new continuation/correction/recovery artifact. Historical mixed-reference bytes remain evidence and provenance.
- The words “mixed reference” describe presentation shape only. They MUST NOT be used as a shortcut for invalidity, degradation, publication state, or canonical-authority state.

### Concrete Major 005 Classification

- **Core Major 005 Evidence** (`core::.topics/refactor/orchestration/evidence/004-core-major-005-reconciliation-manufacture-proof-gate-qualificati.trace.md`): its Root and Parent schema references are exact links while `Current Schema: tiinex.evidence.v1` is a plain id. Under the carried authority this Current field is **not a defect merely because it is plain**. The current carried Docs Evidence schema hashes to `68c675c0958899b4deaeb615aab58089e15a9c45422d062a715d5855fc2c1977`, while Core's older Evidence binding records checksum `b6c06684af1d5fa181ebf37f04ffb0c226ef5b4f46fccd53b5ec12676ab8c551` at commit `e713557f8be630967571d11a73f9ecd05ae329ce` and marks the representation `accepted-local-unpublished`. That older permalink is not qualified authority for the exact current carried Evidence bytes. Emitting it would be a false strengthening.
- **Site Major 005 Evidence** (`site::.topics/refactor/qualification/002-kodax-site-major-005-self-contained-playthings-local-source-browser-harness-evidence.trace.md`): `Envelope Schema: tiinex.root.v1` is avoidably weaker because qualified exact Root reference authority is available. As an already-authored carried artifact, preserve its bytes and surface it as warning/degraded reference debt rather than rewrite it. Its plain Evidence `Current Schema` has the same disposition as the Core example unless and until exact current Evidence reference authority is separately qualified.
- Therefore the reported Major 005 symptom is narrower than “bare Current Schema is invalid”: the real canonical defect is **omitting a qualified exact target for the specific field that has one**.

### Exact Canonical Docs Delta

The existing Root `Schema Validation Contract / Schema Reference Fields` is sufficient on semantic identity versus locator truth, but underspecified at the prospective authoring/qualification boundary because it simultaneously says Markdown Link is preferred/required for published canonical references and permits plain ids when local context resolves an id. The canonical delta is:

1. Replace preference-only language for new persisted candidates with a normative creation rule: when qualified immutable canonical authority for the exact governing schema representation is available, the field MUST use Markdown Link form and a plain id is an error before sealing/acceptance/manufacture.
2. State explicitly that this rule is evaluated independently for `Envelope Schema`, `Parent Schema`, and `Current Schema`; mixed shapes are neither valid nor invalid by themselves.
3. State explicitly that an old/stale locator, schema-id match, repository presence, or mutable path is not an available canonical target unless exact represented material identity is qualified.
4. Preserve the plain-id allowance when no qualified exact locator exists; local context resolving semantic identity does not authorize fabrication of an exact representation target.
5. Add the operation boundary: prospective authoring/staging fails closed on an avoidable plain id; existing/historical ingestion preserves bytes and may report warning/degraded reference quality without in-place mutation or retrospective authoring claims.

This delta belongs in the canonical Root schema contract when Anchor schedules the Root-byte change and dependent integrity/requalification work. Until then, this Decision is the Major 004 semantic disposition and must not be misread as a silent mutation of existing Root bytes.

## Basis

- The current Root contract already separates schema semantic identity from representation location and already requires an immutable canonical locator for a different already-published canonical schema representation when one is available.
- Core Major 004 correctly separated lifecycle/publication state from schema-reference publication authority and requires explicit immutable-publication state plus provider/source/checksum/blob coherence before treating a remote target as creation authority.
- Core's current Evidence binding does not carry that separate qualified immutable-reference state and its recorded checksum does not match the carried current Docs Evidence schema bytes. The older permalink therefore cannot truthfully be promoted into the current Evidence header.
- The Site Major 005 reproduction independently demonstrates the opposite case: exact Root reference authority is known, so a newly authored bare Root field is avoidable degradation even though the artifact remains readable and preservable.
- Historical mass rewrite would erase provenance and falsely project present authority backward. New continuation/correction plus explicit findings preserves both truth and recoverability.

## Consequences

### Ownership Split

- **Docs / Axiom:** owns the canonical rule above and any later Root contract wording/schema change. Docs semantics define when a schema-reference representation is truthful; Docs does not implement host behavior.
- **Core / Loom:** owns common authoring, staging, audit/editor, manufacture-preflight, and schema-reference-authority mechanics. Core should keep exact-target qualification per schema/material and must not collapse it back into generic lifecycle publication state. When exact authority exists, new-candidate omission is blocking; when inspecting preserved artifacts, the same weakness is diagnostic/warning unless another active contract independently makes it invalid.
- **Host owners:** render or route Core's qualified result/finding. A host must not invent a stronger target, independent severity policy, or schema-specific exception merely to make output look canonical.
- **Anchor:** owns cross-role integration and acceptance of the later Core/host implementation against this semantic decision. Sigma's human/product acceptance remains separate.

### Bounded Acceptance Recommendation

A later implementation should be accepted only if focused tests prove all of the following:

- A new artifact with qualified exact Root authority renders the exact Root link; forcing bare Root causes the new-candidate gate to fail closed.
- Current Evidence remains plain-id when no qualified immutable exact target for the carried Evidence bytes exists; no warning/error is manufactured solely because adjacent fields are links.
- Supplying a qualified immutable target for the exact current Evidence bytes causes future Evidence `Current Schema` to render that exact link; supplying a stale/mismatched target does not.
- Existing Site Major 005 bytes remain unchanged while audit/editor assistance can expose its bare Root as warning/degraded reference debt.
- A resolved link whose schema identity/material contradicts the declared schema id remains a blocking contradiction.
- Host presentation preserves Core's finding/severity and does not recreate canonical-reference policy locally.

### Historical Boundary

No historical mass rewrite is authorized. This Decision does not declare the existing Core Major 005 Evidence invalid, does not authorize changing the carried Site Evidence in place, does not publish a new immutable Evidence representation, and does not grant Axiom implementation ownership in Core or any host.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-3-6-4-3-1-1-2-1-1-anchor-to-axiom-docs-major-004-canonical-continuity-schema-refer.trace.md](001-3-6-4-3-1-1-2-1-1-anchor-to-axiom-docs-major-004-canonical-continuity-schema-refer.trace.md)
  - Value: 2iAa6eD5ZhkbO9iCzHL4tcfJVBYG0vhKz43mESUA0vs

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: sPAPNz-T0pC_1ckNArOfpDS7t1i-4MfDA2TAn-RmV18