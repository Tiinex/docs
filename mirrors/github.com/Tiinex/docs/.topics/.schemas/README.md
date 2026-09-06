# Tiinex Schemas

This folder contains the human-readable schema notes that define how Tiinex artifacts and declared support surfaces should be interpreted.

This layout is intentionally directory-shaped. Each schema family may place a schema note beside related schema artifacts, examples, contract nodes, lint rules, generation notes, or validation support. The directory tree is a navigation and packaging aid. It is not the semantic authority.

## Directory Convention

- `.topics/.schemas/tiinex.root.v1.schema.md` remains at the schema root.
- Child schemas live in family directories.
- A schema directory may hold one schema and related artifacts that belong with it.
- Directory placement may mirror parent-child lineage for readability.
- Tools may use the directory as a discovery hint.
- Tools must read schema identity, parentage, origin, validation contract, inheritance, and generation rules from the artifact itself, not from the path alone.

## Identity Convention

Continuity Integrity fingerprints are durable references to the representations or continuity targets they verify. A content-derived fingerprint may change when the covered representation changes, so it is not automatically an immutable logical artifact identity across revisions or materializations.

Human labels, local anchors, and provisional handles may support authoring, forms, UI actions, migration, and prechecksum references, but they must not silently become global identity. Avoid durable sequential identifiers when a checksum/fingerprint already provides the needed durable reference to a concrete representation.

This distinction matters for schema contracts, annotations, transitions, relations, edits, and generated artifacts. Logical continuity across changing representations must not be inferred from fingerprint equality or difference alone.

## Why The Path Is Not The Authority

A folder is useful for humans and tooling, but Tiinex continuity must remain portable. A schema artifact should still be understandable if copied, archived, printed, mirrored, or read by a non-browser tool. The authoritative continuity signals remain inside the artifact:

- Continuity Context
- Parent
- Current Schema
- Origin
- Schema Validation Contract
- Artifact Creation Contract
- schema.contract / section / field / rule / generation / inheritance nodes where present
- Continuity Integrity when present

## Ordinary Field Ownership

For ordinary field groups inside a schema's `Schema Validation Contract`, Root normally maps contract group `G` to the exact same-name Artifact block `## G`.

That same-name mapping is Root machine authority, not a Tooling or site convention. Schema authors therefore do not need to repeat obvious target metadata.

Use `Instance Target` only for a real one-heading exception:

