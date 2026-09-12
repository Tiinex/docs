# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/5986f0e5d48273f135e8fe4ef33dda20cea052f4/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.tool.v1](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.schemas/tiinex.tool.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.tool.v1.md](../.tools/tiinex.v1.tool.md)
  - Origin:
    - [relative](../.tools/tiinex.tool.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.tools/tiinex.v1.tool.md)
- Current
  - Current Schema: [tiinex.interface.v1](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.schemas/tiinex.interface.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Base interface contract for Tiinex contact boundaries and handoff surfaces.

---

# Tiinex Interface Base Contract

- Status: draft interface definition

## Interface Identity

- Name: Tiinex interface base contract
- Version: 1
- Interface Family: base interface contract
- Canonical Identifier: tiinex.interface.v1
- Base Tool: tiinex.tool.v1
- Implementation Surface: portable definition, not executable implementation

## Boundary And Sides

- Side A: one declared context, actor, material, environment, system, procedure, place, or source.
- Side B: another declared context, actor, material, environment, system, procedure, place, or target.
- Boundary Description: the interface is the visible contact point where sides meet and where material, meaning, signal, state, or authority may be handed off.
- May Cross: only the material, meaning, signal, state, or authority declared by the concrete interface.
- Must Not Cross: hidden authority, hidden consent, hidden preservation, hidden writes, hidden private material, hidden physical handling, or unreviewed stronger interpretation.
- Authority Boundary: interface status does not grant permission, truth, evidence, consent, access, or preservation by itself.

## Mediation Role

- Mediation Purpose: make contact and handoff between contexts explicit and reviewable.
- Transformation Allowed: concrete interfaces may translate, frame, route, expose, represent, or mediate only what they declare.
- Transformation Not Allowed: silently changing meaning, custody, authority, evidence status, preservation status, or source context.
- Translation Role: an interface may translate, but translation is only one possible mediation role.
- Observation Role: an interface may expose observations without proving truth.
- Presentation Role: an interface may make material readable without making it authoritative.

## Inputs And Contact Points

- Inputs: declared material, actor action, signal, state, artifact, source, place, or context entering the interface.
- Contact Points: the declared surface where contact occurs, such as page, map, form, doorway, protocol, UI, API, scanner, conversation, checklist, or handoff procedure.
- Required Context: enough context for a later reader to understand what sides met and what the interface was allowed to pass.
- Optional Context: environment, date, operator, custody, access, permission, language, device, or source state when relevant.

## Outputs And Hand-Offs

- Outputs: declared material, signal, state, representation, artifact candidate, note, view, or decision support leaving the interface.
- Hand-Off Target: the next actor, tool, artifact, procedure, runtime, place, or review surface receiving output.
- Claims Made: the output crossed the declared interface within the declared boundary.
- Claims Not Made: truth, evidence, preservation, identity, consent, authorship, legality, safety, complete context, or correct interpretation unless another artifact establishes that claim.
- Handoff State: concrete interfaces should label output as observed, represented, transformed, partial, ambiguous, unavailable, or needing review when relevant.

## Action Boundary

- Read Actions: receive, inspect, expose, observe, represent, or route declared material only.
- Write Actions: none by default.
- Change Actions: none by default.
- User-Required Actions: any action involving authority, preservation, writing, authentication, physical handling, destructive change, or social consent.
- Physical Actions: explicit if material or environment is physically handled.
- Social Actions: explicit if a person is asked, represented, contacted, consented, or affected.

## Loss And Assumption Boundary

- Possible Losses: context loss, translation loss, filtering, compression, outdated representation, ambiguous symbols, missing material, custody loss, or user misunderstanding.
- Assumptions Made: only those declared by the concrete interface.
- Assumptions Not Made: current truth, complete context, correct interpretation, safe passage, permission, consent, preservation, or evidence status.
- Loss Visibility: concrete interfaces should surface loss, uncertainty, ambiguity, partial state, or blocked crossing.

## Failure Modes

- Failure Modes: wrong side, wrong boundary, missing context, hidden transformation, unreviewed handoff, outdated representation, blocked crossing, or overclaimed output.
- Misuse Risks: treating a contact point as authority or treating represented material as preserved truth.
- Visible Failure Behavior: show unknown, blocked, partial, ambiguous, unsafe, unsupported, or out-of-scope rather than inventing or smoothing over the gap.

## Portability Notes

- Portable Semantics: declared sides, declared crossing, visible mediation, explicit action boundary, visible loss, and no automatic authority.
- Environment Assumptions: a later reader can inspect the definition and understand the contact boundary without the original implementation.
- Non-Portable Details: exact physical surface, UI, device, language, local procedure, runtime, permission model, social setting, or environment.
- Human Procedure Notes: human interfaces should keep handoff and review points visible.
- Digital Runtime Notes: digital interfaces should not hide source, auth, cache, write, or preservation boundaries.
- Physical Environment Notes: physical interfaces should declare handling, custody, safety, and observation limits when relevant.

## Examples

A map is an interface between terrain and traveler. It may represent routes, scale, and labels, but it does not prove current ground truth or safe passage.

A form is an interface between a person and a record. It may capture answers, but it does not prove truth, consent beyond the declared consent boundary, or complete context.

An API is an interface between systems. It may expose data, but the call response is not preserved Tiinex material until an artifact boundary says so.

## Related Tools

- [tiinex.tool.v1.md](../.tools/tiinex.tool.v1.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.tool.v1.md](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.tools/tiinex.v1.tool.md)
  - Value: Chuy11AaJ9aktiFvvnVLXsstUaJFdtw1pNMB_SZink4

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: oejScOS9P1uSAldPpVaOOERn5SJY6RXtSzPjB5V7kSY