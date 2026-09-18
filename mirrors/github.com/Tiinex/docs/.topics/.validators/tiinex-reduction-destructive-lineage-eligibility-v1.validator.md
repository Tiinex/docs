# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/13991b5a13ab911ed9abd63646f92c8a9362ea01/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.validation.method.v1](https://github.com/Tiinex/docs/blob/13991b5a13ab911ed9abd63646f92c8a9362ea01/.topics/.schemas/validation/method/tiinex.validation.method.v1.schema.md)
  - Created At: 2026-06-26 00:00:00
  - Trace: [tiinex.validation.method.v1.schema.md](../.schemas/validation/method/tiinex.validation.method.v1.schema.md)
  - Origin:
    - [relative](../.schemas/validation/method/tiinex.validation.method.v1.schema.md)
- Current
  - Current Schema: [tiinex.validation.method.v1](https://github.com/Tiinex/docs/blob/13991b5a13ab911ed9abd63646f92c8a9362ea01/.topics/.schemas/validation/method/tiinex.validation.method.v1.schema.md)
  - Created At: 2026-09-06 02:17:30
  - Summary: Maintained Reduction-owned validation method for exact fail-closed destructive-lineage eligibility against intact material.

---

# Tiinex Reduction Destructive-Lineage Eligibility Method V1

- Status: maintained canonical validator definition
- Canonical Identifier: tiinex-reduction-destructive-lineage-eligibility-v1
- Owned By: [tiinex.reduction.v1](../.schemas/reduction/tiinex.reduction.v1.schema.md)
- Qualification Surface: adjacent conditional validation/profile contract; not ordinary Reduction artifact qualification

## Method Identity

- Name: Tiinex Reduction destructive-lineage eligibility
- Version: 1
- Method Family: semantic qualification / destructive-lineage eligibility
- Canonical Identifier: tiinex-reduction-destructive-lineage-eligibility-v1
- Owner: [tiinex.reduction.v1](../.schemas/reduction/tiinex.reduction.v1.schema.md)
- Ordinary Qualification Relationship: external and conditional; a qualified Reduction remains valid ordinary Reduction evidence without this method.

## Verification Scope

- Verifies: whether one exact proposed destructive candidate set, evaluated while all proof-relevant material is still intact, satisfies the Reduction-owned pre-delete destructive-lineage eligibility contract for the exact bound inputs.
- Does Not Verify: permission or authorization to delete, source mutation safety beyond the exact bound inputs, actual post-apply state, Task completion, authoritative re-test PASS, closure, release readiness, ordinary Reduction validity beyond the separately supplied qualified Reduction basis, or generic lifecycle/Parent/dependency semantics.
- Target Types: a qualified `tiinex.reduction.v1` artifact plus the intact qualified material, exact candidate destructive set, exact snapshot/currentness/recovery evidence, and exact method identity needed to evaluate disappearance safely.
- Required Inputs: exact Reduction bytes and identity; exact proof-relevant repository/workspace snapshots; exact candidate destructive set including action and preimage identity; qualified currentness/operative-state evidence; intact semantic/classification material; immutable source and Parent-closure material; hierarchical Reduction composition/recovery identity where relevant; and this exact maintained contract identity.
- Output Signal: `eligible`, `blocked`, or `unresolved` plus deterministic bound-input fingerprint, basis, findings, blockers, missing evidence, ambiguities, per-leaf closure/recovery proof, and explicit no-authorization/no-mutation boundaries.

### Exact Bound Inputs

One qualification binds all of these as a single input set:

- the exact qualifying Reduction artifact identity and digest of its exact bytes;
- the exact snapshot descriptor for every repository/workspace whose material participates in semantic classification, Parent traversal, currentness/operative-state proof, composition recovery, or immutable recovery;
- the exact candidate destructive set, with every candidate identified by repository/workspace, normalized path/artifact identity, intended destructive action, and expected pre-delete identity/digest where available;
- the exact qualified currentness/operative-state evidence basis used to decide whether disappearing obligations are still operative;
- the exact immutable source/Parent proof material used by the qualification;
- the exact hierarchical composition/recovery fingerprint when nested Reduction material participates; and
- this exact maintained validation contract identity/version.

For Git-backed material, immutable repository identity plus commit is the minimum immutable source anchor. If the qualified pre-delete state includes local or otherwise uncommitted material, the snapshot descriptor must also bind a deterministic exact content/manifest digest covering the proof-relevant state. Branch names, `HEAD` labels, timestamps, and working-directory placement are not exact snapshot identities.

The result must expose a deterministic fingerprint of the complete bound input set. Any change to Reduction bytes, snapshot identity/content, candidate membership/action/preimage, currentness evidence, immutable proof material, composition identity, or this contract invalidates the prior result and requires fresh qualification.

### Disappearing Semantic Coverage

- The disappearing semantic set must be derived from intact qualified material plus the exact candidate destructive set. Reduction prose, a summary, or a hand-authored disappearance list cannot self-authorize coverage.
- Transport/package/cache material and declared fixtures participate in classification but are not silently treated as ordinary semantic leaves. Ambiguous semantic/transport/fixture classification yields `unresolved`.
- Every disappearing semantic expansion entrypoint must have exactly one inspectable leaf disposition, while shared closure material may be deduplicated in the projected proof.
- The union of all qualified leaf-to-boundary spans must cover every semantic artifact that will disappear. Uncovered disappearing semantic material is `blocked`.
- A candidate declared disappearing while actually retained unchanged is a candidate/coverage mismatch and invalidates qualification.
- Surviving current semantic material must not retain a required unresolved Parent/currentness dependency on disappearing material unless the same obligation/continuity is truthfully reissued under qualified surviving material.

### Immutable Leaf And Parent Closure

For every disappearing semantic leaf, `eligible` requires:

- an exact immutable source locator containing repository identity, immutable commit/snapshot identity, and repository-relative path;
- exact source bytes or digest verified against that immutable locator;
- an explicit leaf disposition/reason;
- a separately identified historical Parent-closure endpoint;
- complete declared `Parent` traversal through every disappearing intermediate artifact to that endpoint, with every hop resolved from immutable qualified material rather than filename/path adjacency;
- proof that the endpoint is the nearest truthful surviving semantic boundary on declared continuity unless qualified surviving material explicitly reissues the same boundary with qualified continuity/provenance; and
- proof that the endpoint survives the exact candidate change or is represented by that qualified surviving reissue.

Relative Parent targets resolve only inside their already-qualified repository/ref context. Explicit cross-repository/workspace Parent edges continue across that boundary using exact immutable repository/ref/path material. Missing, ambiguous, multiply resolved, integrity-invalid, mutable-only, or non-deterministically fetched Parent material yields `unresolved`.

A leaf permalink, span count, same-repository ancestor, supersession target, Relation edge, or convenient current placement may support proof only when its own semantics apply; none substitutes for declared Parent closure.

The Reduction artifact's ordinary placement Parent and a disappearing leaf's historical Parent-closure endpoint are distinct. They may coincide when truthful, but this method must preserve both identities when they differ and must not block solely because they differ.

### Currentness And Operative-State Evidence

This method consumes qualified currentness/operative-state evidence; it does not define lifecycle semantics itself.

- Qualified normalized currentness/operative-state evidence for the exact obligation/scope may be used when its own authority and representative selection qualify.
- Lexical `lifecycleStatus`, `currentStatus`, Root `Status`, filenames, timestamps, branch state, or cleanup observations are observations only unless another active qualified contract gives them exact narrower meaning.
- Qualified evidence that the exact obligation is still open/operative blocks disappearance unless that obligation is explicitly retained/reissued under qualified surviving material.
- Qualified evidence that the exact obligation/scope is closed may clear that obligation subject to every other rule in this method; it does not make unrelated material eligible.
- Missing, unresolved, ambiguous, or unqualified currentness/authority evidence yields `unresolved`.
- Historical nonterminal state does not block forever when qualified current evidence explicitly resolves it, and physical absence or a later Reduction does not prove resolution by itself.
- Fixture-required material remains `blocked` until its fixture dependency is explicitly replaced or retired by qualified evidence.

### Result Semantics

- `eligible`: every required positive rule is satisfied against the exact bound inputs, with no blocker, missing evidence, ambiguity, or unqualified proof.
- `blocked`: one or more positively qualified rule violations make the exact candidate set ineligible.
- `unresolved`: required proof is missing, ambiguous, multiply resolved, stale, integrity-invalid, or otherwise unqualified.
- Any state other than exact `eligible` forbids destructive apply.
- `eligible` is necessary exact qualification evidence only. It never grants permission, approval, authorization, or a mutation capability.

## Trust Boundary

- Trust Boundary: exact snapshot/candidate/Reduction binding; qualified semantic classification; qualified currentness evidence; immutable source identity; declared Parent traversal; hierarchical composition/recovery qualification; deterministic fingerprinting; and the implementation that applies this method without widening the contract.
- Required Context: current `tiinex.reduction.v1` semantics, Root/Parent continuity rules, the exact qualified Reduction and candidate set, intact proof-relevant material, exact snapshot descriptors, qualified currentness/operative-state evidence, immutable source/Parent closure evidence, and this exact method definition.
- Machine Verifiable: yes when every required semantic input is itself qualified and exact; otherwise the result must remain `unresolved`.
- Human Verifiable: partial; a reader can inspect inputs, leaf dispositions, Parent spans, findings, and receipt identity, but exact byte/snapshot/fingerprint and graph checks should be machine-replayed.
- Replayable: yes when the complete bound input set remains available unchanged.
- Destructive Apply Authority: none.
- Source Mutation: false for qualification itself.
- Remote Write: false for qualification itself.

### Recovery And Expansion Boundary

Hierarchical recovery/expansion follows explicit immediate-source identities, not reverse filename discovery or repository placement.

For each Reduction hop, qualification should preserve or expose source identity/qualification, carry-forward state, local loss/uncertainty, inherited unresolved loss/uncertainty relevant to the requested expansion, and immutable recovery locator/basis when available. Full expansion is qualified only when every required source/hop resolves deterministically to qualified immutable material. Missing/ambiguous source material is `unresolved`; known irrecoverable material is reported as known loss rather than fabricated.

Cross-repository expansion and Parent closure are first-class. A destructive eligibility receipt must retain enough immutable source, composition, and closure identity to re-run expansion/recovery after current material is reduced.

Post-apply re-audit, if separately authorized by another authority surface, is a distinct later boundary. It must compare actual disappearance against the exact qualified candidate set and cannot retroactively repair a missing or invalid pre-delete qualification.

## Failure Modes

- Failure Modes: changed Reduction bytes; stale or changed bound snapshots; candidate membership/action/preimage drift; incomplete candidate identity; semantic/transport/fixture ambiguity; candidate/coverage mismatch; uncovered disappearing semantic material; missing immutable leaf source; missing/ambiguous/integrity-invalid Parent hop; non-deterministic cross-repository resolution; historical closure endpoint not surviving and not truthfully reissued; placement Parent incorrectly forced to equal historical closure endpoint; operative obligation not retained/reissued; currentness/authority unresolved; fixture dependency still required; hierarchical source ambiguity; known loss misrepresented as recoverable; composition fingerprint mismatch; exact contract identity mismatch; stale receipt reuse; or implementation/presentation logic that reinterprets this method.
- Ambiguity Risks: a structurally complete-looking receipt may still be `unresolved` if source classification, currentness authority, immutable recovery, or Parent closure is ambiguous.
- Misuse Risks: treating `eligible` as authorization; treating a valid ordinary Reduction as destructive eligibility; treating branch state, timestamps, lexical status, physical absence, placement, Relation edges, or repository-local convenience as substitute authority.
- Known Weaknesses: the method is only as strong as the exactness and qualification of its supplied semantic/snapshot/currentness/source material. It does not create external repository immutability, consent, authorization, or mutation controls.

Rules

- Positive qualified rule violations project as `blocked`.
- Missing, ambiguous, stale, multiply resolved, or unqualified required proof projects as `unresolved`.
- Presentation adapters may format or filter results but may not reinterpret these state semantics.
- A prior receipt is reusable only when the complete bound-input fingerprint is exactly identical and the receipt remains otherwise qualified.

## Recommended Use

- Recommended Use: fail-closed pre-delete qualification, while source material is still intact, for a specific proposed destructive candidate set whose semantic disappearance is expected to be justified by a qualified Reduction and recoverable immutable lineage.
- Not Recommended For: ordinary Reduction qualification; broad cleanup heuristics; repository pruning by path/age; lifecycle inference from lexical tokens; proving Task completion or closure; release readiness; permission/approval workflows; destructive apply implementation; or post-hoc justification after material has already disappeared.
- Example UI Labels: destructive lineage eligible (qualification only), destructive lineage blocked, destructive lineage unresolved, receipt stale / requalification required.

## Machine Verifiability

- Validation Input: the complete exact bound-input set defined above.
- Validation Output: state, deterministic input/receipt fingerprint, exact bound-input projection, per-leaf coverage/closure/recovery proof, findings, blockers, missing evidence, ambiguities, and explicit authority/mutation boundaries.
- Expected Comparison: receipt reuse requires exact fingerprint identity across Reduction bytes, candidate set, snapshots, currentness basis, immutable proof material, composition identity, and contract identity.
- Success Meaning: the exact candidate set is semantically eligible under this method's fail-closed pre-delete contract only.
- Failure Meaning: `blocked` or `unresolved`; destructive apply is forbidden by this qualification surface.

## Human Verifiability

- Human Review: inspect the exact candidate set, snapshots, currentness basis, disappearing semantic coverage, every leaf disposition, immutable source locator, historical Parent span, placement-parent distinction, recovery state, blockers/ambiguities, and no-authorization boundary.
- Human-Readable Claim: exact destructive-lineage eligibility qualification against intact material.
- Human-Readable Limitation: not deletion permission, not mutation authority, not Task completion/closure/release readiness, and not proof of external currentness beyond the exact bound snapshots/evidence.

## Examples

- Ordinary Reduction with no destructive candidate set: this method is not requested and ordinary Reduction qualification remains independent.
- Candidate set with complete exact local Parent closure and closed/non-operative obligations: may qualify `eligible` if every other exact rule passes.
- Changed Reduction bytes, candidate action/preimage, or bound snapshot after an earlier receipt: old receipt is stale and fresh qualification is required.
- Missing cross-repository immutable Parent hop or ambiguous semantic/fixture classification: `unresolved`.
- Uncovered disappearing semantic artifact or still-operative unreissued obligation: `blocked`.
- Qualified current placement Parent distinct from the historical closure endpoint: allowed when both identities and the truthful continuity/reissue basis are preserved.

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.validation.method.v1.schema.md](../.schemas/validation/method/tiinex.validation.method.v1.schema.md)
  - Value: zy2VZGF-AMEVjvaFuggR3INb9RHm9veCZDXd1XQKtZY

- sha256-base64url-c14n-v2
  - Towards: self
  - Value: Tw8SKnUnQNIc_knCus_1WfIcPWd_T6xuefeJnYV83vU