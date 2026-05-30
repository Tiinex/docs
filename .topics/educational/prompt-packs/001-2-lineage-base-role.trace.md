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
  - Created At: 2026-05-30 04:00:00
  - Authors: Anchor
  - Why: Defines the first bounded task for inventing a neutral lineage-understanding base role that can later serve as a project preprompt in ChatGPT and as a shared grounding layer in VS Code.
  - Summary: Task for preparing a neutral lineage base-role packet that can mature into a cross-surface preprompt.

---

# Lineage Base Role Task

## Objective

Prepare a neutral base-role packet whose main job is to understand Tiinex
lineage correctly before any specialized sub-role begins acting.

The intended role is not a domain expert first.

The intended role is a lineage reader first.

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
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.task.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.evidence.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.feedback.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.decision.v1.md)
- Committed Trace Pattern
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/rfc/001.trace.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/riksarkivet/001.trace.md)

## Requested Work

- define the minimum neutral role discipline needed to read Tiinex lineage correctly
- keep parent trace, origin, schema identity, summary, and integrity distinct
- make the packet usable as a candidate preprompt in ChatGPT projects and as shared grounding in VS Code
- keep specialized domain behavior out of the base role so later roles can become sub-roles rather than competing foundations

## Required Base Role Behaviors

- read the continuity envelope before the body
- identify current schema before interpreting freeform prose
- keep `Parent Trace` separate from `Origin`
- avoid overclaiming validation, provenance, or continuity certainty
- treat schema notes as primary authority for artifact interpretation
- prefer narrower claims when evidence is partial

## Done Criteria

- the base-role packet names the minimum lineage-reading discipline clearly
- the packet is neutral enough to precede specialized roles
- the packet can travel between ChatGPT project use and VS Code use without losing its main function
- the next step for promotion into an actual preprompt or agent file is explicit

## Scope And Non-Goals

- in scope: neutral lineage-reading discipline
- in scope: candidate shared base layer for later specialized sub-roles
- out of scope: one fixed final role for every Tiinex domain
- out of scope: hiding lineage logic inside domain-specific operator behavior

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [001.trace.md](001.trace.md)
  - Value: kWn9sqdCvMI076yHfU4nBDaW3DU-KQljul0wZ3-4M_s