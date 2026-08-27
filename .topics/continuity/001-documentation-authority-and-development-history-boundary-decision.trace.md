# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-26 21:31:12
  - Authors: Anchor, Sigma
  - Why: Separate maintained Docs authority from accumulated development and handoff history so current schema/policy truth stays discoverable without erasing historical dogfood.
  - Summary: Maintained Docs schemas, policies, and orientation material remain current authority; older development and coordination artifacts are historical/read-only for normal continuation unless explicitly reactivated.
  - Status: accepted/local

---

# Documentation Authority And Development History Boundary Decision

This decision creates a clean continuation frontier without treating canonical Docs material as historical merely because older development lineages are noisy.

## Decision

- State: accepted
- Subject: Tiinex/docs maintained authority versus historical development and coordination artifact corpus
- Decision: keep maintained schemas, validators, policies, orientation/context material, and other explicitly maintained Docs surfaces current according to their own authority and status. Treat pre-existing development, coordination, handoff, experiment, and similar work artifacts as historical/read-only for normal continuation unless a new artifact explicitly reactivates a bounded lineage. Do not rewrite the historical corpus merely to make Discovery look cleaner.

## Basis

- Docs is both a current semantic authority surface and a repository containing substantial historical work, so a blanket repository freeze would destroy an important distinction.
- Historical development artifacts remain valuable as provenance, examples, and Tooling dogfood even when they are no longer the active frontier.
- Explicit reactivation is safer than inferring activity from graph-leaf status or filename chronology.

## Consequences

- Discovery and future planning should prefer maintained authority surfaces plus descendants of this decision when determining current Docs work, rather than treating every technical leaf as active work.
- A Handoff that carries this Docs-boundary work forward must declare this decision as its direct Parent and continue the same lineage as a child artifact.
- Historical work may be referenced as Origin, evidence, or supporting context without becoming the continuation Parent automatically.
- This decision does not change schema authority, publication state, or repository permissions, and it does not claim technical write-lock enforcement.

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:8mO1oI6VFixDXeUXlsqp7t3_61WkzHgtBEmDe7v4jYU
