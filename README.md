# Tiinex/docs

Tiinex/docs contains the schemas, examples, topics, trace artifacts, policies, and documentation used to describe Tiinex artifacts and lineages.

Tiinex itself keeps provenance readable in Markdown artifacts you own: where material came from, what changed, what it depends on, what limits apply, and what should not be inferred from it.

For LLM/machine first contact, read [`llms.txt`](llms.txt) before deeper repository archaeology.

## What This Repo Is

This repository is the documentation and artifact source for Tiinex.

It is where Tiinex schemas, trace artifacts, topic material, policy notes, and related documentation live in readable form.

It is not the whole Tiinex project.
It is not the public org identity.
It is not the only viewer or tool surface.

If you want the plain project-level introduction, start with the org profile repo.
If you want the artifact and schema material itself, this repo is one of the main places to read it.

## What Tiinex Is, In Plain Terms

Tiinex keeps provenance readable in Markdown artifacts you own.

Provenance means the visible trail around material: where it came from, what changed, what it depends on, what limits apply, and what should not be inferred from it.

The goal is not to hide important context inside one app, one model, one chat history, one platform, or one private runtime.

The goal is to keep work inspectable, recoverable, portable, and honest about its boundaries.

## What This Repo Contains

This repo mainly contains:

- `.topics/.schemas/**` for Markdown schema notes
- `.topics/**` for trace artifacts, examples, ideas, educational material, and related documentation
- `LINEAGE_POLICY.md` for policy and consent/use boundaries around lineage material
- root-level orientation and context files for repo and LLM entry
- transient release and status notes under `releases/`

The docs repo is a source of schemas, examples, topics, traces, policies, and documentation.
It should not be mistaken for the entire Tiinex ecosystem.

## How To Read A Tiinex Artifact

Most Tiinex artifacts are ordinary Markdown files with explicit provenance and continuity structure.

When reading one, look for:

- what kind of artifact it says it is
- what root boundary it declares
- what parent it follows from
- what origin grounds its material
- what changed, concluded, or remained uncertain
- what the stated limits are
- what policy or consent boundary applies
- what should not be inferred from it

Read the artifact itself before assuming the path tells the whole story.
Directory layout helps navigation, but the artifact carries the actual declared meaning.

## Core Terms

- Artifact: a readable Markdown record of some work, claim, decision, source boundary, evidence, policy, or continuation state.
- Provenance: the visible trail around material: where it came from, what changed, what supports it, and what limits apply.
- Root: the starting authority or boundary for a lineage.
- Parent: the declared continuity edge that says what an artifact follows from.
- Origin: where the material came from or what grounds it.
- Transition: how one artifact became the next.
- Policy: explicit boundaries around use, consent, attribution, interpretation, or continuation.
- Workspace: a view over artifacts and sources, not the whole project.

These terms are separate on purpose.
Parent is declared continuity, not generic source.
Origin is grounding or provenance, not the same thing as parent.

## Important Boundaries

- A schema describes artifact meaning. It is not the runtime.
- A validation method is not automatically proof of truth.
- A claim is not evidence.
- Evidence is not preservation.
- Breakthrough is not proof.
- Docs materials may be drafts. Status should be explicit.
- AI and LLM workflows are use cases and pressure tests, not the identity boundary of Tiinex.

The docs repo tries to preserve those distinctions instead of flattening them into one vague concept.

## Docs vs Site vs Org

- `Tiinex/.github` is the org-level human entrypoint.
- `Tiinex/docs` is the schema, artifact, topic, and documentation source.
- `Tiinex/site` or other viewer surfaces are presentation layers, not the whole project identity.
- `Tiinex/ai-provenance` is only partially current and should be verified before treating broad claims as authoritative.

If you arrive here first, read this repo as a source library and artifact repository inside the broader Tiinex system.

## Where Release And Status Notes Live

Transient schema bundles, status snapshots, and release-shaped material belong under `releases/`.

If you want the transient index first, start with:

- `releases/README.md`

The previous root README schema-bundle content has been preserved at:

- `releases/schema-draft-v8.3.md`

That material may still be useful, but it should not define the stable first impression of `Tiinex/docs`.

## Canonical Next Reads

- `tiinex.orientation.v1.md`
- `tiinex.context.v1.md`
- `.topics/.schemas/README.md`
- `LINEAGE_POLICY.md`
- `releases/README.md`
- `releases/schema-draft-v8.3.md` for the preserved schema-bundle note
