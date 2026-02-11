# Front-End Monorepo

Portfolio of 32+ web projects deployed to GitHub Pages.

**Live**: [diegonmarcos.github.io](https://diegonmarcos.github.io)

---

## Build System

Every project uses `build.sh` (engine) + `build.json` (config) at project root.

```bash
# Master build orchestrator (all projects)
~/git/front/1.ops/build_main.sh           # Interactive TUI
~/git/front/1.ops/build_main.sh build     # Build all
~/git/front/1.ops/build_main.sh dev       # Dev servers for all

# Individual project
~/git/front/<category>/<project>/build.sh build    # Production build
~/git/front/<category>/<project>/build.sh dev      # Dev server
```

CI/CD: GitHub Actions (`.github/workflows/deploy.yml`) — conditional per-project builds on push to `main`.

---

## Project Categories

### a_Portals/

| Project | Type | Framework | Port |
|---------|------|-----------|------|
| cloud | Dashboard | Sass+esbuild | :8006 |
| linktree | Digital Card | Sass+esbuild | :8001 |
| linktree_mindmap | Digital Card | Sass+esbuild | — |

### b_Work_Profiles/

| Project | Type | Framework | Port |
|---------|------|-----------|------|
| landpage | Digital Card | Sass+tsc | :8000 |
| cv_web | Digital Card | Sass+esbuild | :8002 |
| cv_pdf | Static Copy | — | — |
| nexus | Digital Card | Sass+esbuild | :8005 |
| leafy | Digital Card | Sass+tsc | :8021 |

### b_Work_Tools/

| Project | Type | Framework | Port |
|---------|------|-----------|------|
| mymaps | Browser Tool | Vite | :8014 |
| myanalytics | Dashboard | Static Copy | — |
| mydrive | Browser Tool | Static Copy | — |
| mymail | Browser Tool | Static Copy | — |
| myphotos | Browser Tool | Static Copy | — |
| skills_mcp | Documentation | Sass+esbuild | — |
| api | API Docs | Static (Swagger) | — |

### c_Personal_Profiles/

| Project | Type | Framework | Port |
|---------|------|-----------|------|
| myprofile | Platform | SvelteKit | :8013 |

### c_Personal_Tools/

| Project | Type | Framework | Port |
|---------|------|-----------|------|
| myfeed | Dashboard | Sass+esbuild (Vue 3) | :8003 |
| mygames | Browser Tool | SvelteKit | :8004 |
| mymaps | Browser Tool | SvelteKit (MapLibre) | — |
| mymovies | Browser Tool | Vite (Vue 3) | :8015 |
| mymusic | Browser Tool | Vite (Vue 3) | :8016 |
| mytrips | Browser Tool | Vite (Vue 3) | :8022 |
| json-vision | Browser Tool | Vite (Vue 3) | :8017 |
| central_bank | Browser Tool | Vite | :8011 |
| market_watch | Dashboard | Sass+esbuild | :8010 |
| maps | Browser Tool | React+Vite | — |
| carto | Browser Tool | Sass+tsc | :8020 |
| astro | Browser Tool | Nuxt | :8019 |
| astro_life | Browser Tool | — | — |
| feed_yourself | Browser Tool | Sass+esbuild | :8007 |
| health_tracker | Digital Card | Static Copy | :8009 |
| others | Scripts | Python | :8008 |

### c_root/

Main index page — 3D cube navigation. Vite + Sass + TypeScript.

---

## Project Archetypes

| Archetype | Build | Projects |
|-----------|-------|----------|
| **Vite** | Vite HMR | c_root, mymovies, mymusic, json-vision, central_bank, b_Work_Tools/mymaps, mytrips |
| **SvelteKit** | Vite + SSR | mygames, myprofile, c_Personal_Tools/mymaps |
| **Sass+esbuild** | sass + esbuild | linktree, myfeed, cloud, market_watch, nexus, cv_web, skills_mcp, linktree_mindmap |
| **Sass+tsc** | sass + tsc | carto, landpage, leafy |
| **Copy** | Static file copy | cv_pdf, health_tracker, myanalytics, mydrive, mymail, myphotos |
| **Nuxt** | Nuxt (nuxt.config.ts) | astro |

---

## Project Folder Structure

```
<project>/
├── build.sh            # Build engine (universal)
├── build.json          # Build config (framework, port, paths)
├── 0.spec/             # Specs & docs
├── 1.ops/              # Legacy build scripts (being migrated to root)
├── src/ | src_static/  # Source files
│   ├── scss/           # Sass (ITCSS methodology)
│   ├── typescript/     # TypeScript source
│   └── index.html      # Entry HTML
├── dist/               # Build output
└── public/             # Static assets
```

---

## Repository Structure

```
front/
├── 0.spec/                    # Archived specifications
├── 1.ops/                     # Master build scripts & specs
│   ├── build_main.sh          # Orchestrator for all projects
│   ├── 00_Stack_Main.md       # Master stack specification
│   ├── 01_Analytics.md        # Matomo tracking docs
│   ├── 03_Folder_Structure.md # Folder structure spec
│   └── 30_Code_Practise.md    # Code standards
│
├── a_Portals/                 # Portal & entry-point projects
├── b_Work_Profiles/           # Work-related profiles (CV, landpage)
├── b_Work_Tools/              # Work-related tools (maps, analytics)
├── c_Personal_Profiles/       # Personal profiles (myprofile)
├── c_Personal_Tools/          # Personal tools (games, movies, music)
├── c_root/                    # Main index (3D cube navigation)
│
├── .github/workflows/         # CI/CD (conditional per-project deploy)
├── package.json               # Root package config
└── README.md
```

---

## Specs & Documentation

- [Stack Specification](./1.ops/00_Stack_Main.md)
- [Code Practices](./1.ops/30_Code_Practise.md)
- [Folder Structure](./1.ops/03_Folder_Structure.md)
- [Analytics](./1.ops/01_Analytics.md)
- [DevOps](./1.ops/20_a_DevOps.md)
