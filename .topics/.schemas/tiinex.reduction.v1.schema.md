# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.schema.v1.schema.md](tiinex.schema.v1.schema.md)
- Current
  - Current Schema: [tiinex.reduction.v1](tiinex.reduction.v1.schema.md)
  - Created At: 2026-05-28 22:47:43
  - Summary: Shared schema for reduced lineage artifacts that preserve carry-forward signal after a controlled compaction or summary reduction.

---

# tiinex.reduction.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.schema.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names reduction-oriented artifacts whose main job is to carry a
reduced but still usable representation of earlier lineage.

It exists so compacted or summarized lineage can be preserved in a truthful
artifact form that says what survived the reduction, what was collapsed or
omitted, and what a later reader may safely continue from.

## Required Body Expectations

Artifacts using `tiinex.reduction.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the reduction artifact or reduced lineage slice
- the source lineage scope that was reduced
- the basis or reason for the reduction
- the signal that was intentionally preserved
- the signal that was omitted, collapsed, or otherwise no longer directly
  readable
- some explicit carry-forward contract for what a later reader may continue from

## Recommended Body Sections

The exact section names may vary, but reduction documents should usually provide
some combination of:

- source scope
- reduction basis
- preserved signal
- omitted or collapsed signal
- carry-forward contract
- recovery hooks
- limits or non-goals

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.reduction.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the reduction artifact continues or specializes another
  trace

## Required Reduction Semantics

Reduction artifacts using `tiinex.reduction.v1` should make it clear:

- what lineage scope was reduced
- why the reduction was created
- what signal was intentionally preserved as carry-forward truth
- what signal was collapsed, merged, or omitted and is no longer directly
  available in full detail
- what a later reader or tool may safely rely on after reading only the
  reduction artifact

If the reduction is lossy, the artifact should say so truthfully rather than
letting the reader infer completeness from confident prose.

Reduction artifacts should not pretend to be full transcripts, full lineage,
or transport packages when they are actually reduced carry-forward surfaces.

## Recommended Fields

- `Current -> Why`
- `Current -> Summary`
- explicit source scope such as single trace, branch, bounded range, or another
  named lineage slice
- explicit reduction basis such as context budget, handoff, recovery,
  readability, or another stated reason
- explicit preserved-signal list
- explicit omitted-or-collapsed-signal list
- explicit recovery hooks when richer lineage can still be reached elsewhere

## File Naming Conventions

Artifacts using `tiinex.reduction.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<reduction-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2.trace.md`
- `001-2-reduction.trace.md`
- `001-3-handoff-reduction.trace.md`

Rules:

- keep the lineage label first
- use a short slug when it helps distinguish one reduction artifact from
  another
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.reduction.v1` when the artifact is primarily trying to:

- preserve a reduced continuity slice after compaction or summarization
- carry forward selected truth from a larger lineage without pretending that
  every prior detail remains directly readable
- make preserved versus omitted signal explicit
- give a later reader or agent enough grounded context to continue safely

## What This Schema Is Not For

Do not use this schema for transport packaging, thin redirection, or ordinary
task planning.

It is not primarily for:

- archive or package carriers
- pointer-only forwarding
- full verbatim transcript preservation
- generic notes that never claim to reduce earlier lineage

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.reduction.v1
  - Created At: 2026-05-28 22:47:43
  - Summary: Reduced branch summary for the current schema-lineage tooling work.

---

# Schema Lineage Tooling Reduction

## Source Scope

- Scope: bounded branch
- Root: 001.trace.md

## Reduction Basis

- Reason: context budget

## Preserved Signal

- schema-lineage repair remains an open task
- markdown preview repo resolver remains separate from repair behavior

## Omitted Or Collapsed Signal

- detailed intermediate reasoning and repeated exploratory comparisons were
  collapsed

## Carry-Forward Contract

- later work may continue from the preserved task split without rereading the
  full original branch first
```

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- a reduction artifact should be judged by the truthfulness of its preservation
  contract, not only by summary quality
- explicit omitted signal is a feature, not an embarrassment
- if the artifact is actually preserving the full source rather than reducing
  it, another schema is likely the better fit

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.schema.v1.schema.md](tiinex.schema.v1.schema.md)
  - Value: n3PKGGcakDm5eujOUPv2qRtaqmUOHBo5XzgR4kOg5ak