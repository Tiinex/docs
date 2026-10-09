# Continuity Context

- Envelope Schema: [tiinex.root.v1](../../.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.task.v1](../../.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-10-06 19:15:00
  - Authors: Anchor; Sigma
  - Why: Bound the dedicated Process-root schema candidate before any best-practice change or migration.
  - Summary: Qualify a dedicated reusable Process-root schema without conflating Process identity with Topic semantics.

---

# Dedicated Process Root Schema Qualification

## Objective

Qualify whether reusable Tiinex Process roots warrant a dedicated `tiinex.process.v1` schema instead of continuing to represent Process identity with generic Topic artifacts.

## Done Criteria

- one Docs-local candidate schema defines reusable Process identity, applicability, topology boundary, and interpretation limits without conflating Process roots with Topics or execution instances
- local schema-source qualification is clean
- the generic Core creation contract can bind the candidate without a Process-specific renderer
- representative exercise records any remaining runtime-companion or publication boundary explicitly
- no existing Process artifacts are migrated merely because the candidate exists

## Scope

- candidate schema and local qualification only
- preserve `tiinex.transition.definition.v1` for durable executable positions
- preserve `tiinex.relation.v1` for durable independent topology edges
- do not mass-convert legacy Topic-based Process material in this task
- do not publish, commit, push, or infer acceptance from local qualification

## Dependencies

- Docs Schema Development process
- existing Root, Topic, Transition Definition, and Relation schema contracts
- separately qualified migration/acceptance work before changing maintained Process roots

---

# Continuity Integrity

- sha256-base64url-c14n-v2
  - Towards: self
  - Value:N_G8NmW-8M1eiaOMQp7TwNlmP2g00FmaCY4ShCd0UWc
