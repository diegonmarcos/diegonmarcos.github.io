# Build System Documentation

This directory contains the orchestration scripts for building and developing all projects in this repository. The build system replicates the GitHub Actions workflow for local development and testing.

## 📁 Structure

```
/
├── 1.ops/
│   ├── build_main.sh          # Main orchestrator (this is what you run)
│   └── BUILD_SYSTEM_README.md # This file
├── linktree/
│   └── 1.ops/
│       └── build.sh           # Linktree build script (static HTML/CSS/JS)
├── cv_web/
│   └── 1.ops/
│       └── build.sh           # CV Web build script (Sass)
├── myfeed/
│   └── 1.ops/
│       └── build.sh           # MyFeed build script (Vue 3 + Vite)
└── mygames/
    └── 1.1.ops/
        └── build.sh           # MyGames build script (SvelteKit)
```

## 🚀 Quick Start

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
./1.ops/build_main.sh build-linktree
./1.ops/build_main.sh build-cv-web
./1.ops/build_main.sh build-myfeed
./1.ops/build_main.sh build-mygames
```

### Start Individual Dev Servers
```bash
./1.ops/build_main.sh dev-linktree
./1.ops/build_main.sh dev-myfeed
./1.ops/build_main.sh dev-mygames
```

## 📋 Main Orchestrator Commands

The `build_main.sh` script orchestrates all sub-projects:

| Command | Description |
|---------|-------------|
| `build` | Build all projects |
| `build-root` | Build root Sass + TypeScript |
| `build-linktree` | Build linktree (static) |
| `build-cv-web` | Build cv_web (Sass) |
| `build-myfeed` | Build MyFeed (Vue 3 + Vite) |
| `build-mygames` | Build MyGames (SvelteKit) |
| `dev` | Start all development servers |
| `dev-root` | Start root Sass + TS watch |
| `dev-linktree` | Start linktree live server |
| `dev-myfeed` | Start MyFeed dev server |
| `dev-mygames` | Start MyGames dev server |
| `clean` | Clean all build artifacts |
| `clean-all` | Clean all build artifacts + node_modules |
| `test` | Run all tests |
| `help` | Show help message |

### Options
- `--force` or `-f`: Force rebuild (clean before build)
- `--verbose` or `-v`: Verbose output (shows all commands)

## 🔧 Individual Project Scripts

Each project has its own `build.sh` script in its `1.ops/` directory.

### Linktree (Static HTML/CSS/JS)

```bash
cd linktree/1.ops
./build.sh <action>
```

**Actions:**
- `build` - Validate HTML/CSS/JS files
- `dev` - Start development server (http://localhost:8000)
- `watch` - Watch files for changes
- `clean` - Clean build artifacts
- `lint` - Lint HTML/CSS/JS files
- `minify` - Minify CSS and JS
- `test` - Run validation tests

**Tech Stack:**
- Static HTML5
- CSS3 with glassmorphism
- Vanilla JavaScript
- Swiper.js (CDN)

---

### CV Web (Sass)

```bash
cd cv_web/1.ops
./build.sh <action>
```

**Actions:**
- `build` - Build Sass to CSS (production, compressed)
- `dev` - Build Sass + watch for changes
- `watch` - Watch Sass files for changes
- `clean` - Clean build artifacts
- `lint` - Lint Sass files
- `test` - Run validation tests

**Tech Stack:**
- Sass/SCSS
- Modern CSS architecture

**Output:** `cv_web/style.css`

---

### MyFeed (Vue 3 + Vite)

```bash
cd myfeed/1.ops
./build.sh <action>
```

**Actions:**
- `build` - Build for production
- `dev` - Start Vite development server
- `preview` - Preview production build
- `clean` - Clean build artifacts
- `lint` - Lint Vue/JS/TS files
- `format` - Format code with Prettier
- `test` - Run tests
- `test:unit` - Run unit tests
- `typecheck` - Run TypeScript type checking

**Tech Stack:**
- Vue 3 (Composition API)
- Vite
- TypeScript
- Pinia (state management)
- Vue Router

**Output:** `myfeed/dist/`

---

### MyGames (SvelteKit)

```bash
cd mygames/1.1.ops
./build.sh <action>
```

**Actions:**
- `build` - Build for production (static adapter)
- `dev` - Start SvelteKit development server
- `preview` - Preview production build
- `clean` - Clean build artifacts
- `lint` - Lint Svelte/JS/TS files
- `format` - Format code with Prettier
- `check` - Run svelte-check for type checking
- `test` - Run tests
- `test:unit` - Run unit tests

**Tech Stack:**
- SvelteKit
- TypeScript
- Static adapter (for GitHub Pages)
- Vite

**Project Location:** `mygames/1.3.svelte/`
**Output:** `mygames/1.3.svelte/build/`

## 🔄 GitHub Actions Equivalence

This build system replicates the GitHub Actions workflow (`.github/workflows/deploy.yml`):

| GitHub Action Step | Local Command |
|-------------------|---------------|
| Build Root Sass | `./1.ops/build_main.sh build-root` |
| Build CV Web Sass | `./1.ops/build_main.sh build-cv-web` |
| Build TypeScript | `cd 1.ops && npm run ts:build` |
| Build MyFeed | `./1.ops/build_main.sh build-myfeed` |
| Build MyGames | `./1.ops/build_main.sh build-mygames` |
| Build All | `./1.ops/build_main.sh build` |

## 🧪 Testing Locally

### Test Full Deployment Build
```bash
# Clean everything
./1.ops/build_main.sh clean-all

