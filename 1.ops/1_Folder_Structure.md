
# Actual Project Structure

```
/diegonmarcos.github.io
                        # Main Ops
├── 0.spec/
├── 1.ops/

                        # Projects
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
├── myprofile/
├── nexus/
├── others/

                        # Build Config Files
├── package.json
├── tsconfig.json
├── .github/workflows/

                        # Others
├── .gitignore
├── .git
├── .gim
├── .vscode
└──   README.md
```

# FOLDER STRUCTURE ROOT

```
/project
                        # Ops
├── 0.spec/
├── 1.ops/

                        # Source and Dist
├── src_static/ | src/
├── dist/
├── public/

                        # Build Config
├── .github/workflows/

                        # Local Only
└── node_modules/

```

---

# .github/workflows/

```
/.github/workflows
├──   deploy.yml        # GitHub Actions CI/CD pipeline
└──   README.md         # Workflow documentation
```


---

# 0. spec/

```
/0.spec

├──   feature1.md
├──   feature2.md
└──   index.md              # production index.html into markdwon frame
```

# 1. ops/

```
/1.ops
├──   0_Stack_Main.md
├──   1_Folder_Structure.md
├──   2_Build_Deploy_Watch.md
└──   build.sh                  # (helper is enough to explain it all)
├──   deploy.ml                 # symlink to .github/workflow
├──   Reademe.md                # symlink to reamde of the repo

```

---

# src_static/

Static Source Files (`/src_static`)

```
/dist
├── index.html          # single-file inline html
└──  public/            # Symlinked
```

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

## scss/


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


## typescript/

TypeScript Source Files (`/src_static/typescript`)

```
/typescript
├──   script.ts         # Main TypeScript source file
├──   tsconfig.json     # TypeScript compiler configuration
├──   package.json      # Node dependencies (typescript, concurrently)
├── node_modules/       # Dependencies
└── logs/               # Build output (source maps)
```

```
script.ts
├── Type Definitions
│   ├── ValuePropSection      # Card data interface
│   ├── StarPosition          # Star coordinates interface
│   ├── ConstellationElement  # Constellation node interface
│   └── AssistantMode, Lane   # Type aliases
├── Animation State Management
│   ├── animationsEnabled     # UI animations toggle
│   └── backgroundAnimationsEnabled
├── Space Background Setup
│   ├── createStars()         # Random star generation
│   └── createConstellation() # Constellation drawing
├── Data for Value Proposition Cards
│   └── valuePropData[]       # Card content array
├── Dynamic Card Generation
│   └── Card DOM creation logic
├── Custom Animation Engine
│   └── requestAnimationFrame loop
├── Scroll Animation Logic
│   └── Intersection Observer setup
├── Theme Toggle Logic
│   └── Dark/light mode switching
├── Background Animation Toggle
│   └── Enable/disable space animations
├── Presentation Mode Toggle
│   └── Fit-to-screen scaling
├── Window Resize Handler
│   └── Responsive scaling logic
└── Clippy Assistant
    └── Interactive assistant widget
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

# src/ (Python - mymaps)

Python Map Generator (`/mymaps`)

```
/mymaps
├──   index.html          # Menu with cards linking to maps
├──   README.md
├── src/
│   ├──   mymaps.py       # Map generator script
│   ├──   gui.py          # Tkinter GUI for configuration
│   ├──   config.csv      # Map configuration
│   └──   input_data.csv  # Country/region data with spheres
└── maps/
    └──   *.html          # Generated standalone map files
```

