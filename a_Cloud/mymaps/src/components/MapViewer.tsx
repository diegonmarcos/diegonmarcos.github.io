import { useEffect, useState, useRef, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Polygon, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { GeoJSONFeatureCollection, GeoJSONFeature } from '../types';
import { getEmbeddedIcon } from '../utils/mapLoader';

// Fix for Leaflet default marker icons
const iconRetinaUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png';
const iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';
const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

delete (L.Icon.Default.prototype as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

interface MapViewerProps {
  geojson: GeoJSONFeatureCollection | null;
  icons?: Map<string, string>;
  center?: [number, number];
  zoom?: number;
  showUserLocation?: boolean;
  basePath?: string;
}

function UserLocationMarker() {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const map = useMap();
  const initializedRef = useRef(false);

  useEffect(() => {
    map.locate({ watch: true, enableHighAccuracy: true });

    const onLocationFound = (e: L.LocationEvent) => {
      setPosition(e.latlng);
      if (!initializedRef.current) {
        initializedRef.current = true;
      }
    };

    const onLocationError = (e: L.ErrorEvent) => {
      console.warn('Location access denied:', e.message);
    };

    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);

    return () => {
      map.off('locationfound', onLocationFound);
      map.off('locationerror', onLocationError);
      map.stopLocate();
    };
  }, [map]);

  if (!position) return null;

  const userIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: 'user-location-marker',
  });

  return (
    <Marker position={position} icon={userIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function FitBounds({ geojson }: { geojson: GeoJSONFeatureCollection }) {
  const map = useMap();

  useEffect(() => {
    if (!geojson || geojson.features.length === 0) return;

    const bounds = L.latLngBounds([]);

    geojson.features.forEach(feature => {
      const coords = feature.geometry.coordinates;

      if (feature.geometry.type === 'Point') {
        const [lng, lat] = coords as number[];
        bounds.extend([lat, lng]);
      } else if (feature.geometry.type === 'LineString') {
        (coords as number[][]).forEach(([lng, lat]) => {
          bounds.extend([lat, lng]);
        });
      } else if (feature.geometry.type === 'Polygon') {
        (coords as number[][][])[0].forEach(([lng, lat]) => {
          bounds.extend([lat, lng]);
        });
      }
    });

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [geojson, map]);

  return null;
}

export default function MapViewer({
  geojson,
  icons,
  center = [0, 0],
  zoom = 2,
  showUserLocation = true,
  basePath = '',
}: MapViewerProps) {
  const getIcon = useCallback(
    (feature: GeoJSONFeature) => {
      const styleUrl = feature.properties.styleUrl as string | undefined;
      let iconPath = iconUrl;

      if (styleUrl) {
        // Check for visited/planned icons
        if (styleUrl.includes('1501') || styleUrl.includes('C2185B')) {
          // Try embedded icon first, then basePath, then default
          const embeddedPath = `${basePath}/images/icon-1.png`.replace(/^\//, '');
          iconPath = getEmbeddedIcon(embeddedPath) || icons?.get(embeddedPath) || (basePath ? `${basePath}/images/icon-1.png` : iconUrl);
        } else if (styleUrl.includes('1502') || styleUrl.includes('558B2F')) {
          const embeddedPath = `${basePath}/images/icon-2.png`.replace(/^\//, '');
          iconPath = getEmbeddedIcon(embeddedPath) || icons?.get(embeddedPath) || (basePath ? `${basePath}/images/icon-2.png` : iconUrl);
        }
      }

      // Check icons from KMZ extraction
      if (icons && icons.size > 0) {
        for (const [filename, dataUrl] of icons) {
          if (styleUrl?.includes(filename.replace(/\.[^/.]+$/, '').split('/').pop() || '')) {
            iconPath = dataUrl;
            break;
          }
        }
      }

      return new L.Icon({
        iconUrl: iconPath,
        shadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
    },
    [icons, basePath]
  );

  const renderFeature = useCallback(
    (feature: GeoJSONFeature, index: number) => {
      const { geometry, properties } = feature;
      const key = `feature-${index}`;

      switch (geometry.type) {
        case 'Point': {
          const [lng, lat] = geometry.coordinates as number[];
          return (
            <Marker key={key} position={[lat, lng]} icon={getIcon(feature)}>
              <Popup>
                <div className="map-popup">
                  <h4>{properties.name ?? 'Unnamed'}</h4>
                  {properties.description && (
                    <div
                      className="popup-description"
                      dangerouslySetInnerHTML={{ __html: properties.description }}
                    />
                  )}
                </div>
              </Popup>
            </Marker>
          );
        }

        case 'LineString': {
          const positions = (geometry.coordinates as number[][]).map(
            ([lng, lat]) => [lat, lng] as [number, number]
          );
          return (
            <Polyline key={key} positions={positions} color="#3388ff">
              <Popup>
                <h4>{properties.name ?? 'Unnamed Line'}</h4>
              </Popup>
            </Polyline>
          );
        }

        case 'Polygon': {
          const positions = (geometry.coordinates as number[][][])[0].map(
            ([lng, lat]) => [lat, lng] as [number, number]
          );
          return (
            <Polygon key={key} positions={positions} color="#3388ff">
              <Popup>
                <h4>{properties.name ?? 'Unnamed Polygon'}</h4>
              </Popup>
            </Polygon>
          );
        }

        default:
          return null;
      }
    },
    [getIcon]
  );

  return (
    <div className="map-viewer">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showUserLocation && <UserLocationMarker />}

        {geojson && <FitBounds geojson={geojson} />}

        {geojson?.features.map((feature, index) => renderFeature(feature, index))}
      </MapContainer>
    </div>
  );
}
