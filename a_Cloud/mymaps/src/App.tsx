import { useState, useEffect, useCallback } from 'react';
import Home from './components/Home';
import MapViewer from './components/MapViewer';
import Sidebar from './components/Sidebar';
import Legend from './components/Legend';
import { getAllMaps, loadPredefinedMap, extractCategories, createCustomMapConfig } from './utils/mapLoader';
import { parseFile } from './utils/parsers';
import type { MapConfig, GeoJSONFeatureCollection } from './types';

interface MapState {
  config: MapConfig | null;
  geojson: GeoJSONFeatureCollection | null;
  icons: Map<string, string>;
  loading: boolean;
  error: string | null;
}

export default function App() {
  const maps = getAllMaps();
  const [showHome, setShowHome] = useState(true);
  const [selectedMapId, setSelectedMapId] = useState<string | null>(null);
  const [customMaps, setCustomMaps] = useState<MapConfig[]>([]);

  const [state, setState] = useState<MapState>({
    config: null,
    geojson: null,
    icons: new Map(),
    loading: false,
    error: null,
  });

  // Load selected map
  useEffect(() => {
    if (!selectedMapId) return;

    // Find map in predefined or custom maps
    const allMaps = [...maps, ...customMaps];
    const config = allMaps.find(m => m.id === selectedMapId);

    if (!config) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Map not found',
      }));
      return;
    }

    // If it's a custom map with already loaded geojson, skip loading
    if (config.id.startsWith('custom-') && state.config?.id === config.id && state.geojson) {
      return;
    }

    setState(prev => ({ ...prev, config, loading: true, error: null }));

    loadPredefinedMap(config)
      .then(({ geojson, icons }) => {
        setState(prev => ({
          ...prev,
          geojson,
          icons,
          loading: false,
        }));
      })
      .catch(err => {
        setState(prev => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to load map',
        }));
      });
  }, [selectedMapId, maps, customMaps]);

  const handleMapSelect = useCallback((id: string) => {
    setSelectedMapId(id);
    setShowHome(false);
  }, []);

  const handleHomeClick = useCallback(() => {
    setShowHome(true);
    setSelectedMapId(null);
  }, []);

  const handleFileUpload = useCallback(async (file: File) => {
    try {
      const result = await parseFile(file);
      const config = createCustomMapConfig(file.name);

      setCustomMaps(prev => [...prev, config]);
      setSelectedMapId(config.id);

      setState({
        config,
        geojson: result.geojson,
        icons: result.icons,
        loading: false,
        error: null,
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: err instanceof Error ? err.message : 'Failed to parse file',
      }));
    }
  }, []);

  const { config, geojson, icons, loading, error } = state;

  // Build legend items
  const legendItems = geojson
    ? Array.from(extractCategories(geojson)).map(([label, count]) => ({
        label,
        color:
          label === 'Visited'
            ? '#C2185B'
            : label === 'Planned'
              ? '#558B2F'
              : '#1976D2',
        count,
        icon:
          config?.filePath && label === 'Visited'
            ? `${config.filePath.replace(/[^/]+$/, '')}images/icon-1.png`
            : config?.filePath && label === 'Planned'
              ? `${config.filePath.replace(/[^/]+$/, '')}images/icon-2.png`
              : undefined,
      }))
    : [];

  const basePath = config?.filePath?.replace(/[^/]+$/, '').replace(/\/$/, '') || '';

  const handleExplore = useCallback(() => {
    setShowHome(false);
    if (maps.length > 0) {
      setSelectedMapId(maps[0].id);
    }
  }, [maps]);

  return (
    <div className="app">
      <Sidebar
        maps={[...maps, ...customMaps]}
        selectedId={selectedMapId}
        onSelect={handleMapSelect}
        onFileUpload={handleFileUpload}
        onHomeClick={handleHomeClick}
        showHome={showHome}
      />

      <main className="main-content">
        {showHome && <Home onExplore={handleExplore} />}

        {!showHome && loading && (
          <div className="loading-overlay">
            <div className="spinner" />
            <p>Loading map...</p>
          </div>
        )}

        {!showHome && error && (
          <div className="error-overlay">
            <p>{error}</p>
          </div>
        )}

        {!showHome && !loading && !error && config && (
          <>
            <div className="map-info">
              <h1>{config.name}</h1>
              <p>{config.description}</p>
              {geojson && (
                <span className="feature-count">
                  {geojson.features.length} locations
                </span>
              )}
            </div>

            <div className="map-container">
              <MapViewer
                geojson={geojson}
                icons={icons}
                center={config.center}
                zoom={config.zoom}
                showUserLocation={true}
                basePath={basePath}
              />

              {legendItems.length > 0 && (
                <Legend items={legendItems} title="Categories" />
              )}
            </div>
          </>
        )}

        {!showHome && !loading && !error && !config && (
          <div className="empty-state">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <p>Select a map from the sidebar or upload a file</p>
          </div>
        )}
      </main>
    </div>
  );
}
