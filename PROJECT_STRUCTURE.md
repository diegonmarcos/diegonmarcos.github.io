# Standard Project Folder Structure

This document defines the standardized folder structure for all projects in this repository.

## Standard Structure

```
project-name/
├── src/              # Source code (required)
│   ├── components/   # Reusable components
│   ├── views/        # Pages/views
│   ├── styles/       # Stylesheets
│   ├── utils/        # Utility functions
│   └── types/        # TypeScript types
├── dist/             # Build output (generated, required)
│   ├── index.html
│   ├── index_spa.html  # Standalone SPA version
│   └── assets/
├── spec/             # Specifications & documentation (required)
│   ├── README.md     # Project overview
│   ├── architecture.md
│   ├── components.md
│   ├── data-models.md
│   └── archive/      # Old/deprecated specs
├── ops/              # Operations & build scripts (required)
│   ├── README.md     # Operations documentation
│   ├── build.sh      # Build scripts
│   ├── deploy.sh     # Deployment scripts
│   └── logs/         # Build/deploy logs
├── analytics/        # Analytics configuration (optional)
│   ├── matomo.js
│   └── config.json
├── assets/           # Static assets (required)
│   ├── images/
│   ├── fonts/
│   ├── icons/
│   └── data/         # JSON/static data files
├── public/           # Public static files (framework-specific)
├── build.js          # Dual build script (if using standalone SPA)
├── package.json
├── vite.config.ts    # or svelte.config.js
├── tsconfig.json
├── tailwind.config.js
└── README.md

```

## Folder Descriptions

### Core Folders (Required)

- **`src/`** - All source code
  - Must contain: `main.ts/js`, `App.vue/svelte`
  - Organized by feature or component type

- **`dist/`** - Build output (gitignored except for GitHub Pages projects)
  - Contains compiled/bundled files
  - Always includes `index.html`
  - Includes `index_spa.html` for standalone SPA version

- **`spec/`** - Project specifications and documentation
  - Technical requirements
  - Architecture decisions
  - Component documentation
  - Data models and API specs

- **`ops/`** - Operations, build scripts, and DevOps
  - Build and deployment scripts
  - CI/CD configurations
  - Logs and monitoring
  - Environment setup

- **`assets/`** - Static assets and resources
  - Images, fonts, icons
  - Static data files (JSON, CSV, etc.)
  - Media files
  - Should be organized by type

### Optional Folders

- **`analytics/`** - Analytics and tracking
  - Only if project uses analytics
  - Configuration files
  - Custom tracking scripts

- **`public/`** - Framework-specific public directory
  - Vite/Vue: `public/`
  - SvelteKit: `static/`
  - Files copied as-is to dist

## Naming Conventions

### Current Projects Use Numbers (Legacy)
Some projects use numbered prefixes (e.g., `0.spec/`, `1.ops/`):
- This is being **deprecated**
- New projects should use the names above
- Will be migrated gradually

### New Standard (Recommended)
- Use descriptive names without numbers
- Lowercase, hyphen-separated if needed
- Clear and self-documenting

## File Naming

- **Config files**: Root level (e.g., `vite.config.ts`, `tailwind.config.js`)
- **Build scripts**: In `ops/` folder
- **Documentation**: Markdown format (`.md`)
- **Source files**: Follow framework conventions
  - Vue: PascalCase for components (`MyComponent.vue`)
  - Svelte: PascalCase for components (`MyComponent.svelte`)
  - TypeScript: camelCase for utilities, PascalCase for types

## Git Ignore Patterns

Standard `.gitignore` entries:
```
node_modules/
dist/ # (except for GitHub Pages projects)
.env
.env.local
*.log
.DS_Store
.vscode/
.idea/
coverage/
```

## Migration Guide

To migrate an existing project:

1. **Create missing folders**:
   ```bash
   mkdir -p spec ops analytics assets
   ```

2. **Move/rename numbered folders** (if applicable):
   ```bash
   mv 0.spec spec
   mv 1.ops ops
   mv 2.assets assets
   mv 5.analytics analytics
   ```

3. **Update references** in:
   - Build scripts
   - Import paths
   - Documentation
   - CI/CD workflows

4. **Add README.md** to each major folder

## Examples

### Vue/Vite Project (nexus, myfeed)
```
nexus/
├── src/
├── dist/
├── spec/
├── ops/
├── analytics/
├── assets/
├── public/
├── build.js
└── vite.config.ts
```

### SvelteKit Project (myprofile)
```
myprofile/
├── src/
├── build/         # SvelteKit's dist equivalent
├── spec/
├── ops/
├── assets/
├── static/        # SvelteKit's public equivalent
└── svelte.config.js
```

### Simple Static Site (linktree)
```
linktree/
├── src/           # If using preprocessors
├── spec/
├── ops/
├── analytics/
├── assets/
├── index.html
├── style.css
└── script.js
```

## Maintenance

- Review structure quarterly
- Update documentation as needed
- Keep archived specs in `spec/archive/`
- Clean up old build logs regularly

---

Last updated: 2025-11-24
