# Continuity Context

- Envelope Schema: [tiinex.root.v1](tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.attestation.v1](tiinex.attestation.v1.schema.md)
  - Created At: 2026-06-26 00:00:00
  - Trace: [tiinex.attestation.v1.schema.md](tiinex.attestation.v1.schema.md)
  - Origin:
    - [relative](tiinex.attestation.v1.schema.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/b400c19df2b9d7f5352256e363fa8a573ff281f9/.topics/.schemas/tiinex.attestation.v1.schema.md)
- Current
  - Current Schema: [tiinex.consent.v1](tiinex.consent.v1.schema.md)
  - Created At: 2026-06-26 00:00:00
  - Summary: Schema for explicit consent, refusal, withdrawal, permission, and use-boundary artifacts with scope, authority, and revocation limits.

---

# Consent

- Status: maintained schema note

## Summary

This schema narrows `tiinex.attestation.v1` for artifacts whose main job is to
preserve an explicit consent, permission, refusal, withdrawal, restriction, or
use-boundary statement.

It exists so Tiinex can represent consent semantics without treating every
attestation as consent, and without hiding permission, purpose, expiry,
revocation, or allowed-use limits inside privacy warnings or app defaults.

## Schema Validation Contract

### Consent Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.consent.v1`

Rules

- `tiinex.consent.v1` identifies attestation-derived artifacts centered on consent, refusal, withdrawal, permission, or allowed use.
- A consent artifact records that a consenting party or authority made a scoped consent-related statement.
- A consent artifact must not imply identity, legal compliance, clinical correctness, provenance, or byte integrity unless those claims are separately supported by appropriate artifacts or methods.
- Prose outside `Schema Validation Contract` may explain the schema, but it does not add required validation rules.

### Consent Body

Required Shape

- first body heading after the continuity envelope
- `## Consent Statement` section
- `## Consenting Party` section
- `## Consent Scope` section
- `## Use Boundary` section
- `## Revocation Or Expiry` section
- `## Interpretation Limits` section

Optional Sections

- Evidence Basis
- Attestation Basis
- Privacy Boundary
- Related Artifacts
- External Payloads
- References

Rules

- A consent artifact should begin with a human-readable title.
- `Consent Statement` must state the consent-related statement being preserved.
- `Consenting Party` must identify the consenting party, role, delegate, guardian, authority, or bounded descriptor as specifically as the artifact can safely disclose.
- `Consent Scope` must state the bounded purpose, target, and allowed or prohibited use.
- `Use Boundary` must state what use, sharing, serialization, retention, or disclosure limits apply.
- `Revocation Or Expiry` must state expiry and revocation status, even when they are unknown or not declared.
- `Interpretation Limits` must state what the consent artifact should not be read as proving.

### Consent Statement

Required Fields

- Statement
- Consent Type
- Consent Status

Optional Fields

- Subject
- Target Artifact
- Target Payload
- Statement Date
- Effective Date
- Evidence Basis

Allowed Shapes

- `Consent Type`: authorization
- `Consent Type`: permission
- `Consent Type`: refusal
- `Consent Type`: withdrawal
- `Consent Type`: restriction
- `Consent Type`: delegated-consent
- `Consent Type`: guardian-consent
- `Consent Type`: research-consent
- `Consent Type`: data-use-consent
- `Consent Type`: other
- `Consent Status`: active
- `Consent Status`: revoked
- `Consent Status`: expired
- `Consent Status`: restricted
- `Consent Status`: refused
- `Consent Status`: unknown

Rules

- `Statement` should preserve the consent-related statement in readable form.
- `Consent Type` must use one of the declared shapes so tools can group consent classes without treating the vocabulary as exhaustive.
- `Consent Status` must use one of the declared shapes and should not be inferred from silence.
- A refusal, withdrawal, or restriction is consent-related even when it denies or limits use.
- Consent artifacts should preserve uncertainty through `Consent Status: unknown` or `Interpretation Limits` instead of inventing permission.

### Consenting Party

Required Fields

- Party
- Role Or Authority

Optional Fields

- Subject
- Delegate
- Guardian
- Organization
- Identifier
- Contact Boundary
- Privacy Boundary

Rules

- `Party` should identify the consenting person, role, delegate, guardian, organization, authority, or bounded descriptor.
- `Role Or Authority` must state why the party is allowed to make the consent-related statement.
- When identity cannot be safely disclosed, the artifact should preserve a bounded role or authority descriptor instead of exposing sensitive identity.
- A consent artifact must not assume that a party has authority unless the artifact states the authority basis or declares the authority unknown.

### Consent Scope And Use Boundary

Required Fields

- Purpose
- Applies To
- Allowed Uses
- Prohibited Uses
- Use Boundary

