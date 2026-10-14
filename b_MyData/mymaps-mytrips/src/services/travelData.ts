// Travel Data Service - Fetches and processes travel data from JSON
import type { TravelData, Trip, TripWithDays, CountByKey, ContinentGroup } from '@/types/mytrips';

let travelDataCache: TravelData | null = null;

export async function loadTravelData(): Promise<TravelData | null> {
  if (travelDataCache) return travelDataCache;

  try {
    const res = await fetch('./travel-data.json');
    travelDataCache = await res.json();
    return travelDataCache;
  } catch (e) {
    console.error('Failed to load travel data:', e);
    return null;
  }
}

export function calcDays(dateIn: string, dateOut: string): number {
  const d1 = new Date(dateIn);
  const d2 = new Date(dateOut);
  return Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

export function enrichTripsWithDays(trips: Trip[]): TripWithDays[] {
  return trips.map(t => ({
    ...t,
    days: calcDays(t.dateIn, t.dateOut)
  })).sort((a, b) => b.days - a.days);
}

// Long Stay Categories
export function getLongStays(trips: Trip[]): {
  over6m: TripWithDays[];
  m1to6: TripWithDays[];
  w2to1m: TripWithDays[];
} {
  const enriched = enrichTripsWithDays(trips);
  return {
    over6m: enriched.filter(t => t.days > 180),
    m1to6: enriched.filter(t => t.days >= 30 && t.days <= 180),
    w2to1m: enriched.filter(t => t.days >= 14 && t.days < 30)
  };
}

// Count aggregations
export function countBy<T>(items: T[], key: keyof T): CountByKey {
  const result: CountByKey = {};
  items.forEach(item => {
    const val = String(item[key]);
    result[val] = (result[val] || 0) + 1;
  });
  return result;
}

export function countByCountry(trips: Trip[]): CountByKey {
  return countBy(trips, 'country');
}

export function countByContinent(trips: Trip[]): CountByKey {
  return countBy(trips, 'continent');
}

export function countByLanguage(trips: Trip[]): CountByKey {
  return countBy(trips, 'language');
}

export function countByCulture(trips: Trip[]): CountByKey {
  return countBy(trips, 'culture');
}

export function countByNomadRegion(trips: Trip[]): CountByKey {
  return countBy(trips, 'nomadRegion');
}

// Get unique values
export function getUniqueCities(trips: Trip[]): number {
  return new Set(trips.map(t => t.city)).size;
}

export function getUniqueCountries(trips: Trip[]): number {
  return new Set(trips.map(t => t.country)).size;
}

export function getUniqueContinents(trips: Trip[]): number {
  return new Set(trips.map(t => t.continent)).size;
}

// Flags by region
export function getCountriesByContinent(trips: Trip[]): ContinentGroup {
  const result: ContinentGroup = {};
  const seenCountries = new Set<string>();

  trips.forEach(t => {
    if (!seenCountries.has(t.country)) {
      seenCountries.add(t.country);
      if (!result[t.continent]) result[t.continent] = [];
      result[t.continent].push({
        country: t.country,
        flag: t.countryFlag || '🏳️',
        iso: t.countryISO || 'XX'
      });
    }
  });

  // Sort countries within each continent
  Object.keys(result).forEach(continent => {
    result[continent].sort((a, b) => a.country.localeCompare(b.country));
  });

  return result;
}

// Total days calculation
export function getTotalDays(trips: Trip[]): number {
  return trips.reduce((sum, t) => sum + calcDays(t.dateIn, t.dateOut), 0);
}

// Longest trip
export function getLongestTrip(trips: Trip[]): { days: number; city: string } {
  return trips.reduce((max, t) => {
    const days = calcDays(t.dateIn, t.dateOut);
    return days > max.days ? { days, city: t.city } : max;
  }, { days: 0, city: '' });
}

// Sort entries by count
export function sortByCount(counts: CountByKey): [string, number][] {
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

// Build flag lookup from trips
export function buildFlagLookup(trips: Trip[]): Record<string, string> {
  const lookup: Record<string, string> = {};
  trips.forEach(t => {
    if (t.countryFlag) lookup[t.country] = t.countryFlag;
  });
  return lookup;
}
