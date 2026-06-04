# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Current
  - Current Schema: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Summary: Shared definition-root contract for Tiinex schema notes.

---

# tiinex.definition.v1

- Status: provisional shared schema note
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/aa33725304f5bef2fbfb9ed0b46bb6c1fe71fa01/.topics/trace-format/001.trace.md)

## Summary

This schema id defines how shared human-readable Tiinex schema artifacts should
be written.

It is named `definition` rather than bare `schema` so the root note reads as a
definition of schema notes rather than as a stuttering placeholder.

That rename does not weaken provenance. `Origin` remains a required part of the
root contract so readers can still recover what currently grounds the
definition.

It also carries the shared root machine-validation contract for schema notes,
so later schemas can reuse one stable reading model instead of inventing a new
one per file.

## Required Structure

Artifacts using `tiinex.definition.v1` should include:

- a title naming the schema id being defined
- `Status`
- `Origin`
- `Summary`
- one or more sections that make the schema operational rather than only
  descriptive

## Required Sections

- `## Summary`
- at least one contract-bearing section such as:
  - `## Required Structure`
  - `## Required Fields`
  - `## Required Body Expectations`
  - `## Envelope Expectations`
- `## Validation-Friendly Shape`

## Recommended Sections

- `## Recommended Fields`
- `## Conditional Fields`
- `## Optional Fields`
- `## Optional Create Template Block`
- `## Interpretation Notes`
- `## Minimal Example`
- `## What This Schema Is For`
- `## What This Schema Is Not For`

## Required Semantics

Schema artifacts should make it clear:

- what the schema names
- what fields or structures are expected
- what is required versus recommended versus optional
- what the schema is not intended to cover

The goal is to reduce improvisation by giving a reader enough structure to say
whether an artifact plausibly follows the schema.

When information is intentionally withheld, schema-bearing artifacts should not
silently omit or blur that fact.

Redacted values or redacted information should be marked as `[REDACTED]` and
should include a valid reason when that reason can be disclosed safely.

Schema-bearing artifacts should keep structural field names in English even
when example values, explanatory prose, or carried payload values are in some
other language.

If early envelope values such as `Summary`, or later payload values, are
materially written in a language other than English, the artifact should make
the reading language explicit rather than relying on the reader to infer it
from mixed-language context alone.

## Conditional Fields

- `Language`
  - Required when field values, example values, explanatory prose, or payload
    values are materially written in a language other than English.
  - Expected meaning: the default reading language for artifact prose and
    payload values unless a more local override is declared.
- `Locale`
  - Required only when a regional or locale-specific variant materially affects
    interpretation.
  - Expected meaning: the locale-qualified reading context that specializes the
    declared `Language`.

For current Tiinex practice, `Language` should usually be enough on its own.
`Locale` should not be added mechanically when regional precision does not
change the intended reading.

## Origin Rules

Schema artifacts should keep an `Origin` block so the reader can follow the
design lineage back to the topic or artifact that currently grounds the schema
note.

Origin candidates may be rendered as a compact list and may use composite
labels such as `browse + git`.

If the grounding artifact or primary schema home lives in another repository,
the `Origin` block should include at least one committed cross-repo candidate
that a remote reader can resolve without access to the local filesystem.

For current Tiinex practice, that normally means a `browse + git` candidate.

Cross-repo origin should not rely only on a local absolute path or a same-host
relative path, because those do not travel well across repositories or
machines.

## Schema Reference Rules

If a schema-bearing field points to a schema artifact in another repository,
and the current branch has a usable git origin for that target repository,
the reference should use an origin-backed URL rather than only a local
relative or absolute path.

This applies to fields such as:

- `Envelope Schema`
- `Parent Schema`
- `Current Schema`
- `Schema Definition`

Local relative or absolute schema paths are acceptable when the target schema
is in the same repository, or when no usable git origin-backed target exists.

## Timestamp Rules

