export interface TrackerApp {
  id: string;
  name: string;
  icon: string;
  url: string;
  description: string;
  stat?: string;
}

export interface TrackerCategory {
  id: string;
  label: string;
  apps: TrackerApp[];
}

export interface PortalData {
  _description?: string;
  title: string;
  categories: TrackerCategory[];
}
