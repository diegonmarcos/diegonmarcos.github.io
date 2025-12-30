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
- **Type**: Static Single-File HTML
- **Fonts**: Google Fonts (Cinzel Decorative, Philosopher, Sorts Mill Goudy)
- **Assets**: Wikimedia Commons (Rider-Waite-Smith Tarot)

## Project Structure

```
/carto
├── 1.ops/
│   └── build.sh           # Build script
├── src_static/
│   └── index.html         # Source HTML file
├── dist/
│   └── index.html         # Production build
└── public/                # Static assets (if any)
```

## Development

Start development server:

```bash
./1.ops/build.sh dev
```

Server runs at: `http://localhost:8001`

## Build

Build for production:

```bash
./1.ops/build.sh build
```

Output: `dist/index.html`

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
