declare module '@mapbox/togeojson' {
  export function kml(doc: Document): import('./index').GeoJSONFeatureCollection;
  export function gpx(doc: Document): import('./index').GeoJSONFeatureCollection;
}
