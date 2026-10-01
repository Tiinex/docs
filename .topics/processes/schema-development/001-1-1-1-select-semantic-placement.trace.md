# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/668753e47a281db060cb74ef957683f4f773b3a4/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/668753e47a281db060cb74ef957683f4f773b3a4/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-01 18:06:56
  - Trace: [001-1-1-recover-existing-schema-landscape.trace.md](001-1-1-recover-existing-schema-landscape.trace.md)
  - Origin:
    - [relative](001-1-1-recover-existing-schema-landscape.trace.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/668753e47a281db060cb74ef957683f4f773b3a4/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-01 18:06:57
  - Authors: Anchor; Sigma
  - Why: Keep inheritance and semantic ownership decisions separate from implementation convenience.
  - Summary: Choose the narrowest coherent schema family and Parent based on recovered semantics.
  - Status: candidate/local

---

# Select Semantic Placement

## Transition Identity

- Name: Select Semantic Placement
- Version: 1
- Canonical Identifier: tiinex.process.schema-development.select-semantic-placement.v1
- Transition Family: tiinex-schema-development-process
- Human Label: Select Semantic Placement

## Purpose And Scope

- Purpose: Select the narrowest coherent schema family and Parent placement based on recovered semantics rather than convenience.
- Semantic Boundary: Placement establishes the intended inheritance and ownership boundary; it does not yet define the complete child contract or publication authority.
- Intended Domains: Tiinex Docs schema development and materially revised Tiinex schema authority.
- Not Intended For: generic schema-building claims outside Tiinex, hidden workflow state, automatic authority, or proof that a real schema execution took this step.

## Input Roles

- recovered-schema-landscape
  - Meaning: The qualified schema landscape and bounded semantic need.
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: non-artifact
  - Acquisition Policy: invocation-provided

## Output Roles

- semantic-placement
  - Meaning: A justified proposed schema identity, family position, Parent, and boundary against adjacent schemas.
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: non-artifact

## Lifecycle And Continuity Effects

### Lifecycle Effects

- produce-semantic-placement
  - Target Binding: semantic-placement
  - Effect: create-new
  - Logical Continuity: no-subject-effect

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: applicable when enough schema authority has been recovered to compare reuse, specialization, and new-root-descendant options.
- Unknown Meaning: unresolved schema authority, scope, evidence, role boundary, validation state, acceptance authority, or publication state remains unresolved rather than guessed.

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- none

### Output Placements

- semantic-placement
  - Output Binding: semantic-placement
  - Placement Intent: no-materialization

## Interpretation Limits

- Does Not Prove: that the selected placement is accepted, published, implemented, or free of later audit findings.
- Must Not Be Inferred: that proximity in repository layout, naming similarity, or implementation convenience is semantic Parent authority.
- Execution Boundary: this reusable definition guides schema work; real work lineage and qualified artifacts remain authoritative about what actually happened.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-recover-existing-schema-landscape.trace.md](001-1-1-recover-existing-schema-landscape.trace.md)
  - Value: Ifl2MXwXO5ZwXq54NVaHBT_eSKyY6ZaU-CtObyppkpo

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: noxC0lqKX2pBunmG2TtxrO9L3NjE4hwv6NwN3HEwklA