# Personal Profile Website - Project Instructions

## 1. PROJECT VISION

### Core Idea
Create a personal website that serves as an enhanced digital profile, combining the best aspects of:
- **Instagram**: Photo albums and visual storytelling
- **Spotify Profile**: Music playlists and listening preferences
- **Strava/Komoot**: Endurance activities and fitness statistics

This is NOT a professional portfolio, but a personal space to showcase lifestyle, interests, and activities.

### Target Audience
- Personal connections and friends
- Fellow enthusiasts (music lovers, outdoor athletes, photographers)
- Anyone interested in getting to know me through my activities and interests

### Core Value Proposition
A visually engaging, pixel-art styled personal hub that tells my story through photos, music, and athletic achievements.

---

## 2. DESIGN DIRECTION

### Visual Inspiration
**Primary Reference**: [EliasDevis.github.io](https://github.com/EliasDevis/EliasDevis.github.io)

### Design Principles
1. **Pixel Art Aesthetic**: Retro-gaming inspired visual elements
2. **Purple Color Scheme**: Primary brand color with complementary shades
3. **Interactive Elements**: Hover effects, animations, smooth transitions
4. **Nostalgia + Modern**: Classic pixel art meets modern web capabilities

### Color Palette
- **Primary Purple**: `#8B5CF6` (violet-500)
- **Dark Purple**: `#6D28D9` (violet-700)
- **Light Purple**: `#A78BFA` (violet-400)
- **Background**: `#1E1B29` (dark navy-purple)
- **Accent**: `#EC4899` (pink-500)
- **Text**: `#F3F4F6` (light gray)

### Typography
- **Headings**: Pixel-style font (e.g., Press Start 2P, VT323)
- **Body**: More readable pixel font or clean sans-serif for accessibility

---

## 3. TECHNOLOGY STACK

### Frontend
- **Framework**: SvelteKit (with TypeScript)
- **Styling**: Sass (SCSS syntax)
- **Animation**: Svelte transitions + custom CSS animations
- **Icons**: Pixel art icons (custom or from gaming icon sets)

### Data Integration
- **Photo Albums**: Local assets or integration with photo service API
- **Music**: Spotify API for playlists and listening data
- **Fitness**: Strava API for activities and statistics

### DevOps & Analytics
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages
- **Analytics**: Matomo (server-side, privacy-focused)
- **Version Control**: Git + GitHub

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint + Prettier
- **Testing**: Vitest (optional for critical components)
- **Build Tool**: Vite (bundled with SvelteKit)

---

## 4. PROJECT STRUCTURE

### Directory Organization (Hybrid Approach)

This project uses a **hybrid structure** that combines your preferred numbered folder organization with SvelteKit's requirements. SvelteKit is configured to use the numbered directories directly, with symlinks for convenience.

```
myprofile/
├── 0.spec/                      # Product specifications and planning
│   ├── 00-instruc.md           # This file - project overview
│   ├── 01-spec.md              # Detailed product specifications
│   ├── 02.plan.md              # Development roadmap and milestones
│   └── 03.task.md              # Granular task breakdown
│
├── 1.1.ops/                     # CI/CD workflows and automation
│   └── deploy.yml              # GitHub Actions deployment workflow
│
├── 1.2.analytics/               # Analytics configuration
│   └── matomo-config.js        # Matomo tracking setup
│
├── 1.3.svelte/                  # SvelteKit source (configured as src/)
│   ├── lib/                    # Reusable components and utilities
│   │   ├── components/         # Svelte components
│   │   │   ├── common/         # Shared components
│   │   │   ├── layout/         # Layout components
│   │   │   └── pages/          # Page-specific components
│   │   ├── services/           # API services (Spotify, Strava)
│   │   ├── types/              # TypeScript type definitions
│   │   └── utils/              # Utility functions
│   ├── routes/                 # SvelteKit page routes
│   │   ├── photos/             # Photo albums page
│   │   ├── music/              # Music page
│   │   ├── stats/              # Stats page
│   │   ├── +layout.svelte      # Root layout
│   │   └── +page.svelte        # Home page
│   ├── styles/                 # Sass stylesheets
│   │   ├── abstracts/          # Variables, mixins, functions
│   │   ├── base/               # Reset, typography, global
│   │   ├── components/         # Component-specific styles
│   │   ├── layouts/            # Layout styles
│   │   └── global.scss         # Main stylesheet
│   └── app.html                # HTML template
│
├── 2.1.assets/                  # Static assets (configured as static/)
│   ├── images/                 # Photo albums and images
│   │   └── albums/             # Album photos
│   ├── icons/                  # Pixel art icons
│   └── fonts/                  # Custom pixel fonts
│
├── 2.2.sass/  → 1.3.svelte/styles/    # Symlink for easy access
├── 2.3.ts/    → 1.3.svelte/lib/types/ # Symlink for easy access
│
├── .github/                     # GitHub configuration
│   └── workflows/
│       └── deploy.yml  → ../../1.1.ops/deploy.yml  # Symlink
│
├── dist/                        # Build output (generated)
│   ├── index.html              # Built HTML
│   ├── _app/                   # Built JS/CSS bundles
│   │   ├── immutable/
│   │   └── version.json
│   └── ...
│
├── svelte.config.js             # SvelteKit config (points to 1.3.svelte/)
├── vite.config.ts               # Vite build config
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Git ignore rules
├── .env.example                 # Environment variables template
└── README.md                    # Project documentation
```

### How It Works

**1. SvelteKit Configuration**
- `svelte.config.js` is configured to use `1.3.svelte/` as the source directory
- `2.1.assets/` is configured as the static assets directory
- Build output goes to `dist/` folder

**2. Symlinks for Convenience**
- `2.2.sass/` → `1.3.svelte/styles/` (easy access to stylesheets)
- `2.3.ts/` → `1.3.svelte/lib/types/` (easy access to TypeScript types)
- `.github/workflows/deploy.yml` → `1.1.ops/deploy.yml` (GitHub requires .github/)

**3. Build Output**
- Production build creates `dist/` with optimized files
- `dist/index.html` is the entry point
- `dist/_app/` contains bundled JavaScript and CSS
- Deploy `dist/` folder to GitHub Pages

### Key Configuration Files

**SvelteKit Configuration** (`svelte.config.js`):
```javascript
kit: {
  files: {
    assets: '2.1.assets',
    hooks: {
      client: '1.3.svelte/hooks.client',
      server: '1.3.svelte/hooks.server'
    },
    lib: '1.3.svelte/lib',
    params: '1.3.svelte/params',
    routes: '1.3.svelte/routes',
    serviceWorker: '1.3.svelte/service-worker',
    appTemplate: '1.3.svelte/app.html'
  },
  outDir: 'dist'
}
```

**TypeScript Configuration** (`tsconfig.json`):
```json
{
  "compilerOptions": {
    "paths": {
      "$lib": ["./1.3.svelte/lib"],
      "$lib/*": ["./1.3.svelte/lib/*"]
    }
  }
}
```

### Advantages of This Structure

✅ **Your Organization**: Numbered folders match your preferred structure
✅ **SvelteKit Features**: Full framework capabilities (routing, SSR, optimization)
✅ **Easy Access**: Symlinks provide shortcuts to frequently accessed folders
✅ **Clean Separation**: DevOps (1.x) separate from source code (2.x) separate from specs (0.x)
✅ **Standard Build**: Output to `dist/` is standard and deployable
✅ **Team Friendly**: Other developers can understand SvelteKit + your organization

---

## 5. FEATURE REQUIREMENTS

### Must Have (MVP)
1. **Home/Landing Page**: Welcome section with pixel art avatar
2. **Photo Album Section**: Gallery view with categories
3. **Music Section**: Display recent playlists from Spotify
4. **Stats Section**: Basic endurance activity statistics
5. **Responsive Design**: Mobile and desktop layouts
6. **Navigation**: Pixel-art style menu/navigation

### Nice to Have (Post-MVP)
1. **Music Player Integration**: Embedded Spotify player
2. **Activity Maps**: Visual route displays from Strava
3. **Photo Filtering**: Sort by date, category, location
4. **Dark/Light Mode Toggle**: Theme switcher
5. **About Section**: Personal bio and interests
6. **Contact/Links**: Social media links

### Future Enhancements
1. **Blog Section**: Optional writing/updates
2. **Achievements**: Gamified badges and milestones
3. **Guest Book**: Pixel art guestbook/comments
4. **3D Elements**: Three.js pixel art scenes

---

## 6. DATA SOURCES & APIs

### Photo Albums
- **Option A**: Local static images in `/static/images/`
- **Option B**: Integration with cloud storage (Google Photos API)
- **Recommendation**: Start with local, migrate to API later

### Music Playlists
- **Primary**: Spotify Web API
- **Requirements**:
  - Spotify Developer account
  - OAuth authentication
  - API rate limiting handling
- **Data**: Recently played, top tracks, playlists

### Endurance Stats
- **Primary**: Strava API
- **Alternative**: Komoot API
- **Requirements**:
  - Strava/Komoot developer credentials
  - OAuth authentication
- **Data**: Activities, total distance, elevation, achievements

---

## 7. DEVELOPMENT METHODOLOGY

### Spec-Driven Development
This project follows a structured approach with three key documents:

1. **01-spec.md** - Product Specifications
   - Detailed user stories
   - Feature specifications
   - Technical requirements
   - UI/UX specifications
   - API integration details

2. **02.plan.md** - Development Roadmap
   - Phase breakdown
   - Milestones and deliverables
   - Dependencies and blockers
   - Timeline estimates

3. **03.task.md** - Task Breakdown
   - Granular, actionable tasks
   - Task dependencies
   - Acceptance criteria
   - Implementation notes

### Development Workflow
1. **Spec → Plan → Task**: Follow the documentation hierarchy
2. **Iterative Development**: Build in phases, test incrementally
3. **Version Control**: Commit after each completed task
4. **Testing**: Manual testing for MVP, automated for complex features
5. **Deployment**: Automated via GitHub Actions

---

## 8. SUCCESS CRITERIA

### Technical Success
- ✅ Site loads in <2 seconds
- ✅ Responsive on mobile, tablet, desktop
- ✅ No console errors or warnings
- ✅ Accessible (WCAG AA standards)
- ✅ Successfully fetches and displays API data

### Design Success
- ✅ Consistent pixel art aesthetic throughout
- ✅ Purple color scheme applied cohesively
- ✅ Smooth animations and transitions
- ✅ Intuitive navigation

### User Success
- ✅ Visitors can easily browse photo albums
- ✅ Music preferences are clearly displayed
- ✅ Athletic achievements are showcased effectively
- ✅ Overall experience is engaging and personal

---

## 9. CONSTRAINTS & CONSIDERATIONS

### Performance
- Optimize images (WebP format, lazy loading)
- Minimize API calls (caching strategies)
- Code splitting for faster initial load

### Privacy
- Server-side analytics (Matomo) for privacy compliance
- No third-party tracking scripts
- Clear data usage for APIs

### Maintenance
- Modular code for easy updates
- Documentation for API integrations
- Automated deployment reduces manual work

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers

---

## 10. GETTING STARTED

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Code editor (VS Code recommended)
- Basic knowledge of TypeScript and Svelte

### Initial Setup Steps
1. Read through `01-spec.md` for detailed requirements
2. Review `02.plan.md` for development roadmap
3. Start with tasks in `03.task.md`
4. Set up development environment
5. Initialize SvelteKit project
6. Begin Phase 1 development

### Next Steps
Proceed to `01-spec.md` for detailed product specifications.