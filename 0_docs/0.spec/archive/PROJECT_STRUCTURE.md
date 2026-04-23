# Standard Project Folder Structure

**Version:** 1.0
**Last Updated:** 2025-11-24

This document defines the standardized folder structure for all projects in this repository.

---

## Table of Contents
- [Standard Structure](#standard-structure)
- [Folder Descriptions](#folder-descriptions)
- [Project Types](#project-types)
- [Symlink Management](#symlink-management)
- [Migration Guide](#migration-guide)
- [Best Practices](#best-practices)

---

## Standard Structure

```
project-name/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD pipeline
│
├── 0.spec/                         # Specifications & Documentation
│   ├── spec.md                     # Simple stack explanation
│   ├── spec-kit.md                 # Full specification (GitHub model)
│   └── archive/                    # Deprecated/old specifications
│
├── 1.ops/                          # Operations & Build Management
│   ├── analytics/                  # Analytics scripts & configs
│   │   ├── gtm-config.json         # Google Tag Manager
│   │   ├── matomo.js               # Matomo tracking
│   │   └── tracking.js             # Custom tracking
│   ├── logs/                       # Build/deployment logs
│   │   ├── build-YYYY-MM-DD.log
│   │   └── deploy-YYYY-MM-DD.log
│   ├── CI/                         # CI/CD & Config Symlinks
│   │   ├── package.json → ../../package.json
│   │   ├── package-lock.json → ../../package-lock.json
│   │   ├── build.js → ../../build.js
│   │   ├── vite.config.ts → ../../vite.config.ts
│   │   ├── tsconfig.json → ../../tsconfig.json
│   │   ├── tailwind.config.js → ../../tailwind.config.js
│   │   └── deploy.yml → ../../.github/workflows/deploy.yml
│   ├── build.sh                    # Main build script
│   │                               # Modes: watch, dev, test, deploy
│   └── spec-ops.md                 # Build & deployment documentation
│
├── src_static/                     # Static Source (for non-framework)
│   ├── scss/                       # SCSS → compiles to style.css (root)
│   └── typescript/                 # TS → compiles to script.js (root)
│
├── src/                            # Framework Source (Vue/Svelte)
│   ├── components/                 # Reusable components
│   ├── views/                      # Page components
│   ├── stores/                     # State management
│   ├── composables/                # Vue composables
│   ├── utils/                      # Utility functions
│   ├── types/                      # TypeScript types
│   ├── styles/                     # Global styles
│   ├── App.vue / +layout.svelte    # Root component
│   └── main.ts                     # Entry point
│
├── dist/                           # Build Output
│   ├── index.html                  # Regular build (from src/)
│   ├── index_spa.html              # Standalone SPA (from src/)
│   ├── assets/                     # Bundled JS/CSS
│   │
│   └── (If static site):
│       ├── index.html              # Compiled HTML
│       ├── script.js               # From src_static/typescript/
│       └── style.css               # From src_static/scss/
│
├── public/                         # Static Assets (copied as-is)
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│
├── node_modules/                   # NPM dependencies (gitignored)
│
├── package.json                    # NPM configuration
├── package-lock.json               # Dependency lock file
├── build.js                        # Dual build script (regular + SPA)
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── script.js.map                   # Source map (if static)
└── README.md                       # Project overview
```

---

## Folder Descriptions

### 0.spec/ - Specifications & Documentation

**Purpose:** Technical specifications, architecture decisions, and project documentation.

**Required Files:**

**`spec.md`** - Simple stack explanation (< 200 lines)
- Technologies used
- Key dependencies
- Quick start guide
- Basic architecture overview

**`spec-kit.md`** - Full specification (GitHub model format)
- Detailed architecture
- Component documentation
- API specifications
- Data models
- Design system
- User flows

**Optional:**
```
archive/           # Deprecated specifications
research.md        # Research notes
decisions.md       # Architecture Decision Records (ADR)
roadmap.md         # Feature roadmap
```

**Best Practices:**
- Keep `spec.md` concise and up-to-date
- Move outdated specs to `archive/`
- Use `spec-kit.md` as single source of truth
- Review quarterly

---

### 1.ops/ - Operations & Build Management

**Purpose:** All operational concerns - build, deployment, analytics, and CI/CD.

#### Subdirectories:

**`analytics/`** - Analytics & Tracking
```
analytics/
├── gtm-config.json      # Google Tag Manager configuration
├── matomo.js            # Matomo tracking code
├── tracking.js          # Custom tracking logic
└── ga4-config.json      # Google Analytics 4 config
```

**`logs/`** - Build & Deployment Logs
```
logs/
├── build-2025-11-24.log
├── deploy-2025-11-24.log
├── error.log
└── .gitkeep             # Keep folder in git
```

**`CI/`** - CI/CD & Configuration Symlinks
```
CI/
├── package.json → ../../package.json
├── package-lock.json → ../../package-lock.json
├── build.js → ../../build.js
├── vite.config.ts → ../../vite.config.ts
├── tsconfig.json → ../../tsconfig.json
├── tailwind.config.js → ../../tailwind.config.js
└── deploy.yml → ../../.github/workflows/deploy.yml
```

**Why CI/ subfolder with symlinks?**
- ✅ All CI/CD related files in one place
- ✅ Easy reference during operations
- ✅ Original files stay at root (tools expect them there)
- ✅ Single source of truth (symlinks point to root)
- ✅ No duplication

#### Core Files:

**`build.sh`** - Main build script with modes
```bash
#!/bin/bash
# Usage: ./1.ops/build.sh [mode]
# Modes: watch, dev, test, deploy

case "$1" in
  watch)
    # Watch mode for active development
    ;;
  dev)
    # Development build with source maps
    ;;
  test)
    # Test build with coverage
    ;;
  deploy)
    # Production build optimized
    ;;
esac
```

**`spec-ops.md`** - Operational documentation
- Build process explanation
- Deployment workflow
- Environment variables
- CI/CD pipeline details
- Troubleshooting guide
- Command reference

---

### src_static/ - Static Source Files

**Purpose:** Source files for static sites using preprocessors (SCSS, TypeScript).

**When to Use:**
- ✅ Static sites (like Linktree) without frameworks
- ✅ Projects with SCSS/Sass compiled to root CSS
- ✅ TypeScript utilities compiled to root JS
- ❌ NOT for Vue/Svelte projects (use `src/` instead)

**Structure:**
```
src_static/
├── scss/                # SCSS source files
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── components/
│   │   └── _buttons.scss
│   ├── layout/
│   │   └── _grid.scss
│   └── main.scss        # Main entry point
│
└── typescript/          # TypeScript source
    ├── utils/
    └── main.ts          # Main entry point
```

**Build Flow:**
```
Development:
src_static/scss/ → compile → style.css (root)
src_static/typescript/ → compile → script.js (root)

Production:
src_static/ → compile → dist/
```

---

### src/ - Framework Source Code

**Purpose:** Main application source code for Vue/Svelte projects.

#### Vue + Vite Structure:
```
src/
├── components/
│   ├── common/          # Shared components
│   │   ├── Button.vue
│   │   └── Card.vue
│   ├── layouts/         # Layout components
│   │   ├── Header.vue
│   │   └── Footer.vue
│   └── features/        # Feature-specific components
├── views/               # Page components
│   ├── HomePage.vue
│   └── AboutPage.vue
├── stores/              # Pinia stores
│   └── userStore.ts
├── composables/         # Vue composables
│   └── useAuth.ts
├── router/              # Vue Router
│   └── index.ts
├── utils/               # Utility functions
│   └── helpers.ts
├── types/               # TypeScript types
│   └── User.ts
├── styles/              # Global styles
│   └── main.css
├── App.vue              # Root component
└── main.ts              # Entry point
```

#### SvelteKit Structure:
```
src/
├── lib/
│   ├── components/      # Svelte components
│   │   ├── Button.svelte
│   │   └── Card.svelte
│   ├── stores/          # Svelte stores
│   │   └── user.ts
│   └── utils/           # Utilities
├── routes/              # SvelteKit routes
│   ├── +page.svelte
│   ├── +layout.svelte
│   └── about/
│       └── +page.svelte
├── app.html             # HTML template
└── app.css              # Global styles
```

---

### dist/ - Build Output

**Purpose:** Compiled/bundled application ready for deployment.

#### Framework Projects (Vue, Svelte):
```
dist/
├── index.html           # Regular multi-file build
│                        # - References external assets
│                        # - Code splitting enabled
│                        # - Optimized for web
│
├── index_spa.html       # Standalone single-file build
│                        # - All JS/CSS inlined
│                        # - No external dependencies
│                        # - Opens with file://
│                        # - Perfect for offline/distribution
│
└── assets/              # Bundled assets
    ├── index-abc123.js  # Hashed for caching
    └── index-def456.css # Minified & optimized
```

#### Static Sites (Linktree):
```
dist/
├── index.html           # Compiled HTML
├── style.css            # From src_static/scss/
├── script.js            # From src_static/typescript/
└── assets/              # From public/
    └── images/
```

**Git Handling:**
- Usually gitignored (rebuilt on deployment)
- Exception: GitHub Pages projects (committed)

---

### public/ - Public Static Assets

**Purpose:** Static files served as-is without processing.

**Contents:**
```
public/
├── favicon.ico          # Site favicon
├── robots.txt           # SEO directives
├── sitemap.xml          # Sitemap
├── images/              # Static images
└── fonts/               # Web fonts
```

**Build Behavior:**
- Copied directly to `dist/` without processing
- URLs reference them from root: `/favicon.ico`

**Difference from `src_static/`:**
- `public/` → Copied AS-IS to dist
- `src_static/` → COMPILED then to dist

---

### 1.ops/CI/ - Symlink Directory

**Purpose:** Centralized access to all CI/CD and configuration files.

**Creating Symlinks:**
```bash
cd 1.ops/CI/

# Link configuration files
ln -s ../../package.json package.json
ln -s ../../package-lock.json package-lock.json
ln -s ../../build.js build.js
ln -s ../../vite.config.ts vite.config.ts
ln -s ../../tsconfig.json tsconfig.json
ln -s ../../tailwind.config.js tailwind.config.js

# Link workflow
ln -s ../../.github/workflows/deploy.yml deploy.yml
```

**Verifying Symlinks:**
```bash
# List all symlinks
ls -la 1.ops/CI/

# Test a symlink
cat 1.ops/CI/package.json  # Should show root package.json
```

**Important Notes:**
- ⚠️ Git must be configured to handle symlinks
- ⚠️ Windows users: Use Git Bash or WSL
- ✅ Original files ALWAYS at root
- ✅ Symlinks IN 1.ops/CI/ point TO root
- ✅ Tools (npm, vite, tsc) still work normally

---

## Project Types

### Type 1: Vue + Vite (Nexus, MyFeed)

```
nexus/
├── 0.spec/              ✅
├── 1.ops/               ✅
│   ├── analytics/
│   ├── logs/
│   ├── CI/              ✅ Symlinks
│   ├── build.sh
│   └── spec-ops.md
├── src/                 ✅ Vue source
├── dist/                ✅ Both regular + SPA
│   ├── index.html
│   ├── index_spa.html
│   └── assets/
├── public/              ✅
├── build.js             ✅ Dual build script
└── vite.config.ts       ✅
```

**Build Commands:**
```bash
# Development
npm run dev

# Build both versions
npm run build  # Creates both index.html and index_spa.html

# Preview
npm run preview
```

---

### Type 2: SvelteKit (MyGames)

```
mygames/
├── 0.spec/              ✅
├── 1.ops/               ✅
│   ├── analytics/
│   ├── logs/
│   ├── CI/              ✅ Symlinks
│   ├── build.sh
│   └── spec-ops.md
├── src/                 ✅ SvelteKit source
├── build/               ⚠️  SvelteKit uses 'build' not 'dist'
├── static/              ⚠️  SvelteKit uses 'static' not 'public'
└── svelte.config.js     ✅
```

**Note:** SvelteKit has different conventions:
- `build/` instead of `dist/`
- `static/` instead of `public/`
- Multi-page by default (harder to create standalone SPA)

---

### Type 3: Static Site (Linktree)

```
linktree/
├── 0.spec/              ✅
├── 1.ops/               ✅
│   ├── analytics/
│   ├── logs/
│   ├── CI/              ✅ Symlinks
│   ├── build.sh
│   └── spec-ops.md
├── src_static/          ✅ SCSS & TS sources
│   ├── scss/            → style.css
│   └── typescript/      → script.js
├── dist/                ✅ Compiled output
├── public/              ✅ Static assets
├── index.html           ✅ Root HTML
├── style.css            ✅ Compiled CSS (dev)
└── script.js            ✅ Compiled JS (dev)
```

**Build Flow:**
```
Development:
src_static/ → compile → root (style.css, script.js)

Production:
src_static/ → compile → dist/
```

---

## Symlink Management

### Why Symlinks?

**Problem:** Tools expect configs at root, but we want them organized in `1.ops/`

**Solution:** Keep originals at root, create symlinks in `1.ops/CI/`

**Benefits:**
- ✅ Tools work normally (npm, vite, tsc find files at root)
- ✅ Easy access from ops folder for reference
- ✅ No file duplication
- ✅ Single source of truth

### Creating All Symlinks

```bash
#!/bin/bash
# Run from project root

cd 1.ops/CI/ || exit

# Configuration files
ln -sf ../../package.json package.json
ln -sf ../../package-lock.json package-lock.json
ln -sf ../../tsconfig.json tsconfig.json
ln -sf ../../tailwind.config.js tailwind.config.js
ln -sf ../../vite.config.ts vite.config.ts

# Build scripts
ln -sf ../../build.js build.js

# CI/CD
ln -sf ../../.github/workflows/deploy.yml deploy.yml

echo "✅ All symlinks created in 1.ops/CI/"
```

### Verifying Symlinks

```bash
# Check if symlinks work
ls -la 1.ops/CI/

# Test reading through symlink
cat 1.ops/CI/package.json

# Find broken symlinks
find 1.ops/CI/ -xtype l
```

### Git Configuration

```bash
# Enable symlink support in Git
git config core.symlinks true

# Check current setting
git config core.symlinks
```

---

## Migration Guide

### Migrating Existing Project to New Structure

#### Step 1: Backup
```bash
git add .
git commit -m "Backup before structure migration"
```

#### Step 2: Create New Folders
```bash
mkdir -p 0.spec/archive
mkdir -p 1.ops/{analytics,logs,CI}
mkdir -p src_static/{scss,typescript}
```

#### Step 3: Move Existing Folders

**If you have numbered prefixes:**
```bash
# Move specs
mv spec 0.spec 2>/dev/null || mv 0.spec 0.spec
mv a_spec 0.spec 2>/dev/null || true

# Move ops
mv ops 1.ops 2>/dev/null || mv 1.ops 1.ops
mv b_ops 1.ops 2>/dev/null || true

# Move src (if numbered)
mv 2.src src 2>/dev/null || true

# Move static sources
mv 3.sass src_static/scss 2>/dev/null || true
mv 4.ts src_static/typescript 2>/dev/null || true

# Move analytics
mv 5.analytics 1.ops/analytics 2>/dev/null || true
mv analytics 1.ops/analytics 2>/dev/null || true

# Move assets (if separate)
mv 2.assets public 2>/dev/null || true
mv c_assets public 2>/dev/null || true
```

#### Step 4: Create Symlinks
```bash
cd 1.ops/CI/

ln -s ../../package.json package.json
ln -s ../../package-lock.json package-lock.json
ln -s ../../build.js build.js
ln -s ../../vite.config.ts vite.config.ts
ln -s ../../tsconfig.json tsconfig.json
ln -s ../../tailwind.config.js tailwind.config.js
ln -s ../../.github/workflows/deploy.yml deploy.yml

cd ../..
```

#### Step 5: Create Documentation Files
```bash
# Create spec.md
cat > 0.spec/spec.md << 'EOF'
# Project Specification

## Stack
- Framework: [Vue/Svelte/Static]
- Build Tool: [Vite/SvelteKit]
- Language: TypeScript
- Styling: [Tailwind/SCSS]

## Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`

## Build
\`\`\`bash
npm run build
\`\`\`
EOF

# Create spec-ops.md
cat > 1.ops/spec-ops.md << 'EOF'
# Operations Specification

## Build Process
[Document build steps]

## Deployment
[Document deployment process]

## CI/CD
[Document CI/CD pipeline]
EOF
```

#### Step 6: Update Import Paths

**If you moved source folders, update imports:**
```bash
# Find and update import paths (example)
find src -type f -name "*.ts" -o -name "*.vue" | \
  xargs sed -i 's|@/2.src/|@/src/|g'
```

#### Step 7: Test Build
```bash
npm install
npm run dev    # Test development
npm run build  # Test production build
```

#### Step 8: Commit Changes
```bash
git add .
git commit -m "Migrate to standard folder structure

- Created 0.spec/ and 1.ops/ folders
- Organized analytics and logs
- Created CI/ folder with symlinks
- Updated documentation
- Tested build successfully"
```

---

## Best Practices

### 1. Folder Organization
- ✅ Use `0.spec/` and `1.ops/` for consistent sorting
- ✅ Keep source in `src/` (frameworks) or `src_static/` (static sites)
- ✅ Never mix both `src/` and `src_static/` in same project
- ✅ Keep `node_modules/` and configs at root

### 2. Documentation
- ✅ Keep `spec.md` under 200 lines
- ✅ Use `spec-kit.md` for comprehensive docs
- ✅ Update `spec-ops.md` when changing build process
- ✅ Archive old specs in `0.spec/archive/`

### 3. Symlinks
- ✅ Always create symlinks FROM `1.ops/CI/` TO root
- ✅ Use relative paths: `../../package.json`
- ✅ Enable symlinks in Git: `git config core.symlinks true`
- ✅ Test symlinks after creation
- ⚠️ Windows users: Use Git Bash or WSL

### 4. Build Scripts
- ✅ Use `1.ops/build.sh` as main build entry point
- ✅ Support modes: watch, dev, test, deploy
- ✅ Log to `1.ops/logs/` with timestamps
- ✅ Document usage in `spec-ops.md`

### 5. Analytics
- ✅ Keep ALL analytics code in `1.ops/analytics/`
- ✅ Don't inline analytics in components
- ✅ Load analytics asynchronously
- ✅ Document tracking in `spec-ops.md`

### 6. Static vs Framework
- ✅ Static sites → Use `src_static/`
- ✅ Framework projects → Use `src/`
- ❌ Never use both in same project

### 7. Build Outputs
- ✅ Framework: Both `index.html` + `index_spa.html` in `dist/`
- ✅ Static: Compiled files in `dist/` for production
- ✅ Always gitignore `node_modules/`
- ⚠️ GitHub Pages: Commit `dist/` for deployment

---

## Standard .gitignore

```gitignore
# Dependencies
node_modules/

# Build output (except GitHub Pages)
dist/
build/
.svelte-kit/

# Development
.vite/
.cache/

# Environment
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
1.ops/logs/*.log

# OS
.DS_Store
Thumbs.db
.AppleDouble
.LSOverride

# IDE
.vscode/
.idea/
*.swp
*.swo
*.sublime-*

# Testing
coverage/
.nyc_output/

# Temporary
temp/
tmp/
*.tmp

# Source maps (optional)
*.map
```

---

## File Naming Conventions

### Configuration Files
- `package.json` - NPM configuration
- `build.js` - Build scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind configuration

### Source Files
- **Vue**: `PascalCase.vue` (e.g., `MyComponent.vue`)
- **Svelte**: `PascalCase.svelte` (e.g., `MyComponent.svelte`)
- **TypeScript**: `camelCase.ts` (e.g., `myUtility.ts`)
- **Types**: `PascalCase.ts` (e.g., `UserTypes.ts`)
- **Styles**: `kebab-case.scss` (e.g., `main-styles.scss`)

### Documentation
- Use `.md` (Markdown) format
- `kebab-case` naming (e.g., `spec-ops.md`)
- Keep in `0.spec/` folder

---

## Quick Reference Commands

```bash
# Create new project structure
./1.ops/create-structure.sh

# Migrate existing project
./1.ops/migrate-structure.sh

# Create symlinks
cd 1.ops/CI && ./create-symlinks.sh

# Build (development)
./1.ops/build.sh dev

# Build (production)
./1.ops/build.sh deploy

# Watch mode
./1.ops/build.sh watch
```

---

## Examples

Reference implementations:
- **Nexus**: Vue + Vite with dual build
- **MyFeed**: Vue + Vite with complex features
- **MyGames**: SvelteKit multi-page application
- **Linktree**: Static site with SCSS/TypeScript

---

## Maintenance

### Regular Tasks
- **Weekly**: Review logs in `1.ops/logs/`
- **Monthly**: Clean old logs
- **Quarterly**: Review and update specs
- **Yearly**: Archive deprecated specs

### Checklist
- [ ] All symlinks working
- [ ] Documentation up-to-date
- [ ] Build scripts functional
- [ ] Analytics configured
- [ ] CI/CD pipeline tested

---

## Support

For issues or questions:
1. Check `0.spec/spec-ops.md`
2. Review this document
3. Check project-specific README
4. Ask team for help

---

**End of Document**

Version: 1.0
Last Updated: 2025-11-24
Maintained by: Development Team
