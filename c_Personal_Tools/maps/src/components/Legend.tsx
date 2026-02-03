'use client';

import { SPHERE_COLORS, SPHERE_LABELS, Sphere } from '@/data/types';

const sphereOrder: Sphere[] = [
  'RED_CORE',
  'RED_ALLY',
  'RED_TIE',
  'RED_WEAK',
  'BLUE_CORE',
  'BLUE_ALLY',
  'BLUE_SURR',
  'NEUTRAL_STRONG',
  'NEUTRAL_WEAK',
];

export default function Legend() {
  return (
    <div className="legend">
      <h3 className="legend__title">Color Legend</h3>
      <div className="legend__grid">
        {sphereOrder.map((sphere) => (
          <div key={sphere} className="legend__item">
            <div
              className="legend__dot"
              style={{ background: SPHERE_COLORS[sphere] }}
            />
            {SPHERE_LABELS[sphere]}
          </div>
        ))}
      </div>
    </div>
  );
}
