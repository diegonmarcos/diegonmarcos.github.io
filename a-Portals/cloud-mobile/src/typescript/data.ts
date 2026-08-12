import type { PortalData } from './types';

export function getData(): PortalData {
  const bag = (globalThis as unknown as { PORTAL_DATA?: Record<string, PortalData> }).PORTAL_DATA;
  const data = bag?.['cloud-mobile'];
  if (!data) throw new Error('cloud-mobile portal data not loaded');
  return data;
}
