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
  - Created At: 2026-10-14 00:30:29
  - Authors: ChatGPT
  - Why: Explain the existing Business coordination pattern without mandating an organization for every personal project.
  - Summary: Connect organization, projects, workspaces, Roles and cross-workspace parents through verified sources.
  - Status: ready/local

---

# Organizations and Multi-Workspace Work

A small project often needs only one work folder. Larger work may need multiple teams, tools or repositories. Tiinex can keep those parts connected **without storing everything in one Workspace**.

## A useful separation

- **Organization** represents an organizing party or boundary; it is not merely a folder name.
- **Project** expresses an outcome that may take multiple tasks and cross multiple repositories.
- **Task** describes a bounded piece of work.
- **Workspace** is a qualified view and source boundary over actual project material. A repository can own its own work without owning the whole organization.
- **Role** expresses responsibilities or capabilities. A Role link does not by itself prove the identity of its current holder.

Use the qualified schema catalog to find the current contracts for Organization, Project, Task and Role. Do not require all four for a personal notebook.

## The Business example

Tiinex's Business Workspace coordinates organizational identity and long-lived Projects. Docs owns its own documentation source. A Docs Topic can have a real, qualified Parent in Business where that relationship is meaningful. This is **cross-Workspace ancestry**, not copy-pasting Business's hierarchy into Docs.

For a published Parent outside the current Workspace, use an immutable commit-pinned source link and verified exact Parent bytes in the tooling-supported authoring path. If the new Parent is unpublished and cross-Workspace qualification requires public immutable bytes, stop at the publication boundary instead of inventing an external reference.

## Build progressively

A person might start by organizing work locally, then establish a Project, later add other Workspaces or participants, and only then introduce clearer Role and Process divisions. Decide what to represent from the actual coordination need, not the catalog's size.

## Keep ownership honest

A Project reference is not a grant to write to another repository. A participant listed as an Author is not automatically the assigned Role holder. A qualified Handoff is distinct from the mere transfer of a ZIP file. See [Handoffs and recovery](001-4-handoffs-and-recovery.trace.md).

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-guides.trace.md](001-guides.trace.md)
  - Value: c-sDPJitsVEuQDZ5pONI9ETdtCFdRQbtj-Go7CVFPRA

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: UD_lPQowird0OakQjDZ_lr3yHTJSd6FXt8WKhXxshKE