import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const planets = JSON.parse(
  readFileSync(path.join(__dirname, '../src/lib/data/planets.json'), 'utf-8')
);

if (!Array.isArray(planets) || planets.length === 0) {
  throw new Error('planets.json must be a non-empty array');
}

for (const planet of planets) {
  if (!planet.id || !planet.name || !planet.url) {
    throw new Error(`planet entry missing id/name/url: ${JSON.stringify(planet)}`);
  }
}

console.log('OK');
