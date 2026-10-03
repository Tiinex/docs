# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-11 17:31:36
  - Trace: [001-1-anchor-to-axiom-role-lineage-and-repository-boundary-reconciliation-handoff.trace.md](001-1-anchor-to-axiom-role-lineage-and-repository-boundary-reconciliation-handoff.trace.md)
  - Origin:
    - [relative](001-1-anchor-to-axiom-role-lineage-and-repository-boundary-reconciliation-handoff.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-11 17:56:17
  - Authors: Axiom
  - Why: Current Business material exposes one Role rename whose semantic continuity is not represented by its declared Parent; canonical Docs already provide enough authority to resolve it without schema expansion.
  - Summary: Accepted disposition for Playthings-to-Prism Role continuity and repository-local specialist work ownership.
  - Status: ready/local

---

# Role Continuity And Repository Ownership Disposition

The current Tiinex model already expresses the required distinction. Direct Role identity/capacity continuation is carried by `Parent`; typed Relation semantics are for meaningful non-parent relationships; Handoff endpoint references and Workspace placement do not create Parent or work ownership.

## Decision

- State: accepted
- Subject: current Role rename continuity and repository-local specialist work ownership
- Decision: a readable Role rename that preserves the same bounded role identity/capacity is direct continuity and must continue from the prior Role artifact through `Parent`. A typed Relation or prose such as `supersedes` may describe a non-parent relationship, but neither substitutes for direct continuity ancestry.
- Playthings to Prism: the carried Business material shows the change was intended to replace an ambiguous Role label while continuing the same presentation-Verse specialist capacity. The truthful continuity predecessor for the next canonical Prism endpoint is therefore `business::.topics/roles/001-8-playthings-role.trace.md`.
- Historical `001-8`: preserve `001-8-playthings-role.trace.md` unchanged as the historical predecessor and as the endpoint named by already-issued Playthings Handoffs.
- Historical `001-9`: preserve `001-9-prism-role.trace.md` unchanged as historical evidence of the naming correction and as the endpoint named by already-issued Prism Handoffs. Its declared Parent is the Roles topic, so it is a sibling Role artifact and must not be treated as the continuity successor of `001-8` merely because its body says `supersedes`.
- Next truthful Prism endpoint: author a new Business Role continuation whose explicit Parent is `001-8-playthings-role.trace.md`, with the corrected Prism label and current presentation-Verse specialist boundary. The natural coordinate is `.topics/roles/001-8-1-prism-role.trace.md`; the Parent edge, not the filename, is semantic authority. New Handoffs should reference that continuation after it exists.
- Repository ownership: Business may remain the organizational home for reusable Role artifacts. Repository-specific Tasks, Handoffs, Evidence, Decisions, and their Parent lineages belong to the owning repository when that repository owns the work. A Business-qualified Role endpoint reference is identity/capacity context only; it does not make Business the Parent, owner, or work-provenance source of the referencing artifact.
- Docs change: no canonical schema edit is required. Current Root, Party Role, Relation, and Handoff contracts already state the necessary Parent-versus-relation and endpoint-versus-ownership boundaries. No new schema family is warranted.

## Basis

- Root declares `Parent` as the direct continuity parent and ancestry relation.
- Party Role states that `Parent` remains direct continuity ancestry and that related targets use relation/target semantics unless direct continuation is being declared.
- Relation is explicitly for typed non-parent relationships and must not reinterpret `Parent` as a generic graph edge.
- Handoff states that Role artifacts may resolve endpoints/capacities, while file placement, Workspace membership, transport, and endpoint references do not create transfer authority or ownership.
- `001-9-prism-role.trace.md` says it supersedes the ambiguous Playthings label and preserves essentially the same presentation specialist responsibility, while its Parent remains the common Roles topic.
- The current Anchor-to-Prism Handoff says the Playthings objective continues under the corrected Role label, confirming rename/identity continuity rather than creation of an unrelated capacity.
- The repository-boundary correction explicitly keeps Business as coordination/Role context while specialist implementation continuity moves prospectively into Core, App, Site, Verse, and Extension repositories.
- The current Business Role audit found `001-1-1-anchor-major-planning-role.trace.md` correctly continuing Anchor through a Role Parent, `001-8-playthings-role.trace.md` valid as an initial Role branch artifact, and `001-9-prism-role.trace.md` as the only new Role continuity mismatch relevant to this task.

## Consequences

- Do not rewrite historical Playthings or Prism Handoffs, filenames, or Parent edges.
- Do not use `001-9-prism-role.trace.md` as proof that Playthings-to-Prism continuity is already represented.
- Anchor should create the new Business Prism Role continuation from `001-8` and use it for future Prism Handoff endpoints.
- Existing Handoffs that already reference `001-9` remain historical Handoff records; their endpoint reference remains readable without retroactive mutation.
- Continue prospective specialist Tasks/Handoffs/Evidence in their owning repository lineages even when their `From`, `To`, capacity, retained-responsibility, or review references point to reusable Business Roles.
- No Docs schema patch is part of this disposition.

## Review Conditions

- Reopen only if later qualified evidence shows Prism was intentionally a materially distinct Role identity rather than the renamed/generalized continuation of Playthings, or if a future schema contract changes the meaning of direct `Parent` continuity.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-anchor-to-axiom-role-lineage-and-repository-boundary-reconciliation-handoff.trace.md](001-1-anchor-to-axiom-role-lineage-and-repository-boundary-reconciliation-handoff.trace.md)
  - Value: Pfjr5xbZMeamSz7Y9IOYndNOV8Q1IRbhUi-KUSzDgd8

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 05wrUeUr0RGbcjkELfV9txKu3eTzRtX53mSQCLHby0Q