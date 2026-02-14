import * as toGeoJSON from '@mapbox/togeojson';
import JSZip from 'jszip';
import Papa from 'papaparse';
import type { GeoJSONFeatureCollection, CSVRow, GeoJSONFeature } from '../types';

/**
 * Parse KML string to GeoJSON
 */
export function parseKML(kmlString: string): GeoJSONFeatureCollection {
  const parser = new DOMParser();
  const kmlDoc = parser.parseFromString(kmlString, 'text/xml');

  // Check for parse errors
  const parseError = kmlDoc.querySelector('parsererror');
  if (parseError) {
    throw new Error('Invalid KML format');
  }

  return toGeoJSON.kml(kmlDoc);
}

/**
 * Parse KMZ file (zip containing KML and assets)
 */
export async function parseKMZ(
  data: ArrayBuffer
): Promise<{ geojson: GeoJSONFeatureCollection; icons: Map<string, string> }> {
  const zip = await JSZip.loadAsync(data);
  const icons = new Map<string, string>();

  // Find and parse the KML file
  let kmlContent: string | null = null;

  for (const [filename, file] of Object.entries(zip.files)) {
    if (filename.endsWith('.kml')) {
      kmlContent = await file.async('text');
    } else if (filename.match(/\.(png|jpg|jpeg|gif|svg)$/i)) {
      // Extract icons as base64 data URLs
      const blob = await file.async('blob');
      const dataUrl = await blobToDataURL(blob);
      icons.set(filename, dataUrl);
    }
  }

  if (!kmlContent) {
    throw new Error('No KML file found in KMZ archive');
  }

  const geojson = parseKML(kmlContent);
  return { geojson, icons };
}

/**
 * Parse CSV to GeoJSON points
 */
export function parseCSV(csvString: string): GeoJSONFeatureCollection {
  const result = Papa.parse<CSVRow>(csvString, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
  });

  if (result.errors.length > 0) {
    console.warn('CSV parse warnings:', result.errors);
  }

  const features: GeoJSONFeature[] = result.data
    .map((row, index) => {
      // Try different column name conventions for coordinates
      const lat = Number(row.lat ?? row.latitude ?? row.Lat ?? row.Latitude);
      const lng = Number(row.lng ?? row.longitude ?? row.lon ?? row.Lng ?? row.Longitude ?? row.Lon);

      if (isNaN(lat) || isNaN(lng)) {
        console.warn(`Row ${index + 1}: Invalid coordinates`);
        return null;
      }

      // Build properties from all columns except coordinates
      const properties: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(row)) {
        if (!['lat', 'latitude', 'lng', 'longitude', 'lon', 'Lat', 'Latitude', 'Lng', 'Longitude', 'Lon'].includes(key)) {
          properties[key] = value;
        }
      }

      return {
        type: 'Feature' as const,
        geometry: {
          type: 'Point' as const,
          coordinates: [lng, lat],
        },
        properties: {
          name: String(row.name ?? row.Name ?? row.title ?? row.Title ?? `Point ${index + 1}`),
          ...properties,
        },
      };
    })
    .filter((f): f is GeoJSONFeature => f !== null);

  return {
    type: 'FeatureCollection',
    features,
  };
}

/**
 * Load and parse a map file from URL
 */
export async function loadMapFile(
  url: string,
  type: 'kml' | 'kmz' | 'csv' | 'geojson'
): Promise<{ geojson: GeoJSONFeatureCollection; icons: Map<string, string> }> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load file: ${response.statusText}`);
  }

  const icons = new Map<string, string>();

  switch (type) {
    case 'kml': {
      const text = await response.text();
      return { geojson: parseKML(text), icons };
    }
    case 'kmz': {
      const buffer = await response.arrayBuffer();
      return parseKMZ(buffer);
    }
    case 'csv': {
      const text = await response.text();
      return { geojson: parseCSV(text), icons };
    }
    case 'geojson': {
      const json = await response.json();
      return { geojson: json, icons };
    }
    default:
      throw new Error(`Unsupported file type: ${type}`);
  }
}

/**
 * Detect file type from filename
 */
export function detectFileType(filename: string): 'kml' | 'kmz' | 'csv' | 'geojson' | null {
  const ext = filename.toLowerCase().split('.').pop();
  switch (ext) {
    case 'kml':
      return 'kml';
    case 'kmz':
      return 'kmz';
    case 'csv':
      return 'csv';
    case 'json':
    case 'geojson':
      return 'geojson';
    default:
      return null;
  }
}

/**
 * Helper to convert Blob to data URL
 */
function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Parse a File object (for drag-and-drop / file input)
 */
export async function parseFile(
  file: File
): Promise<{ geojson: GeoJSONFeatureCollection; icons: Map<string, string> }> {
  const type = detectFileType(file.name);

  if (!type) {
    throw new Error(`Unsupported file type: ${file.name}`);
  }

  const icons = new Map<string, string>();

  switch (type) {
    case 'kml': {
      const text = await file.text();
      return { geojson: parseKML(text), icons };
    }
    case 'kmz': {
      const buffer = await file.arrayBuffer();
      return parseKMZ(buffer);
    }
    case 'csv': {
      const text = await file.text();
      return { geojson: parseCSV(text), icons };
    }
    case 'geojson': {
      const text = await file.text();
      return { geojson: JSON.parse(text), icons };
    }
  }
}
