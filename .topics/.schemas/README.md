# Tiinex Schemas

This folder contains the human-readable schema notes that define how Tiinex
artifacts and declared support surfaces should be interpreted.

These schemas are designed to make provenance, lineage, continuity, artifact
role, runtime context, validation boundary, relation semantics, discovery,
resource enablement, instrument boundaries, and disclosure limits legible without
requiring custom binary formats or opaque hidden metadata.

## Why These Schema Notes Matter

Without schema guidance, a markdown artifact can be read too loosely.

A reader or language model may otherwise blur together:

* parent trace versus origin
* topic versus decision
* evidence versus feedback
* finding versus evidence
* relation target versus parent continuity
* attestation versus validation
* privacy boundary versus redaction or consent
* consent instrument versus attestation
* financial instrument versus resource contribution
* resource need versus task
* budget versus allocation
* allocation versus actual usage
* runtime execution versus evidence material
* traversal candidate search versus provenance recovery
* follow versus monitoring
* monitoring versus surveillance
* local readability versus actual validated continuity

The schema notes exist to reduce that ambiguity.

## Schema Families

### Continuity Envelope

* [tiinex.root.v1.schema.md](tiinex.root.v1.schema.md): continuity envelope
  above the main artifact body; preserves parent trace, origin, current schema,
  summary, repair context, inheritance, extension, and integrity context.

### Core Artifact Schemas

* [tiinex.topic.v1.schema.md](tiinex.topic.v1.schema.md): working topic and
  design-thread artifacts.
* [tiinex.task.v1.schema.md](tiinex.task.v1.schema.md): bounded work items with
  constraints, done criteria, and optional subtasks.
* [tiinex.evidence.v1.schema.md](tiinex.evidence.v1.schema.md): preserved
  supporting material with provenance and fidelity limits.
* [tiinex.feedback.v1.schema.md](tiinex.feedback.v1.schema.md): directed feedback
  with source, target, received signal, disposition, and limits.
* [tiinex.decision.v1.schema.md](tiinex.decision.v1.schema.md): landed decisions
  and what now governs.
* [tiinex.pointer.v1.schema.md](tiinex.pointer.v1.schema.md): thin continuity
  redirects toward an upstream trace or origin.
* [tiinex.signal.v1.schema.md](tiinex.signal.v1.schema.md): signal-bearing
  artifacts where interaction semantics are weaker than feedback.
* [tiinex.lineage.upgrade.deferral.v1.schema.md](tiinex.lineage.upgrade.deferral.v1.schema.md):
  bounded deferrals for lineage-upgrade work that must not hide integrity
  errors.

### Discovery Family

* [tiinex.discovery.v1.schema.md](tiinex.discovery.v1.schema.md): bounded
  discovery context for intentional search, exploration, field entry, outcome,
  and uncertainty.
* [tiinex.discovery.follow.v1.schema.md](tiinex.discovery.follow.v1.schema.md):
  bounded ongoing attention to a target, source, topic, issue, repository,
  community, or other followable context without turning it into monitoring or
  surveillance.
* [tiinex.discovery.finding.v1.schema.md](tiinex.discovery.finding.v1.schema.md):
  one discovered item, absence, ambiguity, anomaly, contradiction, duplicate,
  lead, or triage candidate. A finding is not evidence automatically.
* [tiinex.discovery.research.v1.schema.md](tiinex.discovery.research.v1.schema.md):
  question-driven inquiry with source field, method boundary, findings,
  synthesis, uncertainty, and unresolved gaps.
* [tiinex.discovery.expedition.v1.schema.md](tiinex.discovery.expedition.v1.schema.md):
  exploratory route through a partly unknown field, preserving terrain, route,
  encounters, hazards, map updates, and promising leads.
* [tiinex.discovery.monitoring.v1.schema.md](tiinex.discovery.monitoring.v1.schema.md):
  bounded recurring or continued observation over time with cadence, trigger,
  observation boundary, review, and stop conditions.
* [tiinex.discovery.surveillance.v1.schema.md](tiinex.discovery.surveillance.v1.schema.md):
  high-impact monitoring that requires explicit authority, necessity,
  proportionality, minimization, oversight, retention, correction, and stop
  conditions.

### Resource Family

