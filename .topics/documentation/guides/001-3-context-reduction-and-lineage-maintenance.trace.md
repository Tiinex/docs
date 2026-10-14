# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-14 00:30:24
  - Trace: [001-guides.trace.md](001-guides.trace.md)
  - Origin:
    - [relative](001-guides.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-14 00:30:52
  - Authors: ChatGPT
  - Why: Teach concise, source-verifiable reduction without replacing the maintained reduction schema and validation companion.
  - Summary: Keep small carry-forward summaries tied to recoverable source identity and honest loss reporting.
  - Status: ready/local

---

# Context Reduction and Lineage Maintenance

As work grows, reading every old discussion and file becomes wasteful. Tiinex calls the act of making a **smaller, accountable working account of larger material** a Reduction.

A Reduction should help the next reader move forward **without pretending that anything omitted is still fully known**.

## What a good Reduction answers

- **Source Context:** What exact fuller material was reduced, and how can it be found again?
- **Carry-Forward State:** What still matters for the next work session?
- **Loss And Uncertainty:** What was left out, compressed, unverified, or unresolved?
- **Validation:** What was checked, by what method, and what remains unproven?

Those are the maintained section names of the current [`tiinex.reduction.v1`](../../.schemas/reduction/tiinex.reduction.v1.schema.md) contract, not an alternate local format. Consult that schema and its validation companions before authoring. When qualified published trace sources exist, record their individual immutable links and declared integrity values rather than a vague directory or paraphrased history. Use the schema's actual supported convention for unpublished carried sources; don't invent a Git URL.

## Do less, not less accurately

Write short, specific carry-forward state. Link to detailed Evidence rather than embedding hundreds of file records in the Reduction itself. Each round of summarization is a new reduction event with its own source identity and loss accounting; a later summary does not erase unresolved loss in an earlier one.

## Reduction is not deletion

An ordinary qualified Reduction **does not authorize destructive removal** of the underlying lineage. Destructive-lineage eligibility has a separate maintained companion validation contract, and even an eligible result is not permission to delete. Human/organizational authority still matters.

## When to use it

Use Reduction after meaningful accumulated history, a major handover or a context-size problem. Do not create one for every message. Prefer recoverable, readable state over compression for its own sake.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-guides.trace.md](001-guides.trace.md)
  - Value: c-sDPJitsVEuQDZ5pONI9ETdtCFdRQbtj-Go7CVFPRA

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: LCVEDT-NDYyb9IZaxWBwf-cMbaMDMpU1z39XuJtpKTc