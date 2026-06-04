# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.continuation.v1.schema.md](tiinex.continuation.v1.schema.md)
- Current
  - Current Schema: [tiinex.topic.v1](tiinex.topic.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Summary: Shared topic-body schema layered on top of the continuity envelope schema.

---

# tiinex.topic.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [absolute](C:/Users/micro/Documents/Repos/Tiinex/ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/aa33725304f5bef2fbfb9ed0b46bb6c1fe71fa01/.topics/trace-format/001.trace.md)

## Summary

This schema id names a topic-oriented artifact body carried inside the broader
continuity envelope.

It is intended for documents whose main role is to advance a focused working
topic, design direction, or implementation thread.

## Required Body Expectations

Artifacts using `tiinex.topic.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a document title or equivalent leading heading
- prose that advances one concrete topic, design thread, or implementation
  question

## Recommended Body Sections

The exact section names may vary, but topic documents should usually provide
some combination of:

- current read
- design direction
- risks or open questions
- next artifacts or next steps

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.topic.v1`
- `Current -> Created At`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- `Current -> Authors`
- parent signal when the topic continues another artifact

## File Naming Conventions

Artifacts using `tiinex.topic.v1` should also follow lineage-first trace
filenames because they usually live inside a continuity chain rather than as
free-floating markdown notes.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<topic-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-trace-format.trace.md`
- `001-2-validation-pass.trace.md`

Rules:

- keep the lineage label first
- let the optional slug describe the working topic or transition
- prefer short, human-readable slugs over ontology-heavy names
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.topic.v1` when the artifact is primarily trying to:

- drive a working topic forward
- capture implementation direction
- preserve design reasoning
- hold a bounded thread that may later turn into code, docs, or RFC text

## What This Schema Is Not For

Do not use this schema as a lazy catch-all for every markdown file.

It is not primarily for:

- raw pointer-only artifacts
- schema definitions
- opaque runtime dump files
- finalized universal specs whose main purpose is normative interchange

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.topic.v1
  - Created At: 2026-05-28 16:54:32
  - Authors: Sigma, Anchor
  - Why: Captures the current implementation direction.
  - Summary: Topic root for the trace-format redesign.

---

# Trace Format Redesign Root

This topic captures the current design direction for the work.

## Current Read

The current implementation still stores parent trace links primarily as paths.
```

## Validation-Friendly Shape

Prefer the existing section order already used in this document: contract or
expectation sections first, then schema-specific semantics and supporting
fields, then naming conventions, then interpretation notes and examples.

Sections such as `next artifacts` or `next steps` are forward-looking body
content. They describe where the topic is heading, but they are not a
substitute for the continuity envelope's ancestry relation.

Keep the headings stable so human readers and validators can scan the same
shape the same way.

## Interpretation Notes

- the topic body should remain readable to humans without special tooling
- the envelope still carries continuity, origin, and integrity hints
- topic documents may carry why, summary, authors, and other light metadata
- the body should preserve the design or implementation thread rather than only
  repeating envelope metadata

## Machine Create Template

This trailing machine section exists so create tooling can read a schema-owned
template without mixing it into the main human-reading flow.

```traceable-create-template
---
version: 1
createTitle: Create Topic
summaryPrompt: Enter a short title for the topic
summaryPlaceholder: What is this topic about?
whyPrompt: Optional: capture why this topic exists
whyPlaceholder: Why does this topic matter right now?
---
# {{summary}}

{{summarySentence}}

## Current Read

Describe the current topic state, what is already known, and what this topic is trying to advance.

## Design Direction

Describe the direction this topic should take next.

## Next Artifacts

- Add the next concrete child topic, proof, task, or decision artifact.
```

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.continuation.v1.schema.md](tiinex.continuation.v1.schema.md)
  - Value: rbfkffH9ipO2U1sbrX1fD8JlK-_UDTdp3c_27a5C-eM