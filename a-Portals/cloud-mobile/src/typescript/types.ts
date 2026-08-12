export interface Tile {
  id: string;
  label: string;
  icon: string;
  target?: string;
}

export interface Section {
  label: string;
  icon: string;
  color: string;
  aggregator?: boolean;
  tiles?: Tile[];
  pages?: string[];
}

export interface PortalUser {
  name: string;
  email: string;
  initials: string;
  mode: string;
}

export interface PortalApp {
  name: string;
  build: string;
  user: PortalUser;
}

export interface PortalData {
  app: PortalApp;
  bottomNav: string[];
  sections: Record<string, Section>;
}
