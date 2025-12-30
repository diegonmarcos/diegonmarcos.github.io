import type { MapConfig, GeoJSONFeatureCollection } from '../types';
import { loadMapFile, detectFileType, parseKML, parseKMZ, parseCSV } from './parsers';
import { GEOPOLITICAL_COUNTRIES } from '../data/geopolitical';
// @ts-ignore - virtual module generated at build time
import { EMBEDDED_MAPS } from 'virtual:embedded-maps';

// Predefined maps from the maps directory
export const PREDEFINED_MAPS: MapConfig[] = [
  // KML/Leaflet Maps (with pins/icons)
  {
    id: 'city-map',
    name: 'Cities RoadMap',
    description: 'Cities visited vs. planned - my personal travel map with pins',
    type: 'kml',
    filePath: 'maps/city_map/city_maps.kml',
    center: [48.8566, 2.3522],
    zoom: 4,
  },
  // Highcharts Geopolitical Maps (painted countries)
  {
    id: 'world-strategic',
    name: 'World Strategic View',
    description: 'Global geopolitical alignments and spheres of influence',
    type: 'highcharts',
    mapPath: 'custom/world',
    center: [20, 0],
    zoom: 2,
    countries: GEOPOLITICAL_COUNTRIES,
  },
  {
    id: 'europe-focus',
    name: 'European Theater',
    description: 'Focus on European NATO members and Russian influence',
    type: 'highcharts',
    mapPath: 'custom/europe',
    center: [50, 10],
    zoom: 4,
    countries: GEOPOLITICAL_COUNTRIES,
  },
];

/**
 * Get all available maps
 */
export function getAllMaps(): MapConfig[] {
  return PREDEFINED_MAPS;
}

/**
 * Get a map by ID
 */
export function getMapById(id: string): MapConfig | undefined {
  return PREDEFINED_MAPS.find(m => m.id === id);
}

/**
 * Convert data URL to ArrayBuffer
 */
function dataUrlToArrayBuffer(dataUrl: string): ArrayBuffer {
  const base64 = dataUrl.split(',')[1];
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Convert data URL to text
 */
function dataUrlToText(dataUrl: string): string {
  const base64 = dataUrl.split(',')[1];
  return atob(base64);
}

/**
 * Load a predefined map's data - uses embedded data if available
 */
export async function loadPredefinedMap(
  config: MapConfig
): Promise<{ geojson: GeoJSONFeatureCollection; icons: Map<string, string> }> {
  if (!config.filePath) {
    throw new Error('Map has no file path');
  }

  // Check for embedded maps (available in production build)
  const embeddedData = EMBEDDED_MAPS as Record<string, string>;
  if (embeddedData && embeddedData[config.filePath]) {
    const dataUrl = embeddedData[config.filePath];
    const icons = new Map<string, string>();

    // Extract embedded icons for this map's directory
    const mapDir = config.filePath.replace(/[^/]+$/, '');
    for (const [path, url] of Object.entries(embeddedData)) {
      if (path.startsWith(mapDir) && path.match(/\.(png|jpg|jpeg|gif)$/i)) {
        icons.set(path, url);
      }
    }

    switch (config.type) {
      case 'kml': {
        const text = dataUrlToText(dataUrl);
        return { geojson: parseKML(text), icons };
      }
      case 'kmz': {
        const buffer = dataUrlToArrayBuffer(dataUrl);
        return parseKMZ(buffer);
      }
      case 'csv': {
        const text = dataUrlToText(dataUrl);
        return { geojson: parseCSV(text), icons };
      }
      case 'geojson': {
        const text = dataUrlToText(dataUrl);
        return { geojson: JSON.parse(text), icons };
      }
    }
  }

  // Fallback to fetch (works in dev mode or with a server)
  return loadMapFile(config.filePath, config.type);
}

/**
 * Create a custom map config from a file
 */
export function createCustomMapConfig(filename: string): MapConfig {
  const type = detectFileType(filename);
  if (!type) {
    throw new Error(`Unsupported file: ${filename}`);
  }

  return {
    id: `custom-${Date.now()}`,
    name: filename.replace(/\.[^/.]+$/, ''),
    description: 'Custom uploaded map',
    type,
    center: [0, 0],
    zoom: 2,
  };
}

/**
 * Extract folder/category information from KML-based GeoJSON
 */
export function extractCategories(
  geojson: GeoJSONFeatureCollection
): Map<string, number> {
  const categories = new Map<string, number>();

  for (const feature of geojson.features) {
    const styleUrl = feature.properties.styleUrl as string | undefined;
    let category = 'Default';

    if (styleUrl) {
      if (styleUrl.includes('1501') || styleUrl.includes('C2185B')) {
        category = 'Visited';
      } else if (styleUrl.includes('1502') || styleUrl.includes('558B2F')) {
        category = 'Planned';
      }
    }

    categories.set(category, (categories.get(category) ?? 0) + 1);
  }

  return categories;
}

/**
 * Get embedded icon URL if available
 */
export function getEmbeddedIcon(path: string): string | undefined {
  const embeddedData = EMBEDDED_MAPS as Record<string, string>;
  return embeddedData?.[path];
}
