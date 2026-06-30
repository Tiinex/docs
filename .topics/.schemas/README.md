# Tiinex Schemas

This folder contains the human-readable schema notes that define how Tiinex artifacts and declared support surfaces should be interpreted.

These schemas are designed to make provenance, lineage, continuity, artifact role, runtime context, validation boundary, relation semantics, discovery, resource enablement, party references, event context, coordination state, and disclosure limits legible without requiring custom binary formats or opaque hidden metadata.

## Baseline Assumption

This README describes the schema surface expected in the Tiinex/docs baseline after this batch is applied. The batch zip contains only the new or revised files needed for the current schema update. Existing baseline schemas referenced here remain owned by the repository and are not duplicated merely to make this bundle self-contained.

## Why These Schema Notes Matter

Without schema guidance, a markdown artifact can be read too loosely.

A reader or language model may otherwise blur together:

- parent trace versus origin
- origin versus source
- source versus adapter output
- access versus permission
- preservation versus evidence
- evidence versus attestation
- finding versus evidence
- interpretation versus mutation
- validation method versus validation finding
- validation finding versus truth
- relation target versus parent continuity
- party reference versus identity proof
- role versus person
- invitation versus attendance, consent, or commitment
- availability versus allocation or permission
- event versus task or decision
- meeting versus decision record
- milestone versus event or evidence
- project versus task list or project methodology
- privacy boundary versus redaction or consent
- consent instrument versus attestation
- financial instrument versus resource contribution
- resource need versus task
- budget versus allocation
- allocation versus actual usage
- runtime execution versus evidence material
- traversal candidate search versus provenance recovery
- follow versus monitoring
- monitoring versus surveillance
- local readability versus actual validated continuity

The schema notes exist to reduce that ambiguity.

## Schema Families

### Continuity Envelope

- [tiinex.root.v1.schema.md](tiinex.root.v1.schema.md): continuity envelope above the main artifact body; preserves parent trace, origin, current schema, summary, repair context, inheritance, extension, and integrity context.

### Core Artifact Schemas

- [tiinex.topic.v1.schema.md](tiinex.topic.v1.schema.md): working topic and design-thread artifacts.
- [tiinex.task.v1.schema.md](tiinex.task.v1.schema.md): bounded work items with constraints, done criteria, and optional subtasks.
- [tiinex.preservation.v1.schema.md](tiinex.preservation.v1.schema.md): captured, copied, archived, photographed, transcribed, exported, or otherwise preserved material that remains available for later judgment.
- [tiinex.evidence.v1.schema.md](tiinex.evidence.v1.schema.md): preservation-specialized supporting material used to support, illuminate, test, or challenge a claim or question.
- [tiinex.feedback.v1.schema.md](tiinex.feedback.v1.schema.md): directed feedback with source, target, received signal, disposition, and limits.
- [tiinex.decision.v1.schema.md](tiinex.decision.v1.schema.md): landed decisions and what now governs.
- [tiinex.pointer.v1.schema.md](tiinex.pointer.v1.schema.md): thin continuity redirects toward an upstream trace or origin.
- [tiinex.signal.v1.schema.md](tiinex.signal.v1.schema.md): signal-bearing artifacts where interaction semantics are weaker than feedback.
- [tiinex.interpretation.v1.schema.md](tiinex.interpretation.v1.schema.md): explicit interpretation or `Use as` action that does not mutate the original artifact.
- [tiinex.lineage.upgrade.deferral.v1.schema.md](tiinex.lineage.upgrade.deferral.v1.schema.md): bounded deferrals for lineage-upgrade work that must not hide integrity errors.

### Source, Access, Origin, Tool, Interface, And Adapter Support

