# Tiinex/docs

Tiinex/docs contains the Markdown schemas, examples, topics, trace artifacts, policies, and documentation used to describe Tiinex artifacts and lineages. Tiinex itself is the broader continuity system: a way to save AI-assisted work as readable files that preserve what happened, where it came from, and how to continue later.

## What This Repo Is

This repository is the documentation and artifact source for Tiinex.

It is where Tiinex schemas, trace artifacts, topic material, policy notes, and related documentation live in readable form.

It is not the whole Tiinex project.
It is not the public org identity.
It is not the only viewer or tool surface.

If you want the plain project-level introduction, start with the org profile repo.
If you want the artifact and schema material itself, this repo is one of the main places to read it.

## What Tiinex Is, In Plain Terms

Tiinex is a way to save AI-assisted work as readable files that people own.
Those files can explain what happened, where the material came from, what the work follows from, what changed, and how another human or model could continue later.

The goal is not to hide work inside one app, one model, one chat history, or one platform.
The goal is to keep work inspectable, recoverable, portable, and honest about its limits.

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

Most Tiinex artifacts are ordinary Markdown files with explicit continuity structure.

When reading one, look for:

- what kind of artifact it says it is
- what root boundary it declares
- what parent it follows from
- what origin grounds its material
- what changed, concluded, or remained uncertain
- what the stated limits are

Read the artifact itself before assuming the path tells the whole story.
Directory layout helps navigation, but the artifact carries the actual declared meaning.

## Core Terms

- Artifact: a readable Markdown record of some work, claim, decision, context, evidence, or continuation.
- Root: the starting authority or boundary for a lineage.
- Parent: the declared continuity edge that says what an artifact follows from.
- Origin: where the material came from or what grounds it.
- Transition: how one artifact became the next.
- Workspace: a view over artifacts and sources, not the whole project.
- Handoff: enough context for another human or model to continue without guessing.

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

The docs repo tries to preserve those distinctions instead of flattening them into one vague concept.

## Docs vs Site vs Org

- `Tiinex/.github` is the org-level human entrypoint.
- `Tiinex/docs` is the schema, artifact, topic, and documentation source.
- `Tiinex/site` or other viewer surfaces are presentation layers, not the whole project identity.

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
