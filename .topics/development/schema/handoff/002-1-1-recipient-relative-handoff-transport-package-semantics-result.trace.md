# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 13:24:00
  - Trace: [002-1-recipient-relative-handoff-transport-package-semantics-task.trace.md](002-1-recipient-relative-handoff-transport-package-semantics-task.trace.md)
  - Origin:
    - [relative](002-1-recipient-relative-handoff-transport-package-semantics-task.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-22 13:42:00
  - Authors: Schemer
  - Why: Preserve the completed semantic reconciliation for recipient-relative Handoff transport packaging, material closure, mirrors, partial workspace materialization, bootstrap, provider-neutral resolution, and prior-package byte reuse before portable Tooling or Viewer implementation.
  - Summary: Current canonical authority is sufficient; no generic Handoff transport/package schema or Handoff mutation is justified, while recipient-relative closure and package-local materialization truth remain derived disposable transport metadata unless the package or access event gains independent durable semantic value.

---

# Recipient-Relative Handoff Transport Package Semantics Result

## Decision

- State: accepted
- Subject: semantic boundary between durable Handoff/workspace truth and recipient-relative disposable transport packaging
- Decision: keep `tiinex.handoff.v1`, `tiinex.semantic.package.v1`, `tiinex.external.payload.v1`, Access, Source, workspace lineage, and artifact identity authorities separate. Do not add or generalize a canonical generic Handoff transport/package schema in this tranche. Derive recipient-relative material closure, provider choice, local mirrors, partial/full materialization status, optional bootstrap inclusion, and package roundtrip evidence as transport-local metadata by default. Persist such truth as Tiinex artifacts only when the package, access event, material-resolution event, or closure evidence itself has independent durable semantic value.
- Canonical schema mutation: none.

## Basis

### Recovered Authority

The current Handoff schema already owns the durable collaboration semantics needed by the transport planner:

```text
Transfers
Required Context
Reference Context
Retained Responsibilities
Exclusions And Dependencies
Completion Expectation
```

It also explicitly states that Handoff is not a ZIP, package builder, resolver, transport receipt, or lifecycle state machine; package inclusion and delivery do not create transfer, acceptance, completion, responsibility, or artifact authority.

The current `Availability` field under Handoff context remains a Handoff-side declaration about the material's known availability state. It must not be reinterpreted as:

```text
physically embedded in this recipient package
recipient can resolve it through this environment
provider resolution succeeded
package closure is complete
```

Those recipient-relative truths are derived later by transport planning.

`tiinex.semantic.package.v1` is intentionally specialized. It declares a portable **schema / Schema Transition Companion / Transition Definition semantic package boundary**, nested-package policy, schema-resolution bindings, and package-scoped Transition discovery. Its package containment and transfer rules are not a generic Handoff archive model. Generalizing it would merge two different authorities and is rejected.

`tiinex.external.payload.v1` already covers durable references to ZIP exports, archives, binary attachments, and other external payloads with location, integrity, and access context. It may therefore represent a Handoff transport archive **when the archive itself has independent durable recovery/integrity value**. It does not make the archive the authority for the Tiinex artifacts carried inside it and does not define Handoff transfer state.

`tiinex.access.v1` may preserve a concrete access attempt/outcome when recipient or provider access itself has independent semantic value. A runtime capability probe or one package-planning attempt does not need an Access artifact merely to make portable closure work.

`tiinex.source.v1` may describe a chosen/configured durable source when source semantics themselves matter. A provider implementation selected for one transport resolution is not automatically a Source artifact.

### Durable Truth Versus Disposable Transport

Durable semantic truth remains in meaningful Tiinex workspaces and lineages:

```text
Handoff artifact
Task / Topic / Decision / Role / Party artifacts
required and reference context artifacts
canonical external/source references
artifact provenance and integrity
```

A disposable Handoff transport package may carry:

```text
one or more complete workspace materializations
one or more explicitly partial workspace materializations
exact mirrored bytes for otherwise unreachable required material
non-authoritative transport-control metadata
optional non-authoritative bootstrap/orientation material
```

No new Tiinex artifact should be silently created at the package root merely to describe that delivery. The Handoff artifact stays in its owning workspace lineage.

Deleting the disposable package must not delete Handoff state, lineage, artifact identity, or semantic history.

The same semantic Handoff may produce different valid transport packages for different recipients without changing the Handoff artifact.

### Recipient-Relative Material Closure

Material closure is recipient-relative and derived.

A portable planner should consume at least:

```text
semantic Handoff
→ Required Context / Reference Context / exact references

available workspace materializations
→ exact current bytes and workspace boundaries

recipient capability description
→ which resolution modes the concrete recipient environment can use

available material providers
→ local workspace
→ supplied workspace/package
→ cache/mirror
→ host connector
→ direct network where actually available
→ another qualified provider
```

Recipient capabilities and provider availability are execution inputs, not Tiinex semantic authority by themselves.

For each required context item the planner should derive one of:

```text
reference-sufficient
→ recipient can resolve the exact required representation without embedding it

materialized
→ exact bytes are included because the recipient cannot otherwise resolve them

unresolved
→ exact required material cannot currently be resolved

ambiguous
→ more than one candidate exists and no authority proves which representation is required

integrity-conflict
→ supplied/resolved bytes conflict with the expected exact representation/integrity authority
```

A semantic Handoff may remain valid while recipient transport readiness is `unresolved`, `ambiguous`, or otherwise blocked.

Transport closure PASS must therefore never be promoted into Handoff acceptance/completion, and Handoff validity must not be degraded merely because one recipient runtime lacks a provider.

### Provider-Neutral Resolution Boundary

Portable/shared Tooling should request **material**, not one provider.

The semantic request should preserve enough authority to identify the required representation, for example:

```text
context declaration identity
canonical/exact Material Reference when present
expected representation/integrity authority when known
workspace/source boundary when relevant
required versus reference-only classification
```

A host/runtime seam may satisfy that request through any qualified provider.

Provider-local facts may include:

```text
provider kind / provider instance
attempt outcome
resolved location
returned exact bytes
provider provenance
observed digest
```

Those facts are transport execution evidence, not replacement artifact identity.

Portable Tooling must not hard-code:

```text
GitHub
ChatGPT connector
direct sandbox network
one local filesystem
one package path
one viewer session
```

as canonical Tiinex resolution semantics.

Environment capability and system capability remain separate. A worker sandbox with no network may still have exact external resolution through a host connector or supplied material provider.

### Mirror And Representation Identity

A package-local mirror/materialization is a byte carrier, not a new canonical artifact merely because it is locally reachable.

A materialized entry must preserve, when known:

```text
canonical/exact reference or representation authority
exact byte digest / integrity evidence
workspace or source provenance
local package materialization path
material-source/provider provenance
```

Local package path is transport placement only.

A mirrored copy must not rewrite:

```text
Parent
Origin
canonical source reference
artifact representation identity
workspace ownership
Handoff endpoint or state
```

If exact sameness cannot be proven, the material must remain a distinct/unresolved representation candidate rather than being silently deduplicated by filename, path, title, semantic similarity, or prior-package provenance.

### Partial Workspace Materialization

A selected subset of an external workspace must not be labeled or projected as a complete workspace snapshot.

This does not require a new canonical Tiinex schema when the subset exists only inside a disposable package.

The package-local closure descriptor should distinguish at minimum:

```text
workspace materialization kind
→ complete
→ partial

workspace/material source descriptor
included exact entries
per-entry digest or equivalent exact representation proof
closure reason / requirement mapping
unresolved required entries, if any
```

For `complete`, Tooling must have evidence supporting completeness for the declared workspace boundary.

For `partial`, the descriptor must not expose package-root traversal or a workspace-shaped directory as proof that omitted files do not exist.

A partial materialization may still contain a valid Tiinex artifact whose canonical authority remains external to the package.

### Transport-Local Closure Descriptor

No canonical format is mandated in this schema tranche, but later Tooling should use one explicit machine-readable package-local descriptor rather than hidden in-memory state.

That descriptor is **transport control metadata**, not a Tiinex lineage artifact by default.

It should be sufficient for independent package roundtrip verification and should record, at minimum:

```text
descriptor/version identifier

selected semantic Handoff reference
→ reference only; does not move or change Handoff state

recipient-relative plan identity or opaque local run identifier
→ local transport identity only

workspace materializations
→ source/workspace descriptor
→ complete | partial
→ included file/material entries
→ exact digest/integrity
→ canonical/reference provenance where known

required-context disposition
→ reference-sufficient | materialized | unresolved | ambiguous | integrity-conflict

reference-context disposition
→ reference-sufficient | materialized | unresolved | omitted-by-plan

provider/material-source provenance for materialized bytes

optional bootstrap
→ present | absent
→ transport orientation only

roundtrip/package verification evidence
```

The descriptor must not claim universal package identity, artifact ownership, recipient acceptance, Handoff completion, semantic Parent, or workspace completeness beyond what its own exact closure evidence proves.

### Bootstrap

Bootstrap is optional recipient orientation/operational convenience.

It may be carried outside workspace materializations when needed for a fresh stateless recipient.

Bootstrap must not become:

```text
workspace authority
a required Handoff section
artifact content
Handoff lifecycle state
package semantic identity
a substitute for current durable Role / Task / docs authority
```

An already-grounded recipient may omit it without changing the semantic Handoff.

If bootstrap later has independent durable semantic value, it must be qualified under an existing/new owning artifact concept rather than promoted merely because packages carry it.

### Prior Handoff Package Reuse

A prior Handoff package may act as one qualified **material provider** for a later closure.

Reuse is valid only when the exact needed representation can be proven from the prior package's bytes and retained authority/provenance.

Allowed inference:

```text
prior package contains exact representation X
→ X may be reused as byte material for new closure
```

Forbidden inference:

```text
prior package contained X
→ prior package is canonical authority for X

prior package existed/delivered
→ previous Handoff accepted/completed

same filename/path/title
→ same representation

material was useful before
→ it is sufficient for this recipient/closure
```

Provider provenance should preserve that bytes were sourced from the prior package, while canonical artifact/source authority remains unchanged.

### Fail-Closed Conditions

Portable closure/planning must fail closed for required material when:

```text
required Material Reference is ambiguous
required exact target cannot be resolved
candidate bytes contradict known integrity/representation authority
multiple providers return distinct candidates without authority to select one
provider result cannot be bound back to the requested exact material
a partial workspace is being represented as complete without completeness evidence
required package entry is missing after build/roundtrip
transport descriptor and archive bytes disagree
```

Reference-only context may remain unresolved or omitted according to plan without making required closure PASS false, provided the package truthfully records that disposition and Handoff semantics do not separately make it required.

No fallback may use filename similarity, nearest repository file, package ancestry, provider priority, UI selection order, or "worked in the prior package" as semantic selection authority.

## Consequences

### Canonical Docs Disposition

```text
tiinex.handoff.v1
→ current authority sufficient
→ no mutation

tiinex.semantic.package.v1
→ preserved specialized
→ not generalized

tiinex.external.payload.v1
→ sufficient when a transport archive itself warrants durable payload reference
→ not required for every disposable package

tiinex.access.v1
→ optional when an access attempt/outcome deserves durable preservation

tiinex.source.v1
→ optional when a source/provider has independent durable source semantics

new generic Handoff transport/package schema
→ rejected for current evidence
```

The recipient-relative transport package is therefore not a missing Tiinex artifact concept by default. It is a derived delivery product over existing semantic authority.

### Implementation Guidance For Architect / Tooling

One shared portable material-closure/planning capability should be usable by Viewer, LLM workers, CLI/automation, and host integrations.

Portable Tooling may derive:

```text
required/reference material requirement graph
recipient-relative resolution disposition
provider requests
materialization plan
partial/full workspace packaging plan
package-local closure descriptor
roundtrip verification
```

Portable Tooling must consume, not invent:

```text
Handoff transfer/context classification
canonical artifact/source references
workspace/lineage ownership
Parent / Origin / provenance semantics
artifact integrity/representation authority
access/privacy/authorization boundaries where declared
```

Host/runtime integrations own provider mechanics and capability discovery.

Viewer may project choices and explanations but must not own a second closure model.

No consumer may persist hidden state that silently changes semantic Handoff validity, acceptance, completion, canonical artifact identity, or workspace completeness.

### No Schema Mutation

This result intentionally makes no canonical schema mutation.

That is deliberate, not incomplete work: the material-planning truths that remain are recipient/package/runtime-relative derivations whose durable semantic sources are already represented by current artifacts.

If future dogfood shows that a transport closure plan, package manifest, resolution receipt, or delivery object has independent durable value beyond its disposable transport run, open a new bounded schema task with concrete persisted-artifact evidence rather than promoting this package-local descriptor pre-emptively.

## Validation Evidence

Pre-mutation source authority checks:

```text
Handoff authority self seal
→ PASS

controlling Task self seal
→ PASS

dogfood Topic self seal
→ PASS

current Handoff schema self seal
→ PASS

Semantic Package schema self seal
→ PASS

External Payload schema self seal
→ PASS

maintained schema primary v2 self seals
→ 102 / 102 PASS
```

No input file is intentionally modified in this tranche.

Final workspace/package evidence:

```text
input workspace files
→ 398

intentionally modified input files
→ 0

missing input files
→ 0

new durable result files
→ 1
→ .topics/development/schema/handoff/002-1-1-recipient-relative-handoff-transport-package-semantics-result.trace.md

final workspace files
→ 399

output workspace ZIP independent extraction/roundtrip target
→ 399 / 399 byte-exact
```

The outer ZIP digest is terminal transport evidence rather than embedded archive content; embedding a digest of the archive inside that same archive would make the digest self-recursive. The durable evidence inside this workspace therefore records the exact final tree and independent roundtrip requirement, while the terminal return supplies the final outer ZIP SHA-256.

## Immediate Next Questions

- Architect should reconcile this semantic disposition with current Tooling/Viewer architecture and issue one bounded portable Tooling handoff for the shared material-closure planner.
- Tooling should pressure-test at least: fully local closure, reference-sufficient external context, host-resolved mirror, unresolved required material, conflicting provider bytes, prior-package byte reuse, partial external workspace materialization, complete workspace materialization, bootstrap present/absent, and independent archive roundtrip verification.
- Viewer work should follow the shared planner rather than invent package rules in UI code.
- If a durable package/resolution artifact later emerges from real product needs, Schemer should review that persisted evidence before introducing a canonical schema.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: i-hAd75QQjmGiRLTWaAwePV1aGZHcs13KDBUdG6Izew