- [tiinex.source.v1.schema.md](tiinex.source.v1.schema.md): chosen, configured, or declared sources used by a piece of work.
- [tiinex.access.v1.schema.md](tiinex.access.v1.schema.md): attempts or outcomes around reaching, opening, visiting, reading, observing, contacting, or gaining access to a bounded target.
- [tiinex.origin.v1.schema.md](tiinex.origin.v1.schema.md): reusable origin boundaries for places, surfaces, environments, persons-facing contexts, natural systems, archives, platforms, repositories, datasets, or other starting contexts.
- [tiinex.digital.origin.v1.schema.md](tiinex.digital.origin.v1.schema.md): digital-origin boundaries for platforms, archives, documents, datasets, runtimes, records, and digital records of physical or natural contexts.
- [tiinex.natural.origin.v1.schema.md](tiinex.natural.origin.v1.schema.md): natural-origin boundaries for places, ecosystems, field sites, physical contexts, natural processes, observations, and samples.
- [tiinex.tool.v1.schema.md](tiinex.tool.v1.schema.md): reusable tool-definition artifacts.
- [tiinex.interface.v1.schema.md](tiinex.interface.v1.schema.md): reusable interface, contact boundary, handoff surface, or mediation boundary artifacts.
- [tiinex.adapter.v1.schema.md](tiinex.adapter.v1.schema.md): human-first adapter definitions for boundary crossing and intake without making software the base model.
- [tiinex.digital.adapter.v1.schema.md](tiinex.digital.adapter.v1.schema.md): digital adapter definitions for digital surfaces, records, transport, storage, exports, and runtimes.

### Party Family

- [tiinex.party.v1.schema.md](tiinex.party.v1.schema.md): bounded party or actor references such as persons, roles, organizations, groups, institutions, teams, communities, or other social/organizational participants.
- [tiinex.party.person.v1.schema.md](tiinex.party.person.v1.schema.md): individual person references without treating the reference as identity proof, consent, authority, employment, or attendance.
- [tiinex.party.role.v1.schema.md](tiinex.party.role.v1.schema.md): role, capacity, responsibility, or authority-facing position references without proving who holds the role.
- [tiinex.party.organization.v1.schema.md](tiinex.party.organization.v1.schema.md): organization, company, institution, department, unit, or formal organizational party references.
- [tiinex.party.group.v1.schema.md](tiinex.party.group.v1.schema.md): group, team, community, working group, cohort, or informal collective references.

### Event Family

- [tiinex.event.v1.schema.md](tiinex.event.v1.schema.md): planned, tentative, ongoing, occurred, cancelled, deferred, missed, or uncertain happenings within a bounded time or context.
- [tiinex.event.meeting.v1.schema.md](tiinex.event.meeting.v1.schema.md): meeting events where parties, resources, roles, rooms, channels, or other targets gather or are expected to gather.
- [tiinex.event.session.v1.schema.md](tiinex.event.session.v1.schema.md): bounded activity sessions such as workshops, field passes, review passes, streams, build sessions, research passes, or onboarding passes.
- [tiinex.event.deadline.v1.schema.md](tiinex.event.deadline.v1.schema.md): time boundaries by which something should, must, may, or is expected to happen.
- [tiinex.event.window.v1.schema.md](tiinex.event.window.v1.schema.md): periods or context windows where something is open, possible, valid, observable, available, or allowed.
- [tiinex.event.incident.v1.schema.md](tiinex.event.incident.v1.schema.md): unexpected, disruptive, risky, notable, harmful, or otherwise significant occurrences or reported occurrences.

### Coordination And Management Family

- [tiinex.project.v1.schema.md](tiinex.project.v1.schema.md): bounded coordinated efforts over time without making one project methodology the base concept.
- [tiinex.milestone.v1.schema.md](tiinex.milestone.v1.schema.md): meaningful markers in projects, processes, expeditions, development lines, or coordinated efforts.
- [tiinex.schedule.v1.schema.md](tiinex.schedule.v1.schema.md): human-readable timing or ordering structures across events, tasks, milestones, windows, sessions, reviews, resources, or other bounded targets.
- [tiinex.invitation.v1.schema.md](tiinex.invitation.v1.schema.md): requests, offers, reservation requests, or invitations for parties, resources, rooms, tools, facilities, sources, channels, or bounded targets.
- [tiinex.availability.v1.schema.md](tiinex.availability.v1.schema.md): availability state for parties, resources, rooms, tools, facilities, sources, channels, systems, or bounded targets.

### Discovery Family

