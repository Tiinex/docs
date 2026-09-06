# Tiinex/docs Context v1

This file is a self-contained orientation pack for a human reader or an LLM that does not follow links.

## Short Answer

Tiinex/docs is the repository that holds Tiinex schemas, trace artifacts, topics, examples, policy notes, and related documentation in readable Markdown form.

Tiinex itself keeps provenance readable in Markdown artifacts you own: where material came from, what changed, what it depends on, what limits apply, and what should not be inferred from it.

## What Tiinex Is

Tiinex is a filesystem-native way to preserve provenance as inspectable artifacts.

An artifact can be a note, trace, decision, evidence record, schema note, policy note, source boundary, workspace entrypoint, or another readable Markdown file that carries bounded material forward.

Tiinex cares about whether a later reader can answer practical questions:

- What is this artifact for?
- Where did the material come from?
- What does it depend on?
- What does it follow from?
- What changed here?
- What are its limits?
- What should not be inferred from it?

## What Tiinex/docs Is

`Tiinex/docs` is the documentation and artifact repository inside the broader Tiinex ecosystem.

It contains Markdown schemas, examples, topics, trace artifacts, policy notes, and related documentation.

It is not the whole Tiinex project.
It is not the org identity surface.
It is not the only viewer or tool layer.

## What Tiinex Is Not

Tiinex is not only a public viewer.
Tiinex is not only schema documentation.
Tiinex is not an AI agent.
Tiinex is not a general-purpose AI runtime.
Tiinex is not a replacement for human judgment.
Tiinex is not a hidden memory service that asks readers to trust invisible state.

## AI / LLM Boundary

AI and LLM workflows are important use cases and pressure tests.

They are not the identity boundary of Tiinex.

Do not summarize Tiinex as an AI runtime, agent framework, or LLM handoff product unless a specific current repo or artifact explicitly implements that behavior.

## Core Semantics

- Artifact: a readable Markdown record of some work, claim, decision, source boundary, evidence, policy, or continuation state.
- Provenance: the visible trail around material: where it came from, what changed, what supports it, and what limits apply.
- Root: the starting authority or boundary for a lineage.
- Parent: the declared continuity edge that says what this artifact follows from.
- Origin: where the material came from or what grounds it.
- Transition: how one artifact became the next.
- Policy: explicit boundaries around use, consent, attribution, interpretation, or continuation.
- Workspace: a view over artifacts and sources, not the whole project.

These terms are separate because they describe separate responsibilities.
Parent is not generic source.
Origin is not the same thing as parent.

## Important Boundaries

- A schema describes artifact meaning. It is not the runtime.
- A validation method is not automatically proof of truth.
- A claim is not evidence.
- Evidence is not preservation.
- Breakthrough is not proof.
- Docs materials may be drafts, and status should be explicit.

## Practical Outcome

When Tiinex is working well, a later reader should be able to inspect an artifact and understand:

- the scope of the material
- the declared parent context
- the material origin
- what was changed or concluded
- what is still uncertain
- what limits or policies apply
- what should not be inferred

## Docs Repo Reading Order

For a first pass inside this repo, prefer this order:

1. `README.md`
2. `tiinex.orientation.v1.md`
3. `.topics/.schemas/README.md`
4. `LINEAGE_POLICY.md`
5. `releases/*` only when you need transient schema/status context

## Bounded Answer To "What Is Tiinex/docs?"

Tiinex/docs is the repository that holds Tiinex schemas, trace artifacts, topics, examples, policy notes, and related documentation in readable Markdown form.