Optional Fields

- Sharing Boundary
- Serialization Boundary
- Retention Boundary
- Jurisdiction Or Policy Context
- Privacy Boundary

Rules

- `Purpose` must state the reason, workflow, research use, publication use, processing use, or other bounded purpose.
- `Applies To` must state the artifact, payload, sample, person descriptor, case, relation, claim, workspace, or other target in scope.
- `Allowed Uses` must state permitted uses, or explicitly state that permitted uses are unknown.
- `Prohibited Uses` must state known prohibited uses, or explicitly state that prohibited uses are unknown.
- `Use Boundary` must summarize the practical boundary a later tool or reader should respect.
- Sharing, serialization, retention, and privacy boundaries should be explicit when they materially affect disclosure or use.

### Revocation Or Expiry

Required Fields

- Expiry
- Revocation Status

Optional Fields

- Revocation Path
- Revoked At
- Renewal Required
- Review Date
- Known Gaps

Allowed Shapes

- `Revocation Status`: active
- `Revocation Status`: revoked
- `Revocation Status`: expired
- `Revocation Status`: restricted
- `Revocation Status`: not-declared
- `Revocation Status`: unknown

Rules

- `Expiry` must state a date, condition, `not-declared`, or `unknown`.
- `Revocation Status` must use one of the declared shapes.
- If revocation is possible but the revocation path is unknown, the artifact should say so explicitly.
- Consent should not be treated as permanent unless permanence is inside the declared statement and trust boundary.

### File Naming

Allowed Shapes

- `<lineage>.trace.md`
- `<lineage>-consent.trace.md`
- `<lineage>-<consent-slug>.trace.md`

Rules

- Consent artifacts should keep the lineage label first.
- The optional slug should identify the consent target, purpose, or consent class.
- Consent artifacts should keep the `.trace.md` suffix stable.

### Interpretation Boundaries

Rules

- Use `tiinex.consent.v1` when the main artifact value is permission, refusal, withdrawal, restriction, or use-boundary consent semantics.
- Do not use `tiinex.consent.v1` as a substitute for privacy boundary artifacts when the main value is sensitivity, sharing, or serialization policy.
- Do not use `tiinex.consent.v1` as a substitute for attestation when the statement is not consent-related.
- Do not use `tiinex.consent.v1` to claim legal compliance without supporting legal, policy, evidence, or attestation artifacts.
- Consent artifacts may reference privacy boundary, attestation, relation, external payload, validation method, or evidence artifacts when those artifacts define the consent context.

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.consent.v1
  - Created At: 2026-06-26 00:00:00
  - Summary: Consent boundary for summary-only use of one private lab payload.

---

# Summary-Only Lab Payload Consent

## Consent Statement

- Statement: the subject-authorized representative permits summary-only use of the referenced lab payload for the stated review workflow
- Consent Type: data-use-consent
- Consent Status: active
- Target Payload: private-lab-result-payload.trace.md

## Consenting Party

- Party: bounded authorized representative descriptor
- Role Or Authority: subject-authorized representative

## Consent Scope

- Purpose: internal review of one lab result package
- Applies To: private lab result payload artifact
- Allowed Uses: bounded internal summary
- Prohibited Uses: public raw payload disclosure

## Use Boundary

- Use Boundary: summary-only internal review; no raw payload serialization into public artifacts
- Sharing Boundary: restricted
- Serialization Boundary: raw payload details disabled

## Revocation Or Expiry

- Expiry: unknown
- Revocation Status: unknown
- Revocation Path: not recorded in this artifact

## Interpretation Limits

- Interpretation Limits: this artifact does not prove legal compliance, subject identity, payload integrity, or clinical correctness
```

## Validation-Friendly Shape

Keep this schema note in the exact section order already used here:
`Summary`, `Schema Validation Contract`, `Minimal Example`,
`Validation-Friendly Shape`, and `Interpretation Notes`.

Maintain the section headings exactly in this schema note. Free markdown inside
those sections is allowed, but adding undeclared new section headings should be
treated as schema drift.

## Interpretation Notes

- consent artifacts narrow attestation semantics to permission, refusal, withdrawal, restriction, or allowed-use boundaries
- consent should remain separate from privacy boundary, redaction, evidence, integrity, and legal compliance unless those companion artifacts are explicitly referenced
- this support schema intentionally omits `Artifact Creation Contract` until ordinary app creation behavior is explicitly declared

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.attestation.v1.schema.md](https://github.com/Tiinex/docs/blob/b400c19df2b9d7f5352256e363fa8a573ff281f9/.topics/.schemas/tiinex.attestation.v1.schema.md)
  - Value: bUL8p4czC4WM_87-g-0rVWrQboLgThg-SnQtyTNqc9Q