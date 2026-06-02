# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.schema.v1](tiinex.schema.v1.md)
  - Created At: 2026-06-02 00:00:00
  - Trace: [tiinex.schema.v1.md](tiinex.schema.v1.md)
- Current
  - Current Schema: [tiinex.capability.v1](tiinex.capability.v1.md)
  - Created At: 2026-06-02 00:00:00
  - Why: Declares support metadata for runtimes, viewers, validators, and related bridges without forcing those companions to live in the same repo.
  - Summary: Shared schema for capability manifests that describe what a surface supports.

---

# tiinex.capability.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/aa33725304f5bef2fbfb9ed0b46bb6c1fe71fa01/.topics/trace-format/001.trace.md)

## Summary

This schema id names capability manifests that declare what a runtime, viewer,
validator, bridge, or related surface supports.

It exists so support metadata can live in a small machine-readable layer
without forcing the human-readable schema notes to become rigid or repetitive.

## Required Body Expectations

Artifacts using `tiinex.capability.v1` should contain a readable body after
the continuity envelope.

The body should include, at minimum:

- a title identifying the capability manifest or target surface
- the surface kind
- the surface identity
- the supported schema ids or schema families
- any optional companions or related surfaces
- the missing-surface or warning policy when that matters

## Recommended Body Sections

The exact section names may vary, but capability documents should usually
provide some combination of:

- surface identity
- supported schemas
- optional companions
- missing-surface policy
- disable policy
- authority or scope
- notes or caveats
- linked manifests or references

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.capability.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the capability artifact continues or specializes another
  trace

## Required Capability Semantics

Capability artifacts using `tiinex.capability.v1` should make it clear:

- what surface the manifest describes
- whether it is a validator, runtime, viewer, adapter, bridge, or manifest
- what schema family, parent lineage, or support scope the manifest covers
- what schema families or artifact kinds it supports
- whether the manifest is a base, family, or leaf capability declaration
- what child schema families or leaf ids the manifest delegates to when those
  are known
- whether missing companion surfaces should raise error, warning,
  information, or no diagnostic
- whether the capability declaration is authoritative, advisory, or partial
- whether the manifest applies locally, to a repo, to an extension package, or
  to another distributable surface

Capability artifacts should not pretend that support is universal when it is
only partial or policy-gated.

Capability artifacts should also not force runtime or viewer support to be
mandatory for every schema. A schema may be valid without one or both
companions, but the capability note can say what warnings or degraded modes are
appropriate.

One capability manifest may cover many schema ids or schema families.
Prefer grouping a support surface once rather than cloning a separate manifest
for every leaf schema, unless the capability boundary is genuinely different.

## Validation Topology

Capability manifests should make the validation chain easy to reconstruct.

The preferred topology is:

- one base capability declaration per major support surface or family
- optional child declarations only when a descendant changes the support
  boundary in a meaningful way
- parent validators that can recurse until a root schema note or until the next
  artifact is no longer schema-shaped
- leaf validators that specialize the family rules without duplicating the
  entire support catalog

When a manifest is external or lives in package metadata, the same topology can
be represented through that source format as long as the exported fields remain
recoverable.

If a support surface does not ship a runtime or viewer, that should normally
become a policy signal or warning, not an automatic schema failure.

## Validation-Friendly Shape

Keep capability manifests in a stable order so humans and validators can scan
them the same way.

Preferred order:

1. title
2. surface identity
3. surface kind
4. validation tier
5. supported schemas
6. optional companions
7. missing-surface policy
8. disable policy
9. authority or scope
10. notes or caveats
11. linked manifests or references

Preferred anchors:

- `Surface Identity`
- `Surface Kind`
- `Supported Schemas`
- `Optional Companions`
- `Missing Surface Policy`

If a section is omitted, leave it out cleanly rather than renaming it for a
one-off use. Use close equivalents only when the capability truly needs a
different label, and keep the meaning obvious in the first line.

## Recommended Fields

- `Surface Kind`
- `Surface Id`
- `Validation Tier`
- `Version`
- `Supported Schemas`
- `Optional Companions`
- `Missing Surface Policy`
- `Disable Policy`
- `Authority`
- `Scope`
- `Parent Schema`
- `Child Schemas`
- `Delegates To`
- `Notes`

## File Naming Conventions

Artifacts using `tiinex.capability.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts when they participate
in continuity.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<capability-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2-capability.trace.md`
- `validator.capability.md`

Rules:

- keep the lineage label first when the artifact is part of a continuity chain
- keep the canonical field names stable even if the host project renders the
  manifest through JSON, YAML, or package metadata
- keep the `.trace.md` suffix stable for continuity-carrying forms

## What This Schema Is For

Use `tiinex.capability.v1` when the artifact is primarily trying to:

- declare what a surface supports without forcing co-location
- declare what a surface supports without forcing co-location or per-schema
  duplication
- let runtimes, viewers, validators, adapters, and bridges advertise their
  compatible schema families
- keep missing-companion warnings policy-driven and optional
- provide a base contract that external extensions can mirror in their own
  manifest format

## What This Schema Is Not For

Do not use this schema for runtime evidence, topic discussion, landed
decisions, encrypted payload shells, archive carriers, or pointer-only
redirects.

It is not primarily for:

- runtime evidence
- topic exploration
- decision notes
- encrypted payload shells
- archive containers
- pointer-only redirects
- generic schema notes that do not describe support surfaces

## Interpretation Notes

- markdown is the readable interchange shape
- JSON, YAML, or package metadata may map to this schema when a component
  prefers a different source format
- the validator should prefer declared capability metadata over guessing from
  package shape or file location
- missing runtime or viewer support may be warned about, but it should not
  automatically make the schema invalid

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.capability.v1
  - Created At: 2026-06-02 00:00:00
  - Why: Declares validator support without requiring the validator to ship
    beside the schema notes.
  - Summary: Capability manifest for the traceable continuity validator.

---

# Traceable Continuity Validator Capability

## Surface Identity

- Surface Kind: validator
- Surface Id: tiinex.ai-provenance.validateTraceableContinuity
- Version: 1

## Supported Schemas

- tiinex.continuation.v1
- tiinex.topic.v1
- tiinex.task.v1
- tiinex.evidence.v1

## Optional Companions

- viewer: warning if missing
- runtime: info if missing

## Missing Surface Policy

- viewer: warning
- runtime: info

## Notes

- This manifest is advisory and can live in a separate extension package.
```

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.schema.v1.md](tiinex.schema.v1.md)
  - Value: wTlygaHH1nn1-sKB6Wtbpdef6cQ-iiEzsqXYUfQ4bOk