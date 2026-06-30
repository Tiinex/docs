# Tiinex Docs

This repository is a public documentation surface for Tiinex continuity, provenance, lineage, and recoverable markdown workflows.

The core idea is simple:

- preserve relationships between artifacts over time
- keep those relationships readable without requiring one specialized runtime
- separate `Parent Trace`, `Origin`, schema identity, relation targets, preservation, validation, and integrity instead of flattening them into one vague metadata layer

## Batch Application Note

This copy-paste bundle is intended to be applied on top of the existing Tiinex/docs baseline. It includes the new and revised schema notes plus README surfaces touched by this schema batch. Some linked baseline files, such as root, topic, task, tool, interface, origin, digital adapter, resource, instrument, runtime, privacy, validator, and existing concrete adapter definitions, are expected to already exist in the repository.

## What You Can Find Here

- [.topics/README.md](.topics/README.md): topic-oriented trace artifacts and continuity roots
- [.topics/.schemas/README.md](.topics/.schemas/README.md): human-readable schema notes for Tiinex artifact types, support surfaces, and coordination semantics
- [.topics/.tools/](.topics/.tools/): reusable tool-definition artifacts
- [.topics/.interfaces/](.topics/.interfaces/): reusable interface-definition artifacts
- [.topics/.origins/](.topics/.origins/): origin-definition artifacts
- [.topics/.adapters/](.topics/.adapters/): adapter-definition artifacts
- [.topics/.validators/](.topics/.validators/): validation method definitions

## Why This Repo Exists

Many provenance problems appear when relationships between observations, sources, evidence, decisions, tasks, meetings, projects, resources, people, organizations, and later follow-up are preserved only inside one tool, one database, or one vendor-specific workflow.

Tiinex explores a markdown-first alternative where a reader can still inspect:

- what an artifact currently is
- which parent trace it directly continues
- what external or upstream origin grounded it
- which source, relation, party, resource, event, or project it references
- which schema governs the current reading
- what integrity relation has been checked
- what has merely been observed, accessed, held, preserved, interpreted, validated, or attested

## Important Terms

- `Parent Trace`: the direct continuity relation to the prior trace step
- `Origin`: a bounded place, surface, environment, person-facing context, natural system, platform, archive, repository, dataset, conversation surface, or other starting point where material may be encountered
- `Source`: a chosen, configured, or declared source used by a piece of work
- `Adapter`: a boundary-crossing contract that makes intake, translation, holding, preservation, output, and user-action limits visible
- `Lineage`: the readable chain formed by trace artifacts over time
- `Continuity`: the envelope and integrity discipline that help later readers continue work without guessing
- `Schema`: the artifact contract that tells a reader how to interpret the current artifact role
- `Party`: a bounded person, role, organization, group, or other actor reference without treating the reference as identity proof
- `Event`: something planned, occurring, occurred, missed, cancelled, deferred, or uncertain within a bounded time or context

## Good Entry Points

If you are trying to understand Tiinex provenance or lineage thinking, start here:

- [.topics/.schemas/tiinex.root.v1.schema.md](.topics/.schemas/tiinex.root.v1.schema.md)
- [.topics/.schemas/tiinex.topic.v1.schema.md](.topics/.schemas/tiinex.topic.v1.schema.md)
- [.topics/.schemas/tiinex.task.v1.schema.md](.topics/.schemas/tiinex.task.v1.schema.md)
- [.topics/.schemas/tiinex.preservation.v1.schema.md](.topics/.schemas/tiinex.preservation.v1.schema.md)
- [.topics/.schemas/tiinex.evidence.v1.schema.md](.topics/.schemas/tiinex.evidence.v1.schema.md)
- [.topics/.schemas/tiinex.source.v1.schema.md](.topics/.schemas/tiinex.source.v1.schema.md)
- [.topics/.schemas/tiinex.event.v1.schema.md](.topics/.schemas/tiinex.event.v1.schema.md)
- [.topics/.schemas/tiinex.project.v1.schema.md](.topics/.schemas/tiinex.project.v1.schema.md)
- [.topics/.schemas/tiinex.party.v1.schema.md](.topics/.schemas/tiinex.party.v1.schema.md)

## Reading Note

These files are intentionally optimized for both humans and language models.

They are not meant to hide provenance inside opaque metadata. They are meant to keep parent, origin, schema, source, party, resource, event, preservation, interpretation, validation, and continuity explicit enough that later readers can reconstruct what happened and why.