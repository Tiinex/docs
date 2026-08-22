# Continuity Context

- Envelope Schema: [tiinex.root.v1](../../../.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](../../../.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 00:10:25
  - Trace: [001-handoff-schema-recovery-and-canonical-definition-task.trace.md](001-handoff-schema-recovery-and-canonical-definition-task.trace.md)
  - Origin:
    - [relative](001-handoff-schema-recovery-and-canonical-definition-task.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](../../../.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-22 00:26:24
  - Authors: Schemer
  - Why: Records the completed recovery and canonical Handoff schema decision so the semantic result, source evidence, changed files, integrity observations, and follow-on boundary survive outside this execution session.
  - Summary: Accepted decision to add maintained `tiinex.handoff.v1` under coordination/handoff with explicit transfer, context, retained-responsibility, dependency, and completion-facing semantics separated from packaging mechanics.

---

# Canonical Handoff Schema Recovery Result

This result closes the controlling Handoff schema-recovery task for the supplied workspace snapshot.

## Decision

- State: accepted
- Subject: canonical Tiinex Handoff artifact semantics and maintained schema placement
- Decision: add `tiinex.handoff.v1` as a Root-descendant maintained schema at [coordination/handoff/tiinex.handoff.v1.schema.md](../../../.schemas/coordination/handoff/tiinex.handoff.v1.schema.md), expose it through the maintained schema index, and keep Handoff semantics declarative and separate from package/ZIP/resolver mechanics.
- Governing boundary: only explicit declarations under `## Transfers` move bounded work or responsibility from the declared `From` endpoint to the declared intended `To` endpoint; `Authors`, path, package/workspace membership, transport delivery, required/reference context, and artifact adjacency do not imply transfer.

### Newly Landed Semantic Decisions

- Handoff endpoints are body-level `From` and `To` truths with explicit `From Kind` / `To Kind`; optional Party/Role references improve resolution but are not required for readable local handoff.
- `Authors` remains authorship and is not reused as sender, responsibility owner, intended recipient, or delegation authority.
- Transfer declarations distinguish `work`, `responsibility`, and `work-and-responsibility` without creating a universal ownership or authority ontology.
- A transfer may point to one `Controlling Artifact`, allowing Task, Decision, or another durable work authority to remain separate from Handoff.
- `Required Context` and `Reference Context` are distinct repeated declaration surfaces and do not transfer responsibility for linked or packaged artifacts.
- Required context preserves `Availability: available | unavailable | unresolved | unknown`; unavailable required material stays explicit instead of being replaced by repository-global or transport guesses.
- `Retained Responsibilities` makes relevant non-transferred responsibility legible while preserving the rule that only explicit Transfers move responsibility.
- `Exclusions And Dependencies` records excluded scope and unresolved dependencies without becoming a package dependency resolver.
- `Completion Expectation` supports acknowledgement, result, disposition, return, none, custom, or unknown signals but does not create a handoff protocol state machine.
- Handoff does not prove sender authority, recipient acceptance, completion, consent, ownership, custody transfer, package completeness, transport delivery, or result correctness.

## Basis

### Recovery Evidence

A full workspace search found **37 historical artifacts whose filename contains `handoff`** under the educational meme lineage.

Of those, **36** use the recurring `001-1-echo-cloud-handoff.trace.md` form. Across that set the stable recovered pattern is:

```text
bounded Objective
Exact Leaf Scope
Grounding / required source context
Echo Cloud Handoff Contract
→ destination role
→ destination surface
→ required behavior
→ completion target
Required Output
Acceptance Criteria
Non-Goals
```

Representative recovery sources:

- [Tiinex Reddit Destination Echo Cloud Handoff Task](../../../educational/memes/socials/reddit/tiinex/001-1-echo-cloud-handoff.trace.md)
- [MythBusters Memes Echo Cloud Handoff Task](../../../educational/memes/school/mythbusters/001-1-echo-cloud-handoff.trace.md)
- [Developer Office Echo Cloud Handoff Task](../../../educational/memes/office/developer/001-1-echo-cloud-handoff.trace.md)

These artifacts are Task instances, not prior canonical Handoff authority. They nevertheless recover durable design signal: explicit destination role/surface, bounded scope, required grounding, expected output, acceptance boundary, non-goals, and a later attachment point.

A specialized historical task adds the missing retained-responsibility signal:

- [Cloud Image-Only Reply Handoff Task](../../../educational/memes/office/developer/001-2-1-1-cloud-image-only-reply-handoff.trace.md)

That task explicitly transfers only one Cloud image-generation slice while leaving evidence mapping and trace authoring to Anchor afterward. This is direct workspace evidence that useful Handoff semantics need to distinguish transferred work from responsibility retained by the prior side.

The historical Handoff tasks also carry `Authors: Anchor` while naming `destination role: Echo`. That pattern is evidence that authorship and handoff endpoints were already semantically different even before a dedicated Handoff schema existed.

Other workspace uses of the word handoff were treated as adjacent evidence rather than schema authority. Interface artifacts use handoff as a contact/review boundary, and idea/business artifacts discuss handoff quality or handoff pads, but they do not define responsibility-transfer structure.

### Adjacent Authority Check

The maintained schema families support the new Handoff without requiring rewrites:

- Party/Role can represent handoff endpoints when durable party/role artifacts exist, while Role already warns that role identity does not by itself prove holder authority.
- Task remains the authority for bounded work definition and can be referenced as a controlling artifact rather than absorbed into Handoff.
- Relation remains typed non-parent relation authority and is not widened into responsibility transfer.
- External Payload remains payload/material authority and is not widened into transport responsibility.
- Decision, Evidence, Discovery, validation, and other artifacts remain independent context/result authorities.

`coordination/handoff/` was selected because the artifact's main value is a bounded coordination transfer between declared endpoints. It is not itself a Party, Task, Relation, Payload, or transport package.

### Integrity Evidence

The supplied controlling Task artifact was preserved byte-for-byte, but its declared `sha256-base64url-c14n-v2` self value does **not** match the canonicalization convention used by the maintained schema set in this workspace.

Observed source bytes:

```text
task path
.topics/development/schema/handoff/001-handoff-schema-recovery-and-canonical-definition-task.trace.md

source SHA256
08790e66d0b3f4f4c13053e6427fd1bc1326f2fbfc19bebce33d57ed6f837bc5

declared v2 self value
xmTXRa8M9PTeVldaa_Ne2vRF84CE0FGVbd6bh266Lt0

v2 value under the maintained-schema convention
Lq6Ye40mdh32ihivBrdlevL09pGlFih01p3CTriCNYE
```

The declared Task value matches a neutralization variant that removes the separator space after `Value:`, while **101/101 pre-existing maintained schema self seals** match the workspace convention that neutralizes the active line to `Value: ` before hashing.

This tranche does not mutate the controlling Task because its exact supplied bytes are task authority and integrity repair was not requested. The discrepancy is recorded here so later work does not silently treat the current Task self seal as qualified evidence.

## Consequences

### Files Changed

The completed workspace changes are intentionally bounded to:

```text
ADDED
.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md

MODIFIED
.topics/.schemas/README.md

ADDED
.topics/development/schema/handoff/001-1-handoff-schema-recovery-result.trace.md
```

No historical Handoff task, existing schema, validator, Site source, package implementation, or bootstrap file was rewritten.

The new Handoff schema primary self seal is:

```text
sha256-base64url-c14n-v2
LE04zSJN813k0cYi3vt0Z_g9U8-y-Uh3ojrW2_6lRvI
```

### Follow-On Recommendation

Do **not** create a canonical generic Handoff ZIP/package schema as a consequence of this work.

If later planner/resolver work needs durable semantics for package selection, material-closure evidence, transport provenance, delivery state, or exact package reconstruction, first determine whether that package artifact has independent semantic value and whether an existing concept already owns it.

In particular:

- `tiinex.semantic.package.v1` already owns a specialized semantic package/discovery boundary for schema and Transition neighborhoods; it should not be silently generalized into generic Handoff transport.
- `tiinex.external.payload.v1` may own external payload identity/location when a payload is the main value.
- a future generic transport/package artifact should be proposed only if package-level selection/provenance/closure truth remains unowned after those boundaries are checked.

The controlling Task's v2 self-seal discrepancy should be verified and, if desired, repaired in a separate explicit integrity task so this completed semantic tranche does not mutate its own controlling source retrospectively.

## Immediate Next Questions

- No unresolved Handoff semantic blocker remains for landing `tiinex.handoff.v1` in this workspace.
- Future consumers still need to decide, within their own scope, whether a Handoff declaration is merely issued, operationally accepted, or completed; this schema intentionally requires separate acknowledgement, result, decision, evidence, or other authority rather than inventing an implicit lifecycle state machine.
- If planner/resolver tooling later computes material closure from Required Context, it must preserve Handoff semantic classes rather than inferring transfer from package membership.

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: 9Y0_ePT2-migVrIpd-w6cFR-zAe6dsD7VD-QEwAvx_s
