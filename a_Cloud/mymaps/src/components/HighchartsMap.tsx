import { useEffect, useRef, useState } from 'react';
import type { MapConfig, CountryData } from '../types';
import { SPHERE_COLORS, SPHERE_LABELS } from '../types';

interface HighchartsMapProps {
  config: MapConfig;
}

declare global {
  interface Window {
    Highcharts: {
      mapChart: (container: HTMLElement, options: unknown) => unknown;
      maps: Record<string, unknown>;
    };
  }
}

export default function HighchartsMap({ config }: HighchartsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chartRef = useRef<unknown>(null);

  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load Highcharts if not already loaded
        if (!window.Highcharts) {
          await loadScript('https://code.highcharts.com/maps/highmaps.js');
          await loadScript('https://code.highcharts.com/maps/modules/exporting.js');
        }

        // Load the specific map data
        if (config.mapPath) {
          const mapUrl = `https://code.highcharts.com/mapdata/${config.mapPath}.js`;
          await loadScript(mapUrl);
        }

        if (!containerRef.current) return;

        // Get map key
        const mapKeys = Object.keys(window.Highcharts.maps || {});
        const mapKey = mapKeys.find(k => k.includes(config.mapPath?.split('/').pop() || '')) || mapKeys[0];

        if (!mapKey) {
          throw new Error('Map data not found');
        }

        // Prepare data
        const chartData = (config.countries || []).map(c => ({
          code: c.code,
          name: c.name,
          role: c.role,
          color: c.color || SPHERE_COLORS[c.sphere],
          sphere: c.sphere,
        }));

        // Render map
        chartRef.current = window.Highcharts.mapChart(containerRef.current, {
          chart: {
            map: window.Highcharts.maps[mapKey],
            backgroundColor: '#0d1117',
          },
          title: { text: '' },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom',
              align: 'right',
              theme: {
                fill: 'rgba(30, 30, 40, 0.8)',
                stroke: 'rgba(255, 255, 255, 0.2)',
                style: { color: '#fff' },
                states: {
                  hover: { fill: 'rgba(50, 50, 60, 0.9)' },
                  select: { fill: 'rgba(50, 50, 60, 0.9)' },
                },
              },
            },
          },
          legend: { enabled: false },
          credits: { enabled: false },
          tooltip: {
            backgroundColor: 'rgba(20, 20, 30, 0.95)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 8,
            style: { color: '#fff', fontSize: '13px' },
            useHTML: true,
            formatter: function (this: { point: { name: string; role?: string; color?: string; sphere?: string } }) {
              const sphereLabel = this.point.sphere ? SPHERE_LABELS[this.point.sphere as keyof typeof SPHERE_LABELS] : '';
              if (this.point.role) {
                return `
                  <div style="padding: 4px;">
                    <strong style="font-size: 14px;">${this.point.name}</strong><br/>
                    <span style="color: ${this.point.color}; font-weight: 500;">${this.point.role}</span><br/>
                    <span style="color: rgba(255,255,255,0.6); font-size: 11px;">${sphereLabel}</span>
                  </div>
                `;
              }
              return `<strong>${this.point.name}</strong><br/><span style="color: rgba(255,255,255,0.5);">Neutral / No Data</span>`;
            },
          },
          series: [
            {
              data: chartData,
              joinBy: ['hc-key', 'code'],
              name: 'Geopolitical',
              nullColor: '#161b22',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 0.5,
              states: {
                hover: {
                  color: '#ffffff',
                  borderColor: '#ffffff',
                  borderWidth: 1,
                },
              },
            },
          ],
        });

        setLoading(false);
      } catch (err) {
        console.error('Error loading Highcharts map:', err);
        setError(err instanceof Error ? err.message : 'Failed to load map');
        setLoading(false);
      }
    };

    initMap();

    return () => {
      // Cleanup chart on unmount
      if (chartRef.current && typeof (chartRef.current as { destroy?: () => void }).destroy === 'function') {
        (chartRef.current as { destroy: () => void }).destroy();
      }
    };
  }, [config]);

  return (
    <div className="highcharts-map-container">
      {loading && (
        <div className="map-loading">
          <div className="spinner" />
          <p>Loading map...</p>
        </div>
      )}

      {error && (
        <div className="map-error">
          <p>{error}</p>
          <p className="hint">Make sure you have internet connection to load map data.</p>
        </div>
      )}

      <div
        ref={containerRef}
        className="highcharts-container"
        style={{ opacity: loading ? 0 : 1 }}
      />

      {/* Sphere Legend */}
      {!loading && !error && (
        <div className="sphere-legend">
          <h4>Spheres of Influence</h4>
          <div className="legend-grid">
            <div className="legend-section">
              <h5 style={{ color: SPHERE_COLORS.RED_CORE }}>Red Sphere</h5>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.RED_CORE }} />
                <span>Core (Aggressor)</span>
              </div>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.RED_ALLY }} />
                <span>Ally</span>
              </div>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.RED_TIE }} />
                <span>Economic Tie</span>
              </div>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.RED_WEAK }} />
                <span>Weak Influence</span>
              </div>
            </div>

            <div className="legend-section">
              <h5 style={{ color: SPHERE_COLORS.BLUE_CORE }}>Blue Sphere (NATO)</h5>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.BLUE_CORE }} />
                <span>Core (NATO)</span>
              </div>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.BLUE_ALLY }} />
                <span>Ally / Partner</span>
              </div>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.BLUE_SURR }} />
                <span>Surrounded</span>
              </div>
            </div>

            <div className="legend-section">
              <h5 style={{ color: SPHERE_COLORS.NEUTRAL_STRONG }}>Neutral</h5>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.NEUTRAL_STRONG }} />
                <span>Strong Neutral</span>
              </div>
              <div className="legend-item">
                <span className="color-dot" style={{ background: SPHERE_COLORS.NEUTRAL_WEAK }} />
                <span>No Data</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
