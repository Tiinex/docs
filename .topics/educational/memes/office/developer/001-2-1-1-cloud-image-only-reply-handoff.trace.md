# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/1ef3a742d1403c13ce66a586abb9435d24a09774/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.feedback.v1](https://github.com/Tiinex/docs/blob/1ef3a742d1403c13ce66a586abb9435d24a09774/.topics/.schemas/tiinex.feedback.v1.schema.md)
  - Created At: 2026-05-30 17:48:00
  - Trace: [001-2-1-reddit-automoderator-prompt-request.trace.md](001-2-1-reddit-automoderator-prompt-request.trace.md)
  - Origin:
    - [relative](001-2-1-reddit-automoderator-prompt-request.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/memes/office/developer/001-2-1-reddit-automoderator-prompt-request.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/1ef3a742d1403c13ce66a586abb9435d24a09774/.topics/.schemas/tiinex.task.v1.schema.md)
  - Created At: 2026-05-30 17:52:00
  - Authors: Anchor
  - Why: Converts the moderator feedback into a one-shot Cloud ChatGPT handoff that only asks for a new image-generation pass and prompt-side disclosure material, leaving evidence mapping and trace authoring to Anchor afterward.
  - Summary: Task for Cloud ChatGPT to generate one image-focused follow-up packet for the local-lineage meme without writing trace files or repo lineage.

---

# Cloud Image-Only Reply Handoff Task

## Objective

Prepare one bounded one-shot handoff for Cloud ChatGPT that only generates one image-focused follow-up packet for the local-lineage meme and the prompt-side disclosure needed to answer the moderator request.

## Exact Scope

- source feedback: [001-2-1-reddit-automoderator-prompt-request.trace.md](001-2-1-reddit-automoderator-prompt-request.trace.md)
- governing artifact: [001-2-local-lineage-vs-cloud-reliance-meme.trace.md](001-2-local-lineage-vs-cloud-reliance-meme.trace.md)
- allowed output mode: image-generation support only

## Grounding

- Local Repo Front Door
  - Origin:
    - [relative](../../../../../README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/README.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/1ef3a742d1403c13ce66a586abb9435d24a09774/README.md)
- Exact Leaf Topic
  - Origin:
    - [relative](001.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/memes/office/developer/001.trace.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/d73cb77fd58e87ef4d925424517f6935934ffef2/.topics/educational/memes/office/developer/001.trace.md)
- Existing Evidence Artifact
  - Origin:
    - [relative](001-2-local-lineage-vs-cloud-reliance-meme.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/memes/office/developer/001-2-local-lineage-vs-cloud-reliance-meme.trace.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/d73cb77fd58e87ef4d925424517f6935934ffef2/.topics/educational/memes/office/developer/001-2-local-lineage-vs-cloud-reliance-meme.trace.md)
- Feedback Artifact
  - Origin:
    - [relative](001-2-1-reddit-automoderator-prompt-request.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/memes/office/developer/001-2-1-reddit-automoderator-prompt-request.trace.md)
- Local Schema Front Door
  - Origin:
    - [relative](../../../../.schemas/README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/.schemas/README.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/1ef3a742d1403c13ce66a586abb9435d24a09774/.topics/.schemas/README.md)

## One-Shot Work Rules

- create only one new image concept or one replacement-image prompt packet for this exact meme problem
- do not write or propose `.trace.md` artifacts, repo edits, or lineage bookkeeping
- do not claim to have mapped evidence, feedback, or final provenance; Anchor will do that afterward
- treat the task as image-generation support plus prompt disclosure only
- if the provided GitHub origins are reachable, read them for context; if not, rely on the pasted trace contents without inventing missing source
- preserve the core local-lineage-versus-cloud-failure joke unless a small change is needed to make the moderator-facing prompt disclosure cleaner
- keep the response bounded enough that a human can paste it directly into Cloud ChatGPT in one shot

## Required Output

Return exactly one bounded packet containing:

- one image-generation prompt for a revised or follow-up meme image
- one short disclosure block that a human could post as the moderator reply about how the image was generated
- one short assumptions block
- one short risks block

## Acceptance Criteria

- the packet is usable as a single Cloud ChatGPT handoff without extra repo explanation
- the packet does not attempt to write trace files or invent lineage operations
- the output stays on one image-generation slice rather than branching into multiple options or process trees
- the disclosure text is concrete enough to satisfy the moderator request better than the current state

## Non-Goals

- do not produce multiple image variants in this step
- do not author feedback, evidence, decision, or task traces
- do not mutate repository files
- do not widen into broader Reddit strategy, social copy, or publication planning beyond the narrow moderator reply need

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [001-2-1-reddit-automoderator-prompt-request.trace.md](001-2-1-reddit-automoderator-prompt-request.trace.md)
  - Value: IISNUxZD28CBp-j2_QnPpy_rWpsC9xk8WLMQEr23c9I