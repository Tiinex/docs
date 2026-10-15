# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/5986f0e5d48273f135e8fe4ef33dda20cea052f4/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.origin.v1](https://github.com/Tiinex/docs/blob/6960d94c6f10b056c8906d9e8c51417a50ee0a41/.topics/.schemas/tiinex.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.v1.origin.md](tiinex.v1.origin.md)
  - Origin:
    - [relative](tiinex.v1.origin.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/0067d2972413d1de33ad34810a4913210a17b51b/.topics/.origins/tiinex.v1.origin.md)
- Current
  - Current Schema: [tiinex.digital.origin.v1](https://github.com/Tiinex/docs/blob/6960d94c6f10b056c8906d9e8c51417a50ee0a41/.topics/.schemas/tiinex.digital.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Base digital origin contract for digital surfaces, platforms, records, exports, datasets, runtimes, archives, and digital records of natural or physical contexts.

---

# Tiinex Digital Origin Base Contract

- Status: draft origin definition

## Digital Origin Identity

- Name: Tiinex digital origin base contract
- Version: 1
- Origin Family: base digital origin contract
- Canonical Identifier: tiinex.digital.v1.origin
- Base Origin: tiinex.v1.origin
- Digital Origin Medium: digital and digital-mediated
- Digital Origin Scope: reusable boundary for digital source-side contexts
- Related Origin: github.v1.origin

## Digital Boundary

- In Scope: digital records, digital surfaces, platform surfaces, repository collaboration surfaces, public web surfaces, document stores, local file sets, exported archives, datasets, runtime logs, sensor logs, camera archives, and other digital-mediated source contexts.
- Out Of Scope: the represented person, community, place, ecosystem, event, organization, truth, consent, authority, evidence, or preservation unless separately established.
- Boundary Type: digital or digital-mediated source boundary.
- Scope Broadening Rule: tools and adapters must not broaden from one target to a wider platform, account, repository, community, dataset, folder, archive, or runtime without explicit scope.
- Search Boundary: platform-wide search is out of scope unless explicitly declared.

## Digital Material Boundary

- Digital Material: files, pages, posts, comments, issues, discussions, messages, images, scans, logs, exports, metadata, URLs, payloads, runtime state, or availability status.
- Represented Subject: may be a project, person, community, organization, place, ecosystem, physical object, event, dataset, or runtime, but the record remains separate from the subject.
- Material Status: observed, unavailable, partial, stale, edited, deleted, cached, preserved, auth-scoped, policy-scoped, rate-limited, personalized, exported, or unknown.
- Does Not Prove: truth, identity, consent, intent, authorship beyond visible label, authority, representativeness, evidence, validation, or preservation.
- Personalization Risk: digital material may vary by account, permission, device, locale, API, export, time, or platform state.

## Access And Policy Boundary

- Access Modes: visible page, declared API, export, local file, user-provided capture, runtime message, archive record, or declared import.
- Access Limits: bounded target and declared connected material only.
- Policy Boundary: respect visible host, platform, archive, institution, runtime, privacy, rate-limit, and access signals.
- User Action Requirements: authentication, private access, preservation, write-back, publication, destructive action, export, hard refresh, or scope broadening.
- Authentication Boundary: no hidden tokens, cookies, ambient private identity, or undeclared credentials.

## Mutability And Rendering

- Mutability: digital material can be edited, deleted, hidden, moderated, regenerated, personalized, locked, exported differently, or become unavailable.
- Rendering Variance: rendered form may differ from raw/API/export form and may vary across accounts, clients, time, or permissions.
- Staleness Risk: high for live digital surfaces unless versioning or preservation is explicit.
- Loss Modes: deletion, edit, moderation, broken links, API drift, export drift, missing metadata, unavailable host, permission change, or lost local file.

## Use With Digital Adapters

- Recommended Adapter Use: bounded discovery, intake, import, review, preservation candidate generation, and source-status reporting.
- Preservation Boundary: access, rendering, cache, browser storage, CLI output, runtime context, or API response is not preservation unless explicitly preserved.
- Candidate Output Boundary: adapter outputs may become discovery findings or candidates before stronger interpretation.
- Not Automatic Outputs: feedback, task, evidence, consent, identity, validation, truth, priority, ownership, or preserved material.
- Discovery Use: unknown, unavailable, or partial digital targets should remain visible as findings or gaps.

## Failure And Ambiguity Handling

- Failure Modes: unavailable, private, forbidden, rate-limited, deleted, edited, stale, partial, policy-scoped, auth-scoped, malformed, unsupported, or inaccessible material.
- Ambiguity Modes: quotes, reposts, mirrors, bots, generated content, edited history, missing context, impersonation, minimized content, personalization, or conflicting exports.
- Safe Representation: show source identity, material status, and limitations without inventing missing content.
- Partial Export: partial exports remain partial and should not be treated as complete platform state.

## Portability Notes

- Portable Contract: reusable by browser apps, CLIs, extensions, local runtimes, LLM helpers, archives, field workflows, and human review procedures.
- Implementation Freedom: implementations may vary if they preserve source, access, material, preservation, and interpretation boundaries.
- Human Readability: required; a person should understand what digital surface is being approached and what is not claimed.
- Machine Readability: structured fields should remain stable enough for viewers, adapters, and validators.
- Future Origins: Reddit, LinkedIn, GitHub Discussions, GitHub Issues, forums, document stores, local folders, archives, and sensor/camera datasets can specialize this contract.

## Related Origins

- [tiinex.v1.origin.md](tiinex.v1.origin.md)
- [github.v1.origin.md](github.v1.origin.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.v1.origin.md](https://github.com/Tiinex/docs/blob/0067d2972413d1de33ad34810a4913210a17b51b/.topics/.origins/tiinex.v1.origin.md)
  - Value: Mt-fjkfwRIGumdnLru9PkqK03zvSth4dXCWBdlvZYMc

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: iHvmiovcLNUnTCtPAEOy9OQMMx5gvvCrLAxUQO3ZM9U