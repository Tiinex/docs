# Process

This file describes the local working process for turning the lineage
into a more RFC-editor-friendly drafting shape.

Read order:

1. lineage
2. `policy.md` if present
3. this file
4. support files on demand

## 1. Ground From Lineage

Start from the current local continuity node, not from memory.

Read:

- [../001.trace.md](../001.trace.md)
- [../001-1.trace.md](../001-1.trace.md)

If `policy.md` exists, read it before drafting. Treat it as a local
interpretive frame, not as a replacement for lineage.

Extract only four things first:

1. what problem the document is solving
2. what continuity rule or model is being proposed
3. what is still explicitly open
4. what examples or references are carrying real weight

Do not start by copying large trace bodies into the draft.

## 2. Separate Roles

Keep these layers distinct while drafting:

- lineage and continuity
- local policy or local rules if they exist
- process and working method
- continuity envelope rules
- RFC-style document structure
- examples and operational procedure
- open design questions

If those layers collapse into each other, the draft becomes harder to
edit and harder to publish cleanly.

## 3. Draft The Smallest Coherent RFC Shape

Use the outline in [outline-template.md](outline-template.md).

Aim for a compact draft that can answer:

1. what this document defines
2. why the model is needed
3. what the minimum required fields or relations are
4. what remains optional

Do not force a local policy section into the draft unless the topic
really needs one.

Defer large example catalogs and side discussions into appendices or
separate support files when possible.

## 4. Make The Body Human First

The lineage can stay trace-oriented while the draft body becomes more
editor-friendly.

That usually means:

- shorter sections
- fewer competing taxonomies per section
- one preferred term for each concept
- references used as support, not as the main carrier of meaning

## 5. Run A Style Pass Late

Do not over-optimize boilerplate too early.

After the argument is stable, run the RFC Editor pass:

- title and category discipline
- section naming consistency
- citation style consistency
- HTTPS URIs where possible
- abbreviation and terminology cleanup
- consistency with `policy.md` if it exists

Use [checklist.md](checklist.md) for the final pass.