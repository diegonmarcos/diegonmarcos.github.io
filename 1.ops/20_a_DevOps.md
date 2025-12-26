# Build, Deploy & Watch System

> **Document Type**: CI/CD & Build Specification
> **Version**: 2.0.0 | **Updated**: 2025-12-04
> **Parent**: `0_Stack_Main.md`

## Overview

This document defines the **build system, CI/CD pipeline, and development servers** for all projects. The local build system replicates the GitHub Actions workflow.

### CI/CD Pipeline

| Component | File | Purpose |
|-----------|------|---------|
| **GitHub Actions** | `.github/workflows/deploy.yml` | Automated deployment to GitHub Pages |
| **Main Orchestrator** | `1.ops/build_main.sh` | Local build/dev server management |
| **Project Scripts** | `<project>/1.ops/build.sh` | Per-project build commands |

### Build Requirements

All projects must:
1. Build successfully with `./1.ops/build.sh build`
2. Output to `dist/` directory
3. Pass GitHub Actions pipeline
4. Include Matomo tracking (see `3_Analytics.md`)

### Project-Specific Build Notes

| Project | Build Tool | Special Notes |
|---------|------------|---------------|
| **Cloud** | Sass + esbuild | Also has Flask API backend in `/back-System/cloud/` |
| **MyGames** | SvelteKit + Vite | Static adapter for GitHub Pages |
| **MyProfile** | Nuxt | Generates static site |

---

## Build System Documentation

This directory contains the orchestration scripts for building and developing all projects in this repository. The build system replicates the GitHub Actions workflow for local development and testing.

## Structure

```
/
├── 1.ops/
│   ├── build_main.sh           # Main orchestrator (this is what you run)
│   ├── build_main.log          # Build/dev output log
│   ├── .build-status           # Tracks successful builds
│   └── logs/                   # Individual project dev logs
├── b_Linktree/
│   ├── landpage/1.ops/build.sh     # Landpage (Vanilla + Sass + TypeScript)
│   ├── linktree/1.ops/build.sh     # Linktree (Vanilla + Sass + TypeScript)
│   ├── cv_web/1.ops/build.sh       # CV Web (Vanilla + Sass + TypeScript)
│   ├── myfeed/1.ops/build.sh       # MyFeed (Vue 3 + Vite)
│   ├── mygames/1.ops/build.sh      # MyGames (SvelteKit)
│   ├── nexus/1.ops/build.sh        # Nexus (Vanilla + Sass+TW + TypeScript)
│   ├── feed_yourself/1.ops/build.sh # Feed Yourself (Vanilla + Sass)
│   ├── others/1.ops/build.sh       # Others (Python)
│   ├── health_tracker/1.ops/build.sh # Health Tracker (Vanilla + Tailwind)
│   ├── market_watch/1.ops/build.sh # Market Watch (Vanilla + Sass + TypeScript)
│   ├── central_bank/1.ops/build.sh # Central Bank (Vanilla + Tailwind + TypeScript)
│   ├── mymaps/1.ops/build.sh       # MyMaps (Next.js + Sass + TypeScript)
│   ├── myprofile/1.ops/build.sh    # MyProfile (Nuxt 4 + Sass + TypeScript)
│   ├── mymusic/1.ops/build.sh      # MyMusic (Vue 3 + Sass + TypeScript)
│   ├── mymovies/1.ops/build.sh     # MyMovies (Vue 3 + Sass + TypeScript)
│   └── json-vision/1.ops/build.sh  # JSON Vision (Vue 3 + Sass + TypeScript)
├── a_Cloud/
│   ├── cloud/1.ops/build.sh        # Cloud Dashboard (Vanilla + Sass + TypeScript)
│   ├── mymail/1.ops/build.sh       # MyMail (Vanilla + Sass + TypeScript)
│   ├── myphotos/1.ops/build.sh     # MyPhotos (Vanilla + Sass + TypeScript)
│   ├── myanalytics/1.ops/build.sh  # MyAnalytics (Vanilla + Sass + TypeScript)
│   └── mydrive/1.ops/build.sh      # MyDrive (Vanilla + Sass + TypeScript)
```

## Quick Start

### Interactive TUI Mode
```bash
./1.ops/build_main.sh
```
Running without arguments launches an interactive TUI with project status, build/live indicators, and keyboard commands.

### Build Everything
```bash
./1.ops/build_main.sh build
```

