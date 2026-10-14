# SlabTwin 3D Pro - Warehouse Stock Engine

## Overview
A sophisticated 3D warehouse inventory management system for high-density marble slab storage using A-Frame rack systems. Features real-time visualization, deterministic texture generation, and comprehensive stock management.

## Stack
- **3D Engine**: Babylon.js
- **UI Framework**: Tailwind CSS + Vanilla JavaScript
- **Architecture**: Single-page application (SPA)
- **Data Generation**: Procedural JSON dataset simulation
- **Rendering**: PBR materials with dynamic texture synthesis

## Key Features
1. **3D Warehouse Visualization**: Interactive 3D model of warehouse with 35 A-Frame racks and 500 marble slabs
2. **Stock Register**: Searchable database of all slabs with filtering by material, location, and status
3. **Slab Viewer**: Multi-tab caching system for detailed slab inspection with 2D texture and 3D close-up views
4. **Slider Carousel**: Unique slab grouping with drag/swipe navigation and batch stock viewing

## Project Structure
```
Warehouse/
├── 0.spec/              # Specifications & documentation
├── 1.ops/               # Operations & build configs
├── src/                 # All source files (HTML with embedded JS)
├── dist/                # Build output
├── public/              # Static assets
├── build.json           # Build configuration
└── package.json         # Dependencies & metadata
```

## Quick Start
```bash
# Serve locally
npm run serve
# Visit http://localhost:8020
```

## Materials Available
- Carrara White
- Nero Marquina
- Verde Alpi
- Crema Marfil
- Calacatta Gold

## Technical Notes
- 500 slabs dynamically generated with deterministic seeding
- Marble veins synthesized using mulberry32 PRNG
- Shadow mapping with bloom post-processing
- Responsive design supports desktop and tablet

## Performance
- Target: 60 FPS on modern hardware
- Initial load: ~2-3 seconds
- Optimized for Chrome, Firefox, Safari, Edge
