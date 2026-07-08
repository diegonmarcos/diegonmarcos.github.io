// Master index renderer. Data comes from index.json.js -> globalThis.PORTAL_DATA.index
// (repo rule: no fetch() for JSON). Links point at each project's folder relative
// to the repo root (the static server serves the repo root).
(() => {
  const data = globalThis.PORTAL_DATA && globalThis.PORTAL_DATA.index;
  const root = document.getElementById('index');
  if (!data) { root.textContent = 'No index data — run ./index.sh'; return; }

  document.getElementById('subtitle').textContent =
    `${data.meta.project_count} projects across ${data.categories.length} categories.`;

  for (const cat of data.categories) {
    const section = document.createElement('section');
    section.className = 'category';
    const h2 = document.createElement('h2');
    h2.textContent = cat.category;
    section.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'grid';
    for (const p of cat.projects) {
      const a = document.createElement('a');
      a.className = 'card';
      a.href = `../${p.path}/`;              // served from repo root
      a.dataset.search = `${p.name} ${p.slug} ${p.category} ${p.framework}`.toLowerCase();
      a.innerHTML =
        `<span class="name"></span><span class="meta"></span>`;
      a.querySelector('.name').textContent = p.name;
      a.querySelector('.meta').textContent = `${p.framework} · :${p.port}`;
      grid.appendChild(a);
    }
    section.appendChild(grid);
    root.appendChild(section);
  }

  // client-side filter
  const filter = document.getElementById('filter');
  filter.addEventListener('input', () => {
    const q = filter.value.trim().toLowerCase();
    for (const card of root.querySelectorAll('.card'))
      card.hidden = q && !card.dataset.search.includes(q);
    for (const sec of root.querySelectorAll('.category'))
      sec.hidden = ![...sec.querySelectorAll('.card')].some(c => !c.hidden);
  });
})();
