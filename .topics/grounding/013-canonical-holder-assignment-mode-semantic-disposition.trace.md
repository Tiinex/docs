# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-15 17:24:51
  - Trace: [010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md](handoffs/010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md)
  - Origin:
    - [relative](handoffs/010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-15 17:49:34
  - Authors: Axiom
  - Why: Resolve the production holder-authorization defect without whole-sentence whitelisting, heuristic prose parsing, durable-holder invention or historical Role rewrites.
  - Summary: Define structured canonical Role holder-assignment modes, exact legacy mappings for current Roles, fail-closed normalization boundaries, and Loom acceptance criteria without prose parsing.
  - Status: ready/local

---

# Canonical Holder Assignment Mode Semantic Disposition

Current `tiinex.party.role.v1` semantics are sufficient to express holder relationships truthfully for humans, but the current `Holder State` primitive is not sufficient for deterministic machine comparison of semantically equivalent assignment modes without either whole-sentence whitelisting or heuristic natural-language parsing. The smallest missing semantic primitive is a structured, multi-valued **Assignment Modes** declaration inside `Holder Relationship`; no new schema family, holder identity system, participant model, delegation model, or readiness lifecycle is required.

This Decision also supplies an exact legacy normalization for the current qualified Business Role artifacts requested by the controlling Task so they do not need to be rewritten merely to satisfy Tooling.

## Decision

- State: accepted
- Subject: canonical Role holder-assignment modes and deterministic normalization of qualified legacy `Holder State` declarations
- Decision: preserve `Holder State` as the human-readable bounded summary, add/recognize a separate structured `Assignment Modes` semantic dimension under `Holder Relationship`, keep durable holder identity separate, and authorize positive machine projection only from exact structured modes or another exact qualified semantic mapping such as this Decision. Do not derive assignment modes by fuzzy/token/substring interpretation of arbitrary prose.

### Claims encoded by current Holder Relationship material

The current Role shape carries several distinct claims that must not be collapsed:

1. **Role identity/capacity** — the Role artifact defines the capacity; it does not prove that a particular person, model, runtime, chat, session or process currently holds it.
2. **Assignment-mode authorization** — `Holder State` may say by what kinds of explicit bounded assignment the Role may be instantiated, such as session, Role invocation, Handoff or explicit participation.
3. **Current binding assertion** — a concrete session/invocation/Handoff/participant assertion is a separate fact. An assertion does not authorize itself.
4. **Binding authorization result** — the assertion is usable only when exact qualified Role/Relation/Decision/holder authority permits that assignment mode and the assertion matches the intended Role/capacity.
5. **Durable holder identity** — a bounded current binding does not establish a permanent holder. `Current Holder`, exact Party/Relation/Decision authority, or other qualified holder evidence is required when durable identity matters.
6. **Possible/allowed holder class** — `Possible Holder` and Role boundaries may constrain who/what may exercise the Role. Assignment modes do not erase those constraints.

The phrase `no permanent holder asserted` is therefore not an assignment mode. It is a separate durable-holder claim and must remain separate from the allowed assignment-mode set.

## Narrow Missing Primitive

`tiinex.party.role.v1` already owns the correct semantic location: `Holder Relationship`. No new schema is warranted. The narrow missing structured primitive is:

- `Assignment Modes`
  - Cardinality: zero or more canonical tokens; absence is permitted for backward-compatible human-readable Roles but does not itself establish machine-comparable assignment authorization.
  - Authority: the exact qualified Role artifact, or an exact qualified semantic mapping that explicitly owns the legacy normalization.
  - Boundary: this field authorizes assignment mechanisms only. It does not assert a current holder, bind the consuming session, establish durable Party identity, create participation, delegate work, authorize source mutation, or prove Handoff acceptance.

Canonical tokens required by the current Role set are:

- `explicit-session` — permits bounded assignment to an explicitly declared consuming session operating in this Role capacity. It does not permit inference from chat position, provider identity, transport recipient, endpoint label or process execution.
- `explicit-user-session` — permits bounded assignment through an explicit user-session context as declared by the Role. It is intentionally narrower than generic `explicit-session`; tools must not silently widen it.
- `explicit-role-invocation` — permits one explicit bounded invocation of the Role capacity. `invocation` and `role invocation` in the exact qualified legacy mappings below denote this same semantic mode; generic execution/runtime activity does not.
- `handoff` — permits a bounded Role assignment to be established through exact qualified Handoff-bounded assignment authority. A Role-only `To` endpoint, package delivery, or transport recipient does not itself establish who holds the Role; the concrete Handoff/companion holder evidence must still establish the bounded assignment being claimed.
- `explicit-participation` — permits bounded assignment through explicit participation subject to the Role's own holder-class and boundary constraints. It does not imply session or invocation authorization.

These tokens are semantic values, not keywords to be extracted from prose. A future Role may require another precise mode; until semantic authority defines it, it remains unresolved rather than being guessed into one of the modes above.

### Structured field adoption rule

A future or revised Role that expects deterministic Tooling authorization should carry `Assignment Modes` explicitly. Historical Role artifacts remain valid without the field. For a Role lacking it, positive machine authorization is allowed only when an exact qualified Decision/Relation/other semantic owner supplies the normalized mode set for that exact Role artifact. Otherwise the assignment-mode dimension is unresolved even when the prose looks familiar.

This is a semantic schema-level addition within `tiinex.party.role.v1`, not a Core-local parsing convention. A later schema edit may add the optional field to the `Holder Relationship` contract; this Decision is the controlling semantic specification for that narrow amendment.

## Exact Legacy Normalization For Current Qualified Roles

The following mappings are accepted for the exact current qualified Business Role artifacts inspected under this Handoff. They are semantic mappings owned by this Decision; they are not instructions for Core to pattern-match the quoted sentences.

| Role | Exact Role artifact | Current Holder State meaning | Canonical Assignment Modes |
| --- | --- | --- | --- |
| Anchor | `business::.topics/roles/001-1-anchor-role.trace.md` | bounded explicit session or Handoff; no permanent holder asserted | `explicit-session`, `handoff` |
| Axiom | `business::.topics/roles/001-2-axiom-role.trace.md` | bounded explicit session or Handoff; no permanent holder asserted | `explicit-session`, `handoff` |
| Loom | `business::.topics/roles/001-3-loom-role.trace.md` | bounded explicit session, Role invocation or Handoff; no permanent holder asserted | `explicit-session`, `explicit-role-invocation`, `handoff` |
| Kodax | `business::.topics/roles/001-6-kodax-role.trace.md` | bounded explicit session, invocation or Handoff; no permanent holder asserted | `explicit-session`, `explicit-role-invocation`, `handoff` |
| Pilot | `business::.topics/roles/001-7-pilot-role.trace.md` | bounded explicit session, invocation or Handoff; no permanent holder asserted | `explicit-session`, `explicit-role-invocation`, `handoff` |
| Prism | `business::.topics/roles/001-9-prism-role.trace.md` | bounded explicit session, invocation or Handoff; no permanent holder asserted | `explicit-session`, `explicit-role-invocation`, `handoff` |
| Playthings (historical) | `business::.topics/roles/001-8-playthings-role.trace.md` | bounded explicit session, invocation or Handoff; no permanent holder asserted | `explicit-session`, `explicit-role-invocation`, `handoff` |
| Glimmer | `business::.topics/roles/001-5-glimmer-role.trace.md` | bounded explicit user session or Handoff; no permanent holder asserted | `explicit-user-session`, `handoff` |
| Sigma | `business::.topics/roles/001-4-sigma-role.trace.md` | human capacity assignable through explicit participation; no permanent holder relation asserted | `explicit-participation` |

The Anchor derived Role artifacts inspected in the current Role directory use the same Holder State semantics as the canonical Anchor Role and therefore do not create a new assignment mode. Their own exact Role boundaries remain controlling for scope.

### Equivalence and non-equivalence rules

- Loom `role invocation`, Kodax/Pilot/Prism/Playthings `invocation`, and the canonical token `explicit-role-invocation` are equivalent **for these exact qualified legacy artifacts** because the Role context and Possible Holder/Role boundaries make the bounded Role invocation meaning explicit. This equivalence must not be generalized by text parsing.
- Anchor and Axiom are equivalent for `explicit-session` authorization even though they lack an invocation mode.
- Kodax is not semantically weaker than Loom for current-session binding merely because its prose says `invocation` instead of `role invocation`; both explicitly authorize `explicit-session` and both normalize invocation to the same separate mode.
- `explicit-session` does not imply `explicit-role-invocation`, and `explicit-role-invocation` does not imply `explicit-session`.
- `explicit-user-session` is not silently widened to `explicit-session`.
- `explicit-participation` is not silently converted into session or invocation authorization.
- `handoff` does not mean that a Handoff endpoint alone binds a holder or that delivery/acceptance occurred.

## Binding Evaluation Contract

For a bounded consuming-session or invocation binding, evaluate in this order:

1. Resolve the exact qualified recipient Role/capacity.
2. Obtain the normalized assignment-mode set from an explicit structured Role field or an exact qualified semantic mapping such as this Decision.
3. Observe an explicit binding assertion and classify its mechanism (`explicit-session`, `explicit-user-session`, `explicit-role-invocation`, `handoff`, `explicit-participation`, or another separately qualified mode).
4. Require the assertion mechanism to be authorized by the normalized mode set and to satisfy the Role's holder-class/boundary constraints.
5. Require Role/recipient compatibility and any separately required controlling-work/Handoff authority.
6. Produce only a bounded binding result. Keep durable holder identity unresolved unless separate exact authority establishes it.

A matching Role label or `--holder-role`/session declaration proves only the assertion. It does not provide step 2. A Handoff endpoint proves intended Role/capacity targeting, not step 4 by itself.

## Fail-Closed Rules

Positive assignment authorization must remain unresolved/blocked when any of the following holds:

- `Assignment Modes` is absent and no exact qualified legacy/semantic mapping owns the Role's mode set;
- the Role artifact or semantic mapping is unqualified, missing, stale or contradictory;
- the asserted mechanism is not in the authorized mode set;
- an unknown mode/token appears and no semantic authority defines it;
- holder-class or Role boundary constraints conflict with the asserted session/invocation/participant;
- recipient Role and asserted Role do not match;
- Handoff, package, project, chat, provider/runtime identity or filename is being used as substitute assignment authority;
- durable Party identity is required but only a bounded Role binding is established.

Unknown prose must never be treated as a near match. Tooling may quote it diagnostically, but it must not authorize from lexical similarity, substring tests, punctuation normalization, token occurrence, embeddings or LLM interpretation.

## Loom Implementation Acceptance Contract

Loom may choose implementation field/code names, but acceptance requires all of the following behavior:

1. **No whole-sentence whitelist as semantic authority.** Core must not decide authorization by comparing raw `Holder State` sentences to a list of accepted strings.
2. **No heuristic prose parser.** Core must not infer positive modes from words such as `session`, `invocation`, `role`, `Handoff`, `participation`, punctuation variants or approximate natural-language similarity.
3. **Structured normalized input.** Core's holder-authorization gate consumes a normalized mode set with exact provenance to either an explicit structured Role declaration or an exact qualified semantic mapping/Decision.
4. **Separate surfaces.** Recipient Role, binding assertion, normalized assignment authorization, bounded binding result and durable holder identity remain separate projected claims, preserving the accepted Holder Binding Authorization Gate semantics.
5. **Kodax parity.** An explicit matching Kodax current-session assertion must authorize on the same basis as matching Anchor/Axiom/Loom current-session assertions because all four current artifacts authorize `explicit-session`; Kodax's different invocation wording must not block session authorization.
6. **Invocation parity.** Loom `role invocation` and Kodax/Pilot/Prism/Playthings `invocation` current artifacts project the same `explicit-role-invocation` mode through this exact Decision mapping, without Core text parsing.
7. **Mode isolation.** A Role with only `explicit-session` must not automatically authorize an invocation assertion; a Role with only `explicit-participation` must not automatically authorize a session assertion; `explicit-user-session` must retain its narrower constraint.
8. **Handoff isolation.** `handoff` mode must not cause a Role-only Handoff endpoint, package recipient or transport delivery to be treated as holder binding. Exact Handoff-bounded assignment evidence remains required.
9. **Legacy exactness.** The current Role artifacts listed in this Decision may be normalized without rewriting them. If any listed artifact materially changes or a different artifact is supplied, the legacy mapping does not silently transfer by label/path/prose resemblance; qualification/currentness must re-establish the mapping or the Role must carry structured modes.
10. **Fail-visible diagnostics.** Missing/unmapped mode authority, assertion-mode mismatch, unknown mode material and durable-identity gaps remain distinguishable. Existing `session-holder-binding-authorization-not-established` and `session-holder-role-mismatch` semantics remain valid; more specific subordinate diagnostics may be added without changing the lifecycle contract.
11. **No authority expansion.** Mode normalization does not establish participation, process applicability, delegation, implementation-source authority, acceptance, remote-write authority or permanent holder identity.

### Minimum acceptance cases

- Anchor + matching explicit session assertion -> bounded session authorization can qualify from `explicit-session`; durable identity remains unresolved unless separately proven.
- Axiom + matching explicit session assertion -> same result as Anchor.
- Loom + matching explicit session assertion -> same session result; its additional invocation mode does not change session semantics.
- Kodax + matching explicit session assertion -> same session result as Loom/Anchor/Axiom; no prose-mismatch blocker.
- Pilot + matching explicit Role-invocation assertion -> invocation authorization can qualify from `explicit-role-invocation`.
- Loom/Kodax/Pilot current invocation variants -> same normalized invocation mode.
- Sigma + generic explicit session assertion -> unresolved/not authorized from this Role because its current mapping is `explicit-participation`, not `explicit-session`.
- Glimmer + generic session assertion that does not establish the narrower user-session condition -> unresolved rather than widened.
- any unknown Holder State with no structured modes or exact qualified mapping -> unresolved, even if it contains familiar words.
- any matching `--holder-role` assertion where the Role mode set is unresolved -> `grounded-to-act` must remain blocked for Role-holder authorization rather than treating the assertion as self-authorizing.

## Relationship To Accepted Holder Binding Authorization Gate

This Decision refines only the **binding authorization** input of the accepted Holder Binding And Implementation Source Authority disposition. It does not change the prior separation between:

- selected recipient Role/capacity;
- current-session/invocation assertion;
- semantic authorization for the asserted assignment mode;
- bounded binding result; and
- durable holder identity.

The prior rule remains controlling: explicit session input is assertion-only; exact qualified Role/assignment authority authorizes the bounded mode; durable Party identity is separate. This Decision merely makes the assignment-mode authority deterministic without prose guessing.

## Consequences

- No new schema family or readiness state is introduced.
- `tiinex.party.role.v1` should gain only the narrow optional structured `Assignment Modes` field under `Holder Relationship` when the schema is next amended for this semantic result.
- Existing historical Role prose remains authoritative human-readable context and does not need to be rewritten solely for Tooling.
- The exact legacy mappings in this Decision let Loom close the current production blocker without embedding a prose whitelist or fuzzy parser.
- Future/changed Roles can obtain deterministic machine authorization directly from structured modes; absent structured or exact mapped authority, they fail closed.
- Anchor retains Business integration and acceptance; Loom retains Core implementation and qualification; Axiom retains only semantic contradiction review if a later implementation/validation case cannot be represented by this contract.

## Review Conditions

Review this Decision only if a real Role requires an assignment mechanism that cannot be represented by the structured mode-set model plus existing holder-class/boundary semantics, if Handoff-bounded assignment semantics require a new independently owned relation beyond current Role/Handoff/Relation primitives, or if schema validation shows that an optional structured field cannot preserve backward compatibility without ambiguity. Implementation inconvenience or a new prose variant alone is not sufficient reason to broaden the model.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md](handoffs/010-anchor-to-axiom-canonical-holder-assignment-semantics.trace.md)
  - Value: VoJoLg3YDNiuDUq5WVpZ2BC-KInlnf5nGQdbwjawBy4

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: ulckNeK5hyq42vGVEvdYzeEmGRkeSq2UheY5jNLFpx0