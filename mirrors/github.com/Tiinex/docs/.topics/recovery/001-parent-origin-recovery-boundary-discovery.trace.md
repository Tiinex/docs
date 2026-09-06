# Continuity Context

- Envelope Schema: [tiinex.root.v1](../.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-26 22:30:00
  - Trace: [Portable Handoff, Cold-Start And LLM Ingress](https://github.com/Tiinex/business/blob/3dac3b7ad41f307b1a3dcb70f0933f9e44a4fcd0/.topics/initiatives/001-2-2-portable-handoff-cold-start-ingress-task.trace.md)
  - Origin:
    - [browse + git](https://github.com/Tiinex/business/blob/3dac3b7ad41f307b1a3dcb70f0933f9e44a4fcd0/.topics/initiatives/001-2-2-portable-handoff-cold-start-ingress-task.trace.md)
- Current
  - Current Schema: [tiinex.discovery.v1](https://github.com/Tiinex/docs/blob/911d4cf990e35ce25a56e8f376d296e327c48260/.topics/.schemas/discovery/tiinex.discovery.v1.schema.md)
  - Created At: 2026-08-30 23:10:00
  - Authors: Axiom; Anchor
  - Why: Reconcile Root Parent recovery semantics after real cross-repository lineage exposed that mandatory relative locality forced duplicate Parent material and conflicted with bounded transport recovery.
  - Summary: Axiom reconciliation of truthful local Parent recovery, version-stable external recovery, schema permalink policy, and transport-boundary recovery without fabricated locality.
  - Status: completed/local

---

# Parent Origin Recovery Boundary Discovery

## Discovery Intent

- Intent: determine the smallest canonical Root correction that preserves direct local recovery, supports external and historical Parents, keeps schema references exact when published authority exists, and does not force repositories or Handoff packages to duplicate ancestry merely to manufacture a relative path.
- Starting Question: what must Parent Origin require when the exact Parent is locally materialized versus outside the current source/materialization boundary?

## Discovery Field

- Field: current Root Parent/Origin contract, existing published schema-reference practice, the first durable Business-to-Docs and Business-to-Site Parent edges, current Viewer external-source recovery, and portable Handoff/package boundaries.
- In Scope: Parent recovery locality; version-stable adapter recovery; published schema representation locators; package/export recovery closure; fail-closed behavior when no truthful route exists.
- Out Of Scope: filename dimension semantics; carrier dimension allocation; Viewer presentation policy; concrete exporter implementation; generic role/process semantics.

## Discovery Method

- Method: compare Root's universal `relative` requirement with actual cross-repository materialization, published commit-pinned source availability, schema artifacts already using immutable Git representations, and current Viewer recovery behavior. Separate semantic Parent identity (`Trace`) from representation recovery (`Origin`) and from transport/package carriage.
- Evidence Boundary: GitHub commit-pinned URLs identify already-published exact representations only. No future publication identity is fabricated for the locally edited Root candidate.

## Discovery Boundaries

- Parent Identity Boundary: `Trace` remains the direct continuity relation. `Origin` supplies recovery and must not replace or reinterpret Parent identity.
- Locality Boundary: `relative` is required only when the Parent representation is genuinely directly recoverable in the same qualified materialization and source scope as the child.
- External Recovery Boundary: when no truthful local relative representation exists, Parent recovery requires a qualified version-stable locator through a supported adapter. Commit-pinned `browse + git` is one such adapter form, not the semantic definition of external recovery.
- Duplication Boundary: a repository or package must not create a duplicate Parent copy solely to satisfy a relative-path requirement.
- Schema Boundary: when a different canonical schema representation is already published and an immutable canonical locator is available, published artifacts must use that locator rather than treating a mutable branch/latest or relative copy as equivalent exact schema authority.
- Transport Boundary: a bounded export may omit ancestor bytes, but omission must not terminate recovery. Export/package Tooling may provide boundary recovery metadata or an explicitly declared derived representation; it must not silently rewrite semantic Parent identity or forge source publication.
- Failure Boundary: if neither truthful local recovery nor a qualified version-stable external recovery route exists, the continuation remains unresolved/blocked rather than guessed.

## Discovery Outcome

- Outcome: Root should require at least one truthful Parent recovery route, conditionally require `relative` for directly materialized same-source Parents, and require version-stable external recovery when local relative recovery is unavailable. Ordinary local artifacts do not need publication saturation merely for continuity.
- Root Candidate: the carried Docs Root candidate removes universal `relative` cardinality, makes truthful local-versus-versioned recovery normative, forbids fabricated recovery copies, and strengthens published schema-reference policy from preference to requirement when immutable canonical authority is available.
- Existing Cross-Repo Repair: the Docs and Site specialist children may remove `.tiinex` recovery copies once they declare the exact published Business Parent through commit-pinned external recovery.
- Tooling Requirement: Loom should preserve relative-only local continuation, accept qualified version-stable external continuation without relative, reject zero truthful recovery routes, and keep publication identity distinct from package recovery augmentation.
- Export Requirement: transport scope may be smaller than ancestry scope; every omitted Parent boundary must remain recoverable through carried material, qualified version-stable recovery, scope expansion, or fail-closed export.
- Schema Publication Requirement: new or materially updated published schema references use immutable canonical permalinks when available. Local/unpublished schema work must not invent future publication locators.

## Interpretation Limits

- Limits: this Discovery does not define filename dimensions, carrier lineage, a universal adapter vocabulary, or a requirement that every ordinary artifact contain `browse + git`. It does not claim that a current LLM sandbox can execute every recovery route; recoverability metadata and runtime capability are separate truths. It does not authorize silent mutation of canonical source bytes during package export.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Portable Handoff, Cold-Start And LLM Ingress](https://github.com/Tiinex/business/blob/3dac3b7ad41f307b1a3dcb70f0933f9e44a4fcd0/.topics/initiatives/001-2-2-portable-handoff-cold-start-ingress-task.trace.md)
  - Value: XCQt4Ikn6uuZQy3_dJ3IQRqWG_xxaU3BCh8mDWeboh8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: _Cz5_Nqda2VdiahrQF0NPpeftwqxH-3X_YNYy2d8joE
