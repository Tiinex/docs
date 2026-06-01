# Tiinex Topics

This folder holds Tiinex topic spaces and trace artifacts.

The goal is to preserve continuity in readable markdown rather than leaving the
important relationships trapped in one chat, one runtime, or one hidden state
store.

## What Lives Here

- `.trace.md` artifacts that carry continuity over time
- topic roots and child traces
- thin pointer roots that anchor a local topic space to an external or upstream
  origin
- schema notes under [.schemas](.schemas/README.md) that define how artifacts
  should be read

## How To Read A Trace

Most trace artifacts follow the same broad reading order:

1. continuity envelope
2. current schema identity
3. parent trace relation
4. origin or grounding references
5. body sections
6. continuity integrity footer

That structure helps a reader separate:

- what this artifact currently is
- what it directly continues
- what external source or upstream grounding helped produce it
- what claims are actually validated

## Topic Spaces In This Repo

- [kickstarter](kickstarter)
- [rfc](rfc)
- [riksarkivet](riksarkivet)
- [proof](proof)
- [task-origins](task-origins)

## Why `.trace.md`

The `.trace.md` suffix is used to signal that the file is part of a continuity
chain rather than just a loose note.

These artifacts are intended to make lineage, provenance, evidence, decisions,
tasks, and follow-up readable to both humans and machines.

## Important Distinctions

- `Parent Trace` is the direct continuity step backward
- `Origin` is the best known bounded reconstruction or grounding source
- `Summary` is a compact reading aid, not a second full truth source
- `Why` explains why the artifact exists, not automatically what governs

If you are new to Tiinex, start with the schemas in
[.schemas](.schemas/README.md).