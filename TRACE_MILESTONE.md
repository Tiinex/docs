# Trace Validator Milestone

## Goal

- [ ] Reach a "good enough" `.trace.md` validator where old and current artifacts get close to the same accept/reject/warn/preserve behavior across repos.
- [ ] Keep ordinary artifact policy in maintained schema artifacts as much as practical.
- [ ] Keep validator code focused on parsing, traversal, resolution, and execution mechanics rather than hidden artifact policy.
- [ ] Finish with a small compatibility fixture layer for ordinary `.trace.md` artifacts so portability is tested, not assumed.

## Current State

- [x] A shared `.trace.md` continuity parser and chain validator exist.
- [x] Problems/report findings exist for continuity-header presence and timestamp shape.
- [x] Problems/report findings exist for direct-parent integrity basics:
	- [x] missing parent schema
	- [x] missing parent created-at
	- [x] parent schema mismatch against resolved parent artifact
	- [x] invalid parent created-at shape
	- [x] unpinned parent-origin `browse + git`
	- [x] missing/unreadable parent artifact
	- [x] direct-parent checksum mismatch
- [x] Continuity checksum mismatch is surfaced for ordinary artifacts.
- [x] Task artifacts have a bounded task-structure rule.
- [x] Runtime trace artifacts have a bounded runtime-structure rule.
- [x] Tab-indented continuity header fields now parse correctly in older `.trace.md` artifacts.
- [ ] Ordinary `.trace.md` schema-target readability is not yet enforced for `Envelope Schema`, `Current Schema`, and `Parent Schema`.
- [ ] Ordinary `.trace.md` validation still relies too much on code-owned artifact policy instead of declared schema surfaces.
- [ ] Problems coverage for old `.trace.md` artifacts is still materially weaker than the maintained schema-note validator surface.

## Working Method

- [x] Work in small batches.
- [x] Each batch must add validator effect, not only documentation or notes.
- [x] Each batch must end with runnable validation.
- [x] Prefer one concrete old artifact as the probe for each new rule before widening to repo sweeps.
- [x] Keep this file updated while the work moves.

## Batch Plan

- [ ] Batch 1: Continuity Header And Parent Integrity Baseline
	- [x] Require current created-at.
	- [x] Require current created-at shape.
	- [x] Surface parent-schema and parent-created-at gaps when parent signal exists.
	- [x] Surface parent-schema mismatch against the resolved parent artifact.
	- [x] Fix parser drift such as tab-indented continuity fields.

- [ ] Batch 2: Schema Target Readability For Ordinary Traces
	- [ ] Validate that `Envelope Schema`, `Current Schema`, and `Parent Schema` targets are readable when they are local or otherwise resolvable.
	- [ ] Surface old `.md` schema links that no longer resolve to the maintained `.schema.md` surfaces.
	- [ ] Add focused probes from old `docs/.topics` artifacts where Problems currently stays silent.

- [ ] Batch 3: Schema-Aware Artifact Rules
	- [ ] Decide which ordinary `.trace.md` rules should be owned by declared schema identity rather than by generic code heuristics.
	- [ ] Add bounded current-schema-specific validation for the highest-volume leaf families first.
	- [ ] Keep code-owned fallback behavior explicit where no schema-owned rule exists yet.

- [ ] Batch 4: Parent Authenticity And Continuation Semantics
	- [ ] Decide which parent fields on ordinary traces should only be present-versus-shape checked and which should actually match the resolved parent artifact.
	- [ ] Keep lineage semantics separate from provenance conveniences.
	- [ ] Add tests that prove old artifacts fail only for real drift, not for historically valid but differently formatted headers.

- [ ] Batch 5: Compatibility Fixtures
	- [ ] Add a small ordinary-trace fixture layer for valid, invalid, warning, and preserve-only cases.
	- [ ] Cover at least one old relative-link artifact and one commit-pinned-link artifact.
	- [ ] Use the fixtures to test that ordinary trace validation is reproducible outside the inline unit tests.

## Done So Far

- [x] Continuity parser extracts current schema, parent schema, parent created-at, parent trace, current created-at, and footer integrity from ordinary artifacts.
- [x] Chain validator traverses resolved parent links and reports direct-parent integrity findings.
- [x] Continuity checksum mismatch is surfaced on ordinary artifacts.
- [x] Task and runtime trace families have a first bounded structure validator.
- [x] A regression now protects tab-indented continuity headers in older `.trace.md` artifacts.
- [x] Problems/report surfaces are wired for the currently implemented ordinary-trace findings.

## Current Focus

- [ ] Make ordinary `.trace.md` schema-target readability a real validator surface instead of a silent blind spot.

## User Checkpoints

- [x] Goal image for schema-validator work was previously confirmed by user.
- [x] User now wants a parallel checklist for `.trace.md` artifact validation.
- [ ] Tell user when Reload Window is needed.
- [ ] Tell user when manual testing of old `.trace.md` artifacts is worth doing.

## Definition Of Done

- [x] Continuity-header baseline validation is materially present.
- [x] Direct-parent baseline validation is materially present.
- [ ] Ordinary `.trace.md` schema targets are validated for readability and obvious drift.
- [ ] High-volume leaf families are not relying only on generic continuity checks.
- [ ] Remaining hidden artifact policy is small, explicit, and acceptable.
- [ ] Compatibility fixtures for ordinary traces exist and pass.
- [ ] I can point to what is still intentionally code-owned for ordinary `.trace.md` validation and why.
