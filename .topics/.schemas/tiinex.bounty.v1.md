# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.decision.v1](tiinex.decision.v1.md)
  - Created At: 2026-05-28 22:50:17
  - Trace: [tiinex.decision.v1.md](tiinex.decision.v1.md)
- Current
  - Current Schema: [tiinex.bounty.v1](tiinex.bounty.v1.md)
  - Created At: 2026-06-02 00:00:00
  - Summary: Shared schema for bounty, prize, and reward artifacts where eligibility, submission state, and settlement evidence must stay traceable.

---

# tiinex.bounty.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.decision.v1](tiinex.decision.v1.md)
- Origin:
  - [relative](../../../ai-provenance/.topics/trace-format/001.trace.md)
  - [browse + git](https://github.com/Tiinex/ai-provenance/blob/2b82ee6538836765463c7a5524c2120aa3aa4983/.topics/trace-format/001.trace.md)

## Summary

This schema id names bounty, prize, or reward artifacts whose main job is to
make the reward contract, submission lineage, acceptance state, and settlement
evidence readable without relying on hidden platform state.

It exists for work where a later reader needs to distinguish a promised reward,
a submitted claim, an accepted claim, and a paid claim.

## Required Body Expectations

Artifacts using `tiinex.bounty.v1` should contain a readable body after the
continuity envelope.

The body should include, at minimum:

- a title identifying the bounty or reward artifact
- the sponsor, program, or source surface that offered the bounty
- the stated reward amount, unit, and any known payment constraints
- the contributor or claimant identity used for the submission
- the submission artifact, claim, pull request, issue, file, or other concrete
  deliverable being evaluated
- the current settlement state
- enough eligibility evidence that a later reader can see why the claim is
  pending, accepted, rejected, paid, expired, or blocked

## Recommended Body Sections

The exact section names may vary, but bounty artifacts should usually provide
some combination of:

- reward source
- reward terms
- claimant
- submission artifact
- eligibility evidence
- settlement state
- payment evidence
- review or dispute history
- interpretation limits

## Envelope Expectations

When this body schema is used, it is expected to sit inside an envelope that
identifies at least:

- `Envelope Schema`
- `Current -> Current Schema: tiinex.bounty.v1`
- `Current -> Created At`
- `Current -> Authors`

Recommended envelope-side companions are:

- `Current -> Why`
- `Current -> Summary`
- parent signal when the bounty artifact specializes an evidence, feedback, or
  decision trace

## Required Bounty Semantics

Bounty artifacts using `tiinex.bounty.v1` should make it clear:

- who offered the reward
- who made the submission or claim
- what exact artifact is being evaluated for the reward
- what reward amount was visible or promised
- what state the claim is currently in
- what evidence supports that state
- what evidence is missing before the reward can be counted as collected

The settlement state should use one of these normalized values when possible:

- `open`
- `submitted`
- `in_review`
- `accepted`
- `rejected`
- `expired`
- `blocked`
- `paid`
- `disputed`
- `unknown`

If the reward is not yet paid, the artifact should not describe the amount as
earned or collected. It should preserve the amount as offered, claimed, or
accepted according to the actual evidence.

If payment evidence is unavailable, redacted, or unsafe to disclose, the
artifact should say so explicitly. It should not include private wallet
addresses, payout account identifiers, secrets, access tokens, or hidden
runtime instructions.

## Validation-Friendly Shape

Keep bounty artifacts in a stable order so humans and validators can scan them
the same way.

Preferred order:

1. title
2. Reward Source
3. Reward Terms
4. Claimant
5. Submission Artifact
6. Eligibility Evidence
7. Settlement State
8. Payment Evidence
9. Interpretation Notes

Preferred anchors:

- `Reward Source`
- `Reward Terms`
- `Claimant`
- `Submission Artifact`
- `Eligibility Evidence`
- `Settlement State`

If a section is omitted, leave it out cleanly rather than renaming it for a
one-off use. Use close equivalents only when the artifact genuinely needs a
different label, and keep the meaning obvious in the first line.

## Recommended Fields

- `Current -> Authors`
- `Current -> Why`
- `Current -> Summary`
- sponsor or program name
- source surface such as GitHub, Reddit, Algora, IssueHunt, Ubiquity, Opire,
  or another named channel
- source reference such as a URL, issue number, post id, comment id, or program
  id
- reward amount and unit
- claimant identity as used on the source surface
- submission artifact reference
- normalized settlement state
- eligibility evidence references
- payment evidence or explicit missing-payment note
- review, dispute, or expiry conditions when known

## File Naming Conventions

Artifacts using `tiinex.bounty.v1` should normally follow the same
lineage-first trace naming as other continuity artifacts.

Recommended form:

- `<lineage>.trace.md`
- `<lineage>-<bounty-slug>.trace.md`

Examples:

- `001.trace.md`
- `001-2.trace.md`
- `001-2-bounty-claim.trace.md`
- `001-3-settlement-evidence.trace.md`

Rules:

- keep the lineage label first
- use a short slug when it helps distinguish one bounty or settlement artifact
  from another
- keep the `.trace.md` suffix stable

## What This Schema Is For

Use `tiinex.bounty.v1` when the artifact is primarily trying to:

- preserve bounty or reward terms in a trace-readable form
- link a submission artifact to a visible reward source
- separate offered, submitted, accepted, and paid states
- preserve enough settlement evidence that a later reader can audit whether a
  reward should be counted as collected
- keep reward work from becoming dependent on hidden platform state

## What This Schema Is Not For

Do not use this schema for generic work logs, broad business plans, or payment
instructions that are not tied to a traceable reward claim.

It is not primarily for:

- private payout setup
- wallet or bank account records
- generic project management
- broad revenue forecasts
- hidden prompt, hidden runtime, or secret-collection artifacts
- opaque platform dashboards without preserved evidence

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Current
  - Current Schema: tiinex.bounty.v1
  - Created At: 2026-06-02 00:00:00
  - Authors: Example Contributor
  - Summary: Example bounty artifact showing a submitted but unpaid claim.

---

# Example Submitted Bounty Claim

## Reward Source

- Surface: GitHub
- Sponsor: Example Sponsor
- Reference: https://example.invalid/org/repo/issues/123

## Reward Terms

- Amount: 100
- Unit: USD
- Terms Summary: Reward is paid only after maintainer acceptance.

## Claimant

- Identity: example-contributor
- Surface: GitHub

## Submission Artifact

- Type: pull request
- Reference: https://example.invalid/org/repo/pull/456

## Eligibility Evidence

- The source issue was open when the submission was made.
- The pull request addresses the requested behavior.

## Settlement State

- State: submitted
- Counted As Collected: no

## Payment Evidence

- Status: none yet
```

## Interpretation Notes

- a bounty artifact should optimize for settlement truth, not optimism
- offered or claimed amounts should not be counted as collected until payment
  or acceptance evidence supports that stronger state
- private payout destinations should stay out of the public artifact unless a
  separate schema and consent boundary makes them safe to publish
- if a reward source becomes unreachable, the artifact should still preserve
  enough terms and state evidence to make the claim auditable

---

# Continuity Integrity

- sha256-base64url-c14n-v1
  - Towards: [tiinex.decision.v1.md](tiinex.decision.v1.md)
  - Value: pending-new-schema-note
