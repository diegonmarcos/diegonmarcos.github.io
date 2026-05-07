// MyTrips Type Definitions

export interface Anchor {
  n: string;
  lat: number;
  lng: number;
}

export interface City {
  id: number;
  name: string;
  theme: string;
  lat: number;
  lng: number;
  year: number;
  country?: string;
  continent?: string;
}

export interface Theme {
  id: string;
  title: string;
  icon: string;
  query: string[];
  img: string;
  desc: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label?: string;
    data: number[];
    backgroundColor: string | string[];
    borderRadius?: number;
    borderWidth?: number;
  }[];
}

export type ViewType = 'dashboard' | 'atlas' | 'themes' | 'analytics' | 'timeline';

export type MapMode = 'pin' | 'country' | 'rel';

// Trip data from JSON
export interface Trip {
  continent: string;
  country: string;
  nomadRegion: string;
  state: string;
  city: string;
  dateIn: string;
  dateOut: string;
  lat: number;
  lng: number;
  language: string;
  culture: string;
  countryISO: string;
  countryFlag: string;
  countryCapital: {
    lat: number;
    lng: number;
  };
}

export interface TripWithDays extends Trip {
  days: number;
}

export interface HomeBase {
  city: string;
  country: string;
  lat: number;
  lng: number;
}

export interface TravelMetadata {
  version?: string;
  lastUpdated?: string;
  totalTrips?: number;
  totalCities?: number;
  totalCountries?: number;
  totalContinents?: number;
  totalNomadRegions?: number;
  languages?: number;
  cultures?: number;
  nomadRegions?: number;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface TravelData {
  traveler: string;
  homeBase: HomeBase;
  trips: Trip[];
  metadata: TravelMetadata;
}

// Stats aggregations
export interface CountByKey {
  [key: string]: number;
}

export interface CountryWithFlag {
  country: string;
  flag: string;
  iso: string;
}

export interface ContinentGroup {
  [continent: string]: CountryWithFlag[];
}
