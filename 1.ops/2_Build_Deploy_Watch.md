# Build System Documentation

This directory contains the orchestration scripts for building and developing all projects in this repository. The build system replicates the GitHub Actions workflow for local development and testing.

## Structure

```
/
├── 1.ops/
│   ├── build_main.sh           # Main orchestrator (this is what you run)
│   ├── build_main.log          # Build/dev output log
│   ├── .build-status           # Tracks successful builds
│   └── logs/                   # Individual project dev logs
├── landpage/1.ops/build.sh     # Landpage (Vanilla + Sass + TypeScript)
├── linktree/1.ops/build.sh     # Linktree (Vanilla + Sass + TypeScript)
├── cv_web/1.ops/build.sh       # CV Web (Vanilla + Sass + TypeScript)
├── myfeed/1.ops/build.sh       # MyFeed (Vue 3 + Vite)
├── mygames/1.ops/build.sh      # MyGames (SvelteKit)
├── nexus/1.ops/build.sh        # Nexus (Vanilla + Sass+TW + TypeScript)
├── cloud/1.ops/build.sh        # Cloud (Vanilla + Sass + TypeScript)
├── feed_yourself/1.ops/build.sh # Feed Yourself (Vanilla + Sass)
├── others/1.ops/build.sh       # Others (Python)
├── health_tracker/1.ops/build.sh # Health Tracker (Vanilla + Tailwind)
├── market_watch/1.ops/build.sh # Market Watch (Vanilla + Sass + TypeScript)
├── central_bank/1.ops/build.sh # Central Bank (Vanilla + Tailwind + TypeScript)
├── mymaps/1.ops/build.sh       # MyMaps (Next.js + Sass + TypeScript)
└── myprofile/1.ops/build.sh    # MyProfile (Nuxt 4 + Sass + TypeScript)
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
./1.ops/build_main.sh dev-mymaps        # :8012
./1.ops/build_main.sh dev-myprofile     # :8013
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
| `dev-mymaps` | MyMaps - Next.js :8012 |
| `dev-myprofile` | MyProfile - Nuxt :8013 |

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
| :8012 | MyMaps | Next.js | HMR |
| :8013 | MyProfile | Nuxt | HMR |

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

**Last Updated:** 2025-12-01
**Maintainer:** Diego Nepomuceno Marcos
