# Continuity Context

- Envelope Schema: [tiinex.root.v1](../.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-08-30 22:22:26
  - Trace: [Parent Recovery Authority Review — Axiom Return To Anchor](002-1-1-axiom-to-anchor-parent-recovery-authority-review-return-handoff.trace.md)
  - Origin:
    - [relative](002-1-1-axiom-to-anchor-parent-recovery-authority-review-return-handoff.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-08-31 00:18:00
  - Authors: Anchor
  - Why: Resolve Loom's one remaining canonical blocker for true intra-Workspace scoped export without weakening complete Workspace semantics or forcing Tooling to invent a partial Workspace contract.
  - Summary: Anchor-to-Axiom bounded artifact/Workspace representation authority handoff.
  - Status: ready/local

---

# Bounded Artifact Scope Representation — Axiom Handoff

## Handoff Parties

- Purpose: determine the smallest canonical representation contract that lets a Handoff/export carry a bounded subset of artifacts from one source Workspace while preserving truthful Workspace, package, Parent, and recovery authority
- From: Anchor
- From Kind: role
- To: Axiom
- To Kind: role

## Transfers

- bounded-representation-authority
  - Transfer Kind: work-and-responsibility
  - Description: decide whether current canonical package/payload/relation authority already supports a bounded artifact set without calling it a complete Workspace, or whether a new/extended bounded Workspace Representation contract is required; state exact activation and interpretation boundaries needed by Tooling
  - Controlling Artifact: [Axiom recovery return](002-1-1-axiom-to-anchor-parent-recovery-authority-review-return-handoff.trace.md)
  - Boundary: do not weaken existing complete Workspace meaning merely to enable scoped export, and do not treat package containment or detached bytes as semantic ownership

- scoped-parent-closure-consequence
  - Transfer Kind: work
  - Description: reconcile the chosen bounded representation with corrected Root Parent Origin semantics so transport may augment recipient recovery for omitted ancestors without repairing false/missing source Origin or changing semantic Parent identity
  - Boundary: exact recovery mapping, already-qualified version-stable recovery, scope expansion, or fail-closed behavior must remain possible; URI-only success is not exact Parent-byte qualification

- durable-return
  - Transfer Kind: work
  - Description: leave the canonical semantic answer in Docs and return one bounded Handoff to Anchor naming what Loom may implement and what remains prohibited
  - Boundary: return must preserve the inherited complete Business/Docs/Site source chain and must not substitute a fresh remote checkout for carried continuity

## Required Context

- corrected-root
  - Material: Axiom-corrected current Root schema in the carried Docs source
  - Material Reference: [Root](../.schemas/tiinex.root.v1.schema.md)
  - Purpose: governing Parent Origin and transport recovery authority
  - Availability: available

- prior-axiom-review
  - Material: completed Axiom Parent recovery authority research result
  - Material Reference: [Axiom review](002-1-axiom-parent-recovery-authority-review-research.trace.md)
  - Purpose: preserve the authority separation already accepted before discussing bounded representation
  - Availability: available

## Reference Context

- loom-impact-discovery
  - Material: complete carried Site contains .topics/tooling/001-2-1-1-scoped-export-parent-boundary-impact-discovery.trace.md
  - Purpose: implementation evidence that verified-complete-only currently blocks true intra-Workspace scope; inspect the named Site artifact before choosing canonical representation semantics
  - Availability: available

- sigma-workflow-feedback
  - Material: Sigma Foundation workflow feedback carried in Business
  - Purpose: human operating context for full-source Foundation transport and later bounded product export; it does not decide schema semantics
  - Availability: available

- full-source-carrier-policy
  - Material: this inter-role carrier deliberately keeps complete Business, Docs, and Site source even though this semantic transfer is narrower
  - Purpose: distinguish current Foundation transport safety from the product-level bounded export representation being designed
  - Availability: available

## Retained Responsibilities

- tooling-implementation
  - Retained By: Loom
  - Responsibility: implement only the representation and Parent-boundary consequences Axiom authorizes
  - Boundary: Loom must not redefine complete Workspace semantics by convention

- architecture-and-routing
  - Retained By: Anchor
  - Responsibility: reconcile Axiom return with Loom implementation sequencing and Sigma acceptance boundaries
  - Boundary: Anchor does not override canonical schema semantics

- human-product-observation
  - Retained By: Sigma
  - Responsibility: later judge bounded export and Viewer workflow behavior when implementation exists
  - Boundary: this semantic turn is not human product acceptance

## Exclusions And Dependencies

- broad-viewer-ux
  - Kind: excluded-scope
  - Description: no general Viewer ergonomic redesign, create/update/publish UX, or Atlas work
  - Responsible Party Or Role: Loom; Sigma

- tooling-code
  - Kind: excluded-scope
  - Description: do not implement shared Tooling from the Axiom role
  - Responsible Party Or Role: Loom

- remote-source-mutation
  - Kind: excluded-scope
  - Description: work only in the carried local source and return transport; do not mutate GitHub
  - Responsible Party Or Role: Axiom

## Completion Expectation

- Signal Kind: result
- Signal Meaning: return the smallest canonical bounded-representation answer, including whether existing Semantic Package/external payload/relation semantics suffice or a bounded Workspace Representation contract is required, plus exact Loom-facing activation/fail-closed consequences
- Return To: Anchor

## Interpretation Limits

- Does Not Mean: that every Handoff should become artifact-subset scoped now, that current full-source Foundation carriers are wrong, that a package subset is automatically a Workspace, or that transport recovery may rewrite source provenance
- Must Not Be Used To Claim: Tooling implementation correctness, Viewer acceptance, Foundation acceptance, or permission for remote mutation

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Parent Recovery Authority Review — Axiom Return To Anchor](002-1-1-axiom-to-anchor-parent-recovery-authority-review-return-handoff.trace.md)
  - Value: EAEbKKVDXmBXLu8uCX-9SBSW282YhU0Ohq_ilQAZhnk

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 6yZO7W9aWSuYxurZrSmAbnlJtPZwK1TCRL8mcUl3IN8
