# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/5986f0e5d48273f135e8fe4ef33dda20cea052f4/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.interface.v1](https://github.com/Tiinex/docs/blob/bcc9601fe532f75a53478c0b9371425fb5d94b8d/.topics/.schemas/tiinex.interface.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.v1.interface.md](../.interfaces/tiinex.v1.interface.md)
  - Origin:
    - [relative](../.interfaces/tiinex.interface.v1.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/bcc9601fe532f75a53478c0b9371425fb5d94b8d/.topics/.interfaces/tiinex.v1.interface.md)
- Current
  - Current Schema: [tiinex.adapter.v1](https://github.com/Tiinex/docs/blob/bcc9601fe532f75a53478c0b9371425fb5d94b8d/.topics/.schemas/tiinex.adapter.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Base adapter contract for boundary-crossing Tiinex intake, translation, and output mapping.

---

# Tiinex Adapter Base Contract

- Status: draft adapter definition

## Adapter Identity

- Name: Tiinex adapter base contract
- Version: 1
- Adapter Family: base adapter contract
- Canonical Identifier: tiinex.v1.adapter
- Base Tool: tiinex.tool.v1
- Base Interface: tiinex.interface.v1
- Adapter Medium: mixed
- Origin Definition: tiinex.v1.origin
- Implementation Surface: portable definition, not executable implementation

## Source Boundary

- Source Origin: concrete adapter may reference a reusable origin definition such as tiinex.v1.origin, tiinex.digital.v1.origin, tiinex.natural.v1.origin, or a concrete platform/place origin.
- Source Type: bounded source, context, environment, material, person, instrument, runtime, repository, file set, physical object, or other declared source selected by a concrete adapter.
- Source Inputs: concrete adapter declares the minimal target identity, such as URL, repository, file, folder, export, issue, browser selection, local path, runtime log, physical material reference, notebook entry, interview answer, or sensor reading.
- Access Boundary: concrete adapter declares what it may access, observe, request, receive, inspect, scan, translate, or handle.
- Does Not Access: unrelated sources, secrets, private material, broader accounts, hidden state, unrelated repositories, unrelated folders, unrelated browser tabs, unrelated pages, unrelated people, unrelated physical material, or anything outside the declared source boundary.
- Write Boundary: no writes by default.
- Authentication Boundary: no hidden authentication by default.
- User Consent Boundary: explicit user action is required for auth, writes, preservation, exports, destructive actions, physical handling, social consent, or broader source reach.
- Privacy Boundary: adapter output should not silently turn private or scoped material into shareable artifacts.

## Translation Boundary

- From Context: declared source-side context.
- To Context: Tiinex workspace, artifact candidate, review surface, or declared target context.
- Transformation Allowed: concrete adapter declares allowed translation, observation, measurement, extraction, normalization, classification, summarization, packaging, routing, or presentation.
- Transformation Not Allowed: no silent stronger interpretation, no invented missing source content, no hidden preservation, no hidden evidence, no hidden consent, no hidden authority.
- Losses Or Changes: concrete adapter must surface loss, filtering, normalization, mistranslation, partial observation, missing source context, custody loss, or uncertainty when relevant.
- Normalization Rules: normalization should be declared and reviewable.

## Capability Declaration

- Can Access: concrete adapter declares source access or observation.
- Can Hold Operationally: allowed only as operational convenience when the concrete adapter and source signals allow it.
- Can Preserve: explicit artifact boundary, attachment, snapshot, export, transcript, scan, custody record, or user-declared preservation action only.
- Can Suggest Interpretation: yes, when candidate types are declared and stronger use requires explicit action.
- Can Write Back: no by default.
- Auth Mode: none by default; explicit user action only when a concrete adapter supports auth, permission, possession, custody, or social authority.
- Supports Preservation Warnings: yes.
- Recommended Concurrency Or Handling: one bounded source target at a time by default unless the concrete adapter declares a safe higher budget.
- Automatic Retry Or Repeat Policy: no automatic retry or repeat handling after rate-limit, authorization, lockout, destructive, safety, consent, custody, privacy, or physical handling failure.

## Access And Intake Discipline

- Access Strategy: bounded source access or intake actions based on explicit target, manifest, inventory, index, source listing, declared selection, physical label, or user-provided object.
- Deduplication: deduplicate identical in-flight reads, intake actions, scans, transcriptions, or observations when possible.
- Refresh Or Revisit Behavior: prefer safe cache, conditional read, manifest comparison, custody check, declared revisit, or human-reviewed refresh when available.
- Broadening Behavior: broadening beyond the initial source target requires explicit contract support and user-visible action.
- Access Ordering: prefer source-root, manifest, inventory, or declared target discovery before detail reads when it avoids blind probes.
- Access Budget: concrete adapter must declare default budget and broadening behavior.
- Probe Strategy: blind probes should be avoided unless explicitly justified.

## Holding And Reuse Discipline

- Operational Holding: working memory, transport cache, runtime cache, staging, custody, or temporary notes only.
- Reuse Policy: operational reuse is not preservation.
- Limit Signal Handling: respect visible source, privacy, consent, safety, custody, access, lockout, rate-limit, or handling signals.
- Repeat-After Handling: respect declared retry, revisit, or handling windows when visible.
- Browser Cache Handling: allowed for digital adapters when appropriate and visible to the runtime.
- Runtime Cache Handling: operational convenience only.
- Private Handling: local-user scoped, not shareable cached material.
- Physical Custody Handling: custody must remain visible when physical material is involved.

## Preservation Boundary

- Preservation Policy: accessed, observed, fetched, scanned, transcribed, staged, cached, or held material is not preserved unless a concrete artifact boundary, attachment, snapshot, export, custody record, or user-declared preservation action records it.
- Preservation Warning Reasons: mutable source, deleted source, private source, auth-scoped source, rate-limited source, volatile source, unsafe source, legally constrained material, socially constrained material, physically fragile material, custody-broken material, lossy extraction, uncertain ownership, or unclear permission.
- User Override Behavior: user may explicitly preserve material despite warnings; the resulting artifact should record source identity, time when known, hash or capture marker when known, custody when relevant, and limits.
- External Payload Behavior: use when material remains outside markdown but needs a durable reference or payload boundary.
- Evidence Behavior: evidence requires preserved or attached material plus a claim boundary; unavailable target identity alone is not evidence of source content.

## Output Mapping

- Primary Output Schemas: concrete adapter declares direct output schemas.
- Candidate Output Schemas: concrete adapter declares explicit interpretation targets.
- Must Not Auto-Claim: truth, authorship, intent, consent, identity, legality, safety, acceptance, ownership, validation, evidence, task, feedback, source permanence, or complete context.
- Output Status Values: live, observed, held, unavailable, stale, partial, ambiguous, failed, deferred, cached, rate-limited, consent-blocked, custody-broken, fallback kept.
- Finding Mapping: discovery findings are the preferred weak output for discovered, observed, or unavailable targets.
- Evidence Mapping: only when material is preserved or attached with a claim boundary.
- Task Mapping: explicit Use as or creation action only.
- Feedback Mapping: explicit Use as or creation action only.
- Resource Need Mapping: explicit Use as or creation action only.
- Pointer Mapping: explicit reference or creation action only.
- External Payload Mapping: explicit preserve/reference action when material should remain external.

## User Action Boundary

- Access Actions: concrete adapter declares default access or intake.
- Refresh Or Revisit Actions: user-visible refresh, revisit, rescan, rehandle, or hard refresh when relevant.
- Preservation Actions: explicit preserve, attach, scan, snapshot, export, transcript, payload, or custody action.
- Interpretation Actions: explicit Use as, Create from finding, or equivalent action.
- Write Actions: none by default.
- Auth Or Permission Actions: explicit user action only.
- Retry Actions: manual retry after backoff or explicit refresh when safe.
- Export Actions: explicit user action only.
- Open Source Actions: opening external source should be visible.
- Physical Handling Actions: explicit when physical material is touched, moved, scanned, altered, or stored.
- Social Consent Actions: explicit when a person is asked, represented, contacted, consented, or affected.

## Failure And Gap Handling

- Failure Signals: not found, forbidden, unauthorized, rate-limited, retry-after, network unavailable, deleted source, stale source, partial material, malformed response, unsafe material, inaccessible material, ambiguous target, physical loss, consent failure, custody failure, unreadable source, unsupported source.
- Gap Representation: known targets that cannot be loaded, inspected, translated, scanned, or handled should remain visible with target identity and failure context.
- Fallback Behavior: preserve target identity and failure reason without inventing source body, title, comments, metadata, transcript, observation, custody, or authority.
- User-Visible Status: concrete adapter should expose live, cached, held, stale, unavailable, failed, deferred, partial, ambiguous, rate-limited, consent-blocked, custody-broken, and fallback states when possible.
- Partial Result Behavior: show which part is available and which part is missing.
- Stale Result Behavior: stale material remains visible as stale, not live.

## Portability Notes

- Portable Semantics: source boundary, translation boundary, access boundary, write boundary, access discipline, holding discipline, preservation boundary, output mapping, explicit user action, visible failure, and gap representation.
- Environment Assumptions: a runtime or procedure can receive source identity, attempt bounded access or intake, hold operational state, and create or present Tiinex artifacts.
- Non-Portable Details: transport headers, browser cache, CORS, local cache implementation, authentication storage, extension permissions, physical handling procedure, exact UI, network timing, local custody practice, social setting, and device capabilities.
- Browser Notes: use browser cache where appropriate; do not use hidden backend behavior.
- CLI Notes: make cache, retry, and file-system reach visible.
- Extension Notes: request narrow permissions and keep auth visible.
- Local Runtime Notes: local cache is not preserved evidence unless exported into artifacts.
- Field Procedure Notes: human intake should keep source, uncertainty, custody, and review boundaries visible.
- Physical Environment Notes: physical custody, scanning, or observation should declare handling and preservation limits.

## Recommended UI Language

- Use `Source boundary` for what the adapter may access.
- Use `Translation boundary` for what changes while crossing.
- Use `Operational holding` for cache, staging, or custody that is not artifact preservation.
- Use `Preserve` only for explicit artifact, attachment, snapshot, export, transcript, scan, or custody boundaries.
- Use `Discovery finding` for weak observed or targeted outputs.
- Use `Use as` or `Create from finding` for explicit interpretation.
- Use `Needs interpretation` when stronger artifact type is not automatic.
- Use `Unavailable material` when source material was not loaded or could not be inspected.
- Avoid `Evidence material` unless material was actually preserved or attached.

## Examples

A source target that cannot be loaded can still become a discovery finding if its identity is known. The finding records the target and the gap. It does not claim source body, source title, comments, truth, or evidence.

A cached API response can help a viewer avoid repeated requests. It is not preserved material until a user or process creates an artifact boundary that says what was preserved and under what limits.

A physical notebook scan can be adapter input. The scan itself is not proof of truth, consent, or complete context unless other artifacts make those claims.

## Related Tools

- [tiinex.tool.v1](../.tools/tiinex.tool.v1.md)

## Related Interfaces

- [tiinex.interface.v1](../.interfaces/tiinex.interface.v1.md)

## Related Origins

- [tiinex.v1.origin.md](../.origins/tiinex.v1.origin.md)
- [tiinex.digital.v1.origin.md](../.origins/tiinex.digital.v1.origin.md)
- [tiinex.natural.v1.origin.md](../.origins/tiinex.natural.v1.origin.md)

## Related Adapters

- [github.issue.discovery.v1.adapter.md](github.issue.discovery.v1.adapter.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.v1.interface.md](https://github.com/Tiinex/docs/blob/bcc9601fe532f75a53478c0b9371425fb5d94b8d/.topics/.interfaces/tiinex.v1.interface.md)
  - Value: h6QsQvdlNFE-qCMMex58tcsQSJNTQ-TtA-OLMVrThD0

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: H0l0aqj0YdwiZ1qwuS_DKbQ3SicsE5SWZZF81VTjUHI