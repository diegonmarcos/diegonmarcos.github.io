# MyTrips - Travel Planning Application

## Overview

MyTrips is a Vue 3 travel planning application with two main pages:
1. **Trips Manager** - Plan and manage multiple trips with dates and destinations
2. **Road Trip Planner** - Plan detailed road trips with multiple stops and routes

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Vue 3 | 3.5.27 | UI Framework (Composition API) |
| TypeScript | 5.9.3 | Type safety |
| Vite | 7.3.1 | Build tool |
| SCSS | 1.97.3 | Styling (ITCSS methodology) |
| Matomo | Latest | Analytics tracking |

## Project Structure

```
mytrips/
├── 0.spec/             # Documentation
├── 1.ops/              # Build scripts
│   └── build.sh        # Build orchestrator
├── src/                # Source files
│   ├── components/     # Vue components
│   │   ├── TripsApp.vue
│   │   └── RoadTripApp.vue
│   ├── scss/           # ITCSS structure
│   │   ├── settings/   # Variables
│   │   ├── tools/      # Mixins
│   │   ├── generic/    # Reset
│   │   ├── elements/   # Base elements
│   │   ├── objects/    # Layout patterns
│   │   ├── components/ # UI components
│   │   ├── utilities/  # Helper classes
│   │   └── main.scss   # Main import
│   ├── typescript/     # TS entry files
│   │   ├── main.ts     # Trips page
│   │   └── roadtrip.ts # Road trip page
│   ├── index.html      # Trips page
│   └── myroadtrip.html # Road trip page
├── dist/               # Build output
├── public/             # Static assets
├── package.json        # Dependencies (uses global node_modules)
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## Features

### Trips Manager (index.html)
- Create, view, and delete trips
- Track trip status (planning, upcoming, completed)
- Store destination, dates, and trip name
- Link to Road Trip Planner
- Responsive card-based layout

### Road Trip Planner (myroadtrip.html)
- Create multiple road trips
- Add stops between start and end locations
- Track duration and notes for each stop
- Timeline visualization
- Sidebar navigation between trips
- Delete stops
- Link back to Trips Manager

## Development

### Build Commands

```bash
# Development server (port 8018)
./1.ops/build.sh dev

# Production build
./1.ops/build.sh build

# Clean artifacts
./1.ops/build.sh clean
```

### NPM Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## SCSS Architecture (ITCSS)

```scss
// Settings - Variables
$color-primary: #2563eb;
$color-secondary: #7c3aed;
$spacing-md: 1rem;

// Tools - Mixins
@include mq(sm|md|lg|xl)
@include flex-center
@include flex-row($justify, $align, $gap)
@include grid-auto-fit($min-size, $gap)

// Components - Pre-built
.c-card
.c-btn (.c-btn--primary, .c-btn--outline)

// Utilities - Helpers
.u-flex-center
.u-text-center
.u-m-md, .u-p-lg
```

## Vue 3 Composition API

All components use Composition API with `<script setup>`:

```typescript
// Props
let { propName }: { propName: Type } = $props();

// State
const trips = ref<Trip[]>([]);

// Methods
const addTrip = () => { /* ... */ };
```

## Analytics

Matomo tracking is integrated in both HTML pages:
- Page views automatically tracked
- Cookie-less, GDPR-compliant
- Self-hosted at `analytics.diegonmarcos.com`

## Deployment

- **Dev Server**: http://localhost:8018
- **Production URL**: https://diegonmarcos.github.io/mytrips/
- **Build Output**: `dist/` directory
- **GitHub Actions**: Auto-deploys on push to `c_Personal_Tools/mytrips/`

## Port Assignment

Port **8018** is assigned to MyTrips in the front-end ecosystem (see `/1.ops/00_Stack_Main.md`).

## Code Style

- **TypeScript Strict Mode**: Enabled
- **No Inline CSS**: All styles via SCSS
- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<section>`
- **Accessibility**: Form labels, semantic buttons vs links
- **Vue 3 Patterns**: Composition API, proper typing

## Global Dependencies

This project uses the global `node_modules` from `/home/diego/mnt_git/front-Github_io/node_modules`:
- Vue runtime resolved to global installation
- Vite cache directory points to global location
- `NODE_PATH` set in npm scripts
