# Tiinex Adapters

Adapters describe boundary-crossing contracts.

They are not truth engines. They make crossings visible.

An adapter may be physical, social, procedural, digital, runtime-based, or mixed. The base adapter contract must remain readable without requiring software-specific knowledge. Digital transport details belong in digital adapter specializations or concrete digital adapters.

## Base Contracts

- [tiinex.v1.adapter.md](tiinex.v1.adapter.md) defines the base adapter contract.
- [tiinex.digital.v1.adapter.md](tiinex.digital.v1.adapter.md) defines the shared digital adapter contract for digital records, platforms, APIs, files, exports, sensors, media, archives, and runtime surfaces.

## Included Adapter Definitions

- [github.issue.discovery.v1.adapter.md](github.issue.discovery.v1.adapter.md) adapts visible GitHub issue material into Tiinex discovery findings without treating findings as evidence, feedback, tasks, or preservation automatically.
- [github.discussion.discovery.v1.adapter.md](github.discussion.discovery.v1.adapter.md) adapts visible GitHub discussion material into Tiinex discovery findings using the same GitHub origin boundary.

## Reading Rules

- Adapter output is not truth.
- Accessed material is not automatically preserved material.
- Temporarily held material is not automatically preserved material.
- Discovery findings are not automatically evidence, feedback, tasks, resource needs, pointers, consent, validation, or authority.
- `Use as` or another explicit interpretation action is required when a user wants to create a stronger or different artifact type.
- Concrete implementations should keep source, access, temporary holding, preservation, interpretation, and write boundaries visible.

## Relationship To Origins

Adapters may reference origin definitions such as GitHub, digital origin, or natural origin contracts. An origin explains where material may be encountered. An adapter explains how material crosses a boundary into Tiinex-compatible artifacts or candidates.