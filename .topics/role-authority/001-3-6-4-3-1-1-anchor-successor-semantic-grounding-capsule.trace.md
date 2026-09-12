# Continuity Context

- Envelope Schema: tiinex.root.v1
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-11 23:25:41
  - Trace: [001-3-6-4-3-1-anchor-to-axiom-docs-major-003-anchor-successor-grounding-evolution-handoff.trace.md](001-3-6-4-3-1-anchor-to-axiom-docs-major-003-anchor-successor-grounding-evolution-handoff.trace.md)
  - Origin:
    - [relative](001-3-6-4-3-1-anchor-to-axiom-docs-major-003-anchor-successor-grounding-evolution-handoff.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-09-11 23:48:00
  - Authors: Axiom
  - Why: Future Anchors need the durable mental-model distinctions exposed by recent failures without importing fast-moving lane status into canonical grounding.
  - Summary: Stable composable grounding that keeps lineage, carrier, repository, Role-holder, acceptance, source-reconciliation and schema-authoring authority distinct for future Anchor successors.
  - Status: ready/local

---

# Anchor Successor Semantic Grounding Capsule

## Purpose

This artifact is stable, composable semantic grounding for an Anchor successor. It preserves distinctions that should survive individual Majors, lanes, repository revisions, and conversations. It is suitable to carry as exact Required Context when a work turn needs these distinctions.

It is deliberately **not** a current-state recovery document. Current lane status, repository revisions, open blockers, accepted return sets, and the present recovery frontier belong in current Tasks, Handoffs, Evidence, Decisions, and recovery checkpoints.

## Compose Existing Authority Rather Than Recreate It

Read this capsule together with the authority that owns the underlying rule:

- [Repository Boundaries](../../REPOSITORY_BOUNDARIES.md) for repository responsibility and semantic-authority placement.
- [Lineage Policy](../../LINEAGE_POLICY.md) for root/parent/origin/provenance preservation and interpretation limits.
- [Composable Operational Grounding Disposition](001-1-1-1-1-1-1-1-1-1-1-1-anchor-composable-operational-grounding-disposition-decision.trace.md) for how reusable guidance becomes operative without hidden Role inheritance or package-derived applicability.

This capsule summarizes cross-cutting interpretation boundaries. When a more specific qualified artifact owns a rule, that artifact remains the authority.

## Stable Distinctions A Successor Must Preserve

### 1. Semantic lineage is not a transport coordinate

`Parent`, `Trace`, `Origin`, and qualified integrity establish artifact continuity. A filename segment, directory placement, Git branch, package name, carrier dimension, carrier Major, route pointer, conversation branch, or UI grouping does not become semantic Parent authority merely because it looks sequential.

Carrier lineage may project human progress, retry, stability, or package ancestry. It remains transport/recovery metadata. Artifact filename progression may be a useful local projection of Parent continuity. The two coordinate systems can advance differently without contradiction.

### 2. Repository placement is not semantic authority

A repository is an ownership and implementation boundary, not an automatic semantic-authority grant. Docs owns canonical semantic contracts. Core may carry or implement exact Docs semantics without becoming their canonical source. Business may host reusable organizational Role identity without becoming the owner of specialist implementation, schema, evidence, Task, Decision, or Handoff work that naturally belongs in another repository.

When ownership is unclear, resolve the declared artifact authority and responsibility boundary. Do not infer authority from where bytes happen to be stored.

### 3. Role identity is not session-holder binding

A Role artifact defines an assignable capacity and its authority limits. It does not prove that a particular person, model, process, chat, or runtime currently holds that Role. A Handoff recipient Role and an executing session are separate facts until an explicit holder binding or other qualified assignment authority relates them.

Selecting a route, loading a Role, receiving a carrier, or being the current assistant does not silently bind the session to the Role.

### 4. Applicability and authority fail closed

Missing or ambiguous authority must remain missing or ambiguous. Do not promote package placement, inherited prose, nearby filenames, conversation memory, repository identity, presentation output, or plausible intent into an authority edge.

If a Decision, Relation, Role, Handoff, semantic Parent, holder binding, schema authority, or required exact source is necessary to act and cannot be qualified, withhold the stronger conclusion and route the gap to its owner.

### 5. Current source and incoming work are distinct until reconciled

A complete Workspace snapshot proves completeness of that snapshot under its declared contract. It does not prove that the snapshot contains concurrent current-only ancestry or that it is safe to replace the integration frontier wholesale.

Return acceptance therefore requires exact source reconciliation against the return's base and the current accepted frontier. Current-only and incoming-only source may both be legitimate. Conflicting overlap requires explicit disposition. This is a source-integration rule; it does not alter artifact Parent semantics.

### 6. A Major is bounded work, not a semantic numbering rule

A Major is an operational checkpoint/scope boundary when a controlling process or artifact declares it. Major scope must not expand silently because another useful fix is nearby, because a carrier number advanced, because an artifact lineage became long, or because a specialist discovered adjacent work.

New work outside the controlling Major must be excluded, separately delegated, or explicitly re-scoped by the authority that owns that decision. Carrier Major numbers and artifact filename dimensions remain separate projections.

### 7. Recovery, acceptance, and semantic truth are different

A recoverable carrier is evidence that work can be continued from carried source. It is not recipient acceptance, human acceptance, release readiness, publication, semantic truth, or permission to mutate another owner's surface.

Machine-green qualification does not substitute for a declared human gate. A human-facing presentation such as Playthings can provide product evidence or expose defects; its rendered behavior does not become Tiinex semantic truth. If presentation behavior and canonical semantics disagree, repair the correct layer rather than redefining semantics from the presentation.

### 8. Authoring hosts consume schema authority; they do not re-declare it

A scalable host authoring surface should select the intended schema/transition, supply the artifact-specific semantic content and exact Parent authority, and let qualified schema creation contracts/renderers supply schema-owned envelope/field semantics. Hosts should not duplicate schema field rules in prompts, UI-specific templates, or role folklore.

If Tooling cannot resolve exact creation authority, fail closed or surface the missing capability. Do not compensate by teaching each host an independent copy of schema semantics.

## Operating Invariants That Are Not New Canonical Semantics

The following are important current operating invariants, but their detailed lifecycle belongs to Role, Business process, or Tooling rather than this semantic capsule:

- carrier prefix-local series can progress independently while semantic Parent continuity remains explicit;
- audit exact source, lineage, ownership, and carrier identity before merge/manufacture;
- reconcile specialist returns with current/outbound ancestry instead of replacing the integration frontier wholesale;
- prefer qualified local/carried recovery material before remote reconstruction, and make fallback explicit;
- dependency-sensitive Sigma human gates must receive complete selected source/context and a clear front-door action, while package delivery itself remains non-acceptance;
- discovered process defects, recurring teaching burden, and repeated operator workarounds must be classified and routed into durable Role, Process, Semantics, Grounding, or Tooling improvements.

These rules should be carried through the artifacts that actually own their applicability. This capsule prevents a successor from confusing their operating importance with a new universal schema rule.

## Successor Interpretation Test

A successor has not recovered this grounding if it does any of the following without explicit authority:

- treats carrier or filename order as semantic Parent truth;
- infers its Role from route selection or assistant identity;
- makes Business the owner of specialist work merely because the Role lives there;
- replaces current source with an incoming Workspace snapshot without base/current reconciliation;
- expands a fixed Major because adjacent work is useful;
- equates package manufacture, tests, or presentation behavior with human acceptance or canonical semantics;
- reconstructs missing authority from chat memory or remote repository archaeology when exact carried/local authority should have been used;
- re-implements schema semantics in a host prompt/template instead of consuming qualified creation authority.

When one of these occurs, record the observed gap and route it to the narrowest durable owner rather than adding the same warning to every future Handoff.

## Interpretation Limits

This capsule does not define carrier allocation algorithms, merge algorithms, current repository lists, current lane status, human acceptance outcomes, or implementation behavior not evidenced by qualified Tooling. It does not itself make a Business process operative or mutate any Role. It is reusable semantic grounding material that other controlling artifacts may carry or explicitly adopt.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-3-6-4-3-1-anchor-to-axiom-docs-major-003-anchor-successor-grounding-evolution-handoff.trace.md](001-3-6-4-3-1-anchor-to-axiom-docs-major-003-anchor-successor-grounding-evolution-handoff.trace.md)
  - Value: b2Aco9lOoNgKJOTHRyeFFxbpe5R6a5-5Vs5WiPOsrBw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: vA8dKNfXBFXzjmHcKgfF_EAvYyYwdQ2GOdtlqUKnCxE