

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B9Qu8RkP.js","_app/immutable/chunks/BsUTZ2wg.js","_app/immutable/chunks/CsEt7wkl.js","_app/immutable/chunks/BjKvEPQy.js","_app/immutable/chunks/BhAN65R9.js","_app/immutable/chunks/BJw-Rg5f.js","_app/immutable/chunks/_6QPOWym.js","_app/immutable/chunks/DHWuI-b2.js","_app/immutable/chunks/CdXDmEGE.js","_app/immutable/chunks/BOumO7PS.js","_app/immutable/chunks/wMiDVtCj.js","_app/immutable/chunks/DSfmRzg0.js","_app/immutable/chunks/BO_sHbwD.js","_app/immutable/chunks/BQ5vValz.js","_app/immutable/chunks/gAqsdKty.js"];
export const stylesheets = [];
export const fonts = [];
