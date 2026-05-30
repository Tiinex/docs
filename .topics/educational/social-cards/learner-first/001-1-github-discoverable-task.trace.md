# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-30 04:35:00
  - Trace: [001.trace.md](001.trace.md)
  - Origin:
    - [relative](001.trace.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/educational/social-cards/learner-first/001.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.task.v1.md)
  - Created At: 2026-05-30 05:05:00
  - Authors: Anchor
  - Why: Defines the first GitHub-discoverable leaf task for the learner-first social cards line so ChatGPT can browse the committed origins and complete a bounded first pass without direct clarification questions.
  - Summary: Task for one-sweep GitHub-discoverable work in the learner-first social cards leaf.

---

# Learner-First Social Cards GitHub Discoverable Task

## Objective

Prepare one social-card brief or card family direction for learners with limited prior context inside the short-form educational social card work
line.

The task should be discoverable through GitHub tooling and specific enough that
ChatGPT can take the whole leaf in one sweep without direct clarification
questions.

## Grounding

- Local Repo Front Door
  - Origin:
    - [relative](../../../../README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/README.md)
- Local Schema Front Door
  - Origin:
    - [relative](../../../.schemas/README.md)
    - [absolute](C:/Users/micro/Documents/Repos/Tiinex/docs/.topics/.schemas/README.md)
- Committed Educational Root
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/educational/001.trace.md)
- Committed Leaf Topic
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/educational/social-cards/learner-first/001.trace.md)
- Committed Branch Handoff Pattern
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/educational/social-cards/001-1-cloud-handoff.trace.md)
- Committed Base Role Pattern
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/educational/prompt-packs/001-2-lineage-base-role.trace.md)
- Committed Schema Pattern
  - Origin:
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.continuation.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.task.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/README.md)

## Receiver And Medium Contract

- medium invariant: short-form educational social card work
- named receiver: learners with limited prior context
- success condition: one short-form direction that carries a real teaching point for the named receivers

## One-Sweep Work Rules

- browse the listed committed origins before deciding the output
- do not ask direct clarification questions unless the listed sources conflict materially or a referenced file is missing
- if some detail is still underspecified after browsing, choose the narrowest assumption that preserves the parent leaf and branch invariants
- make assumptions explicit in the returned material instead of hiding them
- keep the output bounded enough that later evidence, feedback, or decision artifacts can attach cleanly

## Required Output

Return one bounded first-pass deliverable for this exact leaf.

The deliverable should include:

- one concrete proposal, brief, packet, sequence, or critique surface that fits this leaf
- a short assumptions block tied to the browsed origins
- a short risks block naming the most likely failure modes
- a clear next attachment point for local evidence, feedback, or decision work

## Acceptance Criteria

- the result fits the named receiver directly, not only the broader branch
- the result preserves continuity and can be attached back into local lineage
- the result is specific enough that a human can approve, reject, or critique it against this exact leaf
- the result does not require direct follow-up questioning just to become actionable

## Non-Goals

- do not treat the first pass as auto-approved canon
- do not widen to a different audience just because that feels easier
- do not ignore commit-pinned GitHub origins when they are listed here

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [001.trace.md](001.trace.md)
  - Value: hzNeZtjR60Nx-LArWQbmuzkCnUEsGL1yoN6XpyDXB9Q
