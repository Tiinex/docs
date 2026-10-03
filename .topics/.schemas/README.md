# Tiinex Schemas

This folder contains the human-readable schema notes that define how Tiinex artifacts and declared support surfaces should be interpreted.

This layout is intentionally directory-shaped. Each schema family may place a schema note beside related schema artifacts, examples, contract nodes, lint rules, generation notes, or validation support. The directory tree is a navigation and packaging aid. It is not the semantic authority.

## Directory Convention

- `.topics/.schemas/tiinex.root.v1.schema.md` remains at the schema root.
- Child schemas live in family directories.
- A schema directory may hold one schema and related artifacts that belong with it.
- Directory placement may mirror parent-child lineage for readability.
- Tools may use the directory as a discovery hint.
- Tools must read schema identity, parentage, origin, validation contract, inheritance, and generation rules from the artifact itself, not from the path alone.

## Identity Convention

Continuity Integrity fingerprints are durable references to the representations or continuity targets they verify. A content-derived fingerprint may change when the covered representation changes, so it is not automatically an immutable logical artifact identity across revisions or materializations.

Human labels, local anchors, and provisional handles may support authoring, forms, UI actions, migration, and prechecksum references, but they must not silently become global identity. Avoid durable sequential identifiers when a checksum/fingerprint already provides the needed durable reference to a concrete representation.

This distinction matters for schema contracts, annotations, transitions, relations, edits, and generated artifacts. Logical continuity across changing representations must not be inferred from fingerprint equality or difference alone.

## Why The Path Is Not The Authority

A folder is useful for humans and tooling, but Tiinex continuity must remain portable. A schema artifact should still be understandable if copied, archived, printed, mirrored, or read by a non-browser tool. The authoritative continuity signals remain inside the artifact:

- Continuity Context
- Parent
- Current Schema
- Origin
- Schema Validation Contract
- Artifact Creation Contract
- schema.contract / section / field / rule / generation / inheritance nodes where present
- Continuity Integrity when present

## Ordinary Field Ownership

For ordinary field groups inside a schema's `Schema Validation Contract`, Root normally maps contract group `G` to the exact same-name Artifact block `## G`.

That same-name mapping is Root machine authority, not a Tooling or site convention. Schema authors therefore do not need to repeat obvious target metadata.

Use `Instance Target` only for a real one-heading exception:

```text
### Deferral Surface

Instance Target
- `## Deferral`
```

If one contract idea spans several Artifact blocks, keep the machine contract local by splitting or re-aligning the groups to those readable blocks. Do not build multi-target lists merely to preserve an umbrella contract heading.

Optional target blocks remain optional: their Required Fields become required when the block is present, not merely because the field group exists.

## Discovery And Navigation

The schema tree is the discoverable inventory. Do not maintain a second per-schema catalog in this README.

- Viewer and Tooling should enumerate current `*.schema.md` material directly from the qualified `.topics/.schemas` tree.
- A schema may be added, moved within its qualified family placement, or reduced without requiring a README edit merely to keep navigation complete.
- Human navigation should prefer family/directory structure plus artifact identity projected by Tooling/Viewer rather than a manually synchronized link list.
- Generated indexes are allowed when useful, but they are derived navigation surfaces and must not become schema authority.
- A cold LLM should recover schema families from the carried tree and schema artifacts, not from a hand-maintained README manifest.

## Maintainer Rule

Update this README only when the **schema-directory convention itself** changes: for example family-placement rules, identity semantics, path-authority boundaries, or discovery behavior. Do not update it for ordinary schema additions/removals whose artifacts already carry the required semantics.

Future or reserved schema names should be established by qualified schema/Decision material when they become meaningful; this README is not a reservation registry.