* [tiinex.resource.v1.schema.md](tiinex.resource.v1.schema.md): broad
  enablement context for resources needed, available, promised, received,
  allocated, blocked, returned, or unavailable without making money the base
  concept.
* [tiinex.resource.need.v1.schema.md](tiinex.resource.need.v1.schema.md):
  expressed need or blocker for funding, hardware, software, compute, data,
  access, permission, people, expertise, time, legal review, or other bounded
  resources.
* [tiinex.resource.contribution.v1.schema.md](tiinex.resource.contribution.v1.schema.md):
  offered, pledged, provided, donated, transferred, assigned, withdrawn,
  rejected, or returned resource contribution.
* [tiinex.resource.contribution.receipt.v1.schema.md](tiinex.resource.contribution.receipt.v1.schema.md):
  received-resource contribution record with source, recipient, receipt basis,
  restrictions, return, reversal, dispute, and interpretation limits.
* [tiinex.resource.allocation.v1.schema.md](tiinex.resource.allocation.v1.schema.md):
  reservation or assignment of a resource to a purpose, target, task, project,
  budget, need, instrument, or bounded activity.
* [tiinex.resource.allocation.usage.v1.schema.md](tiinex.resource.allocation.usage.v1.schema.md):
  actual, estimated, observed, or billed use of an allocated resource, including
  tokens, API calls, compute time, staff hours, money, materials, or access.
* [tiinex.resource.budget.v1.schema.md](tiinex.resource.budget.v1.schema.md):
  planned resource envelope, cap, quota, reserve, runway, cost limit, token
  limit, usage window, threshold, and overrun behavior.

### Instrument Family

* [tiinex.instrument.v1.schema.md](tiinex.instrument.v1.schema.md): terms,
  permission, authority, obligation, access, restriction, or value-transfer
  boundary. Instruments preserve governing form without proving enforceability,
  fulfillment, consent, or legal compliance by themselves.
* [tiinex.instrument.financial.v1.schema.md](tiinex.instrument.financial.v1.schema.md):
  financial instrument form such as donation, grant, sponsorship, loan, equity,
  SAFE, convertible note, invoice, subscription, reimbursement, internal
  transfer, revenue share, or other value-transfer form.
* [tiinex.instrument.consent.v1.schema.md](tiinex.instrument.consent.v1.schema.md):
  consent, refusal, withdrawal, permission, restriction, and use-boundary
  instrument with scope, consenting party or authority, allowed/prohibited use,
  revocation, expiry, and interpretation limits.

### Relation, Validation, And Schema Governance

* [tiinex.relation.v1.schema.md](tiinex.relation.v1.schema.md): typed
  non-parent relationships between artifacts, payloads, claims, people, systems,
  or bounded targets.
* [tiinex.validation.method.v1.schema.md](tiinex.validation.method.v1.schema.md):
  validation method definitions with explicit scope, canonical identifier,
  recommended use, trust boundary, and failure modes.
* [tiinex.schema.family.v1.schema.md](tiinex.schema.family.v1.schema.md):
  schema-family and schema-registry style artifacts that describe lineage,
  creatability, governance, and relationship between schema notes.
* `tiinex.definition.v1.schema.md`: planned / not yet schema-defined in this
  folder; reserved for shared definition-root semantics.
* `tiinex.capability.v1.schema.md`: planned / not yet schema-defined in this
  folder; reserved for capability manifests for runtimes, viewers, validators,
  and related support surfaces.

### Validation Methods

* [sha256-base64url-c14n-v1.validator.md](../.validators/sha256-base64url-c14n-v1.validator.md):
  current baseline SHA-256 base64url canonical-byte integrity method used by
  existing tooling.
* [sha256-base64url-c14n-v2.validator.md](../.validators/sha256-base64url-c14n-v2.validator.md):
  maintained validator definition for future footer-continuity integrity,
  self-snapshot fingerprints, and non-self target self-digest comparison.
  This definition exists before ordinary app/linter/quickfix tooling is fully
  migrated to v2.

### Runtime Family

* [tiinex.runtime.v1.schema.md](tiinex.runtime.v1.schema.md): broad runtime
  layer for execution context, runtime state, outputs, results, and
  interpretation boundaries.
