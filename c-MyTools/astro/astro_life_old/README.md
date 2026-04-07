# AstroLife - Personal Astrology Dashboard

A beautiful, interactive astrology application that generates personalized natal charts, transits, and astrocartography visualizations with a stunning 3D globe interface.

## Features

- **Natal Chart Analysis**: Explore planetary positions and their meanings
- **Today's Transits**: Current planetary alignments and their influences
- **Future Predictions**: Insights for upcoming months
- **Astrocartography**: 3D interactive globe showing planetary lines
- **Power Cities**: Discover cities aligned with your planetary energies
- **Chinese Zodiac**: Your Chinese zodiac sign based on birth year
- **Mobile Optimized**: Fully responsive design with touch interactions

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Three.js** - 3D globe visualization (loaded via CDN)
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd astro_life
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## How It Works

The application uses a deterministic seed-based algorithm to generate consistent astrology data based on:
- Name
- Birth date
- Birth time
- Birth location

This ensures the same inputs always produce the same results, creating a personalized experience.

### 3D Globe

The interactive globe is powered by Three.js and shows:
- Planetary lines (astrocartography)
- City markers for power locations
- Auto-rotation for a dynamic view
- Mobile-friendly touch interactions

## Project Structure

```
astro_life/
├── src/
│   ├── AstroLife.jsx    # Main component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles & Tailwind
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies
```

## Customization

- **Cities Database**: Edit `CITIES_DB` in `AstroLife.jsx` to add more locations
- **Planets**: Modify `PLANETS` array to customize planetary data
- **Zodiac Signs**: Update `ZODIAC_DATA` for different interpretations
- **Styling**: Tailwind classes can be customized in the component

## Performance

- Three.js is lazy-loaded from CDN to reduce initial bundle size
- Pixel ratio is capped at 2x for mobile performance
- Animation frame cleanup prevents memory leaks
- Optimized re-renders with proper React hooks

## License

This project is open source and available for personal use.

## Author

Created with attention to detail for astrology enthusiasts and developers alike.