# Build everything from scratch
./1.ops/build_main.sh build

# Verify builds exist
ls -lah myfeed/dist/
ls -lah mygames/1.3.svelte/build/
ls -lah cv_web/style.css
ls -lah linktree/index.html
```

### Test Development Workflow
```bash
# Option 1: Start all dev servers (requires tmux)
./1.ops/build_main.sh dev

# Option 2: Start individual servers in separate terminals
# Terminal 1:
./1.ops/build_main.sh dev-root

# Terminal 2:
./1.ops/build_main.sh dev-linktree

# Terminal 3:
./1.ops/build_main.sh dev-myfeed

# Terminal 4:
./1.ops/build_main.sh dev-mygames
```

## 📦 Dependencies

### System Requirements
- **Node.js** >= 18.x
- **npm** >= 9.x
- **Python 3** (for simple HTTP server)
- **Sass** (via npm)
- **tmux** (optional, for concurrent dev servers)
- **inotify-tools** (optional, for file watching)

### Install Dependencies
```bash
# Install all npm dependencies
cd 1.ops && npm install
cd ../myfeed && npm install
cd ../mygames/1.3.svelte && npm install

# Or use the orchestrator (recommended)
./1.ops/build_main.sh build  # Auto-installs deps if missing
```

### Optional Tools
```bash
# For HTML validation
sudo apt-get install tidy

# For CSS linting
npm install -g csslint

# For file watching
sudo apt-get install inotify-tools

# For concurrent dev servers
sudo apt-get install tmux
```

## 🐛 Troubleshooting

### Build Fails with "npm not found"
```bash
# Install Node.js and npm
sudo apt-get install nodejs npm
```

### "Port already in use" Error
```bash
# Find and kill the process using the port
lsof -ti:8000 | xargs kill -9

# Or use a different port (scripts auto-detect)
```

### MyGames Build Path Issues
The MyGames project is located at `mygames/1.3.svelte/`. The build script in `mygames/1.1.ops/build.sh` automatically navigates to the correct directory.

### Sass Compilation Errors
```bash
# Reinstall Sass
cd 1.ops
npm install sass --save-dev

# Test Sass directly
npm run sass:build
```

### TypeScript Compilation Errors
```bash
# Reinstall TypeScript
cd 1.ops
npm install typescript --save-dev

# Test TypeScript directly
npm run ts:build
```

## 📝 Adding New Projects

To add a new project to the build system:

1. **Create the project directory structure:**
   ```bash
   mkdir -p new-project/1.ops
   ```

2. **Create a `build.sh` script** in `new-project/1.ops/`:
   - Copy from an existing project's `build.sh`
   - Customize for your framework (React, Angular, etc.)
   - Update `PROJECT_NAME` and `PROJECT_DIR` variables

3. **Make it executable:**
   ```bash
   chmod +x new-project/1.ops/build.sh
   ```

4. **Test it:**
   ```bash
   ./new-project/1.ops/build.sh help
   ./new-project/1.ops/build.sh build
   ```

5. **Add to main orchestrator** (`1.ops/build_main.sh`):
   - Add `build-new-project` action
   - Add `dev-new-project` action
   - Include in `build_all()` function

6. **Update GitHub Actions** (`.github/workflows/deploy.yml`):
   - Add build step for the new project
   - Add conditional check if needed
   - Add copy step in deployment

## 🎯 Best Practices

1. **Always test locally before pushing:**
   ```bash
   ./1.ops/build_main.sh build
   ```

2. **Use force rebuild when dependencies change:**
   ```bash
   ./1.ops/build_main.sh build --force
   ```

3. **Clean before major changes:**
   ```bash
   ./1.ops/build_main.sh clean-all
   ```

4. **Use individual build scripts for focused work:**
   ```bash
   cd myfeed/1.ops
   ./build.sh dev  # Work only on MyFeed
   ```

5. **Check logs for errors:**
   - Build scripts output colored logs
   - 🔵 Blue = Info
   - 🟢 Green = Success
   - 🟡 Yellow = Warning
   - 🔴 Red = Error

## 📚 Examples

### Example 1: Fresh Clone Setup
```bash
# Clone repository
git clone <repo-url>
cd front-Github_io

# Build everything
./1.ops/build_main.sh build

# Start development
./1.ops/build_main.sh dev
```

### Example 2: Update Linktree Only
```bash
# Make changes to linktree files
vim linktree/index.html

# Test changes
./1.ops/build_main.sh build-linktree

# Start dev server
./1.ops/build_main.sh dev-linktree
```

### Example 3: Deploy Preparation
```bash
# Clean everything
./1.ops/build_main.sh clean-all

# Build from scratch
./1.ops/build_main.sh build

# Run tests
./1.ops/build_main.sh test

# Commit and push
git add .
git commit -m "Your changes"
git push
```

## 🔗 Related Files

- `.github/workflows/deploy.yml` - GitHub Actions CI/CD pipeline
- `1.ops/package.json` - Root build dependencies
- `myfeed/package.json` - MyFeed dependencies
- `mygames/1.3.svelte/package.json` - MyGames dependencies

## 📖 Documentation

- [GitHub Actions Workflow](.github/workflows/deploy.yml)
- [Vite Documentation](https://vitejs.dev/)
- [SvelteKit Documentation](https://kit.svelte.dev/)
- [Sass Documentation](https://sass-lang.com/)

---

**Last Updated:** 2025-11-23
**Maintainer:** Diego Nepomuceno Marcos
