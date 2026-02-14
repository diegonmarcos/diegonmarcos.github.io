# c_root - Project Specification

**Project Name**: c_root (Root Landing Page)
**Type**: Static Landing Page (Vue 3 + TypeScript + SCSS)
**Status**: Active
**Last Updated**: 2026-01-22

---

## Overview

Root landing page for `diegonmarcos.github.io` featuring interactive fractal visualizations with 50 different visual effects powered by WebGL shaders.

---

## Technical Specifications

### Frontend Stack
| Component | Technology | Version |
|-----------|------------|---------|
| Framework | Vue 3 | ^3.4.0 |
| Language | TypeScript | ^5.3.0 |
| Build Tool | Vite | ^5.0.0 |
| CSS | SCSS (ITCSS) | ^1.69.0 |
| Graphics | WebGL 2.0 | Native |

### Project Type
- **Category**: Type 1 (Digital Card)
- **Build Strategy**: Static (SSG)
- **Port**: Not applicable (static deployment)

### Dependencies
```json
{
  "runtime": ["vue@3.4.0"],
  "build": ["vite@5.0.0", "@vitejs/plugin-vue@5.0.0", "sass@1.69.0", "typescript@5.3.0"],
  "location": "/home/diego/mnt_git/front-Github_io/node_modules"
}
```

---

## Architecture

### Directory Structure
```
c_root/
├── 0.spec/              # Documentation
├── 1.ops/               # Operations (build scripts)
├── src/                 # Source code
│   ├── index.html       # Entry point
│   ├── typescript/      # TS + Vue components
│   ├── scss/            # ITCSS styles
│   └── shaders/         # WebGL shaders
├── dist/                # Build output
└── public/              # Static assets
```

### SCSS Architecture (ITCSS)
```
scss/
├── settings/            # Variables (no CSS output)
├── tools/               # Mixins (no CSS output)
├── generic/             # Reset, normalize
├── elements/            # HTML elements
├── objects/             # Layout patterns (.o-*)
├── components/          # UI components (.c-*)
└── utilities/           # Helpers (.u-*)
```

### Component Structure
```
components/
├── App.vue              # Main orchestrator
├── BioFractalViewer.vue # WebGL fractal renderer
└── ComplexWaveVisualization.vue # Foreground animations
```

### Shader Organization
```
shaders/
├── vertex.glsl          # Vertex shader
├── fragment-base.glsl   # Utilities, color conversion
├── fragment-fractals.glsl # 50 effects implementations
└── fragment-main.glsl   # Main entry point
```

---

## Features

### Visual Effects (50 Modes)

#### 3D Raymarched Fractals (0-6, 15-19)
- Mode 0: Mandelbulb
- Mode 1: Mandelbox
- Mode 2: Menger Sponge
- Mode 3: Sierpinski
- Mode 4: Kaleidoscope 3D
- Mode 5: Organic Hybrid
- Mode 6: Fractal Land
- Mode 15: Hot Rocks
- Mode 16: Server Room
- Mode 17: Remnant X
- Mode 18: Kali Set
- Mode 19: Generators

#### 2D Procedural Effects (7-14, 20-49)
- Mode 7: Galaxy Nebula
- Mode 8: Infinite Tunnel
- Mode 9: Plasma Fractal
- Mode 10: Circuits
- Mode 11: Metaballs
- Mode 12: Volumetric Lines
- Mode 13: Disco Tunnel
- Mode 14: Speed Drive
- Modes 20-49: Shadertoy collection (Ribbons, Fire, Aurora, Lightning, Matrix Rain, etc.)

### UI Controls
- **Effect Selector**: Dropdown with 50 modes
- **Toggle**: On/Off switch for fractal background
- **Intensity Slider**: 10-100% brightness control
- **Glass Morphism**: Backdrop blur UI with transparency

---

## Build System

### Build Process
1. **TypeScript Compilation**
   - Strict mode enabled
   - Target: ES2020
   - Module: ESNext

2. **Vue Component Compilation**
   - SFC (Single File Components)
   - Composition API with `<script setup>`
   - Type-safe props and emits

3. **SCSS Compilation**
   - ITCSS methodology
   - Variable extraction
   - Mixin resolution
   - Minification

4. **Shader Bundling**
   - GLSL files imported via Vite `?raw`
   - Combined at build time
   - Embedded in JavaScript bundle

5. **Asset Optimization**
   - Tree-shaking
   - Minification
   - Code splitting
   - Asset hashing

### Build Commands
```bash
# Development (port 5173)
./1.ops/build.sh dev

# Production build
./1.ops/build.sh build

# Preview
./1.ops/build.sh preview

# Clean
./1.ops/build.sh clean
```

### Output
```
dist/
├── index.html           # Entry point
├── assets/
│   ├── index-[hash].js  # Main bundle
│   ├── index-[hash].css # Styles
│   └── [assets]         # Other assets
```

