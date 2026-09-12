# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.handoff.v1](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.schemas/coordination/handoff/tiinex.handoff.v1.schema.md)
  - Created At: 2026-09-12 12:51:42
  - Trace: [001-1-1-1-1-anchor-to-axiom-docs-major-007-minimal-carrier-material-recipient-semantics-handoff.trace.md](handoffs/001-1-1-1-1-anchor-to-axiom-docs-major-007-minimal-carrier-material-recipient-semantics-handoff.trace.md)
  - Origin:
    - [relative](handoffs/001-1-1-1-1-anchor-to-axiom-docs-major-007-minimal-carrier-material-recipient-semantics-handoff.trace.md)
- Current
  - Current Schema: tiinex.decision.v1
  - Created At: 2026-09-12 13:16:41
  - Authors: Axiom
  - Why: Resolve Major 007 without fake Workspaces, inferred recipients or opaque host-side semantic artifacts.
  - Summary: Accept bootstrap-only carriers, qualified complete/bounded material carriage and Handoff-only recipient projection inside the existing package V1 contract.
  - Status: ready/local

---

# Minimal Carrier, Material Carriage, And Recipient Semantics Decision

The canonical carrier contract now separates bootstrap capability, source-material carriage, and Handoff recipient delivery so none must be invented merely to satisfy another layer.

## Decision

- State: accepted
- Subject: `tiinex.handoff.package.v1` minimal-carrier, qualified-material, Role-presence, recipient and transport-projection semantics
- Decision: keep these semantics inside the existing Handoff Package V1 contract as one prospective repair rather than introduce a new package schema or special semantic sidecar.
- Bootstrap-only role: add `Package Role: recipient-facing-bootstrap-carrier`. It carries qualified Start plus portable Tooling bootstrap, zero Workspace Snapshot Bindings, zero Material Representation Bindings and zero Handoff routes. This proves only carrier/bootstrap qualification; it does not prove Role identity, recipient identity, holder binding, work authority, project/organization context, Handoff acceptance, current work or grounded-to-act readiness.
- Direct complete-Workspace role: preserve the package-local Workspace Snapshot Binding shortcut as complete-only. Clear and password-sealed complete bindings remain valid under their existing owners; bounded/partial material must not be squeezed into this shortcut.
- Generic material carriage: add `Material Representation Bindings` that select qualified `tiinex.workspace.representation.v1` artifacts. The representation may be `complete` or intentionally `bounded`; its Workspace Artifact, External Payload, exact payload bytes, scope/correlation and provider qualification remain owned by the existing Workspace Representation/External Payload contracts.
- Pointerless material role: retain `recipient-facing-workspace-carrier` as the route-less carrier role for one or more qualified Workspace-scoped material bindings, whether supplied by direct complete Workspace Snapshot Bindings, generic complete/bounded Material Representation Bindings, or both.
- Handoff route carriage: `recipient-facing-handoff-carrier` still owns one explicit selected route. The authoritative Handoff target must be visible through clear qualified carried source material, either a clear verified complete Workspace Snapshot Binding or a verified clear Material Representation Binding whose qualified scope contains that exact Handoff artifact.
- Role carriage boundary: a Role or other artifact present inside carried qualified material remains context/material only. Presence does not create recipient, participant, holder, consent, delegation, organization membership, responsibility, work ownership or acceptance.
- Recipient boundary: concrete delivery/recipient projection may come only from the exact qualified selected Handoff `To` endpoint/capacity semantics. Package sender/receiver, Role presence, Workspace identity, repository, filename, route name, UI account and transport destination are non-authoritative for recipient identity.
- Transport-text boundary: every package may project generic human transport text from the exact Start Artifact. Only a Handoff carrier may additionally project route-specific Continue-From text and recipient labeling. These are projections of existing authoritative artifacts, not new Tiinex artifacts or required JSON/host manifests.
- Package cleanliness: recipient-facing package truth remains human-readable Markdown artifacts plus declared payloads. Generated inventories, file maps, UI queue state and host-private JSON may support mechanics only and never become required top-level semantic authority.
- Historical boundary: existing/pinned historical package artifacts remain byte-preserved under the exact schema authority they already declare. This decision is prospective and does not rewrite prior carrier bytes.

## Basis

- The current package contract forces one or more complete Workspace bindings even when the real semantic job may be only qualified Start/bootstrap. A fake Workspace would create false material context, while a fake Handoff or recipient would create stronger false authority.
- `tiinex.workspace.representation.v1` already owns the exact non-Parent relation needed for complete or intentionally bounded Workspace-scoped byte-tree representations, including bounded scope and provider qualification. Reusing that contract avoids duplicating or weakening representation semantics in Handoff Package.
- `tiinex.party.role.v1` and `tiinex.handoff.v1` already keep Role identity/holder state and Handoff endpoints/transfers separate. Package carriage must compose those owners rather than infer endpoint meaning from material presence.
- The existing Start/bootstrap convention already provides one qualified cold-entry surface. Making generic transport text a projection of that surface preserves human-readable delivery without adding a hidden source of truth.
- Core Major 008 is the correct mechanical follow-on for bounded Handoff-carrier recipient closure; implementation constraints do not justify retaining a semantically false one-or-more complete Workspace requirement.

## Consequences

- Docs/Axiom: `tiinex.handoff.package.v1` is updated prospectively with the bootstrap-only Package Role, generic Material Representation Bindings, clear-route material rule and generic/route-specific Transport Projection contract. No new schema family is introduced.
- Core/Loom: manufacture/orient/validate/project transport must implement the three package roles, explicit `none` binding sections, generic Workspace Representation carriage, selected-route containment through clear qualified material, Start-only generic transport text and Handoff-only recipient projection. Core must fail closed rather than fabricate Workspace or recipient state.
- Extension VS Code/Kodax: Transport may show package-level actions such as Copy Package, Copy Transport Text and Close without recipient child rows. Recipient rows appear only for qualified Handoff routes and use Core-projected Handoff endpoint truth; the host does not invent private package roles or sidecar authority.
- Anchor: reconcile the Docs result with Core Major 008 and only then route host presentation work. Fixed Major scopes and human acceptance boundaries remain unchanged.
- No change is required to Role, Handoff, Pointer, Workspace Representation, External Payload or Transport Envelope schema semantics from this decision.

## Review Conditions

- Reopen canonical semantics only if implementation demonstrates a real conflict that cannot be expressed by the existing package/Workspace Representation/Handoff owners without false authority.
- Protected generic bounded-material carriage remains outside this repair unless a later explicit contract is needed; the existing password-sealed direct complete Workspace binding remains unchanged.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-1-anchor-to-axiom-docs-major-007-minimal-carrier-material-recipient-semantics-handoff.trace.md](handoffs/001-1-1-1-1-anchor-to-axiom-docs-major-007-minimal-carrier-material-recipient-semantics-handoff.trace.md)
  - Value: k4zSGXV7LzQk6YB5CeDRexLdsHoYwCACYJUsVvaiDUQ

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: lO_KkIIXwST08FUPg06hurSHlpd-oKEGa9CrfA3ZrUQ