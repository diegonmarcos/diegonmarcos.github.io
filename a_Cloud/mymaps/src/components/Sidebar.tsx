import { useCallback, useRef, useState } from 'react';
import type { MapConfig } from '../types';
import { detectFileType } from '../utils/parsers';

interface SidebarProps {
  maps: MapConfig[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onFileUpload: (file: File) => void;
  onHomeClick: () => void;
  showHome: boolean;
}

const TYPE_ICONS: Record<string, JSX.Element> = {
  kml: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  kmz: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  csv: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),
  geojson: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
};

export default function Sidebar({ maps, selectedId, onSelect, onFileUpload, onHomeClick, showHome }: SidebarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && detectFileType(file.name)) {
        onFileUpload(file);
      }
      e.target.value = '';
    },
    [onFileUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file && detectFileType(file.name)) {
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const predefinedMaps = maps.filter(m => !m.id.startsWith('custom-'));
  const customMaps = maps.filter(m => m.id.startsWith('custom-'));

  return (
    <aside
      className={`sidebar ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="sidebar-header">
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span>MyMaps</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <button
          className={`home-link ${showHome ? 'active' : ''}`}
          onClick={onHomeClick}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span>Home</span>
        </button>

        <div className="nav-section">
          <h3>My Maps</h3>
          <ul className="map-list">
            {predefinedMaps.map(map => (
              <li key={map.id}>
                <button
                  className={`map-item ${selectedId === map.id ? 'active' : ''}`}
                  onClick={() => onSelect(map.id)}
                >
                  <span className="map-icon">
                    {TYPE_ICONS[map.type] || TYPE_ICONS.kml}
                  </span>
                  <span className="map-name">{map.name}</span>
                  <span className="map-type">{map.type.toUpperCase()}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {customMaps.length > 0 && (
          <div className="nav-section">
            <h3>Uploaded</h3>
            <ul className="map-list">
              {customMaps.map(map => (
                <li key={map.id}>
                  <button
                    className={`map-item ${selectedId === map.id ? 'active' : ''}`}
                    onClick={() => onSelect(map.id)}
                  >
                    <span className="map-icon">
                      {TYPE_ICONS[map.type] || TYPE_ICONS.kml}
                    </span>
                    <span className="map-name">{map.name}</span>
                    <span className="map-type">{map.type.toUpperCase()}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="sidebar-footer">
        <input
          ref={fileInputRef}
          type="file"
          accept=".kml,.kmz,.csv,.json,.geojson"
          onChange={handleFileChange}
          hidden
        />
        <button
          className="upload-btn"
          onClick={() => fileInputRef.current?.click()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span>Upload Map</span>
        </button>
        <p className="upload-hint">
          Drop files here or click to browse
          <br />
          <small>KML, KMZ, CSV, GeoJSON</small>
        </p>
      </div>

      {isDragging && (
        <div className="drop-overlay">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span>Drop to upload</span>
        </div>
      )}
    </aside>
  );
}
