# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-14 00:30:24
  - Trace: [001-guides.trace.md](001-guides.trace.md)
  - Origin:
    - [relative](001-guides.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-14 00:30:57
  - Authors: ChatGPT
  - Why: Let teams add new schema types, Entries or integrations without creating a duplicate documentation authority.
  - Summary: Follow the maintained schema-development and content-source import procedures for genuinely new capabilities.
  - Status: ready/local

---

# Extending Tiinex

Tiinex is designed to be extended. You may eventually need to describe something that no currently qualified artifact type expresses, or you may want a new way to begin a session.

## Before creating anything new

Search the active schema catalog and companion help. Check existing Entries, Processes and Scaffolds. A missing page in this manual does **not** mean a capability is missing. If an existing type fits, use it rather than inventing a similar schema.

## Creating a new artifact type

Describe the problem the new type solves and who owns its semantics. Follow the **maintained schema-development process in Docs** for placement, contract definition, companions, validation and qualification. Import the accepted schema into the intended qualified content-source/bootstrap composition through the existing supported import mechanism. Verify it then appears in runtime discovery and can be used in a preflight; manual prose alone does not install it.

A sample board-game playtest type can be useful for experimentation, but should never become a hardcoded built-in requirement just because a tutorial once used it.

## New Entries, Processes and host adapters

An Entry answers how to approach a bounded session purpose; a Target describes the environment where it runs. A Process describes reusable work semantics and must be independently applicable. A VS Code or ChatGPT adapter presents the same qualified guidance through its host: it does not get to rewrite the portable meaning. Find the precise contracts for these types through the selected catalog before authoring.

## Keep the system teachable

Write one human-first explanation of the approach. Keep specific fields and constraints in the source schemas/companions. Test both the imported capability and a fresh consumer discovering it *without knowing its name in advance*. If discovery fails, fix that seam rather than adding more static guide pages.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-guides.trace.md](001-guides.trace.md)
  - Value: c-sDPJitsVEuQDZ5pONI9ETdtCFdRQbtj-Go7CVFPRA

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: zBENw-U3bOyCp4SLF4rrx9DQIG3qBJcW9RrxuGJGVWM