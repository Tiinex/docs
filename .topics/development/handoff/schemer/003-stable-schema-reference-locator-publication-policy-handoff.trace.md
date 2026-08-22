# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-08-22 14:14:00
  - Authors: Tiinusen; Architect
  - Why: Transfer the bounded schema-reference identifier/locator publication-policy reconciliation to Schemer before the current Tiinex/docs tranche is committed and pushed.
  - Summary: Handoff to Schemer to qualify stable permalink guidance for Envelope Schema, Parent Schema, and Current Schema targets while keeping semantic identifiers, exact representation locators, self/local references, mirrors, and future discovery/latest behavior separate.

---

# Stable Schema Reference Locator Publication Policy Handoff

## Handoff Parties

- Purpose: transfer bounded semantic and authoring-policy reconciliation for stable schema-reference locators before current docs publication
- From: Architect
- From Kind: role
- To: Schemer
- To Kind: role
- To Reference: [Schemer Role](../../roles/001-schemer-role.trace.md)

## Transfers

- schema-reference-locator-policy
  - Transfer Kind: work-and-responsibility
  - Description: recover current authority and corpus practice, reconcile identifier-versus-locator semantics for schema references, make only justified docs mutations, preserve any normalization debt explicitly, and return one durable result in a verified full docs workspace
  - Controlling Artifact: [stable schema reference locator publication policy Task](../../schema/handoff/003-stable-schema-reference-locator-publication-policy-task.trace.md)
  - Boundary: Schemer owns semantic/authoring-policy qualification for this tranche; broad corpus normalization, Site implementation, portable Tooling implementation, and future latest/discovery semantics are not implied unless the controlling Task explicitly justifies them

## Required Context

- current-docs-workspace
  - Material: complete current Tiinex/docs workspace supplied with this Handoff
  - Purpose: current source/material authority for corpus inspection, bounded mutation, validation, and durable result authoring
  - Availability: available

- controlling-task
  - Material: stable schema reference locator publication policy Task
  - Material Reference: [controlling Task](../../schema/handoff/003-stable-schema-reference-locator-publication-policy-task.trace.md)
  - Purpose: owns the objective, scope, completion criteria, and publication gate for this reconciliation
  - Availability: available

- current-root
  - Material: current Root schema and its schema-reference field authority
  - Material Reference: [tiinex.root.v1](../../../.schemas/tiinex.root.v1.schema.md)
  - Purpose: governing semantic authority to inspect before adding any new requirement or authoring rule
  - Availability: available

- current-handoff-schema-example
  - Material: current Handoff schema containing relative external schema references plus published Origin authority
  - Material Reference: [tiinex.handoff.v1](../../../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Purpose: concrete mixed-reference example that exposed ambiguity while preparing publication
  - Availability: available

- current-digital-adapter-example
  - Material: Digital Adapter schema containing relative, mutable `master`, and commit-pinned references in one continuity envelope
  - Material Reference: [tiinex.digital.adapter.v1](../../../.schemas/adapter/digital/tiinex.digital.adapter.v1.schema.md)
  - Purpose: concrete evidence that current corpus does not make the intended schema-reference locator best practice obvious to ordinary Markdown readers
  - Availability: available

## Reference Context

- prior-transport-reconciliation
  - Material: recipient-relative Handoff transport package semantics result
  - Material Reference: [transport result](../../schema/handoff/002-1-1-recipient-relative-handoff-transport-package-semantics-result.trace.md)
  - Purpose: preserves the accepted distinction between canonical authority, mirrored/materialized bytes, provider resolution, and transport-local convenience so locator policy does not collapse those truths
  - Availability: available

## Retained Responsibilities

- publication-gate
  - Retained By: Architect
  - Responsibility: independently review Schemer disposition and decide whether the returned docs workspace is ready for Tiinusen to commit/push
  - Boundary: Schemer result does not self-authorize publication without Architect review

- human-publication
  - Retained By: Tiinusen
  - Responsibility: preserve local `.git`, inspect resulting diff, commit, and push the accepted Tiinex/docs workspace
  - Boundary: human transport/publication does not make Tiinusen the semantic owner of every changed artifact

## Exclusions And Dependencies

- discovery-latest-semantics
  - Kind: excluded-scope
  - Description: do not design mutable latest/discovery reference behavior in this tranche; exact published representation binding and latest discovery are separate truths
  - Responsible Party Or Role: Architect / future bounded tranche

- site-tooling-implementation
  - Kind: excluded-scope
  - Description: do not implement Site or portable Tooling resolver behavior here; return semantic/authoring guidance for later implementation only
  - Responsible Party Or Role: Architect / later Tooling or Dev

- broad-normalization-without-policy
  - Kind: excluded-scope
  - Description: do not rewrite the corpus merely to make references visually uniform before first establishing the governing rule and migration boundary
  - Responsible Party Or Role: Schemer qualification first; Architect decides later normalization tranche if needed

## Completion Expectation

- Signal Kind: result
- Signal Meaning: return one durable Schemer disposition/result inside one complete updated Tiinex/docs workspace ZIP; include only justified docs mutations, separately roundtrip-verify the full workspace, and attach the actual downloadable ZIP as the default terminal return
- Return To: Architect

## Interpretation Limits

- Does Not Mean: all current relative schema references are invalid, every reference must point to GitHub, mutable discovery/latest semantics are forbidden, self-reference must be permalinked, local unpublished artifacts should fabricate publication locators, or the entire corpus must be normalized in this tranche
- Must Not Be Used To Claim: exact schema representation resolution from label alone, publication readiness before Architect review, Site/Tooling implementation completion, Q acceptance, or that one locator form is semantically correct for every truth-domain

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 6jiXEBWNpEMG9t7NKvNlZotJiLWA1kU-jdEYgRdX8WQ
