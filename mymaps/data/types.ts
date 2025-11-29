// ===========================================
// TYPE DEFINITIONS
// ===========================================

export type Sphere =
  | 'RED_CORE'
  | 'RED_ALLY'
  | 'RED_TIE'
  | 'RED_WEAK'
  | 'BLUE_CORE'
  | 'BLUE_ALLY'
  | 'BLUE_SURR'
  | 'NEUTRAL_STRONG'
  | 'NEUTRAL_WEAK';

export interface CountryData {
  code: string;
  name: string;
  role: string;
  sphere: Sphere;
  color?: string;
}

export interface MapConfig {
  id: string;
  title: string;
  description: string;
  mapPath: string;
  joinBy: 'hc-key' | 'iso-a2' | 'iso-a3' | 'name';
  icon: string;
  type: string;
}

export interface MapData {
  config: MapConfig;
  countries: CountryData[];
}

export const SPHERE_COLORS: Record<Sphere, string> = {
  RED_CORE: '#8B0000',
  RED_ALLY: '#CD5C5C',
  RED_TIE: '#FF8C00',
  RED_WEAK: '#F0E68C',
  BLUE_CORE: '#00008B',
  BLUE_ALLY: '#87CEEB',
  BLUE_SURR: '#90EE90',
  NEUTRAL_STRONG: '#4F4F4F',
  NEUTRAL_WEAK: '#2C2C2C',
};

export const SPHERE_LABELS: Record<Sphere, string> = {
  RED_CORE: 'Red Core (Aggressor)',
  RED_ALLY: 'Red Ally',
  RED_TIE: 'Red Tie (Economic)',
  RED_WEAK: 'Red Weak',
  BLUE_CORE: 'Blue Core (NATO)',
  BLUE_ALLY: 'Blue Ally',
  BLUE_SURR: 'Blue Surrounded',
  NEUTRAL_STRONG: 'Neutral Strong',
  NEUTRAL_WEAK: 'Neutral',
};
