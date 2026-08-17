export interface Tile {
  id: string;
  label: string;
  icon: string;
  target?: string | null;
}

export interface ItemRef {
  title: string;
  subtitle?: string;
  meta?: string;
}

export interface ConstellationApp {
  id: string;
  label: string;
  pkg: string;
  image: string;
  status: 'installed' | 'update' | 'missing' | 'blocked' | 'error';
  version?: string;
  versionCode?: string;
  sha?: string;
  remoteDigest?: string;
  message?: string;
}

export interface ConstellationData {
  autoUpdate: boolean;
  installPermGranted: boolean;
  apps: ConstellationApp[];
}

export type PageEntry = string | { id: string; label: string; target?: string; rows?: [string, string][]; items?: ItemRef[]; constellation?: ConstellationData };

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
  // Simulated Android metadata — deterministic mock values, no live device API.
  package?: string;
  installSource?: 'play' | 'fdroid' | 'uptodown' | 'direct';
  firstInstallDaysAgo?: number;
  lastUsedHoursAgo?: number;
  opens7d?: number;
  batteryPct7d?: number;
  usageMin7d?: number;
  // Topical folder membership — references PhoneFolder.id.
  folderId?: string;
}

export interface AppFolder {
  label: string;
  apps: AppRef[];
}

export interface PhoneFolder {
  id: string;
  label: string;
  order: number;
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

export interface NotificationItem {
  title: string;
  subtitle?: string;
}

export interface NotificationGroup {
  title: string;
  items: NotificationItem[];
}

export interface NotificationCenterConfig {
  emptyTitle: string;
  emptyBody: string;
  groups?: NotificationGroup[];
}

export interface FooterApk {
  label: string;
  sub: string;
  url: string;
}

export interface FooterConstellationApp {
  id: string;
  label: string;
  url: string;
}

export interface FooterConfig {
  apk: FooterApk;
  constellation: FooterConstellationApp[];
}

export interface UpdateOverlayConfig {
  title: string;
  states: Record<string, string>;
}

export interface StatusBarConfig {
  left: { label: string; active: boolean }[];
  right: { label: string; value: string }[];
}

// shell.json's own shape (before sections are merged in by data.ts).
export interface ShellData {
  app: PortalApp;
  bottomNav: string[];
  cube: { glow: string; line: string; dot: string };
  stars: StarsConfig;
  longPress: Record<string, LongPressItem[]>;
  notificationCenter: NotificationCenterConfig;
  updateOverlay: UpdateOverlayConfig;
  statusBar: StatusBarConfig;
  footer: FooterConfig;
}

export interface MockAppsData {
  apps: AppRef[];
  phoneFolders: PhoneFolder[];
}

// Suite > Browser > Linktree page data — see src/data/linktree.json.
export interface LinktreeTile {
  label: string;
  icon: string;
  href?: string;
}

export interface LinktreeGroup {
  id: string;
  label: string;
  tiles: LinktreeTile[];
}

export interface LinktreeData {
  groups: LinktreeGroup[];
}

export interface PortalData extends ShellData {
  sections: Record<string, Section>;
}
