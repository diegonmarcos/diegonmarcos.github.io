// Composable for travel data management
import { ref, computed } from 'vue';
import type { TravelData, Trip, TripWithDays, CountByKey, ContinentGroup } from '@/types/mytrips';
import { travelData as embeddedData } from '@/data/travel-data';

const travelData = ref<TravelData | null>(null);
const isLoading = ref(false);
const error = ref<string | null>(null);

export function useTravelData() {
  // Load embedded travel data (no fetch needed - avoids CORS)
  async function loadData(): Promise<void> {
    if (travelData.value) return;
    travelData.value = embeddedData as TravelData;
  }

  // Calculate days between dates
  function calcDays(dateIn: string, dateOut: string): number {
    const d1 = new Date(dateIn);
    const d2 = new Date(dateOut);
    return Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  }

  // Computed: All trips
  const trips = computed(() => travelData.value?.trips || []);

  // Computed: Trips with calculated days
  const tripsWithDays = computed<TripWithDays[]>(() => {
    return trips.value
      .map(t => ({ ...t, days: calcDays(t.dateIn, t.dateOut) }))
      .sort((a, b) => b.days - a.days);
  });

  // Computed: Unique counts
  const uniqueCities = computed(() => new Set(trips.value.map(t => t.city)).size);
  const uniqueCountries = computed(() => new Set(trips.value.map(t => t.country)).size);
  const uniqueContinents = computed(() => new Set(trips.value.map(t => t.continent)).size);
  const uniqueLanguages = computed(() => new Set(trips.value.map(t => t.language)).size);
  const uniqueCultures = computed(() => new Set(trips.value.map(t => t.culture)).size);
  const uniqueNomadRegions = computed(() => new Set(trips.value.map(t => t.nomadRegion)).size);

  // Computed: Total days
  const totalDays = computed(() =>
    trips.value.reduce((sum, t) => sum + calcDays(t.dateIn, t.dateOut), 0)
  );

  // Computed: Longest trip
  const longestTrip = computed(() => {
    return trips.value.reduce((max, t) => {
      const days = calcDays(t.dateIn, t.dateOut);
      return days > max.days ? { days, city: t.city, country: t.country } : max;
    }, { days: 0, city: '', country: '' });
  });

  // Computed: Long stay categories
  const longStays = computed(() => ({
    over6m: tripsWithDays.value.filter(t => t.days > 180),
    m1to6: tripsWithDays.value.filter(t => t.days >= 30 && t.days <= 180),
    w2to1m: tripsWithDays.value.filter(t => t.days >= 14 && t.days < 30)
  }));

  // Helper: Count by key
  function countByKey(key: keyof Trip): CountByKey {
    const result: CountByKey = {};
    trips.value.forEach(t => {
      const val = String(t[key]);
      result[val] = (result[val] || 0) + 1;
    });
    return result;
  }

  // Computed: Count aggregations
  const countByCountry = computed(() => countByKey('country'));
  const countByContinent = computed(() => countByKey('continent'));
  const countByLanguage = computed(() => countByKey('language'));
  const countByCulture = computed(() => countByKey('culture'));
  const countByNomadRegion = computed(() => countByKey('nomadRegion'));

  // Computed: Sorted aggregations
  const topCountries = computed(() =>
    Object.entries(countByCountry.value).sort((a, b) => b[1] - a[1])
  );
  const topLanguages = computed(() =>
    Object.entries(countByLanguage.value).sort((a, b) => b[1] - a[1])
  );
  const topCultures = computed(() =>
    Object.entries(countByCulture.value).sort((a, b) => b[1] - a[1])
  );
  const sortedNomadRegions = computed(() =>
    Object.entries(countByNomadRegion.value).sort((a, b) => b[1] - a[1])
  );

  // Computed: Flag lookup
  const flagLookup = computed(() => {
    const lookup: Record<string, string> = {};
    trips.value.forEach(t => {
      if (t.countryFlag) lookup[t.country] = t.countryFlag;
    });
    return lookup;
  });

  // Computed: Countries by continent (for flag display)
  const countriesByContinent = computed<ContinentGroup>(() => {
    const result: ContinentGroup = {};
    const seenCountries = new Set<string>();

    trips.value.forEach(t => {
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

    Object.keys(result).forEach(continent => {
      result[continent].sort((a, b) => a.country.localeCompare(b.country));
    });

    return result;
  });

  // Computed: Metadata
  const metadata = computed(() => travelData.value?.metadata);
  const traveler = computed(() => travelData.value?.traveler);
  const homeBase = computed(() => travelData.value?.homeBase);

  return {
    // State
    travelData,
    isLoading,
    error,

    // Methods
    loadData,
    calcDays,

    // Computed - Raw data
    trips,
    tripsWithDays,
    metadata,
    traveler,
    homeBase,

    // Computed - Unique counts
    uniqueCities,
    uniqueCountries,
    uniqueContinents,
    uniqueLanguages,
    uniqueCultures,
    uniqueNomadRegions,

    // Computed - Aggregations
    totalDays,
    longestTrip,
    longStays,

    // Computed - Count maps
    countByCountry,
    countByContinent,
    countByLanguage,
    countByCulture,
    countByNomadRegion,

    // Computed - Sorted lists
    topCountries,
    topLanguages,
    topCultures,
    sortedNomadRegions,

    // Computed - Lookups
    flagLookup,
    countriesByContinent
  };
}