### Build with Force Clean
```bash
./1.ops/build_main.sh build --force
```

### Start All Development Servers
```bash
./1.ops/build_main.sh dev
```

### Build Individual Projects
```bash
./1.ops/build_main.sh build-landpage
./1.ops/build_main.sh build-linktree
./1.ops/build_main.sh build-cv-web
./1.ops/build_main.sh build-myfeed
./1.ops/build_main.sh build-mygames
./1.ops/build_main.sh build-nexus
./1.ops/build_main.sh build-cloud
./1.ops/build_main.sh build-feed
./1.ops/build_main.sh build-others
./1.ops/build_main.sh build-health
./1.ops/build_main.sh build-market
./1.ops/build_main.sh build-centralbank
./1.ops/build_main.sh build-mymaps
./1.ops/build_main.sh build-myprofile
./1.ops/build_main.sh build-mymusic
./1.ops/build_main.sh build-mymovies
./1.ops/build_main.sh build-json-vision
./1.ops/build_main.sh build-mymail
./1.ops/build_main.sh build-myphotos
./1.ops/build_main.sh build-myanalytics
./1.ops/build_main.sh build-mydrive
```

### Start Individual Dev Servers
```bash
./1.ops/build_main.sh dev-landpage      # :8000
./1.ops/build_main.sh dev-linktree      # :8001
./1.ops/build_main.sh dev-cv-web        # :8002
./1.ops/build_main.sh dev-myfeed        # :8003
./1.ops/build_main.sh dev-mygames       # :8004
./1.ops/build_main.sh dev-nexus         # :8005
./1.ops/build_main.sh dev-cloud         # :8006
./1.ops/build_main.sh dev-feed          # :8007
./1.ops/build_main.sh dev-others        # :8008
./1.ops/build_main.sh dev-health        # :8009
./1.ops/build_main.sh dev-market        # :8010
./1.ops/build_main.sh dev-centralbank   # :8011
./1.ops/build_main.sh dev-myprofile     # :8013
./1.ops/build_main.sh dev-mymaps        # :8014
./1.ops/build_main.sh dev-mymovies      # :8015
./1.ops/build_main.sh dev-mymusic       # :8016
./1.ops/build_main.sh dev-json-vision   # :8017
./1.ops/build_main.sh dev-mymail        # :8018
./1.ops/build_main.sh dev-myphotos      # :8019
./1.ops/build_main.sh dev-myanalytics   # :8020
./1.ops/build_main.sh dev-mydrive       # :8021
```

## Main Orchestrator Commands

The `build_main.sh` script orchestrates all sub-projects:

### Build Commands

| Command | Description |
|---------|-------------|
| `build` | Build all projects |
| `build-landpage` | Build Landpage (Vanilla + Sass + TypeScript) |
| `build-linktree` | Build Linktree (Vanilla + Sass + TypeScript) |
| `build-cv-web` | Build CV Web (Vanilla + Sass + TypeScript) |
| `build-myfeed` | Build MyFeed (Vue 3 + Vite) |
| `build-mygames` | Build MyGames (SvelteKit) |
| `build-nexus` | Build Nexus (Vanilla + Sass+TW + TypeScript) |
| `build-cloud` | Build Cloud (Vanilla + Sass + TypeScript) |
| `build-feed` | Build Feed Yourself (Vanilla + Sass) |
| `build-others` | Build Others (Python) |
| `build-health` | Build Health Tracker (Vanilla + Tailwind) |
| `build-market` | Build Market Watch (Vanilla + Sass + TypeScript) |
| `build-centralbank` | Build Central Bank (Vanilla + Tailwind + TypeScript) |
| `build-mymaps` | Build MyMaps (Next.js + Sass + TypeScript) |
| `build-myprofile` | Build MyProfile (Nuxt 4 + Sass + TypeScript) |
| `build-mymusic` | Build MyMusic (Vue 3 + Sass + TypeScript) |
| `build-mymovies` | Build MyMovies (Vue 3 + Sass + TypeScript) |
| `build-json-vision` | Build JSON Vision (Vue 3 + Sass + TypeScript) |
| `build-mymail` | Build MyMail (Vanilla + Sass + TypeScript) |
| `build-myphotos` | Build MyPhotos (Vanilla + Sass + TypeScript) |
| `build-myanalytics` | Build MyAnalytics (Vanilla + Sass + TypeScript) |
| `build-mydrive` | Build MyDrive (Vanilla + Sass + TypeScript) |

