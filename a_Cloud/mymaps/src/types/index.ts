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

// Map configuration
export interface MapConfig {
  id: string;
  name: string;
  description: string;
  type: 'kml' | 'kmz' | 'csv' | 'geojson';
  filePath?: string;
  center?: [number, number];
  zoom?: number;
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
