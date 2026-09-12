# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/48fa54e779f5f4b86c3167955b48212263182cf8/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.origin.v1](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.schemas/tiinex.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Trace: [tiinex.origin.v1.schema.md](../.schemas/tiinex.origin.v1.schema.md)
  - Origin:
    - [relative](../.schemas/tiinex.origin.v1.schema.md)
    - [browse + git](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.schemas/tiinex.origin.v1.schema.md)
- Current
  - Current Schema: [tiinex.origin.v1](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.schemas/tiinex.origin.v1.schema.md)
  - Created At: 2026-06-29 00:00:00
  - Summary: Base origin contract for naming and bounding where material, signal, observation, or context may come from.

---

# Tiinex Origin Base Contract

- Status: draft origin definition

## Origin Identity

- Name: Tiinex origin base contract
- Version: 1
- Origin Family: base origin contract
- Canonical Identifier: tiinex.origin.v1
- Origin Medium: mixed
- Origin Scope: reusable boundary for source-side contexts
- Related Origin: tiinex.digital.v1.origin, tiinex.natural.v1.origin

## Origin Boundary

- In Scope: reusable definitions of where material, signal, observation, context, or claims may be encountered.
- Out Of Scope: proof that any artifact came from an origin, adapter implementation, evidence claims, consent claims, validation results, and preserved-material ledgers.
- Boundary Type: conceptual source-side boundary.
- Boundary Stability: depends on concrete origin definition.
- Scope Examples: natural place, public web surface, repository host, archive, dataset, field site, instrument context, local folder, runtime transcript, conversation surface, or institution.

## Material And Signal Boundary

- Possible Material Or Signal: observation, record, message, trace, sample, file, URL, post, comment, image, sensor reading, transcript, environmental condition, or report.
- Material Or Signal Status: observed, reported, direct, indirect, digital, physical, cached, preserved, partial, stale, unavailable, contested, private, unsafe, inferred, or unknown.
- Does Not Prove: truth, authorship, intent, consent, identity, authority, representativeness, evidence, validation, or preservation.
- Context Needed: concrete tools and adapters should state capture time, access boundary, preservation state, and interpretation limits when relevant.

## Access And Authority Boundary

- Access Modes: observe, read, visit, measure, scan, import, export, transcribe, reference, receive, or inspect when allowed by the concrete origin boundary.
- Authority Limits: access does not imply permission to broaden scope, preserve, publish, write back, disturb, sample, collect, identify, or make truth claims.
- User Action Requirements: authentication, preservation, publication, physical access, intrusive observation, sampling, destructive action, write-back, or scope broadening require explicit approval when relevant.
- Permission Boundary: concrete origins should state permission, policy, stewardship, privacy, safety, or consent limits.

## Mutability And Loss

- Mutability: concrete origins may be stable, live, changing, seasonal, editable, deletable, personalized, policy-defined, physically changing, socially fluid, or unknown.
- Loss Modes: deletion, edit, decay, weather, migration, access change, moderation, policy change, missing context, lost sample, failed capture, or broken reference.
- Staleness Risk: must be declared by concrete origin definitions when known.

## Use With Tools And Adapters

- Tool Use: tools may help approach, inspect, navigate, measure, capture, or understand an origin.
- Interface Use: interfaces define where an actor and origin meet.
- Adapter Use: adapters may carry material, signal, or meaning from the origin into Tiinex-compatible artifacts or candidates.
- Preservation Boundary: encounter, access, observation, capture, cache, transcription, or LLM context is not durable preservation unless explicitly preserved.
- Discovery Use: unknown or bounded origin contact may become discovery findings or gaps.
- Evidence Use: origin contact may support evidence only when material, claim, preservation, and validation boundaries support it.

## Failure And Ambiguity Handling

- Failure Modes: unavailable, private, restricted, unsafe, deleted, stale, partial, contested, misidentified, policy-scoped, inaccessible, lost, or unsupported origin state.
- Ambiguity Modes: indirect reports, quotations, mirrored material, changing conditions, missing context, sampled fragments, representation drift, or mistaken source identity.
- Safe Representation: keep the gap visible and describe the limit rather than inventing missing origin state.
- Unknown Origin: unknown should remain unknown until a source boundary is established.

## Portability Notes

- Portable Contract: usable by humans, viewers, CLIs, browser extensions, LLM runtimes, field workflows, archives, validators, and adapters.
- Implementation Freedom: implementations may vary if they preserve origin, access, material, preservation, and interpretation boundaries.
- Human Readability: required; a person should understand where the trail begins and what is not being claimed.
- Machine Readability: stable fields should remain extractable enough for tools and validators.
- Explorer Notes: a map, logbook, sensor, platform page, or photograph helps the journey, but it is not the land, event, person, or truth itself.

## Related Origins

- [tiinex.digital.v1.origin.md](tiinex.digital.v1.origin.md)
- [tiinex.natural.v1.origin.md](tiinex.natural.v1.origin.md)
- [github.v1.origin.md](github.v1.origin.md)

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.origin.v1.schema.md](https://github.com/Tiinex/docs/blob/fde8d4e584de66c3a61f5aa5e51c57469a9c8798/.topics/.schemas/tiinex.origin.v1.schema.md)
  - Value: ecnFTZkpST0m1n-9ldFWiLpdGQhxj9vIIIjU8qwWwjs

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: t8-cR417YI8fDUgpPhHRZgSQqY0M7NGGJxtutAxGJ4c