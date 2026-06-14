# Continuity Context

- Envelope Schema: [tiinex.root.v1](tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.root.v1](tiinex.root.v1.schema.md)
  - Created At: 2026-06-14 00:00:00
  - Trace: [tiinex.root.v1.schema.md](tiinex.root.v1.schema.md)
  - Origin:
    - [relative](tiinex.root.v1.schema.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/0e6d169685d56c913cb890ba568a96b366ebd4bf/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.evidence.v1](tiinex.evidence.v1.schema.md)
  - Created At: 2026-06-05 03:00:00
  - Summary: Schema for readable evidence artifacts that preserve supporting material with provenance.

---

# Evidence

- Status: maintained schema note

## Summary

This schema defines artifacts whose main job is to preserve supporting material
in a form that later readers, traces, and tools can still judge.

It is for evidence slices where the main value is the preserved material,
together with what it supports, how it is represented, and what provenance is
available.

## Schema Validation Contract

### Evidence Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.evidence.v1`

Rules

- `tiinex.evidence.v1` identifies artifacts centered on preserved supporting material.
- The body should make the evidence slice legible without requiring special tooling.
- An evidence artifact should let a later reader tell what the material supports and how directly it represents the underlying source.
- Prose outside `Schema Validation Contract` may explain the schema, but it does not add required validation rules.

### Evidence Body

Required Shape

- first body heading after the continuity envelope
- `## Supported Claim` section
- `## Provenance` section
- `## Evidence Material` section
- either `## Interpretation Limits` or `## Fidelity Notes` section

Optional Sections

- Representation
- Linked Artifacts
- References
- Interpretation Notes
- Fidelity Notes

Rules

- An evidence artifact should begin with a human-readable title.
- An evidence artifact must expose the supported claim in a machine-detectable section named `Supported Claim`.
- An evidence artifact must expose provenance in a machine-detectable section named `Provenance`.
- An evidence artifact must expose the preserved supporting material in a machine-detectable section named `Evidence Material`.
- An evidence artifact must expose at least one explicit limit surface through `Interpretation Limits` or `Fidelity Notes`.
- An evidence artifact should contain enough body content that a later reader can identify the material being preserved.
- The body should make the supported claim or question readable rather than hiding it in sparse metadata.
- The required signal sections may contain prose, lists, or sub-items, but their section headings should remain recognizable.
- `Current -> Summary` or other envelope metadata may support orientation, but they do not replace the required evidence signal surfaces.
- Follow-up sections must not replace the preserved material itself.
- If the artifact is mainly a raw runtime export rather than curated supporting material, another schema should own it instead.

### Evidence Provenance And Fidelity

Allowed Shapes

- direct quote or excerpt
- summarized evidence with explicit limits
- screenshot or attachment description
- curated evidence bundle with multiple sub-items
- transcript extract with provenance notes

Rules

- An evidence artifact should make clear what the preserved material is.
- An evidence artifact should make clear what the material supports, illustrates, or bears on.
- An evidence artifact should make clear how directly it represents the underlying source.
- `Provenance` should name the source and representation shape when that information is known.
- `Evidence Material` should preserve the readable excerpt, summary, description, bundle items, transcript material, or explicit asset reference itself rather than only naming it.
- `Interpretation Limits` or `Fidelity Notes` should state important transformation, redaction, excerpting, or scope limits when those limits are present.
- When provenance is partial, transformed, or redacted, the artifact should say so explicitly.
- When the grounded material is not a `.trace.md` artifact or plain markdown file, the evidence artifact may preserve it through a bounded description, excerpt, attachment reference, or other explicit non-traversable target description.
- The normal Tiinex `Origin` shape remains valid for evidence artifacts even when the grounded material is not markdown.
- When the grounded source may move, be renamed, or otherwise drift, a commit-pinned `browse + git` provenance target should be preferred when available so recovery remains durable.
- When concrete files, traces, or other durable artifacts ground the evidence, the artifact should prefer explicit readable target references over vague mentions.

### Evidence Envelope Companions

Optional Fields

- `Current -> Why`
- `Current -> Summary`
- `Current -> Authors`
- `Current -> Origin`

Rules

- Evidence artifacts may carry light current-side metadata when it helps a reader orient quickly.
- Evidence artifacts should declare parent signal when they continue, refine, or collect supporting material for an earlier local artifact.
- Evidence artifacts should avoid turning envelope metadata into the only provenance-bearing surface.

### File Naming

Allowed Shapes

- `<lineage>.trace.md`
- `<lineage>-<evidence-slug>.trace.md`

Rules

- Evidence artifacts should keep the lineage label first.
- The optional slug should describe the preserved material or evidence slice.
- Evidence artifacts should prefer short human-readable slugs.
- Evidence artifacts should keep the `.trace.md` suffix stable.

### Interpretation Boundaries

Rules

- Use `tiinex.evidence.v1` when the artifact is mainly preserving supporting material together with provenance and fidelity cues.
- Do not use `tiinex.evidence.v1` for broad topic discussion or generic task planning.
- Do not use `tiinex.evidence.v1` for thin pointers or opaque runtime exports.
- If the artifact's main job is to land what now governs, another schema should own it.

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.evidence.v1
  - Created At: 2026-06-05 00:00:00
  - Summary: Log excerpt supporting the stale-parent diagnosis.

---

# Stale Parent Evidence

## Supported Claim

- the current parent link still points at an outdated target

## Provenance

- Source: local validator run
- Representation: excerpt

## Evidence Material

- resolver returned the stale parent permalink instead of the intended committed target

## Interpretation Limits

- this excerpt supports the mismatch diagnosis but does not by itself choose the replacement target
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

- an evidence artifact should preserve enough material and provenance that a later reader can judge what the evidence actually supports
- if the artifact is mostly runtime export rather than curated supporting material, a runtime trace schema may be a better fit
- if the artifact is mostly design reasoning or execution planning, another schema may be a better fit
- evidence bundles may contain several sub-items as long as the supported claim stays readable

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

- The current evidence create surface uses version `1`.
- `createTitle` should label the create action as `Create Evidence`.
- `summaryPrompt` should ask for the evidence title.
- `summaryPlaceholder` should guide the user toward the supporting material being preserved.
- `whyPrompt` and `whyPlaceholder` may be omitted when create flow does not ask for a why field.

### Template Body

Required Shape

- first heading uses `# {{summary}}`
- `## Supported Claim` section
- `## Provenance` section
- `## Evidence Material` section
- `## Interpretation Limits` section

Rules

- Generated evidence artifacts should begin with the evidence title as the first body heading.
- `Supported Claim` should state what the evidence bears on.
- `Provenance` should state where the material came from and how it is represented.
- `Evidence Material` should preserve the readable supporting material itself.
- `Interpretation Limits` should state any important fidelity limits or scope limits.
- Tools should preserve the same generated body shape even when they use a maintained built-in template.

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.root.v1.schema.md](https://github.com/Tiinex/docs/blob/0e6d169685d56c913cb890ba568a96b366ebd4bf/.topics/.schemas/tiinex.root.v1.schema.md)
  - Value: jIvC9iQXvwteop-FPzq7t6ES5WYMrX-P2K9-7mvsIuk