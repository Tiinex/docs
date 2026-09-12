# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-12 09:59:47
  - Trace: [001-docs-major-006-organizational-work-provenance-grounding-semantics-task.trace.md](../001-docs-major-006-organizational-work-provenance-grounding-semantics-task.trace.md)
  - Origin:
    - [relative](../001-docs-major-006-organizational-work-provenance-grounding-semantics-task.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 09:59:47
  - Authors: Anchor
  - Why: Grounding must not infer organizational provenance from structure; Axiom should decide whether the slot is legitimate missing context, optional unresolved context, or an over-broad Tooling expectation.
  - Summary: Delegate semantic classification of the repeated fresh-Anchor organizational-work-provenance grounding gap.
  - Status: ready/local

---

# Anchor To Axiom — Docs Major 006 Organizational Work Provenance Grounding Semantics

## Handoff Parties

- Purpose: classify the repeated fresh-Anchor `organizational-work-provenance-unresolved` grounding gap before any Business or Core layer invents a relation to silence it.
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role — Successor Evolution Continuation](business::.topics/roles/001-1-1-1-anchor-successor-evolution-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](business::.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- provenance-semantic-classification
  - Transfer Kind: work-and-responsibility
  - Description: inspect current canonical party/role/relation/project/workspace/grounding semantics and classify exactly what the repeated organizational-work-provenance slot means and whether any durable semantic assertion is actually missing.
  - Controlling Artifact: [Docs Major 006 Task](../001-docs-major-006-organizational-work-provenance-grounding-semantics-task.trace.md)
  - Boundary: do not mutate Business or Core; return the owner split instead.

## Required Context

- docs-workspace
  - Material: complete current Docs Workspace.
  - Material Reference: [Docs Workspace](docs::.topics/.workspaces/tiinex-docs.workspace.md)
  - Purpose: canonical semantics and schema authority.
  - Availability: available
- business-workspace
  - Material: complete current Business Workspace with both fresh-run Evidence artifacts and organization/Role/Relation material.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: exact observed grounding context and potential relation-instance owner.
  - Availability: available
- core-workspace
  - Material: complete current Core Workspace.
  - Material Reference: [Core Workspace](core::.topics/.workspaces/tiinex-core.workspace.md)
  - Purpose: read-only grounding projection implementation context.
  - Availability: available

## Reference Context

- successor-disposition
  - Material: retained Anchor successor acceptance disposition showing the same provenance slot in both independent runs.
  - Material Reference: [Successor Acceptance Disposition](business::.topics/processes/gpt/grounding/001-1-2-3-fresh-anchor-successor-acceptance-disposition-evidence.trace.md)
  - Purpose: exact repeated-gap observation and non-inference boundary.
  - Availability: available

## Retained Responsibilities

- business-instance-change
  - Retained By: Anchor / Business owner
  - Responsibility: author any qualified organization-work Relation/context instance only if Axiom says it is semantically warranted.
- core-grounding-change
  - Retained By: Loom / Core
  - Responsibility: change grounding projection only if Axiom identifies a Tooling expectation/representation defect.

## Exclusions And Dependencies

- no-diagnostic-driven-semantics
  - Kind: excluded-scope
  - Description: do not invent a Relation or schema merely to make an informational grounding slot green.
- no-source-adjacency-inference
  - Kind: excluded-scope
  - Description: repository location, Parent, package carriage, filename and current conversation are not sufficient organizational-work provenance.

## Completion Expectation

- Signal Kind: return
- Signal Meaning: Axiom returns one bounded semantic disposition with exact canonical basis and the smallest owner-correct next action, if any.
- Return To: Anchor
- Return To Reference: [Anchor Role — Successor Evolution Continuation](business::.topics/roles/001-1-1-1-anchor-successor-evolution-role.trace.md)

## Interpretation Limits

- Does Not Mean: a new organization-work relation necessarily exists or should exist, or that the current informational grounding result is a defect.
- Must Not Be Used To Claim: Business/Core mutation authority, inferred organization membership, or product acceptance.
- Authority Limits: Axiom owns semantic classification only.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-docs-major-006-organizational-work-provenance-grounding-semantics-task.trace.md](../001-docs-major-006-organizational-work-provenance-grounding-semantics-task.trace.md)
  - Value: SI9EytjQX8QBsBk0Mprewj4naoP9W2TfmNqhEclPvoU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: e890A8504dLprQk79XFfy8d2EnwtvlN9ZTdMH1Faq2w