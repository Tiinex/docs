# Tiinex Schemas

This folder contains the human-readable schema notes that define how Tiinex
artifacts and declared support surfaces should be interpreted.

These schemas are designed to make provenance, lineage, continuity, artifact
role, runtime context, validation boundary, relation semantics, and disclosure
limits legible without requiring custom binary formats or opaque hidden
metadata.

## Why These Schema Notes Matter

Without schema guidance, a markdown artifact can be read too loosely.

A reader or language model may otherwise blur together:

- parent trace versus origin
- topic versus decision
- evidence versus feedback
- relation target versus parent continuity
- attestation versus validation
- privacy boundary versus redaction or consent
- runtime execution versus evidence material
- traversal candidate search versus provenance recovery
- local readability versus actual validated continuity

The schema notes exist to reduce that ambiguity.

## Schema Families

### Continuity Envelope

- [tiinex.root.v1.schema.md](tiinex.root.v1.schema.md): continuity envelope
  above the main artifact body; preserves parent trace, origin, current schema,
  summary, and integrity context.

### Core Artifact Schemas

- [tiinex.topic.v1.schema.md](tiinex.topic.v1.schema.md): working topic and design-thread
  artifacts
- [tiinex.task.v1.schema.md](tiinex.task.v1.schema.md): bounded work items with constraints,
  done criteria, and optional subtasks
- [tiinex.evidence.v1.schema.md](tiinex.evidence.v1.schema.md): preserved supporting material
  with provenance and fidelity limits
- [tiinex.feedback.v1.schema.md](tiinex.feedback.v1.schema.md): directed feedback with source,
  target, received signal, disposition, and limits
- [tiinex.decision.v1.schema.md](tiinex.decision.v1.schema.md): landed decisions and what now
  governs
- [tiinex.pointer.v1.schema.md](tiinex.pointer.v1.schema.md): thin continuity redirects toward
  an upstream trace or origin
- [tiinex.signal.v1.schema.md](tiinex.signal.v1.schema.md): signal-bearing artifacts where
  interaction semantics are weaker than feedback
- [tiinex.lineage.upgrade.deferral.v1.schema.md](tiinex.lineage.upgrade.deferral.v1.schema.md):
  bounded deferrals for lineage-upgrade work that must not hide integrity errors

### Relation, Validation, And Schema Governance

- [tiinex.relation.v1.schema.md](tiinex.relation.v1.schema.md): typed non-parent relationships
  between artifacts, payloads, claims, people, systems, or bounded targets
- [tiinex.validation.method.v1.schema.md](tiinex.validation.method.v1.schema.md): validation
  method definitions with explicit scope, canonical identifier, recommended use,
  trust boundary, and failure modes
- [tiinex.schema.family.v1.schema.md](tiinex.schema.family.v1.schema.md): schema-family and
  schema-registry style artifacts that describe lineage, creatability, governance,
  and relationship between schema notes
- [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md): shared definition root for
  schema notes themselves
- [tiinex.capability.v1.schema.md](tiinex.capability.v1.schema.md): capability manifests for
  runtimes, viewers, validators, and related support surfaces

### Runtime Family

- [tiinex.runtime.v1.schema.md](tiinex.runtime.v1.schema.md): broad runtime layer for execution
  context, runtime state, outputs, results, and interpretation boundaries
- [tiinex.ai.runtime.v1.schema.md](tiinex.ai.runtime.v1.schema.md): AI-runtime specialization
  for model, prompt, output, tool, and interpretation context
- [tiinex.machine.runtime.v1.schema.md](tiinex.machine.runtime.v1.schema.md): machine-runtime
  specialization for machine-shaped execution context, environment, outputs, and
  reproducibility boundaries

### Reduction, Disclosure, And Privacy Family

- [tiinex.reduction.v1.schema.md](tiinex.reduction.v1.schema.md): observable reduction artifacts
  that preserve carry-forward state, loss, and uncertainty
- [tiinex.redaction.v1.schema.md](tiinex.redaction.v1.schema.md): reduction-derived redaction,
  masking, removal, transformation, residual risk, and carry-forward limits
- [tiinex.privacy.boundary.v1.schema.md](tiinex.privacy.boundary.v1.schema.md): privacy,
  sensitivity, sharing, serialization, and disclosure boundaries
- [tiinex.consent.v1.schema.md](tiinex.consent.v1.schema.md): attestation-derived consent,
  refusal, withdrawal, permission, and use-boundary artifacts
- [tiinex.attestation.v1.schema.md](tiinex.attestation.v1.schema.md): scoped human, role,
  organizational, legal, witness, lab, or review-based attestations
- [tiinex.external.payload.v1.schema.md](tiinex.external.payload.v1.schema.md): readable
  references to large, external, binary, private, generated, or machine-shaped
  payloads that should not be fully embedded in markdown

### Traversal And Quantum Traversal Runtime

- [tiinex.traversal.runtime.v1.schema.md](tiinex.traversal.runtime.v1.schema.md): compute-agnostic
  candidate-space traversal runtime with search space, candidate model, transition
  rules, verifier, executor, outcome, and failure boundaries
- [tiinex.quantum.traversal.runtime.v1.schema.md](tiinex.quantum.traversal.runtime.v1.schema.md):
  quantum-specific traversal-runtime child that adds backend context, quantum
  candidate encoding, circuit or oracle semantics, measurement results,
  post-processing, and claim boundaries without replacing inherited traversal
  requirements

### Packaging, Archive, And Recovery Support

- [tiinex.archive.v1.schema.md](tiinex.archive.v1.schema.md)
- [tiinex.zip.v1.schema.md](tiinex.zip.v1.schema.md)
- [tiinex.encrypted.v1.schema.md](tiinex.encrypted.v1.schema.md)
- [tiinex.broken.v1.schema.md](tiinex.broken.v1.schema.md)

## Reading Guidance

In current Tiinex practice, schema authority should come from these schema
notes rather than from convenient prose summaries elsewhere.

If a trace artifact names one of these schemas, that schema should guide how
the artifact is read.

Support schemas should not be silently collapsed into parent continuity. For
example, relation targets, payload references, privacy boundaries, consent
statements, validation methods, and traversal inputs can all matter without
becoming `Parent Trace`.

## Provenance And Continuity

These schema notes are especially concerned with keeping these signals
separate:

- `Parent Trace`
- `Origin`
- declared capability metadata
- current schema identity
- current artifact summary
- relation targets
- validation method scope
- runtime executor context
- privacy, consent, and redaction boundaries
- traversal candidate space and verifier boundary
- integrity relation

That separation matters because provenance problems often begin when one system
stores all of those meanings in one opaque layer that later readers cannot
inspect directly.
