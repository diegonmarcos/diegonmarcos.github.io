# Personal Profile Website 🎮

A pixel-art styled personal website built with SvelteKit, showcasing photos, music preferences, and fitness activities with a retro gaming aesthetic.

## ✨ Features

- **🎨 Pixel Art Design**: Retro gaming-inspired UI with purple color scheme
- **📷 Photo Albums**: Browse through categorized photo collections (mock data)
- **🎵 Music Integration**: Spotify-style music display (mock data, API integration planned)
- **📊 Activity Stats**: Fitness and endurance statistics (mock data, Strava API integration planned)
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **⚡ Fast & Modern**: Built with SvelteKit and Vite for optimal performance

## 🚀 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with TypeScript
- **Styling**: Sass (SCSS)
- **Fonts**: Press Start 2P, VT323 (Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions
- **Build Tool**: Vite

## 📁 Project Structure

```
mygames/
├── 0.spec/                  # Product specifications
├── 1.1.ops/                 # DevOps configurations
├── 1.2.analytics/           # Analytics setup (planned)
├── 1.3.svelte/              # SvelteKit source code
│   ├── src/
│   │   ├── lib/             # Components, types, utilities
│   │   ├── routes/          # SvelteKit pages
│   │   ├── styles/          # Sass stylesheets
│   │   └── app.html         # HTML template
│   ├── build/               # Production build output
│   └── package.json
├── 2.1.assets/              # Static assets
├── 2.2.sass/                # Symlink to styles
├── 2.3.ts/                  # Symlink to types
└── .github/workflows/       # CI/CD workflows
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/mygames.git
cd mygames
```

2. Navigate to the Svelte directory:
```bash
cd 1.3.svelte
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette

- **Primary Purple**: `#8B5CF6`
- **Dark Purple**: `#6D28D9`
- **Light Purple**: `#A78BFA`
- **Background**: `#1E1B29`
- **Accent Pink**: `#EC4899`
- **Accent Cyan**: `#22D3EE`

### Typography

- **Headings**: Press Start 2P (pixel font)
- **Body**: VT323 (monospace pixel font)

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site is available at: `https://YOUR_USERNAME.github.io/mygames/`

### Manual Deployment

```bash
cd 1.3.svelte
npm run build
# Deploy the 'build' directory to your hosting provider
```

## 📋 Roadmap

### Current Status
- ✅ Core UI and navigation
- ✅ Photo albums page (mock data)
- ✅ Music page (mock data)
- ✅ Stats page (mock data)
- ✅ Responsive design
- ✅ Pixel art styling
- ✅ GitHub Actions deployment

### Planned Features
- [ ] Real photo gallery with lightbox
- [ ] Spotify API integration with OAuth
- [ ] Strava API integration with OAuth
- [ ] Component extraction and reusability
- [ ] Matomo analytics integration
- [ ] Additional animations and interactions
- [ ] Dark/light mode toggle
- [ ] PWA capabilities

## 📄 License

This project is for personal use.

## 🎯 Inspiration

Design inspired by retro gaming aesthetics and pixel art, with reference to [EliasDevis.github.io](https://github.com/EliasDevis/EliasDevis.github.io).

## 🤝 Contributing

This is a personal project, but feel free to fork and adapt for your own use!

---

**Built with 💜 and pixels**
