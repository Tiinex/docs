# Tiinex Repository Boundaries

This is a first-contact implementation map. It does not change semantic authority merely because code or package bytes live in a particular repository.

## Current grounded repositories

- **`Tiinex/docs`** — canonical schemas, validators, semantic contracts, interpretation notes and documentation authority.
- **`Tiinex/business`** — initiatives, Roles, priorities, organizational truth and explicit human gates.
- **`Tiinex/core` / `@tiinex/core`** — shared host-neutral implementation mechanics: artifact/schema runtime interpretation, validation, provenance/lineage, grounding, Handoff/package mechanics, deterministic projections and companion resolution. Core implements Docs contracts; it does not become canonical semantic authority.
- **`Tiinex/app` / `@tiinex/app`** — reusable Viewer/application layer above Core: application data, Viewer, React infrastructure, Verse hosting and reusable host-neutral application composition.
- **`Tiinex/site`** — official thin web deployment over App/Core. Site owns deployment configuration, hosting and deployment-specific providers/overrides, not shared semantic or Viewer implementation.
- **`Tiinex/verse-playthings` / `@tiinex/verse-playthings`** — separately owned experimental Verse package consuming App/Core contracts. Playthings projects Tiinex material; it is not independent Tiinex semantic authority.

## Host/frontier repositories

These names describe intended repository boundaries. Treat implementation as current only after the corresponding Workspace/source is qualified.

- **`Tiinex/cli` / `@tiinex/cli`** — dedicated ordinary command-line host over Core.
- **`Tiinex/interop` / `@tiinex/interop`** — external interoperability surface for assistants, automation environments, external bootstrap experiences and portable tool contracts.
- **`Tiinex/chrome`** — bounded Chrome/browser host over App/Core.
- **`Tiinex/vscode`** — native VS Code host over Core, with Interop consumption where external-assistant/tool exposure is required.

## Bootstrap boundary

`bootstrap` is not one authority category.

- **Core owns carrier/tooling bootstrap mechanics** required for a Tiinex Handoff package to verify and cold-start its portable runtime without depending on Interop.
- **Interop owns external bootstrap experiences/contracts** intended to teach or bind an external assistant, automation environment or tool host to Tiinex.
- **Docs owns canonical semantic material/authority** even when Core carries exact schema bytes or runtime projections inside a bootstrap/package for verification.

Core currently retains some LLM-facing bootstrap material for compatibility. That material is transitional Interop-facing content and should move only when an actual Interop Workspace and consumer migration are qualified; its current location does not redefine the responsibility boundary.

## Dependency direction

The intended ordinary direction is:

```text
Docs semantics
      ↓ implemented by
Core
      ↓
App ───────────────→ Verses such as Playthings
 ↓
Site / browser hosts

Core → CLI
Core (+ Interop where needed) → VS Code
App/Core (+ Interop where needed) → Chrome
```

Consumers use public package exports. Mirrored relative `src/...` layout is for predictability and merge compatibility; it is not permission to import another package's private source tree.
