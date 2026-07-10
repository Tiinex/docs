# Tiinex Orientation v1

Tiinex preserves AI-assisted work as readable Markdown artifacts that people own.
Those artifacts are meant to stay useful after the original tool session is gone.
They should help a later reader see what happened, what the work depends on, where material came from, what changed, and what can be continued next.

## Core Identity

Tiinex is a filesystem-native approach to preserving AI-assisted work.

It is not one app.
It is not one viewer.
It is not one schema repo.
It is not one model provider.

It is a way to keep work inspectable, recoverable, portable, and bounded through readable artifacts.

## What Tiinex Preserves

Tiinex artifacts can preserve:

- context
- claims
- decisions
- evidence
- traces of work
- continuation state
- handoff material
- policy and boundary notes

The exact file type can vary, but the artifact should remain readable without requiring hidden application state.

## Continuity Model

Tiinex uses several distinct concepts on purpose.

- Root: the starting authority or boundary for a lineage.
- Parent: what this artifact directly follows from.
- Origin: where the material came from or what grounds it.
- Transition: how one artifact became the next.
- Workspace: a view over artifacts and sources, not the whole project.
- Handoff: enough context for another human or model to continue without guessing.

These concepts must not be collapsed into one generic link idea, because they answer different questions.

## Non-Goals

Tiinex is not:

- an autonomous agent that should replace humans
- a hidden memory layer that keeps the real context somewhere opaque
- a claim that every artifact is complete or correct
- a promise that one repo or one UI represents the whole system

Tiinex should make limits easier to see, not easier to hide.

## Ecosystem Shape

Different repositories may emphasize different parts of the work, such as:

- schemas and examples
- provenance tooling
- lineage traversal
- VS Code workflows
- viewer and receiver surfaces

None of those alone defines all of Tiinex.

## Docs Repo Boundary

`Tiinex/docs` is one important repository in the ecosystem.
It is a source of schemas, examples, traces, topics, policies, and documentation.
It should not be mistaken for the whole Tiinex project or for the only public presentation layer.

## Stable Reading

If someone asks "What is Tiinex?", the bounded answer is:

Tiinex is a way to save AI-assisted work as readable Markdown files that explain where the work came from, what it follows from, what changed, and how it can be continued later.