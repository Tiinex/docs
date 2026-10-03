# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-11 17:31:36
  - Trace: [001-role-lineage-and-repository-boundary-reconciliation-task.trace.md](001-role-lineage-and-repository-boundary-reconciliation-task.trace.md)
  - Origin:
    - [relative](001-role-lineage-and-repository-boundary-reconciliation-task.trace.md)
- Current
  - Current Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-11 17:31:36
  - Authors: Anchor
  - Why: Use the semantic authority role to decide the exact Parent-versus-Relation treatment and stop repository-boundary correction from distorting Role continuity.
  - Summary: Transfer canonical Role-continuity and repository-boundary semantic reconciliation to Axiom.
  - Status: ready/local

---

# Anchor to Axiom — Role lineage and repository-boundary reconciliation

## Handoff Parties

- Purpose: determine the canonical Role-continuity treatment for current role renames/specializations and protect repository-local work lineage from being confused with Business-hosted Role identity.
- From: Anchor
- From Kind: role
- From Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
- To: Axiom
- To Kind: role
- To Reference: [Axiom Role](business::.topics/roles/001-2-axiom-role.trace.md)

## Transfers

- role-continuity-disposition
  - Transfer Kind: work-and-responsibility
  - Description: reconcile whether the `Playthings` Role rename to `Prism` is direct Parent continuity, typed Relation, or another existing canonical construction; provide the exact next durable endpoint and historical treatment.
  - Controlling Artifact: [Role Lineage And Repository-Boundary Reconciliation](001-role-lineage-and-repository-boundary-reconciliation-task.trace.md)
  - Boundary: preserve history; do not rewrite already-issued Handoffs merely to make the graph prettier.
- role-versus-work-ownership
  - Transfer Kind: work
  - Description: confirm the semantic boundary between Business-hosted reusable Role identity and repository-local Task/Handoff/Evidence ownership, including whether cross-Workspace Role endpoint references may remain Business-qualified without changing artifact Parent lineage.
  - Boundary: repository placement is not semantic authority by itself.
- narrow-docs-clarification
  - Transfer Kind: work
  - Description: if existing Docs authority is genuinely ambiguous, author only the smallest clarification needed and return exact evidence.
  - Boundary: no new schema family unless the current model cannot express the job.

## Required Context

- docs-workspace
  - Material: Complete current Docs Workspace.
  - Material Reference: [Docs Workspace](docs::.topics/.workspaces/tiinex-docs.workspace.md)
  - Purpose: Canonical semantic authority for Role, Parent, Relation and Handoff interpretation.
  - Availability: available
- business-workspace
  - Material: Complete current Business Workspace including Roles and repository-boundary orchestration.
  - Material Reference: [Business Workspace](business::.topics/.workspaces/tiinex-business.workspace.md)
  - Purpose: Current concrete Role lineage and organizational context.
  - Availability: available
- core-workspace
  - Material: Current Core Workspace including common-author lineage-safety mechanics.
  - Material Reference: [Core Workspace](core::.topics/.workspaces/tiinex-core.workspace.md)
  - Purpose: Observe current mechanics without making implementation behavior canonical semantics.
  - Availability: available
- site-workspace
  - Material: Current Site Workspace and repo-local Viewer frontier.
  - Material Reference: [Site Workspace](site::.topics/.workspaces/tiinex-site.workspace.md)
  - Purpose: Concrete specialist-work ownership example.
  - Availability: available
- extension-vscode-workspace
  - Material: Current VS Code Workspace and repo-local orchestration frontier.
  - Material Reference: [VS Code Workspace](extension-vscode::.topics/.workspaces/tiinex-extension-vscode.workspace.md)
  - Purpose: Concrete specialist-work ownership example.
  - Availability: available
- extension-chrome-workspace
  - Material: Current Chrome Workspace and repo-local orchestration frontier.
  - Material Reference: [Chrome Workspace](extension-chrome::.topics/.workspaces/tiinex-extension-chrome.workspace.md)
  - Purpose: Concrete specialist-work ownership example.
  - Availability: available
- verse-playthings-workspace
  - Material: Current Verse Playthings Workspace and Prism return history.
  - Material Reference: [Verse Playthings Workspace](verse-playthings::.topics/.workspaces/tiinex-verse-playthings.workspace.md)
  - Purpose: Concrete renamed Role use case.
  - Availability: available

## Reference Context

- active-kodax-lanes
  - Material: Viewer Kodax and VS Code Kodax are currently active.
  - Purpose: Their in-flight Handoffs must not be invalidated or retroactively rewritten by this semantic audit.
  - Availability: available

## Retained Responsibilities

- orchestration-and-merge
  - Retained By: Anchor
  - Retained By Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)
  - Responsibility: apply the accepted semantic disposition to current Business and specialist frontiers, audit returns, and refresh recovery.
  - Boundary: Axiom returns semantic authority; Anchor controls cross-role integration.
- human-naming-intent
  - Retained By: Sigma
  - Retained By Reference: [Sigma Role](business::.topics/roles/001-4-sigma-role.trace.md)
  - Responsibility: confirm human-facing Role names when more than one semantically valid readable label remains.
  - Boundary: naming preference does not silently change semantic continuity.

## Exclusions And Dependencies

- historical-mass-rewrite
  - Kind: excluded-scope
  - Description: Do not rewrite historical Handoffs, filenames or Parent edges merely to normalize old conventions.
  - Responsible Party Or Role: future explicit hygiene work if justified.
- carrier-lineage-change
  - Kind: excluded-scope
  - Description: Carrier Dimension rules are not changed by this Role semantic audit.
  - Responsible Party Or Role: Anchor/Core Tooling under separate authority.

## Completion Expectation

- Signal Kind: return
- Signal Meaning: Return one exact semantic disposition for Role continuity and repository-local work ownership, any minimal Docs clarification if required, and a normal Handoff to Anchor with unresolved ambiguity stated explicitly.
- Return To: Anchor
- Return To Reference: [Anchor Role](business::.topics/roles/001-1-anchor-role.trace.md)

## Interpretation Limits

- Does Not Mean: Business owns specialist work, a Role reference is a Parent edge, a repository name creates authority, or historical artifacts should be rewritten.
- Must Not Be Used To Claim: a Role rename changes authority merely because the label changes; or that Parent and typed Relation are interchangeable.
- Authority Limits: bounded canonical semantic reconciliation only.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-role-lineage-and-repository-boundary-reconciliation-task.trace.md](001-role-lineage-and-repository-boundary-reconciliation-task.trace.md)
  - Value: nDqWSRlYlskH5xXPO6_Rfp_BMR_ZUB_emhLZgZSRYeM

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: Pfjr5xbZMeamSz7Y9IOYndNOV8Q1IRbhUi-KUSzDgd8