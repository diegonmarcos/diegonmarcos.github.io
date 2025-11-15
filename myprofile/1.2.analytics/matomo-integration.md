# Matomo Integration Documentation

## Overview

This folder documents the Matomo analytics integration for the project.

## Implementation Location

The actual Matomo service implementation is located in:
```
1.3.svelte/src/lib/services/matomo.service.ts
```

The Analytics component that uses this service is located in:
```
1.3.svelte/src/lib/components/common/Analytics.svelte
```

## Why This Folder Exists

This `1.2.analytics` folder is part of the project's numbered folder structure for organization:
- `0.spec/` - Specifications and documentation
- `1.1.ops/` - Operations and deployment files
- `1.2.analytics/` - Analytics documentation and configuration
- `1.3.svelte/` - Main SvelteKit application

While the documentation lives here, the actual code lives in the SvelteKit structure (`1.3.svelte/`) for proper module resolution.

## Files in This Folder

- `README.md` - Complete Matomo setup and usage documentation
- `matomo-integration.md` - This file, explaining the structure

## Quick Reference

See `README.md` in this folder for complete setup instructions and API documentation.

The service is already integrated into the app layout and will work once you:
1. Set up a Matomo instance (cloud or self-hosted)
2. Configure environment variables in `.env`
3. Set `VITE_MATOMO_ENABLED=true`

---

**Note**: The service code was moved to `1.3.svelte/src/lib/services/` to work properly with SvelteKit's module resolution system.
