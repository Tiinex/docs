# Continuity Context

- Envelope Schema: [tiinex.root.v1](../../../tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.root.v1](../../../tiinex.root.v1.schema.md)
  - Created At: 2026-09-01 14:19:00
  - Trace: [tiinex.root.v1.schema.md](../../../tiinex.root.v1.schema.md)
  - Origin:
    - [relative](../../../tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.handoff.package.v1](tiinex.handoff.package.v1.schema.md)
  - Created At: 2026-09-01 14:19:00
  - Authors: Axiom, Anchor
  - Repairs:
    - Password-sealed Workspace carriage
      - Target: Core Semantics / Workspace Snapshot Bindings / Route Discovery / Qualification Boundary
      - Note: Adds one sealed binding mode that composes External Payload and Transport Envelope authority, keeps protected Workspace internals opaque to the carrier, and requires the authoritative selected Handoff route Workspace to remain clear in V1.
      - Reason: Accepted secure-transport V1 semantics require independently protected Workspaces without moving cryptographic profile or recipient-slot meaning into Handoff Package.
  - Summary: Narrow receiver-facing carrier schema for package identity, Start/bootstrap exposure, clear verified or password-sealed complete Workspace carriage, explicit Handoff-route or pointerless Workspace-carrier mode, and carrier continuity without owning Handoff transfer, cryptographic profile, or generic Workspace representation semantics.

---

# Handoff Package

- Status: maintained schema note

## Summary

Defines one receiver-facing carrier identity and discovery contract with two explicit Package Roles: an exact Handoff-route carrier and a pointerless complete-Workspace carrier. A carried Workspace may use either the existing clear verified complete-snapshot shortcut or a password-sealed complete representation whose ciphertext and open semantics remain under separate owners.

`tiinex.handoff.package.v1` owns only the semantic facts that belong to the carrier itself: how a recipient enters the carrier, how carried Workspace representations are bound to explicit Workspace artifacts at the carrier boundary, which carrier mode is declared, how Handoff route discovery is expressed when that mode selects a Handoff, and how carrier convenience lineage is represented. It does not own protected payload bytes, cryptographic profile metadata, recipient slots, password recovery, or post-open Workspace semantic qualification.

Despite its namespace, this schema is not a specialization of `tiinex.handoff.v1`. It does not transfer work or responsibility. It is also not a specialization of `tiinex.semantic.package.v1`, whose maintained job is portable schema and Transition discovery.

## Core Semantics

