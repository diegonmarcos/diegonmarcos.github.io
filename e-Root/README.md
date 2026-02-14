# c_root - Root Landing Page

**Type**: Static Landing (Vue 3 + TypeScript + SCSS)
**Domain**: diegonmarcos.github.io (root)
**Description**: Root index.html with fractal visualizations and interactive controls

---

## Project Structure

```
c_root/
├── 0.spec/              # Specifications and documentation
├── 1.ops/               # Build and deployment scripts
│   └── build.sh         # Main build script
├── src/                 # Source files
│   ├── index.html       # Main HTML entry point
│   ├── typescript/      # TypeScript source
│   │   ├── main.ts      # Application entry
│   │   ├── App.vue      # Main app component
│   │   └── components/  # Vue components
│   │       ├── BioFractalViewer.vue
│   │       └── ComplexWaveVisualization.vue
│   ├── scss/            # SCSS styles (ITCSS structure)
│   │   ├── main.scss    # Main SCSS entry
│   │   ├── settings/    # Variables, config
│   │   ├── tools/       # Mixins, functions
│   │   ├── generic/     # Reset, normalize
│   │   ├── elements/    # HTML elements
│   │   ├── objects/     # Layout patterns
│   │   ├── components/  # UI components
│   │   └── utilities/   # Helpers, overrides
│   └── shaders/         # WebGL shaders
│       ├── vertex.glsl
│       ├── fragment-base.glsl
│       ├── fragment-fractals.glsl
│       ├── fragment-main.glsl
│       └── README.md
├── dist/                # Build output (copied to _site root)
├── public/              # Static assets
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies reference
```

---

## Tech Stack

- **Framework**: Vue 3 (Composition API with `<script setup>`)
- **Language**: TypeScript (strict mode)
- **Styling**: SCSS (ITCSS methodology)
- **Build Tool**: Vite
- **Rendering**: WebGL shaders for fractal visualizations
- **Analytics**: Matomo Tag Manager

---

## Features

### Fractal Visualization System
- **50 Visual Effects** including:
  - 3D Raymarched Fractals (Mandelbulb, Mandelbox, Menger Sponge, etc.)
  - 2D Procedural Effects (Plasma, Galaxy, Lightning, Fire, Aurora, etc.)
- **Interactive Controls**:
  - Effect selector with 50 modes
  - On/Off toggle
  - Intensity slider (10-100%)
- **Glass Morphism UI** with backdrop blur

### Architecture
- **Modular Shaders**: All 50 effects organized in separate GLSL files
- **ITCSS SCSS**: Scalable CSS architecture
- **TypeScript**: Full type safety
- **Component-based**: Vue 3 SFC components

---

## Development

### Prerequisites
```bash
# Global node_modules required at:
/home/diego/mnt_git/front-Github_io/node_modules
```

### Commands

```bash
# Development server (port 5173)
./1.ops/build.sh dev

# Production build
./1.ops/build.sh build

# Preview production build
./1.ops/build.sh preview

# Clean build artifacts
./1.ops/build.sh clean
```

---

## Build Pipeline

1. **Local Build**: `./1.ops/build.sh build`
   - TypeScript compilation
   - SCSS compilation with ITCSS
   - Shader bundling
   - Vue component compilation
   - Asset optimization
   - Output: `dist/`

2. **GitHub Actions** (on push to main):
   - Detects changes in `c_root/`
   - Runs build via `1.ops/build.sh`
   - Copies `dist/*` to `_site/` (root)
   - Deploys to GitHub Pages

3. **Deployment Result**:
   - `index.html` at root (`/`)
   - All assets bundled and minified
   - Ready for production

---

## SCSS Architecture (ITCSS)

**Inverted Triangle CSS** - organized by specificity:

1. **Settings** (`settings/`) - Variables, no CSS output
2. **Tools** (`tools/`) - Mixins, functions, no CSS output
3. **Generic** (`generic/`) - Reset, normalize
4. **Elements** (`elements/`) - Bare HTML elements
5. **Objects** (`objects/`) - Layout patterns (`.o-*`)
6. **Components** (`components/`) - UI components (`.c-*`)
7. **Utilities** (`utilities/`) - Helpers (`.u-*`)

### Key Files:
- `settings/_variables.scss` - Colors, spacing, typography
- `tools/_mixins.scss` - Reusable mixins
- `components/_controls.scss` - Fractal controls UI
- `components/_layers.scss` - Background/foreground layers

---

## Shader System

All WebGL shaders are in `src/shaders/`:

- **vertex.glsl** - Vertex shader
- **fragment-base.glsl** - Utility functions, color conversion
- **fragment-fractals.glsl** - 50 visual effect implementations
- **fragment-main.glsl** - Main shader entry point

Shaders are imported using Vite's `?raw` import and combined at build time.

---

## Component Architecture

### App.vue
- Main application wrapper
- State management (fractal mode, brightness, menu)
- Layer orchestration

### BioFractalViewer.vue
- WebGL fractal renderer
- 50 shader-based visual effects
- Props: `mode` (0-49)

### ComplexWaveVisualization.vue
- Foreground wave visualization
- Title display
- Interactive animations

---

## Analytics

Matomo Tag Manager is integrated in `src/index.html`:
- Server: `https://analytics.diegonmarcos.com`
- Container ID: `62tfw1ai`
- Privacy-compliant, self-hosted

---

## Deployment

This project deploys to the **root** of GitHub Pages:

- **URL**: `https://diegonmarcos.github.io/`
- **Path**: `/` (root index.html)
- **Build**: Automatic on push to main
- **CI/CD**: GitHub Actions (`1.ops/deploy.yml`)

---

## Code Practices

### TypeScript
- Strict mode enabled
- No `any` types
- Explicit type annotations
- DOM element type casting

### Vue 3
- Composition API with `<script setup lang="ts">`
- Props with `withDefaults()`
- Typed refs and computed properties
- No inline styles (all in SCSS)

### SCSS
- ITCSS methodology
- BEM naming (`.c-component`, `.c-component--modifier`)
- Variables for all values
- Mixins for reusable patterns
- No inline CSS allowed

---

## Performance

- **Shader Optimization**: Efficient raymarching with early termination
- **Animation Throttling**: 30fps instead of 60fps for smooth performance
- **Lazy Loading**: Components loaded on demand
- **Asset Optimization**: Vite minification and tree-shaking
- **Glass Morphism**: Backdrop blur with optimized opacity

---

## Browser Compatibility

- Modern browsers with WebGL support
- ES2020+ JavaScript features
- CSS backdrop-filter support
- Vue 3 compatible (Chrome 64+, Firefox 67+, Safari 12+)