---

## Deployment

### GitHub Pages Deployment

**Target**: Root of GitHub Pages (`/`)

#### CI/CD Pipeline
1. **Trigger**: Push to `main` branch
2. **Detection**: Changes in `c_root/` directory
3. **Build**: `cd c_root/1.ops && bash build.sh build`
4. **Deploy**: Copy `dist/*` to `_site/` (root)
5. **Publish**: GitHub Pages deployment

#### Deployment Flow
```
c_root/src/ → [Build] → c_root/dist/ → [Deploy] → _site/ (root) → GitHub Pages
```

### URLs
- **Production**: `https://diegonmarcos.github.io/`
- **Preview**: `http://localhost:4173` (local)
- **Dev Server**: `http://localhost:5173` (local)

---

## Performance

### Optimizations
- **Shader Efficiency**: Early raymarching termination
- **Animation Throttling**: 30fps (every 2nd frame)
- **Component Lazy Loading**: On-demand imports
- **Asset Optimization**: Vite tree-shaking and minification
- **CSS Optimization**: SCSS compilation and minification

### Metrics
- **Initial Load**: < 500KB (gzipped)
- **Time to Interactive**: < 2s
- **FPS**: 30fps (throttled for performance)
- **WebGL Overhead**: Minimal (efficient shaders)

---

## Code Standards

### TypeScript
```typescript
// ✅ Good
const count = ref<number>(0);
const element = document.querySelector('.btn') as HTMLButtonElement;

// ❌ Bad
const count: any = ref(0);
const element = document.querySelector('.btn');
```

### Vue 3
```vue
<script setup lang="ts">
// ✅ Good - Composition API with types
const props = withDefaults(defineProps<{ mode: number }>(), { mode: 0 });
const count = ref<number>(0);

// ❌ Bad - Options API or missing types
export default {
  props: ['mode'],
  data() { return { count: 0 } }
}
</script>
```

### SCSS
```scss
// ✅ Good - ITCSS with BEM
.c-controls {
  @include glass-morphism(0.15);

  &--hidden {
    display: none;
  }
}

// ❌ Bad - Inline styles or flat structure
<div style="background: rgba(255,255,255,0.15)">
```

---

## Analytics

### Matomo Integration
- **Server**: `https://analytics.diegonmarcos.com`
- **Container**: `62tfw1ai`
- **Implementation**: Tag Manager script in `<head>`
- **Privacy**: Cookie-less, GDPR-compliant, self-hosted

### Tracked Events
- Page views
- Fractal mode changes (future enhancement)
- User interactions (future enhancement)

---

## Browser Support

### Required
- WebGL 2.0 support
- ES2020+ JavaScript
- CSS backdrop-filter
- Vue 3 compatible browser

### Minimum Versions
- Chrome 64+
- Firefox 67+
- Safari 12+
- Edge 79+

---

## Development Guidelines

### File Organization
- **Source**: `src/` (all source code)
- **Dist**: `dist/` (build output, gitignored)
- **Ops**: `1.ops/` (build and deployment scripts)
- **Spec**: `0.spec/` (documentation)

### Naming Conventions
- **Files**: kebab-case (`bio-fractal-viewer.vue`)
- **Components**: PascalCase (`BioFractalViewer`)
- **CSS Classes**: BEM with prefixes (`.c-controls`, `.o-layout`)
- **Variables**: camelCase (TypeScript), kebab-case (SCSS)

### Git Workflow
1. Make changes in `c_root/`
2. Test locally: `./1.ops/build.sh dev`
3. Build: `./1.ops/build.sh build`
4. Commit and push to `main`
5. GitHub Actions deploys automatically

---

## Future Enhancements

### Planned Features
- [ ] Add audio reactivity to fractals
- [ ] Save/load fractal presets
- [ ] Export fractal as image
- [ ] Add more shader effects
- [ ] Performance profiling dashboard
- [ ] Custom color schemes

### Optimization Opportunities
- [ ] Service worker for caching
- [ ] WebAssembly for heavy calculations
- [ ] Lazy load shaders on demand
- [ ] Progressive enhancement for low-end devices

---

## Maintenance

### Dependencies
- Check for Vue 3 updates monthly
- Update Vite when new major versions release
- Keep TypeScript and SCSS compilers current
- Monitor shader compatibility with WebGL updates

### Known Issues
- None currently

### Testing
- Manual testing in dev mode
- Build verification before deployment
- Cross-browser testing (Chrome, Firefox, Safari)
- WebGL compatibility checks

---

## Contact

**Project Owner**: Diego Nepomuceno Marcos
**Repository**: `/home/diego/mnt_git/front-Github_io/c_root`
**Domain**: `diegonmarcos.github.io`