- Handoff Package = one recipient-facing carrier identity/discovery boundary with one explicit carrier role: exact Handoff-route transport or pointerless complete-Workspace transport.
- In `recipient-facing-handoff-carrier` mode, the authoritative Handoff remains a `tiinex.handoff.v1` artifact in its owning Workspace; carrying or pointing to it does not duplicate or replace Handoff semantics.
- In `recipient-facing-workspace-carrier` mode, the package selects no Handoff route and creates no Handoff transfer, endpoint, recipient-capacity, current-work, acceptance, completion, or continuation semantics.
- The authoritative Workspace remains a `tiinex.workspace.v1` artifact. A package-local snapshot is a representation of that Workspace's source bytes, not the Workspace artifact itself.
- A Handoff Package may directly bind a carried Workspace artifact to one exact package-local complete Workspace snapshot when the relation exists only for this carrier and the package schema owns all qualification rules needed to re-establish that binding from the package bytes.
- That package-specific binding is not a `tiinex.workspace.representation.v1` artifact and does not activate generic Workspace Representation authority outside this carrier.
- A standalone `tiinex.external.payload.v1` artifact is not required for the same package-local Workspace snapshot when no independent payload identity, location, access, retention, or recovery semantics need to survive apart from the package binding.
- A standalone `tiinex.workspace.representation.v1` artifact is not required for the same package-local complete snapshot when no independently selectable representation relation, bounded scope, multiple-representation choice, external provider contract, or separate representation lifecycle needs to survive apart from the package binding.
- Generic External Payload and Workspace Representation schemas remain authoritative wherever those independent semantic jobs exist.
- A password-sealed Workspace binding always has independent payload access/recovery and cryptographic open semantics. Its ciphertext bytes therefore remain under `tiinex.external.payload.v1`, while deterministic non-secret profile, password-recipient-slot, open/recovery, and authentication semantics remain under `tiinex.transport.envelope.v1`.
- A sealed carrier binding may qualify as a carrier-level statement that one protected complete Workspace representation is present, but it never qualifies or activates the protected Workspace source provider while locked.
- Multiple protected Workspaces in one carrier remain independently protected: each has its own Transport Envelope, content key, protected payload, and recipient-slot set.
- In V1 Handoff-carrier mode, the Workspace containing the authoritative selected Handoff route remains clear and verified. The package must not expose or infer a selected route through protected Workspace bytes.
- Package-local `Parent` lineage among carrier artifacts may be intentionally manufactured as recipient continuity/navigation. Its semantic subject is the carrier artifact sequence only; it does not rewrite source-artifact Parent, Origin, ownership, authority, Role hierarchy, Handoff endpoints, or participation.
- Package-local Role Pointers, when Handoff-carrier mode exposes them on the selected route closure, are discovery/grounding aids only. Handoff endpoint and participation meaning remains owned by the authoritative Handoff and any separately authoritative typed Relation.
- In Handoff-carrier mode, Workspace placement of a Handoff Pointer is route-resolution navigation: it identifies the Workspace from which the authoritative Handoff is to be resolved, not ownership or authority beyond that resolution fact.
- In Workspace-carrier mode, authoritative Handoff artifacts may exist incidentally inside a carried complete Workspace snapshot, but package membership does not select, activate, or imply any such Handoff.
- Package membership, path, filename, adjacency, archive entry order, digest equality, or successful transport do not by themselves create semantic authority.

## Schema Validation Contract

### Handoff Package Scope

Applies To

- artifacts whose `Current -> Current Schema` is `tiinex.handoff.package.v1`

Rules

- `tiinex.handoff.package.v1` identifies artifacts whose main job is to declare one recipient-facing carrier and its bounded Workspace binding plus explicit Handoff-route-or-pointerless discovery contract.
- The package artifact must remain human-readable without a hidden compatibility manifest, application-local state, repository search, or manual archive archaeology.
- The package artifact must not become an exhaustive file inventory, verification receipt, Handoff duplicate, Workspace duplicate, generic workflow engine, or general transport ontology.
- Prose outside `Schema Validation Contract` may explain the package but does not add machine requirements.

### Handoff Package Body

Required Shape

- first body heading after the continuity envelope
- `## Package Identity` section
- `## Bootstrap Exposure` section
- `## Workspace Snapshot Bindings` section
- `## Route Discovery` section
- `## Carrier Continuity` section
- `## Qualification Boundary` section
- `## Interpretation Limits` section

Optional Sections

- Evidence Basis
- Related Artifacts
- References

Rules

- Required sections must be readable and machine-extractable.
- `Workspace Snapshot Bindings` uses repeated named declarations.
- The body must not reproduce the authoritative Handoff body, Workspace body, Role body, or an exhaustive archive/file map.

### Package Identity

Required Fields

- Package Role
- Carrier Kind

Field Value Constraints

- Package Role
  - Allowed Value: recipient-facing-handoff-carrier
  - Allowed Value: recipient-facing-workspace-carrier
  - Domain Policy: closed
- Carrier Kind
  - Allowed Value: self-contained
  - Domain Policy: closed

Rules