### Dev Server Commands

| Command | Description |
|---------|-------------|
| `dev` | Start all development servers |
| `dev-landpage` | Landpage - npm-live :8000 |
| `dev-linktree` | Linktree - npm-live :8001 |
| `dev-cv-web` | CV Web - npm-live :8002 |
| `dev-myfeed` | MyFeed - Vite :8003 |
| `dev-mygames` | MyGames - Vite :8004 |
| `dev-nexus` | Nexus - npm-live :8005 |
| `dev-cloud` | Cloud - npm-live :8006 |
| `dev-feed` | Feed Yourself - npm-live :8007 |
| `dev-others` | Others - npm-live :8008 |
| `dev-health` | Health Tracker - npm-live :8009 |
| `dev-market` | Market Watch - npm-live :8010 |
| `dev-centralbank` | Central Bank - npm-live :8011 |
| `dev-mymaps` | MyMaps - Next.js :8014 |
| `dev-myprofile` | MyProfile - Nuxt :8013 |
| `dev-mymusic` | MyMusic - Vite :8016 |
| `dev-mymovies` | MyMovies - Vite :8015 |
| `dev-json-vision` | JSON Vision - Vite :8017 |
| `dev-mymail` | MyMail - npm-live :8018 |
| `dev-myphotos` | MyPhotos - npm-live :8019 |
| `dev-myanalytics` | MyAnalytics - npm-live :8020 |
| `dev-mydrive` | MyDrive - Python :8021 |

### Utility Commands

| Command | Description |
|---------|-------------|
| `list` | List running servers/watchers |
| `kill` | Kill all dev servers |
| `clean` | Clean all build artifacts |
| `clean-all` | Clean artifacts + node_modules |
| `test` | Run all tests |
| `help` | Show help message |

### Options
- `--force` or `-f`: Force rebuild (clean before build)
- `--verbose` or `-v`: Verbose output (shows all commands)

## Port Assignments

| Port | Project | Server Type | Watch |
|------|---------|-------------|-------|
| :8000 | Landpage | npm-live | Sass, TS |
| :8001 | Linktree | npm-live | Sass, TS |
| :8002 | CV Web | npm-live | Sass, TS |
| :8003 | MyFeed | Vite | HMR |
| :8004 | MyGames | Vite | HMR |
| :8005 | Nexus | npm-live | Sass, TS |
| :8006 | Cloud | npm-live | Sass, TS |
| :8007 | Feed Yourself | npm-live | Sass |
| :8008 | Others | npm-live | - |
| :8009 | Health Tracker | npm-live | - |
| :8010 | Market Watch | npm-live | Sass, TS |
| :8011 | Central Bank | npm-live | - |
| :8013 | MyProfile | Nuxt | HMR |
| :8014 | MyMaps | Next.js | HMR |
| :8015 | MyMovies | Vite | HMR |
| :8016 | MyMusic | Vite | HMR |
| :8017 | JSON Vision | Vite | HMR |
| :8018 | MyMail | npm-live | Sass, TS |
| :8019 | MyPhotos | npm-live | Sass, TS |
| :8020 | MyAnalytics | npm-live | Sass, TS |
| :8021 | MyDrive | Python | - |

## TUI Mode

Running `./1.ops/build_main.sh` without arguments launches an interactive TUI:

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  PROJECTS                                                                            │
├─────┬────────────────┬────────────┬──────────┬────────────┬───────┬────────┬────────┤
│ #   │ Name           │ Framework  │ CSS      │ JavaScript │ Port  │ Build  │ Live   │
├─────┼────────────────┼────────────┼──────────┼────────────┼───────┼────────┼────────┤
│ 1   │ Landpage       │ Vanilla    │ Sass     │ TypeScript │ :8000 │ OK     │ On     │
│ 2   │ Linktree       │ Vanilla    │ Sass     │ TypeScript │ :8001 │ OK     │ Off    │
│ ... │ ...            │ ...        │ ...      │ ...        │ ...   │ ...    │ ...    │
└─────┴────────────────┴────────────┴──────────┴────────────┴───────┴────────┴────────┘

┌──────────────────────────────────────────────────────────────────────────────────────┐
│  COMMANDS                                                                            │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  B[n] Build project    D[n] Start dev server    0 All projects                       │
│  K    Kill servers     H    Help (full docs)    Q Quit                               │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  Examples:  D3  D11  B0  K                                                           │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

