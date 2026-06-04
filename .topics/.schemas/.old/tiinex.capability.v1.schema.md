# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
  - Created At: 2026-06-02 00:00:00
  - Trace: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
- Current
  - Current Schema: [tiinex.capability.v1](tiinex.capability.v1.schema.md)
  - Created At: 2026-06-02 00:00:00
  - Why: Declares support metadata for runtimes, viewers, validators, and related bridges without forcing those companions to live in the same repo.
  - Summary: Shared schema for capability manifests that describe what a surface supports.

---

# tiinex.capability.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
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

## Interop Profile Shape

Capability artifacts may include one or more interop profile entries when they
describe a source-format adapter or a bridge from an external lineage or
provenance model into Tiinex-readable support metadata.

Interop profile entries should make it clear:

- profile id
- source format
- profile version
- target shape or destination surface
- canonical source identity mapping for the source entities the profile cares
  about, such as ids, namespaces, names, or versions when the source model
  exposes them
- whether the profile is a root declaration, family declaration, or adapter
  leaf
- whether the source model is decomposed into entities, relations, facets, and
  origin pointers or only available as a blob fallback
- what preservation or lossiness policy applies

If a capability manifest includes interop profiles, those profiles should be
named and versioned separately from the root capability declaration so later
readers can distinguish support breadth from mapping-specific behavior.

## Interop Fidelity And Retention

Interop profiles should state explicitly:

- what lossiness policy applies when the source format cannot be represented
  one-to-one
- what round-trip expectation applies, such as semantic round-trip versus
  byte-identical replay
- what unknown-field retention policy applies for extension fields, custom
  facets, or vendor-specific payloads
- whether ordering is preserved, normalized, or ignored
- whether duplicates are preserved, collapsed, or rejected
- whether blob fallback is allowed and under what conditions
- whether the profile prefers decomposition-first or blob-fallback handling

When the source model can be decomposed into stable pieces, the profile should
prefer preserving those pieces separately instead of forcing a single opaque
payload.

If the profile only promises semantic round-trip, it should preserve enough
structured signal that a later adapter can reconstruct the same lineage claims,
identity tuples, timestamps, and declared degradation boundaries even when the
readable export is decomposed across multiple Tiinex artifacts.

If byte-identical replay is out of scope, the profile should say so plainly
instead of letting readers assume that readable export implies lossless event
reconstruction.

## Root And Adapter Separation

Root capability declarations should describe the surface support boundary.
They should not need to encode source-format-specific mapping rules.

Adapter capability declarations should specialize one source format or source
family and should point back to the root declaration or delegate to it.

If a manifest carries both root and adapter concerns, the root-side support
declaration should stay generic and the adapter-side mapping should be a
clearly named child, delegate, or companion profile rather than an implied
blob.

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
6. interop profile shape
7. interop fidelity and retention
8. root and adapter separation
9. optional companions
10. missing-surface policy
11. disable policy
12. authority or scope
13. notes or caveats
14. linked manifests or references

Preferred anchors:

- `Surface Identity`
- `Surface Kind`
- `Supported Schemas`
- `Interop Profile Shape`
- `Interop Fidelity And Retention`
- `Root And Adapter Separation`
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
- `Profile Id`
- `Source Format`
- `Profile Version`
- `Target Shape`
- `Canonical Identity Mapping`
- `Interop Mode`
- `Lossiness Policy`
- `Round-Trip Expectation`
- `Unknown Field Retention`
- `Ordering Policy`
- `Duplicate Handling`
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
- describe interop profiles for source-format adapters in a structured way
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
- generic interop blobs that do not separate root support from adapter
  mapping

## Interpretation Notes

- markdown is the readable interchange shape
- JSON, YAML, or package metadata may map to this schema when a component
  prefers a different source format
- the validator should prefer declared capability metadata over guessing from
  package shape or file location
- missing runtime or viewer support may be warned about, but it should not
  automatically make the schema invalid
- interop profiles should preserve decomposed pieces when the source model can
  expose them, and should state fallback or lossiness when it cannot

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

## OpenLineage Interop Capability

- Surface Kind: adapter
- Surface Id: tiinex.openlineage.interop
- Validation Tier: leaf
- Version: 1

## Supported Schemas

- tiinex.capability.v1
- tiinex.definition.v1

## Interop Profile Shape

- Profile Id: openlineage.trace-md.v1
- Source Format: OpenLineage
- Profile Version: 1
- Target Shape: .trace.md
- Canonical Identity Mapping:
  - run: `run.runId`
  - job: `job.namespace` + `job.name`
  - dataset: `dataset.namespace` + `dataset.name`
- Interop Mode: decomposition-first

## Interop Fidelity And Retention

- Lossiness Policy: preserve decomposed entities, relations, facets, and
  origin pointers; use blob fallback only when the source cannot be split
- Round-Trip Expectation: semantic round-trip only; preserve stable identity,
  lineage claims, timestamps, and declared degradation boundaries
- Unknown Field Retention: preserve recoverable custom facets and surface the
  rest in notes
- Ordering Policy: preserve source order when it is semantically meaningful,
  normalize otherwise
- Duplicate Handling: preserve duplicates only when the source semantics
  distinguish them

## Root And Adapter Separation

- Root capability declaration: tiinex.capability.v1
- Adapter scope: OpenLineage only
- Delegates To: root capability and the documented interop profile shape
```

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
  - Value: FP-9aOQePj2IGHbbzXD1F3oxxT2DQL77pfsJa5yLgEU