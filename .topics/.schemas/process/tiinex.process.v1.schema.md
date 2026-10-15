# Continuity Context

- Envelope Schema: [tiinex.root.v1](../tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.root.v1](../tiinex.root.v1.schema.md)
  - Created At: 2026-10-06 19:08:00
  - Trace: [tiinex.root.v1.schema.md](../tiinex.root.v1.schema.md)
  - Origin:
    - [relative](../tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.process.v1](tiinex.process.v1.schema.md)
  - Created At: 2026-10-06 19:08:00
  - Authors: Anchor; Sigma
  - Summary: Schema for reusable Process identity, applicability, topology boundary, and interpretation without conflating Process roots with generic Topic artifacts.

---

# Process

- Status: candidate local schema note

## Summary

This schema defines artifacts whose main job is to preserve one reusable Process definition as a durable semantic root.

A Process root names the reusable procedure, bounds where it may apply, points to its typed topology, and states what process presence does not prove. It does not represent one execution of that Process.

## Schema Validation Contract

### Process Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.process.v1`

Rules

- `tiinex.process.v1` identifies reusable Process definition roots, not generic working topics and not execution instances.
- A Process root must make reusable identity, purpose, applicability, topology boundary, and interpretation limits readable without requiring host-specific tooling.
- Presence, carriage, discovery, selection, or directory placement of a Process artifact does not establish applicability, execution, authority, acceptance, current work, or completion.
- Prose outside `Schema Validation Contract` may explain the schema, but it does not add required validation rules.

### Process Body

Required Shape

- first body heading after the continuity envelope
- `## Process Identity` section
- `## Purpose And Scope` section
- `## Applicability And Conditions` section
- `## Process Topology` section
- `## Interpretation Limits` section

Optional Sections

- Roles And Responsibilities
- Entry And Outcomes
- Recovery And Return
- Related Artifacts
- References

Rules

- A Process artifact should begin with a human-readable Process title.
- Required sections must remain understandable without executing the Process.
- Process definition prose must not become hidden execution state.
- Forward topology references must not replace semantic `Parent` continuity.

### Process Identity

Required Fields

- Name
- Version
- Canonical Identifier
- Human Label

Rules

- `Canonical Identifier` should remain stable across host presentations of the same reusable Process definition.
- `Version` describes the Process definition version and is not a run counter or carrier dimension.

### Purpose And Scope

Required Fields

- Purpose
- Semantic Boundary
- Intended Domains
- Not Intended For

Rules

- `Purpose` states what reusable procedural outcome the Process is designed to support.
- `Semantic Boundary` states the main responsibility boundary of the Process definition.
- `Intended Domains` and `Not Intended For` bound applicability without activating the Process.

### Applicability And Conditions

Required Fields

- Applicability Meaning
- Unknown Meaning

Rules

- `Applicability Meaning` states what qualified condition makes the Process relevant to a real work context.
- `Unknown Meaning` must preserve unresolved applicability rather than inferring activation from carriage, discovery, directory presence, or Role participation.

### Process Topology

Required Fields

- Topology Meaning
- Entry Meaning
- Outcome Meaning

Optional Fields

- Transition Family
- Entry Position
- Terminal Positions
- Relation Family
- Composition Boundary

Rules

- Executable semantic positions should use `tiinex.transition.definition.v1` when they need durable independent definition.
- Durable branch, outcome, loop, return, composition, or sub-process edges should use `tiinex.relation.v1` when the relation itself has independent semantic value.
- A Process root may reference typed topology but must not duplicate step contracts merely to keep all semantics in one file.
- `Parent` remains artifact continuity ancestry and must not be reinterpreted as executable Process topology.
- Generic Topics may support explanatory or exploratory threads around a Process but do not substitute for Process-root identity when the artifact's main job is reusable Process definition.

### Interpretation Limits

Required Fields

- Does Not Prove
- Must Not Be Inferred
- Execution Boundary

Rules

