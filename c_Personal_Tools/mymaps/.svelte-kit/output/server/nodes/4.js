

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/settings/+page.ts";
export const imports = ["_app/immutable/nodes/4.DEpG4ttC.js","_app/immutable/chunks/BsUTZ2wg.js","_app/immutable/chunks/CsEt7wkl.js","_app/immutable/chunks/BjKvEPQy.js","_app/immutable/chunks/gAqsdKty.js","_app/immutable/chunks/DSfmRzg0.js","_app/immutable/chunks/BO_sHbwD.js","_app/immutable/chunks/DHWuI-b2.js","_app/immutable/chunks/_6QPOWym.js","_app/immutable/chunks/BJw-Rg5f.js","_app/immutable/chunks/CdXDmEGE.js"];
export const stylesheets = [];
export const fonts = [];
