# src/ module boundary

This tree mirrors the real Android APK's module boundary so the web port and
the app share one mental model.

- `lib/` — engines. Mirrors the APK's `libs/` module: one file per widget,
  framework-agnostic logic (data resolution, rendering, interaction). Importing
  from `app/` here is FORBIDDEN — `lib/` must never know about app chrome.
  - `lib/core/` — shared low-level types, data loading, and the target-grammar
    router (`nav.ts`) used by both engines and app chrome.
  - `lib/onehand/` — the one-hand "Sirius" radial/stars engine.
- `app/` — chrome. Mirrors the APK's app packages: `launcher/` (drawer,
  fan menu, stack cards, bottom nav, tiles), `cloud/` (calendar widgets),
  `overlays/` (notification center / update overlay), plus `main.ts` (the
  esbuild entry) and `service-worker.ts`. `app/` may import from `lib/`, never
  the other way around.
- `data/` — mirrors `build.json`'s `ui.*` data manifests (shell, sections,
  mock apps) consumed by both the page generator and the client engines.
- `scss/` — mirrors the same `lib/` vs `app/` split as the TypeScript tree,
  rooted at `scss/_variables.scss`, `scss/_mixins.scss`, `scss/_base.scss`,
  and `scss/main.scss` (load order defined there).
