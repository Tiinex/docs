# Continuity Context

- Envelope Schema: [.topics/.schemas/tiinex.continuation.v1.md](../.schemas/tiinex.continuation.v1.md)
- Parent
  - Parent Schema: [.topics/.schemas/tiinex.schema.v1.md](../.schemas/tiinex.schema.v1.md)
  - Created At: 2026-06-02 00:00:00
  - Trace: [.topics/.schemas/tiinex.bounty.v1.md](../.schemas/tiinex.bounty.v1.md)
- Current
  - Current Schema: [.topics/.schemas/tiinex.bounty.v1.md](../.schemas/tiinex.bounty.v1.md)
  - Created At: 2026-06-02 00:00:00
  - Authors: auruminternum
  - Why: Demonstrates how a reward claim can preserve offer, submission, and settlement state without counting unpaid work as collected revenue.
  - Summary: Example bounty trace that validates against the local bounty schema checker.

---

# Example Reward Claim With Explicit Settlement State

## Reward Source

- Surface: GitHub
- Sponsor: Example Sponsor
- Reference: https://example.invalid/example/reward/issues/100

## Reward Terms

- Amount: 100
- Unit: USD
- Terms Summary: The reward is payable only after the sponsor accepts the submitted artifact.
- Payment Constraints: Payout destination is intentionally not included in the public trace.

## Claimant

- Identity: auruminternum
- Surface: GitHub

## Submission Artifact

- Type: pull request
- Reference: https://example.invalid/example/reward/pull/101
- Submitted At: 2026-06-02 00:00:00

## Eligibility Evidence

- Source issue was visible before work began.
- Submission reference is concrete and reviewable.
- No private payout address or hidden runtime instruction is required to inspect the claim state.

## Settlement State

- State: submitted
- Counted As Collected: no
- Reason: no acceptance or payment evidence has been recorded yet

## Payment Evidence

- Status: none yet
- Missing Evidence: sponsor acceptance, payout confirmation, or settlement receipt

## Interpretation Notes

- This is a synthetic example for schema validation, not a real payment claim.
- It shows how a trace can carry reward value without overstating unpaid work as earned cash.

---

# Continuity Integrity

- schema-example-only
  - Towards: [.topics/.schemas/tiinex.bounty.v1.md](../.schemas/tiinex.bounty.v1.md)
  - Value: not-a-cryptographic-integrity-claim
