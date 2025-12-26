import { useEffect, useRef } from 'react';

interface HomeProps {
  onExplore: () => void;
}

export default function Home({ onExplore }: HomeProps) {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add floating animation to markers
    const markers = globeRef.current?.querySelectorAll('.globe-marker');
    markers?.forEach((marker, i) => {
      (marker as HTMLElement).style.animationDelay = `${i * 0.5}s`;
    });
  }, []);

  return (
    <div className="home-page">
      <div className="home-content">
        <div className="globe-container" ref={globeRef}>
          {/* 3D Globe */}
          <div className="globe">
            <div className="globe-sphere">
              <div className="globe-grid" />
              <div className="globe-continents" />
              <div className="globe-glow" />
            </div>

            {/* Floating markers */}
            <div className="globe-marker marker-1">
              <span className="marker-dot" />
              <span className="marker-pulse" />
            </div>
            <div className="globe-marker marker-2">
              <span className="marker-dot" />
              <span className="marker-pulse" />
            </div>
            <div className="globe-marker marker-3">
              <span className="marker-dot" />
              <span className="marker-pulse" />
            </div>
            <div className="globe-marker marker-4">
              <span className="marker-dot" />
              <span className="marker-pulse" />
            </div>

            {/* Orbit rings */}
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="orbit orbit-3" />
          </div>
        </div>

        <div className="home-text">
          <h1>MyMaps</h1>
          <p className="tagline">Explore your world, one marker at a time</p>
          <p className="description">
            Visualize KML, KMZ, CSV and GeoJSON files.
            Track places you've visited, plan your next adventure.
          </p>

          <button className="explore-btn" onClick={onExplore}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            Explore Maps
          </button>
        </div>
      </div>

      <div className="home-features">
        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>
          <h3>Import Files</h3>
          <p>KML, KMZ, CSV, GeoJSON</p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <h3>Interactive Maps</h3>
          <p>Pan, zoom, explore</p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3>Your Location</h3>
          <p>See where you are</p>
        </div>
      </div>
    </div>
  );
}
