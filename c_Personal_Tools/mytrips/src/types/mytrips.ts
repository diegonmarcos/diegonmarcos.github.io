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

export type ViewType = 'dashboard' | 'atlas' | 'themes' | 'analytics';

export type MapMode = 'pin' | 'country' | 'rel';
