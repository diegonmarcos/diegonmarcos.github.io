

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.BopmOxBD.js","_app/immutable/chunks/CZqZxQ13.js","_app/immutable/chunks/asKwNPUx.js","_app/immutable/chunks/C-UB_xPj.js","_app/immutable/chunks/Dl1iZ6KQ.js","_app/immutable/chunks/tH1fzSQy.js","_app/immutable/chunks/D4-L1inA.js","_app/immutable/chunks/nxaZ-_5b.js","_app/immutable/chunks/CuBdEQPs.js","_app/immutable/chunks/Dno6Q1ME.js","_app/immutable/chunks/BZCT7ppd.js","_app/immutable/chunks/CD155amu.js","_app/immutable/chunks/CBtpgbRF.js","_app/immutable/chunks/DhYG5ZPg.js","_app/immutable/chunks/WvyJtVsR.js"];
export const stylesheets = [];
export const fonts = [];
