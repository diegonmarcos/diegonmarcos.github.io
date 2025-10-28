# Operations Specification

This document outlines the operational aspects, workflows, and deployment processes for the Diego Nepomuceno Marcos portfolio website.

---

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Repository Structure](#repository-structure)
3. [Deployment Pipeline](#deployment-pipeline)
4. [Git Operations](#git-operations)
5. [Workflows](#workflows)
6. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Technology Stack
- **Frontend**: Pure HTML, CSS, JavaScript (no framework)
- **Styling**: Sass/SCSS with ITCSS architecture
- **Blog**: Jekyll (Markdown → HTML conversion)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Version Control**: Git

### Site Components
```
Website Root (/)
├── index.html          # Main landing page
├── style.css           # Compiled CSS (auto-generated from Sass)
├── script.js           # Interactive features (Clippy assistant, animations)
├── /0.spec             # Specifications and documentation
├── /1.ops              # Operations scripts and build tools
├── /2.assets           # Images, icons, media files
├── /3.sass             # Sass source files (ITCSS architecture)
├── /linktree           # Social links page
│   ├── /0.spec         # Linktree specifications
│   ├── /1.ops          # Linktree operations
│   ├── /2.assets       # Linktree assets
│   ├── /3.sass         # Linktree Sass files
│   └── /4.jenkyls      # Linktree Jekyll files
├── /cv_web             # Interactive CV
│   ├── style.css       # Compiled CV CSS
│   ├── /0.spec         # CV specifications
│   ├── /1.ops          # CV operations
│   ├── /2.assets       # CV assets
│   └── /3.sass         # CV Sass source files (renamed from scss)
├── /cv_pdf             # PDF curriculum vitae
│   ├── /0.spec         # CV PDF specifications
│   ├── /1.ops          # CV PDF operations
│   ├── /2.assets       # CV PDF assets
│   ├── /3.sass         # CV PDF Sass files
│   └── /4.jenkyls      # CV PDF Jekyll files
└── /blog               # Jekyll-powered blog (Markdown)
```

---

## Repository Structure

### Directory Organization Principles

The project follows a numbered directory structure for better organization and clarity:

- **0.spec/** - Specifications and documentation (e.g., spec.md, spec_ops.md)
- **1.ops/** - Operations scripts and build tools (e.g., build.sh)
- **2.assets/** - Static assets like images, icons, and media files
- **3.sass/** - Sass/SCSS source files
- **4.jenkyls/** - Jekyll configuration and templates (where applicable)

This structure is applied consistently across the root and subdirectories (cv_web, cv_pdf, linktree).

### Key Files & Directories

#### Root Level
- `index.html` - Portfolio landing page
- `style.css` - Compiled CSS (generated from Sass)
- `script.js` - Features: Clippy assistant, space background, scroll animations
- `package.json` - Node.js dependencies and build scripts
- `.gitignore` - Excludes: video files, build artifacts, symlinks

#### Organized Directories
- `/0.spec/` - Specification and documentation files (spec.md, spec_ops.md)
- `/1.ops/` - Operations scripts (build.sh for Sass compilation and deployment)
- `/2.assets/` - Media files (images, icons, videos)
- `/3.sass/` - Sass source files following ITCSS architecture

#### Sass Source Files (`/3.sass`)
```
/3.sass
├── abstracts/          # Variables, mixins, functions (no CSS output)
├── base/               # Foundation styles (reset, typography)
├── layout/             # Major structural components (header, sections)
├── components/         # Reusable UI elements (buttons, cards, clippy)
├── themes/             # Theme variations (dark, light)
├── utilities/          # Helpers, animations, media queries
└── style.scss          # Master import file (ITCSS methodology)
```

#### Blog Directory (`/blog`)
```
/blog
├── _config.yml              # Jekyll configuration
├── _layouts/
│   └── default.html         # Dark theme HTML template
└── index.md                 # Blog content (converted to HTML by Jekyll)
```

#### Workflows (`.github/workflows/`)
- `deploy.yml` - Main deployment pipeline
- `jekyll-deploy.yml.disabled` - Deprecated workflow (kept for reference)

---

## Deployment Pipeline

### Workflow: `deploy.yml` (Local Jekyll Build Workflow)

This workflow automates the build and deployment of the entire static site, including the Jekyll blog. It relies on a local build script to generate the blog's HTML files, which are then deployed alongside all other static assets.

**Trigger**: Push to `main` branch

**Core Logic**:
1.  **Environment Setup**: The workflow runs on a GitHub-hosted Ubuntu runner, where it sets up Node.js for Sass compilation and Ruby for Jekyll.
2.  **Sass Compilation**: Before any other build steps, the workflow compiles all Sass files to CSS:
    *   Installs Node.js dependencies (`npm install`) in both root and cv_web directories
    *   Runs `npm run sass:build` to compile Sass → CSS with compression
    *   Root: Compiles `/3.sass/style.scss` → `style.css`
    *   CV Web: Compiles `/cv_web/3.sass/style.scss` → `cv_web/style.css`
    *   Uses compressed output for optimal performance
3.  **Jekyll Build**: It executes the `./blog/build.sh build` script. This script is the heart of the blog build process:
    *   It runs `jekyll build` within the `blog` directory, which converts all Markdown files (`.md`) into HTML.
    *   It then copies the generated HTML files from the temporary `blog/_site` directory back into the `blog/` directory. This results in `.md` and `.html` files existing side-by-side (e.g., `index.md` and `index.html`).
4.  **Site Assembly**: The workflow creates a root `_site` directory to prepare for deployment. It copies all the necessary project files and directories into it:
    *   Root files (`index.html`, `style.css`, `script.js`, etc.)
    *   Static asset directories (`/2.assets`, `/linktree`, `/cv_web`, etc.)
    *   The entire `/blog` directory (containing both markdown and the newly generated HTML)
    *   Note: `/0.spec`, `/1.ops`, and `/3.sass` directories are typically excluded from deployment as they contain source files
5.  **Cleanup**: Before deploying, the workflow cleans the `_site/blog` directory to optimize the final deployment package. It removes source files that are not needed on the live site, such as:
    *   Markdown files (`*.md`)
    *   Jekyll configuration (`_config.yml`)
    *   The build script (`build.sh`)
    *   Layouts (`_layouts/`)
6.  **Upload & Deploy**: The cleaned `_site` directory is uploaded as a GitHub Pages artifact, which is then automatically deployed.

### Deployment URL
- Production: `https://diegonmarcos.github.io/`
- Blog: `https://diegonmarcos.github.io/blog/`

---

## Git Operations

### Tracked Files Policy

#### Excluded from Git (`.gitignore`)
```gitignore
# Symlinks
markdown/

# Jekyll artifacts
_site/
.jekyll-cache/
Gemfile.lock

# Build directories
blog_output/
final_site/

# Video files (prevent bloat)
*.mp4
*.mov
*.avi
*.webm
*.mkv

# Google Drive formats
*.gdoc
*.gsheet
*.gslides
```

#### Repository Size Optimization
- **Before optimization**: 227 MB (including .git history with videos)
- **After optimization**: ~42 MB deployed site
- **Key exclusion**: `.git` directory (189 MB) not deployed
- **Video files**: Untracked from Git but still deployed

### Branch Strategy
- **Main branch**: Production-ready code
- **Direct commits**: Development happens on main (single-developer workflow)

---

## Workflows

### Jekyll Blog Workflow: Local Development and Deployment

This workflow separates local development from the automated deployment process.

#### **Local Development**

For writing and previewing blog posts locally.

1.  **Edit Content**: Modify or create Markdown (`.md`) files inside the `/blog` directory.
2.  **Build HTML (Optional but Recommended)**: Run the build script to generate the HTML files locally. This is the same command the GitHub workflow uses.
    ```bash
    cd blog
    ./build.sh build
    ```
3.  **Preview Site Live (Optional)**: To see your changes in a live-reloading local server:
    ```bash
    cd blog
    ./build.sh serve
    # Visit http://localhost:4000 to preview the blog
    ```
    **Note**: The `serve` command is for local preview only and is **not** used in the deployment workflow.

#### **Deployment Process**

Deployment is fully automated via GitHub Actions on every push to the `main` branch.

1.  **Commit and Push**: Commit your changes. You can choose whether or not to include the locally generated HTML files. The `.gitignore` is configured to allow them, but the workflow will regenerate them regardless to ensure consistency.
    ```bash
    # Example: Commit only the markdown source
    git add blog/index.md
    git commit -m "Update blog post"
    git push origin main
    ```
2.  **Automatic Deployment**: The push triggers the `deploy.yml` workflow, which builds the blog HTML, assembles the full site, and deploys it to GitHub Pages as described in the "Deployment Pipeline" section.

### File Management: Side-by-Side HTML

-   The `build.sh` script places the generated `.html` file directly next to its `.md` source file in the `blog/` directory.
-   **Benefit**: This makes it clear which HTML file corresponds to which Markdown file and allows the generated site to be browsed directly in the repository if desired.
-   The deployment workflow ensures only the final HTML is published to the live site.

---

## Troubleshooting

### Common Issues

#### Build Failures

**Issue**: Exit code 1 during deployment
- **Cause**: Large files or .git directory being uploaded
- **Solution**: Verify `.gitignore` excludes unnecessary files
- **Check**: Workflow copies only necessary directories

**Issue**: Jekyll build fails
- **Cause**: Missing front matter in blog/index.md
- **Solution**: Ensure YAML front matter exists:
  ```yaml
  ---
  layout: default
  title: Title
  ---
  ```

#### Git Operations

**Issue**: Repository too large
- **Cause**: Video files tracked in Git history
- **Solution**:
  ```bash
  git rm --cached path/to/videos/*.mp4
  git add .gitignore
  git commit -m "Stop tracking video files"
  ```

**Issue**: Symlink errors
- **Cause**: Local symlinks (e.g., `markdown/`) pushed to repo
- **Solution**: Add to `.gitignore` and remove from tracking:
  ```bash
  git rm --cached markdown
  ```

#### Deployment Issues

**Issue**: Blog not displaying
- **Cause**: Jekyll not processing Markdown
- **Solution**: Verify `_config.yml` and `_layouts/default.html` exist in `/blog`

**Issue**: Static files missing
- **Cause**: Not copied in workflow
- **Solution**: Check `deploy.yml` "Copy Static Files" step includes directory

---

## Monitoring & Maintenance

### Regular Checks
- [ ] GitHub Actions workflow status
- [ ] Deployed site functionality
- [ ] Repository size (keep under 1 GB)
- [ ] Dead links in blog content

### Performance Optimization
- Minimize large asset files
- Use `.gitignore` for build artifacts
- Keep video files out of Git history
- Compress images in `/assets`

### Backup Strategy
- Primary: GitHub repository (main branch)
- Local: Clone on development machine
- Blog source: Markdown files in `/blog`

---

## Configuration Files

### Jekyll Configuration (`blog/_config.yml`)
```yaml
title: Diego's Blog
description: Blog posts and articles
markdown: kramdown
plugins: []
exclude:
  - Gemfile
  - Gemfile.lock
  - README.md
```

### GitHub Pages Settings
- Source: GitHub Actions deployment
- Custom domain: Not configured (using github.io)
- HTTPS: Enabled by default

---

## Environment Variables

No environment variables or secrets currently required.

### Future Considerations
- API keys (if analytics added)
- Custom domain DNS configuration
- CDN integration

---

## Change Log

### Recent Major Changes
- **2025-10**: Reorganized folder structure with numbered directories (0.spec, 1.ops, 2.assets, 3.sass)
- **2025-10**: Renamed `/sass` → `/3.sass` and `/cv_web/scss` → `/cv_web/3.sass`
- **2025-10**: Updated all build configurations to reflect new folder structure
- **2025-10**: Simplified deployment (removed Ruby/Jekyll complexity from root)
- **2025-10**: Moved Jekyll to `/blog` subdirectory only
- **2025-10**: Added dark theme to blog layout
- **2025-10**: Implemented Clippy assistant with pulse mode
- **2025-10**: Excluded video files from Git tracking
- **2025-10**: Fixed deployment by excluding .git directory

---

## Support & Documentation

### Internal Documentation
- `spec.md` - Technical specification of the site
- `ops_spec.md` - This file (operations guide)
- `README.md` - User-facing documentation (if exists)

### External Resources
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---

**Last Updated**: October 2025
**Maintained By**: Diego Nepomuceno Marcos
**Repository**: https://github.com/diegonmarcos/diegonmarcos.github.io
