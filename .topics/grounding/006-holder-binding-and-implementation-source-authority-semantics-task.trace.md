# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-09-14 13:45:00
  - Trace: [001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md](business::.topics/initiatives/001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md)
  - Origin:
    - [relative](business::.topics/initiatives/001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md)
- Current
  - Current Schema: [tiinex.task.v1](https://github.com/Tiinex/docs/blob/053d46ce082d4ec261b82abc44ecca403d61e240/.topics/.schemas/core/task/tiinex.task.v1.schema.md)
  - Created At: 2026-09-14 17:31:29
  - Authors: Anchor
  - Why: Test 2 preserved participant/process boundaries but still inferred holder assignment and new implementation-source authority.
  - Summary: Define semantic authority for consuming-session Role binding and implementation-source creation after bounded Test 2.
  - Status: ready/local

---

# Holder Binding And Implementation Source Authority Semantics

## Objective

Define the minimum durable semantic contract needed for a fresh recipient Role to distinguish:

1. recipient Role compatibility from consuming-session holder assignment; and
2. carried/writable Workspace material from authority to use an existing implementation source or create a new implementation source.

The contract must reduce ambiguity exposed by bounded thin-lineage Test 2 without embedding evaluator behavior into recipient Tasks/Handoffs.

## Evidence Basis

Test 2 established that a fresh Anchor could preserve unresolved participant/process state and choose a genuinely new bounded product slice, but it also explicitly reported two authority bridges that were its own inference:

- declaring the consuming session to hold `Anchor` because the selected route was Anchor-to-Anchor and the operator instructed continuation; and
- treating a writable bounded Business Workspace plus a neutral implementation Task as sufficient authority to create new implementation source inside Business.

## Questions To Resolve

- What qualified semantic source may assign or authorize a consuming session to operate in a Role capacity without inferring holder identity from Handoff recipient, transport identity, provider identity, chat position or package placement?
- Can existing Party/Role/Relation/Handoff/Task/Process semantics express that assignment, or is an additional semantic construct required?
- How should grounding distinguish at least:
  - existing implementation source explicitly authorized;
  - creation of new implementation source explicitly authorized;
  - implementation source authority unresolved?
- How should Workspace purpose and repository/organizational boundary participate in that determination without physical carriage or writability becoming authority?
- What exact facts/provenance/unresolved states may Core project mechanically without creating semantic authority?
- What exact blocker/request should a recipient emit when holder or source-creation authority is missing?

## Scope

Docs semantic analysis and qualified disposition only.

## Dependencies

- controlling Business Epic: `business::.topics/initiatives/001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md`;
- Test 2 diagnostic disposition in Business;
- existing Docs Role/Relation/Handoff/process semantics and prior thin-lineage/process dispositions;
- current Core grounding diagnostics as read-only mechanical evidence.

## Boundaries

- Do not mutate Business or Core.
- Do not infer holder assignment from recipient Role, route endpoint, transport identity, project/chat name or conversation position.
- Do not infer implementation-source authority from Workspace carriage, completeness, writability or directory adjacency alone.
- Prefer existing semantic primitives when sufficient; do not create a new schema merely for convenience.
- Preserve `grounded-to-act` as bounded route action readiness.
- Preserve participant/process non-inference already demonstrated.

## Done Criteria

- qualified semantic disposition in Docs;
- explicit Tooling-facing projection contract with provenance and unresolved states;
- explicit recommendation for holder-assignment authority path;
- explicit recommendation for implementation-source authority states and blocker behavior;
- qualified Axiom-to-Anchor return Handoff.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md](business::.topics/initiatives/001-2-7-thin-lineage-anchor-grounding-orchestration-epic.trace.md)
  - Value: f0iMMxJZ5jrOIRd7SjL14TG2K-HriaX17b7g784ItO0

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: A3J1W-WILTnVOl6DFroqTAMG2XQdSVQVnFmK_jkuIBc