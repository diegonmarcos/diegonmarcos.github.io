# Carto - Arcanum Triad Tarot Reader

A mystical tarot card reading application featuring interactive 3-card spreads and a complete Rider-Waite-Smith deck gallery.

## Features

- 🔮 **Interactive Crystal Ball Interface** - Click the crystal ball to trigger readings
- 🃏 **3-Card Spread** - Past, Present, and Future reading with supporting cards
- ✨ **Particle Effects** - Animated background with twinkling particles
- 📖 **Full Deck Gallery** - View all 78 Rider-Waite-Smith tarot cards in a 6-column grid
- 💫 **Smooth Animations** - Card shuffling, dealing, and reveal animations
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Framework**: Vanilla JavaScript
- **CSS**: Sass (SCSS) with ITCSS methodology
- **JavaScript**: TypeScript with strict type checking
- **Build**: POSIX shell script
- **Dev Server**: live-server with watch mode
- **Fonts**: Google Fonts (Cinzel Decorative, Philosopher, Sorts Mill Goudy)
- **Assets**: Wikimedia Commons (Rider-Waite-Smith Tarot)

## Project Structure

```
/carto
├── 1.ops/
│   └── build.sh           # Build automation script
├── src_static/
│   ├── scss/              # Sass source files (ITCSS structure)
│   │   ├── abstracts/     # Variables
│   │   ├── base/          # Reset, typography
│   │   ├── components/    # Particles, crystal ball, buttons, cards, gallery
│   │   ├── layout/        # Containers
│   │   ├── utilities/     # Animations, media queries
│   │   └── style.scss     # Main SCSS entry point
│   ├── typescript/        # TypeScript source files
│   │   ├── script.ts      # Main TypeScript source
│   │   ├── tsconfig.json  # TypeScript config
│   │   └── package.json   # TS dependencies
│   ├── index.html         # Development HTML
│   ├── style.css          # Compiled CSS (generated)
│   └── script.js          # Compiled JS (generated)
├── dist/
│   └── index.html         # Production single-file build
└── public/                # Static assets (if any)
```

## Development

Start development server with watchers:

```bash
./1.ops/build.sh dev
```

This will:
- Compile Sass to CSS (with source maps)
- Compile TypeScript to JavaScript (with source maps)
- Watch for changes and auto-recompile
- Start live-server at `http://localhost:8001`

Stop the dev server:
```bash
./1.ops/build.sh kill
```

## Build

Build for production (single-file HTML):

```bash
./1.ops/build.sh build
```

This will:
- Compile Sass to compressed CSS
- Compile TypeScript to minified JavaScript
- Inline all CSS and JS into single HTML file
- Output: `dist/index.html`

## Clean

Remove all build artifacts:

```bash
./1.ops/build.sh clean
```

## Usage

1. Click the crystal ball to consult the spirits
2. Watch as cards shuffle and arrange themselves
3. Three tarot cards will be revealed with interpretations
4. Click the "i" button to view the full 78-card deck
5. Click the refresh button to perform another reading

## Credits

- **Tarot Card Images**: Rider-Waite-Smith Tarot (Public Domain via Wikimedia Commons)
- **Background Image**: Unsplash
- **Design**: Mystical dark theme with gold accents
