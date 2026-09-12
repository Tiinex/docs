# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/5986f0e5d48273f135e8fe4ef33dda20cea052f4/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.digital.origin.v1](https://github.com/Tiinex/docs/blob/776e463be775fd140a5c058e1e7b48c13abedfb3/.topics/.schemas/tiinex.digital.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.digital.v1.origin.md](tiinex.digital.v1.origin.md)
  - Origin:
    - [relative](tiinex.digital.v1.origin.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/776e463be775fd140a5c058e1e7b48c13abedfb3/.topics/.origins/tiinex.digital.v1.origin.md)
- Current
  - Current Schema: [tiinex.digital.v1.origin](https://github.com/Tiinex/docs/blob/776e463be775fd140a5c058e1e7b48c13abedfb3/.topics/.schemas/tiinex.digital.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Digital origin boundary for GitHub repository collaboration surfaces such as repositories, files, issues, comments, discussions, pull requests, and visible metadata.

---

# GitHub Digital Origin

- Status: draft origin definition

## Digital Origin Identity

- Name: GitHub digital origin
- Version: 1
- Origin Family: repository collaboration platform
- Canonical Identifier: github.v1
- Base Origin: tiinex.v1.origin
- Digital Origin Medium: digital-social repository collaboration
- Digital Origin Scope: bounded GitHub repository and declared repository collaboration surfaces
- Platform Family: GitHub repository collaboration
- Host Or Provider: GitHub
- Repository Scope: declared repository target only unless broader scope is explicit

## Digital Boundary

- In Scope: declared GitHub repository target, repository file URLs, issues, issue comments, discussions, discussion comments, pull-request surfaces, visible metadata, source URLs, and availability status when requested by a concrete adapter.
- Out Of Scope: unrelated repositories, unrelated accounts, private repositories, secrets, hidden organization data, private messages, unrelated user surfaces, and platform-wide search by default.
- Boundary Type: repository-defined and platform-defined digital-social boundary.
- Scope Broadening Rule: explicit user action or explicit adapter contract is required before broadening from one URL, issue, discussion, file, or repository target.
- Search Boundary: global GitHub search is out of scope unless a future adapter declares it.

## Digital Material Boundary

- Digital Material: repository files, issues, comments, discussions, pull requests, metadata, source URLs, rendered pages, API payloads, and availability status.
- Represented Subject: project collaboration, source material, repository maintenance, public discussion, and related repository context.
- Material Status: observed, unavailable, partial, stale, edited, deleted, cached, preserved, auth-scoped, policy-scoped, rate-limited, or unknown.
- Does Not Prove: truth, authorship beyond visible platform label, consent, intent, acceptance, priority, task ownership, evidence, validation, or preservation.
- Rendered Form: GitHub rendered pages may differ from raw/API/export forms.
- Personalization Risk: visibility may vary by account, repository permission, rate-limit state, API surface, time, and platform behavior.

## Access And Policy Boundary

- Access Modes: declared visible page, declared API surface, repository file path, user-provided export, or explicit authenticated access in a future contract.
- Access Limits: bounded target and declared connected material only.
- Policy Boundary: concrete adapters should respect visible platform access, authentication, permission, rate-limit, cache, retry, and policy signals.
- User Action Requirements: authentication, preservation, write-back, publication, reply, edit, delete, hard refresh, or scope broadening.
- Authentication Boundary: no hidden tokens, cookies, ambient private session, or undeclared credentials.

## Mutability And Rendering

- Mutability: repository files, issues, comments, discussions, labels, visibility, permissions, and metadata may change.
- Rendering Variance: rendered page, raw file, API payload, archive, and local clone may show different forms or times.
- Staleness Risk: high for live repository collaboration material unless commit-pinned, exported, or preserved.
- Loss Modes: deletion, edit, force-push, permission change, API failure, rate-limit, moderation, missing comments, unavailable raw file, or broken URL.
- Versioning Support: commit-pinned file URLs can support stronger file recovery than floating branch URLs, but still do not prove truth.

## Use With Digital Adapters

- Recommended Adapter Use: bounded repository, file, issue, issue-comment, discussion, discussion-comment, and pull-request discovery.
- Preservation Boundary: URL, page render, API response, cache, and runtime context are not preservation unless explicitly saved as artifact material or export.
- Candidate Output Boundary: GitHub material may become discovery findings or candidates before stronger interpretation.
- Not Automatic Outputs: feedback, task, evidence, consent, identity, acceptance, validation, truth, priority, ownership, or preserved material.
- Discovery Use: unavailable GitHub targets should become visible discovery gaps with source identity and limitation text.
- Evidence Candidate Use: content claims require observed and preferably preserved material; unavailable targets can support only limited target/gap claims.

## Failure And Ambiguity Handling

- Failure Modes: unavailable, forbidden, rate-limited, private, deleted, locked, stale, partial, malformed, auth-scoped, policy-scoped, unsupported target, or changed repository state.
- Ambiguity Modes: quoted content, bot comments, copied text, edited comments, mirrored repositories, branch drift, generated content, or missing discussion context.
- Safe Representation: preserve target identity and limitation status without inventing missing title, body, comments, or state.
- Auth Failure: do not request or use credentials silently.
- Policy Failure: do not bypass platform access rules silently.

## Portability Notes

- Portable Contract: reusable by browser apps, CLIs, extensions, local runtimes, LLM helpers, and human review procedures.
- Implementation Freedom: concrete adapters may use different access surfaces if they preserve GitHub origin, access, material, preservation, and interpretation boundaries.
- Human Readability: required; a person should understand what GitHub surface is being approached and what is not claimed.
- Machine Readability: structured fields should remain stable enough for adapters and viewers.
- Future Adapters: issue discovery, discussion discovery, pull-request discovery, repository file discovery, and release discovery may specialize this origin.

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.digital.v1.origin.md](https://github.com/Tiinex/docs/blob/776e463be775fd140a5c058e1e7b48c13abedfb3/.topics/.origins/tiinex.digital.v1.origin.md)
  - Value: rr5p__YpZmnKk5eoeOx8M9kEJFi1UL_mhxsMlAwvhJw

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: FKz20MnaXATlSpL2kOryrqGUNXA_CTQRJU9NX4Ws4rM