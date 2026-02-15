

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false,
  "trailingSlash": "always"
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CELELTs3.js","_app/immutable/chunks/nFcBeTHs.js","_app/immutable/chunks/Du0EjBT8.js","_app/immutable/chunks/poDlVxfP.js","_app/immutable/chunks/D3pXm4t4.js","_app/immutable/chunks/D_llxttu.js","_app/immutable/chunks/DJVcTiIM.js","_app/immutable/chunks/3gf1Qcw4.js","_app/immutable/chunks/BhKYKdMs.js","_app/immutable/chunks/DH1vMWid.js","_app/immutable/chunks/ecDIlGAw.js","_app/immutable/chunks/CP4-xudJ.js","_app/immutable/chunks/D_d1iZD_.js"];
export const stylesheets = ["_app/immutable/assets/Icon.DskQ8yDc.css","_app/immutable/assets/0.DkE73B3v.css"];
export const fonts = [];
