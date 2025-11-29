
# FOLDER STRUCTURE ROOT

```
/project
├── .github/workflows/
├── 0.spec/
├── 1.ops/
├── src_static/ | src/ | app/
├── styles/
├── components/
├── data/
├── dist/ | out/
├── public/
└── node_modules/
```

---

# .github/workflows/

```
/.github/workflows
├──   deploy.yml        # GitHub Actions CI/CD pipeline
└──   README.md         # Workflow documentation
```

GitHub Actions workflow for automated deployment:
- **Trigger**: Push to `main` branch
- **Conditional Builds**: Only rebuilds assets (Sass, TypeScript, Jekyll) if source files changed
- **Deploy**: Builds site to `_site/` and deploys to `gh-pages` branch

---

# 0. spec/

```
/0.spec
├──   Folder_structure.md
├──   Stack_Definition.md
└──   index.md              # (brief)
```

# 1. ops/

```
/1.ops
└──   build.sh              # (helper is enough to explain it all)
```

---

# src_static/

Static Source Files (`/src_static`)
```
/src_static
├── scss/               # Sass source files (see Scss section)
├── typescript/         # TypeScript source files (see TypeScript section)
├──   index.html        # Development HTML (unminified)
├──   script.js         # Compiled JavaScript output
└──   style.css         # Compiled CSS output
```

# scss/

Sass Source Files (`/scss`)
```
/scss
├── abstracts/          # Variables, mixins, functions (no CSS output)
├── base/               # Foundation styles (reset, typography)
├── layout/             # Major structural components (header, sections)
├── components/         # Reusable UI elements (buttons, cards, clippy)
├── themes/             # Theme variations (dark, light)
├── utilities/          # Helpers, animations, media queries
└──   style.scss        # Master import file (ITCSS methodology)
```


```
scss/
├── abstracts/
│   ├──   _variables.scss
│   ├──   _mixins.scss
│   └──   _functions.scss
├── base/
│   ├──   _reset.scss
│   └──   _typography.scss
├── components/
│   ├──   _buttons.scss
│   ├──   _cards.scss
│   └──   _clippy.scss
├── layout/
│   ├──   _footer.scss
│   ├──   _header.scss
│   └──   _navigation.scss
├── themes/
│   ├──   _dark.scss
│   └──   _light.scss
└──   style.scss
```

---

# src/ (vue)

Vue 3 Source Files (`/myfeed/src`)
```
/myfeed/src
├──   App.vue           # Root Vue component
├──   main.ts           # Application entry point
├── assets/             # Static assets (icons, images)
├── components/         # Vue components
│   ├── common/         # Shared components (ActionBar, GlassCard, etc.)
│   ├── features/       # Feature-specific components
│   │   ├── cards/      # Card components (TweetCard, YouTubeCard, etc.)
│   │   └── feed/       # Feed components (FeedContainer, RssSidebar)
│   └── ui/             # UI primitives
├── composables/        # Vue composables (reusable logic)
├── data/               # Static data files
├── layouts/            # Page layouts
├── router/             # Vue Router configuration
├── stores/             # Pinia stores (state management)
├── styles/             # Sass styles
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── views/              # Page views
```

---

# src/ (Svelte)

SvelteKit Source Files (`/mygames/1.3.svelte/src`)
```
/mygames/1.3.svelte/src
├──   app.html          # HTML template
├── lib/                # Library code
│   ├── assets/         # Static assets (favicon.svg)
│   ├── components/     # Svelte components
│   │   ├── common/     # Shared (Analytics, Lightbox, SEO)
│   │   ├── effects/    # Visual effects (PixelParticles)
│   │   ├── icons/      # Icon components (PixelIcon)
│   │   ├── layout/     # Layout components
│   │   └── pages/      # Page-specific components
│   ├── services/       # External services
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   └──   index.ts      # Lib exports
├── routes/             # SvelteKit file-based routing
└── styles/             # Sass styles
```

---

# app/ (Next.js - mymaps)

Next.js App Router (`/mymaps`)
```
/mymaps
├── 1.ops/
│   └──   build.sh          # Build script
├── app/                    # Next.js App Router
│   ├──   layout.tsx        # Root layout
│   ├──   page.tsx          # Home page (map cards menu)
│   └── map/[id]/           # Dynamic map route
│       └──   page.tsx      # Map viewer page
├── components/             # React components
│   ├──   MapCard.tsx       # Map card for menu
│   ├──   MapViewer.tsx     # Highcharts map component
│   └──   Legend.tsx        # Color legend
├── data/                   # Data files
│   ├──   types.ts          # TypeScript types
│   └──   maps.ts           # Map data (countries, spheres)
├── styles/                 # Sass (ITCSS)
│   ├── abstracts/          # Variables, mixins
│   ├── base/               # Reset, typography
│   ├── components/         # Card, legend
│   ├── layout/             # Header, container, footer
│   └──   globals.scss      # Main import
├── public/                 # Static assets
├── out/                    # Static export output
└──   next.config.ts        # Next.js config (static export)
```

---

# Actual Project Structure

```
/diegonmarcos.github.io
├── .github/workflows/
├── 0.spec/
├── 1.ops/
├── central_bank/
├── cloud/
├── cv_pdf/
├── cv_web/
├── feed_yourself/
├── health_tracker/
├── landpage/
├── linktree/
├── market_watch/
├── myfeed/
├── mygames/
├── mymaps/
├── nexus/
├── others/
└──   README.md
```
