// ===========================================
// MAP DATA
// ===========================================

import { MapData, CountryData, Sphere, SPHERE_COLORS } from './types';

// Country data with geopolitical classifications
const globalCountries: CountryData[] = [
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

  // NATO SPHERE - ALLIES
  { code: 'ua', name: 'Ukraine', role: 'THE TANK HIGHWAY / FRONTLINE', sphere: 'BLUE_ALLY' },
  { code: 'jp', name: 'Japan', role: 'Eastern Containment', sphere: 'BLUE_ALLY' },
  { code: 'kr', name: 'South Korea', role: 'Artillery Production', sphere: 'BLUE_ALLY' },
  { code: 'au', name: 'Australia', role: 'Pacific Depth', sphere: 'BLUE_ALLY' },
  { code: 'il', name: 'Israel', role: 'Tech / Intel Partner', sphere: 'BLUE_ALLY' },
  { code: 'tw', name: 'Taiwan', role: 'Semiconductor Shield', sphere: 'BLUE_ALLY' },

  // NATO SPHERE - SURROUNDED
  { code: 'ch', name: 'Switzerland', role: 'Surrounded', sphere: 'BLUE_SURR' },
  { code: 'at', name: 'Austria', role: 'Surrounded', sphere: 'BLUE_SURR' },
  { code: 'ie', name: 'Ireland', role: 'Surrounded', sphere: 'BLUE_SURR' },

  // NEUTRALS - STRONG
  { code: 'cn', name: 'China', role: 'SILENT SUPERPOWER', sphere: 'NEUTRAL_STRONG' },
  { code: 'in', name: 'India', role: 'Strategic Autonomy', sphere: 'NEUTRAL_STRONG' },
  { code: 'br', name: 'Brazil', role: 'BRICS Leader', sphere: 'NEUTRAL_STRONG' },
  { code: 'sa', name: 'Saudi Arabia', role: 'Energy Swing State', sphere: 'NEUTRAL_STRONG' },
  { code: 'za', name: 'South Africa', role: 'BRICS', sphere: 'NEUTRAL_STRONG' },
  { code: 'mx', name: 'Mexico', role: 'Economic Partner / Political Neutral', sphere: 'NEUTRAL_STRONG' },
  { code: 'id', name: 'Indonesia', role: 'Regional Power', sphere: 'NEUTRAL_STRONG' },
];

// Add colors to country data
function enrichCountryData(countries: CountryData[]): CountryData[] {
  return countries.map(country => ({
    ...country,
    color: SPHERE_COLORS[country.sphere],
  }));
}

// Available maps
export const MAPS: MapData[] = [
  {
    config: {
      id: 'global-strategic',
      title: 'Global Strategic View',
      description: 'World map showing geopolitical alignments and spheres of influence.',
      mapPath: 'custom/world',
      joinBy: 'hc-key',
      icon: '🌍',
      type: 'World',
    },
    countries: enrichCountryData(globalCountries),
  },
  {
    config: {
      id: 'europe-focus',
      title: 'European Theater',
      description: 'Focus on European NATO members and Russian influence.',
      mapPath: 'custom/europe',
      joinBy: 'hc-key',
      icon: '🇪🇺',
      type: 'Europe',
    },
    countries: enrichCountryData(globalCountries),
  },
];

export function getMapById(id: string): MapData | undefined {
  return MAPS.find(map => map.config.id === id);
}

export function getAllMaps(): MapData[] {
  return MAPS;
}