- A Process definition does not prove that the Process ran, is active, is accepted for every context, owns current work, or grants mutation authority.
- Execution evidence belongs to the real work lineage, Handoffs, Returns/Reductions, Evidence, and other qualified artifacts that record what actually happened.
- Process applicability remains separate from Process carriage and discovery.

### File Naming

Allowed Shapes

- `<lineage>-<process-slug>.trace.md`
- `<lineage>-<process-slug>-process.trace.md`

Rules

- Process artifacts should keep the lineage coordinate first.
- The optional `-process` suffix is presentation/discovery convention, not semantic type authority.
- Process artifacts should keep the `.trace.md` suffix stable.

## Artifact Creation Contract

### Creation Fields

Required Fields

- Name
- Version
- Canonical Identifier
- Human Label
- Purpose
- Semantic Boundary
- Intended Domains
- Not Intended For
- Applicability Meaning
- Unknown Meaning
- Topology Meaning
- Entry Meaning
- Outcome Meaning
- Does Not Prove
- Must Not Be Inferred
- Execution Boundary

Optional Fields

- Transition Family
- Entry Position
- Terminal Positions
- Relation Family
- Composition Boundary

### Creation Rules

Rules

- Creation tools should create a reusable Process definition, never silently model one execution instance.
- Unknown applicability, entry, outcome, or topology state must remain explicit rather than being inferred from carriage or directory placement.
- Creation tooling must not infer Role-holder assignment, recipient authority, acceptance, current work, or mutation authority from Process creation.
- Typed Transition Definitions and Relations remain separately owned artifacts when their semantics are durable enough to stand independently.

## Minimal Example

```md
# Example Review Process

## Process Identity

- Name: Example Review Process
- Version: 1
- Canonical Identifier: example.review-process.v1
- Human Label: Example Review Process

## Purpose And Scope

- Purpose: Provide one reusable review procedure.
- Semantic Boundary: Defines reusable review semantics, not evidence that a review occurred.
- Intended Domains: bounded example review work
- Not Intended For: proving execution, acceptance, authority, or completion

## Applicability And Conditions

- Applicability Meaning: applicable only when qualified work selects this review procedure.
- Unknown Meaning: if selection or authority is unresolved, applicability remains unresolved.

## Process Topology

- Topology Meaning: typed Transition Definitions and Relations define followable positions and branches.
- Entry Meaning: entry is determined by qualified Process topology and invocation context.
- Outcome Meaning: outcomes are represented by qualified topology and real execution artifacts.
- Transition Family: example-review

## Interpretation Limits

- Does Not Prove: that the Process ran or that its outcome was accepted.
- Must Not Be Inferred: current work, holder authority, work transfer, or mutation authority from Process presence.
- Execution Boundary: real work lineage and qualified execution evidence remain authoritative about what happened.
```

## Validation-Friendly Shape

Keep this maintained schema note in the exact section order used here: `Summary`, `Schema Validation Contract`, `Artifact Creation Contract`, `Minimal Example`, `Validation-Friendly Shape`, and `Interpretation Notes`.

Maintain the section headings exactly in this schema note. Free markdown inside those sections is allowed, but adding undeclared new top-level schema-note section headings should be treated as schema drift.

## Interpretation Notes

- Process is a reusable procedural definition, not a generic Topic and not one execution instance.
- Transition Definition owns durable executable positions.
- Relation owns durable non-parent topology edges when the relation itself warrants an artifact.
- Topic remains appropriate for bounded working threads around Process design or execution when Topic is truly the artifact's main role.
- Process roots may be distributed through `.processes` discovery surfaces, but discovery never establishes applicability.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: [tiinex.root.v1.schema.md](../tiinex.root.v1.schema.md)
  - Value: QXbg7uxlhO1ou4PukRaub3fSJ_Ef32mSubsI2ib1LH0

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:oCxWS7rvD54hEE1b54lcKqlryDJ26PeX4cifgh5H3BY
