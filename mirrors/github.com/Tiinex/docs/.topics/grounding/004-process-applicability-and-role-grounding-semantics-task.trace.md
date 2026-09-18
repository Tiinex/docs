# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-09-14 13:45:00
  - Trace: [Thin-Lineage Anchor Grounding And Orchestration Reliability Epic](business::.topics/initiatives/001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md)
  - Origin:
    - [relative](business::.topics/initiatives/001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-14 14:24:00
  - Authors: Anchor
  - Why: The first fresh-role run showed that process artifacts may exist but remain operationally invisible unless applicability is explicitly carried; Axiom must classify the semantic rule before Tooling can project it safely.
  - Summary: Determine process applicability/discovery semantics for fresh Role grounding and return the smallest durable Role/process/Relation delta.
  - Status: ready/local

---

# Process Applicability And Role-Grounding Semantics

## Objective

Define how a fresh Role can determine which existing Tiinex process or processes apply to its current work from qualified authority, without repository-wide process scanning, without hardcoding every process into every Role, and without treating physical process carriage as semantic applicability.

## Done Criteria

- One qualified semantic disposition states whether existing Role/Relation/Handoff/Task/Decision/process semantics are sufficient for process applicability and, if so, the exact declaration/resolution rule.
- Availability, applicability, requiredness, active execution, ownership and completion evidence remain semantically distinct.
- A fresh Role can recover applicable process obligations from qualified sparse authority without repository-wide scanning or inventory inference.
- Loom receives an exact projection/provenance contract plus a fail-visible unresolved state for facts Tooling may not infer.
- Any proposed Business delta is returned to Anchor rather than applied by Axiom.

## Required Analysis

- Inspect current Party/Role, typed Relation, Task, Decision, Handoff and process semantics plus relevant existing Business grounding/process lineages.
- Determine whether existing semantics already express process applicability adequately. If yes, identify the exact declaration pattern, direction/scope and cold-grounding resolution rule. If no, identify the smallest missing semantic contract; do not invent a schema merely for Tooling convenience.
- Distinguish process **availability**, **applicability**, **requiredness**, **current execution**, **ownership** and **evidence of completion**. A carried process artifact must not collapse these states.
- Determine where applicability authority should normally originate: Role continuation, controlling Task/Epic/Handoff/Decision, typed Relation, process artifact, or a bounded combination. Preserve sparse-work behavior; do not require global process discovery when controlling work needs none.
- Classify how a fresh successor should recover process obligations when Business is absent but qualified cache/pointer material carries the required authority.
- Review the current Anchor Role continuation accepted from your first return and return only the exact additional Business Role/process delta, if any, needed for process discoverability. Do not mutate Business.
- Produce a concise Tooling-facing projection contract for Loom: what facts may be projected, what provenance must be shown, what unresolved state looks like, and what must remain impossible to infer.

## First-Run Retrospective Constraint

Use your own first-run retrospective as evidence of friction, but do not redefine semantics simply to optimize your previous path. The target is general Tiinex cold grounding for Roles with thin lineage.

## Scope

Docs semantic authority for Role/process/Relation applicability and its cold-grounding interpretation under the controlling Business Epic.

## Dependencies

- [Thin-Lineage Anchor Grounding Semantic Disposition](003-thin-lineage-anchor-grounding-semantic-disposition.trace.md)
- Current Business Thin-Lineage Anchor Grounding And Orchestration Reliability Epic and second-tranche integration Task.
- Current Business Role/process/Relation material as read-only authority/context.
- Current integrated Core first-return grounding projection mechanics as read-only implementation evidence.
- Axiom first-run retrospective as diagnostic evidence, not semantic authority.

## Exclusions

- No Business mutation.
- No Core mutation.
- No process inventory scan as authority.
- No new global lifecycle/readiness state unless unavoidable semantic need is demonstrated.
- No assumption that endpoint Roles or carried Role/process artifacts are current-work participants/applicable processes.

## Return Boundary

Return to Anchor with one qualified semantic disposition, exact accepted/rejected declaration patterns, proposed Business delta if needed, Tooling-facing projection contract and any unresolved ambiguity that must remain fail-visible.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Thin-Lineage Anchor Grounding And Orchestration Reliability Epic](business::.topics/initiatives/001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md)
  - Value: f0iMMxJZ5jrOIRd7SjL14TG2K-HriaX17b7g784ItO0

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:G7P3FkcuyRwnMr0ZpjsCS74xDVF0-A69vvEwNO27JS4
