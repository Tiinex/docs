# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 09:54:00
  - Trace: [001-1-role-capacity-handoff-and-authorship-semantics-task.trace.md](001-1-role-capacity-handoff-and-authorship-semantics-task.trace.md)
  - Origin:
    - [relative](001-1-role-capacity-handoff-and-authorship-semantics-task.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-22 09:57:00
  - Authors: Schemer
  - Status: accepted/local
  - Why: Preserve the bounded Role/Handoff/authorship-capacity reconciliation and exact schema mutation so downstream Architect/Site work can consume durable authority without chat-level role boilerplate.
  - Summary: Party Role remains the reusable collaboration-capacity artifact; Handoff now preserves concrete endpoint identity separately from endpoint capacity; materially relevant authoring capacity uses optional typed Relation artifacts rather than a shared Authors-side role field.

---

# Role Capacity Schema Reconciliation Result

## Decision

- State: accepted
- Subject: reusable collaboration Role, Handoff endpoint capacity, and optional authoring-capacity representation
- Decision: retain `tiinex.party.role.v1` as the reusable Role/capacity artifact; extend `tiinex.handoff.v1` with optional `From Capacity` / `To Capacity` and corresponding Role references for cases where a concrete endpoint Party and a distinct collaboration capacity both matter; use separate `tiinex.relation.v1` artifacts for materially relevant authoring-capacity assertions instead of adding one ambiguous shared `Authoring Role` field to `Current` or `Authors`.
- Governing boundary: Role identity, endpoint identity, endpoint capacity, author identity, authoring capacity, holder/assignment state, delegation authority, acceptance, and artifact-subject role remain distinct truths.

## Basis

### Reusable Collaboration Role

Current [Party Role](../../../.schemas/party/role/tiinex.party.role.v1.schema.md) is already the correct durable artifact family for collaboration capacities such as Schemer, Tooling, Dev, tester, taste reviewer, architecture reviewer, maintainer, or facilitator.

It already owns the necessary bounded semantics:

```text
Role Identity
→ Role Label / Role Kind

Role Boundary
→ In Scope / Out Of Scope

Authority And Responsibility Boundary
→ May Do / Does Not Authorize / Review Boundary

Holder Relationship
→ Holder State / Current Holder / Possible Holder / Relation Artifact

Interpretation Limits
→ Does Not Prove / Must Not Be Treated As
```

Those fields directly satisfy the controlling Task's requirement that reusable Role semantics describe collaboration capacity without becoming model-personality prose or automatic proof of holder identity, delegation authority, acceptance, employment, or permanent ownership.

The provisional [Schemer Role](../../roles/001-schemer-role.trace.md) is therefore **accepted as a valid bounded `tiinex.party.role.v1` dogfood instance**. Its current `provisional/dogfood` status is preserved because this tranche does not need to rewrite the evidence artifact to establish schema correctness. No Party Role schema mutation is required.

### Handoff Endpoint Identity And Capacity

The prior Handoff shape could express either:

```text
To Kind: party
→ concrete recipient identity
```

or:

```text
To Kind: role
→ required recipient capacity
```

but not both independently in one endpoint declaration. That is a real semantic loss when one concrete Party receives work specifically as Schemer, tester, reviewer, or another bounded Role.

The maintained Handoff schema now adds optional:

```text
From Capacity
From Capacity Reference
To Capacity
To Capacity Reference
```

Interpretation:

```text
Kind: party
+ Capacity
→ concrete endpoint identity + bounded capacity for this Handoff

Kind: role
→ role/capacity itself is the endpoint
→ duplicate Capacity fields are not allowed

Kind: unknown
+ Capacity
→ concrete endpoint identity remains unresolved
→ required/known capacity may still be preserved
```

A Capacity Reference is a resolution aid to the durable Role artifact. It does not prove the named Party generally or currently holds that Role, accepted this Handoff, or possesses delegation/decision authority.

The current Handoff to Schemer remains valid without mutation:

```text
To: Schemer
To Kind: role
To Reference: Schemer Role
```

because that artifact intentionally targets the capacity itself rather than asserting one concrete recipient Party.

### Authorship Versus Authoring Capacity

The corpus already uses `Current -> Authors` as light authorship metadata across Topic, Task, Decision, Feedback, Pointer, Signal, Runtime, Reduction, and related families. That convention identifies author(s); it does not encode the capacity under which each author contributed.

A single field such as:

```text
Authoring Role: Architect
```

would be lossy for:

```text
Authors: Tiinusen; Architect
```

because it cannot say which author the role applies to, whether different authors acted in different capacities, or whether the role is holder state versus interpretation context.

Current [Relation](../../../.schemas/relation/tiinex.relation.v1.schema.md) already provides the needed optional durable relation authority:

- typed non-Parent relations may exist as standalone Relation Artifacts when the relation instance has independent semantic/provenance value;
- relation targets may be Tiinex artifacts, external targets, or bounded textual target descriptions;
- multiple targets are allowed when each target and relation meaning remain distinguishable;
- Relation does not reinterpret Parent and does not prove authority/truth merely by declaration.

Therefore the bounded authoring-capacity representation is:

```text
one tiinex.relation.v1 artifact
per materially relevant author-capacity assertion
```

Recommended relation meaning:

```text
Relation Type: authored-in-capacity
Relation Direction: declared author -> authored artifact under declared role/capacity
Relation Scope: artifact-level authorship interpretation
```

The relation should preserve distinguishable targets for:

```text
author
→ Party artifact/reference when available
→ otherwise bounded textual author descriptor

authored artifact
→ exact Tiinex artifact reference

authoring capacity
→ Party Role artifact/reference when available
→ otherwise precise bounded capacity descriptor
```

For multiple authors, create separate author-capacity relation instances when capacity differs or materially affects interpretation. Do not collapse all authors into one shared role field. One author may likewise have more than one materially distinct authoring-capacity assertion when separate contributions require that distinction.

This authoring-capacity relation is **optional**. Create it only when capacity changes interpretation, review boundary, provenance, or downstream use enough to justify durable preservation. Ordinary artifacts may continue to use `Authors` alone.

One concrete machine-readable shape under current Relation authority is:

```md
# Authoring Capacity Relation

## Relation Declaration

- Relation Type: authored-in-capacity
- Relation Direction: declared author -> authored artifact under declared role/capacity
- Relation Scope: artifact-level authorship interpretation

## Relation Target

- Target: [author party](author-party.trace.md)
  - Relation Type: author
  - Relation Direction: author-capacity assertion -> author party
  - Relation Scope: artifact-level authorship interpretation
- Target: [authored artifact](authored-artifact.trace.md)
  - Relation Type: authored artifact
  - Relation Direction: author-capacity assertion -> authored artifact
  - Relation Scope: artifact-level authorship interpretation
- Target: [Schemer Role](../../roles/001-schemer-role.trace.md)
  - Relation Type: authoring capacity
  - Relation Direction: author-capacity assertion -> collaboration role
  - Relation Scope: artifact-level authorship interpretation

## Relation Boundary

- This relation records authoring-capacity context only; it is not Parent, holder assignment, delegation authority, acceptance, artifact truth, or approval.
```

When no durable Party artifact exists for the author, Relation already permits a bounded textual target description; consumers must preserve that weaker resolution state rather than fabricate Party identity.

Authoring-capacity Relation does not prove:

- that the author generally holds the referenced Role;
- employment, membership, model identity, or permanent assignment;
- delegation authority;
- acceptance of a Handoff;
- artifact truth or approval;
- artifact subject/domain role.

If holder/assignment truth matters independently, use the Party Role `Holder Relationship` and/or a separately owned Relation/Decision/Evidence/Instrument authority rather than deriving holder state from one authoring event.

### Why Root Was Not Changed

The controlling Task allowed a Root envelope correction only if current authority could not express the truth without one.

A new generic `Current -> Authoring Role` or `Current -> Authoring Capacity` field would create unnecessary global ceremony and would be ambiguous for multi-author artifacts unless Root also introduced a new structured authorship ontology. Current typed Relation authority already expresses the sparse cases where authoring capacity has independent semantic value.

Therefore:

```text
Root mutation
→ NOT JUSTIFIED

Party Role mutation
→ NOT REQUIRED

Relation mutation
→ NOT REQUIRED

Handoff mutation
→ REQUIRED / BOUNDED
```

## Consequences

### Files Changed

```text
MODIFIED
.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md

ADDED
.topics/development/schema/role/001-1-1-role-capacity-schema-reconciliation-result.trace.md
```

No Site source, Root, Party, Party Role, Relation, package schema, controlling Task, dogfood Topic, Schemer Role artifact, or Handoff work artifact was rewritten.

### New Handoff Representation

The changed Handoff schema preserves the existing role-only endpoint form and adds a lossless concrete-party-plus-capacity form:

```text
To: Morgan Lee
To Kind: party
To Capacity: recovery lead
To Capacity Reference: [Recovery lead role](...)
```

The Handoff remains explicit that this does not prove Morgan is the general/current holder of Recovery Lead, accepted the handoff, or has authority beyond separately declared boundaries.

### Site / Compiler Boundary

No Site implementation claim is made here. Generic parser/compiler support for the new optional Handoff fields belongs to later Site enablement under Architect ownership.

The broader creation-contract/inheritance projection debt remains separate and was not widened into this schema tranche.

## Validation Evidence

The final workspace was validated with the maintained c14n-v2 canonicalization convention and byte-level reconstruction checks.

Post-mutation checks are recorded here as durable evidence after the final representation was sealed and the complete workspace was packaged:

```text
Handoff schema primary c14n-v2 self seal
→ ftgf8F2H5Y5YW2cjVk3eVOBufzAkGc6tclL972CEfHw

maintained schema primary v2 self seals
→ 102 / 102 PASS

input workspace files
→ 394

intentionally modified input files
→ 1
→ .topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md

missing input files
→ 0

new durable result files
→ 1
→ .topics/development/schema/role/001-1-1-role-capacity-schema-reconciliation-result.trace.md

final workspace files
→ 395

output workspace ZIP roundtrip
→ 395 / 395 byte-exact
```

## Immediate Next Questions

- Architect should independently review whether the new Handoff endpoint-capacity projection is sufficient for planned stateless Site/Tooling consumers before implementing UI/runtime support.
- If Site later wants authoring-capacity projection, it should consume optional Relation artifacts rather than inventing a hidden per-artifact role field.
- If future dogfood demonstrates a genuine need for a first-class authorship-event ontology beyond typed Relation, open a new bounded schema task rather than widening Root pre-emptively.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: d78zeldYzEMoM_d8BdnpPQcm7f8T_jiyKJnSIe_OckQ