```text
### Deferral Surface

Instance Target
- `## Deferral`
```

If one contract idea spans several Artifact blocks, keep the machine contract local by splitting or re-aligning the groups to those readable blocks. Do not build multi-target lists merely to preserve an umbrella contract heading.

Optional target blocks remain optional: their Required Fields become required when the block is present, not merely because the field group exists.

## Current Layout Families

### Continuity Envelope

- [Root](tiinex.root.v1.schema.md)

### Core Artifact Schemas

- [Topic](core/topic/tiinex.topic.v1.schema.md)
- [Task](core/task/tiinex.task.v1.schema.md)
- [Preservation](core/preservation/tiinex.preservation.v1.schema.md)
- [Evidence](core/evidence/tiinex.evidence.v1.schema.md)
- [Feedback](core/feedback/tiinex.feedback.v1.schema.md)
- [Decision](core/decision/tiinex.decision.v1.schema.md)
- [Pointer](core/pointer/tiinex.pointer.v1.schema.md)
- [Signal](core/signal/tiinex.signal.v1.schema.md)
- [Interpretation](core/interpretation/tiinex.interpretation.v1.schema.md)
- [Lineage Upgrade Deferral](lineage/upgrade/deferral/tiinex.lineage.upgrade.deferral.v1.schema.md)

### Source, Access, Origin, Tool, Interface, And Adapter

- [Source](source/tiinex.source.v1.schema.md)
- [Access](access/tiinex.access.v1.schema.md)
- [Origin](origin/tiinex.origin.v1.schema.md)
- [Digital Origin](origin/digital/tiinex.digital.origin.v1.schema.md)
- [Natural Origin](origin/natural/tiinex.natural.origin.v1.schema.md)
- [Tool](tool/tiinex.tool.v1.schema.md)
- [Interface](interface/tiinex.interface.v1.schema.md)
- [Adapter](adapter/tiinex.adapter.v1.schema.md)
- [Digital Adapter](adapter/digital/tiinex.digital.adapter.v1.schema.md)

### Party

- [Party](party/tiinex.party.v1.schema.md)
- [Person](party/person/tiinex.party.person.v1.schema.md)
- [Role](party/role/tiinex.party.role.v1.schema.md)
- [Organization](party/organization/tiinex.party.organization.v1.schema.md)
- [Group](party/group/tiinex.party.group.v1.schema.md)

### Event

- [Event](event/tiinex.event.v1.schema.md)
- [Meeting](event/meeting/tiinex.event.meeting.v1.schema.md)
- [Session](event/session/tiinex.event.session.v1.schema.md)
- [Deadline](event/deadline/tiinex.event.deadline.v1.schema.md)
- [Window](event/window/tiinex.event.window.v1.schema.md)
- [Incident](event/incident/tiinex.event.incident.v1.schema.md)

### Coordination And Management

- [Project](coordination/project/tiinex.project.v1.schema.md)
- [Milestone](coordination/milestone/tiinex.milestone.v1.schema.md)
- [Schedule](coordination/schedule/tiinex.schedule.v1.schema.md)
- [Invitation](coordination/invitation/tiinex.invitation.v1.schema.md)
- [Availability](coordination/availability/tiinex.availability.v1.schema.md)
- [Handoff](coordination/handoff/tiinex.handoff.v1.schema.md)
- [Handoff Package](coordination/handoff/package/tiinex.handoff.package.v1.schema.md)

### Discovery

- [Discovery](discovery/tiinex.discovery.v1.schema.md)
- [Follow](discovery/follow/tiinex.discovery.follow.v1.schema.md)
- [Finding](discovery/finding/tiinex.discovery.finding.v1.schema.md)
- [Research](discovery/research/tiinex.discovery.research.v1.schema.md)
- [Expedition](discovery/expedition/tiinex.discovery.expedition.v1.schema.md)
- [Monitoring](discovery/monitoring/tiinex.discovery.monitoring.v1.schema.md)
- [Surveillance](discovery/surveillance/tiinex.discovery.surveillance.v1.schema.md)
- [Breakthrough](discovery/breakthrough/tiinex.discovery.breakthrough.v1.schema.md)

### Resource

- [Resource](resource/tiinex.resource.v1.schema.md)
- [Need](resource/need/tiinex.resource.need.v1.schema.md)
- [Contribution](resource/contribution/tiinex.resource.contribution.v1.schema.md)
- [Contribution Receipt](resource/contribution/receipt/tiinex.resource.contribution.receipt.v1.schema.md)
- [Allocation](resource/allocation/tiinex.resource.allocation.v1.schema.md)
- [Allocation Usage](resource/allocation/usage/tiinex.resource.allocation.usage.v1.schema.md)
- [Budget](resource/budget/tiinex.resource.budget.v1.schema.md)

### Instrument

- [Instrument](instrument/tiinex.instrument.v1.schema.md)
- [Financial Instrument](instrument/financial/tiinex.instrument.financial.v1.schema.md)
- [Consent Instrument](instrument/consent/tiinex.instrument.consent.v1.schema.md)

### Transition

- [Transition Definition](transition/definition/tiinex.transition.definition.v1.schema.md) — active reusable semantic transformation definition
- [Transition](transition/tiinex.transition.v1.schema.md) — legacy invocation/provenance-shaped transition contract retained for historical interpretation
- [Artifact Transition](transition/artifact/tiinex.artifact.transition.v1.schema.md) — legacy artifact-specialized invocation/action contract retained for historical interpretation

New reusable transition authoring should use `tiinex.transition.definition.v1`. The legacy transition schema IDs keep their historical meanings because published Tiinex material already references them. Invoking a Transition Definition does not normally create a Transition artifact; an Event, Report, Receipt, or another declared output may record an occurrence when that occurrence has independent artifact value.

### Relation, Validation, And Schema Governance

- [Relation](relation/tiinex.relation.v1.schema.md)

Ordinary artifacts and schema contracts may declare or project typed relation edges without creating a standalone Relation Artifact. Use a Relation Artifact when the relation instance itself carries independent semantic content, provenance, state, interpretation limits, or lifecycle worth preserving.

- [Validation Method](validation/method/tiinex.validation.method.v1.schema.md)
- [Validation Finding](validation/finding/tiinex.validation.finding.v1.schema.md)
- [Validation Report](validation/report/tiinex.validation.report.v1.schema.md)
- [Schema Family](schema/family/tiinex.schema.family.v1.schema.md)

### Runtime

- [Runtime](runtime/tiinex.runtime.v1.schema.md)
- [AI Runtime](runtime/ai/tiinex.ai.runtime.v1.schema.md)
- [Machine Runtime](runtime/machine/tiinex.machine.runtime.v1.schema.md)

### Reduction, Disclosure, And Privacy

- [Reduction](reduction/tiinex.reduction.v1.schema.md)
- [Redaction](reduction/redaction/tiinex.redaction.v1.schema.md)
- [Privacy Boundary](privacy/boundary/tiinex.privacy.boundary.v1.schema.md)
- [Attestation](attestation/tiinex.attestation.v1.schema.md)
- [External Payload](external/payload/tiinex.external.payload.v1.schema.md)

### Traversal And Quantum Traversal Runtime

- [Traversal Runtime](traversal/runtime/tiinex.traversal.runtime.v1.schema.md)
- [Quantum Traversal Runtime](traversal/runtime/quantum/tiinex.quantum.traversal.runtime.v1.schema.md)

### Portal, Interaction, Presentation, Knowledge, Annotation, And Schema Contract Drafts

- [Portal](portal/tiinex.portal.v1.schema.md)
- [Portal Time](portal/time/tiinex.portal.time.v1.schema.md)
- [Interaction Unit](interaction/unit/tiinex.interaction.unit.v1.schema.md)
- [Schema Module](schema/module/tiinex.schema.module.v1.schema.md)
- [Presentation Surface](presentation/surface/tiinex.presentation.surface.v1.schema.md)
- [Question](knowledge/question/tiinex.question.v1.schema.md)
- [Condition](knowledge/condition/tiinex.condition.v1.schema.md)
- [Claim](knowledge/claim/tiinex.claim.v1.schema.md)
- [Derivation](knowledge/derivation/tiinex.derivation.v1.schema.md)
- [Annotation](annotation/tiinex.annotation.v1.schema.md)
- [Artifact Annotation](annotation/artifact/tiinex.artifact.annotation.v1.schema.md)
- [Spatial Annotation](annotation/artifact/spatial/tiinex.spatial.annotation.v1.schema.md)
- [Projection Annotation](annotation/artifact/spatial/projection/tiinex.projection.annotation.v1.schema.md)
- [Temporal Annotation](annotation/artifact/temporal/tiinex.temporal.annotation.v1.schema.md)
- [Semantic Annotation](annotation/artifact/semantic/tiinex.semantic.annotation.v1.schema.md)
- [Style Annotation](annotation/artifact/style/tiinex.style.annotation.v1.schema.md)
- [Validation Annotation](annotation/artifact/validation/tiinex.validation.annotation.v1.schema.md)
- [Adapter Annotation](annotation/artifact/adapter/tiinex.adapter.annotation.v1.schema.md)
- [Schema Contract](schema/contract/tiinex.schema.contract.v1.schema.md)
- [Schema Section](schema/contract/section/tiinex.schema.section.v1.schema.md)
- [Schema Field](schema/contract/field/tiinex.schema.field.v1.schema.md)
- [Schema Value](schema/contract/value/tiinex.schema.value.v1.schema.md)
- [Schema Rule](schema/contract/rule/tiinex.schema.rule.v1.schema.md)
- [Schema Generation](schema/contract/generation/tiinex.schema.generation.v1.schema.md)
- [Schema Relation](schema/contract/relation/tiinex.schema.relation.v1.schema.md)
- [Schema Inheritance](schema/contract/inheritance/tiinex.schema.inheritance.v1.schema.md)
- [Schema Example](schema/contract/example/tiinex.schema.example.v1.schema.md)

## Reserved But Not Maintained Here Yet

The following names remain reserved until corresponding schema notes exist:

- `tiinex.definition.v1.schema.md`
- `tiinex.capability.v1.schema.md`
- `tiinex.archive.v1.schema.md`
- `tiinex.zip.v1.schema.md`
- `tiinex.encrypted.v1.schema.md`
- `tiinex.broken.v1.schema.md`
- `tiinex.calendar.v1.schema.md`
- `tiinex.kanban.v1.schema.md`
- `tiinex.sprint.v1.schema.md`

Do not link to reserved names as maintained schema files until the corresponding schema notes exist.
