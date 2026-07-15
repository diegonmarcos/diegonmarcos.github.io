// Typed access to the data-driven asset catalog (src/lib/data/assets.json).
// Single source of truth for both the 3D scene and the marketplace listing.
import catalog from '$lib/data/assets.json';
import { base } from '$app/paths';

export interface ModelAsset {
  id: string; name: string; category: string; animated: boolean;
  mesh: string; license: string; author: string; source: string; tags: string[];
}
export interface TextureSetAsset {
  id: string; name: string; category: string; license: string; author: string;
  source: string; tags: string[]; textures: Record<string, string>; missing?: string[];
}

const models = catalog.models as ModelAsset[];
const textureSets = catalog.textureSets as TextureSetAsset[];

/** Resolve a catalog path through SvelteKit's base (GitHub Pages subpath safe). */
export const assetUrl = (p: string) => `${base}/${p.replace(/^\/+/, '')}`;

export const allModels = () => models;
export const allTextureSets = () => textureSets;
export const modelById = (id: string): ModelAsset | undefined => models.find((m) => m.id === id);
export const textureSetById = (id: string): TextureSetAsset | undefined => textureSets.find((t) => t.id === id);

/** Absolute (base-resolved) mesh URL for a catalog model id. */
export function meshUrl(id: string): string {
  const m = modelById(id);
  if (!m) throw new Error(`asset catalog: unknown model '${id}'`);
  return assetUrl(m.mesh);
}