- `Package Role: recipient-facing-handoff-carrier` means the package exposes one explicit selected Handoff route and retains exact Handoff-route semantics.
- `Package Role: recipient-facing-workspace-carrier` means the package carries one or more qualified complete Workspace snapshots for recipient inspection or landing without selecting any Handoff route.
- `Carrier Kind: self-contained` means every material source byte required by the declared carrier mode is carried by the package according to the package's explicit bindings and, in Handoff-carrier mode, selected-route closure rules.
- Package Role is carrier semantics only. Neither role creates Handoff transfer, endpoint, acceptance, completion, Workspace identity, current-work, or Role-holder authority.
- Package identity does not create identity for contained Workspace, Handoff, Role, Pointer, or other source artifacts.

### Bootstrap Exposure

Required Fields

- Start Artifact
- Tooling Bootstrap Descriptor
- Bootstrap Rule

Field Value Constraints

- Start Artifact
  - Allowed Shape: Markdown Link
  - Domain Policy: closed
- Tooling Bootstrap Descriptor
  - Allowed Shape: Markdown Link
  - Domain Policy: closed
- Bootstrap Rule
  - Allowed Value: start-then-qualified-bootstrap
  - Domain Policy: closed

Rules

- `Start Artifact` must resolve to the package-local recipient ingress artifact, ordinarily a `tiinex.pointer.v1`.
- `Tooling Bootstrap Descriptor` must resolve to the package-local artifact that owns the Tooling bootstrap payload reference and exact bootstrap-payload integrity, ordinarily `tiinex.external.payload.v1`.
- The package schema does not absorb bootstrap payload semantics merely because the bootstrap bytes are carried inside the package.
- `Bootstrap Rule: start-then-qualified-bootstrap` means a cold recipient reads Start first, qualifies the declared bootstrap descriptor/payload, then transfers semantic package interpretation to the qualified Tooling path before following the selected route.

### Workspace Snapshot Bindings

Declaration Shape

- First-Level Hyphen List Item

Common Required Fields

- Workspace Id
- Workspace Artifact
- Snapshot Kind
- Coverage
- Binding State

Clear-Snapshot Required Fields

- Snapshot Path
- Workspace Artifact Inner Path
- Integrity Method
- Integrity Value

Sealed-Snapshot Required Fields

- Protected Payload Descriptor
- Transport Envelope
- Protection State
- Post-Open Correlation Rule

Optional Fields

- Byte Size
- Notes

Field Value Constraints

- Workspace Artifact
  - Allowed Shape: Markdown Link
  - Domain Policy: closed
- Snapshot Path
  - Allowed Shape: Markdown Link
  - Domain Policy: closed
- Protected Payload Descriptor
  - Allowed Shape: Markdown Link
  - Domain Policy: closed
- Transport Envelope
  - Allowed Shape: Markdown Link
  - Domain Policy: closed
- Snapshot Kind
  - Allowed Value: exact-workspace-byte-tree-archive
  - Allowed Value: password-sealed-workspace-byte-tree
  - Domain Policy: closed
- Coverage
  - Allowed Value: complete
  - Domain Policy: closed
- Binding State
  - Allowed Value: verified
  - Allowed Value: sealed
  - Allowed Value: declared
  - Allowed Value: unresolved
  - Domain Policy: closed
- Integrity Method
  - Allowed Value: sha256
  - Domain Policy: closed
- Protection State
  - Allowed Value: password-sealed
  - Domain Policy: closed
- Post-Open Correlation Rule
  - Allowed Value: unique-exact-workspace-artifact-byte-match
  - Domain Policy: closed

Rules

