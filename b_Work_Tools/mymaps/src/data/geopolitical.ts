import type { CountryData, Sphere } from '../types';
import { SPHERE_COLORS } from '../types';

// Country data with geopolitical classifications
const globalCountries: Omit<CountryData, 'color'>[] = [
  // RUSSIA SPHERE - CORE
  { code: 'ru', name: 'Russia', role: 'AGGRESSOR CORE / HEARTLAND', sphere: 'RED_CORE' },
  { code: 'by', name: 'Belarus', role: 'Union State / Staging Ground', sphere: 'RED_ALLY' },
  { code: 'ir', name: 'Iran', role: 'Drone Supplier / South Corridor', sphere: 'RED_ALLY' },
  { code: 'kp', name: 'North Korea', role: 'Ammo Factory', sphere: 'RED_ALLY' },
  { code: 'sy', name: 'Syria', role: 'Mediterranean Base', sphere: 'RED_ALLY' },
  { code: 've', name: 'Venezuela', role: 'Oil Reserve / Ideological Ally', sphere: 'RED_ALLY' },
  { code: 'ni', name: 'Nicaragua', role: 'Political Support', sphere: 'RED_ALLY' },
  { code: 'cu', name: 'Cuba', role: 'Intelligence Asset', sphere: 'RED_ALLY' },

  // RUSSIA SPHERE - TIES
  { code: 'kz', name: 'Kazakhstan', role: 'Pipeline Hostage (CPC)', sphere: 'RED_TIE' },
  { code: 'hu', name: 'Hungary', role: 'NATO Member / Energy Client', sphere: 'RED_TIE' },
  { code: 'rs', name: 'Serbia', role: 'Political Ally in Europe', sphere: 'RED_TIE' },
  { code: 'uz', name: 'Uzbekistan', role: 'Economic Dependence', sphere: 'RED_TIE' },
  { code: 'az', name: 'Azerbaijan', role: 'Transport Hub (Plays both sides)', sphere: 'RED_TIE' },

  // RUSSIA SPHERE - WEAK
  { code: 'ge', name: 'Georgia', role: '20% Occupied / Under Pressure', sphere: 'RED_WEAK' },
  { code: 'kg', name: 'Kyrgyzstan', role: 'Economic Dependent', sphere: 'RED_WEAK' },
  { code: 'tj', name: 'Tajikistan', role: 'Military Base Host', sphere: 'RED_WEAK' },
  { code: 'ml', name: 'Mali', role: 'Wagner/Africa Corps Ops', sphere: 'RED_WEAK' },
  { code: 'bf', name: 'Burkina Faso', role: 'Wagner/Africa Corps Ops', sphere: 'RED_WEAK' },
  { code: 'cf', name: 'Central African Rep.', role: 'Wagner Controlled', sphere: 'RED_WEAK' },

  // NATO SPHERE - CORE
  { code: 'us', name: 'USA', role: 'NATO BACKBONE', sphere: 'BLUE_CORE' },
  { code: 'gb', name: 'United Kingdom', role: 'Nuclear Power / Intel', sphere: 'BLUE_CORE' },
  { code: 'fr', name: 'France', role: 'EU Military Leader', sphere: 'BLUE_CORE' },
  { code: 'de', name: 'Germany', role: 'Logistics Hub', sphere: 'BLUE_CORE' },
  { code: 'pl', name: 'Poland', role: 'THE SHIELD (Heavy Armor)', sphere: 'BLUE_CORE' },
  { code: 'tr', name: 'Turkey', role: 'THE GATEKEEPER (Bosporus)', sphere: 'BLUE_CORE' },
  { code: 'fi', name: 'Finland', role: 'Northern Flank', sphere: 'BLUE_CORE' },
  { code: 'se', name: 'Sweden', role: 'Baltic Control', sphere: 'BLUE_CORE' },
  { code: 'no', name: 'Norway', role: 'Arctic / Energy Supplier', sphere: 'BLUE_CORE' },
  { code: 'ro', name: 'Romania', role: 'Black Sea Hub', sphere: 'BLUE_CORE' },
  { code: 'it', name: 'Italy', role: 'NATO Core', sphere: 'BLUE_CORE' },
  { code: 'es', name: 'Spain', role: 'NATO Core', sphere: 'BLUE_CORE' },
  { code: 'ca', name: 'Canada', role: 'NATO Core', sphere: 'BLUE_CORE' },
  { code: 'ee', name: 'Estonia', role: 'Tripwire State', sphere: 'BLUE_CORE' },
  { code: 'lv', name: 'Latvia', role: 'Tripwire State', sphere: 'BLUE_CORE' },
  { code: 'lt', name: 'Lithuania', role: 'Suwalki Guardian', sphere: 'BLUE_CORE' },
  { code: 'nl', name: 'Netherlands', role: 'NATO Core', sphere: 'BLUE_CORE' },
  { code: 'be', name: 'Belgium', role: 'NATO HQ', sphere: 'BLUE_CORE' },
  { code: 'dk', name: 'Denmark', role: 'Baltic Approach', sphere: 'BLUE_CORE' },
  { code: 'pt', name: 'Portugal', role: 'Atlantic NATO', sphere: 'BLUE_CORE' },
  { code: 'cz', name: 'Czech Republic', role: 'Central Europe', sphere: 'BLUE_CORE' },
  { code: 'sk', name: 'Slovakia', role: 'Central Europe', sphere: 'BLUE_CORE' },
  { code: 'si', name: 'Slovenia', role: 'NATO Member', sphere: 'BLUE_CORE' },
  { code: 'hr', name: 'Croatia', role: 'Adriatic NATO', sphere: 'BLUE_CORE' },
  { code: 'al', name: 'Albania', role: 'NATO Member', sphere: 'BLUE_CORE' },
  { code: 'me', name: 'Montenegro', role: 'NATO Member', sphere: 'BLUE_CORE' },
  { code: 'mk', name: 'North Macedonia', role: 'NATO Member', sphere: 'BLUE_CORE' },
  { code: 'bg', name: 'Bulgaria', role: 'Black Sea NATO', sphere: 'BLUE_CORE' },
  { code: 'gr', name: 'Greece', role: 'Eastern Mediterranean', sphere: 'BLUE_CORE' },
  { code: 'is', name: 'Iceland', role: 'GIUK Gap', sphere: 'BLUE_CORE' },
  { code: 'lu', name: 'Luxembourg', role: 'NATO Member', sphere: 'BLUE_CORE' },

  // NATO SPHERE - ALLIES
  { code: 'ua', name: 'Ukraine', role: 'THE TANK HIGHWAY / FRONTLINE', sphere: 'BLUE_ALLY' },
  { code: 'jp', name: 'Japan', role: 'Eastern Containment', sphere: 'BLUE_ALLY' },
  { code: 'kr', name: 'South Korea', role: 'Artillery Production', sphere: 'BLUE_ALLY' },
  { code: 'au', name: 'Australia', role: 'Pacific Depth', sphere: 'BLUE_ALLY' },
  { code: 'il', name: 'Israel', role: 'Tech / Intel Partner', sphere: 'BLUE_ALLY' },
  { code: 'tw', name: 'Taiwan', role: 'Semiconductor Shield', sphere: 'BLUE_ALLY' },
  { code: 'nz', name: 'New Zealand', role: 'Five Eyes', sphere: 'BLUE_ALLY' },
  { code: 'ph', name: 'Philippines', role: 'Pacific Ally', sphere: 'BLUE_ALLY' },

  // NATO SPHERE - SURROUNDED
  { code: 'ch', name: 'Switzerland', role: 'Surrounded', sphere: 'BLUE_SURR' },
  { code: 'at', name: 'Austria', role: 'Surrounded', sphere: 'BLUE_SURR' },
  { code: 'ie', name: 'Ireland', role: 'Surrounded', sphere: 'BLUE_SURR' },
  { code: 'mt', name: 'Malta', role: 'Surrounded', sphere: 'BLUE_SURR' },
  { code: 'cy', name: 'Cyprus', role: 'Divided', sphere: 'BLUE_SURR' },

  // NEUTRALS - STRONG
  { code: 'cn', name: 'China', role: 'SILENT SUPERPOWER', sphere: 'NEUTRAL_STRONG' },
  { code: 'in', name: 'India', role: 'Strategic Autonomy', sphere: 'NEUTRAL_STRONG' },
  { code: 'br', name: 'Brazil', role: 'BRICS Leader', sphere: 'NEUTRAL_STRONG' },
  { code: 'sa', name: 'Saudi Arabia', role: 'Energy Swing State', sphere: 'NEUTRAL_STRONG' },
  { code: 'za', name: 'South Africa', role: 'BRICS', sphere: 'NEUTRAL_STRONG' },
  { code: 'mx', name: 'Mexico', role: 'Economic Partner / Political Neutral', sphere: 'NEUTRAL_STRONG' },
  { code: 'id', name: 'Indonesia', role: 'Regional Power', sphere: 'NEUTRAL_STRONG' },
  { code: 'ae', name: 'UAE', role: 'Financial Hub', sphere: 'NEUTRAL_STRONG' },
  { code: 'eg', name: 'Egypt', role: 'Suez Controller', sphere: 'NEUTRAL_STRONG' },
  { code: 'pk', name: 'Pakistan', role: 'Nuclear Power', sphere: 'NEUTRAL_STRONG' },
  { code: 'th', name: 'Thailand', role: 'ASEAN Power', sphere: 'NEUTRAL_STRONG' },
  { code: 'vn', name: 'Vietnam', role: 'Rising Economy', sphere: 'NEUTRAL_STRONG' },
  { code: 'sg', name: 'Singapore', role: 'Trade Hub', sphere: 'NEUTRAL_STRONG' },
  { code: 'my', name: 'Malaysia', role: 'ASEAN Member', sphere: 'NEUTRAL_STRONG' },
  { code: 'ar', name: 'Argentina', role: 'BRICS Aspirant', sphere: 'NEUTRAL_STRONG' },
  { code: 'cl', name: 'Chile', role: 'Pacific Alliance', sphere: 'NEUTRAL_STRONG' },
  { code: 'co', name: 'Colombia', role: 'US Ally', sphere: 'NEUTRAL_STRONG' },
  { code: 'ng', name: 'Nigeria', role: 'African Giant', sphere: 'NEUTRAL_STRONG' },
  { code: 'et', name: 'Ethiopia', role: 'African Power', sphere: 'NEUTRAL_STRONG' },
  { code: 'ke', name: 'Kenya', role: 'East Africa Hub', sphere: 'NEUTRAL_STRONG' },
];

// Add colors to country data
function enrichCountryData(countries: Omit<CountryData, 'color'>[]): CountryData[] {
  return countries.map(country => ({
    ...country,
    color: SPHERE_COLORS[country.sphere],
  }));
}

export const GEOPOLITICAL_COUNTRIES = enrichCountryData(globalCountries);

// Get countries grouped by sphere for legend
export function getCountriesBySphere(): Map<Sphere, CountryData[]> {
  const grouped = new Map<Sphere, CountryData[]>();

  for (const country of GEOPOLITICAL_COUNTRIES) {
    const existing = grouped.get(country.sphere) || [];
    grouped.set(country.sphere, [...existing, country]);
  }

  return grouped;
}
