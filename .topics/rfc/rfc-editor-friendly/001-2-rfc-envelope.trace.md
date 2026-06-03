# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-28 03:32:41
  - Trace: [001-1-draft.trace.md](001-1-draft.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/f76e424f7e5e0628efe04226a5ed97425a1301cb/.topics/.schemas/tiinex.topic.v1.md)
  - Created At: 2026-05-28 16:46:58
  - Summary: Title: Human-Readable Continuity Envelopes for Recoverable Trace Artifacts
  - Type: markdown

---
# Consolidated RFC Envelope Draft

Title: Human-Readable Continuity Envelopes for Recoverable Trace Artifacts

Status: Experimental
Category: Informational
Project: Tiinex Continuity RFCs

---

## Abstract

This document consolidates the current RFC lineage into one envelope-
focused draft.

It defines a human-readable continuity envelope for trace artifacts that
supports explicit parent relations, bounded reconstruction, origin
handling, raw content identification, and optional side references.

The design prioritizes recoverability, inspectability, lineage
awareness, and runtime agnosticism over dense machine-first
serialization.

## Introduction

Modern AI-assisted workflows increasingly depend on continuity
distributed across chats, files, repositories, runtimes, models,
humans, and automation systems.

Most current systems optimize for immediacy and output generation, but
not for reconstructability, inspectability, lineage, recoverability, or
explicit continuity ownership.

When continuity degrades, outputs may survive while reasoning,
assumptions, workflow evolution, and reconstruction anchors become hard
to inspect or recover.

This RFC lineage began by naming that problem space and then proposed a
trace structure intended to improve bounded reconstruction and
continuity discrimination.

This document is a consolidation of that line. Its purpose is to carry
the envelope model itself more cleanly than the earlier partial
iterations did.

## Problem Statement

Continuity failures commonly involve:

- hidden runtime state
- inaccessible session memory or runtime-local context
- summarization loss
- opaque orchestration
- model drift
- incomplete handoffs
- changing execution surfaces

Users may lose the ability to:

- reconstruct reasoning
- inspect prior assumptions
- recover workflow evolution
- transfer operational context
- understand interpretation drift

Unknown or unavailable continuity should be represented explicitly where
possible instead of being silently fabricated or inferred.

The goal is not immutable truth, permanent consensus, or elimination of
drift.

The goal is a continuity artifact that helps humans and runtimes decide,
with bounded effort:

- whether an artifact is relevant
- whether it belongs to the chain they care about
- whether it is reconstructable from the capabilities they currently
  have
- how it should be interpreted as raw content

Humans remain responsible for interpretation, governance, trust
decisions, and contextual judgment.

## Non-Goals

This work does not attempt to:

- replace Git
- create blockchain-style verification
- enforce objective truth
- eliminate uncertainty
- eliminate interpretation drift
- centralize continuity ownership

## Design Goals

- keep the envelope human-readable
- make chain membership explicit
- separate semantic continuity from reconstruction entrypoints
- support bounded origin handling without hardcoding one transport
- identify raw content directly through lightweight fields
- support relation-first integrity and optional stronger profiles later
- remain usable across local, cloud, editor, archive, and future tool
  surfaces

## Envelope Structure

A continuity envelope should contain:

- a lightweight continuity header
- the primary body content
- an optional relation-oriented footer

The header exists for orientation.

The body remains the primary narrative or evidence surface.

The footer exists for bounded relation integrity and side-reference
anchoring.

## Continuity Context Header

The recommended header ordering is:

1. `Parent Trace`
2. `Origin`
3. `Type`
4. `Schema`

This ordering puts continuity relation first, reconstruction entrypoint
second, and raw content interpretation after that.

The envelope is intended to let a human or runtime answer, without
reading the entire body:

Is this artifact part of the continuity chain I care about, and can I
reconstruct it with the capabilities I currently have?

## Parent Trace

`Parent Trace` identifies the immediate semantic continuity ancestor.

It answers:

- what continuity chain the artifact belongs to
- which prior step it most directly continues

`Parent Trace` is a continuity relation. It is not a storage locator
and not an integrity proof.

## Origin

`Origin` identifies the best known bounded reconstruction entrypoint
when that entrypoint needs to be carried explicitly.

For non-root artifacts, `Origin` refers to the inherited reconstruction
entrypoint associated with the parent continuity step. It does not mean
the current artifact's own path.

`Origin` is most useful when:

