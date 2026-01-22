import type { City } from '@/types/mytrips';
import { ANCHORS } from '@/data/anchors';
import { THEMES } from '@/data/themes';

export function initData(): City[] {
  const DB: City[] = [];
  let idCounter = 1;

  THEMES.forEach(t => {
    t.query.forEach(name => {
      if (!DB.find(c => c.name === name)) {
        let anchor = ANCHORS.find(a => a.n === name);
        let lat, lng;
        if (anchor) {
          lat = anchor.lat;
          lng = anchor.lng;
        } else {
          const randAnchor = ANCHORS[Math.floor(Math.random() * ANCHORS.length)];
          lat = randAnchor.lat + (Math.random() * 10 - 5);
          lng = randAnchor.lng + (Math.random() * 10 - 5);
        }
        DB.push({
          id: idCounter++,
          name,
          theme: t.id,
          lat: lat,
          lng: lng,
          year: 2014 + Math.floor(Math.random() * 10)
        });
      }
    });
  });

  while (DB.length < 170) {
    const randAnchor = ANCHORS[Math.floor(Math.random() * ANCHORS.length)];
    const jLat = randAnchor.lat + (Math.random() * 4 - 2);
    const jLng = randAnchor.lng + (Math.random() * 4 - 2);
    DB.push({
      id: idCounter++,
      name: `Expedition ${idCounter}`,
      theme: 'gen',
      lat: jLat,
      lng: jLng,
      year: 2014 + Math.floor(Math.random() * 10)
    });
  }

  return DB;
}

export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // km
  const d2r = (d: number) => d * (Math.PI / 180);
  const dLat = d2r(lat2 - lat1);
  const dLon = d2r(lng2 - lng1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(d2r(lat1)) * Math.cos(d2r(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