- `Workspace Id` is a package-local readability/routing handle. It does not replace the Workspace artifact as semantic Workspace identity.
- `Workspace Artifact` must resolve to exactly one carried artifact whose Current Schema is `tiinex.workspace.v1`.
- `Coverage: complete` is required in both binding modes. `bounded`, `partial`, and `unknown` are not allowed in this package-local carrier contract.
- `Snapshot Kind: exact-workspace-byte-tree-archive` preserves the existing clear direct-binding shortcut. It requires `Snapshot Path`, `Workspace Artifact Inner Path`, `Integrity Method`, and `Integrity Value`; it forbids the sealed-only fields.
- In clear mode, `Snapshot Path` must resolve to one package-local payload entry containing the exact complete Workspace byte-tree snapshot for this binding. External URLs and inferred filenames are not allowed.
- In clear mode, `Workspace Artifact Inner Path` is the exact normalized Workspace-relative path at which the bound Workspace artifact must occur inside the snapshot.
- In clear mode, `Integrity Method: sha256` and `Integrity Value` identify the exact package-member bytes at `Snapshot Path`. `Integrity Value` must be a lowercase 64-character hexadecimal SHA-256 digest.
- In clear mode, `Binding State: verified` is valid only when exact snapshot bytes, safe decoding, normalized path mapping, complete coverage, and exact Workspace-artifact inner-byte correlation have qualified. A receiver must requalify these facts from the carried bytes; the state is not a transport receipt or acceptance proof.
- In clear mode, the archive root is fixed at `.`, Workspace-relative paths map by normalized identity-relative paths, and unsafe, absolute, traversal, duplicate-normalized, or ambiguous entries must fail qualification. Exact equality between the carried `Workspace Artifact` bytes and the entry at `Workspace Artifact Inner Path` is required.
- A verified clear package-local complete binding may activate only the package recipient's complete Workspace source provider for this exact carrier snapshot.
- `Snapshot Kind: password-sealed-workspace-byte-tree` declares a protected complete Workspace representation. It requires `Protected Payload Descriptor`, `Transport Envelope`, `Protection State`, and `Post-Open Correlation Rule`; it forbids `Snapshot Path`, `Workspace Artifact Inner Path`, `Integrity Method`, and `Integrity Value` so the package neither leaks protected internal paths nor duplicates ciphertext location/integrity authority.
- In sealed mode, `Protected Payload Descriptor` must resolve to exactly one carried artifact whose Current Schema is `tiinex.external.payload.v1`. That artifact remains the owner of protected payload identity, location, exact stored bytes, integrity, access, and recovery facts.
- In sealed mode, `Transport Envelope` must resolve to exactly one carried artifact whose Current Schema is `tiinex.transport.envelope.v1`. The envelope must reference the same `Workspace Artifact` and the same protected External Payload and its Workspace Binding Value must requalify against the exact visible Workspace Artifact bytes.
- `Protection State: password-sealed` and `Binding State: sealed` qualify only the carrier-level fact that one protected complete-intent representation and its opening contract are present. They do not qualify decrypted Workspace bytes and must leave the Workspace source provider inactive while locked.
- `Coverage: complete` on a sealed binding is the declared scope of the protected plaintext representation. It is not receiver verification of the hidden tree before authorized open.
- A sealed binding must expose no protected Workspace filename, directory, inner artifact path, path mapping, tree inventory, or plaintext byte facts in the outer carrier.
- `Post-Open Correlation Rule: unique-exact-workspace-artifact-byte-match` requires an authorized receiver, after successful authenticated open, to locate exactly one decrypted archive entry whose bytes exactly equal the visible `Workspace Artifact` bytes. Zero matches and multiple matches fail closed. Only after that unique match may its internal path be derived.
- After the unique post-open correlation succeeds, safe decoding, normalized path rules, complete coverage, ordinary Workspace representation/source qualification, schema validation, and integrity checks still apply before the Workspace provider becomes ready. Successful decryption alone is insufficient.
- `Binding State: verified` is invalid for sealed mode and `Binding State: sealed` is invalid for clear mode. `declared` and `unresolved` preserve prequalification states but do not satisfy a qualified Handoff carrier.
- `Byte Size`, when present, is a mechanical consistency aid only and does not replace exact byte integrity. For sealed mode, exact protected-payload size belongs to the External Payload unless the package repeats size only as a non-authoritative consistency aid.
- Each sealed Workspace binding is independent. One Transport Envelope, content key, password slot, or successful open must not grant or imply access to another protected Workspace binding.
- The clear direct-binding shortcut must not be exported, cached, or re-described as a generic `tiinex.workspace.representation.v1` relation unless that generic relation is separately materialized and qualified.
- Generic External Payload and Workspace Representation authority remains unchanged outside this carrier. If the Workspace-to-representation relation needs independent lifecycle, selection, bounded scope, multiple-representation choice, or generic provider authority beyond this package, materialize and qualify `tiinex.workspace.representation.v1` in addition to any required payload authority.

