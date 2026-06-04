# Schema Validator Milestone

## Goal

- [ ] Reach a "good enough" validator where two independent implementations should land close to the same accept/reject/warn/preserve behavior.
- [ ] Keep schema policy in schema artifacts as much as possible.
- [ ] Keep code focused on execution and mechanics, not hidden policy.
- [ ] Finish with a small compatibility fixture layer so portability is tested, not assumed.

## Current State

- [x] Root schema has a machine-readable validation contract.
- [x] Root validator exists and validates maintained root shape.
- [x] Topic validator exists and validates maintained topic shape.
- [x] Root policy groups were added for:
  - [x] Validator Response Policy
  - [x] Unknown Handling
  - [x] Matching And Normalization
  - [x] Inheritance And Override
  - [x] Contract Cardinality
- [x] Contract Cardinality now has real validator effect for duplicate category labels.
- [x] Unknown contract vocabulary now downgrades to warning when full root lineage is unavailable.
- [x] Root Known Category Labels now have real validator effect in the root validator.
- [x] Unknown envelope fields now warn only when full lineage proves they are undeclared.
- [x] Plus bullets now fail explicitly in machine-authoritative contract surfaces.
- [x] Allowed envelope fields are now derived from the root contract instead of only hardcoded lists.
- [x] Named declaration entries now parse as their own shape and duplicate declaration names fail explicitly.
- [ ] Root policy is driving enough validator behavior to count as portable policy instead of extra text.

## Working Method

- [x] Work in small batches.
- [x] Each batch must add schema intent and validator effect.
- [x] Each batch must end with runnable validation.
- [x] Avoid broad redesign while policy is still being pulled out of code.
- [x] Keep this file updated while the work moves.

## Batch Plan

- [x] Batch 1: Unknown Handling
  - [x] Move the current unknown/undeclared behavior closer to root policy.
  - [x] Reduce hardcoded severity decisions where root now gives enough direction.
  - [x] Add passing and failing tests for declared, undeclared, and unsupported cases.
  - [x] Confirm which behavior is now schema-driven versus still local code policy.

- [x] Batch 2: Matching And Normalization
  - [x] Make exact-match versus allowed normalization more explicit in code.
  - [x] Remove accidental tolerance that conflicts with root policy.
  - [x] Add tests for whitespace, casing, bullets, and nearby formatting drift.

- [x] Batch 3: Contract Cardinality
  - [x] Enforce duplicate category labels within the same group.
  - [x] Enforce any remaining duplicate and multiplicity rules that still live only in code assumptions.
  - [x] Add tests for duplicate groups, duplicate declarations, and missing required groups where needed.

- [x] Batch 4: Inheritance And Override
  - [x] Make descendant add/tighten/override behavior explicit in validator logic.
  - [x] Prevent silent weakening or guessed override behavior.
  - [x] Add focused root-plus-topic tests that prove the rule is applied, not just stated.

- [ ] Batch 5: Compatibility Fixtures
  - [x] Add a small fixture layer for portability checks.
  - [x] Cover valid, invalid, preserve-only, and warning-level cases.
  - [x] Use the fixtures to test that the validator behavior is reproducible, not just locally reasonable.

## Done So Far

- [x] Root policy groups added to the maintained root schema.
- [x] Root validator updated to require the new policy groups.
- [x] Regression test added so missing policy groups fail validation.
- [x] Duplicate category labels now produce a real contract finding.
- [x] Unknown contract vocabulary now respects lineage-unavailable downgrade behavior.
- [x] Root category labels now validate against root-declared Known Category Labels.
- [x] Unknown envelope fields now preserve silently without lineage and warn with lineage.
- [x] Plus bullets now fail with explicit contract findings instead of drifting into pseudo-category parsing.
- [x] Root-declared envelope field lists now affect both root and topic envelope validation.
- [x] Topic contract validation now fails when maintained required groups are missing.
- [x] Duplicate named declaration entries now fail explicitly instead of collapsing into generic list-shape errors.
- [x] A first schema compatibility fixture layer now exercises key root/topic policy cases outside the inline unit tests.
- [x] Compatibility fixtures now cover valid, invalid, warning, and preserve-only policy cases.
- [x] Compatibility fixtures now also cover one exact-match normalization case and one contract-cardinality case.
- [x] Topic schema lineage now requires Parent Origin and a commit-pinned `browse + git` permalink when a parent is declared.
- [x] Topic schemas can now declare additional contract category labels through Contract Category Extension.
- [x] Topic schemas now fail if they redeclare inherited contract category labels without explicit override semantics.
- [x] Topic schemas can now redeclare inherited contract category labels only when they also declare explicit `Contract Category Override` semantics.
- [x] Focused test suite passed after the current changes.

## Current Focus

- [ ] Keep checking that new root policy changes become validator behavior, not just documentation.

## User Checkpoints

- [x] Goal image confirmed by user.
- [x] User prefers one clear test moment near the end rather than repeated manual checks.
- [ ] Tell user when Reload Window is needed.
- [ ] Tell user when manual testing is worth doing.

## Definition Of Done

- [x] Unknown Handling is materially schema-driven.
- [x] Matching And Normalization is materially schema-driven.
- [x] Contract Cardinality is materially schema-driven.
- [x] Inheritance And Override is materially schema-driven.
- [ ] Remaining hidden validator policy is small, explicit, and acceptable.
- [x] Compatibility fixtures exist and pass.
- [ ] I can point to what is still intentionally code-owned and why.