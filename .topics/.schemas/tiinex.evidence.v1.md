# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.schema.v1.md](tiinex.schema.v1.md)
- Current
  - Current Schema: [tiinex.evidence.v1](tiinex.evidence.v1.md)
  - Created At: 2026-05-28 22:50:17
  - Summary: Shared schema for evidence-bearing artifacts that preserve supporting material in a trace-readable form.

---

# tiinex.evidence.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names evidence-oriented artifacts whose main job is to preserve
supporting material in a way that remains useful to later traces, readers, and
tools.

It exists so screenshots, excerpts, logs, quoted snippets, transcripts, or
other supporting material can be carried as readable evidence artifacts without
being forced into either raw runtime export or broad narrative discussion.

## Required Body Expectations

Artifacts using `tiinex.evidence.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the evidence artifact or evidence slice
- some statement of what the evidence supports, shows, or bears on
- the evidence material itself as a quote, excerpt, summary, attachment
  description, or another readable representation
- enough provenance that a later reader can understand where the evidence came
  from

## Recommended Body Sections

The exact section names may vary, but evidence documents should usually provide
some combination of:

- provenance or source
- evidence material
- representation method
- claim or question supported
- interpretation limits
- linked artifacts or references

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.evidence.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the evidence artifact continues or specializes another
  trace

## Required Evidence Semantics

Evidence artifacts using `tiinex.evidence.v1` should make it clear:

- what the preserved material is
- what it supports, illustrates, or bears on
- how directly the artifact represents the underlying material, such as quote,
  excerpt, screenshot description, transcript extract, or summary
- what provenance is available for the evidence

If the underlying evidence is partial, redacted, transformed, or summarized,
the artifact should say so explicitly rather than letting a reader infer full
fidelity.

Evidence artifacts should not pretend to be mere signal capture when the main
value is the preserved supporting material itself.

## Recommended Fields

- `Current -> Why`
- `Current -> Summary`
- explicit provenance or source reference
- explicit representation method
- explicit supported claim, question, or artifact
- explicit limitations when the evidence is partial, transformed, or missing
  context

## File Naming Conventions

Artifacts using `tiinex.evidence.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<evidence-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2.trace.md`
- `001-2-log-excerpt.trace.md`
- `001-3-screenshot-evidence.trace.md`

Rules:

- keep the lineage label first
- use a short slug when it helps distinguish one evidence artifact from another
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.evidence.v1` when the artifact is primarily trying to:

- preserve supporting material in a readable trace form
- keep evidence attached to a claim, question, bug, decision, or task
- capture enough provenance and fidelity information that later readers can
  judge the material appropriately
- separate evidence preservation from broader discussion or planning

## What This Schema Is Not For

Do not use this schema for raw runtime exports, pointer-only forwarding, or
generic signal ingestion when supporting material is not the main value.

It is not primarily for:

- opaque runtime exports that belong in runtime trace
- passive signal capture where the observed reaction itself is the main value
- broad topic discussion
- generic task planning

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.evidence.v1
  - Created At: 2026-05-28 22:50:17
  - Summary: Log excerpt supporting the parent-link mismatch diagnosis.

---

# Parent Link Evidence

## Provenance

- Source: local test run
- Representation: excerpt

## Evidence Material

- Output: resolver returned the stale local path instead of the intended committed browseable target

## Supports

- Claim: the current parent-link repair logic needs an explicit committed-target step
```

## Interpretation Notes

- an evidence artifact should preserve enough material and provenance that a
  later reader can judge what the evidence actually supports
- if the artifact is mostly runtime export rather than curated supporting
  material, a runtime trace schema may be the better fit
- if the artifact is mostly externally gathered reaction rather than supporting
  material, a signal or feedback schema may be the better fit

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.schema.v1.md](tiinex.schema.v1.md)
  - Value: OWoEjW7AgorVhTMg-ISlh4fIiwq9uuo0ThULe6aoQ8M