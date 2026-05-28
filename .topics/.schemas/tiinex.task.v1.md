# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.schema.v1.md](tiinex.schema.v1.md)
- Current
  - Current Schema: [tiinex.task.v1](tiinex.task.v1.md)
  - Created At: 2026-05-28 22:02:47
  - Summary: Shared schema for bounded task artifacts that can carry recursive subtasks without requiring a separate container schema.

---

# tiinex.task.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/tools/001-3-task-schema-direction.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/tools/001-3-task-schema-direction.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/cc5f281e287a999a2beff4a3a6f01e93fb54a2f3/.topics/trace-format/001.trace.md)

## Summary

This schema id names task-oriented artifacts whose main job is to define a
bounded unit of work clearly enough to execute, review, or hand off.

It exists so concrete work can be carried as a first-class readable artifact
without forcing every task into either an unstructured note or a broader topic
document.

## Required Body Expectations

Artifacts using `tiinex.task.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the task or work item
- a clear statement of what concrete work is being asked for
- some signal for what counts as done, accepted, or complete

## Recommended Body Sections

The exact section names may vary, but task documents should usually provide
some combination of:

- objective or requested work
- done criteria or acceptance criteria
- scope and non-goals
- dependencies or blockers
- subtasks
- risks or open questions

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.task.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the task continues or specializes another artifact

## Required Task Semantics

Task artifacts using `tiinex.task.v1` should make it clear:

- what work is in scope now
- what completion means for the current task
- what constraints, non-goals, or boundaries still apply
- whether the task depends on other tasks, artifacts, or repositories

Task artifacts may contain subtasks, and those subtasks may themselves contain
further subtasks recursively.

That recursion should be treated as part of the task model itself, not as proof
that a separate container schema is required above task.

If subtasks are present, the artifact should make clear whether they are:

- planned children of the current task
- required before the current task can be considered complete
- optional decomposition notes rather than strict completion gates

## Recommended Fields

- `Current -> Why`
- `Current -> Summary`
- explicit done criteria
- explicit scope or non-goals
- explicit subtask listing when the task branches

## File Naming Conventions

Artifacts using `tiinex.task.v1` should normally follow the same lineage-first
trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<task-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2.trace.md`
- `001-2-repair-parent-links.trace.md`

Rules:

- keep the lineage label first
- use a short slug when it helps distinguish one task from another
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.task.v1` when the artifact is primarily trying to:

- define a bounded unit of work
- make execution and completion criteria readable
- preserve dependencies, constraints, and decomposition of that work
- let one task branch into smaller subtasks without inventing a new container
  type

## What This Schema Is Not For

Do not use this schema as the default shape for broad design threads, schema
definitions, or thin forwarding artifacts.

It is not primarily for:

- long-form topic exploration where the main goal is design reasoning
- schema notes themselves
- pointer-only continuity anchors
- opaque runtime evidence dumps

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.task.v1
  - Created At: 2026-05-28 22:02:47
  - Summary: Repair schema parent links for the published docs lineage slice.

---

# Repair Schema Parent Links

## Objective

Upgrade stale parent links to the intended committed browseable targets.

## Done Criteria

- target files point to the intended committed parent traces
- continuity footer values are refreshed after the rewrite

## Subtasks

- inspect broken edges
- propose replacement targets
- refresh footer integrity values
```

## Interpretation Notes

- a task artifact should stay concrete enough that a reader can tell what work
  is being requested now
- recursive subtasks are allowed, but the current task should still remain the
  primary reading unit
- if the artifact becomes mostly design rationale rather than bounded work, a
  topic schema may be the better fit

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.schema.v1.md](tiinex.schema.v1.md)
  - Value: II1FuX7ge0E0rSj7XswUQcoM3n6a-6N5VfCarD9t1oI