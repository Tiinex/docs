# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: tiinex.topic.v1
  - Created At: 2026-10-01 18:06:50
  - Trace: [001-processes.trace.md](../001-processes.trace.md)
  - Origin:
    - [relative](../001-processes.trace.md)
- Current
  - Current Schema: tiinex.topic.v1
  - Created At: 2026-10-01 18:06:52
  - Authors: Anchor; Sigma
  - Why: Establish a durable Tiinex schema-development discipline close to Docs authority so new schemas are produced audibly rather than through session-local improvisation.
  - Summary: Docs-local Tiinex human-plus-LLM process for developing, qualifying, auditing, accepting, publishing, and verifying schema authority.
  - Status: candidate/local

---

# Tiinex Schema Development

This process defines Tiinex's current human-plus-LLM discipline for developing new or materially revised schemas in the Docs authority without requiring a dedicated Schema Builder.

## Current Read

A schema is not ready merely because schema Markdown exists. Tiinex schema development must reconcile semantic placement, schema contract, source authority, companion/runtime representation, integrity, validation, authoring behavior, discovery behavior, and publication state before dependent artifact families rely on it.

A human operator plus an LLM is sufficient to execute this process. Tiinex normally separates schema-specialist reasoning from cross-role integration by using Axiom for schema recovery/design/audit and Anchor for architectural integration/disposition. That separation improves auditability but is not a requirement that every execution use separate model instances or that every schema change receive a human approval turn.

The process may be initiated by Sigma, Anchor, Axiom, or another qualified actor that identifies a bounded schema need. Initiation does not itself assign ownership or acceptance authority.

Recommended Tiinex responsibility boundaries:

- Axiom: schema landscape recovery, semantic placement, contract design, and schema-focused audit within qualified scope.
- Anchor: cross-Workspace architecture, integration, responsibility-boundary reconciliation, and acceptance/disposition within qualified delegated scope.
- Loom: Core/Tooling implementation qualification when schema support requires shared Tooling changes.
- Sigma: human intent, observation, or acceptance only where the affected boundary actually requires human judgment or reserved human authority.

These are role-boundary expectations, not Role-holder assignments. Real transfer between Roles is expressed through the normal qualified Handoff/work lineage when transfer is actually needed; this process does not manufacture transfer from participation or carriage.

## Design Direction

Use lineage topology as the primary process map. Descendants represent forward progression. Sibling relation artifacts represent bounded return paths without creating cyclic `Parent` continuity. Real schema work keeps its own work lineage, Handoffs, Evidence, Decisions, and acceptance artifacts; this reusable process definition does not become execution truth.

The process is intentionally Tiinex-specific. It assumes Docs schema authority, Core companion/runtime and authoring surfaces, organizational process ancestry rooted in Business, and current Tiinex publication discipline. A future generic schema-development process or Schema Builder may abstract reusable parts later.

No dependent artifact family should be treated as production-ready against a new schema until the schema has completed local qualification, representative Core exercise, semantic audit, acceptance appropriate to the affected authority boundary, publication/synchronization, and post-publication verification appropriate to its scope.

Human acceptance is conditional rather than universal. If a qualified actor can accept the candidate within an established delegated boundary, the process may advance without a separate Sigma gate. If human intent, acceptance criteria, policy, or reserved authority is implicated, the acceptance step must obtain that bounded human disposition before publication.

## Next Artifacts

- [Establish Schema Need And Scope](001-1-establish-schema-need-and-scope.trace.md)

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-processes.trace.md](../001-processes.trace.md)
  - Value: bRcyRdEvnEeBhiYuCy2nhPKhlajNLgxkW2vNE45gO2g

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: pfh1yaCAQKGFn2iSKml7YZ2Q22SUTVd7yl0LbiKeSyY