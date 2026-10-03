# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-02 20:42:48
  - Authors: Anchor
  - Why: Reduce LLM placement improvisation and make first-party workspace/project structure discoverable, reusable, and maintainable.
  - Summary: Define the structural-scaffolding contract and deterministic workspace-layout boundary across Tiinex.
  - Status: ready/local

---

# Structural Scaffolding And Workspace Layout

## Objective

Define the smallest Tiinex semantic contract and implementation boundary for structural scaffolding across the multi-Workspace project so directory roots, domain placement, filenames, and generated native building blocks can be projected deterministically instead of improvised by each LLM or host.

The work must preserve the existing separation: Docs owns semantic contracts, Core owns host-neutral mechanics, Native owns first-party qualified content, and hosts consume Core/Native projections.

## Done Criteria

- the existing Workspace, Schema Generation, Transition Definition, Reduction, lineage traversal, and Workspace initialization surfaces are reconciled against the structural-scaffolding need
- the design distinguishes filesystem/directory structure from artifact body generation and from transition lifecycle/placement
- the minimum new contract, if any, is identified through Schema Development rather than invented directly in Core or Native
- the intended Native responsibility and merge-friendly source layout are explicit without freezing an unqualified taxonomy
- a first-party default scaffold can be represented as qualified Native material without making Native schema authority
- Core can project a scaffold plan without silently mutating source or inventing placement
- a small dogfood Workspace can be scaffolded and qualified from the same plan used by hosts
- Reduction/lifecycle semantics remain separate from scaffold semantics

## Scope

In scope:

- multi-Workspace directory grammar
- workspace/repository structural scaffold semantics
- artifact placement boundaries
- composition with schema generation and transition placement
- Native first-party scaffold representation
- Core plan/projection mechanics
- representative dogfood and qualification

Out of scope for this task:

- bulk migration of existing historical `.topics` trees
- destructive Reduction or deletion
- moving all existing native Entries/Transitions out of Core/App
- designing a new workflow engine
- replacing schema generation with filesystem templating
- host-specific UX beyond consuming a qualified Core projection

## Dependencies

- carrier Major 014 as the bounded multi-Workspace baseline
- `tiinex.workspace.v1`
- `tiinex.schema.generation.v1`
- `tiinex.transition.definition.v1`
- `tiinex.reduction.v1`
- Docs-local Tiinex Schema Development process
- `native` Workspace as the first-party qualified content boundary

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 5q96XgwBSxPRpD-g8873snwXTB3dBjoRsVIlVfF_DsA