* [tiinex.ai.runtime.v1.schema.md](tiinex.ai.runtime.v1.schema.md): AI-runtime
  specialization for model, prompt, output, tool, and interpretation context.
* [tiinex.machine.runtime.v1.schema.md](tiinex.machine.runtime.v1.schema.md):
  machine-runtime specialization for machine-shaped execution context,
  environment, outputs, and reproducibility boundaries.

### Reduction, Disclosure, And Privacy Family

* [tiinex.reduction.v1.schema.md](tiinex.reduction.v1.schema.md): observable
  reduction artifacts that preserve carry-forward state, loss, and uncertainty.
* [tiinex.redaction.v1.schema.md](tiinex.redaction.v1.schema.md):
  reduction-derived redaction, masking, removal, transformation, residual risk,
  and carry-forward limits.
* [tiinex.privacy.boundary.v1.schema.md](tiinex.privacy.boundary.v1.schema.md):
  privacy, sensitivity, sharing, serialization, and disclosure boundaries.
* [tiinex.attestation.v1.schema.md](tiinex.attestation.v1.schema.md): scoped
  human, role, organizational, legal, witness, lab, or review-based
  attestations.
* [tiinex.external.payload.v1.schema.md](tiinex.external.payload.v1.schema.md):
  readable references to large, external, binary, private, generated, or
  machine-shaped payloads that should not be fully embedded in markdown.

### Traversal And Quantum Traversal Runtime

* [tiinex.traversal.runtime.v1.schema.md](tiinex.traversal.runtime.v1.schema.md):
  compute-agnostic candidate-space traversal runtime with search space,
  candidate model, transition rules, verifier, executor, outcome, and failure
  boundaries.
* [tiinex.quantum.traversal.runtime.v1.schema.md](tiinex.quantum.traversal.runtime.v1.schema.md):
  quantum-specific traversal-runtime child that adds backend context, quantum
  candidate encoding, circuit or oracle semantics, measurement results,
  post-processing, and claim boundaries without replacing inherited traversal
  requirements.

### Packaging, Archive, And Recovery Support

The following names are reserved or planned support surfaces, but are not yet
schema-defined in this folder:

* `tiinex.archive.v1.schema.md`
* `tiinex.zip.v1.schema.md`
* `tiinex.encrypted.v1.schema.md`
* `tiinex.broken.v1.schema.md`

Do not link to these as maintained schema files until the corresponding schema
notes exist.

## Reading Guidance

In current Tiinex practice, schema authority should come from these schema notes
rather than from convenient prose summaries elsewhere.

If a trace artifact names one of these schemas, that schema should guide how the
artifact is read.

Support schemas should not be silently collapsed into parent continuity. For
example, relation targets, payload references, privacy boundaries, consent
instruments, validation methods, discovery findings, resource needs, financial
instruments, budgets, receipts, and traversal inputs can all matter without
becoming `Parent Trace`.

## Migration Notes

`tiinex.consent.v1.schema.md` was an earlier PoC consent placement under
attestation. Consent is now modeled as:

* [tiinex.instrument.consent.v1.schema.md](tiinex.instrument.consent.v1.schema.md)

Attestation remains available as a companion artifact when the main value is who
witnessed, signed, vouched for, asserted, or reviewed a consent-related
statement.

Financial-instrument semantics are now modeled under Instrument rather than
Resource:

* [tiinex.instrument.financial.v1.schema.md](tiinex.instrument.financial.v1.schema.md)

Resource artifacts may reference financial instruments when a resource flow is
governed by a financial form, but financial instrument semantics should not be
collapsed into contribution, receipt, allocation, budget, or usage.

## Provenance And Continuity

These schema notes are especially concerned with keeping these signals separate:

* `Parent Trace`
* `Origin`
* declared capability metadata
* current schema identity
* current artifact summary
* relation targets
* validation method scope
* discovery field
* finding status
* research synthesis
* follow boundary
* monitoring cadence
* surveillance safeguards
* resource need
* resource contribution
* resource receipt
* resource budget
* resource allocation
* resource usage
* instrument terms
* consent boundary
* runtime executor context
* privacy, consent, and redaction boundaries
* traversal candidate space and verifier boundary
* integrity relation

That separation matters because provenance problems often begin when one system
stores all of those meanings in one opaque layer that later readers cannot
inspect directly.
