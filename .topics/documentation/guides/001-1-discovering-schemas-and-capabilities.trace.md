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
  - Created At: 2026-10-14 00:30:27
  - Authors: ChatGPT
  - Why: Explain generic discovery for both registered and newly imported schema types without duplicating their rules.
  - Summary: Learn to search qualified capabilities, inspect schema and companion help, and choose by user intent.
  - Status: ready/local

---

# Finding the Right Tiinex Capabilities

You can ask your assistant *“What can help me keep track of this?”* without learning the names of Tiinex record types. The assistant should consider your goal and explain only the choices that genuinely help.

## Why discovery matters

The available record types depend on the qualified Tiinex environment. A team might import its own schema for playtests or field observations. A manual listing only built-in names would miss that capability. Instead, the assistant must discover the current registered definitions and inspect the selected schema's companions.

## When helping a person

1. Start with their intention: a lasting goal, next action, observation, repeated method, shared responsibility, or something else.
2. Check which qualified record types and reusable guidance are actually available through the current host and Tiinex environment.
3. Explain the few relevant options in everyday language, including why not creating a record might be reasonable.
4. If the person agrees to preserve ongoing work, use schema-based validation and correct Parent/source relationships rather than copying a familiar example.
5. Be explicit about what was actually saved, what was only suggested, and what can be recovered later.

## Technical boundary for assistants

Use the host-supported qualified capability catalog and schema/companion interfaces, not a static list from these guides. Confirm that an imported type is genuinely present and qualified in the current composition. A name or summary is not the complete contract. Availability is not applicability, identity, authority, or permission to publish.

VS Code and viewers may present the same content visually; a chat assistant may use other supported mechanisms. The person should not be required to open a terminal to follow this guide. If no suitable qualified contract is accessible, say so rather than invent one.
---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-guides.trace.md](001-guides.trace.md)
  - Value: c-sDPJitsVEuQDZ5pONI9ETdtCFdRQbtj-Go7CVFPRA

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: AMTV_CSrgZsuIqtHSWY7Hzx_cE6mQxzcMhgNKey4Eds