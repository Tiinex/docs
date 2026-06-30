# Continuity Context

- Envelope Schema: [tiinex.root.v1](tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.interface.v1](tiinex.interface.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.interface.v1.schema.md](tiinex.interface.v1.schema.md)
  - Origin:
    - [relative](tiinex.interface.v1.schema.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/762d0a89c0f27b144d657bfb06e29767a3d2d759/.topics/.schemas/tiinex.interface.v1.schema.md)
- Current
  - Current Schema: [tiinex.adapter.v1](tiinex.adapter.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Schema for adapter definitions as specialized interfaces that carry material or meaning across source boundaries without hiding loss, preservation, or interpretation limits.

---

# Adapter

- Status: draft schema note

## Summary

This schema defines adapter-definition artifacts as a specialized interface family.

An adapter is an interface-tool that helps material, meaning, signal, or state cross from one context into another without pretending the boundary disappeared. It may translate, observe, measure, import, normalize, classify, package, route, or present material so it becomes usable in Tiinex while preserving the source boundary and the limits of the crossing.

An adapter does not have to be software. A field intake procedure can adapt notebook observations into discovery findings. A scanner workflow can adapt paper material into external payload candidates. A translator can adapt a spoken answer into reviewable text. A GitHub issue adapter can adapt issues and comments into discovery findings.

The adapter's job is not to prove truth. Its job is to make the crossing explicit: what source boundary it has, what it may access, what changes during crossing, what remains only observed or held operationally, what becomes preserved material, and what requires deliberate user interpretation.

## Schema Validation Contract

### Adapter Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.v1.adapter`

Rules

- `tiinex.v1.adapter` identifies artifacts whose main job is to define adapter behavior and boundaries.
- An adapter definition specializes the broader `tiinex.interface.v1` idea for boundary-crossing, translation, intake, normalization, or handoff into Tiinex.
- An adapter definition describes a contract; it is not an executable adapter implementation, adapter run, intake log, preservation result, or evidence artifact by itself.
- An adapter definition may describe a base adapter contract, a concrete source adapter, or a specialization of another adapter definition.
- Adapter definitions must make source boundaries, translation boundaries, access and intake discipline, holding and reuse discipline, preservation boundaries, output mapping, user-action boundaries, failure handling, and portability explicit.
- Prose outside `Schema Validation Contract` may explain the schema, but it does not add required validation rules.

### Parent Interface Specialization

Rules

- Adapter definitions inherit the interface-definition principle that contact points must declare sides, crossings, transformations, losses, action limits, and failure modes.
- Adapter definitions narrow that principle to source-boundary crossing and material translation into Tiinex-compatible artifacts or candidates.
- The continuity envelope remains inherited from `tiinex.root.v1`; this schema does not replace `Parent`, `Origin`, `Current`, or `Continuity Integrity` semantics.
- Parent interface specialization applies to the artifact body only; it does not alter root continuity, integrity, or parent-origin requirements.

### Adapter Body

Required Shape

- first body heading after the continuity envelope
- `## Adapter Identity` section
- `## Source Boundary` section
- `## Translation Boundary` section
- `## Capability Declaration` section
- `## Access And Intake Discipline` section
- `## Holding And Reuse Discipline` section
- `## Preservation Boundary` section
- `## Output Mapping` section
- `## User Action Boundary` section
- `## Failure And Gap Handling` section
- `## Portability Notes` section

Optional Sections

- Adapter Inputs
- Adapter Outputs
- Authentication Boundary
- Privacy Boundary
- Preservation Decision
- Recommended UI Language
- Examples
- Related Tools
- Related Interfaces
- Related Adapters
- Related Origins
- Not Recommended For

Rules

- An adapter artifact should begin with a human-readable adapter name.
- Required sections should be readable by a human without knowing the implementation language.
- Required sections should be structured enough that a tool or LLM can extract adapter capabilities, limits, and expected outputs.
- An adapter definition should distinguish source material, adapter result, operational fetch or intake, operational holding, preserved material, discovery finding, evidence, user interpretation, authentication, and write action.
- An adapter definition must not claim executable behavior unless it identifies a concrete implementation surface separately from the adapter contract.

### Adapter Identity

Required Fields

- Name
- Version
- Adapter Family
- Canonical Identifier

Optional Fields

- Base Tool
- Base Interface
- Base Adapter
- Supersedes
- Related Adapter
- Implementation Surface
- Maintainer Surface
- Adapter Medium
- Origin Definition

Rules

- `Name` should be stable enough for human-readable UI and review surfaces.
- `Canonical Identifier` should be the stable machine-readable adapter id used by registries, adapter results, and generated artifacts.
- `Version` should change when source interpretation, translation boundary, output mapping, preservation semantics, access discipline, or failure handling changes.
- `Adapter Family` should identify the broad adapter class, such as repository issue discovery, repository file discovery, generic URL fetch, local folder discovery, browser bookmark import, external payload intake, field notebook intake, scanner import, translation intake, sensor intake, or runtime log import.
- `Base Interface` should identify the broader interface contract when the adapter is intentionally derived from an interface definition.
- `Base Adapter` should be used when a concrete adapter inherits a broader adapter contract.
- `Adapter Medium` may identify whether the adapter is digital, physical, procedural, social, instrument-based, runtime-based, or mixed.
- `Origin Definition` may reference a reusable origin artifact when the source-side boundary should be shared across adapters.

### Source Boundary

Required Fields

- Source Type
- Source Inputs
- Access Boundary
- Does Not Access

Optional Fields

- Write Boundary
- Authentication Boundary
- User Consent Boundary
- Privacy Boundary
- Source Volatility
- Source Ownership
- Physical Custody Boundary
- Origin Definition

Rules

- `Source Type` must state what kind of source or environment the adapter reads, observes, receives, or interprets.
- `Origin Definition` should be used when the adapter relies on a reusable origin boundary such as a platform, place, archive, natural context, repository host, or digital source family.
- `Source Inputs` must state the minimal inputs needed to identify the source, such as URL, repository, issue number, folder, file, API endpoint, exported payload, physical artifact, interview answer, notebook page, sensor feed, or user-selected object.
- `Access Boundary` must state what the adapter is allowed to access, observe, request, receive, inspect, scan, or handle.
- `Does Not Access` must state important source surfaces the adapter must not access by default.
- `Write Boundary` must state whether writes are impossible, unsupported, explicit user action only, or out of scope.
- An adapter must not hide upload, write, auth, telemetry, cross-origin behavior, physical handling, social consent, or environmental reach behind a read-only or intake label.

### Translation Boundary

Required Fields

- From Context
- To Context
- Transformation Allowed
- Transformation Not Allowed
- Losses Or Changes

Optional Fields

- Normalization Rules
- Classification Rules
- Summarization Rules
- Measurement Rules
- Language Boundary
- Format Boundary
- Custody Boundary

Rules

- `From Context` must state the source-side context.
- `To Context` must state the Tiinex-side or target-side context.
- `Transformation Allowed` must state what translation, measurement, observation, extraction, normalization, classification, summarization, or packaging may happen.
- `Transformation Not Allowed` must state transformations the adapter must not silently perform.
- `Losses Or Changes` must state what may be lost, degraded, changed, filtered, normalized, mistranslated, or made uncertain during adaptation.
- The adapter must preserve visibility of the source boundary and translation boundary even when the output becomes easy to use.

### Capability Declaration

Required Fields

- Can Access
- Can Hold Operationally
- Can Preserve
- Can Suggest Interpretation
- Can Write Back
- Auth Mode

Optional Fields

- Supports Conditional Access
- Supports Rate-Limit Signals
- Supports Custody Signals
- Supports Manual Refresh
- Supports Hard Refresh
- Supports Offline Reuse
- Supports Progressive Discovery
- Supports Preservation Warnings
- Recommended Concurrency Or Handling
- Automatic Retry Or Repeat Policy
- Expected Result Stability

Rules

- `Can Access` must describe what the adapter can access or observe.
- `Can Hold Operationally` must describe whether results may be held temporarily for operation, review, transport, caching, staging, or custody.
- `Can Preserve` must describe whether the adapter can create or support explicit preservation artifacts, attachments, snapshots, exports, or custody records.
- `Can Suggest Interpretation` must describe whether the adapter can propose stronger artifact types while requiring explicit user action.
- `Can Write Back` must state whether the adapter can change the source environment.
- `Auth Mode` must state whether authentication, permission, possession, custody, or social authority is none, optional, required, user-provided, inherited from runtime, physical possession, organizational authority, or explicit future work.

### Access And Intake Discipline

Required Fields

- Access Strategy
- Deduplication
- Refresh Or Revisit Behavior
- Broadening Behavior

Optional Fields

- Access Ordering
- Access Budget
- Transport Preference
- Manifest Strategy
- Probe Strategy
- Physical Intake Strategy
- Human Interview Strategy
- Repeat Handling

Rules

- Adapters should avoid blind access probes when a manifest, index, source listing, inventory, declared target, physical label, interview scope, or user-provided object can bound the search.
- Adapters should deduplicate identical in-flight requests, intake actions, scans, or repeated observations when the environment permits it.
- Adapters should avoid request storms, intake storms, repeated handling, or repeated questioning against the same origin or source environment.
- `Refresh Or Revisit Behavior` should reuse safe cache, conditional mechanisms, inventory checks, custody records, or human-reviewed refresh paths when available.
- `Broadening Behavior` must state how the adapter expands beyond the initial target and what user action or contract allows that expansion.
- Hard refresh, repeated scanning, re-querying, or re-handling must not ignore source rate-limit, retry-after, lockout, access, privacy, safety, consent, or physical handling signals.
- Access discipline should be portable; it should not depend on one browser, one framework, one language-specific interface, one device, or one storage implementation.

### Holding And Reuse Discipline

Required Fields

- Operational Holding
- Reuse Policy
- Limit Signal Handling
- Repeat-After Handling

Optional Fields

- Browser Cache Handling
- Runtime Cache Handling
- No-Store Handling
- No-Cache Handling
- Private Handling
- Max-Age Handling
- ETag Handling
- Last-Modified Handling
- Expires Handling
- Vary Handling
- Local Inventory Handling
- Physical Custody Handling
- Interview Note Handling

Rules

- Adapter definitions must distinguish operational holding from Tiinex artifact preservation.
- Adapter definitions must distinguish transport cache, runtime cache, staging, custody, working notes, and preserved material.
- If an origin sends cache-control, quota, access, custody, safety, lockout, rate-limit, or consent signals, the adapter should respect them when they are visible to the runtime or operator.
- `no-store` or equivalent source instruction should prevent adapter-level storage of response body unless a user explicitly chooses a preservation action and the artifact records the decision boundary.
- `private` or scoped material should be treated as local-user scoped and not as shareable cached material.
- `Repeat-After` and rate-limit reset signals should block automatic retry until the declared window has passed.
- Rate-limited, unavailable, inaccessible, unsafe, consent-blocked, physically unavailable, or custody-broken material should become a visible gap, not a retry loop.

### Preservation Boundary

Required Fields

- Preservation Policy
- Preservation Warning Reasons
- User Override Behavior

Optional Fields

- Recommended Preservation Schema
- External Payload Behavior
- Evidence Behavior
- Snapshot Behavior
- Attachment Behavior
- Custody Behavior
- Retention Boundary

Rules

- Accessed material is not automatically preserved material.
- Operationally held material is not automatically preserved material.
- Preserved material requires an explicit artifact boundary, attachment, export, snapshot, custody record, or user-declared preservation action.
- An adapter must state when preservation is recommended, discouraged, warned, unavailable, or explicit-user-action only.
- Preservation warnings should call out mutable, private, auth-scoped, rate-limited, volatile, unsafe, legally constrained, socially constrained, physically fragile, custody-broken, or lossy material.
- User override behavior must explain how a user can consciously preserve material despite warnings and how that decision should be recorded.

### Output Mapping

Required Fields

- Primary Output Schemas
- Candidate Output Schemas
- Must Not Auto-Claim

Optional Fields

- Output Status Values
- Finding Mapping
- Evidence Mapping
- Task Mapping
- Feedback Mapping
- Resource Need Mapping
- Pointer Mapping
- External Payload Mapping
- Relation Mapping

Rules

- Adapter definitions must state what artifact schemas they may produce directly.
- Adapter definitions must state what schemas are only candidates for explicit user interpretation.
- Discovery findings must not automatically become feedback, tasks, evidence, resource needs, pointers, acceptance, consent, validation, or truth claims.
- `Use as` or equivalent creation actions should be required when a user interprets a finding as a stronger or different artifact type.
- Adapter output should prefer weaker, reviewable artifact types when source material is unavailable, partial, ambiguous, stale, lossy, or unpreserved.

### User Action Boundary

Required Fields

- Access Actions
- Refresh Or Revisit Actions
- Preservation Actions
- Interpretation Actions
- Write Actions
- Auth Or Permission Actions

Optional Fields

- Retry Actions
- Export Actions
- Open Source Actions
- Review Actions
- Physical Handling Actions
- Social Consent Actions

Rules

- Access actions must stay inside the declared source boundary.
- Refresh, hard refresh, retry, preservation, interpretation, export, authentication, permission, write, publish, send, destructive, physical handling, and social consent actions must be explicit when they carry user risk or authority.
- Adapter definitions must state which actions are automatic, user-initiated, disabled, unsupported, or future work.
- Hidden writes, hidden uploads, hidden auth, hidden telemetry, hidden cross-context access, hidden physical handling, hidden social consent, and silent stronger interpretation are not allowed under this contract.

### Failure And Gap Handling

Required Fields

- Failure Signals
- Gap Representation
- Fallback Behavior
- User-Visible Status

Optional Fields

- Partial Result Behavior
- Stale Result Behavior
- Deleted Source Behavior
- Mutable Source Behavior
- Rate-Limited Behavior
- Unsafe Source Behavior
- Physical Loss Behavior
- Consent Failure Behavior
- Custody Failure Behavior

Rules

- Adapter definitions must state how failures, partial results, stale results, deleted sources, mutable sources, unavailable sources, rate-limited sources, unsafe sources, consent failures, and custody failures are represented.
- Known source targets that cannot be loaded, inspected, translated, scanned, or handled should remain visible as gaps when the target identity is known.
- Gaps should not be hidden as empty success.
- Fallback behavior should preserve target identity and failure context without inventing source content.
- User-visible status should distinguish live, cached, held, stale, unavailable, failed, deferred, partial, ambiguous, rate-limited, consent-blocked, custody-broken, and fallback states when possible.

### Portability Notes

Required Fields

- Portable Semantics
- Environment Assumptions
- Non-Portable Details

Optional Fields

- Browser Notes
- CLI Notes
- Extension Notes
- Local Runtime Notes
- Server Runtime Notes
- Field Procedure Notes
- Physical Environment Notes
- Social Procedure Notes
- LLM Runtime Notes

Rules

- `Portable Semantics` must state what meaning should survive across implementations or environments.
- `Environment Assumptions` must state what an implementation, operator, source environment, or procedure needs in order to implement the adapter.
- `Non-Portable Details` must state details that depend on a particular runtime, device, source, permission model, language, organization, body, place, custody model, or physical environment.
- Adapter definitions should be useful even when the original app implementation is unavailable.

### File Naming

Allowed Shapes

- `tiinex.v1.adapter.md`
- `<adapter-slug>.adapter.md`
- `<adapter-slug>-adapter.md`
- `<lineage>-adapter.trace.md`
- `<lineage>-<adapter-slug>.trace.md`

Rules

- `tiinex.v1.adapter.md` is the reserved base adapter contract filename for the `tiinex.v1.adapter` adapter family.
- Adapter artifacts should use a slug that identifies the adapter or adapter family.
- Lineage-first `.trace.md` names should be used when the adapter artifact is part of an ordinary local trace lineage.
- Canonical registry-like adapter artifacts may use an adapter slug without a lineage prefix when the artifact is intentionally maintained as a reusable adapter definition.
- Canonical registry-like adapter definitions may use `.adapter.md` when the artifact is intentionally maintained as a reusable adapter contract.
- `.adapter.md` files define adapter semantics; they are not executable adapter implementations, adapter runs, fetch logs, intake logs, or validation result ledgers.

### Interpretation Boundaries

Rules

- Use `tiinex.v1.adapter` to define adapter semantics, not to record one adapter result.
- A specific adapter result may reference an adapter definition but should be owned by the schema that records that result.
- Adapter definitions should parent or reference broader interface definitions when that improves portable lineage.
- Adapter definitions may later be narrowed by descendants such as digital adapter, repository adapter, browser adapter, local folder adapter, runtime log adapter, scanner adapter, field notebook adapter, interview adapter, or physical intake adapter schemas if needed.

## Artifact Creation Contract

Required Creation Fields

- Name
- Version
- Adapter Family
- Canonical Identifier
- Source Type
- Source Inputs
- Access Boundary
- Does Not Access
- From Context
- To Context
- Transformation Allowed
- Transformation Not Allowed
- Losses Or Changes
- Can Access
- Can Hold Operationally
- Can Preserve
- Can Suggest Interpretation
- Can Write Back
- Auth Mode
- Access Strategy
- Deduplication
- Refresh Or Revisit Behavior
- Broadening Behavior
- Operational Holding
- Reuse Policy
- Limit Signal Handling
- Repeat-After Handling
- Preservation Policy
- Preservation Warning Reasons
- User Override Behavior
- Primary Output Schemas
- Candidate Output Schemas
- Must Not Auto-Claim
- Access Actions
- Refresh Or Revisit Actions
- Preservation Actions
- Interpretation Actions
- Write Actions
- Auth Or Permission Actions
- Failure Signals
- Gap Representation
- Fallback Behavior
- User-Visible Status
- Portable Semantics
- Environment Assumptions
- Non-Portable Details

Creation Rules

- Creation tools should prefer boundary-crossing language over software-only adapter language.
- Creation tools should not imply that an adapter definition is proof of a successful adapter run, successful preservation, or successful interpretation.
- Creation tools should require explicit action boundaries before suggesting any adapter that can write, send, publish, mutate, authenticate, physically handle, socially affect, or preserve material.
- Creation tools should default unknown authority, unknown preservation, unknown evidence, unknown consent, and unknown interpretation to unknown, not assumed.
- Creation tools should keep `Finding ≠ Feedback/Task/Evidence unless explicitly used as that type` visible in adapter definitions that produce discovery findings.

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.v1.adapter
  - Created At: 2026-06-29 00:00:00
  - Summary: Adapter boundary for field notebook intake.

---

# Field Notebook Intake Adapter

## Adapter Identity

- Name: Field notebook intake adapter
- Version: 1
- Adapter Family: field notebook intake
- Canonical Identifier: field.notebook.intake.v1
- Base Interface: tiinex.interface.v1
- Adapter Medium: procedural

## Source Boundary

- Source Type: field notebook page
- Source Inputs: notebook identifier and selected page or entry
- Access Boundary: selected page or entry only
- Does Not Access: unrelated notebook pages, private notes outside the selected entry, or physical material not handed to the operator

## Translation Boundary

- From Context: handwritten field note
- To Context: Tiinex discovery finding candidate
- Transformation Allowed: transcribe visible text and record uncertain words
- Transformation Not Allowed: invent missing words, infer intent, or treat the note as evidence of truth
- Losses Or Changes: handwriting ambiguity, transcription loss, missing surrounding context

## Capability Declaration

- Can Access: selected notebook entry
- Can Hold Operationally: temporary working transcription
- Can Preserve: explicit scan, photo, transcript, or payload artifact only
- Can Suggest Interpretation: yes, as discovery finding or candidate
- Can Write Back: no by default
- Auth Mode: physical possession or explicit permission

## Access And Intake Discipline

- Access Strategy: bounded intake of selected entry
- Deduplication: avoid duplicate transcription of the same entry unless revisiting is declared
- Refresh Or Revisit Behavior: explicit revisit with time and reason
- Broadening Behavior: requires explicit selection of additional pages or entries

## Holding And Reuse Discipline

- Operational Holding: working transcript only
- Reuse Policy: reuse as operational aid, not preserved material
- Limit Signal Handling: respect privacy, custody, and handling limits
- Repeat-After Handling: repeat handling only when safe and permitted

## Preservation Boundary

- Preservation Policy: preserve only by explicit scan, photo, transcript artifact, or external payload
- Preservation Warning Reasons: private notes, fragile material, incomplete context, uncertain handwriting
- User Override Behavior: user may preserve with visible source, time, custody, and uncertainty notes

## Output Mapping

- Primary Output Schemas: tiinex.discovery.finding.v1
- Candidate Output Schemas: tiinex.evidence.v1, tiinex.feedback.v1, tiinex.task.v1, tiinex.resource.need.v1
- Must Not Auto-Claim: truth, intent, consent, evidence, task, feedback, or complete context

## User Action Boundary

- Access Actions: inspect selected entry
- Refresh Or Revisit Actions: explicit revisit only
- Preservation Actions: explicit scan, photo, transcript, or payload action
- Interpretation Actions: explicit Use as / Create from finding
- Write Actions: none by default
- Auth Or Permission Actions: physical possession or explicit permission required

## Failure And Gap Handling

- Failure Signals: unreadable handwriting, missing page, no permission, partial page, uncertain date
- Gap Representation: record the selected entry identity and uncertainty
- Fallback Behavior: preserve target identity without inventing text
- User-Visible Status: observed, partial, ambiguous, unavailable, or permission-blocked

## Portability Notes

- Portable Semantics: source boundary, transcription limits, preservation boundary, and interpretation boundary
- Environment Assumptions: operator can inspect selected notebook entry with permission
- Non-Portable Details: notebook format, handwriting, language, custody rules, and capture device
```

## Validation-Friendly Shape

Keep this schema note in the exact section order already used here: `Summary`, `Schema Validation Contract`, `Artifact Creation Contract`, `Minimal Example`, `Validation-Friendly Shape`, and `Interpretation Notes`.

Maintain the section headings exactly in this schema note. Free markdown inside those sections is allowed, but adding undeclared new section headings should be treated as schema drift.

## Interpretation Notes

- adapters are specialized interfaces, not software-only connectors
- an adapter may translate, observe, measure, import, normalize, classify, package, route, or present material
- adapter output is not automatically truth, evidence, consent, identity, preservation, validation, or authority
- fetched, scanned, observed, transcribed, staged, cached, or held material is not preserved material until an explicit artifact boundary says so
- discovery findings are weak reviewable outputs and require explicit `Use as` or equivalent action before becoming feedback, task, evidence, resource need, pointer, or another stronger artifact type
- digital adapter descendants may later narrow this schema without making the base adapter family software-specific
- origin definitions may be referenced by adapters to keep source-side assumptions visible and portable

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.interface.v1.schema.md](https://github.com/Tiinex/docs/blob/762d0a89c0f27b144d657bfb06e29767a3d2d759/.topics/.schemas/tiinex.interface.v1.schema.md)
  - Value: 7NqCkjbOTOaxajfDx2_GUw3A7duSQLcKwT_4LyXy2T0

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: SEPiTcsexL4em7eWr4YNUutTWBellbfqq-LrYKfgifY