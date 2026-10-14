# 🌿 Leaf Studios

**Where Edge Technologies Meets Design**

A modern, high-performance portfolio website featuring WebGL shaders, smooth animations, and responsive design.

## 📁 Project Structure

```
leafy/
├── 0.spec/              # Original specification (leafy.html)
├── 1.ops/               # Operations & build scripts
│   └── build.sh        # Main build script
├── src/                 # Source files
│   ├── index.html      # HTML template
│   ├── styles/         # SCSS stylesheets
│   │   ├── main.scss
│   │   ├── _variables.scss
│   │   ├── _base.scss
│   │   ├── _responsive.scss
│   │   ├── components/
│   │   │   ├── _navigation.scss
│   │   │   ├── _hero.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _loader.scss
│   │   │   └── _cursor.scss
│   │   └── animations/
│   │       └── _keyframes.scss
│   └── scripts/        # TypeScript source
│       ├── main.ts
│       ├── shaders/
│       │   ├── ShaderManager.ts
│       │   ├── vertexShader.ts
│       │   ├── heroShader.ts
│       │   └── calmShader.ts
│       ├── animations/
│       │   ├── cursor.ts
│       │   ├── cardEffects.ts
│       │   ├── scrollEffects.ts
│       │   └── textScramble.ts
│       └── utils/
│           ├── intersectionObserver.ts
│           ├── loader.ts
│           └── shadertoyGallery.ts
├── dist/               # Built output (generated)
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── scripts/
│       └── *.js
├── package.json
└── tsconfig.json
```

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Build Project

```bash
./1.ops/build.sh
# or
npm run build
```

### Development Server

```bash
npm run dev
# Opens http://localhost:8080
```

### Clean Build

```bash
npm run clean
```

## 🛠️ Technologies

- **TypeScript** - Type-safe JavaScript
- **SCSS** - Modular CSS with variables and nesting
- **WebGL** - Hardware-accelerated graphics
- **GLSL Shaders** - Custom fragment shaders for visual effects

## 📦 Build Output

The build process:
1. Cleans `dist/` directory
2. Copies HTML template
3. Compiles SCSS to minified CSS
4. Compiles TypeScript to ES2020 modules
5. Generates optimized static site

**Typical output sizes:**
- HTML: ~10KB
- CSS: ~12KB (minified)
- JS: ~4-8KB per module

## ✨ Features

- 🎨 **WebGL Shaders** - Custom GLSL shaders for hero and background effects
- 🖱️ **Custom Cursor** - Smooth, magnetic cursor with hover effects
- 📜 **Smooth Scrolling** - Snap sections with parallax effects
- 🎭 **Text Scramble** - Animated text reveals
- 🃏 **3D Card Tilt** - Interactive card hover effects
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **GPU Accelerated** - Optimized transforms and animations
- 🎬 **Shadertoy Gallery** - Embedded shader demonstrations

## 🎨 Customization

### Colors

Edit `src/styles/_variables.scss`:

```scss
:root {
    --gold: #c9a227;
    --wood-darkest: #0d0a08;
    // ...
}
```

### Shaders

Each shader has its own file in `src/scripts/shaders/`:
- `heroShader.ts` - Intense animated shader for hero section
- `calmShader.ts` - Subtle shader for info sections

### Content

Modify `src/index.html` to update:
- Services cards
- About section
- Contact information
- Logo SVG

## 🐛 Troubleshooting

### Build Errors

If you get compiler errors:

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clean build
npm run clean
npm run build
```

### Module Not Found

Make sure you're in the project root:

```bash
cd ~/Git/front-Github_io/b_Work_Profiles/leafy
```

## 📝 License

© 2026 Leaf Studios. All rights reserved.
