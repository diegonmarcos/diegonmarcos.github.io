'use client';

import { useEffect, useRef } from 'react';
import { MapData, SPHERE_COLORS } from '@/data/types';

interface MapViewerProps {
  mapData: MapData;
}

declare global {
  interface Window {
    Highcharts: any;
  }
}

export default function MapViewer({ mapData }: MapViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      try {
        // Load Highcharts if not already loaded
        if (!window.Highcharts) {
          await loadScript('https://code.highcharts.com/maps/highmaps.js');
          await loadScript('https://code.highcharts.com/maps/modules/exporting.js');
        }

        // Load the specific map
        const mapUrl = `https://code.highcharts.com/mapdata/${mapData.config.mapPath}.js`;
        await loadScript(mapUrl);

        scriptLoadedRef.current = true;

        // Get map key
        const mapKey = Object.keys(window.Highcharts.maps)[0];
        if (!mapKey || !containerRef.current) return;

        // Prepare data
        const chartData = mapData.countries.map(c => ({
          code: c.code,
          name: c.name,
          role: c.role,
          color: c.color || SPHERE_COLORS[c.sphere],
        }));

        // Render map
        window.Highcharts.mapChart(containerRef.current, {
          chart: {
            map: window.Highcharts.maps[mapKey],
            backgroundColor: '#121212',
          },
          title: { text: '' },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom',
              theme: {
                fill: '#333',
                stroke: '#444',
                style: { color: '#fff' },
              },
            },
          },
          legend: { enabled: false },
          credits: { enabled: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            borderColor: '#666',
            style: { color: '#fff' },
            formatter: function(this: any) {
              if (this.point.role) {
                return `<b>${this.point.name}</b><br><span style="color:${this.point.color}">${this.point.role}</span>`;
              }
              return `<b>${this.point.name}</b><br>Neutral`;
            },
          },
          series: [{
            data: chartData,
            joinBy: [mapData.config.joinBy, 'code'],
            name: 'Strategic',
            nullColor: '#2C2C2C',
            borderColor: '#444',
            borderWidth: 0.5,
            states: {
              hover: { color: '#fff', borderColor: '#fff' },
            },
          }],
        });
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    initMap();
  }, [mapData]);

  return (
    <div
      ref={containerRef}
      style={{
        height: 'calc(100vh - 200px)',
        minHeight: '400px',
        margin: '20px',
        border: '1px solid #333',
        borderRadius: '8px',
      }}
    />
  );
}
