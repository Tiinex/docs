# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.definition.v1](tiinex.definition.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Trace: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
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

## Schema Validation Contract

### Topic Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.topic.v1`

Rules

- `tiinex.topic.v1` governs the topic-oriented body carried inside the inherited continuity envelope.
- Topic artifacts inherit envelope requirements from `tiinex.continuation.v1`.
- Validators should treat this section as the authoritative validation surface for topic-specific body rules.
- Prose outside `Schema Validation Contract` may explain or illustrate the schema, but it must not add extra required validation rules.

### Topic Body

Required Shape

- first body heading after the continuity envelope
- readable prose that advances one concrete topic, design direction, or implementation thread

Optional Sections

- Current Read
- Design Direction
- Risks
- Open Questions
- Next Artifacts
- Next Steps

Rules

- A topic artifact body must begin with a readable title or equivalent leading heading after the continuity envelope.
- A topic artifact body must include prose that advances one concrete topic, design thread, or implementation question.
- Section names may vary when the artifact stays readable and the body still carries one coherent topic thread.
- Forward-looking sections such as `Next Artifacts` or `Next Steps` must not replace the continuity envelope's ancestry relation.

### Topic Envelope Companions

Optional Fields

- `Current -> Why`
- `Current -> Summary`
- `Current -> Authors`

Rules

- Topic artifacts should include parent signal when the topic continues another artifact.
- Topic artifacts may carry lightweight current-side metadata such as `Why`, `Summary`, or `Authors` when that context helps a reader orient quickly.

### File Naming

Allowed Shapes

- `<lineage>.trace.md`
- `<lineage>-<topic-slug>.trace.md`

Rules

- Topic artifacts should keep the lineage label first.
- The optional slug should describe the working topic or transition.
- Topic artifacts should prefer short human-readable slugs over ontology-heavy names.
- Topic artifacts should keep the `.trace.md` suffix stable.

### Interpretation Boundaries

Rules

- Use `tiinex.topic.v1` when the artifact is primarily trying to drive a working topic forward, capture implementation direction, preserve design reasoning, or hold a bounded thread that may later turn into code, docs, or RFC text.
- Do not use `tiinex.topic.v1` as a lazy catch-all for every markdown artifact.
- `tiinex.topic.v1` is not primarily for raw pointer-only artifacts, schema definitions, opaque runtime dump files, or finalized universal specs whose main purpose is normative interchange.

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

Prefer the existing section order already used in this document: summary first,
then the machine-authoritative `Schema Validation Contract`, then supporting
examples and interpretation notes, and finally the generation contract before
the integrity footer.

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

## Artifact Creation Contract

### Prompt Fields

Required Fields

- version
- createTitle
- summaryPrompt
- summaryPlaceholder

Optional Fields

- whyPrompt
- whyPlaceholder

Rules

- The current topic create surface uses version `1`.
- `createTitle` should label the create action as `Create Topic`.
- `summaryPrompt` should ask for a short title for the topic.
- `summaryPlaceholder` should guide the user toward the topic's main subject.
- `whyPrompt` and `whyPlaceholder` may be omitted when create flow does not ask for a why field.

### Template Body

Required Shape

- first heading uses `# {{summary}}`
- summary sentence placeholder below the title
- `## Current Read` section
- `## Design Direction` section
- `## Next Artifacts` section

Rules

- Generated topic artifacts should begin with the topic title as the first body heading.
- The generated body should include a short summary sentence before the first named section.
- `Current Read` should orient the reader to the present topic state.
- `Design Direction` should state where the topic should move next.
- `Next Artifacts` should leave room for concrete follow-up artifacts.
- When a tool does not read this contract directly, it may fall back to a maintained built-in topic template that preserves the same generated body shape.

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.definition.v1.schema.md](tiinex.definition.v1.schema.md)
  - Value: rbfkffH9ipO2U1sbrX1fD8JlK-_UDTdp3c_27a5C-eM