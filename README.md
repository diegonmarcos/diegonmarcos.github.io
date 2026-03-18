# Front-End Monorepo

30+ web projects deployed to [diegonmarcos.github.io](https://diegonmarcos.github.io) via GitHub Pages.

Built with a universal `build.sh` engine — one engine, per-project `build.json` config, zero boilerplate.

---

## Table of Contents

### A) Documentation Overview
- [A.1 Quick Start](#a1-quick-start)
- [A.2 Project Map](#a2-project-map)
- [A.3 Project Categories](#a3-project-categories)
- [A.4 Frameworks & Archetypes](#a4-frameworks--archetypes)
- [A.5 Analytics](#a5-analytics)
- [A.6 Domains & Deployment](#a6-domains--deployment)
- [A.7 Code Standards Summary](#a7-code-standards-summary)

### B) Architectural Design
- [B.1 Build System Architecture](#b1-build-system-architecture)
- [B.2 Build Modules](#b2-build-modules)
- [B.3 build.json Schema](#b3-buildjson-schema)
- [B.4 config.json Schema](#b4-configjson-schema)
- [B.5 CI/CD Pipeline](#b5-cicd-pipeline)
- [B.6 Per-Project Structure](#b6-per-project-structure)
- [B.7 Code Standards Specification](#b7-code-standards-specification)
- [B.8 Generated Data](#b8-generated-data)
- [B.9 Dev Server Ports](#b9-dev-server-ports)

---

## A) Documentation Overview

### A.1 Quick Start

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

### A.2 Project Map

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

### A.3 Project Categories

| Category | Folder | Count | Description |
|----------|--------|-------|-------------|
| Portals | `a-Portals/` | 4 | Entry points, dashboards, digital cards |
| Profiles | `b-Profiles/` | 6 | CV, portfolio, landing pages, company sites |
| Suite | `c-Suite/` | 5 | Integrated tools (JSON editor, analytics, mail, photos) |
| Tools | `c-Tools/` | 14+ | Standalone apps (maps, movies, music, games, finance) |
| Cloud | `d-Cloud/` | 3 | API docs, MCP docs, Swagger UI |
| Others | `e-Others/` | 1 | Python scripts, misc |
| Root | `e-Root/` | 1 | Main 3D cube index page |

### A.4 Frameworks & Archetypes

| Archetype | Build Pipeline | Projects |
|-----------|---------------|----------|
| **Vite** | Vite HMR + bundler | mymovies, mymusic, json-vision, central_bank, mytrips, mymaps (work) |
| **SvelteKit** | Vite + SSR | mygames, myprofile, mymaps (personal) |
| **Vue 3** | Composition API + `<script setup>` | myfeed, mymovies, mymusic, mytrips, json-vision |
| **React** | Vite + MapLibre | maps |
| **Sass+esbuild** | sass → CSS, esbuild → JS | linktree, cv_web, cloud, market_watch, nexus, skills_mcp |
| **Sass+tsc** | sass → CSS, tsc → JS | carto, landpage, leafy |
| **Nuxt** | SSR + nuxt.config.ts | astro |
| **Static copy** | File copy only | cv_pdf, health_tracker, myanalytics, mymail, myphotos |

### A.5 Analytics

All projects include **Matomo** tag manager (container_odwLIyPV) and **Umami** analytics. Both are self-hosted on `analytics.diegonmarcos.com`.

The tracking snippet is required in every HTML `<head>`:

```html
<script>
var _mtm = window._mtm = window._mtm || [];
_mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
(function() {
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src='https://analytics.diegonmarcos.com/js/container_odwLIyPV.js';
  s.parentNode.insertBefore(g,s);
})();
</script>
```

### A.6 Domains & Deployment

| Domain | Purpose |
|--------|---------|
| [diegonmarcos.github.io](https://diegonmarcos.github.io) | GitHub Pages — all 30+ projects |
| diegonmarcos.com | Main domain (Cloudflare DNS) |

Deployment is automatic — push to `main` triggers GitHub Actions. Only changed projects rebuild (conditional builds via `changed-files` action).

### A.7 Code Standards Summary

- **TypeScript**: Strict mode, no `any`, handle `null`/`undefined`, ES Modules only
- **Svelte 5**: Runes mode — `$props()`, `$state()`, `$derived()`, standard HTML events
- **Vue 3**: `<script setup lang="ts">`, `defineProps<{}>()`, `ref<T>()`
- **SCSS**: ITCSS methodology, mixins (`mq()`, `flex-center`, `grid-auto-fit`). **Never inline styles**
- **HTML**: Semantic tags, `<a>` for navigation, `<button>` for actions, `alt` on images, `<label>` on inputs

Full details: [Code Practices](./1.ops/30_Code_Practise.md) | [Stack Spec](./1.ops/00_Stack_Main.md)

---

## B) Architectural Design

### B.1 Build System Architecture

**Pattern**: Universal engine + declarative config

```
_engine.sh              Universal build engine (shared, ~48K)
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

Each project's `build.json` declares an ordered pipeline of build modules:

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

### B.4 config.json Schema

Root configuration for the monorepo orchestrator:

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

| Step | Action |
|------|--------|
| 1. Trigger | Push to `main` |
| 2. Setup | Node.js 22 + `bash build.sh deps` |
| 3. Detect | `changed-files` action per project |
| 4. Build | Only changed projects rebuild |
| 5. Assemble | All `dist/` → `_site/<project>/`, `e-Root/dist/` → `_site/` root |
| 6. Deploy | Upload artifact → GitHub Pages |

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

### B.7 Code Standards Specification

#### B.7.1 TypeScript
- Strict mode enabled, no `any` type
- Explicit null/undefined handling
- DOM elements cast explicitly, check null (`querySelector` returns `Element | null`)
- ES Modules: `import`/`export`, no CommonJS

#### B.7.2 Svelte 5 (Runes Mode)
```typescript
let { propName }: { propName: Type } = $props();  // Props
let count = $state(0);                             // State
let doubled = $derived(count * 2);                 // Computed
// Events: standard HTML (onclick, not on:click)
```

#### B.7.3 Vue 3 (Composition API)
```typescript
// Always <script setup lang="ts">
defineProps<{ id: number; name: string }>();
const user = ref<User | null>(null);
```

#### B.7.4 SCSS (ITCSS)
```scss
@include mq(sm|md|lg|xl)                // Breakpoints
@include flex-center;                    // Center anything
@include flex-row(justify, align, gap);  // Row layout
@include grid-auto-fit(min-size, gap);   // Auto grid
```

**Rule**: Never use `style=""` inline CSS. All styling goes through SCSS classes.

#### B.7.5 HTML
- Semantic: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- `<a>` for navigation, `<button>` for actions
- All `<img>` have `alt`, all inputs have `<label>`

### B.8 Generated Data

| File | Source | Content |
|------|--------|---------|
| `front-topology.json` | `build.sh config` | Project registry (name, framework, port, category) |
| `front-data/front-deps.json` | C3 engine | Merged npm dependencies per project |
| `package.json` | `build.sh deps` | Merged dependencies from all 30+ projects |

### B.9 Dev Server Ports

Ports 8000–8023, assigned per project in `build.json`. Each project has a unique port — no conflicts.

---

**Last Updated**: 2026-03-18