**TUI Commands:**
- `B[n]` - Build project n (e.g., `B1` builds Landpage, `B0` builds all)
- `D[n]` - Start dev server for project n (e.g., `D3` starts CV Web on :8002)
- `K` - Kill all running servers
- `H` - Show full help documentation
- `Q` - Quit TUI

## Individual Project Scripts

Each project has its own `build.sh` script in its `1.ops/` directory with common actions:

**Common Actions:**
- `build` - Build for production
- `dev` - Start development server
- `clean` - Clean build artifacts
- `watch` - Watch files for changes
- `test` - Run tests (where applicable)

### Framework-Specific Projects

**Vue 3 (MyFeed):**
- `preview` - Preview production build
- `lint` - Lint Vue/JS/TS files
- `format` - Format code with Prettier
- `typecheck` - Run TypeScript type checking

**SvelteKit (MyGames):**
- `preview` - Preview production build
- `lint` - Lint Svelte/JS/TS files
- `format` - Format code with Prettier
- `check` - Run svelte-check for type checking

**Next.js (MyMaps):**
- Standard Next.js commands via npm scripts

**Nuxt 4 (MyProfile):**
- Standard Nuxt commands via npm scripts

## GitHub Actions Equivalence

This build system replicates the GitHub Actions workflow (`.github/workflows/deploy.yml`):

| GitHub Action Step | Local Command |
|-------------------|---------------|
| Build Landpage | `./1.ops/build_main.sh build-landpage` |
| Build Linktree | `./1.ops/build_main.sh build-linktree` |
| Build CV Web | `./1.ops/build_main.sh build-cv-web` |
| Build MyFeed | `./1.ops/build_main.sh build-myfeed` |
| Build MyGames | `./1.ops/build_main.sh build-mygames` |
| Build MyMaps | `./1.ops/build_main.sh build-mymaps` |
| Build MyProfile | `./1.ops/build_main.sh build-myprofile` |
| Build MyMusic | `./1.ops/build_main.sh build-mymusic` |
| Build MyMovies | `./1.ops/build_main.sh build-mymovies` |
| Build MyMail | `./1.ops/build_main.sh build-mymail` |
| Build MyPhotos | `./1.ops/build_main.sh build-myphotos` |
| Build MyAnalytics | `./1.ops/build_main.sh build-myanalytics` |
| Build MyDrive | `./1.ops/build_main.sh build-mydrive` |
| Build All | `./1.ops/build_main.sh build` |

## Testing Locally

### Test Full Deployment Build
```bash
# Clean everything
./1.ops/build_main.sh clean-all

# Build everything from scratch
./1.ops/build_main.sh build

# Verify builds exist
ls -lah myfeed/dist/
ls -lah mygames/dist/
ls -lah mymaps/.next/
ls -lah myprofile/.output/
```

### Test Development Workflow
```bash
# Option 1: Start all dev servers (uses tmux if available)
./1.ops/build_main.sh dev

# Option 2: Use interactive TUI
./1.ops/build_main.sh

# Option 3: Start individual servers in separate terminals
./1.ops/build_main.sh dev-landpage   # Terminal 1
./1.ops/build_main.sh dev-myfeed     # Terminal 2
./1.ops/build_main.sh dev-mygames    # Terminal 3
```

### Monitor Running Servers
```bash
# List all running servers
./1.ops/build_main.sh list

# Kill all servers
./1.ops/build_main.sh kill
```

## Dependencies

### System Requirements
- **Node.js** >= 18.x
- **npm** >= 9.x
- **Python 3** (for simple HTTP server and Others project)
- **Sass** (via npm)
- **tmux** (optional, for concurrent dev servers)

### Install Dependencies
```bash
# Install all npm dependencies per project
cd myfeed && npm install
cd ../mygames && npm install
cd ../mymaps && npm install
cd ../myprofile && npm install

# Or use the orchestrator (recommended)
./1.ops/build_main.sh build  # Auto-installs deps if missing
```

### Optional Tools
```bash
# For concurrent dev servers (recommended)
sudo apt-get install tmux

# For HTML validation
sudo apt-get install tidy

# For CSS linting
npm install -g csslint
```

## Troubleshooting

### Build Fails with "npm not found"
```bash
sudo apt-get install nodejs npm
```

