import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';
import fs from 'fs';

// Plugin to embed map files as a virtual module
function embedMapsPlugin(): Plugin {
  const virtualModuleId = 'virtual:embedded-maps';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'embed-maps',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const mapsDir = path.resolve(__dirname, 'public/maps');
        const embeddedMaps: Record<string, string> = {};

        const processDir = (dir: string, prefix: string = '') => {
          if (!fs.existsSync(dir)) return;

          const entries = fs.readdirSync(dir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

            if (entry.isDirectory()) {
              processDir(fullPath, relativePath);
            } else if (entry.name.match(/\.(kml|kmz|json|geojson|csv|png|jpg|jpeg|gif)$/i)) {
              const content = fs.readFileSync(fullPath);
              const base64 = content.toString('base64');
              const mimeTypes: Record<string, string> = {
                '.kml': 'application/vnd.google-earth.kml+xml',
                '.kmz': 'application/vnd.google-earth.kmz',
                '.json': 'application/json',
                '.geojson': 'application/geo+json',
                '.csv': 'text/csv',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
              };
              const ext = path.extname(entry.name).toLowerCase();
              const mime = mimeTypes[ext] || 'application/octet-stream';
              embeddedMaps[`maps/${relativePath}`] = `data:${mime};base64,${base64}`;
            }
          }
        };

        processDir(mapsDir);
        console.log(`[embed-maps] Embedded ${Object.keys(embeddedMaps).length} files`);

        return `export const EMBEDDED_MAPS = ${JSON.stringify(embeddedMaps)};`;
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), embedMapsPlugin(), viteSingleFile()],
  base: './',
  root: 'src',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
  },
});
