# Tiinex Origins

This directory contains reusable origin definitions.

An origin is where material, signal, observation, context, or a claim may begin. It is not automatically truth, evidence, consent, identity, authority, or preservation.

## Current Origin Contracts

- [tiinex.origin.v1.md](tiinex.origin.v1.md) defines the base origin contract.
- [tiinex.digital.origin.v1.md](tiinex.digital.origin.v1.md) defines digital-origin boundaries for platforms, archives, documents, datasets, runtimes, records, and digital records of physical or natural contexts.
- [tiinex.natural.origin.v1.md](tiinex.natural.origin.v1.md) defines natural-origin boundaries for places, ecosystems, field sites, physical contexts, natural processes, observations, and samples.
- [github.v1.origin.md](github.v1.origin.md) defines the current GitHub origin boundary used by GitHub issue and discussion discovery adapters.

## Relationship To Tools, Interfaces, And Adapters

Origins are the source-side boundary. Tools, interfaces, and adapters approach origins.

```text
Origin
  ↕ approached through
Tool
└─ Interface
   └─ Adapter
      └─ Digital Adapter
```

A tool can help. An interface is where contexts meet. An adapter carries material, signal, or meaning across a boundary. An origin is the place, platform, environment, archive, community, repository, dataset, runtime, instrument context, or natural world context being approached.

## Core Origin Rules

- An origin is not proof.
- A digital record is not the represented subject.
- A natural observation is not the whole natural system.
- A public post is not consent, identity, intent, authority, or representative truth.
- A URL is not preservation.
- A platform response is not evidence by itself.
- A missing, private, unsafe, deleted, partial, or policy-scoped origin state should remain visible as a gap.
- Concrete adapters should reference origin definitions instead of hiding source assumptions in code.

## Future Origin Examples

Future origins may include Reddit, LinkedIn, other public web communities, document stores, local folders, chat exports, camera traps, sensor networks, field sites, lab benches, archives, institutions, or ecological observation sites.