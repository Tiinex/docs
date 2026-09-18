# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 21:26:48
  - Trace: [012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md](handoffs/012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md)
  - Origin:
    - [relative](handoffs/012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-15 21:52:28
  - Authors: Axiom
  - Why: Resolve direct Role continuity from exact historical Parents whose schema identifier is qualified but exact historical schema revision is not.
  - Summary: Identifier-Only Historical Role Parent Cutover Semantic Disposition
  - Status: ready/local

---

# Identifier-Only Historical Role Parent Cutover Semantic Disposition

Direct artifact continuity and exact schema-revision identity are separate truths. An immutable historical Role Parent may remain the direct Parent of a new current Role when its exact artifact bytes, self-integrity, recovery route, and declared `Current Schema` identifier are qualified even though that historical `Current Schema` is identifier-only. The child must preserve that weaker historical truth as identifier-only provenance and must not upgrade it to the amended current Role schema revision by identifier equality.

## Decision

- State: accepted
- Subject: direct Role continuation from an exact historical Parent with identifier-only `Current Schema`
- Decision: permit direct current Role continuation from such a Parent when the exact Parent artifact and its declared schema identifier are qualified, render the child `Parent Schema` as the same plain schema identifier unless an exact historical schema target is independently qualified, keep the historical exact schema revision explicitly unresolved/audit-only, and validate the new child only against the exact current canonical Role schema.
- Governing Root Rule: schema semantic identity and schema representation location are separate truths; Plain Schema Id remains valid when no exact qualified locator exists for the governing representation, while exact locator authority for another field or another revision must not be substituted.
- Current Child Schema Authority: `docs::.topics/.schemas/party/role/tiinex.party.role.v1.schema.md`, SHA-256 `2887aef16cf827b78fe38c1a2ba97cb5820d79049729d2cf8696ecf1de828871`.

## Basis

- Root evaluates `Envelope Schema`, `Parent Schema`, and `Current Schema` independently. A plain schema id preserves schema-identifier truth only and does not identify one exact schema representation.
- Root explicitly preserves existing/historical bytes when later qualification discovers stronger schema-reference material; historical bytes are not rewritten to manufacture an authoring-time authority claim.
- A Parent edge identifies the exact parent artifact through Trace/Origin plus Continuity Integrity. Parent artifact identity therefore does not depend on proving that the Parent and child were governed by the same exact schema revision.
- The current Role hard-cutover Decision requires all newly authored/current operational Roles to carry direct canonical `Assignment Modes` under the amended current Role schema. That requirement applies to the new child candidate, not retroactively to immutable historical Parent bytes.
- Loom's qualified historical-parent audit mechanics already establish the correct validation separation: exact historical Parent Root/schema-reference/integrity checks remain active; current schema-specific Parent-body validation is withheld when exact same-revision authority is not qualified; the current candidate remains strictly validated against the current amended Role contract.
- Inferring the historical revision from today's runtime canonical schema merely because both use `tiinex.party.role.v1` would violate the accepted no-schema-revision-inference boundary and would turn current schema material into fabricated historical provenance.

## Exact Historical Parent Classification

### Anchor

- Parent Artifact: `business::.topics/roles/001-1-1-1-1-anchor-thin-lineage-orchestration-discipline-role.trace.md`
- Exact Artifact SHA-256: `a6696ac191fc5cbcbc642bb3fd6bbf13fa392d1762dc6029603501163b4131bc`
- Artifact Identity / Bytes: qualified exact carried historical material.
- Self Integrity: qualified by the artifact's c14n-v2 self-integrity.
- Declared Historical Schema Identifier: qualified as exactly `tiinex.party.role.v1` from the Parent's own `Current Schema` field.
- Declared Historical Schema Target: absent.
- Exact Historical Schema Revision / Source Representation: unresolved; no exact target may be inferred from the identifier, from the Parent's separate `Parent Schema` link, from current Docs material, repository location, creation time, filename, or Role label.
- Current Child Governing Schema: independently qualified exact amended `tiinex.party.role.v1`; it does not retroactively govern the historical Parent.

### Prism

- Parent Artifact: `business::.topics/roles/001-8-1-prism-role.trace.md`
- Exact Artifact SHA-256: `2c537057db40e70db642a4d3615285b56eb457eeca09d1f3c612bf23969f8dc9`
- Artifact Identity / Bytes: qualified exact carried historical material.
- Self Integrity: qualified by the artifact's c14n-v2 self-integrity.
- Declared Historical Schema Identifier: qualified as exactly `tiinex.party.role.v1` from the Parent's own `Current Schema` field.
- Declared Historical Schema Target: absent.
- Exact Historical Schema Revision / Source Representation: unresolved under the same generic rule; no Prism/Playthings naming exception exists.
- Current Child Governing Schema: independently qualified exact amended `tiinex.party.role.v1`; it does not retroactively govern the historical Parent.

The two cases are semantically identical for this decision. Their different Role content, labels, and prior lineage do not affect identifier-only schema-reference treatment.

## Direct Continuation Contract

A new canonical Role child may continue directly from an identifier-only historical Role Parent only when all of the following are qualified:

1. the exact Parent artifact bytes are supplied from qualified material rather than rediscovered by filename or adjacency;
2. the Parent's c14n-v2 self-integrity verifies against those exact bytes;
3. the Parent exposes a truthful recoverable Trace/Origin route for the declared Parent edge;
4. the Parent's own `Current Schema` declares a non-empty schema identifier;
5. that declared identifier is the semantic Parent Schema identifier the child will preserve;
6. no declared exact historical `Current Schema` target exists whose qualification is contradictory, stale, mismatched, or unresolved in a way that would be silently discarded;
7. the new child is authored and validated under independently qualified current schema authority for its own `Current Schema`.

When these conditions hold, absence of an exact historical schema target is degraded historical schema-revision knowledge, not a break in artifact continuity.

## Child Parent Schema And Provenance

For the Anchor and Prism migrations under the currently available evidence:

- the child `Parent Schema` must be emitted as plain `tiinex.party.role.v1`;
- the child must not link `Parent Schema` to the amended current Role schema merely because the identifier matches;
- the child `Trace` and `Origin` must continue to identify the exact active historical Parent artifact being continued;
- the child Continuity Integrity entry towards the Parent must bind the exact Parent bytes;
- the child's own `Current Schema` must use the exact qualified current canonical Role schema reference required by current authoring authority;
- current child validation must require direct canonical `Assignment Modes` exactly as required by the hard-cutover Decision;
- no field on the child may claim that the historical Parent was validated against, authored under, or semantically equal to the amended current schema revision.

The plain `Parent Schema` value is not a compatibility format. It is the canonical Root representation of the exact amount of schema-reference truth currently known for that historical Parent.

If an exact historical schema target is later independently recovered and qualified, it may strengthen historical audit/provenance prospectively. It does not authorize rewriting the historical Parent in place, does not change the Parent artifact identity, and does not retroactively prove claims that were not qualified at child-authoring time.

## Historical Audit Versus Current Validation

The historical Parent and current child must remain on separate validation surfaces:

- Historical Parent: Root readability, exact declared schema-identifier/reference-shape checks, truthful recovery, exact bytes, and self-integrity remain active.
- Historical Parent Exact Revision: `unresolved` when only the schema identifier is declared. Schema-specific body validation against the current amended Role revision must be withheld and surfaced as unavailable/degraded, not falsely passed or failed.
- Current Child: full current `tiinex.party.role.v1` validation remains blocking, including required direct canonical `Assignment Modes`.
- Legacy Mapping: migration/audit evidence only. It must not authorize the current child and must not be restored as a positive current-runtime path.

This preserves one current Role format and one current holder-assignment authority while retaining exact historical lineage.

## Fail-Closed Boundary

Direct continuation must remain blocked when any stronger contradiction or missing minimum evidence exists. In particular, Tooling must fail closed rather than downgrade or invent authority when:

- exact Parent bytes are unavailable or Parent self-integrity fails;
- the Parent has no declared `Current Schema` identifier;
- the child attempts to use a different Parent Schema identifier without separate transition/schema authority;
- the Parent declares an exact schema target but that declared target is contradictory, mismatched, or cannot be qualified and the authoring path would need to ignore it to continue;
- no truthful Parent recovery route exists;
- current child schema authority is unavailable;
- the current child fails the current Role contract, including missing/invalid `Assignment Modes`.

A missing historical exact target by itself is **not** one of those blocking conditions when the Parent truthfully declares only a schema identifier and the other minimum historical evidence above is qualified.

## Narrow Loom Implementation Contract

A Core change is required because the current common author path treats an identifier-only historical `Current Schema` as if exact historical schema-reference authority must be recovered before the Parent can be represented at all. For this bounded historical-parent case Loom should:

1. preserve the Parent's exact declared `Current Schema` form and distinguish `schema-id-qualified / exact-revision-unresolved` from exact-target-qualified authority;
2. when the exact Parent bytes and self-integrity qualify and the Parent declares only a plain schema id, create historical Parent reference authority for that **identifier only**; do not call current runtime canonical schema resolution to upgrade that historical field into an exact target;
3. allow the ordinary renderer to emit the child's `Parent Schema` as the plain schema id; existing renderer behavior already supports plain-id rendering when no qualified exact target is present;
4. keep exact same-revision matching false for identifier-only historical authority so current schema-specific Parent-body validation remains withheld/degraded;
5. keep the candidate `Current Schema` path unchanged and exact, so current Role candidates still validate strictly against direct canonical `Assignment Modes`;
6. preserve fail-closed handling for missing Parent schema id, failed Parent integrity, contradictory declared targets, invalid recovery, and invalid current candidate material;
7. expose the historical qualification state explicitly in diagnostics/receipts so an operator can distinguish `identifier-only historical authority qualified` from `exact historical schema revision qualified`;
8. add generic Anchor and Prism regressions proving the behavior is keyed to reference authority state, not Role label or filename;
9. add an adversarial regression proving that presence of today's exact canonical `tiinex.party.role.v1` material cannot cause an identifier-only historical Parent to be rendered as though it declared that current target.

The existing historical audit split may be reused. No new Role schema family, alternate current Role representation, prose parser, Role-name whitelist, Handoff endpoint, holder primitive, or permanent compatibility mapping is required.

## Consequences

- Anchor may migrate the active Anchor and Prism Roles by direct continuation from their latest active historical Role Parents rather than branching around them or rewriting history.
- Their new child Roles must carry direct canonical `Assignment Modes` and the exact current Role schema authority; the historical Parents do not.
- Parent provenance remains truthful: exact artifact identity and schema identifier are known, exact historical schema revision is not.
- Loom has one narrow authoring/reference-authority correction to make; the current-role validation and hard-cutover rules stay strict.
- `LEGACY_ROLE_MAPPINGS` remains governed by the existing hard-cutover gate and is not extended by this Decision.
- Successful Axiom return does not itself complete Business migration, establish the complete active Role set, or authorize legacy bridge removal.

## Review Conditions

Re-open this Decision only if qualified evidence shows that Root's existing Plain Schema Id semantics cannot represent an exact historical Parent without contradiction, if direct Role continuation requires a schema transition whose identifiers genuinely differ, or if an exact historical schema target is recovered that contradicts the identifier-only treatment. Implementation inconvenience or availability of today's schema bytes is not sufficient to infer historical schema-revision equality.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md](handoffs/012-anchor-to-axiom-identifier-only-historical-role-parent-cutover.trace.md)
  - Value: 4DM-FzdeIdnMJgd_c1d8kD7CBoA_C0o_btjQy9rhnmg

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: y7FLwp6GrKAPR7zUr2C0-dr5-h3q5KzFx_NLyU9xH6A