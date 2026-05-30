# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-30 03:42:00
  - Trace: [001.trace.md](001.trace.md)
  - Origin:
    - [relative](001.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/visual-explainers/001.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.task.v1.md)
  - Created At: 2026-05-30 03:50:00
  - Authors: Anchor
  - Why: Defines the first bounded Cloud ChatGPT handoff for concept-first educational visual explainers so DALL-E can attempt one explainer image with lineage-aware grounding.
  - Summary: Task for preparing a Cloud ChatGPT handoff packet for concept-first educational visual explainer generation.

---

# Cloud Visual Explainer Handoff Task

## Objective

Prepare one bounded handoff packet that lets Cloud ChatGPT read committed repo
context and generate one educational visual explainer that clarifies a concept
without depending on a full slide deck.

## Grounding

- Local Repo Front Door
  - Origin:
    - [relative](../../../README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/README.md)
- Local Schema Front Door
  - Origin:
    - [relative](../../.schemas/README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/.schemas/README.md)
- Committed Schema Pattern
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.continuation.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.task.v1.md)
- Committed Trace Pattern
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/rfc/001.trace.md)

## Requested Work

- define one concept-centered visual target that teaches through image rather than deck layout
- preserve enough lineage and provenance language that later evidence or critique can attach cleanly
- keep the request narrow enough that Cloud ChatGPT can try one DALL-E path without improvising the whole educational direction

## Done Criteria

- the handoff names one concept and one explainer image target clearly
- the handoff includes committed browseable pattern references
- the task leaves a clear next step for attaching generated material back into local lineage

## Scope And Non-Goals

- in scope: one bounded explainer-image handoff
- out of scope: full curriculum, final educational canon, or permanent style policy

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [001.trace.md](001.trace.md)
  - Value: 0D-S8PchyebnQE4Irtp3HbN2w4h5wjpqwBUacZizLVE