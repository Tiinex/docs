# Continuity Context

- Envelope Schema: [tiinex.root.v1](../../tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.root.v1](../../tiinex.root.v1.schema.md)
  - Created At: 2026-06-14 00:00:00
  - Trace: [tiinex.root.v1.schema.md](../../tiinex.root.v1.schema.md)
  - Origin:
    - [relative](../../tiinex.root.v1.schema.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/00adbcc5b0319410cf16752a54dcbf4813173040/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.topic.v1](tiinex.topic.v1.schema.md)
  - Created At: 2026-05-28 18:11:47
  - Summary: Schema for bounded, maintained topic and knowledge lineages.

---

# Topic

- Status: maintained schema note

## Summary

This schema defines artifacts that develop or maintain one bounded subject over time.

A subject may be active design or implementation work, or an owned body of
knowledge such as a maintained introduction, how-to guide, or documentation
area. The reader should understand its purpose, present state, and limits
without knowing Tiinex tooling. A maintained knowledge subject must contribute
substantive guidance or accountable stewardship, not merely list file links.

## Schema Validation Contract

### Topic Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.topic.v1`

Rules

- `tiinex.topic.v1` identifies artifacts centered on one bounded, maintained subject; an active work thread and a living knowledge topic are both valid.
- The Topic should identify its purpose, intended reader or scope, and the substantive state or guidance being carried forward.
- The body should make the current topic legible without requiring special tooling.
- The topic should stay bounded enough that a reader can tell what is being advanced or responsibly maintained.
- A navigational landing Topic is appropriate only when it also owns a coherent documentation purpose, meaningful explanations, and its maintenance boundaries. A links-only index remains insufficient.
- Prose outside `Schema Validation Contract` may explain the schema, but it does not add required validation rules.

### Topic Body

Required Shape

- first body heading after the continuity envelope
- readable prose that advances or maintains one bounded subject with a meaningful present state

Optional Sections

- Current Read
- Design Direction
- Risks
- Open Questions
- Next Artifacts
- Next Steps

Rules

- A topic artifact should begin with a human-readable title.
- A topic artifact should contain enough prose to explain the present topic state.
- Section names inside topic artifacts may vary when the artifact still reads as one coherent thread.
- Forward-looking sections must not replace the continuity envelope's parent relation.

### Topic Envelope Companions

Optional Fields

- `Current -> Why`
- `Current -> Summary`
- `Current -> Authors`

Rules

- Topic artifacts may carry light current-side metadata when it helps a reader orient quickly.
- Topic artifacts should declare parent signal when they continue an earlier topic artifact.
- Topic artifacts should avoid turning envelope metadata into the main body content.

### File Naming

Allowed Shapes

- `<lineage>.trace.md`
- `<lineage>-<topic-slug>.trace.md`

Rules

- Topic artifacts should keep the lineage label first.
- The optional slug should describe the active topic thread.
- Topic artifacts should prefer short human-readable slugs.
- Topic artifacts should keep the `.trace.md` suffix stable.

### Interpretation Boundaries

Rules

- Use `tiinex.topic.v1` when the artifact preserves or advances a bounded working subject or living knowledge subject with a meaningful stewardship boundary.
- A how-to or documentation landing Topic may teach and link to sources, but cannot redefine another schema, imply permissions, or become a generic catalog of artifact types.
- Do not use `tiinex.topic.v1` for schema notes, opaque dumps, links-only indices, or generic holding files.
- If the artifact's main job is to make a decision rather than hold a topic thread, another schema should own it.

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.topic.v1
  - Created At: 2026-06-04 00:00:00
  - Summary: Topic root for the validation tightening pass.

---

# Validation Tightening

This topic captures the current direction for the work.

## Current Read

The schema validator now owns both machine contract shape and maintained body structure.
```

## Validation-Friendly Shape

Keep this maintained schema note in the exact section order already used here:
`Summary`, `Schema Validation Contract`, `Minimal Example`,
`Validation-Friendly Shape`, `Interpretation Notes`, and
`Artifact Creation Contract`.

Maintain the section headings exactly in this schema note. Free markdown inside
those sections is allowed, but adding undeclared new section headings should be
treated as schema drift.

## Interpretation Notes

- topic artifacts should remain readable to humans without special tooling
- the envelope still carries continuity and integrity metadata; instructional prose is not a separate source of normative schema authority
- free markdown inside owned sections is fine when the thread remains legible
- the validator should own the maintained schema shape rather than relying on convention alone

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
- `summaryPrompt` should ask for the topic title.
- `summaryPlaceholder` should guide the user toward the active topic.
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
- The generated body should include one orienting sentence before the first named section.
- `Current Read` should explain the present state of the active work or maintained knowledge.
- For a maintained guide, `Design Direction` may explain how the guidance is applied or improved, without claiming an unrelated design or implementation task.
- `Design Direction` should state where the topic should move next.
- `Next Artifacts` should leave room for concrete follow-up artifacts.
- Tools should preserve the same generated body shape even when they use a maintained built-in template.

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.root.v1.schema.md](https://github.com/Tiinex/docs/blob/00adbcc5b0319410cf16752a54dcbf4813173040/.topics/.schemas/tiinex.root.v1.schema.md)
  - Value: BFWYft1v0Ue0gUoO236DGScvnixS7_MIEwO6mhJhkNw

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: y22R-0VjCYZOH_5xgQABnHvpvRsqJTlox7m1tGOuGBg