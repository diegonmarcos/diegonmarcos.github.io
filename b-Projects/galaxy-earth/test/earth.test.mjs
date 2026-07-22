import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const map = JSON.parse(
  readFileSync(path.join(__dirname, '../src/lib/data/map.json'), 'utf-8')
);

if (!Array.isArray(map.center) || map.center.length !== 2) {
  throw new Error('map.json center must be a 2-number array');
}
if (typeof map.center[0] !== 'number' || typeof map.center[1] !== 'number') {
  throw new Error('map.json center entries must be numbers');
}
if (typeof map.zoom !== 'number') {
  throw new Error('map.json zoom must be a number');
}
if (!map.terrain || !Array.isArray(map.terrain.tiles) || map.terrain.tiles.length === 0) {
  throw new Error('map.json terrain.tiles must be a non-empty array');
}
if (map.terrain.encoding !== 'terrarium') {
  throw new Error(`map.json terrain.encoding must be "terrarium", got: ${map.terrain.encoding}`);
}

console.log('OK');