### Route Discovery

Required Fields

- Route Placement Rule
- Continue-From Rule
- Pre-Handoff Closure Rule

Field Value Constraints

- Route Placement Rule
  - Allowed Value: authoritative-workspace-descended
  - Allowed Value: none
  - Domain Policy: closed
- Continue-From Rule
  - Allowed Value: exact-package-local-handoff-pointer
  - Allowed Value: none
  - Domain Policy: closed
- Pre-Handoff Closure Rule
  - Allowed Value: selected-pointer-carrier-ancestors
  - Allowed Value: none
  - Domain Policy: closed

Rules

- `Package Role: recipient-facing-handoff-carrier` requires the exact triplet `Route Placement Rule: authoritative-workspace-descended`, `Continue-From Rule: exact-package-local-handoff-pointer`, and `Pre-Handoff Closure Rule: selected-pointer-carrier-ancestors`.
- `Package Role: recipient-facing-workspace-carrier` requires the exact triplet `Route Placement Rule: none`, `Continue-From Rule: none`, and `Pre-Handoff Closure Rule: none`.
- Mixed Route Discovery triplets are invalid and fail closed.
- In Handoff-carrier mode, `Route Placement Rule: authoritative-workspace-descended` means a package-local Handoff Pointer route is placed below the packaged Workspace whose clear verified source snapshot contains the authoritative Handoff target.
- In Handoff-carrier mode, the Workspace containing the authoritative selected Handoff target must use `Snapshot Kind: exact-workspace-byte-tree-archive` with `Binding State: verified`. A password-sealed Workspace must not satisfy route placement or Continue-From discovery in V1.
- In Handoff-carrier mode, `Continue-From Rule: exact-package-local-handoff-pointer` means the recipient is given one exact package-local Handoff Pointer path or an explicit qualified selection among such pointers. The route must not name, expose, guess, or defer an internal path inside protected payload bytes.
- In Handoff-carrier mode, `Pre-Handoff Closure Rule: selected-pointer-carrier-ancestors` means route-specific material required before following the authoritative Handoff must be discoverable on the selected pointer's carrier-local ancestor closure.
- Carrier-local ancestor closure is a recipient discovery plan. It does not make ancestor placement semantic participation, delegation, authority precedence, source Parent truth, Required Context meaning, or Handoff endpoint identity.
- Package-local Role Pointers included on that closure remain `tiinex.pointer.v1` artifacts. Their placement permits pre-Handoff grounding only and must not be used to infer participation.
- Required Context may reference another carried Workspace whose package binding is sealed. That dependency remains locked/unresolved until an authorized open succeeds and ordinary post-open qualification completes; the clear authoritative Handoff route itself remains resolvable.
- Carrier-sealed routing, encrypted selected Handoff-route discovery, hidden route manifests, and route inference after decryption are outside V1.
- In Handoff-carrier mode, all other selected-route qualification and Handoff Pointer rules remain unchanged, and the authoritative Handoff target remains the sole owner of Handoff transfer semantics.
- In Workspace-carrier mode, no package-local selected Handoff Pointer route may be exposed. Authoritative Handoff artifacts may exist incidentally inside a carried clear or sealed complete Workspace representation, but package membership does not select or activate them.
- `none` means absence of package-level Handoff route semantics. It must not be interpreted as an unknown Handoff, empty Handoff, implicit current Handoff, deferred route selection, or permission to infer a route later.

