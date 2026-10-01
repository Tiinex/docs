# Continuity Context

- Envelope Schema: [tiinex.root.v1](../tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.root.v1](../tiinex.root.v1.schema.md)
  - Created At: 2026-06-14 00:00:00
  - Trace: [tiinex.root.v1.schema.md](../tiinex.root.v1.schema.md)
  - Origin:
    - [relative](../tiinex.root.v1.schema.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/2a40646640f7468bcd250df6988b69e9f047f1bb/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.entry.v1](tiinex.entry.v1.schema.md)
  - Created At: 2026-10-01 00:00:00
  - Summary: General schema for reusable ways of beginning, entering, resuming, or initially orienting within a bounded context, activity, field, process, or interaction.

---

# Entry

- Status: draft schema note

## Summary

This schema defines reusable Entry artifacts.

An Entry describes a way of beginning, entering, resuming, or initially orienting within something bounded. The thing being entered may be a context, activity, field, process, interaction, place, body of material, or another declared domain surface.

Entry semantics do not assume software, an LLM, a user interface, a conversation, a filesystem, or a particular runtime. A human procedure, workshop opening, research orientation, shift start, return-after-interruption method, guided exploration, or digital session entry may all use this schema when the same declared meaning fits.

An Entry definition is not evidence that entry occurred. It does not by itself create authority, permission, ownership, transfer, acceptance, continuation, or completion.

## Entry Semantics

An Entry separates the reusable way of entering from any particular occurrence of using that Entry.

The Entry should make it possible for a reader to understand:

- what is being entered or oriented within
- why this Entry exists
- what context should be established first
- how initial preparation or reconciliation should happen
- what method should be followed before ordinary activity proceeds
- what is sufficient to proceed
- how the initial result should be made useful to involved actors when presentation matters
- what performing or selecting the Entry must not be taken to prove
- which meaning is portable and which details depend on a particular environment

The Entry may be highly specific in its own artifact. The schema itself remains domain-neutral.

## Relationship To Occurrence

Selecting, reading, or carrying an Entry artifact does not prove that an Entry occurred.

A domain that needs to preserve one actual occurrence should use an appropriate event, session, trace, activity, evidence, or other occurrence-owning schema rather than treating the reusable Entry definition as the occurrence record.

## Schema Validation Contract

### Entry Identity

Required Fields

- Name
- Version
- Canonical Identifier

Optional Fields

- Entry Family
- Human Label

Rules

- `Name` identifies the Entry in human-readable form.
- `Version` identifies the declared Entry-definition version.
- `Canonical Identifier` identifies the Entry definition within its declared authority surface.
- `Human Label`, when present, is presentation only and must not replace canonical identity.

### Purpose And Scope

Required Fields

- Purpose
- In Scope
- Out Of Scope

Rules

- `Purpose` states why the Entry exists.
- `In Scope` states what initial entering or orientation behavior belongs to this Entry.
- `Out Of Scope` states important behavior or claims that remain outside the Entry.

### Entry Context

Required Fields

- Entry Target
- Required Context

Optional Fields

- Relevant Context
- Context Exclusions

Rules

- `Entry Target` states what context, activity, field, process, interaction, place, material surface, or other bounded subject is being entered.
- `Required Context` states what must be available or established before ordinary activity may proceed under this Entry.
- `Relevant Context`, when present, identifies context that may improve orientation without becoming an unconditional requirement.
- `Context Exclusions`, when present, identifies material or assumptions that must not be treated as entry authority merely because they are nearby or available.

### Preparation

Required Fields

- Preparation Method

Optional Fields

- Reconciliation Policy
- Discovery Breadth
- Currentness Policy
- Uncertainty Policy

Rules

- `Preparation Method` states how initial grounding, setup, inspection, briefing, orientation, or other preparation should occur.
- `Reconciliation Policy`, when present, states how competing, partial, conflicting, stale, or differently scoped representations should be handled when they can affect the initial picture.
- `Discovery Breadth`, when present, states the intended breadth of initial discovery without requiring exhaustive reading by default.
- `Currentness Policy`, when present, states how currentness should be assessed where time or supersession matters.
- `Uncertainty Policy`, when present, states how unresolved uncertainty should remain visible rather than being silently guessed away.

### Entry Method

Required Fields

- Method
- Readiness Boundary

Optional Fields

- Stop Conditions
- Escalation Conditions

Rules

- `Method` states the reusable way of entering after required preparation is available.
- `Readiness Boundary` states what is sufficient to proceed beyond initial entry or orientation.
- `Stop Conditions`, when present, states conditions under which proceeding should stop rather than silently continue.
- `Escalation Conditions`, when present, states conditions that require stronger review, assistance, or explicit choice.

### Presentation And Interaction

Optional Fields

- Intended Audience
- Presentation Guidance
- Preference Sources
- Interaction Guidance
- Diagnostic Detail Policy

Rules

- `Intended Audience`, when present, states who the entry result or initial orientation is meant to be useful to.
- `Presentation Guidance`, when present, states how the useful result should be presented when presentation is part of the Entry.
- `Preference Sources`, when present, identifies declared actor, participant, audience, accessibility, or domain preferences that should shape presentation without changing semantic authority.
- `Interaction Guidance`, when present, states how involved actors should be engaged during the initial entry.
- `Diagnostic Detail Policy`, when present, states when internal qualification, setup, or diagnostic detail belongs in the foreground presentation.
- Presentation fields do not grant authority to an audience or participant merely because they are addressed.

