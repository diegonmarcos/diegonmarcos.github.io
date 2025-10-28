# GitHub Actions Workflows

This directory contains the **active** GitHub Actions workflow files for CI/CD automation.

## Critical Information

**These files must remain in `.github/workflows/` to function.** GitHub requires this exact path to execute workflows automatically.

## Documentation Copies

For organizational purposes, **documentation copies** of these workflows are maintained in:
```
1.ops/github-actions/
```

This allows workflows to be part of the numbered directory structure used throughout the project.

## Workflow Files

### deploy.yml
Main deployment pipeline triggered on push to `main` branch.

See `1.ops/github-actions/README.md` for detailed documentation.

---

**Note**: When updating workflows, remember to copy changes to `1.ops/github-actions/` for documentation purposes.