When schema artifacts describe or exemplify `Created At` fields carried through
the continuity envelope, they should use the UTC timestamp shape inherited from
`tiinex.continuation.v1`.

That means `YYYY-MM-DD hh:mm:ss` with UTC implied, and without timezone
suffixes, local zone names, or numeric offsets.

Later schema notes do not need to restate that rule in full unless they add a
genuine local specialization.

## Schema Lineage Validation Rules

An artifact should not be treated as validated only because its immediate
schema id looks plausible in isolation.

Validation should read the schema lineage backward through the relevant schema
links until the chain reaches its root schema note, or until the next step is
no longer a schema artifact and the validator intentionally stops there.

For current Tiinex practice, that usually means checking inherited constraints
from earlier schema notes such as the continuity envelope contract rather than
requiring every later schema note to restate those rules verbatim.

## Self Validation

This schema note is the shared root contract for `.topics` schema notes. It is
allowed to point its continuity envelope back at itself as a canonical
self-rooting anchor rather than a lineage error.

The note should remain readable to humans, but the machine-facing contract
appendix at the end is the stable read surface for validators.

## Optional Create Template Block

Schema notes may include one fenced machine-readable create-template block when
they want creation UX to be driven from the schema note rather than only from
extension-local hardcoded defaults.

The current preferred block shape is:

```traceable-create-template
---
version: 1
createTitle: Create Definition
summaryPrompt: Enter the schema id to define
summaryPlaceholder: tiinex.example.v1
whyPrompt: Optional: capture why this definition exists
whyPlaceholder: Why does this definition matter right now?
---
# {{summary}}

{{summarySentence}}
```

Current rules for this block are:

- use exactly one fenced block labeled `traceable-create-template` when used
- keep the block body as real markdown so the authored template reads like the
  created artifact shape
- use a simple YAML front matter header for prompt metadata and template
  configuration
- keep `version` at `1` until the contract intentionally changes
- treat the markdown body as the literal template body with simple Mustache-like
  token replacement
- place the real machine block in a trailing machine section immediately above
  `# Continuity Integrity` so it stays out of the main human-reading flow
- if a schema note also shows an earlier example block in explanatory prose,
  tooling should prefer the final declared `traceable-create-template` block

The currently supported tokens are:

- `{{summary}}`
- `{{summarySentence}}`
- `{{why}}`
- `{{schemaId}}`
- `{{schemaDisplayName}}`
- `{{parentTraceDisplayPath}}`

This block is optional.

If it is absent, creation tooling may fall back to stable schema-specific or
generic defaults rather than failing open or inventing new semantics silently.

Supported front matter keys are:

- `version`
- `createTitle`
- `summaryPrompt`
- `summaryPlaceholder`
- `whyPrompt`
- `whyPlaceholder`

## Validation-Friendly Shape

Prefer the existing section order already used in this document:

1. Summary
2. Required Structure
3. Required Sections
4. Recommended Sections
5. Required Semantics
6. Conditional Fields
7. Origin Rules
8. Schema Reference Rules
9. Timestamp Rules
10. Schema Lineage Validation Rules
11. Self Validation
12. Optional Create Template Block
13. Validation-Friendly Shape
14. File Naming Conventions
15. Minimal Example
16. Non-Goals
17. Interoperability and Decomposition
18. Machine Validation Contract
19. Machine Create Template

Keep the headings stable so human readers and validators can scan the same
shape the same way.

For the root schema note, the self-rooting continuity link is part of the
contract shape, not a cycle to report. The machine-facing appendix lives after
the main human-readable sections so it does not interrupt the reading flow.

## File Naming Conventions

Schema artifacts should normally use the schema id itself as the filename stem.

Recommended shared form:

- `<schema-id>.md`

Examples:

- `tiinex.definition.v1.schema.md`
- `tiinex.continuation.v1.schema.md`
- `tiinex.topic.v1.schema.md`

