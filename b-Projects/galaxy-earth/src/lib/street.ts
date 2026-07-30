// Standalone road-mask surface provider.
//
// Renders a second, hidden MapLibre map (64x64, roads-only, black/white) centred
// on the vehicle, and samples its pixels to answer: is the vehicle on a road,
// how far to the edge, and what friction applies. See street.ts task spec for
// the full rationale — this derives geometry by rendering rather than reading
// lane/width attributes the basemap does not carry.

export interface Surface {
  onRoad: boolean;
  edgeDist: number; // metres to nearest non-road pixel; +Infinity if none within the window
  friction: number; // 0..1
  class: string | null;
  lanes: number | null;
  laneIndex: number | null;
  roadHeading: number | null;
}

export interface StreetConfig {
  providers: string[];
  mask: { sizePx: number; zoom: number; sampleHz: number };
  friction: Record<string, number>;
}

const DEFAULT_SURFACE_TEMPLATE: Omit<Surface, 'onRoad' | 'edgeDist' | 'friction'> = {
  class: null,
  lanes: null,
  laneIndex: null,
  roadHeading: null,
};

function safeDefault(cfg: StreetConfig): Surface {
  return {
    onRoad: true,
    edgeDist: Infinity,
    friction: cfg.friction.asphalt,
    ...DEFAULT_SURFACE_TEMPLATE,
  };
}

/** Meters per pixel for a north-up, unpitched web-mercator view at given lat/zoom. */
export function metresPerPixel(lat: number, zoom: number): number {
  return (156543.03392 * Math.cos((lat * Math.PI) / 180)) / Math.pow(2, zoom);
}

/** Road-ness test: any channel above mid threshold counts as road (white-on-black mask). */
function isRoadPixel(data: Uint8ClampedArray, width: number, x: number, y: number): boolean {
  const idx = (y * width + x) * 4;
  return data[idx] > 127 || data[idx + 1] > 127 || data[idx + 2] > 127;
}

/**
 * Ring-scan outward from the centre pixel to find the first pixel whose
 * road-ness differs from the centre's, returning distance in metres
 * (mpp = metres-per-pixel). Infinity if no differing pixel is found within
 * the window.
 */
export function ringScanEdgeDistance(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  cx: number,
  cy: number,
  mpp: number
): number {
  const centreRoad = isRoadPixel(data, width, cx, cy);
  const maxR = Math.ceil(Math.max(width, height) / 2);
  for (let r = 1; r <= maxR; r++) {
    let best = Infinity;
    for (let dx = -r; dx <= r; dx++) {
      for (let dy = -r; dy <= r; dy++) {
        // only test the ring perimeter (Chebyshev distance == r)
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        const x = cx + dx;
        const y = cy + dy;
        if (x < 0 || x >= width || y < 0 || y >= height) continue;
        if (isRoadPixel(data, width, x, y) !== centreRoad) {
          const d = Math.hypot(dx, dy);
          if (d < best) best = d;
        }
      }
    }
    if (best !== Infinity) return best * mpp;
  }
  return Infinity;
}

type Provider = (
  maplibre: typeof import('maplibre-gl'),
  cfg: StreetConfig,
  basemapStyleUrl: string
) => ReturnType<typeof createStreetProvider>;

const registry = new Map<string, Provider>();

registry.set('mask', createMaskProvider);

export function createStreetProvider(
  maplibre: typeof import('maplibre-gl'),
  cfg: StreetConfig,
  basemapStyleUrl: string
): {
  setPosition(lngLat: [number, number]): void;
  sample(): Surface;
  destroy(): void;
} {
  for (const name of cfg.providers) {
    if (!registry.has(name)) {
      throw new Error(`street: unknown provider "${name}" (registered: ${[...registry.keys()].join(', ')})`);
    }
  }
  const providerName = cfg.providers[0];
  const factory = registry.get(providerName);
  if (!factory) {
    throw new Error(`street: unknown provider "${providerName}" (registered: ${[...registry.keys()].join(', ')})`);
  }
  return factory(maplibre, cfg, basemapStyleUrl);
}

