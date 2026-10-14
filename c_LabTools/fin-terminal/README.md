# fin-terminal

Bloomberg-terminal-style web frontend for **fin-api** (formerly `fincept-server`).

- **API**: `https://api.diegonmarcos.com/fin-api/*` — REST + WebSocket
- **Port (dev)**: 8024
- **Stack**: Vanilla TypeScript + SCSS, declarative `build.json` (sass + esbuild + copy + symlink)

## Design

Authentic Bloomberg aesthetic — **amber on true black**, hard rectangles, monospace everywhere, dense layout, function-key bar, command bar, status bar.

Two themes (runtime-switchable, `Ctrl+T`):
1. `bloomberg-dark` (default) — `#000000` background, `#FFA028` Sunshade amber
2. `egui-dark` — GitHub-dark palette, copied verbatim from the egui desktop's `assets/themes/dark.json`

## Source of truth

These three JSON files are **copies** of the fin-api source-of-truth, guarded by a CI diff test:

- `src/typescript/data/screen-specs.json` ← `fin-api/src/code/screen-specs.json`
- `src/typescript/data/palette-egui-dark.json` ← `fin-api/src/code/assets/themes/dark.json`

If the fin-api source changes, the diff test fails and we must update the copies.

## Build

```bash
./build.sh build      # production bundle
./build.sh dev        # dev server (auto-rebuild on change)
npm test              # vitest
```

## Layout (mirrors `sailytics/`)

```
src/
├── index.html
├── public/                       # static (served as-is)
├── scss/
│   ├── main.scss
│   ├── abstracts/_*.scss         # vars, mixins
│   ├── base/_*.scss              # reset, typography
│   ├── components/_*.scss        # widgets, charts
│   ├── layout/_*.scss            # shell, panel, command-bar, function-bar, status-bar
│   └── utilities/_*.scss
└── typescript/
    ├── main.ts
    ├── data/                     # JSON sources (palettes, specs, registry, F-keys)
    ├── api/                      # REST + WS client + types
    ├── shell/                    # theme, command-bar, panel, function-bar, status-bar
    ├── widgets/                  # ticker, data-table, loading-overlay
    ├── charts/                   # candlestick (lightweight-charts), line (canvas)
    └── screens/                  # 41 spec + 10 custom + registry
```
