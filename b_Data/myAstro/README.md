# myAstroLife - Nuxt Vue TypeScript Edition

A beautiful, interactive myAstrology application built with Nuxt 3, Vue 3, TypeScript, and SASS. Features personalized natal charts, transits, and myAstrocartography visualizations with a stunning 3D globe interface.

## ✨ Features

- **Natal Chart Analysis**: Explore planetary positions and their meanings
- **Today's Transits**: Current planetary alignments and their influences
- **Future Predictions**: Insights for upcoming months
- **myAstrocartography**: 3D interactive globe showing planetary lines
- **Power Cities**: Discover cities aligned with your planetary energies
- **Chinese Zodiac**: Your Chinese zodiac sign based on birth year
- **Mobile Optimized**: Fully responsive design with touch interactions

## 🛠 Tech Stack

- **Nuxt 3** - The Intuitive Vue Framework
- **Vue 3** - Composition API with `<script setup>`
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **SASS/SCSS** - Advanced styling with variables and mixins
- **Three.js** - 3D globe visualization
- **Nuxt Icon** - Icon system with Lucide icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Navigate to the project directory:
```bash
cd nuxt_myAstro_life
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## 📦 Building for Production

```bash
npm run build
```

The optimized files will be in the `.output/` folder.

## 👀 Preview Production Build

```bash
npm run preview
```

## 🏗 Project Structure

```
nuxt_myAstro_life/
├── assets/
│   └── scss/
│       └── main.scss          # Global SASS styles
├── components/
│   └── myAstroGlobe.vue         # 3D Globe component
├── composables/
│   └── usemyAstroData.ts        # Data utilities & constants
├── pages/
│   └── index.vue              # Main page
├── public/                    # Static assets
├── types/
│   └── myAstro.ts              # TypeScript type definitions
├── app.vue                   # Root component
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎯 How It Works

The application uses a **deterministic seed-based algorithm** to generate consistent myAstrology data based on:
- Name
- Birth date
- Birth time
- Birth location

This ensures the same inputs always produce the same results, creating a personalized experience.

### Fixed Issues from React Version

✅ **Generate Button Fixed**: Properly handles form submission with `@submit.prevent`
✅ **City Selection Fixed**: Dropdown works correctly with v-model
✅ **TypeScript Safety**: All types are properly defined
✅ **Reactive State**: Uses Vue's reactivity system correctly
✅ **Component Lifecycle**: Proper cleanup in onUnmounted

### 3D Globe

The interactive globe is powered by Three.js and shows:
- Planetary lines (myAstrocartography)
- City markers for power locations
- Auto-rotation for a dynamic view
- Mobile-friendly touch interactions

## 🎨 Customization

### Adding More Cities

Edit `CITIES_DB` in `composables/usemyAstroData.ts`:

```typescript
export const CITIES_DB: City[] = [
  { name: "Your City, Country", lat: 0.0000, lng: 0.0000 },
  // ...
];
```

### Customizing Planets

Modify `PLANETS` array in `composables/usemyAstroData.ts`:

```typescript
export const PLANETS: Planet[] = [
  {
    id: 'sun',
    name: 'Sun',
    symbol: '☉',
    color: 0xfbbf24,
    cssColor: '#fbbf24',
    question: "Who am I?"
  },
  // ...
];
```

### Styling

- **Tailwind Classes**: Modify classes in components
- **SASS Variables**: Add to `assets/scss/main.scss`
- **Tailwind Config**: Extend theme in `tailwind.config.ts`

## 🔧 TypeScript

All types are defined in `types/myAstro.ts`:

- `City` - City location data
- `Planet` - Planet configuration
- `ZodiacSign` - Zodiac sign data
- `myAstroLine` - myAstrocartography line
- `NatalPosition` - Natal chart position
- `Transit` - Current transit
- `FuturePrediction` - Future prediction
- `CityMatch` - City power match
- `myAstroData` - Complete myAstrology data

## ⚡ Performance

- Three.js lazy-loaded for optimal bundle size
- Pixel ratio capped at 2x for mobile performance
- Animation frame cleanup prevents memory leaks
- Optimized re-renders with Vue's reactivity
- Static site generation support with `nuxt generate`

## 📝 License

This project is open source and available for personal use.

## 🎉 Improvements Over React Version

1. **Better Type Safety** - Full TypeScript integration
2. **Cleaner Code** - Vue Composition API is more concise
3. **Better Performance** - Nuxt 3's optimizations
4. **SSR/SSG Support** - Can be server-rendered or statically generated
5. **Bug Fixes** - All form submission issues resolved
6. **SASS Support** - Better stylesheet organization
7. **Auto-imports** - Components and composables auto-imported

## 🐛 Debugging Notes

The original React version had these issues that were fixed:

1. **Form Submission**: Changed from React's `onSubmit` to Vue's `@submit.prevent`
2. **City Selection**: Uses Vue's v-model instead of React useState
3. **Lifecycle**: Proper Vue lifecycle hooks (onMounted, onUnmounted)
4. **Reactivity**: Uses ref() and computed() for reactive state
5. **Icon Library**: Uses Nuxt Icon instead of lucide-react

---

Built with ❤️ using Nuxt 3 and Vue 3
