# Tiinex Docs

This repository is a public documentation surface for Tiinex continuity,
provenance, lineage, and recoverable markdown workflows.

The core idea is simple:

- preserve relationships between artifacts over time
- keep those relationships readable without requiring one specialized runtime
- separate `Parent Trace`, `Origin`, schema identity, and integrity instead of
  flattening them into one vague metadata layer

## What You Can Find Here

- [.topics/README.md](.topics/README.md): topic-oriented trace artifacts and
  continuity roots
- [.topics/.schemas/README.md](.topics/.schemas/README.md): human-readable
  schema notes for Tiinex artifact types, support surfaces, validation and
  relation primitives, runtime families, privacy and disclosure boundaries, and
  traversal-oriented runtime artifacts

## Why This Repo Exists

Many provenance problems appear when relationships between observations,
evidence, decisions, tasks, and later follow-up are preserved only inside one
tool, one database, or one vendor-specific workflow.

Tiinex explores a markdown-first alternative where a reader can still inspect:

- what an artifact currently is
- which parent trace it directly continues
- what external or upstream origin grounded it
- which schema governs the current reading
- what integrity relation has been checked

## Important Terms

- `Parent Trace`: the direct continuity relation to the prior trace step
- `Origin`: the best known bounded reconstruction entrypoint or upstream
  grounding source
- `Lineage`: the readable chain formed by trace artifacts over time
- `Continuity`: the envelope and integrity discipline that help later readers
  continue work without guessing
- `Schema`: the artifact contract that tells a reader whether something is a
  topic, task, evidence, feedback, decision, pointer, runtime artifact, support
  artifact, relation, validation method, privacy boundary, traversal result, or
  another Tiinex type

## Good Entry Points

If you are trying to understand Tiinex provenance or lineage thinking, start
here:

- [.topics/.schemas/tiinex.root.v1.schema.md](.topics/.schemas/tiinex.root.v1.schema.md)
- [.topics/.schemas/tiinex.topic.v1.schema.md](.topics/.schemas/tiinex.topic.v1.schema.md)
- [.topics/.schemas/tiinex.task.v1.schema.md](.topics/.schemas/tiinex.task.v1.schema.md)
- [.topics/.schemas/tiinex.evidence.v1.schema.md](.topics/.schemas/tiinex.evidence.v1.schema.md)
- [.topics/.schemas/tiinex.decision.v1.schema.md](.topics/.schemas/tiinex.decision.v1.schema.md)
- [.topics/.schemas/tiinex.feedback.v1.schema.md](.topics/.schemas/tiinex.feedback.v1.schema.md)
- [.topics/.schemas/tiinex.pointer.v1.schema.md](.topics/.schemas/tiinex.pointer.v1.schema.md)
- [.topics/.schemas/tiinex.relation.v1.schema.md](.topics/.schemas/tiinex.relation.v1.schema.md)
- [.topics/.schemas/tiinex.validation.method.v1.schema.md](.topics/.schemas/tiinex.validation.method.v1.schema.md)
- [.topics/.schemas/tiinex.traversal.runtime.v1.schema.md](.topics/.schemas/tiinex.traversal.runtime.v1.schema.md)

## Current Topic Spaces

- [.topics/rfc](.topics/rfc)
- [.topics/riksarkivet](.topics/riksarkivet)
- [.topics/kickstarter](.topics/kickstarter)
- [.topics/task-origins](.topics/task-origins)

## Reading Note

These files are intentionally optimized for both humans and language models.

They are not meant to hide provenance inside opaque metadata. They are meant
to keep parent, origin, schema, and continuity explicit enough that later
readers can reconstruct what happened and why.
