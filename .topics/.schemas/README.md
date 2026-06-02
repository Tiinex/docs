# Tiinex Schemas

This folder contains the human-readable schema notes that define how Tiinex
artifacts and declared support surfaces should be interpreted.

These schemas are designed to make provenance, lineage, continuity, and
artifact role legible without requiring custom binary formats or opaque hidden
metadata.

## Why These Schema Notes Matter

Without schema guidance, a markdown artifact can be read too loosely.

A reader or language model may otherwise blur together:

- parent trace versus origin
- topic versus decision
- evidence versus feedback
- task versus broad design discussion
- local readability versus actual validated continuity

The schema notes exist to reduce that ambiguity.

## Key Schemas

- [tiinex.continuation.v1.md](tiinex.continuation.v1.md): continuity envelope
  above the main artifact body
- [tiinex.topic.v1.md](tiinex.topic.v1.md): working topic and design-thread
  artifacts
- [tiinex.task.v1.md](tiinex.task.v1.md): bounded work items with constraints,
  done criteria, and optional subtasks
- [tiinex.evidence.v1.md](tiinex.evidence.v1.md): preserved supporting material
  with provenance and fidelity limits
- [tiinex.feedback.v1.md](tiinex.feedback.v1.md): interaction-shaped signal with
  source, target, and disposition
- [tiinex.decision.v1.md](tiinex.decision.v1.md): landed decisions and what now
  governs
- [tiinex.pointer.v1.md](tiinex.pointer.v1.md): thin continuity redirects toward
  an upstream trace or origin

## Supporting Schemas

- [tiinex.schema.v1.md](tiinex.schema.v1.md): shared contract for schema notes
  themselves
- [tiinex.signal.v1.md](tiinex.signal.v1.md): signal-bearing artifacts where
  interaction semantics are weaker than feedback
- [tiinex.capability.v1.md](tiinex.capability.v1.md): capability manifests for
  runtimes, viewers, validators, and related support surfaces
- [tiinex.runtime.v1.md](tiinex.runtime.v1.md)
- [tiinex.ai.runtime.v1.md](tiinex.ai.runtime.v1.md)
- [tiinex.machine.runtime.v1.md](tiinex.machine.runtime.v1.md)
- [tiinex.reduction.v1.md](tiinex.reduction.v1.md)
- [tiinex.archive.v1.md](tiinex.archive.v1.md)
- [tiinex.zip.v1.md](tiinex.zip.v1.md)
- [tiinex.encrypted.v1.md](tiinex.encrypted.v1.md)
- [tiinex.broken.v1.md](tiinex.broken.v1.md)

## Reading Guidance

In current Tiinex practice, schema authority should come from these schema
notes rather than from convenient prose summaries elsewhere.

If a trace artifact names one of these schemas, that schema should guide how
the artifact is read.

## Provenance And Continuity

These schema notes are especially concerned with keeping these signals
separate:

- `Parent Trace`
- `Origin`
- declared capability metadata
- current schema identity
- current artifact summary
- integrity relation

That separation matters because provenance problems often begin when one system
stores all of those meanings in one opaque layer that later readers cannot
inspect directly.