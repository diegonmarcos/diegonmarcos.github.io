# BioFractalViewer Shader Architecture

This directory contains modular GLSL shaders for the BioFractalViewer component, featuring 50 distinct visual effects.

## File Structure

```
src/shaders/
├── vertex.glsl              # Vertex shader (8 lines)
├── fragment-base.glsl       # Base utilities and helper functions (47 lines)
├── fragment-fractals.glsl   # All 50 visual effect implementations (811 lines)
├── fragment-main.glsl       # Main fragment shader with scene routing (130 lines)
└── README.md               # This file
```

## Shader Components

### vertex.glsl
- Simple pass-through vertex shader
- Passes UV coordinates to fragment shader
- Converts clip space coordinates

### fragment-base.glsl
Contains core utility functions:
- `rot()` - 2D rotation matrix
- `hsv2rgb()` - Color space conversion
- `hash()`, `hash2()`, `hash3()` - Procedural noise functions
- `noise()`, `noise3()` - 2D and 3D noise
- `fakeAudio()` - Simulated audio reactivity
- Constants: `MAX_STEPS`, `MAX_DIST`, `SURF_DIST`, `PI`

### fragment-fractals.glsl
Implements all 50 visual effects grouped by type:

#### 3D Fractal SDFs (modes 0-6, 15-19)
0. **Mandelbulb** - Classic 3D Mandelbrot set
1. **Mandelbox** - Box-folding fractal
2. **Menger Sponge** - 3D fractal cube
3. **Sierpinski** - Tetrahedral fractal
4. **Kaleidoscope** - Mirrored 3D fractal
5. **Organic Hybrid** - Mandelbox variant with sine modulation
6. **Fractal Land** - Terrain-like fractal
15. **Hot Rocks** - Rotating angular fractal
16. **Server Room** - Voxel-based cubic structure
17. **Remnant X** - X-shaped fractal structure
18. **Kali Set** - IFS fractal with dynamic scaling
19. **Generators** - Geometric folding fractal

#### 2D Effects (modes 7-14, 20-49)
7. **Galaxy Nebula** - Multi-layered procedural nebula
8. **Infinite Tunnel** - Polar coordinate tunnel
9. **Plasma Fractal** - Sine-based plasma with fractal detail
10. **Circuits** - Circuit board aesthetic
11. **Metaballs** - Organic blob simulation
12. **Volumetric Lines** - Glowing moving lines
13. **Disco Tunnel** - Cellular tunnel with pulsing colors
14. **Speed Drive** - Star field effect
20. **Simplicity Galaxy** - IFS-based galaxy renderer
21. **Ribbons** - Flowing ribbon waves
22. **Twisted Rings** - Polar beats visualization
23. **Waves Remix** - Audio-reactive wave visualization
24. **Dancing Metalights** - Metaball lights
25. **IO Blocks** - Matrix-style data blocks
26. **Beating Circles** - Concentric pulsing circles
27. **Circle Wave** - Radial audio visualization
28. **Soundflower** - Flower-shaped audio pattern
29. **Polar Beats** - Polar coordinate audio viz
30. **Undulant Spectre** - Waveform visualizer
31. **Revision 2015** - Demo-scene inspired effect
32. **Gameboy Style** - Retro pixelated audio viz
33. **Electric Storm** - Lightning-like patterns
34. **Vortex** - Spiral vortex effect
35. **Neon Grid** - Scrolling grid with audio
36. **Matrix Rain** - Matrix-style rain effect
37. **Fire** - Procedural fire simulation
38. **Aurora** - Northern lights effect
39. **Wormhole** - Warped space tunnel
40. **Hexagons** - Hexagonal grid with audio
41. **Bubbles** - Rising bubble simulation
42. **Lightning** - Electric bolt effect
43. **Kaleidoscope 2D** - 2D kaleidoscope pattern
44. **Starfield** - Parallax star field
45. **Liquid Metal** - Flowing metallic effect
46. **Fractal Tree** - Branching tree structure
47. **Voronoi** - Animated Voronoi cells
48. **Psychedelic** - IFS psychedelic pattern
49. **Energy Field** - Radial energy waves

### fragment-main.glsl
- Main shader entry point
- Handles mode routing for all 50 effects
- Implements 3D raymarching for fractal modes
- Applies post-processing (vignette, tone mapping)
- Contains:
  - `map3D()` - Scene distance field router
  - `raymarch()` - Ray marching loop for 3D fractals
  - `getNormal()` - Normal calculation for lighting
  - `main()` - Main fragment shader

## Usage in Vue Component

The shaders are imported and combined at build time:

```typescript
import vertexShaderSource from '../shaders/vertex.glsl?raw';
import fragmentBaseSource from '../shaders/fragment-base.glsl?raw';
import fragmentFractalsSource from '../shaders/fragment-fractals.glsl?raw';
import fragmentMainSource from '../shaders/fragment-main.glsl?raw';

const vertexShader = vertexShaderSource;
const fragmentShader = `${fragmentBaseSource}\n${fragmentFractalsSource}\n${fragmentMainSource}`;
```

## Shader Uniforms

All shaders receive these uniforms:
- `uTime` (float) - Elapsed time in seconds
- `uResolution` (vec2) - Canvas resolution
- `uMode` (int) - Effect mode (0-49)

## Development Notes

- All effects are self-contained functions
- 3D effects use signed distance fields (SDFs)
- 2D effects use screen-space coordinates
- Audio reactivity is simulated via `fakeAudio()` function
- Colors are generated using HSV color space for smooth transitions

## Performance Considerations

- 3D raymarched fractals (modes 0-6, 15-19) are more GPU intensive
- 2D effects (modes 7-14, 20-49) are generally lighter
- `MAX_STEPS` can be adjusted in fragment-base.glsl for performance tuning
- Fragment complexity varies significantly between modes

## Adding New Effects

To add a new effect:

1. Add the effect function to `fragment-fractals.glsl`
2. Add routing logic to `map3D()` (for 3D) or main switch (for 2D) in `fragment-main.glsl`
3. Update this README with effect documentation
4. Assign it the next available mode number

## License

Part of the front-Github_io project
