// Cultural Regions Type Definitions

export interface Subgroup {
  name: string;
  countries: string[];
}

export interface Group {
  name: string;
  subgroups: Subgroup[];
}

export interface RegionConfig {
  region: string;
  groups: Group[];
}

export interface CountryData {
  region: string;
  group: string;
  groupId: string;
  subgroup: string;
  color: string;
}

export interface HierarchyRegion {
  name: string;
  groups: HierarchyGroup[];
  baseColor: string;
  element: string;
}

export interface HierarchyGroup {
  name: string;
  id: string;
  color: string;
  subgroups: SubgroupDisplay[];
  countryCount: number;
}

export interface SubgroupDisplay {
  name: string;
  flags: string;
  count: number;
}
