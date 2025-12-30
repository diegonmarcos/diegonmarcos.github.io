// GeoJSON Feature types
export interface GeoJSONFeature {
  type: 'Feature';
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon';
    coordinates: number[] | number[][] | number[][][];
  };
  properties: {
    name?: string;
    description?: string;
    styleUrl?: string;
    [key: string]: unknown;
  };
}

export interface GeoJSONFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

// Geopolitical sphere types
export type Sphere =
  | 'RED_CORE'
  | 'RED_ALLY'
  | 'RED_TIE'
  | 'RED_WEAK'
  | 'BLUE_CORE'
  | 'BLUE_ALLY'
  | 'BLUE_SURR'
  | 'NEUTRAL_STRONG'
  | 'NEUTRAL_WEAK';

export interface CountryData {
  code: string;
  name: string;
  role: string;
  sphere: Sphere;
  color?: string;
}

export const SPHERE_COLORS: Record<Sphere, string> = {
  RED_CORE: '#8B0000',
  RED_ALLY: '#CD5C5C',
  RED_TIE: '#FF8C00',
  RED_WEAK: '#F0E68C',
  BLUE_CORE: '#00008B',
  BLUE_ALLY: '#87CEEB',
  BLUE_SURR: '#90EE90',
  NEUTRAL_STRONG: '#4F4F4F',
  NEUTRAL_WEAK: '#2C2C2C',
};

export const SPHERE_LABELS: Record<Sphere, string> = {
  RED_CORE: 'Red Core (Aggressor)',
  RED_ALLY: 'Red Ally',
  RED_TIE: 'Red Tie (Economic)',
  RED_WEAK: 'Red Weak',
  BLUE_CORE: 'Blue Core (NATO)',
  BLUE_ALLY: 'Blue Ally',
  BLUE_SURR: 'Blue Surrounded',
  NEUTRAL_STRONG: 'Neutral Strong',
  NEUTRAL_WEAK: 'Neutral',
};

// Map configuration
export interface MapConfig {
  id: string;
  name: string;
  description: string;
  type: 'kml' | 'kmz' | 'csv' | 'geojson' | 'highcharts';
  filePath?: string;
  mapPath?: string; // For Highcharts maps (e.g., 'custom/world', 'custom/europe')
  center?: [number, number];
  zoom?: number;
  countries?: CountryData[]; // For geopolitical maps
}

// Loaded map data
export interface MapData {
  config: MapConfig;
  geojson: GeoJSONFeatureCollection | null;
  icons: Map<string, string>;
  loading: boolean;
  error: string | null;
}

// CSV row for coordinate data
export interface CSVRow {
  name?: string;
  lat?: string | number;
  lng?: string | number;
  latitude?: string | number;
  longitude?: string | number;
  description?: string;
  [key: string]: unknown;
}

// Legend item
export interface LegendItem {
  id: string;
  label: string;
  color: string;
  icon?: string;
  count?: number;
}

// Folder structure from KML
export interface KMLFolder {
  name: string;
  features: GeoJSONFeature[];
}
