# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Repairs:
  - Post-Schemer integrity representation repair
    - Target: [Schemer recovery result](001-1-handoff-schema-recovery-result.trace.md)
    - Note: Corrected the Architect-authored controlling Task self-seal representation after Schemer found that the supplied `Value:xmTX...` form matched a non-canonical neutralization variant rather than the maintained c14n-v2 convention used by the current docs corpus. Body, Current Created At, Authors, task scope, and dependencies are unchanged.
    - Reason: Keep the controlling Task byte-integrity representation truthful before publication while preserving Schemer's durable finding about the exact input it received.
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 00:10:25
  - Authors: Tiinusen; Architect
  - Why: Establish a durable Schemer work unit for recovering or reconstructing the missing Handoff artifact semantics before Site viewer and packaging work relies on an implicit chat-only contract.
  - Summary: Recover prior Handoff intent where possible, then land a canonical maintained Handoff schema in Tiinex/docs with explicit responsibility-transfer semantics separated from packaging mechanics.

---

# Recover And Canonicalize Handoff Artifact Semantics

## Objective

Recover any prior Handoff artifact design signal that still exists in this workspace, distinguish it from historical task prose that merely uses the word handoff, and then define the canonical maintained Tiinex Handoff schema needed for explicit machine-readable handoff between parties or roles.

The result must make a handoff readable without hidden conversational context: who is handing off, who is the intended recipient, what responsibility or work is actually transferred, what material is required context only, what remains with the sender or prior responsible party, and what completion or return signal is expected.

## Done Criteria

- Search the supplied Tiinex/docs workspace for recoverable Handoff design intent before inventing replacement semantics.
- Add one maintained canonical Handoff schema artifact at the schema-family location that best matches its semantics; `coordination/handoff/` is a candidate, not pre-decided authority.
- Update the maintained schema index so the new schema is discoverable through the ordinary schema front door.
- Define Handoff as a declarative semantic artifact, not as a ZIP, export bundle, resolver, transport implementation, or package builder.
- Make sender/from and intended recipient/to explicit enough for human and machine interpretation without inferring either from path, filename, directory placement, authorship, or who received a transport ZIP.
- Keep `Authors` as authorship. Do not silently equate authorship with current responsibility, sender, recipient, ownership, or transfer.
- Make transferred responsibility/work explicit. Presence inside a handoff package or workspace must not itself imply transfer.
- Make retained or non-transferred responsibility legible so absence of an explicit transfer does not silently move responsibility to the recipient.
- Support required context and reference-only context as distinct from transferred responsibility. The schema should be able to identify controlling work and the supporting artifacts needed to understand it without claiming that every referenced artifact changes responsibility.
- Preserve an explicit place for exclusions, unresolved dependencies or unavailable required material when those facts matter to a handoff.
- Define an expected return, disposition, acknowledgement, result, or other completion-facing signal only to the degree appropriate for the schema; do not invent protocol state machines without semantic need.
- Define machine-readable validation and Artifact Creation Contract surfaces consistent with current Root conventions and current schema-family practice.
- Include a human-readable minimal example demonstrating a real role-to-role handoff where transferred work, required/reference context, and retained responsibility are visibly distinct.
- Keep the schema compatible with existing Tiinex concepts such as Party/Role, Task, Decision, Evidence, Discovery, Relation, External Payload, and validation surfaces without requiring those schemas to be rewritten merely to land Handoff.
- Record any materially unresolved semantic question as durable result/evidence rather than hiding it in the terminal chat response.
- Return the complete updated Tiinex/docs workspace, including a durable result artifact in this workstream that explains what was recovered, what was newly decided by Schemer, what files changed, and any follow-on recommendation.

## Scope

- This tranche owns Handoff artifact semantics and its maintained docs/schema representation.
- First recover, then design. Existing artifacts whose titles or bodies say "handoff" are evidence candidates, not automatically canonical Handoff authority.
- Pathing is for discovery/navigation only. Directory or filename placement must not imply sender, recipient, responsibility, ownership, semantic parentage, or authority.
- Dimension prefixes are local allocation/readability convention; Parent/Trace/Origin remain semantic continuity authority. Asset co-location may reuse a dimension when useful, but same-dimension naming must not create semantic relations by itself.
- Handoff semantics and handoff packaging mechanics are separate concerns:
  - Handoff artifact: declares intent, parties/roles, transferred work or responsibility, context classes, retained/excluded responsibility, and relevant completion-facing expectations.
  - Planner/resolver: may later consume those declarations to determine required material closure.
  - Package/ZIP: is a transport representation and must not acquire transfer semantics merely because an artifact is included.
- Do not create or standardize a canonical package/ZIP schema merely because packaging exists. If a package artifact has independent semantic value, surface that as an explicit follow-on recommendation with basis rather than folding transport implementation into Handoff.
- Do not implement or modify Tiinex/site in this tranche.
- Do not require remote executable code. Handoff and any schema references remain declarative data.
- Do not assume every handoff requires publication between local LLM turns. Local continuity may be usable before a parent has a qualified `browse + git` representation; do not fabricate publication authority.
- Prefer the smallest schema that captures the durable semantic distinction. Avoid encoding current dogfood-role names, GitHub, ChatGPT, repository paths, ZIP filenames, or viewer UI labels as universal Handoff semantics.

## Dependencies

- Root schema: [tiinex.root.v1](../../../.schemas/tiinex.root.v1.schema.md)
- Task schema: [tiinex.task.v1](../../../.schemas/core/task/tiinex.task.v1.schema.md)
- Schema index: [Tiinex Schemas](../../../.schemas/README.md)
- Existing coordination schemas under `../../../.schemas/coordination/` should be inspected before choosing Handoff placement.
- Existing Party and Role schemas under `../../../.schemas/party/` should be inspected before inventing sender/recipient identity semantics.
- Existing Relation, External Payload, Task, Decision, Evidence, Feedback, and Discovery schemas should be consulted only where they clarify adjacent semantic boundaries.
- Existing repository artifacts containing handoff-oriented tasks or packets should be sampled as recovery evidence, especially where they distinguish destination role, required source context, bounded scope, expected output, or later attachment points.
- Current maintained schema index contains no Handoff schema entry in this workspace; treat that as a discovery fact to verify locally, not as proof that no historical Handoff design ever existed.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 2JfKLJgMapGXhofEc8bQUNn1oAZlVTBPrxsVGhHDlZc
