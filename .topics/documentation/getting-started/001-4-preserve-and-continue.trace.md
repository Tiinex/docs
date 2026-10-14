# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-14 00:30:05
  - Trace: [001-getting-started.trace.md](001-getting-started.trace.md)
  - Origin:
    - [relative](001-getting-started.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-14 00:30:20
  - Authors: ChatGPT
  - Why: Teach the difference between a download, a qualified Workspace checkpoint and an actual work transfer.
  - Summary: Keep usable files and bounded work context recoverable without relying on chat memory.
  - Status: ready/local

---

# Save Your Progress and Continue Later

If you have made something you want to return to, just ask: *“Can you save our progress so we can pick this up another day?”* You do not need to request a specific file format or Tiinex operation.

## What should be kept?

- **The result:** usable files, such as your game board, rules, or source code.
- **The important context:** what you decided, what remains uncertain, and the next useful step.
- **The project relationship:** when a qualified Workspace is in use, which material belongs to it and what its verified lineage allows a future session to continue.

If you need only a copy of the final file, a normal export may be enough. If you intend to continue a project, ask the assistant to preserve the Workspace context as well. A true transfer of responsibility is a separate step and needs its own authority; an attached ZIP does not assign a recipient.

## Returning another day

Keep the package somewhere you can find it. In a new chat, attach the saved package and say *“I'd like to continue this project. Where did we leave off?”* The assistant should verify what it can actually recover and tell you what is established and what remains unknown.

**For assistants:** When the host supports qualified Workspace carriers or Handoff Packages, preserve the exact relevant files and source relationships using the available transport mechanism. Never substitute detached patches or a promise of chat memory for the complete required continuation. If the host cannot make such a package, state the limitation. Archive integrity is not a claim that content was accepted, finished, or published.

More detail: [Handoffs and recovery](../guides/001-4-handoffs-and-recovery.trace.md).
---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-getting-started.trace.md](001-getting-started.trace.md)
  - Value: 48Mb3d2EpoyUTjFTOd0IfQtBaPHVrbRYYGMWCqKH-Vs

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: xo27f-EKCtLlBnRjdX_QfCt3wCUflQwkL14rbCaZ4KE