### "Port already in use" Error
```bash
# Kill all dev servers
./1.ops/build_main.sh kill

# Or manually find and kill process
lsof -ti:8000 | xargs kill -9
```

### Check Build Logs
```bash
# View main build log
tail -f 1.ops/build_main.log

# View individual project logs (when using nohup mode)
tail -f 1.ops/logs/myfeed-dev.log
```

### Sass Compilation Errors
```bash
cd <project>/1.ops
npm install sass --save-dev
```

### TypeScript Compilation Errors
```bash
cd <project>/1.ops
npm install typescript --save-dev
```

## Adding New Projects

1. **Create the project directory structure:**
   ```bash
   mkdir -p new-project/1.ops
   ```

2. **Create a `build.sh` script** in `new-project/1.ops/`:
   - Copy from an existing project's `build.sh`
   - Customize for your framework
   - Update `PROJECT_NAME` and `PROJECT_DIR` variables

3. **Make it executable:**
   ```bash
   chmod +x new-project/1.ops/build.sh
   ```

4. **Add to main orchestrator** (`1.ops/build_main.sh`):
   - Add URL variable (next available port)
   - Add to `build_all()` function
   - Add `build-new-project` case in main()
   - Add `dev-new-project` case in main()
   - Add to TUI menu items
   - Add server status check in `get_running_servers()`

5. **Update GitHub Actions** (`.github/workflows/deploy.yml`):
   - Add build step for the new project
   - Add conditional check if needed

## Best Practices

1. **Use TUI for daily development:**
   ```bash
   ./1.ops/build_main.sh
   ```

2. **Always test locally before pushing:**
   ```bash
   ./1.ops/build_main.sh build
   ```

3. **Use force rebuild when dependencies change:**
   ```bash
   ./1.ops/build_main.sh build --force
   ```

4. **Clean before major changes:**
   ```bash
   ./1.ops/build_main.sh clean-all
   ```

5. **Check logs for errors:**
   - Build scripts output colored logs
   - Blue = Info
   - Green = Success
   - Yellow = Warning
   - Red = Error

## Related Files

- `.github/workflows/deploy.yml` - GitHub Actions CI/CD pipeline
- `1.ops/build_main.log` - Build output log
- `1.ops/.build-status` - Build status tracking
- `1.ops/logs/` - Individual project dev logs

---

## Infrastructure Rules (Cloudflare + Nginx)

This section documents the Cloudflare DNS and NPM (Nginx Proxy Manager) configurations for front-end projects that require backend services.

### DNS Records (Cloudflare)

| Subdomain | Type | Target | Proxied | Purpose |
|-----------|------|--------|---------|---------|
| `analytics` | A | 34.55.55.234 | Yes | Matomo analytics |
| `photos` | A | 34.55.55.234 | Yes | Photoprism gallery |
| `cloud` | A | 34.55.55.234 | Yes | Cloud dashboard |
| `auth` | A | 34.55.55.234 | Yes | Authelia SSO |
| `sync` | A | 34.55.55.234 | Yes | Syncthing |
| `mail` | A | 34.55.55.234 | Yes | Mailu mail |
| `proxy` | A | 34.55.55.234 | Yes | NPM admin (OIDC protected) |

**Note:** All A records point to GCP NPM (34.55.55.234) which reverse-proxies to Oracle VMs.

### NPM Proxy Hosts

| Domain | Backend | Port | Auth | Notes |
|--------|---------|------|------|-------|
| `analytics.diegonmarcos.com` | 130.110.251.193 | 8081 | Authelia 2FA | Matomo at root |
| `photos.diegonmarcos.com` | 84.235.234.87 | 2342 | Authelia 2FA | Photoprism |
| `cloud.diegonmarcos.com` | GitHub Pages | - | None | Static dashboard |
| `auth.diegonmarcos.com` | localhost | 9091 | - | Authelia itself |
| `sync.diegonmarcos.com` | 84.235.234.87 | 8384 | Authelia 2FA | Syncthing |
| `mail.diegonmarcos.com` | 130.110.251.193 | 443 | Mailu auth | Mailu webmail |
| `proxy.diegonmarcos.com` | localhost | 81 | OIDC (oauth2-proxy) | NPM admin |

### Nginx Configurations

#### Analytics (Matomo)

