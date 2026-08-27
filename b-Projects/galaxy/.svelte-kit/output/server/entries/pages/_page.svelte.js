import { e as ensure_array_like, a as escape_html, b as attr } from "../../chunks/index.js";
const planets = [
  {
    id: "gaia",
    name: "Gaia",
    tagline: "The first world",
    url: "/galaxy-gaia/",
    status: "live"
  },
  {
    id: "x1",
    name: "X-1",
    tagline: "The experimental world",
    url: "/galaxy-x1/",
    status: "live"
  },
  {
    id: "earth",
    name: "Earth",
    tagline: "Real terrain · Google-Earth meets GTA",
    url: "/galaxy-earth/",
    status: "live"
  }
];
function _page($$renderer) {
  $$renderer.push(`<main class="svelte-1uha8ag"><header class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">Galaxy</h1> <p class="subtitle svelte-1uha8ag">A constellation of worlds</p></header> <div class="grid svelte-1uha8ag"><!--[-->`);
  const each_array = ensure_array_like(planets);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let planet = each_array[$$index];
    if (planet.status === "soon") {
      $$renderer.push("<!--[0-->");
      $$renderer.push(`<div class="card disabled svelte-1uha8ag"><div class="card-head svelte-1uha8ag"><h2 class="svelte-1uha8ag">${escape_html(planet.name)}</h2> <span class="badge soon svelte-1uha8ag">soon</span></div> <p class="svelte-1uha8ag">${escape_html(planet.tagline)}</p></div>`);
    } else {
      $$renderer.push("<!--[-1-->");
      $$renderer.push(`<a class="card svelte-1uha8ag"${attr("href", planet.url)}><div class="card-head svelte-1uha8ag"><h2 class="svelte-1uha8ag">${escape_html(planet.name)}</h2> <span class="badge live svelte-1uha8ag">live</span></div> <p class="svelte-1uha8ag">${escape_html(planet.tagline)}</p></a>`);
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></div></main>`);
}
export {
  _page as default
};
