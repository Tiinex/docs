# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.project.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/project/tiinex.project.v1.schema.md)
  - Created At: 2026-08-26 22:24:00
  - Trace: [Tiinex Tooling](001-2-tooling-project.trace.md)
  - Origin:
    - [relative](001-2-tooling-project.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-08-26 22:30:00
  - Authors: Anchor; Sigma
  - Summary: Portable Handoff, Cold-Start And LLM Ingress
  - Status: draft/local

---

# Portable Handoff, Cold-Start And LLM Ingress

## Objective

Make Tiinex continuation reliably cold-startable from one qualified Handoff carrier so a new Anchor can recover current organizational truth without hidden pre-context or gradual workspace loss.

## Done Criteria

- A qualified Handoff gives a cold recipient one unambiguous route into current work and preserves the semantic Parent lineage already present in source artifacts.
- Cold-start role understanding resolves the role semantics needed to act correctly, including known shared/base-role inheritance or specialization and the bounded delta of concrete roles such as Anchor, Axiom, Loom, and Sigma. A cold LLM or Tooling path must not need conversation memory to know inherited versus role-specific responsibilities.
- Role resolution fails closed when inheritance/specialization authority is unavailable or ambiguous: it reports the gap instead of flattening each role into an isolated document, inferring inheritance from names/folders, or inventing a base-role contract.
- Stable-major carrier creation requires complete qualified `tiinex-business`, `tiinex-docs`, and `tiinex-site` Workspace snapshots together; a major containing only a subset is not accepted as the Tiinex foundation recovery point.
- Carrier lineage remains a human progress/recovery projection and never replaces artifact Parent lineage.
- Fixed-width/dimension prefixes survive manufacture and round-trip qualification.
- The next stable foundation major is created only after Business, Docs, and Site are mutually current enough for Sigma to accept the foundation and cold-start qualification succeeds.

## Scope

- Handoff manufacture, cold-start routing, workspace completeness, fixed-width carrier lineage, role-semantic resolution for cold recipients, and recovery qualification.
- Do not use a Handoff to reconstruct semantic work that should already exist as source artifacts.
- Do not declare a stable major merely because generic packaging succeeds; the Tiinex-specific three-workspace gate is an additional acceptance requirement.

## Semantic Discovery Disposition

- Axiom completed a bounded current-state Discovery over the carried Business, Docs, and Site snapshots. The durable specialist result belongs in `Tiinex/docs` because its primary question is semantic authority, while Business retains the product requirement that cold recipients understand shared/base-role semantics without chat memory.
- Current authority supports schema-family specialization and typed non-Parent Relation capacity, but it does **not** currently authorize a concrete shared/base-role inheritance predicate or artifact-level merge semantics for Anchor, Axiom, Loom, and Sigma. Role resolution therefore remains fail-closed until the intended product meaning is chosen and qualified authority exists.
- The next semantic question is deliberately narrower than schema design: decide whether shared/base-role meaning is classification-only, inherited/overridden responsibilities, delegation, descriptive defaults, or another operation. Existing schema inheritance must not be mechanically repurposed as role-artifact inheritance.
- The Axiom session also observed successful inbound qualification and local Discovery validation but a missing intended return carrier. Cause remains unknown. This is transport evidence only and does not invalidate the semantic result or prove a bootstrap cause.

## Dependencies

- Current recipient-v2 carrier implementation and bootstrap runtime.
- Canonical role/schema/relation authority sufficient to resolve shared role semantics and inheritance/specialization without chat-only knowledge; exact representation remains a recovery/reconciliation concern rather than something this Task invents.
- Historical cold-start/Handoff dogfood and fresh-recipient qualification.
- Axiom review where transport changes touch schema semantics.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [Tiinex Tooling](001-2-tooling-project.trace.md)
  - Value: id2V3L4aVv616_NbFUngZrbSnZ9T_HN5G-x8Z1003W4

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: XCQt4Ikn6uuZQy3_dJ3IQRqWG_xxaU3BCh8mDWeboh8
