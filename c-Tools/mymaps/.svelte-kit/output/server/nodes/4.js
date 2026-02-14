

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export const universal = {
  "trailingSlash": "always",
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/settings/+page.ts";
export const imports = ["_app/immutable/nodes/4.DzlM2-bQ.js","_app/immutable/chunks/BpHFVdBK.js","_app/immutable/chunks/Dyi0cJRJ.js","_app/immutable/chunks/62dkkLdj.js","_app/immutable/chunks/IR8sAqcL.js","_app/immutable/chunks/B7AKX-54.js","_app/immutable/chunks/D32J1AuY.js","_app/immutable/chunks/Bs5Te_zd.js","_app/immutable/chunks/DxTjl29k.js","_app/immutable/chunks/qKxsrdYH.js","_app/immutable/chunks/DXl8p3-Q.js"];
export const stylesheets = [];
export const fonts = [];
