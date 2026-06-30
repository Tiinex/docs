# Tiinex Topics

This folder holds Tiinex topic spaces and trace artifacts.

The goal is to preserve continuity in readable markdown rather than leaving important relationships trapped in one chat, one runtime, one database, one management tool, or one hidden state store.

## What Lives Here

- `.trace.md` artifacts that carry continuity over time
- topic roots and child traces
- thin pointer roots that anchor a local topic space to an external or upstream origin
- schema notes under [.schemas](.schemas) that define how artifacts should be read
- tool, interface, origin, adapter, and validator definitions that keep support surfaces readable outside one implementation

## How To Read A Trace

Most trace artifacts follow the same broad reading order:

1. continuity envelope
2. current schema identity
3. parent trace relation
4. origin or grounding references
5. body sections
6. continuity integrity footer when finalized by tooling

That structure helps a reader separate:

- what this artifact currently is
- what it directly continues
- what external source or upstream grounding helped produce it
- what role the artifact body owns
- what claims are actually validated
- what is only referenced, interpreted, preserved, attested, or related

## Topic Spaces In This Repo

- `kickstarter`
- `rfc`
- `riksarkivet`
- `task-origins`
- educational and meme lineages used as readable Tiinex examples
- idea and proof lineages used to explore future Tiinex surfaces

## Why `.trace.md`

The `.trace.md` suffix is used to signal that the file is part of a continuity chain rather than just a loose note.

These artifacts are intended to make lineage, provenance, sources, evidence, decisions, tasks, events, projects, parties, resources, and follow-up readable to both humans and machines.

## Important Distinctions

- `Parent Trace` is the direct continuity step backward
- `Origin` is a bounded place or starting context where material may be encountered
- `Source` is a selected or configured source used by work
- `Relation` is a typed non-parent link
- `Summary` is a compact reading aid, not a second full truth source
- `Why` explains why the artifact exists, not automatically what governs
- `Evidence` is preserved material bearing on a claim or question, not all preservation
- `Event` records a bounded occurrence or planned occurrence, not attendance proof or consent

If you are new to Tiinex, start with the schemas in [.schemas](.schemas).