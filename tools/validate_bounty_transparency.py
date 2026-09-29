#!/usr/bin/env python3
"""Validate a tiinex.bounty-transparency.v1 markdown artifact."""

from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path


REQUIRED_SECTIONS = [
    "## Bounty Commitment",
    "## Funding Events",
    "## Submission Events",
    "## Decision Events",
    "## Payout Evidence",
    "## Proof Of Use",
]

REQUIRED_COMMITMENT_FIELDS = [
    "Commitment ID",
    "Sponsor",
    "Amount",
    "Currency",
    "Status",
    "Source URL",
]


def section(text: str, heading: str) -> str:
    pattern = re.compile(
        r"^" + re.escape(heading) + r"\s*$([\s\S]*?)(?=^## |\Z)",
        re.MULTILINE,
    )
    match = pattern.search(text)
    if not match:
        raise ValueError(f"missing section: {heading}")
    return match.group(1).strip()


def commitment_fields(block: str) -> dict[str, str]:
    fields: dict[str, str] = {}
    for line in block.splitlines():
        match = re.match(r"^-\s+([^:]+):\s*(.+?)\s*$", line)
        if match:
            fields[match.group(1).strip()] = match.group(2).strip()
    return fields


def parse_markdown_table(block: str) -> list[dict[str, str]]:
    rows = [line.strip() for line in block.splitlines() if line.strip().startswith("|")]
    if len(rows) < 2:
        return []

    headers = [cell.strip() for cell in rows[0].strip("|").split("|")]
    parsed = []
    for row in rows[2:]:
        values = [cell.strip() for cell in row.strip("|").split("|")]
        if len(values) != len(headers):
            raise ValueError(f"table row has {len(values)} cells, expected {len(headers)}: {row}")
        parsed.append(dict(zip(headers, values)))
    return parsed


def parse_amount(value: str) -> float:
    cleaned = value.replace(",", "").strip()
    try:
        return float(cleaned)
    except ValueError as exc:
        raise ValueError(f"invalid amount: {value}") from exc


def validate(path: Path) -> tuple[dict[str, float], int, str, str]:
    text = path.read_text(encoding="utf-8")

    if "Current Schema: [tiinex.bounty-transparency.v1]" not in text:
        raise ValueError("current schema is not tiinex.bounty-transparency.v1")

    for heading in REQUIRED_SECTIONS:
        section(text, heading)

    fields = commitment_fields(section(text, "## Bounty Commitment"))
    missing = [field for field in REQUIRED_COMMITMENT_FIELDS if field not in fields]
    if missing:
        raise ValueError(f"missing commitment fields: {', '.join(missing)}")

    declared_amount = parse_amount(fields["Amount"])
    declared_currency = fields["Currency"].upper()

    funding_rows = parse_markdown_table(section(text, "## Funding Events"))
    if not funding_rows:
        raise ValueError("Funding Events table has no data rows")

    commitments: dict[str, float] = defaultdict(float)
    for row in funding_rows:
        if not row.get("Type"):
            raise ValueError("funding event missing Type")
        currency = row.get("Currency", "").upper()
        amount = parse_amount(row.get("Amount", ""))
        if currency:
            commitments[currency] += amount

    if commitments[declared_currency] < declared_amount:
        raise ValueError(
            f"funding events total {commitments[declared_currency]:g} {declared_currency}, "
            f"below declared {declared_amount:g} {declared_currency}"
        )

    submissions = parse_markdown_table(section(text, "## Submission Events"))
    if not submissions:
        raise ValueError("Submission Events table has no data rows")

    decisions = parse_markdown_table(section(text, "## Decision Events"))
    payouts = parse_markdown_table(section(text, "## Payout Evidence"))
    if not decisions:
        raise ValueError("Decision Events table has no data rows")
    if not payouts:
        raise ValueError("Payout Evidence table has no data rows")

    decision_status = decisions[-1].get("Decision", "unknown")
    payout_status = payouts[-1].get("Status", "unknown")
    return dict(commitments), len(submissions), decision_status, payout_status


def main(argv: list[str]) -> int:
    if len(argv) != 2:
        print("usage: validate_bounty_transparency.py PATH", file=sys.stderr)
        return 2

    path = Path(argv[1])
    try:
        commitments, submission_count, decision_status, payout_status = validate(path)
    except Exception as exc:
        print(f"ERROR {exc}", file=sys.stderr)
        return 1

    print("OK bounty transparency artifact valid")
    for currency, amount in sorted(commitments.items()):
        print(f"commitments: {amount:g} {currency}")
    print(f"submissions: {submission_count}")
    print(f"decision: {decision_status}")
    print(f"payout: {payout_status}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
