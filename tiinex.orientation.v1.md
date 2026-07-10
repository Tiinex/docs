# Tiinex Orientation v1

Tiinex keeps provenance readable in Markdown artifacts you own.

Provenance means the visible trail around a piece of material: where it came from, what changed, what it depends on, what limits apply, and what should not be inferred from it.

The goal is to make work inspectable, recoverable, portable, and honest about its boundaries without requiring one app, platform, private database, chat history, or runtime to explain what happened.

## Core Identity

Tiinex is artifact-first and provenance-first.

It is not one app.
It is not one viewer.
It is not one schema repo.
It is not one model provider.
It is not a general-purpose AI runtime.

It is a way to keep provenance and continuity visible through readable artifacts.

## Natural Provenance

Tiinex should not move provenance into a document that merely talks about the artifact.

The artifact itself, and the material around it, should make the provenance trail easier to inspect.

That trail may include:

- what the material is
- where it came from
- what it depends on
- what changed
- what evidence or source boundary exists
- what policy or consent boundary applies
- what should not be inferred
- what remains uncertain

## What Tiinex Preserves

Tiinex artifacts can preserve:

- context
- claims
- decisions
- evidence
- traces of work
- source boundaries
- policy and consent boundaries
- continuity state
- transition notes

The exact file type can vary, but the artifact should remain readable without requiring hidden application state.

## Continuity Model

Tiinex uses several distinct concepts on purpose.

- Root: the starting authority or boundary for a lineage.
- Parent: what this artifact directly follows from.
- Origin: where the material came from or what grounds it.
- Transition: how one artifact became the next.
- Policy: explicit boundaries around use, consent, attribution, interpretation, or continuation.
- Workspace: a view over artifacts and sources, not the whole project.

These concepts must not be collapsed into one generic link idea, because they answer different questions.

## AI / LLM Boundary

AI and LLM workflows are important use cases and pressure tests for Tiinex.

They are not the identity boundary of the project.

Do not describe Tiinex as an AI runtime, agent framework, or LLM handoff product unless the specific repo or artifact explicitly implements that behavior and is current.

## Non-Goals

Tiinex is not:

- an autonomous agent that should replace humans
- a hidden memory layer that keeps the real context somewhere opaque
- a claim that every artifact is complete or correct
- a promise that one repo or one UI represents the whole system
- a claim that every Markdown file is a Tiinex artifact

Tiinex should make limits easier to see, not easier to hide.

## Ecosystem Shape

Historically or experimentally, Tiinex has explored surfaces such as:

- schemas and examples
- provenance tooling
- lineage traversal
- VS Code workflows
- viewer and receiver surfaces
- AI and LLM workflow experiments

Current grounding is listed separately below.
None of those alone defines all of Tiinex.

## Docs Repo Boundary

`Tiinex/docs` is one important repository in the ecosystem.

It is a source of schemas, examples, traces, topics, policies, and documentation.

It should not be mistaken for the whole Tiinex project or for the only public presentation layer.

## Current Public Grounding

The public surfaces that should currently be treated as grounded are:

- `docs` for schemas, artifacts, policy material, topics, and semantics
- `site` for the current public viewer and reference implementation
- `ai-provenance` only for validator, linting, and provenance pieces that are still current, and only with local verification of the specific part

Other repositories may be historical, experimental, private-in-practice, or stale and should not be treated as current without revalidation.

## Stable Reading

If someone asks "What is Tiinex?", the bounded answer is:

Tiinex keeps provenance readable in Markdown artifacts you own: where material came from, what changed, what it depends on, what limits apply, and what should not be inferred from it.