function deriveRoadsOnlyStyle(style: any): any {
  const layers: any[] = [
    {
      id: 'street-mask-bg',
      type: 'background',
      paint: { 'background-color': '#000000' },
    },
  ];
  for (const layer of style.layers ?? []) {
    if (layer.type !== 'line' || layer['source-layer'] !== 'transportation') continue;
    const newLayer: any = {
      id: `street-mask-${layer.id}`,
      type: 'line',
      source: layer.source,
      'source-layer': layer['source-layer'],
      paint: {
        'line-color': '#ffffff',
        'line-width': layer.paint?.['line-width'] ?? 1,
        'line-opacity': 1,
      },
    };
    if (layer.filter) newLayer.filter = layer.filter;
    // minzoom intentionally dropped so roads still draw at the mask zoom.
    // line-dasharray intentionally dropped — dashes would punch false gaps in the mask.
    layers.push(newLayer);
  }
  return { ...style, layers };
}

function createMaskProvider(
  maplibre: typeof import('maplibre-gl'),
  cfg: StreetConfig,
  basemapStyleUrl: string
): {
  setPosition(lngLat: [number, number]): void;
  sample(): Surface;
  destroy(): void;
} {
  let cached: Surface = safeDefault(cfg);
  let position: [number, number] = [0, 0];
  let destroyed = false;
  let map: import('maplibre-gl').Map | null = null;
  let container: HTMLDivElement | null = null;
  let scratch: HTMLCanvasElement | null = null;
  let scratchCtx: CanvasRenderingContext2D | null = null;
  let timer: ReturnType<typeof setInterval> | null = null;

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const size = cfg.mask.sizePx;

    container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.width = `${size}px`;
    container.style.height = `${size}px`;
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.visibility = 'hidden';
    document.body.appendChild(container);

    scratch = document.createElement('canvas');
    scratch.width = size;
    scratch.height = size;
    scratchCtx = scratch.getContext('2d', { willReadFrequently: true });

    fetch(basemapStyleUrl)
      .then((r) => r.json())
      .then((style) => {
        if (destroyed) return;
        const roadsStyle = deriveRoadsOnlyStyle(style);
        map = new maplibre.Map({
          container: container as HTMLDivElement,
          style: roadsStyle,
          center: position,
          zoom: cfg.mask.zoom,
          pitch: 0,
          bearing: 0,
          interactive: false,
          attributionControl: false,
          canvasContextAttributes: { preserveDrawingBuffer: true },
        });

        const sampleIntervalMs = 1000 / cfg.mask.sampleHz;
        timer = setInterval(() => {
          sampleOnce();
        }, sampleIntervalMs);
      })
      .catch(() => {
        // keep safe default cached surface
      });
  }

  function sampleOnce(): void {
    if (!map || !scratch || !scratchCtx) return;
    try {
      const canvas = map.getCanvas();
      scratchCtx.drawImage(canvas, 0, 0, scratch.width, scratch.height);
      const size = cfg.mask.sizePx;
      const imageData = scratchCtx.getImageData(0, 0, size, size);
      const cx = Math.floor(size / 2);
      const cy = Math.floor(size / 2);
      const onRoad = isRoadPixel(imageData.data, size, cx, cy);
      const lat = position[1];
      const mpp = metresPerPixel(lat, cfg.mask.zoom);
      const edgeDist = ringScanEdgeDistance(imageData.data, size, size, cx, cy, mpp);
      cached = {
        onRoad,
        edgeDist,
        friction: onRoad ? cfg.friction.asphalt : cfg.friction.off,
        ...DEFAULT_SURFACE_TEMPLATE,
      };
    } catch {
      // keep previous cached value on failure
    }
  }

  return {
    // Never throws: no matter whether the hidden map failed to construct, the
    // style fetch failed, the canvas is zero-sized, the WebGL context was
    // lost, or destroy() already ran — a provider that can't update position
    // just keeps returning the last-known (or safe-default) sample. This is a
    // nice-to-have (road friction); it must degrade, never break driving.
    setPosition(lngLat: [number, number]): void {
      position = lngLat;
      if (map && !destroyed) {
        try {
          map.jumpTo({ center: lngLat });
        } catch {
          // keep previous cached value; the surface stays whatever it last was
        }
      }
    },
    sample(): Surface {
      return cached;
    },
    destroy(): void {
      if (destroyed) return;
      destroyed = true;
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
      if (map) {
        map.remove();
        map = null;
      }
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
      container = null;
    },
  };
}
