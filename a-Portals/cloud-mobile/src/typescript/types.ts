export interface Tile {
  id: string;
  label: string;
  icon: string;
  target?: string | null;
}

export type PageEntry = string | { id: string; label: string; target?: string; rows?: [string, string][] };

export interface TileGroup {
  title: string;
  tiles: Tile[];
}

export interface AppRef {
  name: string;
  icon: string;
  category?: string;
  pinned?: boolean;
  real?: boolean;
}

export interface AppFolder {
  label: string;
  apps: AppRef[];
}

export interface AppGroup {
  title: string;
  apps: AppRef[];
  folders?: AppFolder[];
}

export interface StackCard {
  kind: string;
  title: string;
  subtitle?: string;
  target?: string;
  rows?: [string, string][];
}

export interface SectionMode {
  type: 'tiles' | 'stack';
  tiles?: Tile[];
  cards?: StackCard[];
}

export interface Section {
  label: string;
  icon: string;
  color: string;
  tiles?: Tile[];
  pages?: PageEntry[];
  // Communication / Infos / Tools (TabbedSectionFragment):
  apps?: SectionMode;
  admin?: SectionMode;
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

export interface LongPressItem {
  id: string;
  label: string;
  icon: string;
  target: string | null;
}

export interface SearchConfig {
  placeholder: string;
  scopes: { id: string; label: string }[];
}

export interface NotificationCenterConfig {
  emptyTitle: string;
  emptyBody: string;
}

export interface UpdateOverlayConfig {
  title: string;
  states: Record<string, string>;
}

// shell.json's own shape (before sections are merged in by data.ts).
export interface ShellData {
  app: PortalApp;
  bottomNav: string[];
  cube: { glow: string; line: string; dot: string };
  stars: StarsConfig;
  longPress: Record<string, LongPressItem[]>;
  search: SearchConfig;
  notificationCenter: NotificationCenterConfig;
  updateOverlay: UpdateOverlayConfig;
}

export interface MockAppsData {
  apps: AppRef[];
  folders: { category: string; label: string; apps: { name: string; icon: string }[] }[];
}

export interface PortalData extends ShellData {
  sections: Record<string, Section>;
}
