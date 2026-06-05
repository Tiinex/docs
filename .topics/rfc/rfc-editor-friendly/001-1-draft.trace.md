# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/0e6d169685d56c913cb890ba568a96b366ebd4bf/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-28 03:22:44
  - Trace: [001.trace.md](001.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-28 03:32:41
  - Summary: Title: Topic Start Format for Trace-Carried Work
  - Type: markdown

---
# Consolidated Draft

Title: Topic Start Format for Trace-Carried Work

Status: Experimental
Category: Informational
Project: Tiinex Continuity RFCs

---

## Abstract

This draft consolidates what the current lineage has already learned
about starting a topic cleanly.

The model keeps lineage primary, allows optional local policy and
process, and treats other support files as on-demand references instead
of as competing primary artifacts.

## Problem Statement

The earlier RFC lineage established several useful ideas:

- continuity should stay human-readable
- parent relations should stay explicit
- references may exist without becoming lineage parents
- schema names should remain simple if they are going to spread

What remained unstable was the shape of a practical topic start.

A topic can easily become noisy if the start node tries to carry the
whole working package at once, or if every support file is treated as if
it were part of the primary continuity chain.

The narrower problem is therefore how to start a topic in a way that:

- remains easy to recognize
- remains easy to continue
- remains compatible with the lineage model already established
- stays comfortable to draft from in an editor-friendly workflow

## Consolidated Reading

The current lineage now points to a simpler baseline than some of the
earlier RFC iterations suggested.

The baseline is:

- a root or child trace should carry one clear continuity role
- `Parent Trace` expresses the semantic continuity edge
- `Parent-Integrity` appears when a parent trace exists
- other references may be carried separately when they matter
- roots do not need a default self-hash to be valid
- local policy and process are optional layers, not mandatory baggage

This draft treats that as the current best reading of the lineage rather
than reopening the earlier heavier footer model.

## Design Goals

- keep the topic root recognizable across topic types
- keep lineage as the primary continuity anchor
- keep schemas reusable and easy to understand
- allow local policy and process without making them mandatory
- keep support material available on demand rather than always central
- preserve what the lineage has already learned instead of restating it
  in a new incompatible form

## Model

The minimum topic-start model is:

- one `.trace.md` node that starts or continues a topic
- one short local purpose or scope statement
- `Parent Trace` when the node continues an existing lineage
- `Parent-Integrity` when a parent trace exists
- optional `policy.md`
- optional `process.md`
- optional support files read on demand

The start format should stay recognizable even when the topic domain,
support files, and child naming vary.

## Required Elements

- a `.trace.md` node
- a simple reusable schema name
- a local purpose or scope statement
- `Parent Trace` when the node is not a root
- `Parent-Integrity` when the node is not a root

## Optional Elements

- local policy
- local process
- support references such as links, templates, or checklists
- `Reference Traces` and `Reference-Integrities` when side references
  need to be anchored without becoming lineage parents
- additional child continuations such as `draft`, `review`, or `triage`

## Integrity Model

The current baseline should stay relation-first.

That means:

- parent-linked nodes carry `Parent-Integrity`
- reference-linked nodes may carry `Reference-Integrities`
- roots do not require `Body-Integrity` as a default baseline

This keeps the footer aligned with the relation model the lineage has
actually stabilized around.

If a stronger or more self-verifying integrity profile is wanted later,
that should be introduced explicitly as an additional profile rather
than silently becoming part of the baseline topic format.

## Operational Guidance

Begin from lineage first.

If local policy exists, use it to constrain interpretation.

If local process exists, use it to shape the working method.

Treat links, templates, and checklists as support surfaces rather than
as competing primary continuity artifacts.

When extending the topic:

1. commit or otherwise lock the parent content you mean to continue
2. copy the parent's current integrity value into the child
3. keep other references separate from the parent relation
4. add heavier support material only when the topic actually benefits
   from it

## Naming Direction

The lineage currently suggests a useful split:

- schema names stay simple and reusable, for example `tiinex.topic.v1`,
  `tiinex.pointer.v1`, and `tiinex.continuation.v1`
- filenames stay lineage-first and may then use a descriptive slug, such
  as `001-1-draft.trace.md`

This keeps the structure readable without turning schema names into
project-specific prose.

## Open Questions

- should topic children standardize names such as `draft`, `review`, and
  `triage`
- when should a topic introduce local policy instead of remaining
  lineage-plus-process only
- when should side references be upgraded into explicit `Reference
  Traces`
- which support files, if any, should be expected across most topics

---

# Continuity Integrity

- Parent-Integrity: sha256:1f36741a06b647d7e0842f688ac4b4f7c7af30f3dc41c3ff77853a6fa2df3c99