# Front-End Monorepo

30+ web projects deployed to [diegonmarcos.github.io](https://diegonmarcos.github.io) via GitHub Pages.

Built with a universal `build.sh` engine — one engine, per-project `build.json` config, zero boilerplate.

---

## A) Overview

### Quick Start

```bash
# Install all dependencies (merged from all 30+ projects)
./build.sh deps

# Build a single project
cd a-Portals/linktree && bash build.sh build

# Dev server with hot reload
cd c-Tools/mymovies && bash build.sh dev

# Build everything
./build.sh build

# Generate project topology
./build.sh config
```

### Project Map

```
front/
├── a-Portals/            Portal & entry-point sites
│   ├── cloud             Cloud dashboard (Sass+esbuild)
│   ├── linktree          Digital card (Sass+esbuild)
│   ├── linktree_mindmap  Digital card variant
│   └── linktree_pixel-world  Pixel art card
│
├── b-Profiles/           Work profiles & company sites
│   ├── cv_pdf            PDF resume (static copy)
│   ├── cv_web            Web resume (Sass+esbuild)
│   ├── landpage          Landing page (Sass+tsc)
│   ├── leafy             Plant tracker (Sass+tsc)
│   ├── myprofile         Portfolio platform (SvelteKit)
│   └── nexus             Company site (Sass+esbuild)
│
├── c-Suite/              Tools suite
│   ├── json-vision       JSON editor (Vue 3 + Vite)
│   ├── myanalytics       Analytics dashboard (static copy)
│   ├── mymail            Mail client (static copy)
│   ├── myphotos          Photo viewer (static copy)
│   └── suite             Browser tools (Sass+esbuild)
│
├── c-Tools/              Personal tools (14+ projects)
│   ├── astro             Astronomy viewer (Nuxt)
│   ├── carto             Cartography games (Sass+tsc)
│   ├── central_bank      Banking tool (Vite)
│   ├── feed_yourself     Nutrition calculator (Sass+esbuild)
│   ├── health_tracker    Health tracker (static copy)
│   ├── maps              Interactive maps (React+Vite)
│   ├── market_watch      Market tracker (Sass+esbuild)
│   ├── myfeed            Feed aggregator (Vue 3)
│   ├── mygames           Games collection (SvelteKit)
│   ├── mymaps            Strategic maps (SvelteKit+MapLibre)
│   ├── mymovies          Movie browser (Vue 3+Vite)
│   ├── mymusic           Music library (Vue 3+Vite)
│   ├── mytrips           Travel planner (Vue 3+Vite)
│   └── sailytics         Sailing analytics (Sass+esbuild)
│
├── d-Cloud/              Cloud & API documentation
│   ├── api               API docs (static Swagger)
│   ├── mcp-api-swagger   MCP API documentation
│   └── skills_mcp        Skills MCP docs (Sass+esbuild)
│
├── e-Others/             Miscellaneous
│   └── others            Python scripts
│
└── e-Root/               Main index — 3D cube navigation (Vite+Sass+TS)
```

### Frameworks Used

| Framework | Projects | Build |
|-----------|----------|-------|
| **Vite** | mymovies, mymusic, json-vision, central_bank, mytrips, mymaps (work) | Vite HMR |
| **SvelteKit** | mygames, myprofile, mymaps (personal) | Vite + SSR |
| **Vue 3** | myfeed, mymovies, mymusic, mytrips, json-vision | Composition API + `<script setup>` |
| **React** | maps | Vite + MapLibre |
| **Sass+esbuild** | linktree, cv_web, cloud, market_watch, nexus, skills_mcp | sass → CSS, esbuild → JS |
| **Sass+tsc** | carto, landpage, leafy | sass → CSS, tsc → JS |
| **Nuxt** | astro | SSR + nuxt.config.ts |
| **Static copy** | cv_pdf, health_tracker, myanalytics, mymail, myphotos | File copy only |

### Domains

- **GitHub Pages**: [diegonmarcos.github.io](https://diegonmarcos.github.io)
- **Main**: diegonmarcos.com (Cloudflare DNS)

---

## B) Engineering Specification

### B.1 Build System Architecture

**Pattern**: Universal engine + declarative config

```
_engine.sh              Universal build engine (shared, 48K)
build.sh                Root orchestrator (deps/build/clean/config/status)
config.json             Root config (analytics, defaults, system deps)
<project>/build.sh      Symlink → ../../_engine.sh
<project>/build.json    Per-project declarative config
```

**Engine commands** (per-project):

| Command | Action |
|---------|--------|
| `build` | Compile src/ → dist/ using build modules |
| `dev` | Start dev server with hot reload |
| `stop` | Stop running dev server |
| `clean` | Remove dist/ and build artifacts |
| `status` | Show server state from .build.pid |

**Root orchestrator commands**:

| Command | Action |
|---------|--------|
| `deps` | Merge all package.json → root, npm install |
| `build` | Build all projects |
| `clean` | Clean all dist/ directories |
| `config` | Generate front-topology.json (project registry) |
| `status` | Show all running dev servers |

### B.2 Build Modules

Each project's `build.json` declares a pipeline of build modules:

| Module | Input | Output | Purpose |
|--------|-------|--------|---------|
| `esbuild` | `.ts` | `.js` | Fast TypeScript bundling (IIFE/ESM) |
| `sass` | `.scss` | `.css` | ITCSS stylesheet compilation |
| `copy` | files list | dist/ | Static file copying |
| `symlink` | directory | dist/ | Symlink public assets (images, fonts) |
| `inline` | HTML+CSS+JS | single HTML | Inline all assets into one file |

**Dev server fallback chain**: vite → sveltekit → live-server → node-static → python3 → busybox → php

### B.3 build.json Schema

```json
{
  "name": "Project Name",
  "framework": "vanilla | vue | svelte | react | nuxt",
  "port": 8001,
  "src": "src",
  "dist": "dist",
  "build": [
    { "mod": "esbuild", "input": "src/typescript/main.ts", "output": "script.js", "format": "iife", "target": "es2020" },
    { "mod": "sass", "input": "src/scss/main.scss", "output": "style.css" },
    { "mod": "copy", "files": "index.html", "from": "src" },
    { "mod": "symlink", "files": "public" }
  ],
  "serve": {
    "mode": "auto",
    "dir": "src",
    "watch": ["src/scss/**/*.scss", "src/typescript/**/*.ts"]
  }
}
```

### B.4 config.json Schema (Root)

```json
{
  "analytics": {
    "matomo": { "container_id": "container_odwLIyPV", "url": "..." },
    "umami": { "site_id": "...", "url": "..." }
  },
  "defaults": { "src": "src", "dist": "dist", "port": 8000, "framework": "vanilla" },
  "deploy": { "branch": "main" },
  "deps": {
    "system": { "node": { "nix": "nodejs_22" }, "npm": {...}, "git": {...} },
    "npm": { "flags": "--no-fund --no-audit --legacy-peer-deps" }
  }
}
```

### B.5 CI/CD Pipeline

**Workflow**: `.github/workflows/ship.yml`

1. **Trigger**: Push to `main`
2. **Setup**: Node.js 22, `bash build.sh deps`
3. **Conditional builds**: Each project checks `changed-files` — only rebuilds on source changes
4. **Assembly**: All `dist/` folders → `_site/<project>/`, `e-Root/dist/` → `_site/` root
5. **Deploy**: Upload artifact → GitHub Pages

**Config generation**: `.github/workflows/gen-configs.yml`
- Trigger: Changes to any `build.json` or root `build.sh`
- Runs `bash build.sh config` → commits `front-topology.json`

### B.6 Per-Project Structure

```
<project>/
├── build.sh            → ../../_engine.sh (symlink)
├── build.json          Declarative build config
├── src/
│   ├── scss/           ITCSS stylesheets
│   ├── typescript/     TypeScript source
│   ├── index.html      Entry HTML
│   └── public/         Static assets (images, fonts)
└── dist/               Build output (gitignored)
```

### B.7 Code Standards

**TypeScript**: Strict mode, no `any`, explicit null handling, ES Modules only.

**Svelte 5** (Runes): `$props()`, `$state()`, `$derived()`, standard HTML events.

**Vue 3**: `<script setup lang="ts">`, `defineProps<{}>()`, `ref<T>()`.

**SCSS**: ITCSS methodology, `@include mq()` breakpoints, `flex-center`, `flex-row`, `grid-auto-fit`. **Never inline styles**.

**HTML**: Semantic tags, `<a>` for navigation, `<button>` for actions, `alt` on images, `<label>` on inputs.

**Analytics**: Matomo tag manager required in every `<head>` (container_odwLIyPV).

### B.8 Generated Data

| File | Source | Content |
|------|--------|---------|
| `front-topology.json` | `build.sh config` | Project registry (name, framework, port, category) |
| `front-data/front-deps.json` | C3 engine | Merged npm dependencies per project |
| `package.json` | `build.sh deps` | Merged dependencies from all projects |

### B.9 Dev Server Ports

Ports 8000-8023, assigned per project in `build.json`. No conflicts — each project has a unique port.

---

**Last Updated**: 2026-03-18
