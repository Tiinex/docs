# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/5986f0e5d48273f135e8fe4ef33dda20cea052f4/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.digital.adapter.v1](https://github.com/Tiinex/docs/blob/b9a881faf378efe3b32a522b55157de1eef47dd3/.topics/.schemas/tiinex.digital.adapter.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.digital.v1.adapter.md](tiinex.digital.v1.adapter.md)
  - Origin:
    - [relative](tiinex.digital.v1.adapter.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/b9a881faf378efe3b32a522b55157de1eef47dd3/.topics/.adapters/tiinex.digital.v1.adapter.md)
- Current
  - Current Schema: [tiinex.digital.adapter.v1](https://github.com/Tiinex/docs/blob/b9a881faf378efe3b32a522b55157de1eef47dd3/.topics/.schemas/tiinex.digital.adapter.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Read-only digital adapter contract for mapping github repository issue tracker, issue body, issue metadata, and issue comments into Tiinex discovery findings without silently promoting them to feedback, tasks, evidence, or preserved material.

---

# GitHub Issue Discovery Adapter

- Status: draft adapter definition

## Digital Adapter Identity

- Name: github issue discovery adapter
- Version: 1
- Adapter Family: repository issue discovery
- Canonical Identifier: github.issue.discovery.v1
- Base Tool: tiinex.tool.v1
- Base Interface: tiinex.interface.v1
- Base Adapter: tiinex.v1.adapter
- Base Digital Adapter: tiinex.digital.v1.adapter
- Origin Definition: github.v1
- Base Digital Origin: tiinex.digital.v1.origin
- Digital Adapter Medium: digital-social repository collaboration
- Implementation Surface: browser app, CLI, extension, local runtime, or LLM runtime helper
- Platform Family: GitHub repository collaboration
- Source Medium: GitHub issue web/API surface
- Capture Medium: digital text and metadata
- Origin Class: repository issue tracker

## Digital Source Boundary

- Origin Definition: [github.v1.origin.md](../.origins/github.v1.origin.md)
- Digital Source Type: GitHub repository issue tracker, issue body, issue metadata, and issue comments.
- Source Inputs: GitHub repository URL or owner/repo plus issue number or explicit issue URL.
- Access Boundary: declared issue target and visible issue comments only.
- Does Not Access: unrelated repositories, unrelated issues, unrelated pull requests, unrelated discussions, private repositories, secrets, user account data, write-only state, hidden organization data, or broader GitHub account surfaces by default.
- Origin Mutability: GitHub material may be edited, deleted, locked, hidden, rate-limited, auth-scoped, policy-scoped, or rendered differently over time.
- Public Or Private Scope: public material by default; private material requires explicit authentication and scope in a future contract.
- Terms Or Policy Boundary: implementations must respect the platform access surface and visible platform limits rather than bypassing them silently.

## Transport And Access Discipline

- Access Strategy: bounded read of declared GitHub target and visible connected material within declared scope.
- Request Or Intake Discipline: deduplicate identical in-flight reads, avoid blind broadening, avoid retry storms, and avoid probing unrelated GitHub surfaces.
- Retry Or Repeat Policy: no automatic retry after rate-limit, authorization failure, forbidden response, lockout, retry-after signal, or policy failure.
- Scope Broadening Policy: explicit user action is required before broadening from one target to repository-wide discovery, cross-repository discovery, broader user surfaces, or authenticated access.
- API Boundary: implementation may use the appropriate GitHub API surface when available and declared; API access does not imply write authority.
- Web Page Boundary: visible web URLs are source identities and navigation targets, not preserved material by themselves.
- Pagination Or Windowing: issue comments may require pagination or bounded windows when available through the implementation surface.
- Rate-Limit Discipline: respect visible rate-limit and backoff signals.

## Digital Material Boundary

- Digital Material: visible GitHub issue body, issue metadata, issue comment body, comment metadata, source URL, and availability status when available.
- Represented Subject: project/repository issue conversation around a declared issue target.
- Material Status: observed, unavailable, partial, stale, rate-limited, auth-scoped, policy-scoped, cached, preserved, or candidate-only as declared by the run.
- Does Not Prove: truth, authorship beyond visible platform label, intent, priority, ownership, acceptance, consent, task status, feedback status, evidence status, preserved material, or complete repository state.
- Rendered Form: GitHub rendering may differ from raw markdown or API text.
- Raw Form: raw/API form may be unavailable to the implementation surface.
- Personalization Risk: visibility may vary by account, repository permission, time, API surface, or platform state.
- Machine-Generated Risk: material may include generated, edited, copied, quoted, templated, moderated, minimized, or bot-authored content.

## Cache And Preservation Boundary

- Operational Holding: temporary browser/runtime/cache state used to parse and present discovery status.
- Cache Boundary: operational convenience only; cache is not preservation.
- Preservation Boundary: GitHub material is not durably preserved unless the user explicitly preserves a snapshot, export, or artifact payload.
- Preservation Action: explicit preserve/export/create-material action.
- Retention Behavior: implementation-dependent session or browser/runtime cache unless declared otherwise.
- Privacy Warning: public repository material can still be socially sensitive, mutable, or context-dependent.
- Evidence Candidate Boundary: evidence candidates must distinguish target identity, observed material, preserved material, and supported claim.

## Output Mapping

- Primary Output: tiinex.discovery.finding.v1 for each bounded issue/comment target or gap.
- Candidate Outputs: pointer, feedback candidate, task candidate, evidence candidate, resource need candidate, or external payload candidate.
- Not Automatic Outputs: feedback, task, evidence, consent, acceptance, validation, truth, identity, priority, ownership, or preserved material.
- Interpretation Required: yes.
- Use As Candidates: feedback, task, evidence, resource need, pointer, or external payload candidate when source status supports review.
- Gap Outputs: known issue target with unavailable issue/comment material becomes a discovery gap, not silent failure.
- Evidence Candidate Rules: unavailable or unpreserved material can support only limited claims about target identity or discovery gap, not content claims.

## User Action Boundary

- User-Required Actions: authentication, preservation, export, write-back, reply, edit, delete, broadened discovery, hard refresh, or Use as stronger artifact.
- Read Boundary: declared GitHub target only.
- Write Boundary: read-only in v1.
- Authentication Boundary: unauthenticated or already-declared access only; no hidden tokens, cookies, ambient identity, or private session use.
- Destructive Boundary: none in v1.
- Share Boundary: no hidden sharing or publication.
- Preserve Boundary: no hidden preservation.
- Consent Boundary: no implied consent from a visible post, issue, discussion, comment, or reaction.

## Failure And Gap Handling

- Failure Modes: unavailable, forbidden, rate-limited, private, deleted, locked, stale, partial, paginated-away, malformed, minimized, auth-scoped, policy-scoped, or unsupported target.
- Gap Representation: visible discovery gap with source identity and status.
- User-Visible Status: show whether content was observed, unavailable, partial, stale, cached, rate-limited, auth-scoped, or preserved.
- Safe Fallback: preserve target identity and limitation text without inventing missing content.
- Partial Material Handling: partial reads remain partial and should not be shown as complete.
- Stale Material Handling: stale reads remain stale until explicitly refreshed and reclassified.
- Auth Failure Handling: do not request or use credentials silently.
- Policy Failure Handling: do not bypass platform access rules silently.

## Portability Notes

- Portable Contract: reusable by apps, CLIs, browser extensions, local runtimes, LLM helpers, or human review procedures.
- Implementation Freedom: implementation may vary if it preserves source, access, cache, preservation, interpretation, and user-action boundaries.
- Human Readability: required; a person should understand what is being adapted and what is not being claimed.
- Machine Readability: structured fields should remain stable enough for viewers and validators.
- Browser Notes: browser implementations should handle cache and rate-limit status visibly.
- CLI Notes: CLI implementations should declare token, file, and output behavior.
- Runtime Notes: LLM context is not preservation by itself.
- Offline Notes: offline or exported material should be marked as export-scoped and potentially stale.

## Related Origins

- [github.v1.origin.md](../.origins/github.v1.origin.md)
- [tiinex.digital.v1.origin.md](../.origins/tiinex.digital.v1.origin.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.digital.v1.adapter.md](https://github.com/Tiinex/docs/blob/b9a881faf378efe3b32a522b55157de1eef47dd3/.topics/.adapters/tiinex.digital.v1.adapter.md)
  - Value: 6tHaGkmF--naWLHj7tmAzRBf1nho6OL7fH1Ech8NXrk

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: ucn3xWDN-Lo0UgvwpYVhO9IgVxRrMdHF-st9oOPxpDw