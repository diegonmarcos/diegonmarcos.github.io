# GitHub Actions Workflows

This directory contains **documentation copies** of the GitHub Actions workflow files used for CI/CD automation.

## Important Notes

### Active Workflows Location
The **active** workflow files that GitHub actually executes are located in:
```
.github/workflows/
```

GitHub **requires** workflows to be in `.github/workflows/` to function. This location cannot be changed.

### Purpose of This Directory
The files in `1.ops/github-actions/` serve as:
- **Documentation** - Easy reference for developers
- **Organization** - Keeps operations files together in the numbered structure
- **Version tracking** - Historical reference for workflow configurations

### Maintaining Sync

When updating workflows:

1. **Always edit the original** in `.github/workflows/`
2. Test the workflow by pushing to GitHub
3. Copy the updated file here for documentation:
   ```bash
   cp .github/workflows/deploy.yml 1.ops/github-actions/deploy.yml
   ```

### Current Workflows

#### deploy.yml
**Purpose**: Main deployment pipeline for the portfolio website

**Trigger**: Push to `main` branch

**What it does**:
1. Sets up Node.js and Ruby environment
2. Compiles Sass files to CSS (root and cv_web)
3. Builds Jekyll blog
4. Assembles complete site in `_site/` directory
5. Cleans up unnecessary files
6. Deploys to GitHub Pages

**Key features**:
- Automated Sass compilation from `3.sass/` directories
- Jekyll blog build from `blog/` directory
- Deploys to: https://diegonmarcos.github.io/

---

**Last Updated**: October 2025
