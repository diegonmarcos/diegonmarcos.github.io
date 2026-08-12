export interface Tile {
  id: string;
  label: string;
  icon: string;
  target?: string | null;
}

export type PageEntry = string | { id: string; label: string; target?: string };

export interface TileGroup {
  title: string;
  tiles: Tile[];
}

export interface AppFolder {
  label: string;
  apps: string[];
}

export interface AppGroup {
  title: string;
  apps: string[];
  folders?: AppFolder[];
}

export interface Section {
  label: string;
  icon: string;
  color: string;
  aggregator?: boolean;
  tiles?: Tile[];
  pages?: PageEntry[];
  // Suite only:
  tabs?: string[];
  cloud?: { footer?: Tile; tileGroups: TileGroup[] };
  phone?: { footer?: Tile; appGroups: AppGroup[] };
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

export interface RadialNode {
  id: string;
  label: string;
  icon?: string;
  target?: string;
  children?: RadialNode[];
}

export interface StarsConfig {
  sirius: { nodes: RadialNode[] };
  canopus: { fixedSection: string };
  centauri: { recentApps: string[] };
}

export interface PortalData {
  app: PortalApp;
  bottomNav: string[];
  sections: Record<string, Section>;
  stars: StarsConfig;
}
