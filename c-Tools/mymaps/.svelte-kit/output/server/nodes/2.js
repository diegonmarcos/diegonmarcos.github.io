

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "trailingSlash": "always",
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B65tiQyb.js","_app/immutable/chunks/DTA30TDk.js","_app/immutable/chunks/BSqcXsmM.js","_app/immutable/chunks/QGu8DR6T.js","_app/immutable/chunks/01WRiMFs.js","_app/immutable/chunks/NWNhCqId.js","_app/immutable/chunks/B69dQJDB.js","_app/immutable/chunks/DetevbZ9.js","_app/immutable/chunks/BPuc1GeG.js","_app/immutable/chunks/UQwkWiHW.js","_app/immutable/chunks/D1Gr2jRS.js","_app/immutable/chunks/D7RmcINs.js","_app/immutable/chunks/BC8NpnQe.js","_app/immutable/chunks/hNxkNSV9.js","_app/immutable/chunks/Bu4WnnC5.js"];
export const stylesheets = [];
export const fonts = [];
