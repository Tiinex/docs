# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/f8b37239f17bc48180cfc8f93f812c6ffc6edc1f/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.adapter.v1](https://github.com/Tiinex/docs/blob/7d9fb6bd908ccd11b28e5c35e84c8f12b45f732b/.topics/.schemas/tiinex.adapter.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.v1.adapter.md](tiinex.v1.adapter.md)
  - Origin:
    - [relative](tiinex.v1.adapter.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/7d9fb6bd908ccd11b28e5c35e84c8f12b45f732b/.topics/.adapters/tiinex.v1.adapter.md)
- Current
  - Current Schema: [tiinex.digital.adapter.v1](https://github.com/Tiinex/docs/blob/7d9fb6bd908ccd11b28e5c35e84c8f12b45f732b/.topics/.schemas/tiinex.digital.adapter.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Base digital adapter contract for digital-source intake, access, preservation, and interpretation boundaries.

---

# Tiinex Digital Adapter Base Contract

- Status: draft adapter definition

## Digital Adapter Identity

- Name: Tiinex digital adapter base contract
- Version: 1
- Adapter Family: base digital adapter contract
- Canonical Identifier: tiinex.digital.v1.adapter
- Base Tool: tiinex.tool.v1
- Base Interface: tiinex.interface.v1
- Base Adapter: tiinex.v1.adapter
- Base Digital Origin: tiinex.digital.v1.origin
- Origin Definition: tiinex.digital.v1.origin
- Digital Adapter Medium: digital, mixed digital-physical, digital-social, digital-natural, or digital-runtime
- Implementation Surface: portable definition, not executable implementation
- Origin Class: digital source boundary

## Digital Source Boundary

- Digital Source Type: any declared digital source, record, platform, export, file set, dataset, runtime message, sensor log, camera capture, discussion thread, professional network post, repository surface, archive, or document store.
- Source Inputs: concrete digital adapter declares the minimum target identity, such as URL, platform id, repository, discussion number, issue number, post id, file path, export path, dataset id, sensor id, scan id, message id, or runtime event id.
- Access Boundary: concrete digital adapter declares what it may read, observe, request, receive, parse, render, import, scan, or handle.
- Does Not Access: unrelated accounts, unrelated users, unrelated threads, unrelated repositories, private messages, hidden platform data, local files, device state, sensors, browser tabs, broader search surfaces, or physical environments outside declared scope.
- Origin Mutability: digital origins may be mutable, edited, deleted, personalized, auth-scoped, rate-limited, policy-scoped, cached, stale, or rendered differently across time and viewers.
- Natural Or Physical Referent: when digital material describes nature or physical reality, the digital record is not the natural or physical event itself.
- Social Referent: when digital material describes a person, group, organization, or community, the digital record is not identity, consent, intent, authority, or representative truth by itself.

## Transport And Access Discipline

- Access Strategy: bounded access to the declared digital target.
- Request Or Intake Discipline: prefer declared targets, avoid blind probes, avoid unbounded crawling, avoid retry storms, avoid hidden scraping, and avoid hidden telemetry.
- Retry Or Repeat Policy: no automatic retry after visible rate-limit, lockout, authorization failure, forbidden response, policy failure, or retry-after signal unless the concrete contract explicitly declares a safe bounded policy.
- Scope Broadening Policy: explicit user action is required before broadening from a target to a larger account, repository, folder, group, channel, platform, source set, sensor set, location, person, or environment.
- Network Boundary: network access is not assumed; concrete adapters must declare online, offline, export, local-file, browser, CLI, runtime, or field-workflow behavior.
- API Boundary: API use must be declared when relevant and must not imply write authority.
- Web Page Boundary: rendered page access must be distinguished from API payloads and preserved material.
- Export Boundary: exported archives must be treated as bounded source material with their own custody and freshness limits.
- Sensor Boundary: digital sensor intake must state capture context and must not treat sensor output as unquestioned natural truth.
- Pagination Or Windowing: concrete adapters must declare pagination, cursoring, sampling, batching, or windowing when source material can exceed one read.

## Digital Material Boundary

- Digital Material: the actual digital record, payload, page, export, media, scan, message, sensor reading, log, dataset row, runtime state, or platform object being handled.
- Represented Subject: the person, place, natural event, physical material, social exchange, project state, runtime event, or community discussion that the digital material appears to describe.
- Material Status: unknown, observed, partial, unavailable, stale, auth-scoped, policy-scoped, rate-limited, deleted, cached, preserved, or candidate-only.
- Does Not Prove: truth, identity, authorship, consent, intent, legal status, safety, natural causation, completeness, representativeness, preservation, evidence, or Tiinex lineage continuity.
- Rendered Form: may differ from raw form and should not silently replace it.
- Raw Form: may be unavailable or require explicit preservation.
- Personalization Risk: digital views may vary by account, locale, permissions, algorithmic ranking, cookies, time, or platform experiment.
- Machine-Generated Risk: digital material may include generated, transformed, summarized, moderated, translated, or synthetic content.

## Cache And Preservation Boundary

- Operational Holding: temporary holding needed to display, parse, classify, or map a digital target.
- Cache Boundary: cache is operational convenience unless explicitly declared as preserved material.
- Preservation Boundary: material is not durably preserved unless a preservation action captures the declared material, context, and limits.
- Preservation Action: explicit user action or declared preservation workflow.
- Retention Behavior: concrete adapter declares whether material is ephemeral, session-scoped, browser-controlled, file-backed, exported, redacted, or unavailable after use.
- Export Behavior: export requires explicit user action and should carry material status and privacy warnings.
- Evidence Candidate Boundary: preserved digital material may be an evidence candidate, but evidence still requires claim scope and interpretation.

## Output Mapping

- Primary Output: bounded Tiinex artifact candidate, discovery finding, pointer, gap, preserved material reference, relation candidate, or other declared output.
- Candidate Outputs: feedback candidate, task candidate, evidence candidate, resource need candidate, pointer candidate, external payload candidate, relation candidate, or runtime candidate when declared.
- Not Automatic Outputs: feedback, task, evidence, consent, acceptance, proof, truth, identity, authorship, authority, priority, ownership, lineage parent, preserved material, or validation result.
- Interpretation Required: yes for stronger artifact use.
- Use As Candidates: concrete adapters may suggest possible interpretations, but original digital findings remain findings until explicitly used as another type.
- Gap Outputs: unavailable known targets should become visible gaps rather than disappearing.
- Evidence Candidate Rules: evidence candidates must distinguish target identity, observed material, preserved material, and supported claim.

## User Action Boundary

- User-Required Actions: authentication, write, publish, reply, edit, delete, preserve, export, broaden-scope, import private material, use as stronger artifact, social contact, or physical follow-up.
- Read Boundary: declared digital target only.
- Write Boundary: none by default.
- Authentication Boundary: no hidden token, cookie, account, ambient identity, or private session use.
- Destructive Boundary: no destructive action by default.
- Share Boundary: no hidden sharing or publication.
- Preserve Boundary: no hidden preservation.
- Consent Boundary: no implied social, legal, physical, or platform consent.

## Failure And Gap Handling

- Failure Modes: unavailable, rate-limited, forbidden, private, auth-scoped, policy-scoped, deleted, edited, stale, partial, paginated-away, malformed, personalized, ambiguous, unsupported, offline, or environment-limited source.
- Gap Representation: visible target/gap with status and limits.
- User-Visible Status: show whether the adapter observed material, saw only target identity, saw partial material, used cached material, or failed to access the target.
- Safe Fallback: preserve known target identity and gap status without inventing missing content.
- Partial Material Handling: partial reads remain partial.
- Stale Material Handling: stale reads remain stale unless refreshed and status changes.
- Auth Failure Handling: do not ask for or use credentials silently.
- Policy Failure Handling: do not bypass policy or access limits silently.

## Portability Notes

- Portable Contract: this definition describes behavior, not one implementation.
- Implementation Freedom: browser, CLI, extension, local runtime, server-side runtime, field workflow, human review procedure, notebook, archive workflow, or LLM helper may implement it if boundaries are preserved.
- Human Readability: required; a person should understand what the adapter does and does not claim.
- Machine Readability: structured fields should stay stable enough for tools to parse.
- Browser Notes: browser constraints, CORS, cache, cookies, and local state must be declared by concrete adapters when relevant.
- CLI Notes: CLI file, token, environment, and output behavior must be declared by concrete adapters when relevant.
- Runtime Notes: LLM/runtime context is not preservation by itself.
- Field Workflow Notes: digital field records should keep capture conditions, custody, uncertainty, and natural/physical referent boundaries visible.

## Related Origins

- [tiinex.digital.v1.origin.md](../.origins/tiinex.digital.v1.origin.md)
- [github.v1.origin.md](../.origins/github.v1.origin.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.v1.adapter.md](https://github.com/Tiinex/docs/blob/7d9fb6bd908ccd11b28e5c35e84c8f12b45f732b/.topics/.adapters/tiinex.v1.adapter.md)
  - Value: 4ynWYcRCV0VnjtqK2C0b-L3AV0CUfUZDFzkt7QHUyms

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: WXUn1cX9l3DrtyLwmW6jJ7AVVf0nnPnsl9ykCae8HM8