- the inherited reconstruction path cannot be assumed from the local
  repository or filesystem context
- the parent continuity step exists outside that local context
- a recoverable external entrypoint should be carried forward

When used, `Origin` should use an adapter-prefixed locator form such as
`git://`, `https://`, `archive://`, or `file://`.

When the source should not be disclosed, `REDACTED` is a valid value.

When the parent step is already locally resolvable, `Origin` may be
omitted.

Unknown adapters do not invalidate the artifact. They only limit direct
reconstruction by runtimes that do not support them.

## Type And Schema

`Type` identifies the raw body form in lightweight human-readable terms.

`Schema` identifies the body structure with a stable schema name.

These fields exist to reduce guesswork about how the artifact should be
read as raw data.

The current lineage also suggests that schema names should remain simple
if they are expected to spread. For reusable public shapes, simpler
forms such as `tiinex.pointer.v1` or `tiinex.continuation.v1` are often
preferable to highly domain-specific names.

## Artifact Patterns

The envelope model can already cover several artifact patterns without
forcing one universal body shape:

1. pointer artifacts
2. plain-text continuity roots
3. markdown continuity drafts
4. runtime evidence artifacts
5. feedback-adjacent artifacts when those later adopt an explicit trace
   surface

Concrete examples are useful because they show that the model varies by
body pattern rather than only by filename.

For example:

- a pointer artifact may carry no body beyond its envelope and origin
- a prose artifact may carry a full RFC or problem statement body
- a runtime evidence artifact may carry additional side references

## Relation Model

The current best baseline is relation-first.

That means:

- `Parent-Integrity` appears when a parent trace exists
- `Reference Traces` may appear when side references need to be carried
- `Reference-Integrities` may appear when those side references need
  bounded verification
- roots do not require a default self-hash to be valid in the baseline

This keeps the footer aligned with relation semantics instead of turning
every artifact into a default self-verification object.

The minimum next-step relation model is therefore:

1. `Parent Trace`
2. `Parent-Integrity`
3. `Reference Traces`
4. `Reference-Integrities`

## Footer Discipline

When a footer is used, it should appear at the bottom of the artifact so
that orientation and narrative reading are not interrupted.

The footer is the appropriate place for:

- relation integrity values
- optional reference integrity values
- compact validation anchors

Footer calculations should exclude the footer region itself.

## Operational Guidance

For repository-backed lineage, the conservative operational pattern is
sequential.

Suggested order:

1. settle the parent artifact you mean to continue
2. compute or otherwise lock the parent's current relation value
3. copy that value into the child as `Parent-Integrity`
4. add side references separately when they matter
5. continue forward through the lineage

For side references, the same principle applies:

- copy reference integrity values from already settled reference
  artifacts when possible
- keep side references distinct from lineage parents

This reduces ambiguity about what exact parent state a child is
continuing.

## Optional Stronger Profiles

Direct parent integrity is sufficient for many local lineage cases, but
it may not always be enough for external origins.

For stronger cases, an explicit optional profile may be introduced.

One candidate is an origin-lineage-chain profile that walks backward
through an origin-side lineage and hashes a deterministic serialization
of that chain.

Such profiles should remain explicit opt-ins rather than silently
becoming the baseline model.

## Publication Direction

This document is written as a markdown continuity artifact, not as a
final Internet-Draft submission format.

For eventual publication, the content should be converted into the
required authoring and stream process used by the RFC Editor ecosystem.

The intended contribution of this iteration is to stabilize the
envelope model before transport and publication mechanics are finalized.

## Security Considerations

Continuity artifacts may expose lineage, origin locations,
infrastructure details, references, or operational context.

Implementations should support bounded disclosure, omission, and
redaction where appropriate.

## IANA Considerations

This document has no IANA actions.

## Conclusion

The continuity envelope preserves what matters most at the start of
reading:

- chain membership
- reconstruction entrypoint
- raw content interpretation
- recoverable orientation

By separating parent relation, origin handling, raw content
identification, relation integrity, and side references into distinct
responsibilities, the model improves continuity portability without
overloading any one field.

The goal is not perfect memory.

The goal is continuity that remains inspectable, reconstructable,
portable, and operationally recoverable across changing execution
surfaces.

---

# Continuity Integrity

- Parent-Integrity: sha256:b8e487b4e4ee4bd74c8961e5c4ec22b49d8aaeecdc5781b90e785b9ac29b48d4