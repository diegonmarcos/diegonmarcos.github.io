import type { PortalData, Section, ShellData, MockAppsData } from './types';

interface SectionsFile {
  sections: Record<string, Section>;
}

// data_wrap keys each companion by its source filename (no extension) —
// shell.json -> "shell", sections-core.json -> "sections-core", etc. Merged
// here into one PortalData shape so the rest of the client code (drawer.ts,
// stars.ts) doesn't need to know the data is split across 4 files on disk,
// mirroring how generate-pages.mjs merges the same files at build time.
let cached: PortalData | null = null;

export function getData(): PortalData {
  if (cached) return cached;

  const bag = (globalThis as unknown as { PORTAL_DATA?: Record<string, unknown> }).PORTAL_DATA;
  const shell = bag?.['shell'] as ShellData | undefined;
  const core = bag?.['sections-core'] as SectionsFile | undefined;
  const contentFile = bag?.['sections-content'] as SectionsFile | undefined;
  if (!shell || !core || !contentFile) throw new Error('cloud-mobile portal data not loaded');

  cached = {
    ...shell,
    sections: {
      ...core.sections,
      ...contentFile.sections,
      home: { label: 'Home', icon: 'home', color: 'blue' },
    },
  };
  return cached;
}

export function getMockApps(): MockAppsData {
  const bag = (globalThis as unknown as { PORTAL_DATA?: Record<string, unknown> }).PORTAL_DATA;
  const mock = bag?.['mock-apps'] as MockAppsData | undefined;
  if (!mock) throw new Error('mock-apps portal data not loaded');
  return mock;
}
