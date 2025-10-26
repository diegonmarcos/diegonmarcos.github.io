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
- **Blog**: Jekyll (Markdown → HTML conversion)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Version Control**: Git

### Site Components
```
Website Root (/)
├── index.html          # Main landing page
├── style.css           # Global styles with dark theme + purple accents
├── script.js           # Interactive features (Clippy assistant, animations)
├── /linktree           # Social links page
├── /cv_web             # Interactive CV
├── /cv_pdf             # PDF curriculum vitae
├── /blog               # Jekyll-powered blog (Markdown)
├── /assets             # Images, icons, etc.
└── /others             # Additional resources
```

---

## Repository Structure

### Key Files & Directories

#### Root Level
- `index.html` - Portfolio landing page
- `style.css` - Dark theme with CSS variables (`--brand-purple`, `--brand-dark`)
- `script.js` - Features: Clippy assistant, space background, scroll animations
- `.gitignore` - Excludes: video files, build artifacts, symlinks

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

### Workflow: `deploy.yml`

**Trigger**: Push to `main` branch

**Steps**:
1. **Checkout Code** - Clone repository
2. **Setup Pages** - Configure GitHub Pages environment
3. **Build Jekyll Blog**
   - Source: `./blog`
   - Destination: `./_site/blog`
   - Converts `blog/index.md` → `blog/index.html`
4. **Copy Static Files**
   - Copies root HTML/CSS/JS
   - Copies static directories (linktree, cv_web, cv_pdf, assets, others)
   - Excludes: `.git` directory (189 MB)
5. **Upload Artifact** - Uploads `_site/` directory
6. **Deploy** - Publishes to GitHub Pages

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

### Local Development Workflow

1. **Make changes** to HTML/CSS/JS files
   ```bash
   # Edit files locally
   code index.html style.css script.js
   ```

2. **Preview blog locally** (optional)
   ```bash
   cd blog
   bundle exec jekyll serve
   # Visit http://localhost:4000
   ```

3. **Commit changes**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. **Push to GitHub**
   ```bash
   git push origin main
   ```

5. **Automatic deployment** - GitHub Actions builds and deploys

### Adding Blog Content

1. **Edit** `blog/index.md` with Markdown content
2. **Front matter** required at top:
   ```yaml
   ---
   layout: default
   title: Your Title
   ---
   ```
3. **Commit and push** - Jekyll automatically converts to HTML

### Feature Development Workflow

1. **Clippy Assistant modifications**: Edit `script.js` (lines 443-809)
2. **Styling changes**: Edit `style.css` (CSS variables in `:root`)
3. **Theme adjustments**:
   - Dark theme: `--brand-dark: #0D061F`
   - Purple accents: `--brand-purple: #8A2BE2`, `--brand-light-purple: #A060FF`

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
