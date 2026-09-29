# Continuity Context

- Envelope Schema: [tiinex.continuation.v1](tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](tiinex.evidence.v1.md)
  - Created At: 2026-05-28 22:50:17
  - Trace: [tiinex.evidence.v1.md](tiinex.evidence.v1.md)
- Current
  - Current Schema: [tiinex.bounty-transparency.v1](tiinex.bounty-transparency.v1.md)
  - Created At: 2026-05-29 17:35:00
  - Summary: Schema for traceable public bounty commitments, submissions, judging decisions, and payout evidence.

---

# tiinex.bounty-transparency.v1

- Status: provisional shared schema note
- Schema Definition: [tiinex.schema.v1](tiinex.schema.v1.md)
- Parent Schema: [tiinex.evidence.v1](tiinex.evidence.v1.md)
- Origin:
  - [browse](https://www.reddit.com/r/aiagents/comments/1tr0a6j/open_challenge_build_a_traceable_ai_lineage/)
  - [browse + git](https://github.com/Tiinex/docs/blob/c147ecd0f3d3b46ce03533a968dcf71f832b9210/.topics/.schemas/tiinex.evidence.v1.md)

## Summary

This schema id names evidence-bearing artifacts that track a public bounty from
commitment through submission, evaluation, decision, and payout evidence.

It inherits from `tiinex.evidence.v1` because a bounty transparency artifact is
not an escrow, payment rail, or financial contract. It is a lineage-friendly
evidence bundle that makes public commitments and later outcomes readable and
verifiable.

## Required Body Expectations

Artifacts using `tiinex.bounty-transparency.v1` should contain a readable body
after the continuity envelope.

The body should include, at minimum:

- a title identifying the bounty or funding thread
- a `Bounty Commitment` section
- a `Funding Events` section
- a `Submission Events` section
- a `Decision Events` section
- a `Payout Evidence` section
- a `Proof Of Use` section explaining how the artifact was checked or used

## Required Fields

The `Bounty Commitment` section should include:

- `Commitment ID`
- `Sponsor`
- `Amount`
- `Currency`
- `Status`
- `Source URL`

The `Funding Events` section should include a table or list with:

- sequence or event id
- event type
- actor
- amount
- currency
- timestamp or date when available
- evidence URL, artifact path, or explicit note that evidence is pending

The `Submission Events` section should include:

- submitter or team
- artifact URL or path
- schema or proof type
- submitted status
- evidence URL or path

The `Decision Events` section should include:

- decision status, even when the status is `pending`
- judge or decision source when known
- criteria or rationale when available
- evidence URL or path when available

The `Payout Evidence` section should include:

- payout status
- amount and currency paid, if any
- recipient or redacted recipient marker
- proof URL, transaction id, receipt, or explicit `pending` note

## Recommended Fields

- `Dispute Or Change Events`
- `Reward Splits`
- `Eligibility Notes`
- `Non-Financial Constraints`
- `Interpretation Limits`
- `Validator`

## Required Semantics

The artifact should separate four things that are often blurred in bounty
threads:

- a sponsor's public commitment to pay
- a participant's submitted work
- a judging or acceptance decision
- evidence that funds were actually distributed

Amounts should not be treated as paid merely because they were promised.

Pending, reduced, rejected, split, or partly paid outcomes should be recorded as
their own events instead of overwriting the original commitment.

If a payout recipient, transaction id, or private payment detail cannot be
published safely, the artifact should use `[Redacted]` with a reason when that
reason can be disclosed.

## What This Schema Is For

Use this schema when a bounty, grant, challenge, reward, tip, or public funding
thread needs a traceable record of:

- who promised what
- what evidence grounded the promise
- what work was submitted
- what decision was made
- what payout evidence exists

## What This Schema Is Not For

This schema is not:

- an escrow system
- an investment record
- a securities instrument
- a payment processor
- proof that a sponsor has funds available
- proof that a participant is legally entitled to payment

It only structures public lineage and evidence.

## Minimal Example

```md
# Continuity Context

- Envelope Schema: tiinex.continuation.v1
- Parent
  - Parent Schema: tiinex.evidence.v1
- Current
  - Current Schema: tiinex.bounty-transparency.v1
  - Created At: 2026-05-29 17:35:00
  - Summary: Traceable record for one public bounty.

---

# Example Bounty Transparency Record

## Bounty Commitment

- Commitment ID: example-001
- Sponsor: Example sponsor
- Amount: 1000
- Currency: SEK
- Status: open
- Source URL: https://example.test/challenge

## Funding Events

| Seq | Type | Actor | Amount | Currency | Evidence |
| --- | --- | --- | ---: | --- | --- |
| 1 | commitment-created | Example sponsor | 1000 | SEK | https://example.test/challenge |

## Submission Events

| Seq | Submitter | Artifact | Status | Evidence |
| --- | --- | --- | --- | --- |
| 1 | Example builder | ./proof.md | submitted | ./proof.md |

## Decision Events

| Seq | Decision | Actor | Rationale | Evidence |
| --- | --- | --- | --- | --- |
| 1 | pending | Example sponsor | Judging not complete | pending |

## Payout Evidence

| Seq | Status | Recipient | Amount | Currency | Evidence |
| --- | --- | --- | ---: | --- | --- |
| 1 | pending | [Redacted: payout not decided] | 0 | SEK | pending |

## Proof Of Use

- Validator: `python tools/validate_bounty_transparency.py ./proof.md`
- Result: valid
```

## Interpretation Notes

The schema intentionally keeps the record human-readable first. Validators may
check required fields and event tables, but later human judgment is still needed
to decide whether the evidence is persuasive.
