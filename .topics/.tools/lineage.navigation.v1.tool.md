# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3e6432421e72c45bd4ad713d2a6df32c88527074/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.tool.v1](https://github.com/Tiinex/docs/blob/3e6432421e72c45bd4ad713d2a6df32c88527074/.topics/.schemas/tiinex.tool.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.v1.tool.md](./tiinex.v1.tool.md)
  - Origin:
    - [relative](tiinex.tool.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/3e6432421e72c45bd4ad713d2a6df32c88527074/.topics/.tools/tiinex.v1.tool.md)
- Current
  - Current Schema: [tiinex.tool.v1](https://github.com/Tiinex/docs/blob/3e6432421e72c45bd4ad713d2a6df32c88527074/.topics/.schemas/tiinex.tool.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Tool contract for navigating Tiinex lineage without inventing missing continuity, relations, origin, preservation, or evidence.

---

# Lineage Navigation Tool

- Status: draft tool definition

## Tool Identity

- Name: Lineage navigation tool
- Version: 1
- Tool Family: navigation aid
- Canonical Identifier: lineage.navigation.v1
- Base Tool: tiinex.tool.v1
- Implementation Surface: viewer, CLI, extension, runtime helper, LLM procedure, or human review checklist

## Purpose And Scope

- Purpose: help an actor move through Tiinex lineage, origins, relations, gaps, and integrity signals without fabricating missing context.
- In Scope: parent traversal, relation awareness, origin recovery, missing-parent gaps, integrity overlays, schema-aware presentation, and LLM interpretation limits.
- Out Of Scope: proving truth, completing missing lineage, preserving source material, validating every schema, or creating stronger artifact interpretations automatically.
- Intended Users: people, viewers, CLIs, LLM runtimes, review tools, Atlas-like maps, and import/export tools.

## Operating Boundary

- Operator: human, viewer, runtime, CLI, extension, or LLM agent acting under a reviewable tool boundary.
- Operating Environment: local artifact set, repository checkout, exported bundle, browser workspace, runtime memory, or review session.
- Authority Boundary: navigation does not create lineage, evidence, truth, consent, authorship, identity, or preservation by itself.
- Human Review Boundary: user review is required before missing context is repaired, source material is preserved, or findings are used as stronger artifact types.

## Inputs And Materials

- Inputs: Tiinex artifact markdown, continuity envelopes, paths, links, origins, relations, integrity entries, schema references, and optional adapter findings.
- Materials: artifacts and referenced source identities available to the navigation environment.
- Does Not Require: a specific app, programming language, online access, or perfect repository layout.
- Source Types: local files, repository files, exported bundles, workspace records, relation artifacts, adapter-generated findings, and external URLs.

## Outputs And Claims

- Outputs: navigation graph, ordered lineage view, gap list, relation view, origin view, status labels, or review checklist.
- Claims Made: the tool followed declared Tiinex navigation rules over the material it could inspect.
- Claims Not Made: truth, complete graph coverage, source preservation, evidence, consent, or correctness of missing/unreachable material.
- Output Schemas: may support traversal runtime, relation, discovery finding, or viewer-specific outputs when those schemas are declared separately.

## Action Boundary

- Read Actions: inspect declared artifact set and declared linked material when allowed by the environment.
- Write Actions: none by default.
- Change Actions: no artifact mutation by default.
- User-Required Actions: repair missing lineage, preserve source material, create relation, create Use as artifact, authenticate, or write back.
- Open Actions: opening external source should be visible.
- Export Actions: explicit user action only.

## Interpretation Boundary

- Interpretation Allowed: identify declared parent, current schema, origin, relation, integrity entry, missing target, unavailable material, and possible gap.
- Interpretation Not Allowed: invent missing parent, infer relation as parent, infer origin as parent, treat URL as preserved material, treat byte integrity as truth, or treat adapter finding as evidence.
- Human Review Needed: before interpreting a discovery finding as feedback, task, evidence, resource need, pointer, or acceptance.
- LLM Limits: LLM runtimes must keep missing material as missing rather than completing lineage from plausible filenames or topic names.

## Failure Modes

- Failure Modes: missing parent, unreachable origin, broken relative link, stale source, unrecognized schema, duplicate ids, ambiguous filename, invalid integrity, rate-limited adapter source, or partial artifact set.
- Misuse Risks: using path order as lineage truth, turning relation into parent, treating origin as parent, hiding gaps, or using cached material as preserved evidence.
- Visible Failure Behavior: show gaps, unknowns, stale state, unsupported schemas, and unavailable targets explicitly.
- Data Loss Risks: collapsing uncertainty into a clean graph can hide the most important review signal.

## Portability Notes

- Portable Semantics: parent continuity is stronger than relation; relation is a side connection; origin is provenance or recovery context; source URL is not preserved material; integrity is a scoped check, not truth.
- Environment Assumptions: the tool can inspect artifact text and resolve some paths or links according to its environment.
- Non-Portable Details: exact UI, graph layout, storage, caching, online access, link resolver, and schema registry.
- LLM Runtime Notes: preserve uncertainty and cite observed artifact fields rather than guessing missing fields.
- Viewer Notes: display gaps and weak origins as first-class status, not as empty success.

## Examples

A file named `001-1-1.trace.md` may look like a child of `001-1.trace.md`, but the parent envelope is the stronger signal. If the parent cannot be resolved, the viewer should show a parent gap rather than silently trusting the filename.

A GitHub issue finding can be navigated as a Tiinex artifact if it exists in the workspace. That does not mean the GitHub issue body was preserved, and it does not make the issue evidence unless an evidence artifact or explicit preservation boundary exists.

## Related Tools

- [tiinex.tool.v1.md](tiinex.tool.v1.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.v1.tool.md](https://github.com/Tiinex/docs/blob/3e6432421e72c45bd4ad713d2a6df32c88527074/.topics/.tools/tiinex.v1.tool.md)
  - Value: Chuy11AaJ9aktiFvvnVLXsstUaJFdtw1pNMB_SZink4

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: D7kvSLRax6p_MLtcfLu0eVtrje1wogheXh8MCZ1J0Ek