### Carrier Continuity

Required Fields

- Carrier Dimension
- Carrier Checkpoint

Optional Fields

- Parent Carrier Dimension
- Major Reason

Field Value Constraints

- Carrier Checkpoint
  - Allowed Value: progression
  - Allowed Value: major
  - Domain Policy: closed

Rules

- `Carrier Dimension` and `Parent Carrier Dimension`, when present, are human progress/retention projections for carriers only.
- Carrier dimensions must be numeric hyphen-separated paths such as `001`, `001-1`, or `001-1-1`; alphabetic lineage components are invalid.
- A child progression extends the parent carrier dimension without advancing or rewriting any contained artifact lineage.
- `Carrier Checkpoint: major` requires a meaningful `Major Reason` and a separately qualified complete source closure required by the governing carrier profile.
- Carrier continuity must not be used to infer or synchronize Root Parent, Trace, Origin, Handoff lifecycle, Workspace identity, or Role authority.

### Qualification Boundary

Required Fields

- Receiver Qualification
- Failure Policy
- Derived Inventory Authority

Field Value Constraints

- Receiver Qualification
  - Allowed Value: reverify-carried-authority-and-bytes
  - Domain Policy: closed
- Failure Policy
  - Allowed Value: fail-closed
  - Domain Policy: closed
- Derived Inventory Authority
  - Allowed Value: none
  - Domain Policy: closed

Rules

- `Receiver Qualification: reverify-carried-authority-and-bytes` requires the recipient to validate the visible package artifacts, every binding's owning byte authority, required source correlation appropriate to that binding mode, and, in Handoff-carrier mode, the selected clear route rather than trusting placement or a sender-side receipt.
- For a clear binding, receiver qualification includes exact snapshot bytes, digest, safe decode, complete coverage, and exact `Workspace Artifact Inner Path` byte correlation as before.
- For a sealed binding, receiver qualification while locked includes the visible Workspace Artifact, External Payload descriptor, exact protected payload bytes and integrity under that descriptor, Transport Envelope metadata, envelope-to-payload/workspace consistency, and Workspace Binding Value. Carrier qualification while locked must not be reported as qualification of the hidden Workspace bytes or source provider.
- After authorized authenticated open of a sealed binding, the receiver must apply the declared unique exact Workspace-artifact byte correlation rule and then ordinary complete Workspace representation, safe-path, schema, and integrity qualification before provider activation.
- Wrong password, unavailable/unsupported declared profile, malformed slot or profile metadata, missing protected bytes, payload-integrity mismatch, authentication failure, truncation, zero/multiple post-open Workspace-artifact matches, unsafe path recovery, or incomplete recovered coverage fails closed.
- A sealed Required Context Workspace that has not completed authorized open and post-open qualification remains unresolved for work that depends on it.
- `Failure Policy: fail-closed` means missing, ambiguous, stale, unsafe, mismatched, locked-required, or unqualified required material blocks the dependent qualification instead of being repaired by filename guessing, repository-global search, hidden network access, compatibility metadata, or secret fallback.
- `Derived Inventory Authority: none` means generated manifests, indexes, checksums, compatibility JSON, file maps, and archive listings may support mechanical verification but do not override the visible semantic artifacts and exact bytes unless another explicit schema grants them authority.
- A checksum match or successful cryptographic authentication does not prove semantic correctness, provenance, authorship, acceptance, participation, or source identity beyond the exact qualified binding facts.

### Interpretation Limits

Required Fields

- Does Not Mean
- Must Not Be Used To Claim
- Generic Payload Boundary
- Generic Representation Boundary

Rules

