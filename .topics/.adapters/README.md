# Tiinex Adapters

This directory contains reusable adapter definitions.

A Tiinex adapter is a specialized interface-tool that carries material, meaning, signal, or state across a source boundary into Tiinex-compatible artifacts or candidates. It may be digital, physical, procedural, social, instrument-based, nature-facing, runtime-based, or mixed.

Adapters are not truth engines. They make crossings visible.

## Base Contracts

- [tiinex.v1.adapter.md](tiinex.v1.adapter.md) defines the base adapter contract.
- [tiinex.digital.v1.adapter.md](tiinex.digital.v1.adapter.md) defines the shared digital adapter contract for digital records, platforms, APIs, files, exports, sensors, media, archives, and runtime surfaces.

## Included Adapter Definitions

- [github.issue.discovery.v1.adapter.md](github.issue.discovery.v1.adapter.md) defines a read-only digital adapter for GitHub issue and comment discovery.
- [github.discussion.discovery.v1.adapter.md](github.discussion.discovery.v1.adapter.md) defines a read-only digital adapter for GitHub discussion and discussion-comment discovery.

## Relationship To Tools And Interfaces

```text
Tool
└─ Interface
   └─ Adapter
      └─ Digital Adapter
         ├─ GitHub Issue Discovery Adapter
         └─ GitHub Discussion Discovery Adapter
```

This means every adapter is a tool and an interface, but not every tool or interface is an adapter. A spade can be a tool. A map can be an interface. A field notebook intake procedure can be an adapter. A camera trap workflow, public forum intake, GitHub issue adapter, Reddit thread adapter, professional-network post adapter, or sensor-log intake can be a digital adapter when the crossing happens through digital records.

## Core Adapter Rules

- Accessed material is not automatically preserved material.
- Operationally held or cached material is not automatically preserved material.
- Digital material about nature is not the natural event itself.
- Digital material about a person or group is not identity, consent, intent, authority, or representative truth by itself.
- Discovery findings are not automatically feedback, tasks, evidence, resource needs, pointers, consent, acceptance, validation, or truth claims.
- Stronger use requires explicit interpretation, such as `Use as` or `Create from finding`.
- Unavailable targets should remain visible as gaps when their identity is known.


## Relationship To Origins

Adapters should reference reusable origin definitions when the source-side boundary matters. For example, GitHub issue and discussion adapters should reference `github.v1.origin.md` instead of hiding GitHub-specific assumptions inside implementation code. Future Reddit, LinkedIn, document-store, field-camera, sensor, and archive adapters can do the same with their own origin definitions.