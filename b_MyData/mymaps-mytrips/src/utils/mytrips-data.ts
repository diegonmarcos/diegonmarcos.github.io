import type { City } from '@/types/mytrips';
import { travelData } from '@/data/travel-data';
import { THEMES } from '@/data/themes';

/**
 * Convert real travel data to City[] format for backward compatibility
 * with theme-based filtering and map display
 */
export function initData(): City[] {
  const DB: City[] = [];
  const seenCities = new Set<string>();

  travelData.trips.forEach((trip, index) => {
    const cityKey = `${trip.city}_${trip.country}`;

    // Deduplicate by city+country (keep first occurrence)
    if (seenCities.has(cityKey)) return;
    seenCities.add(cityKey);

    // Determine theme based on THEMES query lists
    let theme = 'gen';
    for (const t of THEMES) {
      if (t.query.includes(trip.city)) {
        theme = t.id;
        break;
      }
    }

    // Extract year from dateIn
    const year = parseInt(trip.dateIn.split('-')[0], 10);

    DB.push({
      id: index + 1,
      name: trip.city,
      theme,
      lat: trip.lat,
      lng: trip.lng,
      year,
      country: trip.country,
      continent: trip.continent
    });
  });

  return DB;
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * @returns Distance in kilometers
 */
export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Earth's radius in km
  const d2r = (d: number) => d * (Math.PI / 180);
  const dLat = d2r(lat2 - lat1);
  const dLon = d2r(lng2 - lng1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(d2r(lat1)) * Math.cos(d2r(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
