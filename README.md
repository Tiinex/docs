# Tiinex Portal / Interaction / Module / Surface / Knowledge Provenance Schema Draft v8.3

Status: final-audit prechecksum draft bundle for Tiinex/docs review. Continuity Integrity footers are intentionally omitted so the maintainer can add canonical checksum footers once before final merge.

## Files

```text
README.md
.topics/.schemas/tiinex.portal.v1.schema.md
.topics/.schemas/tiinex.portal.time.v1.schema.md
.topics/.schemas/tiinex.interaction.unit.v1.schema.md
.topics/.schemas/tiinex.schema.module.v1.schema.md
.topics/.schemas/tiinex.presentation.surface.v1.schema.md
.topics/.schemas/tiinex.question.v1.schema.md
.topics/.schemas/tiinex.condition.v1.schema.md
.topics/.schemas/tiinex.claim.v1.schema.md
.topics/.schemas/tiinex.derivation.v1.schema.md
.topics/.schemas/tiinex.discovery.breakthrough.v1.schema.md
```

## Purpose

This bundle closes provenance and implementation-boundary blind spots found while designing Tiinex/site support for dynamic schema-aware viewers, forms, audit reporting, portals, source traversal, and portable React/non-React implementations.

The bundle keeps these distinctions explicit:

```text
source ≠ adapter ≠ portal ≠ finding ≠ evidence ≠ preservation
interface ≠ presentation surface ≠ interaction unit ≠ schema module
validation method ≠ validator implementation ≠ validation report
question ≠ response ≠ evidence ≠ validation result ≠ decision
condition ≠ executable code ≠ decision ≠ validation result
claim ≠ evidence ≠ derivation ≠ validation ≠ truth
derivation ≠ hidden chain-of-thought ≠ validation result ≠ proof of truth outside boundary
breakthrough ≠ proof ≠ validation result ≠ decision ≠ implementation ≠ truth
schema semantics ≠ app registry ≠ React component
```

## Schema Summary

### tiinex.portal.v1

Defines a bounded source-resolution doorway. Portal is not a generic UI view; it is the boundary for looking into a source under declared access, trigger, resolution, and result limits.

### tiinex.portal.time.v1

Child specialization of `tiinex.portal.v1` for as-of or time-windowed source resolution. It keeps artifact creation time separate from source-state time and prefers resolved source anchors over projection metadata.

### tiinex.interaction.unit.v1

Defines a portable semantic unit that can be asked, filled, shown, validated, audited, or implemented across environments. It is not a React field, UI component, CLI prompt, or database column, though those may implement it.

### tiinex.schema.module.v1

Defines a human-readable capability bundle around a schema, schema family, or schema chain. It may expose validator implementations, interaction units, surfaces, viewers, forms, helpers, and source access modes, but it is not code/plugin by itself and does not own validation method semantics.

### tiinex.presentation.surface.v1

Defines a bounded implementation-neutral presentation surface inside or across interfaces. It clarifies the relationship between larger interfaces, surfaces, interaction units, and schema modules.

### tiinex.question.v1

Defines question provenance for bounded inquiries, prompts, review questions, validation questions, discovery questions, and decision-support questions. A question preserves what was asked and what would count as an in-scope response, but it does not itself answer the question or determine the response schema.

### tiinex.condition.v1

Defines condition provenance for if/when/unless boundaries, gates, prerequisites, fallback rules, and branch outcomes. A condition is human-readable branch semantics, not executable code, a decision, or a validation result by itself.

### tiinex.claim.v1

Defines claim provenance for bounded assertions, propositions, hypotheses, theorem-like statements, answer candidates, model claims, interpretation claims, and counterclaims. A claim preserves what is being asserted and under what boundary, but it does not prove itself or replace evidence, derivation, validation, attestation, or decision artifacts.

### tiinex.derivation.v1

Defines public reasoning provenance for derivations, proofs, proof sketches, arguments, calculations, reductions, transformations, inferences, explanations, and counterexamples. A derivation preserves reviewable reasoning, not private chain-of-thought or hidden deliberation, and does not establish truth outside its stated assumptions and review boundary.

### tiinex.discovery.breakthrough.v1

Defines breakthrough provenance for frame shifts, Eureka moments, convergences, architectural insights, research breakthroughs, method breakthroughs, and connected-solution discoveries. A breakthrough preserves what changed in understanding and what it unlocks, but it does not prove, validate, decide, implement, or establish truth by itself.

## Source Access Modes

The source access modes used by portal, portal.time, and schema.module are:

```text
web-surface
local-working-tree
local-git-archive
browser-remote-git
service-backed-git
```

These modes are source access capabilities. A Git ref, commit, tree, or blob may act as a source-state anchor, but it does not by itself become preservation, evidence, validation, claim proof, or truth. Local Git archive access is user-provided local access and must not imply hidden upload, telemetry, or network access. Browser remote Git must keep CORS, auth, browser storage, memory, and repository-size limits explicit.

## Parent-Origin Note

`tiinex.portal.time.v1` is intentionally a child of `tiinex.portal.v1`. This prechecksum draft includes both `relative` and `browse + git` parent-origin entries for `portal.v1`; the `browse + git` entry uses the repository branch path so the bundle can be reviewed before checksum finalization. A maintainer may replace it with a commit-pinned URL after `portal.v1` is committed if the final merge process requires commit-pinned parent origins.

## Changelog

### V8.3

- Mechanical envelope fix: `Parent Created At` renamed to `Created At` in Parent blocks.
- Mechanical envelope fix: Parent Origin entries now use markdown-link shape such as `[browse + git](...)` instead of `label: link`.
- No Continuity Integrity footers are included; checksum footers remain intentionally external to this bundle.

- v4: applied mechanical contract fixes, root-shaped parent origins, validation-friendly examples, and initial portal/interaction/module/surface contracts.
- v5: added `tiinex.question.v1` and `tiinex.condition.v1` for question and branch/gate provenance.
- v6: added `tiinex.claim.v1` and `tiinex.derivation.v1` for knowledge-provenance, mathematician/researcher, and conditional-form use cases.
- v7: clarified source access modes without making Git a new semantic authority.
- v8: added `tiinex.discovery.breakthrough.v1` as discovery-frame-shift / Eureka provenance.
- v8.1: sanitized remaining Artifact Creation Contract labels in the first five schemas and consolidated README history under this changelog.
- v8.3: added `browse + git` parent-origin entry for `tiinex.portal.time.v1` -> `tiinex.portal.v1` while keeping Continuity Integrity footers omitted for maintainer checksum finalization.

## Review Boundary

This bundle is intended for content, schema-shape, and Tiinex-anda validation. Canonical checksum / continuity integrity footers are intentionally omitted from this draft so they can be added once by the maintainer's checksum process before final merge.