- `Does Not Mean` must name important interpretations the package does not support.
- `Must Not Be Used To Claim` must name claims requiring separate authority.
- `Generic Payload Boundary` must preserve `tiinex.external.payload.v1` for payload identity/location/integrity/access/recovery semantics that have independent value outside this package-local binding.
- `Generic Representation Boundary` must preserve `tiinex.workspace.representation.v1` for independently meaningful Workspace representation relations, including bounded scope, multiple selectable representations, generic provider activation, or separate relation lifecycle.
- Password-sealed binding semantics must preserve `tiinex.transport.envelope.v1` as the owner of deterministic non-secret cryptographic profile, recipient-slot, open/recovery, and authentication metadata. Handoff Package must not absorb those semantics merely because it carries the envelope and ciphertext.
- Protected ciphertext identity, location, exact stored-byte integrity, access, and recovery facts remain under the referenced `tiinex.external.payload.v1`.
- A Handoff Package must not be used as a Handoff, Workspace, Role, Relation, External Payload, Workspace Representation, preservation record, delivery receipt, acceptance record, provenance record, or generic semantic package.
- Workspace-carrier mode is not a Handoff and does not transfer work or responsibility.
- Workspace-carrier mode does not establish `From`, `To`, recipient capacity, Role holder, acceptance, completion, current Task, current Workspace, or continuation target.
- Package creator, transport sender or receiver, repository actor, selected Workspace, UI account, package membership, Workspace identity, file placement, and surrounding context must not be promoted into Handoff endpoint, Role, current-work, transfer, acceptance, or participation semantics.
- If bounded work or responsibility transfer, Handoff Required Context, recipient Role grounding, or a completion-facing continuation is needed, the operator must create or select a qualified `tiinex.handoff.v1` artifact and use Handoff-carrier mode.
- Package membership and discovery do not prove authority over contained source artifacts.

### File Naming

Recommended Shape

- `<numeric-dimension>-tiinex-handoff-package.trace.md`

Rules

- Package artifact filenames should make the carrier role readable without becoming semantic identity.
- Filename, dimension, and root placement do not replace the Current Schema declaration.

## Artifact Creation Contract

### Creation Scope

Create `tiinex.handoff.package.v1` only when one self-contained recipient-facing carrier needs a durable carrier identity/discovery contract for complete Workspace carriage, using clear verified snapshots and/or password-sealed complete representations, plus either one exact Handoff route or an explicit pointerless Workspace-carrier mode.

Do not create this schema merely because a ZIP exists.

### Required Inputs

- Package Role
- Carrier Kind
- Start Artifact
- Tooling Bootstrap Descriptor
- Bootstrap Rule
- one or more qualified clear or sealed Workspace Snapshot Bindings
- Route Placement Rule
- Continue-From Rule
- Pre-Handoff Closure Rule
- Carrier Dimension
- Carrier Checkpoint
- Receiver Qualification
- Failure Policy
- Derived Inventory Authority
- Interpretation Limits

### Generation Rules

- Keep the package artifact narrow and human-readable.
- Bind only complete Workspace carriage in this v1 contract: either a clear exact complete snapshot or a password-sealed complete-intent representation.
- Preserve the Workspace artifact as semantic Workspace identity.
- For clear direct bindings, preserve the existing package-local snapshot path, inner Workspace-artifact path, and exact snapshot digest shortcut.
- For sealed bindings, require one explicit External Payload descriptor and one `tiinex.transport.envelope.v1` artifact; do not duplicate ciphertext path/integrity or cryptographic profile/recipient-slot fields into Handoff Package.
- Do not expose a protected Workspace's internal path/tree inventory in the outer package. Post-open correlation derives the Workspace artifact's internal path only after a unique exact-byte match succeeds.
- Preserve generic Workspace Representation authority when the relation needs independent lifecycle, selection, bounded scope, multiple representations, or generic provider activation beyond this package.
- Keep bootstrap/cache payload descriptors under their own owning schemas.
- Do not duplicate Handoff parties, transfers, Required Context, Role participation, or Workspace body content.
- Do not materialize receipt/checksum/index artifacts merely because Tooling can compute them.
- In Handoff-carrier mode, require the selected authoritative Handoff route Workspace to remain clear and verified; fail closed when that route cannot be qualified.
- In Workspace-carrier mode, fail closed if a selected Handoff route or package-local Handoff Pointer route is supplied.
- Do not silently switch Package Role because route qualification fails; the declared Package Role controls the intended carrier mode and inconsistent route fields are an error.

