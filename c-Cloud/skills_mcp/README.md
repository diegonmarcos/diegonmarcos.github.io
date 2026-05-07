# Skills & MCP — Single Source of Truth

> **Repo**: `~/git/front/b_Work_Tools/skills_mcp/`
> **Live**: `diegonmarcos.github.io/skills_mcp/`
> **Updated**: 2026-02-12

This project is the **single source of truth** for all Claude agent skills, MCP servers, and APIs. It serves both as:
1. **Markdown documentation** (`docs/`) — referenced by CLAUDE.md and skill definitions
2. **Interactive web UI** (`src_static/`) — Swagger-style dark-theme explorer with list + graph views

---

## Table of Contents

- [Skills](#skills)
  - [Senior](#senior-skills)
  - [Junior](#junior-skills)
- [MCP Servers](#mcp-servers)
- [APIs](#apis)
- [Project Structure](#project-structure)
- [Build](#build)

---

## Skills

### Senior Skills

| Skill | Brief | Skill File | MCP |
|-------|-------|------------|-----|
| [Cloud Architect](docs/skills/senior/cloud-architect.md) | 4-VM infra — WireGuard, Caddy, Authelia, 43 services, DNS/Terraform | `cloud/.../bb-sec_mcp-server-skills/SKILL.md` | cloud-infra |
| [Software Engineer](docs/skills/senior/software-engineer.md) | Full-stack — Rust API, Flask, MCP server, Nix flakes, Python | `cloud/.../bb-sec_mcp-server-skills/SKILL.md` | cloud-infra |
| [Software Architecture](docs/skills/senior/software-architecture.md) | System design — repo structure, Nix flake composition, build.sh engine | `cloud/.../bb-sec_mcp-server-skills/SKILL.md` | cloud-infra |
| [Front-End Developer](docs/skills/senior/frontend-developer.md) | 32-project monorepo — TS strict, Svelte 5, Vue 3, SCSS/ITCSS, GitHub Pages | `front/.../skills_mcp/0.spec/skills.md` | cloud-infra |
| [Designer](docs/skills/senior/designer.md) | UI/UX — ITCSS, responsive, WCAG, semantic HTML, no-inline-CSS | `front/.../skills_mcp/0.spec/skills.md` | cloud-infra |

### Junior Skills

| Skill | Brief | Skill File | MCP |
|-------|-------|------------|-----|
| [Software Engineer](docs/skills/junior/software-engineer.md) | Bug fixes, small features, tests — follows existing patterns | `front/.../skills_mcp/0.spec/skills.md` | cloud-infra |
| [Ops](docs/skills/junior/ops.md) | Docker management, logs, restarts, health checks, backups | `cloud/.../bb-sec_mcp-server-skills/SKILL.md` | cloud-infra |

---

## MCP Servers

### cloud-infra

> **Full reference**: [docs/mcps/cloud-infra.md](docs/mcps/cloud-infra.md)

| Field | Value |
|-------|-------|
| **Transport** | stdio |
| **Runtime** | Node.js (TypeScript) |
| **Repo** | `~/git/cloud/a_solutions/container-nix/bb-sec_mcp-server-skills/` |
| **SDK** | `@modelcontextprotocol/sdk ^1.12.0` |

**21 Tools** across 7 categories:

| Category | Tools |
|----------|-------|
| Infra | `list_vms`, `list_services`, `get_service_detail` |
| Repo | `read_file`, `search_repos`, `list_directory` |
| Build | `build_service`, `build_all` |
| SSH | `ssh_exec`, `check_vm` |
| Docker | `docker_ps`, `docker_control`, `docker_logs`, `docker_compose_up` |
| API | `api_call`, `api_vm_control` |
| Front | `front_list_projects`, `front_get_project`, `front_build`, `front_dev_server`, `front_deploy` |

**5 Resources**: `cloud://config`, `cloud://ssh-config`, `cloud://services-overview`, `cloud://readme`, `cloud://front-projects`

**1 Prompt**: `cloud-architect`

---

## APIs

### Rust API (PRIMARY)

> **Full reference**: [docs/apis/rust-api.md](docs/apis/rust-api.md)

| Field | Value |
|-------|-------|
| **URL** | `https://api.diegonmarcos.com:8080` |
| **Swagger** | `https://api.diegonmarcos.com:8080/rust/api-docs` |
| **Repo** | `~/git/cloud/a_solutions/container-nix/bb-sec_rust-api/` |
| **Stack** | Axum + utoipa, 47 endpoints |

Key endpoints: `/rust/health/*` (GET), `/rust/vms/{vm_id}/*` (POST), `/rust/vms/{vm_id}/containers/*` (POST)

### Flask API (STALE BACKUP)

> **Full reference**: [docs/apis/flask-api.md](docs/apis/flask-api.md)

Being replaced by Rust API. Swagger: `https://api.diegonmarcos.com/docs`

### Cloud Provider CLIs

> **Full reference**: [docs/apis/cloud-provider-clis.md](docs/apis/cloud-provider-clis.md)

`oci`, `gcloud`, `gh`, `terraform` — not covered by MCP directly.

### Service APIs

> **Full reference**: [docs/apis/service-apis.md](docs/apis/service-apis.md)

PhotoPrism, NocoDB, Matomo, Vaultwarden, Syncthing, Radicale, ntfy, Mailu, AFFiNE, Authelia, Windmill — not covered by MCP directly.

---

## Project Structure

```
skills_mcp/
├── README.md                   # THIS FILE — master reference
├── build.sh / build.json       # Universal build engine + config
├── package.json                # npm deps (sass, esbuild, marked)
├── scripts/
│   └── build-docs.js           # MD → HTML converter
├── docs/                       # SOURCE MARKDOWN (single source of truth)
│   ├── skills/
│   │   ├── senior/             # 5 senior skill definitions
│   │   └── junior/             # 2 junior skill definitions
│   ├── mcps/
│   │   └── cloud-infra.md      # 21 tools, 5 resources, 1 prompt
│   └── apis/
│       ├── rust-api.md          # PRIMARY
│       ├── flask-api.md         # STALE BACKUP
│       ├── cloud-provider-clis.md
│       └── service-apis.md
├── 0.spec/                     # General Claude Code skill references
│   ├── skills.md
│   └── skills_claude.md
├── src_static/                 # Interactive Swagger-style UI
│   ├── index.html
│   ├── scss/                   # ITCSS dark theme
│   └── typescript/
│       └── main.ts             # App logic + hardcoded endpoint data
└── dist/                       # BUILT OUTPUT
    ├── index.html              # Interactive UI
    ├── script.js / style.css
    └── docs/                   # GENERATED HTML from docs/
        ├── index.html          # Auto-generated docs index
        ├── skills/senior/*.html
        ├── skills/junior/*.html
        ├── mcps/*.html
        └── apis/*.html
```

## Build

```bash
./build.sh build    # Sass + esbuild + copy HTML + build:docs (MD → HTML)
./build.sh dev      # Dev server with watchers (port 8018)
./build.sh clean    # Remove dist/
```

The `build:docs` step uses `marked` to convert all `docs/*.md` files into dark-themed HTML pages at `dist/docs/`, preserving directory structure and generating an index page.
