# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 17:24:06
  - Trace: [001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Origin:
    - [relative](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-15 17:24:50
  - Authors: Anchor
  - Why: Kodax explicit-session assignment is blocked by prose mismatch while Anchor/Axiom/Loom variants are accepted.
  - Summary: Define canonical holder assignment modes without exact-prose whitelisting.
  - Status: ready/local

---

# Canonical Holder Assignment Semantics

## Objective

Define the smallest canonical Tiinex semantic contract for Role holder-assignment modes so bounded explicit-session authorization is represented/compared by semantic meaning rather than a whitelist of whole human-readable Holder State sentences.

Use existing Role semantics where sufficient. Do not create a new schema or parsing convention merely to accommodate current Core implementation.

## Required Questions

- What exact semantic claims are represented by current Holder Relationship / Holder State declarations?
- How should `explicit session`, `invocation` / `role invocation`, and `Handoff` assignment modes be distinguished or normalized?
- Are current Role artifacts already semantically equivalent for explicit-session assignment despite prose variation, or is a structured schema-level representation missing?
- What is the exact boundary between session Role assertion, qualified Role assignment authorization, and durable holder identity?
- What wording/structures must remain unresolved rather than heuristically interpreted?
- How should existing Anchor, Axiom, Loom and Kodax Role declarations map under the canonical rule without rewriting historical Role prose solely to satisfy Tooling?

## Done Criteria

- Produce one qualified semantic disposition with an explicit normalized assignment-mode contract.
- State whether existing tiinex.party.role.v1 primitives are sufficient or identify the narrow missing semantic primitive.
- Preserve fail-closed behavior for unknown/unqualified Holder Relationship material.
- Preserve the rule that Handoff endpoints, package/project/chat identity and session self-assertion do not independently authorize holder assignment.
- Provide exact implementation acceptance criteria Loom can consume without heuristic prose parsing.
- Return one qualified Axiom-to-Anchor Handoff.

## Scope

Docs semantic authority only. No Core implementation and no Business mutation.

## Dependencies

- Business Task: Canonical Holder Assignment Mode Normalization;
- current Anchor, Axiom, Loom, Kodax and other Role Holder Relationship artifacts;
- accepted Holder Binding Authorization Gate semantics.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md](business::.topics/initiatives/001-2-7-5-1-2-canonical-holder-assignment-mode-normalization.trace.md)
  - Value: sHcRIrW-bE0NbTMBahP5wbeJg3VVtpaeU5wqWGajp_0

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: NSsV7XQjqhu5iiOTAwcbiewupnfuzAhgkeJuFgRzvRc