# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-22 14:12:00
  - Trace: [003-stable-schema-reference-locator-publication-policy-task.trace.md](003-stable-schema-reference-locator-publication-policy-task.trace.md)
  - Origin:
    - [relative](003-stable-schema-reference-locator-publication-policy-task.trace.md)
- Current
  - Current Schema: [tiinex.decision.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/decision/tiinex.decision.v1.schema.md)
  - Created At: 2026-08-22 14:17:00
  - Authors: Schemer
  - Why: Preserve the completed schema-reference identifier/locator publication-policy reconciliation and its bounded Root clarification before current docs publication.
  - Summary: Root now states explicitly that schema-reference labels carry semantic schema identifiers while link targets carry representation locators; immutable canonical locators are preferred for different already-published schemas when available, while self/local/unpublished, plain-identifier, mutable-latest, mirror, and unresolved boundaries remain distinct.

---

# Stable Schema Reference Locator Publication Policy Result

## Decision

- State: accepted
- Subject: authoring/publication policy for `Envelope Schema`, `Parent Schema`, and `Current Schema` schema references
- Decision: clarify the existing Root `Schema Reference Fields` authority rather than create a new schema family. Preserve Markdown Link and Plain Schema Id as valid shapes, make identifier-versus-locator semantics explicit, prefer immutable canonical locators for different already-published schemas when available, keep self/local/unpublished references truthful, and keep mutable latest/discovery locators semantically distinct from exact immutable representation binding.
- Corpus normalization disposition: no broad rewrite in this tranche. Record concrete mutable/reference-shape debt and require a separate bounded normalization review before Site/refactor publication work relies on exact schema-reference resolution.

## Basis

### Owning Authority

Root already owns:

```text
Schema Reference Fields
→ Envelope Schema
→ Parent Schema
→ Current Schema

Allowed Shapes
→ Markdown Link
→ Plain Schema Id
```

Before this tranche Root only stated:

```text
Markdown Link
→ preferred when a schema artifact target is available

Plain Schema Id
→ allowed when no useful target is available
   or local context already resolves the id
```

That was enough to validate current forms, but not enough to preserve the required semantic distinction for ordinary Markdown readers and portable resolvers:

```text
link label
→ semantic schema identifier/key

link target
→ schema representation locator/traversal route
```

Because this distinction applies to Root-owned schema-reference fields regardless of descendant schema, the smallest true owner is Root itself.

### Qualified Publication Rule

The accepted authoring/publication rule is:

```text
different schema
+ already-published canonical representation
+ immutable canonical locator available
→ published authoring SHOULD prefer the immutable canonical locator

self-reference
→ relative self-link remains valid when it continues to resolve
   to that same representation as the file moves with itself

local/unpublished schema
→ relative/local locator remains truthful
→ do not fabricate a publication permalink

no useful locator
→ Plain Schema Id remains valid
→ identifier truth is preserved
→ exact representation remains unclaimed/unresolved when exact material matters

mutable branch/latest locator
→ useful discovery/current-material route
→ not equivalent to immutable exact-representation binding
```

`commit-pinned browse + git` is one current implementation of an immutable canonical locator. GitHub, branches, repositories, and commit hashes are not the semantic definition of stable schema-reference authority.

### Exact Representation Boundary

A schema-reference locator is not the schema semantic identifier itself.

Consumers must preserve at least:

```text
declared schema identifier
declared locator, if any
locator class/resolution state
resolved representation, if any
representation/source provenance
integrity evidence, when available
```

Successful browser/network/path resolution does not automatically prove exact intended bytes.

When a link target resolves to a schema representation whose declared semantic identity contradicts the link-label schema identifier, tools must preserve the contradiction/unresolved state. They must not repair it from filename, path, host, repository, branch, or label similarity.

A host may satisfy a declared locator through local workspace material, mirror, supplied package, connector, cache, or network. Provider choice may change without changing the declared semantic schema identifier or silently substituting a different representation.

### Corpus Pressure

The current workspace contains **1076** Root schema-reference field occurrences:

```text
commit-pinned links
→ 681

relative links
→ 318

plain schema ids
→ 76

mutable branch links
→ 1

other URL links
→ 0
```

Relative references decompose as:

```text
Current Schema self-relative
→ 107

Envelope Schema self-relative
→ 1

Envelope Schema non-self relative
→ 104

Parent Schema non-self relative
→ 103

Current Schema non-self relative
→ 3
```

This mixed corpus is not evidence that relative references are globally invalid. Many relative references are self/local/workspace-portable forms and the controlling Task explicitly forbids assuming invalidity from representation style alone.

The one mutable-branch schema-reference occurrence is concrete normalization debt:

- `.topics/.schemas/adapter/digital/tiinex.digital.adapter.v1.schema.md` → `Parent Schema` → `https://github.com/Tiinex/docs/blob/master/.topics/.schemas/adapter/tiinex.adapter.v1.schema.md`

That target is useful as a latest/discovery route but must not be treated as immutable exact representation binding.

The current Handoff schema itself demonstrates another legitimate mixed form:

```text
Envelope Schema / Parent Schema
→ relative workspace traversal

Parent Origin browse + git
→ commit-pinned recovery authority

Current Schema
→ relative self-link
```

The new Root rule makes future publication preference explicit without rewriting this entire historical/current corpus merely for visual uniformity.

### Normalization Gate

No corpus-wide normalization is justified in this tranche.

The following durable gate is retained for later bounded normalization before Site/refactor work treats schema locators as exact portable bindings:

```text
1. eliminate or explicitly classify mutable branch schema-reference locators
   when exact representation binding is required

2. inspect non-self relative schema-reference candidates
   before changing them
   → distinguish self/local/unpublished/workspace-portable use
   → from already-published external schema references
     where a stronger immutable canonical locator exists

3. do not rewrite Plain Schema Id merely for link uniformity

4. after any locator-byte rewrite
   → recompute affected primary c14n-v2 self seals
   → preserve artifact meaning/lineage
   → verify exact target identity rather than guessing from path
```

Architect retains the publication decision for whether that normalization gate belongs before the immediate docs push or before the later Site/refactor merge. This Schemer result does not silently broaden the current task into corpus migration.

## Root Mutation

The only canonical semantic mutation in this tranche is the bounded clarification of:

```text
.topics/.schemas/tiinex.root.v1.schema.md
→ ### Schema Reference Fields
```

The added Root rules state that:

- semantic schema identity and representation location are separate truths;
- Markdown-link label carries the schema identifier/key;
- Markdown-link target carries the representation locator/traversal route;
- path/filename/host/repository/branch shape must not become schema identity;
- successful locator resolution is not automatically exact-byte proof;
- immutable canonical locators should be preferred for different already-published schemas when available;
- mutable branch/latest locators must not be treated as immutable exact-representation locators;
- relative self-links remain valid;
- truthful local/unpublished relative links remain valid;
- plain schema IDs preserve identifier truth without asserting one exact representation;
- identifier/target contradictions remain contradictions rather than heuristic repair candidates.

The Root primary c14n-v2 self seal was recomputed after that semantic mutation.

## Downstream Tooling Guidance

Portable Tooling should represent schema reference qualification as separate state, not one overloaded URL/string:

```text
schemaIdentifier
locator
locatorKind
resolutionState
resolvedRepresentation
source/provenance
integrityQualification
```

At minimum, consumers should distinguish:

```text
identifier-only
locator-unresolved
relative/local-resolved
mutable-latest-resolved
immutable-exact-locator-resolved
ambiguous
identity-contradiction
integrity-conflict
```

These are implementation-facing qualification states, not new Root fields.

Tooling must not:

```text
infer exact representation from schema identifier alone
treat blob/master or equivalent latest route as commit-pinned exact truth
replace a declared locator merely because a mirror/provider is more convenient
infer schema identity from path/filename
silently repair identifier/target mismatch
treat one provider failure as semantic schema absence
```

Mirrors, packages, connectors, caches, and network fetches are resolution providers. They may satisfy the declared locator while preserving exact representation/provenance truth.

Discovery/latest behavior remains explicitly outside this tranche.

## Validation Evidence

Source authority before mutation:

```text
controlling Handoff primary v2 self seal
→ PASS

controlling Task primary v2 self seal
→ PASS

Root primary v2 self seal before mutation
→ PASS
```

Post-mutation maintained schema integrity:

```text
maintained schema primary v2 self seals
→ 102 / 102 PASS

updated Root primary v2 self seal
→ ytxP-n3eCw5pq3_frFj_VtlnQ5SCelN9mm06fso16uk
```

## Consequences

### Files Changed

This tranche is intentionally bounded to:

```text
MODIFIED
.topics/.schemas/tiinex.root.v1.schema.md

ADDED
.topics/development/schema/handoff/003-1-stable-schema-reference-locator-publication-policy-result.trace.md
```

No Handoff schema, Digital Adapter schema, Site source, Tooling source, historical artifact, or broad schema-reference corpus normalization is performed here.

### Publication Disposition

```text
canonical schema-reference policy gap
→ CLOSED by bounded Root clarification

broad corpus normalization
→ DEFERRED / EXPLICIT GATE

mutable branch reference debt
→ PRESERVED / MUST NOT BE TREATED AS EXACT

Site resolver implementation
→ NOT DONE

portable Tooling implementation
→ NOT DONE

discovery/latest semantics
→ OUT OF SCOPE

Architect publication review
→ REQUIRED
```

## Immediate Next Questions

- Architect should decide whether the one known mutable-branch schema-reference locator is normalized before the immediate docs commit/push or carried as an explicit pre-Site/refactor normalization gate.
- A later normalization tranche should classify non-self relative links by actual publication/material boundary before rewriting any of them.
- Portable Tooling should implement identifier/locator/resolution-state separation from this Root authority rather than embedding GitHub-specific assumptions.
- If future latest/discovery semantics need a mutable locator intentionally, define that consumer behavior separately rather than weakening exact representation semantics.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: B2KoIPWA22zWviO05AyiIVatHrnK-WclzCyoUJvE010