### Interpretation Limits

Required Fields

- Does Not Establish
- Must Not Be Inferred

Rules

- `Does Not Establish` states authority, state, occurrence, permission, transfer, acceptance, ownership, completion, or other claims that selection or use of the Entry does not establish by itself.
- `Must Not Be Inferred` states important interpretations that must remain unsupported unless another qualified source establishes them.

### Portability Notes

Required Fields

- Portable Semantics
- Environment Assumptions
- Non-Portable Details

Rules

- `Portable Semantics` states the Entry meaning that should survive across suitable implementations, actors, or environments.
- `Environment Assumptions` states capabilities or conditions required to carry out the Entry.
- `Non-Portable Details` states runtime, software, physical, organizational, provider, interface, language, or other environment-specific details that are not part of the portable Entry meaning.

### File Naming

Allowed Shapes

- `tiinex.entry.v1.md`
- `<entry-slug>.entry.md`
- `<entry-slug>-entry.md`
- `<lineage>-entry.trace.md`
- `<lineage>-<entry-slug>.trace.md`

Rules

- `tiinex.entry.v1.md` is the reserved base Entry contract filename for the `tiinex.entry.v1` family.
- Reusable registry-like Entry definitions may use `.entry.md`.
- Lineage-first `.trace.md` names should be used when an Entry artifact participates in ordinary local lineage.
- Entry artifacts define reusable entry meaning; they are not by themselves records that an entry occurred.

### Interpretation Boundaries

Rules

- Entry does not assume a digital runtime, LLM, conversation, software application, or Tiinex host.
- Entry selection does not by itself create an occurrence, route, recipient, holder, participant authority, permission, ownership, transfer, acceptance, continuation, or completion state.
- A runtime may project an Entry into environment-specific interaction, but that projection must preserve the Entry's declared portable meaning and interpretation limits.
- Nearby or carried material does not become controlling merely because an Entry can see or reference it.

## Artifact Creation Contract

### Creation Fields

Required Fields

- Name
- Version
- Canonical Identifier
- Purpose
- In Scope
- Out Of Scope
- Entry Target
- Required Context
- Preparation Method
- Method
- Readiness Boundary
- Does Not Establish
- Must Not Be Inferred
- Portable Semantics
- Environment Assumptions
- Non-Portable Details

Optional Fields

- Entry Family
- Human Label
- Relevant Context
- Context Exclusions
- Reconciliation Policy
- Discovery Breadth
- Currentness Policy
- Uncertainty Policy
- Stop Conditions
- Escalation Conditions
- Intended Audience
- Presentation Guidance
- Preference Sources
- Interaction Guidance
- Diagnostic Detail Policy

### Creation Rules

Rules

- Creation tools should describe the reusable way of entering rather than recording a particular occurrence as if it were the definition.
- Creation tools should keep portable Entry meaning separate from software-, runtime-, organization-, provider-, or interface-specific projection details.
- Unknown context, currentness, precedence, authority, or readiness must remain unknown rather than being guessed.
- Presentation guidance may adapt to involved actors but must not silently change semantic authority or interpretation limits.
- Entry definitions should be understandable by a human reader without requiring hidden runtime state.

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.entry.v1
  - Created At: 2026-10-01 00:00:00
  - Summary: Reusable opening orientation for a field workshop.

---

# Field Workshop Orientation

## Entry Identity

- Name: Field workshop orientation
- Version: 1
- Canonical Identifier: example.field-workshop.orientation.v1

## Purpose And Scope

- Purpose: Establish a shared initial picture before workshop activity begins.
- In Scope: initial orientation, known constraints, participant-facing starting picture
- Out Of Scope: proving participant authority, final decisions, or completed workshop work

## Entry Context

- Entry Target: bounded field workshop
- Required Context: workshop scope, available material, and declared participant roles where applicable

## Preparation

- Preparation Method: inspect the available current workshop material before proposing a starting direction
- Reconciliation Policy: preserve material disagreements and resolve currentness where practical before selecting one representation as controlling

## Entry Method

- Method: present the current shared picture and the most relevant starting directions without beginning substantive workshop work
- Readiness Boundary: involved actors can see the current picture, material uncertainty, and available next directions

## Presentation And Interaction

- Intended Audience: people participating in the workshop
- Presentation Guidance: lead with the current useful picture, keep the structure easy to scan, and foreground diagnostic detail only when it affects a decision

## Interpretation Limits

- Does Not Establish: authority, permission, acceptance, ownership, or completed work
- Must Not Be Inferred: that the first available source is current or controlling merely because it was encountered first

## Portability Notes

- Portable Semantics: orient involved actors before substantive activity begins
- Environment Assumptions: access to the bounded workshop context needed for orientation
- Non-Portable Details: room layout, software, facilitation interface, and communication medium
```

The inherited `# Continuity Integrity` footer is intentionally omitted from the example for readability; the example must not be read as a complete root-valid artifact without that inherited footer.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: [tiinex.root.v1](../tiinex.root.v1.schema.md)
  - Value: QXbg7uxlhO1ou4PukRaub3fSJ_Ef32mSubsI2ib1LH0

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:I9383Ok4t9TfjZjPQqrrMRot52pUw6hJR83BasBHmX8