## Minimal Example

Mixed clear-route plus sealed Required Context carriage may use this shape:

```md
# Handoff Package

## Package Identity

- Package Role: recipient-facing-handoff-carrier
- Carrier Kind: self-contained

## Bootstrap Exposure

- Start Artifact: [Start](001-1-READ-BEFORE-PROCEEDING.trace.md)
- Tooling Bootstrap Descriptor: [Bootstrap](001-2-bootstrap.trace.md)
- Bootstrap Rule: start-then-qualified-bootstrap

## Workspace Snapshot Bindings

- docs
  - Workspace Id: docs
  - Workspace Artifact: [Docs Workspace](001-2-3-docs.workspace.md)
  - Snapshot Path: [Docs Snapshot](001-2-3-docs-workspace.zip)
  - Workspace Artifact Inner Path: .topics/.workspaces/tiinex-docs.workspace.md
  - Snapshot Kind: exact-workspace-byte-tree-archive
  - Coverage: complete
  - Binding State: verified
  - Integrity Method: sha256
  - Integrity Value: <64 lowercase hexadecimal characters>
- core
  - Workspace Id: core
  - Workspace Artifact: [Core Workspace](001-2-4-core.workspace.md)
  - Snapshot Kind: password-sealed-workspace-byte-tree
  - Coverage: complete
  - Binding State: sealed
  - Protected Payload Descriptor: [Core Protected Payload](001-2-5-core-protected-payload.trace.md)
  - Transport Envelope: [Core Transport Envelope](001-2-6-core-transport-envelope.trace.md)
  - Protection State: password-sealed
  - Post-Open Correlation Rule: unique-exact-workspace-artifact-byte-match

## Route Discovery

- Route Placement Rule: authoritative-workspace-descended
- Continue-From Rule: exact-package-local-handoff-pointer
- Pre-Handoff Closure Rule: selected-pointer-carrier-ancestors

## Carrier Continuity

- Carrier Dimension: 001-1
- Parent Carrier Dimension: 001
- Carrier Checkpoint: progression

## Qualification Boundary

- Receiver Qualification: reverify-carried-authority-and-bytes
- Failure Policy: fail-closed
- Derived Inventory Authority: none

## Interpretation Limits

- Does Not Mean: package membership, successful encrypted open, or carrier qualification is semantic ownership or Handoff participation
- Must Not Be Used To Claim: recipient acceptance, Handoff completion, source provenance, Role authority, or hidden Workspace qualification while locked
- Generic Payload Boundary: protected ciphertext always uses External Payload; clear package-local snapshot bytes need External Payload only when independent payload semantics exist
- Generic Representation Boundary: use Workspace Representation when the Workspace representation relation needs independent, bounded, selectable, or generic provider semantics
```

The selected Handoff route in this example must descend from the clear verified `docs` binding. The sealed `core` binding may satisfy carriage of Required Context only after authorized open and ordinary post-open qualification; its protected internal route/path tree is not visible in the outer carrier.

Pointerless Workspace-carrier mode uses the same required body shape and may mix clear and sealed Workspace bindings, with these exact mode fields:

```md
- Package Role: recipient-facing-workspace-carrier

## Route Discovery

- Route Placement Rule: none
- Continue-From Rule: none
- Pre-Handoff Closure Rule: none
```

That mode exposes no selected package-local Handoff Pointer route and must not infer Handoff endpoints, Role participation, current work, transfer, acceptance, or continuation from package or Workspace context.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: CDnzR0BAKF-cEdyC_a9cYguz95-6nTZLf3JgpbHRX6Q