This keeps the filename directly aligned with the schema identity a reader sees
inside the document.

Avoid introducing extra decorative prefixes or slugs unless a separate schema
explicitly requires them.

## Minimal Example

```md
# tiinex.example.v1

- Status: provisional shared schema note
- Origin:
  - [relative](../trace-format/001.trace.md)
  - [browse + git](https://example.invalid/repo/blob/commit/.topics/trace-format/001.trace.md)

## Summary

This schema id names an example schema used for demonstration.

## Required Structure

Artifacts using `tiinex.example.v1` should include A, B, and C.

## Recommended Fields

- X
- Y

## Conditional Fields

- `Language` when the schema note or its carried example values are materially
  non-English
- `Locale` when regional interpretation matters beyond the language alone

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- readers should treat this as an example-only schema
```

## Non-Goals

This schema does not attempt to define every possible schema-authoring style.

It defines a practical shared best practice for schema artifacts in the current
`.topics` schema space.

## Interoperability and Decomposition

This schema should stay friendly to other lineage and provenance formats that
want to export into `.trace.md` or embed Tiinex without collapsing their data
into one opaque blob.

Prefer machine shapes that can be decomposed into stable parts such as:

- entities
- relations
- facets or facet-like metadata
- provenance and origin pointers

When an external format can already expose those pieces separately, the Tiinex
mapping should preserve that separation instead of forcing a single undifferentiated
payload block.

If a source format can only provide a blob, the blob may still be accepted, but
only as a lower-fidelity fallback rather than the preferred interchange shape.

## Machine Validation Contract

```json
{
  "schemaId": "tiinex.definition.v1",
  "schemaKind": "definition-root",
  "selfRootingLink": true,
  "interopMode": "decomposition-first",
  "preferredMachineShape": [
    "entities",
    "relations",
    "facets",
    "origin"
  ],
  "blobPolicy": {
    "allowedAsFallback": true,
    "preferredOnlyWhenNoDecompositionExists": true
  },
  "requiredHeadings": [
    "Summary",
    "Required Structure",
    "Required Sections",
    "Recommended Sections",
    "Required Semantics",
    "Conditional Fields",
    "Origin Rules",
    "Schema Reference Rules",
    "Timestamp Rules",
    "Schema Lineage Validation Rules",
    "Self Validation",
    "Validation-Friendly Shape",
    "Interoperability and Decomposition",
    "File Naming Conventions",
    "Minimal Example",
    "Non-Goals",
    "Machine Validation Contract",
    "Machine Create Template"
  ],
  "validatorFamilies": [
    {
      "name": "schema-note-core",
      "scope": "shared schema notes",
      "checks": [
        "summary-present",
        "contract-bearing-section-present",
        "validation-friendly-shape-present"
      ]
    },
    {
      "name": "definition-root-self-validation",
      "scope": "tiinex.definition.v1",
      "checks": [
        "self-root-link-is-canonical",
        "machine-validation-contract-present"
      ]
    }
  ]
}
```

## Machine Create Template

This trailing machine section exists so create tooling can read a definition-owned
template without mixing it into the main human-reading flow.

```traceable-create-template
---
version: 1
createTitle: Create Definition
summaryPrompt: Enter the schema id to define
summaryPlaceholder: tiinex.example.v1
whyPrompt: Optional: capture why this definition exists
whyPlaceholder: Why does this definition matter right now?
---
# {{summary}}

- Status: provisional shared schema note
- Origin:
  - Describe the grounding topic, task, or artifact that currently justifies this definition.

## Summary

{{why}}

## Required Structure

Describe the minimum structure this definition requires.

## Required Sections

- Summary
- Validation-Friendly Shape

## Interpretation Notes

- Clarify what this definition covers.
- Clarify what it must not overclaim.
```

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
  - Value: mfu9gi3Bu7HGlQpZ-7acGw0dq-CMqdVYiflpByfgYgQ