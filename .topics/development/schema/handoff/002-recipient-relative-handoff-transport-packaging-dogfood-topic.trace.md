# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/e713557f8be630967571d11a73f9ecd05ae329ce/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-22 09:57:00
  - Trace: [role capacity schema reconciliation result](../role/001-1-1-role-capacity-schema-reconciliation-result.trace.md)
  - Origin:
    - [relative](../role/001-1-1-role-capacity-schema-reconciliation-result.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-08-22 13:22:00
  - Authors: Tiinusen; Architect
  - Why: Preserve the transport and material-closure blind spots exposed while dogfooding Handoff across stateless LLMs, multiple workspaces, external origins, mirrors, sandboxed runtimes, and optional bootstrap delivery.
  - Summary: Working topic for recipient-relative Handoff transport packaging that keeps durable truth inside workspaces, treats packages as derived disposable transport, preserves canonical authority across mirrors, and allows shared portable planning to use host-provided material resolvers without confusing environment limitations with missing Tiinex capability.

---

# Recipient-Relative Handoff Transport Packaging Dogfood Topic

This topic preserves the transport model that emerged from real Architect, Tooling, Schemer, Dev, and human handoffs before Viewer or portable Tooling hardens a conflicting package/state model.

## Current Read

A valid semantic Handoff and a materially usable transport are separate truths. The Handoff declares transferred work/responsibility, required versus reference context, retained responsibilities, exclusions/dependencies, and completion-facing expectations. Packaging should make those existing truths usable for one concrete recipient environment without becoming a second Handoff authority or lifecycle state machine.

All durable Tiinex artifacts must continue to live in the workspaces and lineages that own them. A transport package may carry one or more complete or intentionally bounded workspace materializations, but package-root convenience must not become a place where new Tiinex artifacts silently live. The Handoff artifact itself remains in its owning workspace lineage. Optional bootstrap material and transport-control metadata may exist outside workspace materializations only as non-authoritative transport convenience.

A package is therefore derived and disposable. Destroying the package after delivery must not erase semantic history, lineage, artifact authority, or Handoff state. The same semantic Handoff may legitimately produce different packages for different recipients.

Recipient capability matters. One recipient may resolve canonical GitHub permalinks directly while another sandboxed LLM may have only attached-file access. A permalink may remain the correct canonical authority even when the recipient cannot resolve it. In that case transport may materialize exact bytes locally while preserving the external canonical reference and representation identity. The materialized copy is a mirror/transport materialization, not a new semantic authority.

The package planner must also distinguish an execution environment limitation from missing Tiinex capability. A portable worker sandbox may lack direct network access while its host can still resolve material through a GitHub connector, another attached workspace, a previously supplied Handoff package, a cache/mirror, or another provider. Portable Tooling should be able to state what material is required and accept exact resolved material from a provider-neutral host seam instead of hard-coding one runtime or concluding that external resolution is globally unsupported.

## Design Direction

- Keep Handoff semantics and package/transport mechanics separate. Package existence, download, extraction, or inspection must not imply issued, delivered, accepted, started, completed, or acknowledged Handoff state.
- Keep all Tiinex artifacts inside meaningful workspace/lineage contexts. A transport envelope may carry workspace materializations plus non-artifact transport metadata and an optional bootstrap ZIP, but must not create a parallel artifact namespace outside workspaces.
- Treat bootstrap as optional recipient orientation only. Bootstrap is not repository authority, is not copied into the workspace, and may be omitted for an already-grounded recipient.
- Make package planning recipient-relative. Required context that is directly resolvable by the recipient may remain referenced; required context that is not resolvable may need exact materialization; unresolved required context must remain explicitly unresolved rather than guessed.
- Preserve canonical authority when material is mirrored/materialized for transport. Physical inclusion, local path, or another package as the byte source must not silently create a new artifact identity or semantic origin.
- Allow material sourcing from current workspaces, other supplied workspaces, previously supplied Handoff packages, caches/mirrors, host/runtime connectors, direct network resolution where available, or other declared providers. Provider choice is transport mechanism, not semantic authority.
- Prefer one shared portable planning/closure capability that Viewer, LLM workers, CLI/automation, and future hosts can consume. Viewer should project human choices; LLM workflows should be able to run the same closure logic before terminal PASS.
- Keep exact transport material closure separate from semantic Handoff validity. A valid Handoff may still be execution-blocked because required material cannot currently be resolved for the recipient.
- Preserve complete versus partial workspace materialization truth. A selected closure containing only some files from an external workspace must not masquerade as a complete workspace snapshot merely because those files were placed under a workspace-shaped directory.
- Optimize transport for minimum sufficient grounding rather than copying every reachable workspace. Multi-workspace or multi-origin input does not imply packaging every workspace in full.

## Concrete Dogfood Pressure

A simple three-origin collaboration may involve:

```text
Tiinex/site
→ current Task / Handoff / implementation material

Tiinex/docs
→ schemas / reusable Role or capability authority

Tiinusen/socials
→ canonical Party identity
```

A sandboxed LLM may have:

```text
attached files       yes
GitHub connector     host-dependent
sandbox network      no
other connectors     host-dependent
```

The desired planner behavior is conceptually:

```text
semantic Handoff
+ workspace graph
+ recipient resolution capabilities
+ available material providers

→ derive required material closure
→ resolve through qualified providers
→ materialize exact bytes only where needed
→ preserve canonical authority and provenance
→ report unresolved required context truthfully
→ build and verify disposable transport
```

A previously supplied Handoff package may be one material source for a later package when it contains an exact representation needed by the new closure. Reusing those bytes must not treat the previous package as artifact authority or Handoff state.

## Risks

- A package-root `handoff.trace.md` or similar loose artifact could create hidden state outside meaningful workspaces and later be mistaken for durable lineage.
- Treating every external reference as requiring embedded bytes would defeat source-of-truth reuse, enlarge packages, and increase re-grounding noise.
- Treating every permalink as sufficient would fail for sandboxed recipients and shift package closure burden back to the human transport operator.
- Treating sandbox network failure as missing product capability would produce false-negative closure and provider-specific architecture.
- Calling a selected subset of files a complete workspace would create hidden completeness claims and make later resolution unsafe.
- Reusing `tiinex.semantic.package.v1` as a generic Handoff transport envelope without qualification could collapse its current specialized schema/Transition discovery semantics into a different package concept.
- A Viewer-only implementation would leave LLM dogfooding on parallel ad-hoc packaging logic and lose recurring blind-spot/regression pressure.

## Product And Process Motivation

Current cross-conversation dogfooding still requires substantial human and Architect reasoning about which workspace, Task, Handoff, schema authorities, external origins, bootstrap material, and return evidence must physically travel. Fresh-role re-grounding is still measured in hours rather than minutes. A shared material-closure planner should make that hidden reasoning executable and repeatedly pressure-test the same package semantics before human Q acceptance.

The intended outcome is not simply a nicer Export button. The desired system should make a fresh stateless recipient productive from one clear transport delivery while preserving semantic authority, workspace lineage, external origin truth, and fail-closed resolution.

## Next Artifacts

- Bounded Schemer Task to reconcile whether current Handoff, Semantic Package, External Payload, Access, workspace, Relation, and adjacent authorities already express all required semantic distinctions or whether one small canonical transport/package concept is genuinely missing.
- Handoff to Schemer using current Role authority and the updated Handoff endpoint-capacity model.
- Later Architect/Tooling work, only after Schemer disposition, for portable recipient-relative material planning, provider-neutral resolution, closure verification, and shared Viewer/LLM consumption.

## Interpretation Limits

This topic does not decide that a canonical generic Handoff Package schema must exist. It does not redefine `tiinex.semantic.package.v1`, does not make bootstrap a Tiinex artifact, does not make transport metadata durable state, does not authorize mirrors to become canonical authorities, and does not prescribe one connector/runtime/provider implementation.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: QBYGCgmyYwhggC8fhJK455_cWkhsXwp5fL9OxLNkGuY