```nginx
# analytics.diegonmarcos.com
# Public: /matomo.js, /matomo.php, /js/* (tracking endpoints)
# Protected: /* (everything else via Authelia)

location = /matomo.js {
    proxy_pass http://130.110.251.193:8081/matomo.js;
}

location = /matomo.php {
    proxy_pass http://130.110.251.193:8081/matomo.php;
}

location /js/ {
    proxy_pass http://130.110.251.193:8081/js/;
}

location / {
    auth_request /authelia-verify;
    error_page 401 =302 https://auth.diegonmarcos.com/authelia/?rd=$scheme://$http_host$request_uri;
    proxy_pass http://130.110.251.193:8081;
}
```

#### Photos (Photoprism)

```nginx
# photos.diegonmarcos.com
# All routes protected via Authelia

location / {
    auth_request /authelia-verify;
    error_page 401 =302 https://auth.diegonmarcos.com/authelia/?rd=$scheme://$http_host$request_uri;
    proxy_pass http://84.235.234.87:2342;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

#### Proxy (NPM Admin with OIDC)

```nginx
# proxy.diegonmarcos.com
# Full OIDC authentication via oauth2-proxy + Authelia

location /oauth2/ {
    proxy_pass http://oauth2-proxy-npm:4180;
}

location = /oauth2/auth {
    proxy_pass http://oauth2-proxy-npm:4180;
    proxy_pass_request_body off;
}

location / {
    auth_request /oauth2/auth;
    error_page 401 = /oauth2/sign_in;
    proxy_pass http://npm:81;
}
```

#### Authelia Verify Endpoint (Common)

```nginx
# Used by all Authelia-protected services
location = /authelia-verify {
    internal;
    proxy_pass http://authelia:9091/api/verify;
    proxy_pass_request_body off;
    proxy_set_header Content-Length "";
    proxy_set_header X-Original-URL $scheme://$http_host$request_uri;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host $http_host;
    proxy_set_header X-Forwarded-URI $request_uri;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header Cookie $http_cookie;  # Critical for session
}
```

### Authentication Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         AUTHENTICATION FLOWS                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  AUTHELIA 2FA (Forward Auth):                                            │
│  ┌──────────┐    ┌─────────┐    ┌──────────┐    ┌─────────────┐         │
│  │  Browser │───►│   NPM   │───►│ Authelia │───►│   Backend   │         │
│  └──────────┘    │nginx    │    │ verify   │    │ (Matomo,    │         │
│       │          │auth_req │    │ session  │    │  Photoprism)│         │
│       │          └─────────┘    └──────────┘    └─────────────┘         │
│       │               │              │                                   │
│       │          401 if no      ✓ if cookie                             │
│       │          session        valid                                    │
│       └──────────────────────────────┘                                   │
│              Redirect to Authelia login                                  │
│                                                                          │
│  OIDC (oauth2-proxy):                                                    │
│  ┌──────────┐    ┌─────────────┐    ┌──────────┐    ┌──────────┐        │
│  │  Browser │───►│oauth2-proxy │───►│ Authelia │───►│   NPM    │        │
│  └──────────┘    │(port 4180)  │    │  OIDC    │    │  Admin   │        │
│       │          └─────────────┘    │ Provider │    │ (port 81)│        │
│       │               │             └──────────┘    └──────────┘        │
│       │          Exchange code                                           │
│       │          for JWT token                                           │
│       └──────────────────────────────────────────────────────────────────┘
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Front-End Integration

Projects in `a_Cloud/` that connect to protected backends:

| Project | Backend Service | Auth Method | Login Page |
|---------|-----------------|-------------|------------|
| myanalytics | Matomo | Authelia 2FA | GitHub Pages → Authelia |
| myphotos | Photoprism | Authelia 2FA | GitHub Pages → Authelia |
| mydrive | Document Services | Authelia 2FA | GitHub Pages → Authelia |
| cloud | Cloud API | Authelia 2FA | GitHub Pages → Authelia |
| mymail | Mailu | Mailu native | Mailu login |

### Common Issues

| Issue | Cause | Fix |
|-------|-------|-----|
| Login loop | Cookie path mismatch | Serve app at root, not subpath |
| 502 Bad Gateway | Backend unreachable | Check Docker network, VM connectivity |
| 401 after login | Cookie not forwarded | Add `proxy_set_header Cookie $http_cookie` |
| CORS errors | Missing headers | Add `Access-Control-Allow-Origin` |

---

**Last Updated:** 2025-12-23
**Maintainer:** Diego Nepomuceno Marcos
