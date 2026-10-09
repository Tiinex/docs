# Continuity Context

- Envelope Schema: [tiinex.root.v1](../../tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.entry.v1](../tiinex.entry.v1.schema.md)
  - Created At: 2026-10-01 00:00:00
  - Trace: [tiinex.entry.v1.schema.md](../tiinex.entry.v1.schema.md)
  - Origin:
    - [relative](../tiinex.entry.v1.schema.md)
- Current
  - Current Schema: [tiinex.entry.target.v1](tiinex.entry.target.v1.schema.md)
  - Created At: 2026-10-05 19:18:00
  - Summary: Entry specialization for selecting or discovering the execution environment in which another Entry is interpreted or performed without granting authority by target selection.

---

# Target Entry

- Status: draft schema note

## Summary

This schema specializes `tiinex.entry.v1` for reusable environment targets.

A Target Entry answers the human question **where** an Entry will be interpreted or performed. It may describe a host application, provider surface, runtime environment, automation context, extension host, local terminal, browser surface, or another bounded execution environment.

Target selection augments another Entry. It does not replace the Entry's purpose, create work authority, select a Task, transfer responsibility, authorize remote mutation, or make referenced material applicable merely by presence.

## Schema Validation Contract

### Target Entry Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.entry.target.v1`

Rules

- Target Entry inherits the reusable identity, purpose, context, method, interpretation-limit, and portability semantics of `tiinex.entry.v1`.
- A Target Entry describes environment-specific augmentation, capabilities, limits, and qualified references needed to operate in that environment.
- Target Entry semantics are orthogonal to the selected purpose Entry: the purpose Entry answers what the receiver is trying to do; the Target Entry answers where that purpose is being interpreted or performed.
- Selection or discovery of a Target Entry does not create Role-holder state, Handoff routing, recipient authority, task ownership, process applicability, work transfer, acceptance, completion, or remote-write authority.

### Target Entry Body

Required Sections

- Target Identity

Optional Sections

- Target Capabilities
- Target Material
- Target Compatibility

Rules

- The inherited Entry sections remain required according to `tiinex.entry.v1`.
- Target-specific sections augment inherited Entry meaning and must not override another qualified authority source.

### Target Identity

Required Fields

- Target Handle
- Target Kind
- Canonical Target Identifier

Optional Fields

- Provider
- Host
- Human Label

Rules

- `Target Handle` is the stable human/discovery handle for the environment target.
- `Target Kind` states the broad environment class without granting capabilities by implication.
- `Canonical Target Identifier` identifies the target definition within its owning authority surface.
- `Provider` and `Host`, when present, are descriptive identity fields and do not establish provider authority or host capability by themselves.

### Target Capabilities

Optional Fields

- Provides
- Limitations

Rules

- `Provides` lists declared environment capabilities useful for discovery and adaptation.
- `Limitations` lists declared environment constraints that materially affect entry or execution.
- Capability declarations are environment facts or expectations to qualify, not permission or semantic authority.

### Target Material

Entry Shape

- First-Level Hyphen List Item

Required Fields

- Reference
- Purpose

Optional Fields

- Label
- Qualification Notes

Rules

- Entries under `## Target Material` are repeated named declarations using this shape.
- Declaration names must be unique within `## Target Material` and should be short human-readable descriptions of the material's role for this environment target.
- Target Material references environment-specific Process profiles, capability material, adaptation guidance, or other qualified material relevant to operating in this target.
- Referenced material retains its own schema, applicability, currentness, and authority semantics.
- Target Material presence does not make a Process active or applicable by itself.

### Target Compatibility

Optional Fields

- Compatible Entry Families
- Required Entry Capabilities
- Compatibility Notes

Rules

- Compatibility fields may narrow discovery when a target is unsuitable for some Entry families or requires explicit Entry capabilities.
- Absence of compatibility fields means no additional Target-Entry compatibility restriction is declared by this artifact; it does not prove that every composition is operationally possible.
- Discovery should prefer capability/contract matching over growing hardcoded per-Entry allowlists.

### Composition With Purpose Entries

Rules

- A qualified purpose Entry may be composed with zero or one selected Target Entry for one bounded entry invocation unless another qualified contract explicitly defines richer composition.
- No Target Entry is required when environment-specific adaptation is unnecessary.
- In pointerless orientation, the purpose Entry may be primary and the Target Entry may be selected or discovered locally.
- In a routed Handoff, Handoff/Role/qualified relations remain the authority and work-transfer surface; an Entry or Target Entry only shapes recipient startup behavior.
- A routed Handoff should normally allow the recipient to discover a suitable Target Entry locally. It should require one exact target only when that environment is materially part of the bounded work.

### Discovery And Placement

Rules

- Qualified schema identity is the semantic truth for Target Entry discovery; directory placement alone must never classify arbitrary material as a Target Entry.
- The preferred Tiinex human/discovery layout is `.topics/.entries/what/<entry-handle>/` for purpose Entries and `.topics/.entries/where/<target-handle>/` for Target Entries.
- `what` and `where` are navigation/discovery dimensions, not Parent, Project, lifecycle, authority, or compatibility semantics.
- Provider- or host-specific Target Entries belong in the semantically owning interop/host Workspace rather than portable Native merely for discoverability.

### Interpretation Boundaries

Rules

- Target Entry does not grant authority, responsibility, Process applicability, capability permission, remote-write permission, acceptance, work transfer, or completion.
- Target capability declarations must not be promoted into Role capabilities or Handoff authority.
- Environment-specific knowledge belongs in the target-owning Workspace and must not be copied into Core or portable Native unless it becomes genuinely provider-neutral semantics.

### File Naming

Allowed Shapes

- `tiinex.entry.target.v1.md`
- `<target-handle>-target-entry.md`
- `<lineage>-<target-handle>-target-entry.trace.md`

## Artifact Creation Contract

### Creation Fields

Required Fields

- Name
- Version
- Canonical Identifier
- Purpose
- Entry Target
- Method
- Target Handle
- Target Kind
- Canonical Target Identifier

Optional Fields

- Entry Family
- Human Label
- In Scope
- Out Of Scope
- Required Context
- Relevant Context
- Context Exclusions
- Readiness Boundary
- Stop Conditions
- Escalation Conditions
- Does Not Establish
- Must Not Be Inferred
- Portable Semantics
- Environment Assumptions
- Non-Portable Details
- Provider
- Host
- Provides
- Limitations
- Target Material
- Compatible Entry Families
- Required Entry Capabilities
- Compatibility Notes

### Creation Rules

Rules

- Creation tools should use this child schema only for reusable environment-target definitions.
- Creation must keep environment description separate from authority and from the purpose Entry being composed.
- Host/provider-specific material should be authored in the semantically owning interop/host Workspace.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: [tiinex.entry.v1](../tiinex.entry.v1.schema.md)
  - Value: ea5SJQIbqVXy7rAFmyZ6L7xkAWQszRI2AWDC0tf5-dA

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:sqWCoFnAfSIg5De_BoD6S1i9uqzLCUI5UgvWJ6-ACio
