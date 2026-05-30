# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-30 03:42:00
  - Trace: [001.trace.md](001.trace.md)
  - Origin:
    - [relative](001.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/prompt-packs/001.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.task.v1.md)
  - Created At: 2026-05-30 03:50:00
  - Authors: Anchor
  - Why: Defines the first bounded Cloud ChatGPT handoff for reusable educational prompt packs so one portable generation packet can be assembled with lineage-aware grounding.
  - Summary: Task for preparing a reusable educational prompt-pack handoff for Cloud ChatGPT.

---

# Cloud Prompt Pack Handoff Task

## Objective

Prepare one reusable prompt-pack style handoff that Cloud ChatGPT can use to
attempt a bounded educational DALL-E generation while preserving lineage and
review context.

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

- bundle prompt, grounding links, constraints, and review notes into one reusable handoff packet
- keep the packet portable between ChatGPT project use and local repo-based continuation
- preserve enough pattern information that the cloud model can browse committed examples and infer the lineage style

## Done Criteria

- the packet is reusable beyond one single image ask
- the packet includes committed browse + git pattern references
- the next step for evidence capture or critique is explicit

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [001.trace.md](001.trace.md)
  - Value: OsnMObzr-isnO0ZzRfDOwO0mux8xCQ36dQ4zF87xk8I