- [tiinex.discovery.v1.schema.md](tiinex.discovery.v1.schema.md): bounded discovery context for intentional search, exploration, field entry, outcome, and uncertainty.
- [tiinex.discovery.follow.v1.schema.md](tiinex.discovery.follow.v1.schema.md): bounded ongoing attention to a target, source, topic, issue, repository, community, or other followable context without turning it into monitoring or surveillance.
- [tiinex.discovery.finding.v1.schema.md](tiinex.discovery.finding.v1.schema.md): one discovered item, absence, ambiguity, anomaly, contradiction, duplicate, lead, or triage candidate. A finding is not evidence automatically.
- [tiinex.discovery.research.v1.schema.md](tiinex.discovery.research.v1.schema.md): question-driven inquiry with source field, method boundary, findings, synthesis, uncertainty, and unresolved gaps.
- [tiinex.discovery.expedition.v1.schema.md](tiinex.discovery.expedition.v1.schema.md): exploratory route through a partly unknown field, preserving terrain, route, encounters, hazards, map updates, and promising leads.
- [tiinex.discovery.monitoring.v1.schema.md](tiinex.discovery.monitoring.v1.schema.md): bounded recurring or continued observation over time with cadence, trigger, observation boundary, review, and stop conditions.
- [tiinex.discovery.surveillance.v1.schema.md](tiinex.discovery.surveillance.v1.schema.md): high-impact monitoring that requires explicit authority, necessity, proportionality, minimization, oversight, retention, correction, and stop conditions.

### Resource Family

- [tiinex.resource.v1.schema.md](tiinex.resource.v1.schema.md): broad enablement context for resources needed, available, promised, received, allocated, blocked, returned, or unavailable without making money the base concept.
- [tiinex.resource.need.v1.schema.md](tiinex.resource.need.v1.schema.md): expressed need or blocker for funding, hardware, software, compute, data, access, permission, people, expertise, time, legal review, or other bounded resources.
- [tiinex.resource.contribution.v1.schema.md](tiinex.resource.contribution.v1.schema.md): offered, pledged, provided, donated, transferred, assigned, withdrawn, rejected, or returned resource contribution.
- [tiinex.resource.contribution.receipt.v1.schema.md](tiinex.resource.contribution.receipt.v1.schema.md): received-resource contribution record with source, recipient, receipt basis, restrictions, return, reversal, dispute, and interpretation limits.
- [tiinex.resource.allocation.v1.schema.md](tiinex.resource.allocation.v1.schema.md): reservation or assignment of a resource to a purpose, target, task, project, budget, need, instrument, or bounded activity.
- [tiinex.resource.allocation.usage.v1.schema.md](tiinex.resource.allocation.usage.v1.schema.md): actual, estimated, observed, or billed use of an allocated resource.
- [tiinex.resource.budget.v1.schema.md](tiinex.resource.budget.v1.schema.md): planned resource envelope, cap, quota, reserve, runway, cost limit, token limit, usage window, threshold, and overrun behavior.

### Instrument Family

- [tiinex.instrument.v1.schema.md](tiinex.instrument.v1.schema.md): terms, permission, authority, obligation, access, restriction, or value-transfer boundary.
- [tiinex.instrument.financial.v1.schema.md](tiinex.instrument.financial.v1.schema.md): financial instrument form such as donation, grant, sponsorship, loan, equity, SAFE, convertible note, invoice, subscription, reimbursement, internal transfer, revenue share, or other value-transfer form.
- [tiinex.instrument.consent.v1.schema.md](tiinex.instrument.consent.v1.schema.md): consent, refusal, withdrawal, permission, restriction, and use-boundary instrument.

### Relation, Validation, And Schema Governance

