Jag hittade två konkreta saker att styra Copilot på:

Pointer-exemplet har fel/avvikande envelope i **Minimal Example**, inte i filens riktiga envelope. Det står `tiinex.continuation.v1` i exemplet, medan schemafilens faktiska envelope använder `tiinex.root.v1`.  

Root-schemat säger dessutom att valideringskrav ska ligga i `Schema Validation Contract`, och att validators inte ska inferera krav från prose utanför den ytan.  Det är därför pointer/evidence hardening bör flytta krav dit, inte bara justera examples.

Här är en ny smal task list att ge Copilot:

Vi gör ett smalt schema-quality pass i `Tiinex/docs`.

Fokus är inte bred repo-städning och inte `lineage-bridge` core. Fokus är att schemafilerna själva håller bättre kvalitet för tre läsnivåer:

1. human read
2. agent read
3. machine/validator read

## Scope

Repository:

* `Tiinex/docs`

Primary files:

* `.topics/.schemas/tiinex.pointer.v1.schema.md`
* `.topics/.schemas/tiinex.evidence.v1.schema.md`

Supporting files to inspect only as needed:

* `.topics/.schemas/tiinex.root.v1.schema.md`
* other `.topics/.schemas/*.schema.md` only for schema-link/permalink consistency

Decision carried into this task:

* Do not treat relative same-repo schema links as suspicious just because they are relative.
* Active schema targets may stay relative when they are the intended same-repo/local-resolution form.
* Commit-pinned `browse + git` links matter as recovery/provenance surfaces, not as a universal replacement for active schema fields.
* For maintained schema notes that depend on other schemas, audit whether there is a durable recovery surface when local links break, move, or drift.

Do not broad-traverse all `.trace.md` files. Do not create a new milestone. Do not modify `lineage-bridge` core unless a concrete blocker is proven first.

---

## Phase 1 — Direct schema/example correction

Fix the concrete pointer example issue:

File:

* `.topics/.schemas/tiinex.pointer.v1.schema.md`

Issue:

* In `## Minimal Example`, the example currently uses `Envelope Schema: tiinex.continuation.v1`.
* That appears stale/incorrect for the current schema model.

Expected fix:

* Use `tiinex.root.v1`.
* Prefer the current expected schema reference shape.
* Keep the example minimal and aligned with the real envelope model used by the schema file.

Also check the same Minimal Example for any other stale schema naming or old envelope conventions.

Do not change unrelated pointer semantics in this phase.

---

## Phase 2 — Schema reference and permalink audit

Audit schema-to-schema references in `.topics/.schemas/*.schema.md`.

Goal:

* find stale schema links
* find maintained schema notes that depend on other schemas but do not expose a durable commit-pinned `browse + git` recovery/permalink surface where recovery is expected
* find examples that teach old schema names or old envelope shapes

For each suspicious item, report:

* file path
* section
* exact current link/reference
* why it is suspicious
* proposed minimal fix

Important distinction:

* Relative links are still useful and often desirable for local same-repo resolution.
* Relative active schema targets are not suspicious just because they are relative.
* Commit-pinned `browse + git` links are important for durable recovery/provenance surfaces.
* Do not blindly replace all relative links with absolute permalinks.
* Preserve the contract distinction between local target, parent trace, origin candidate, and integrity target.

If a field shape cannot hold both relative and permalink forms, prefer the form already declared by the root contract for the active field and use `Origin`/recovery candidates where appropriate.

Audit only these permalink/recovery failure modes:

* stale schema names
* stale example forms
* commit-pinned recovery links that no longer resolve
* missing recovery/permalink surfaces where the schema note depends on another schema and durable recovery is expected

Do not mass-rewrite until the audit list is clear.

---

## Phase 3 — Pointer schema hardening

Review and harden `tiinex.pointer.v1.schema.md`.

Design rule:

A pointer must actually point somewhere.

The schema should make at least one target signal machine-detectable:

* `Parent -> Trace`
* `Current -> Origin`
* body `Destinations` list

Hardening goals:

* Put validation-relevant requirements inside `Schema Validation Contract`.
* Keep `Artifact Creation Contract` generation-only.
* Keep prose and interpretation notes explanatory, not validator-authoritative.
* Define the minimum target signal clearly.
* Define allowed destination entry shapes clearly.
* Preserve this distinction:

  * Parent = continuity lineage
  * Origin = provenance / grounding
  * Destination = navigation / next hop

Do not weaken the current Parent/Origin separation.

Add or adjust contract groups only as needed. Keep the schema readable.

---

## Phase 4 — Evidence schema hardening

Review and harden `tiinex.evidence.v1.schema.md`.

Design rule:

Evidence must tell a later reader and tool:

* what claim/question the material supports
* where the material came from
* what material is preserved
* what interpretation/fidelity limits apply

Hardening goals:

* Put validation-relevant requirements inside `Schema Validation Contract`.
* Make these body signals machine-detectable:

  * `Supported Claim`
  * `Provenance`
  * `Evidence Material`
  * `Interpretation Limits` or `Fidelity Notes`
* Define representation shapes clearly:

  * direct quote or excerpt
  * summarized evidence with explicit limits
  * screenshot or attachment description
  * curated evidence bundle
  * transcript extract
* Keep `Artifact Creation Contract` generation-only.
* Keep prose explanatory unless it is deliberately moved into the validation contract.

Do not overfit evidence to one example. The schema should support curated evidence while still being strict enough to validate.

---

## Phase 5 — Validation pass

After edits:

* verify pointer and evidence schema contracts still parse cleanly
* verify no obvious stale schema names remain in pointer/evidence examples
* verify schema references/permalinks changed by this task resolve or are intentionally relative
* run any available docs/schema checks if they exist
* if practical, run `lineage-bridge` schema-contract dogfood against pointer/evidence schema files

If a validation step cannot be run, state that clearly.

---

## DoD

* [ ] Pointer Minimal Example no longer references `tiinex.continuation.v1`.
* [ ] Schema reference/permalink audit is summarized before broad rewrites.
* [ ] Any changed schema permalink is intentional and still resolves.
* [ ] Relative same-repo schema targets are not treated as errors by default.
* [ ] Maintained schema notes that depend on other schemas have an intentional recovery/permalink surface where this task concludes they need one.
* [ ] Pointer schema has explicit machine-readable target-signal requirements.
* [ ] Evidence schema has explicit machine-readable evidence-signal requirements.
* [ ] Validation-relevant requirements live inside `Schema Validation Contract`.
* [ ] Generation-only guidance remains inside `Artifact Creation Contract`.
* [ ] Parent, Origin, Destination, Evidence, Provenance, and Fidelity semantics remain distinct.
* [ ] Validation/dogfood result is reported.
* [ ] Remaining uncertainty is listed explicitly.

## Hard stops

* Do not open a broad M3 plan.
* Do not rewrite unrelated trace files.
* Do not change `lineage-bridge` core unless a concrete blocker is proven.
* Do not treat prose outside `Schema Validation Contract` as validation authority.
* Do not mass-convert relative same-repo schema references to permalinks.
* Do not claim all schemas are clean unless the audit proves it.

Jag skulle börja exakt där. Det fångar tabben i pointer-exemplet, permalink-friktionen och den större designregeln utan att låta Copilot dra iväg i en allmän schema-renovering.
