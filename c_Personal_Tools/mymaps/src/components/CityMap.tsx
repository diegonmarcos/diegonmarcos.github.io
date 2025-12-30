import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as toGeoJSON from '@mapbox/togeojson';

// Fix for Leaflet default marker icons
const iconRetinaUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png';
const iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';
const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

function LocationMarker() {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  const map = useMap();
  const initializedRef = useRef(false);

  useEffect(() => {
    map.locate({ watch: true, enableHighAccuracy: true });

    const onLocationFound = (e: L.LocationEvent) => {
      setPosition(e.latlng);
      if (!initializedRef.current) {
        map.flyTo(e.latlng, 13); // Zoom level 13 for city view
        initializedRef.current = true;
      }
    };

    const onLocationError = (e: L.ErrorEvent) => {
      console.error("Location access denied or failed:", e.message);
    };

    map.on("locationfound", onLocationFound);
    map.on("locationerror", onLocationError);

    return () => {
      map.off("locationfound", onLocationFound);
      map.off("locationerror", onLocationError);
      map.stopLocate();
    };
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const BASE_PATH = 'city_map';

export default function CityMap() {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  useEffect(() => {
    fetch(`${BASE_PATH}/doc.kml`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch KML: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(text, 'text/xml');
        const geojson = toGeoJSON.kml(kml);
        setGeoJsonData(geojson);
      })
      .catch((error) => {
        console.error('Error loading KML:', error);
      });
  }, []);

  // Custom Icons defined inside component to access BASE_PATH if it were dynamic, 
  // but here it is static. defining them here for clarity.
  const visitedIcon = new L.Icon({
    iconUrl: `${BASE_PATH}/images/icon-1.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const plannedIcon = new L.Icon({
    iconUrl: `${BASE_PATH}/images/icon-2.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const getIcon = (styleUrl: string) => {
    if (styleUrl && styleUrl.includes('icon-1501')) {
      return visitedIcon; // Gone / Visited
    }
    if (styleUrl && styleUrl.includes('icon-1502')) {
      return plannedIcon; // Planned
    }
    return new L.Icon.Default();
  };

  return (
    <div className="city-map-container">
      <MapContainer
        center={[0, 0]} // Default center
        zoom={2}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <LocationMarker />

        {geoJsonData && (
          geoJsonData.features.map((feature: any, index: number) => {
            if (feature.geometry.type === 'Point') {
               const [lng, lat] = feature.geometry.coordinates;
               const icon = getIcon(feature.properties.styleUrl);
               
               return (
                 <Marker key={index} position={[lat, lng]} icon={icon}>
                   <Popup>
                     <h3>{feature.properties.name}</h3>
                     <div dangerouslySetInnerHTML={{ __html: feature.properties.description || '' }} />
                   </Popup>
                 </Marker>
               );
            }
            return null;
          })
        )}
      </MapContainer>
      
      {/* Legend Overlay */}
      <div className="city-map-legend">
        <h4>Legend</h4>
        <div className="legend-item">
          <img src={`${BASE_PATH}/images/icon-1.png`} alt="Visited" />
          <span>Visited (Gone)</span>
        </div>
        <div className="legend-item">
          <img src={`${BASE_PATH}/images/icon-2.png`} alt="Planned" />
          <span>Planned</span>
        </div>
      </div>
    </div>
  );
}