- [tiinex.relation.v1.schema.md](tiinex.relation.v1.schema.md): typed non-parent relationships between artifacts, payloads, claims, people, systems, or bounded targets.
- [tiinex.validation.method.v1.schema.md](tiinex.validation.method.v1.schema.md): validation method definitions with explicit scope, canonical identifier, recommended use, trust boundary, and failure modes.
- [tiinex.validation.finding.v1.schema.md](tiinex.validation.finding.v1.schema.md): one concrete validation observation against a bounded target.
- [tiinex.validation.report.v1.schema.md](tiinex.validation.report.v1.schema.md): bounded validation pass or review run collecting findings, methods, scope, summary, and remaining limits.
- [tiinex.schema.family.v1.schema.md](tiinex.schema.family.v1.schema.md): schema-family and schema-registry style artifacts that describe lineage, creatability, governance, and relationships between schema notes.
- `tiinex.definition.v1.schema.md`: planned / not yet schema-defined in this folder; reserved for shared definition-root semantics.
- `tiinex.capability.v1.schema.md`: planned / not yet schema-defined in this folder; reserved for capability manifests for runtimes, viewers, validators, and related support surfaces.

### Validation Methods

- [sha256-base64url-c14n-v1.validator.md](../.validators/sha256-base64url-c14n-v1.validator.md): current baseline SHA-256 base64url canonical-byte integrity method used by existing tooling.
- [sha256-base64url-c14n-v2.validator.md](../.validators/sha256-base64url-c14n-v2.validator.md): maintained validator definition for future footer-continuity integrity, self-snapshot fingerprints, and non-self target self-digest comparison.

### Runtime Family

- [tiinex.runtime.v1.schema.md](tiinex.runtime.v1.schema.md): broad runtime layer for execution context, runtime state, outputs, results, and interpretation boundaries.
- [tiinex.ai.runtime.v1.schema.md](tiinex.ai.runtime.v1.schema.md): AI-runtime specialization for model, prompt, output, tool, and interpretation context.
- [tiinex.machine.runtime.v1.schema.md](tiinex.machine.runtime.v1.schema.md): machine-runtime specialization for machine-shaped execution context, environment, outputs, and reproducibility boundaries.

### Reduction, Disclosure, And Privacy Family

- [tiinex.reduction.v1.schema.md](tiinex.reduction.v1.schema.md): observable reduction artifacts that preserve carry-forward state, loss, and uncertainty.
- [tiinex.redaction.v1.schema.md](tiinex.redaction.v1.schema.md): reduction-derived redaction, masking, removal, transformation, residual risk, and carry-forward limits.
- [tiinex.privacy.boundary.v1.schema.md](tiinex.privacy.boundary.v1.schema.md): privacy, sensitivity, sharing, serialization, and disclosure boundaries.
- [tiinex.attestation.v1.schema.md](tiinex.attestation.v1.schema.md): scoped human, role, organizational, legal, witness, lab, or review-based attestations.
- [tiinex.external.payload.v1.schema.md](tiinex.external.payload.v1.schema.md): readable references to large, external, binary, private, generated, or machine-shaped payloads that should not be fully embedded in markdown.

### Traversal And Quantum Traversal Runtime

- [tiinex.traversal.runtime.v1.schema.md](tiinex.traversal.runtime.v1.schema.md): compute-agnostic candidate-space traversal runtime with search space, candidate model, transition rules, verifier, executor, outcome, and failure boundaries.
- [tiinex.quantum.traversal.runtime.v1.schema.md](tiinex.quantum.traversal.runtime.v1.schema.md): quantum-specific traversal-runtime child that adds backend context, quantum candidate encoding, circuit or oracle semantics, measurement results, post-processing, and claim boundaries without replacing inherited traversal requirements.

### Packaging, Archive, And Recovery Support

The following names are reserved or planned support surfaces, but are not yet schema-defined in this folder:

- `tiinex.archive.v1.schema.md`
- `tiinex.zip.v1.schema.md`
- `tiinex.encrypted.v1.schema.md`
- `tiinex.broken.v1.schema.md`
- `tiinex.calendar.v1.schema.md`
- `tiinex.kanban.v1.schema.md`
- `tiinex.sprint.v1.schema.md`

Do not link to these as maintained schema files until the corresponding schema notes exist.

## Reading Guidance

In current Tiinex practice, schema authority should come from these schema notes rather than from convenient prose summaries elsewhere.

If a trace artifact names one of these schemas, that schema should guide how the artifact is read.

Support schemas should not be silently collapsed into parent continuity.