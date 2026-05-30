# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-30 03:20:00
  - Trace: [001.trace.md](001.trace.md)
  - Origin:
    - [relative](001.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/slides/001.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.task.v1.md)
  - Created At: 2026-05-30 03:24:00
  - Authors: Anchor
  - Why: Defines the first bounded handoff task for Cloud ChatGPT so slide-oriented DALL-E generation can be grounded in committed repo context instead of improvised from one prompt alone.
  - Summary: Task for preparing the first Cloud ChatGPT handoff packet for educational slide image generation.

---

# Cloud Slide Handoff Task

## Objective

Prepare one bounded handoff packet that lets Cloud ChatGPT read the committed
repository context and generate DALL-E material that fits the educational slide
lineage.

The current task is to structure the handoff well.

The current task is not to declare the generated image good by default.

## Grounding

- Repo Front Door
  - Origin:
    - [relative](../../../README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/README.md)
- Schema Front Door
  - Origin:
    - [relative](../../.schemas/README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/.schemas/README.md)

## Requested Work

- define the visual target in language that a cloud model can execute without
  needing the whole repo restated manually
- point the handoff toward the most relevant committed repo entrypoints
- keep provenance, lineage, and current slide purpose legible enough that the
  generated image can later be attached back to local evidence or feedback
- keep room for human review before any image is treated as a governing default

## Done Criteria

- the handoff names the target slide lineage clearly
- the handoff points to committed repo context rather than only local editor
  state
- the handoff is narrow enough that later generated outputs can be judged
  against a specific request
- the task leaves a clear next step for attaching generated material back into
  local lineage

## Scope And Non-Goals

- in scope: first handoff structure for Cloud ChatGPT and DALL-E image work
- in scope: repo-grounded context and continuity-aware review framing
- out of scope: final image selection, permanent visual policy, or retroactive
  rewriting of the root topic after each generation attempt

## Expected Next Children

- an evidence child preserving generated images, prompt pack, or other concrete
  returned material when that exists
- a feedback child if a review pass produces bounded critique
- a decision child if one visual direction becomes the preferred recurring
  slide pattern

## Risks

- cloud generation may drift into generic motivational imagery unless the
  handoff keeps the educational lineage specific
- generated material may look coherent while still missing the repo's parent,
  origin, and continuity distinctions
- a good-looking image may still need rejection if it does not actually serve
  the current slide lineage

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [001.trace.md](001.trace.md)
  - Value: 1DlMpuTBRExCkVBPpcTG6nLw4NZh9o64LaCdzkI3DpM