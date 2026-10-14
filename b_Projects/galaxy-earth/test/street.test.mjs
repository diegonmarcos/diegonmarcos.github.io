// ponytail: mirrors earth.test.mjs — node 22's unflagged type-stripping resolves
// the .ts import directly, no --experimental-strip-types needed.
import { metresPerPixel, ringScanEdgeDistance, createStreetProvider } from '../src/lib/street.ts';

// --- metresPerPixel ---
{
  const lat = 0;
  const zoom = 18;
  const expected = (156543.03392 * Math.cos((lat * Math.PI) / 180)) / Math.pow(2, zoom);
  const got = metresPerPixel(lat, zoom);
  if (Math.abs(got - expected) > 1e-9) {
    throw new Error(`metresPerPixel(0, 18) expected ${expected}, got ${got}`);
  }
  // sanity: known-ish value at equator zoom 18 is ~0.597 m/px
  if (got < 0.5 || got > 0.7) {
    throw new Error(`metresPerPixel(0, 18) out of expected sanity range: ${got}`);
  }
}

// --- ringScanEdgeDistance ---
function makeImage(size, roadFn) {
  const data = new Uint8ClampedArray(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const road = roadFn(x, y);
      const v = road ? 255 : 0;
      data[idx] = v;
      data[idx + 1] = v;
      data[idx + 2] = v;
      data[idx + 3] = 255;
    }
  }
  return data;
}

{
  // centre-on-road with a black band starting at a known radius r
  const size = 64;
  const cx = 32;
  const cy = 32;
  const bandRadius = 10;
  const data = makeImage(size, (x, y) => {
    const d = Math.max(Math.abs(x - cx), Math.abs(y - cy));
    return d < bandRadius; // road inside radius, off-road at/after bandRadius
  });
  const mpp = 2;
  const got = ringScanEdgeDistance(data, size, size, cx, cy, mpp);
  const expected = bandRadius * mpp; // first differing pixel is exactly at Chebyshev distance bandRadius
  if (Math.abs(got - expected) > 1e-9) {
    throw new Error(`ringScanEdgeDistance band case expected ${expected}, got ${got}`);
  }
}

{
  // fully-road window -> Infinity
  const size = 64;
  const data = makeImage(size, () => true);
  const got = ringScanEdgeDistance(data, size, size, 32, 32, 2);
  if (got !== Infinity) {
    throw new Error(`ringScanEdgeDistance fully-road window expected Infinity, got ${got}`);
  }
}

{
  // centre off-road -> distance to first road pixel
  const size = 64;
  const cx = 32;
  const cy = 32;
  const roadRadius = 5;
  const data = makeImage(size, (x, y) => {
    const d = Math.max(Math.abs(x - cx), Math.abs(y - cy));
    return d >= roadRadius; // off-road inside radius, road at/after roadRadius
  });
  const mpp = 3;
  const got = ringScanEdgeDistance(data, size, size, cx, cy, mpp);
  const expected = roadRadius * mpp;
  if (Math.abs(got - expected) > 1e-9) {
    throw new Error(`ringScanEdgeDistance off-road-centre case expected ${expected}, got ${got}`);
  }
}

// --- registry ---
{
  const cfg = {
    providers: ['tiles'],
    mask: { sizePx: 64, zoom: 17, sampleHz: 20 },
    friction: { asphalt: 1, off: 0.5 },
  };
  let threw = false;
  try {
    createStreetProvider(/** @type {any} */ (null), cfg, 'https://example.invalid/style.json');
  } catch (e) {
    threw = true;
    if (!/tiles/.test(String(e.message))) {
      throw new Error(`createStreetProvider(["tiles"]) error should name "tiles", got: ${e.message}`);
    }
  }
  if (!threw) {
    throw new Error('createStreetProvider(["tiles"]) must throw — provider not implemented');
  }
}

{
  const cfg = {
    providers: ['mask'],
    mask: { sizePx: 64, zoom: 17, sampleHz: 20 },
    friction: { asphalt: 1, off: 0.5 },
  };
  // In this non-DOM test env, no window/document exist, so createMaskProvider
  // must not throw at construction time (SSR-safe guard) and sample() must
  // synchronously return the safe default.
  const provider = createStreetProvider(/** @type {any} */ (null), cfg, 'https://example.invalid/style.json');
  const s = provider.sample();
  if (s.onRoad !== true || s.edgeDist !== Infinity || s.friction !== cfg.friction.asphalt) {
    throw new Error(`createStreetProvider(["mask"]) default sample() mismatch: ${JSON.stringify(s)}`);
  }
  if (s.class !== null || s.lanes !== null || s.laneIndex !== null || s.roadHeading !== null) {
    throw new Error(`createStreetProvider(["mask"]) default sample() must have null class/lanes/laneIndex/roadHeading: ${JSON.stringify(s)}`);
  }
  provider.destroy();
  provider.destroy(); // must be safe to call twice
}

console.log('street OK');
