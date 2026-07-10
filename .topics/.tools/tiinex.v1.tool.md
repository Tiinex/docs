# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/f8b37239f17bc48180cfc8f93f812c6ffc6edc1f/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.tool.v1](https://github.com/Tiinex/docs/blob/380ec9b41a1872e126c08b55c21007828dac9514/.topics/.schemas/tiinex.tool.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.tool.v1.schema.md](../.schemas/tool/tiinex.tool.v1.schema.md)
  - Origin:
    - [relative](../.schemas/tiinex.tool.v1.schema.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/380ec9b41a1872e126c08b55c21007828dac9514/.topics/.schemas/tiinex.tool.v1.schema.md)
- Current
  - Current Schema: [tiinex.tool.v1](https://github.com/Tiinex/docs/blob/380ec9b41a1872e126c08b55c21007828dac9514/.topics/.schemas/tiinex.tool.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Base tool contract for bounded Tiinex tool definitions.

---

# Tiinex Tool Base Contract

- Status: draft tool definition

## Tool Identity

- Name: Tiinex tool base contract
- Version: 1
- Tool Family: base tool contract
- Canonical Identifier: tiinex.tool.v1
- Implementation Surface: portable definition, not executable implementation

## Purpose And Scope

- Purpose: define what Tiinex means by a tool before specializing tools into interfaces, adapters, validators, viewers, checklists, navigation methods, runtime helpers, or physical aids.
- In Scope: purpose, operating boundaries, inputs, outputs, claims, actions, interpretation limits, failure modes, and portability.
- Out Of Scope: proving that a tool was used correctly, executing the tool, recording one tool run, or treating tool output as truth.
- Intended Users: humans, LLMs, maintainers, implementers, reviewers, and future tool builders.

## Operating Boundary

- Operator: a person, team, LLM agent, runtime, app, extension, CLI, physical actor, or mixed actor.
- Operating Environment: any declared environment where the tool can be used within its limits.
- Authority Boundary: tool status does not grant truth, consent, authorship, access, evidence, preservation, safety, legality, or permission by itself.
- Human Review Boundary: human review is required before outputs are used for stronger claims outside the tool boundary.

## Inputs And Materials

- Inputs: declared inputs required by the concrete tool.
- Materials: objects, texts, sources, artifacts, places, procedures, signals, runtime state, or physical material the tool works on.
- Does Not Require: software, network access, automation, or executable implementation unless the concrete tool declares it.
- Material Volatility: concrete tools should state whether material is stable, mutable, private, fragile, volatile, or unavailable.

## Outputs And Claims

- Outputs: bounded outputs declared by the concrete tool.
- Claims Made: the output was produced or framed within the declared tool boundary.
- Claims Not Made: truth, evidence, identity, consent, authorship, safety, legality, preservation, validation, complete context, or correct use unless separately declared by another artifact.
- Confidence Language: prefer scoped labels such as `observed`, `candidate`, `gap`, `bounded output`, or `needs review` over generic trust labels.

## Action Boundary

- Read Actions: inspect, observe, receive, parse, view, measure, or handle only what the concrete tool declares.
- Write Actions: none by default; concrete tools must declare writes, notes, commits, uploads, sends, publications, mutations, annotations, or records.
- Change Actions: none by default; concrete tools must declare environmental, runtime, social, or physical changes.
- User-Required Actions: any action involving authority, preservation, writing, authentication, physical handling, destructive change, or social consent unless the concrete contract says otherwise.
- Auth Actions: no hidden authentication.
- Physical Actions: no hidden physical handling.
- Social Actions: no hidden social consent or implied permission.

## Interpretation Boundary

- Interpretation Allowed: concrete tools may interpret only within their declared purpose and scope.
- Interpretation Not Allowed: tools must not silently infer missing lineage, missing source material, missing consent, missing evidence, missing authority, missing identity, or missing truth.
- Human Review Needed: before stronger claims, preservation, evidence use, write actions, destructive actions, social actions, or physical handling.
- LLM Limits: LLM-based tools must keep gaps and uncertainty visible rather than completing them from plausible context.

## Failure Modes

- Failure Modes: vague purpose, hidden authority, hidden writes, hidden preservation, output-as-truth, wrong operator, wrong material, missing context, overbroad scope, or environment mismatch.
- Misuse Risks: treating a tool definition as proof of a successful tool run or treating a tool output as stronger than its declared boundary.
- Visible Failure Behavior: show gap, unknown, unsupported, unsafe, unavailable, ambiguous, or out-of-scope rather than silently normalizing failure.

## Portability Notes

- Portable Semantics: bounded purpose, declared operator, declared material, scoped outputs, explicit action boundary, interpretation boundary, failure visibility, and no automatic authority.
- Environment Assumptions: a later reader can inspect the definition and understand the tool without the original implementation.
- Non-Portable Details: exact UI, device, programming language, runtime storage, local procedure, physical handling practice, or organization-specific authority.
- Human Procedure Notes: human tools should keep instructions concrete and reviewable.
- Digital Runtime Notes: digital tools should expose boundaries rather than hiding them in code.
- Physical Environment Notes: physical tools should declare handling, custody, safety, and observation limits when relevant.

## Examples

A spade can be a tool, but it does not prove what was found. A map can be a tool, but it does not prove current terrain. A viewer can be a tool, but it does not prove truth. A validator can be a tool, but its method scope limits what it verifies. An adapter can be a tool, but it must not erase the boundary it crosses.

## Related Tools

- [lineage.navigation.v1.tool.md](lineage.navigation.v1.tool.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.tool.v1.schema.md](https://github.com/Tiinex/docs/blob/380ec9b41a1872e126c08b55c21007828dac9514/.topics/.schemas/tiinex.tool.v1.schema.md)
  - Value: tml1HotbCdVgQTNlf4bYzZbfDYSmKUzNF8G1twk1JHo

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: RzxwCPoJgImHeUXD4dAKTJrJerOEwwl-c3rezFAxAGU