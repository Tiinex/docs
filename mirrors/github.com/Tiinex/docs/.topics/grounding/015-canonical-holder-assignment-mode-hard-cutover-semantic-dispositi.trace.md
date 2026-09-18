# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 19:36:20
  - Trace: [011-anchor-to-axiom-canonical-holder-assignment-mode-hard-cutover.trace.md](handoffs/011-anchor-to-axiom-canonical-holder-assignment-mode-hard-cutover.trace.md)
  - Origin:
    - [relative](handoffs/011-anchor-to-axiom-canonical-holder-assignment-mode-hard-cutover.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-15 19:55:34
  - Authors: Axiom
  - Why: The accepted legacy mapping was a bounded migration bridge; the operator requires replaced representations to be migrated and removed rather than preserved as dual current authority.
  - Summary: Hard-cut current Role holder assignment to direct canonical Assignment Modes and retire legacy current-runtime authorization after qualified migration.
  - Status: ready/local

---

# Canonical Holder Assignment Mode Hard Cutover Semantic Disposition

The temporary exact legacy Role mapping introduced by the accepted Canonical Holder Assignment Mode Semantic Disposition was a bounded migration bridge, not a second permanent holder-authority representation. Current operational `tiinex.party.role.v1` material must hard-cut to direct structured `Assignment Modes` authority before Core removes the bridge.

This Decision preserves the accepted separation between Role identity, binding assertion, assignment authorization, bounded binding result, and durable holder identity. It changes only which artifact representation may positively establish assignment-mode authorization after cutover.

## Decision

- State: accepted
- Subject: canonical-only Role holder-assignment representation and hard-cutover boundary
- Decision: amend the current `tiinex.party.role.v1` contract so `Holder Relationship -> Assignment Modes` is required for current Role authoring, use only its exact canonical token set as positive current machine authority after cutover, and retire Decision-side legacy Role mappings from current runtime authorization once Anchor has qualified the active Business Role migration and Loom has qualified canonical-only Core behavior.
- Schema Source: `.topics/.schemas/party/role/tiinex.party.role.v1.schema.md`
- Returned Schema Source SHA-256: `2887aef16cf827b78fe38c1a2ba97cb5820d79049729d2cf8696ecf1de828871`
- Returned Schema Self Integrity: `sha256-base64url-c14n-v2 = rA6BGI_Af8Ggy74sZGxtBXH9U9we0Q8f4GH19QsmT2U`

## Canonical Current Role Contract

`Holder Relationship` now has two different required claims:

- `Holder State` — human-readable bounded holder summary. It remains useful context but is not positive machine authority for assignment.
- `Assignment Modes` — canonical machine-readable assignment-mode authority.

The canonical token domain is exactly:

- `explicit-session`
- `explicit-user-session`
- `explicit-role-invocation`
- `handoff`
- `explicit-participation`

For current Role authoring, multiple modes are serialized as plain canonical tokens separated by `, ` and emitted in the canonical domain order above. Aliases, prose, code-span quoting, duplicate values, unknown tokens, lexical similarity, filename identity, Role label, package position, Handoff endpoint identity, and session self-assertion are not substitute mode authority.

A current operational Role intended to authorize holder assignment must contain at least one canonical mode. Missing or empty `Assignment Modes` cannot positively authorize a binding.

The modes remain intentionally narrow:

- `explicit-session` does not imply `explicit-role-invocation`;
- `explicit-user-session` is not widened to generic `explicit-session`;
- `explicit-participation` is not converted into session or invocation authority;
- `handoff` does not make a Handoff endpoint, package recipient, or transport delivery into a holder;
- none of the modes establishes durable holder identity, participation, process applicability, delegation, source mutation authority, acceptance, or responsibility outside the independently qualified Role/Handoff/Task boundary.

## Relationship To The Prior Holder Decision

The accepted Decision `013-canonical-holder-assignment-mode-semantic-disposition.trace.md` remains authoritative for:

- the semantic distinction between Holder State and structured Assignment Modes;
- the five canonical mode meanings;
- the separation between binding assertion, assignment authorization, bounded binding result, and durable identity;
- the exact legacy mappings as migration evidence for the exact historical/current pre-migration Role bytes they named.

The following parts of that Decision are superseded for **current runtime positive authorization after hard cutover**:

1. the rule allowing a current Role without structured `Assignment Modes` to obtain positive authorization from the exact legacy Decision mapping;
2. the Core `LEGACY_ROLE_MAPPINGS` table as an active positive authorization source;
3. legacy-positive tests whose purpose is to prove that unmigrated current Role bytes continue to authorize;
4. any compatibility path that treats the Decision mapping as an alternative active machine-authority representation beside direct Role `Assignment Modes`.

Those provisions remain valid only as bounded migration/audit evidence for their exact pinned bytes. They do not authorize a current operational binding after cutover.

## Historical Auditability

Historical immutable Role artifacts need not be rewritten merely because the current schema contract has advanced.

A historical Role remains auditable when its exact artifact bytes, declared schema/source provenance, and any exact historical semantic Decision needed to interpret those bytes are available and qualified. Historical interpretation may report what assignment modes the old artifact meant under its then-qualified authority.

Historical auditability does **not** require current grounding to positively authorize that deprecated representation. If historical Role bytes are presented as the current operational recipient Role after cutover and lack direct canonical `Assignment Modes`, holder-assignment authorization fails closed.

A historical artifact becomes current again only through an explicit current migration/revision that satisfies the current Role contract; history does not self-reactivate.

## Exact Migration And Hard-Cutover Gate

Directory membership, Role inventory, cached Role presence, filenames, or repository scanning cannot prove that all active Roles have migrated. Completeness authority remains with the controlling Business owner.

The hard cutover is eligible only when Anchor, under the controlling Business Canonical Holder Assignment Mode Normalization Task, provides one qualified migration disposition that:

1. explicitly declares the complete set of **active operational Business Role artifacts** in scope for current holder assignment at the cutover point;
2. identifies every member by exact qualified Role reference and post-migration source digest;
3. distinguishes any retained historical/non-operational Role material so it is not silently counted as current;
4. shows that every active member qualifies against the amended current Role contract and carries direct canonical `Assignment Modes`;
5. shows that every declared mode is in the canonical token domain and that `Holder State` remains non-authoritative for machine assignment;
6. contains no active member whose positive current assignment authorization still depends on the legacy Decision mapping;
7. explicitly declares the migration set complete for the controlling Business Task.

A repository scan may support the completeness review but cannot replace that controlling declaration.

The exact hard-cutover conjunction is therefore:

`qualified current Docs schema/Decision`
+
`qualified complete Anchor-owned active-Role migration disposition`
+
`every active Role directly canonical`
+
`qualified Loom canonical-only Core tests`
=
`legacy positive authorization may be removed`.

Until all terms are qualified, the migration bridge may remain temporarily available only to finish migration; its continued presence does not convert it into steady-state semantics.

## Fail-Closed Current Tooling Contract

After the hard cutover, when a qualified current operational Role is used for a holder-binding evaluation and direct `Holder Relationship -> Assignment Modes` authority is absent or empty, Tooling must not consult the legacy Role mapping.

The exact subordinate diagnostic is:

- Code: `holder-assignment-modes-required-after-cutover`
- State Effect: holder-assignment authorization remains `unresolved`; any act-ready state that depends on that Role-holder authorization remains blocked.
- Detail: current operational Role lacks required direct canonical `Holder Relationship -> Assignment Modes` authority under the hard-cutover contract; legacy Decision mappings and Holder State prose are not current positive authorization sources.
- Recovery: migrate/re-author the current Role with canonical Assignment Modes and re-qualify it, or explicitly treat the material as historical audit evidence rather than a current operational Role.

Existing separate diagnostics remain applicable:

- unknown structured token -> `holder-assignment-mode-authority-unknown-token`;
- asserted mechanism not in the qualified mode set -> binding authorization mismatch/not-authorized;
- recipient Role mismatch -> `session-holder-role-mismatch`;
- missing binding assertion -> holder binding remains unresolved even when Assignment Modes is valid.

The new code is specifically for the post-cutover absence of the required direct structured authority.

## Schema And Authoring Consequences

The returned Docs Workspace amends `tiinex.party.role.v1` so:

- `Assignment Modes` is a required `Holder Relationship` field;
- `Assignment Modes` is also required by the Artifact Creation Contract;
- the five canonical tokens and canonical serialized form are declared in the schema note;
- the minimal example carries `Assignment Modes`;
- creation rules forbid substituting Holder State prose or the legacy mapping for the structured field.

This means qualified authoring/validation support should expose and validate `Assignment Modes` as part of ordinary Role creation/revision. Master Anchor should be able to revise each active Business Role through the normal qualified Tooling authoring path using one Role artifact format; no parallel compatibility Role format is semantically warranted.

If current Tooling's Role creation contract or schema-material bundle does not yet surface the amended field, that is a Loom implementation/schema-packaging gap. It must be repaired rather than answered by keeping a second hand-authored or legacy-authorized Role representation.

## Anchor Acceptance Criteria

Anchor may accept the Business migration portion only when:

1. the returned Docs Decision and amended Role schema source are qualified/integrated as the governing current semantic contract;
2. the controlling Business Task owns an explicit complete active-Role migration set rather than inferring active Roles from directory presence;
3. every active Role in that set carries direct canonical `Assignment Modes` and preserves its existing Role/holder-class boundaries;
4. the migrated modes preserve the accepted pre-migration meaning for each Role; migration does not broaden a Role merely to normalize syntax;
5. historical/non-operational Roles are explicitly separated from the current migration set;
6. the migrated artifacts are qualified with exact post-migration digests;
7. no Business acceptance statement claims that Core cleanup has happened merely because the Roles are migrated.

For exact pre-migration Role bytes already covered by Decision 013, its mapping table is the migration translation authority. A changed Role must be semantically reviewed from its actual qualified content rather than inheriting a mapping by label.

## Loom Acceptance Criteria

Loom may remove the legacy bridge only after Anchor's qualified migration evidence is available. Core acceptance then requires:

1. positive current assignment-mode authority comes only from direct qualified Role `Assignment Modes`;
2. `LEGACY_ROLE_MAPPINGS`, legacy Decision digest coupling, prose whitelists, fuzzy/keyword parsing, and legacy-positive authorization tests are removed from the current authorization path;
3. the post-cutover missing-field case emits `holder-assignment-modes-required-after-cutover` and does not fall back;
4. known direct canonical modes still preserve the accepted binding semantics for Anchor/Axiom/Loom/Kodax and at least one non-session variant such as Sigma or Glimmer;
5. mode isolation, Handoff isolation, recipient-role matching, explicit session/invocation assertion, and durable-identity separation remain unchanged;
6. historical audit/display may still load pinned old artifacts, but that path cannot produce a positive current holder authorization merely from deprecated representation;
7. the bootstrap/canonical schema-material bundle used by qualified authoring and grounding reflects the amended Role schema contract, so newly authored current Roles cannot silently omit `Assignment Modes`.

## No New Primitive Beyond The Field

No new holder schema family, identity system, participant primitive, delegation primitive, readiness state, or Handoff endpoint is required.

The hard cutover is a representation-authority change inside the already accepted Role holder semantics:

- current positive authority -> direct structured Role `Assignment Modes`;
- historical/migration interpretation -> exact pinned old Role bytes plus exact historical semantic provenance;
- Holder State -> human-readable context only.

## Review Conditions

Re-open this Decision only if a real current Role requires a holder-assignment mechanism that cannot be represented by the five canonical modes plus existing Role/holder-class boundaries, or if qualified schema/authoring evidence shows that direct structured `Assignment Modes` cannot be carried without creating an actual semantic contradiction. Implementation inconvenience, repository layout, or the existence of historical unmigrated artifacts is not sufficient to restore dual current authority.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [011-anchor-to-axiom-canonical-holder-assignment-mode-hard-cutover.trace.md](handoffs/011-anchor-to-axiom-canonical-holder-assignment-mode-hard-cutover.trace.md)
  - Value: J-H5l2NqqGvW47pYBTo5d6hTpGfegHyfHoJZxWqVx_4

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 3zerpQVTxMCuPObuMS3DOEDCyKWxSs-Mslyhqds18R0