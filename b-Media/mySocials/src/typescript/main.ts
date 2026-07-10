// ─── MOCK DATA ──────────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  '#e8508a', '#4a8aff', '#3abb78', '#8a6aff', '#ff8a4a',
  '#4ac0ff', '#ff4a8a', '#50c878', '#ffa040', '#8080ff',
  '#ff6060', '#40c0c0', '#c060ff', '#ff9060', '#60b0ff',
];

interface Friend {
  name: string;
  initial: string;
  color: string;
}

interface Scrap {
  author: string;
  initial: string;
  color: string;
  text: string;
  time: string;
}

interface Community {
  name: string;
  members: number;
  emoji: string;
  color: string;
}

interface Testimonial {
  author: string;
  date: string;
  text: string;
}

const FRIENDS: Friend[] = [
  { name: 'Ana Silva', initial: 'A', color: AVATAR_COLORS[0] },
  { name: 'Bruno Costa', initial: 'B', color: AVATAR_COLORS[1] },
  { name: 'Carla Souza', initial: 'C', color: AVATAR_COLORS[2] },
  { name: 'Daniel Lima', initial: 'D', color: AVATAR_COLORS[3] },
  { name: 'Elena Torres', initial: 'E', color: AVATAR_COLORS[4] },
  { name: 'Felipe Gomes', initial: 'F', color: AVATAR_COLORS[5] },
  { name: 'Gabi Santos', initial: 'G', color: AVATAR_COLORS[6] },
  { name: 'Hugo Pereira', initial: 'H', color: AVATAR_COLORS[7] },
  { name: 'Isa Oliveira', initial: 'I', color: AVATAR_COLORS[8] },
];

const SCRAPS: Scrap[] = [
  { author: 'Ana Silva', initial: 'A', color: AVATAR_COLORS[0], text: 'Hey Diego! Miss our coding sessions at the uni. We should catch up soon! Saudades demais!', time: '2 hours ago' },
  { author: 'Bruno Costa', initial: 'B', color: AVATAR_COLORS[1], text: 'Cara, vi que voce ta morando em Berlin agora! Que top! Vamos marcar uma call?', time: '5 hours ago' },
  { author: 'Carla Souza', initial: 'C', color: AVATAR_COLORS[2], text: 'Happy birthday atrasado!! Hope you had an amazing day. Your projects are looking incredible btw', time: 'yesterday' },
  { author: 'Felipe Gomes', initial: 'F', color: AVATAR_COLORS[5], text: 'Mano, teu MyMaps ta INSANO. Lembra quando a gente fazia mapa no paint? kkkk Evoluimos!', time: '2 days ago' },
  { author: 'Gabi Santos', initial: 'G', color: AVATAR_COLORS[6], text: 'Diego!! Join our community "Linux Users Brazil" please! We need more devs like you there', time: '3 days ago' },
  { author: 'Hugo Pereira', initial: 'H', color: AVATAR_COLORS[7], text: 'Saw your Strava activities... beast mode! When did you start cycling?', time: '4 days ago' },
  { author: 'Isa Oliveira', initial: 'I', color: AVATAR_COLORS[8], text: 'Testimonial request sent! You were the best partner for the compiler project, forever grateful', time: '1 week ago' },
];

const COMMUNITIES: Community[] = [
  { name: 'Eu odeio acordar cedo', members: 1247893, emoji: '\u{1F634}', color: '#8a6aff' },
  { name: 'NixOS Brasil', members: 3420, emoji: '\u2744\uFE0F', color: '#4a8aff' },
  { name: 'Linux Users', members: 89340, emoji: '\u{1F427}', color: '#3abb78' },
  { name: 'Cycling Addicts', members: 45200, emoji: '\u{1F6B4}', color: '#ff8a4a' },
  { name: 'Self-hosted Everything', members: 12800, emoji: '\u{1F5A5}\uFE0F', color: '#4ac0ff' },
  { name: 'Saudades do Orkut', members: 892340, emoji: '\u{1F62D}', color: '#e8508a' },
  { name: 'Maps & Geography', members: 23100, emoji: '\u{1F30D}', color: '#50c878' },
  { name: 'Berlin Brasileiros', members: 8900, emoji: '\u{1F1E7}\u{1F1F7}', color: '#ffa040' },
  { name: 'Coffee > Sleep', members: 456000, emoji: '\u2615', color: '#c08040' },
];

const TESTIMONIALS: Testimonial[] = [
  { author: 'Ana Silva', date: 'Dec 2023', text: 'Diego is one of those rare people who can debug your code AND your life. An incredible friend, always there when you need help. 10/10 would add as friend again.' },
  { author: 'Bruno Costa', date: 'Nov 2023', text: 'Known Diego since university. The guy literally automated everything in his life with NixOS. Respect the dedication. Best engineer I know, no cap.' },
  { author: 'Carla Souza', date: 'Oct 2023', text: 'The most creative developer I have ever worked with. His projects are not just functional, they are beautiful. An artist disguised as an engineer.' },
  { author: 'Elena Torres', date: 'Sep 2023', text: 'Diego helped me set up my entire self-hosted infrastructure. Refused to let me use any cloud subscription. A true freedom fighter of the internet!' },
];

const PHOTO_COLORS = [
  '#1a2840', '#2a1840', '#182838', '#281828', '#1a3028',
  '#302818', '#201838', '#283018', '#381828',
];

// ─── RENDER FUNCTIONS ───────────────────────────────────────────────────────

function renderFriends(): void {
  const grid = document.getElementById('friends-grid');
  if (!grid) return;

  FRIENDS.forEach(f => {
    const cell = document.createElement('div');
    cell.className = 'friend-cell';
    cell.innerHTML = `
      <div class="friend-cell__avatar">
        <div class="friend-cell__avatar-inner" style="background:${f.color}">${f.initial}</div>
      </div>
      <span class="friend-cell__name">${f.name.split(' ')[0]}</span>
    `;
    grid.appendChild(cell);
  });
}

function renderScraps(): void {
  const list = document.getElementById('scraps-list');
  if (!list) return;

  SCRAPS.forEach(s => {
    const scrap = document.createElement('div');
    scrap.className = 'scrap';
    scrap.innerHTML = `
      <div class="scrap__avatar">
        <div class="scrap__avatar-inner" style="background:${s.color}">${s.initial}</div>
      </div>
      <div class="scrap__body">
        <div class="scrap__header">
          <span class="scrap__author">${s.author}</span>
          <span class="scrap__time">${s.time}</span>
        </div>
        <p class="scrap__text">${s.text}</p>
      </div>
    `;
    list.appendChild(scrap);
  });
}

function renderCommunities(): void {
  const grid = document.getElementById('communities-grid');
  if (!grid) return;

  COMMUNITIES.forEach(c => {
    const card = document.createElement('a');
    card.href = '#';
    card.className = 'community-card';
    const membersStr = c.members >= 1000000
      ? `${(c.members / 1000000).toFixed(1)}M members`
      : c.members >= 1000
        ? `${(c.members / 1000).toFixed(0)}K members`
        : `${c.members} members`;
    card.innerHTML = `
      <div class="community-card__icon" style="background:${c.color}20;color:${c.color}">${c.emoji}</div>
      <div class="community-card__body">
        <span class="community-card__name">${c.name}</span>
        <span class="community-card__members">${membersStr}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderTestimonials(): void {
  const list = document.getElementById('testimonials-list');
  if (!list) return;

  TESTIMONIALS.forEach(t => {
    const item = document.createElement('div');
    item.className = 'testimonial';
    item.innerHTML = `
      <div class="testimonial__header">
        <span class="testimonial__author">${t.author}</span>
        <span class="testimonial__date">${t.date}</span>
      </div>
      <p class="testimonial__text">${t.text}</p>
    `;
    list.appendChild(item);
  });
}

function renderPhotos(): void {
  const grid = document.getElementById('photo-grid');
  if (!grid) return;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'photo-cell';
    cell.innerHTML = `<div class="photo-cell__inner" style="background:${PHOTO_COLORS[i % PHOTO_COLORS.length]}"></div>`;
    grid.appendChild(cell);
  }
}

// ─── INSTAGRAM VIEW ──────────────────────────────────────────────────────────

const IG_ICON = {
  heart: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  comment: '<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  save: '<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',
};

function gradientFor(i: number): string {
  const a = PHOTO_COLORS[i % PHOTO_COLORS.length];
  const b = AVATAR_COLORS[i % AVATAR_COLORS.length];
  return `linear-gradient(135deg, ${a}, ${b})`;
}

// Real Instagram export shape (parsed by extract_ig.py -> PORTAL_DATA["instagram"]).
interface IGData {
  profile: { username: string; name: string; bio: string; following: number; followers: number; posts: number; following_shown: number; followers_shown: number };
  posts: { media: string; caption: string; time: string }[];
  following: string[];
  followers: string[];
  liked: { url: string; caption: string }[];
  saved: { url: string; caption: string }[];
  comments: { text: string; time?: string; owner?: string }[];
  liked_stories: { handle: string; name: string }[];
}

function esc(s: string): string {
  return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}
// Deterministic avatar colour from a handle.
function hashColor(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

function renderInstagram(): void {
  const view = document.getElementById('ig-view');
  if (!view) return;
  const d = (globalThis as { PORTAL_DATA?: Record<string, IGData> }).PORTAL_DATA?.instagram;
  if (!d) { view.innerHTML = '<p class="ig-empty">Instagram data not loaded.</p>'; return; }

  const p = d.profile;
  const num = (n: number) => n.toLocaleString();

  // Story highlights = your real stories (from liked_stories).
  const highlights = d.liked_stories.length
    ? d.liked_stories.map(s => `
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${hashColor(s.handle)}">${esc(s.handle.charAt(0).toUpperCase())}</div></div>
      <span class="ig-hl__name">${esc(s.name || s.handle)}</span>
    </div>`).join('')
    : '';

  // Posts pane = your real photo(s).
  const postsPane = d.posts.length
    ? d.posts.map(post => `<a class="ig-tile" href="#"><img src="${post.media}" alt="post"></a>`).join('')
    : '<p class="ig-empty">No posts yet.</p>';

  // Caption tiles for saved / liked (export has links + captions, not the images).
  const tile = (item: { url: string; caption: string }, badge: string) => `
    <a class="ig-tile" href="${esc(item.url)}" target="_blank" rel="noopener" style="background:${gradientFor(item.url.length)}">
      <span class="ig-tile__cap">${esc(item.caption || item.url.replace('https://www.instagram.com/', ''))}</span>
      <span class="ig-tile__badge">${badge}</span>
    </a>`;
  const savedPane = d.saved.length ? d.saved.map(s => tile(s, '\u{1F516}')).join('') : '<p class="ig-empty">Nothing saved.</p>';
  const likedPane = d.liked.length ? d.liked.map(s => tile(s, '❤️')).join('') : '<p class="ig-empty">No likes.</p>';

  const commentsPane = d.comments.length
    ? d.comments.map(c => `
      <div class="ig-comment">
        <div class="ig-comment__text">${esc(c.text)}</div>
        <div class="ig-comment__meta">${c.owner ? '@' + esc(c.owner) + ' · ' : ''}${esc(c.time || '')}</div>
      </div>`).join('')
    : '<p class="ig-empty">No comments.</p>';

  const grid = (html: string) => `<div class="ig-grid">${html}</div>`;
  const avatar = d.posts[0]?.media
    ? `<img class="ig-head__avatar" src="${d.posts[0].media}" alt="${esc(p.username)}">`
    : `<div class="ig-head__avatar"></div>`;

  view.innerHTML = `
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${IG_ICON.home}${IG_ICON.heart}${IG_ICON.comment}${IG_ICON.share}</div>
      </div>
    </nav>
    <div class="ig-page">
      <header class="ig-head">
        ${avatar}
        <div class="ig-head__body">
          <div class="ig-head__top">
            <span class="ig-head__user">${esc(p.username)}</span>
            <span class="ig-head__btn ig-head__btn--primary">Follow</span>
            <span class="ig-head__btn">Message</span>
          </div>
          <div class="ig-head__stats">
            <span class="ig-head__stat"><strong>${num(p.posts)}</strong> posts</span>
            <span class="ig-head__stat" data-modal="followers"><strong>${num(p.followers)}</strong> followers</span>
            <span class="ig-head__stat" data-modal="following"><strong>${num(p.following)}</strong> following</span>
          </div>
          <div class="ig-head__name">${esc(p.name)}</div>
          <div class="ig-head__bio">${esc(p.bio)}</div>
        </div>
      </header>

      ${highlights ? `<div class="ig-highlights">${highlights}</div>` : ''}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${IG_ICON.grid} Posts</div>
        <div class="ig-tab" data-pane="saved">${IG_ICON.save} Saved ${p.posts ? '' : ''}(${num(d.saved.length)})</div>
        <div class="ig-tab" data-pane="liked">${IG_ICON.heart} Liked (${num(d.liked.length)})</div>
        <div class="ig-tab" data-pane="comments">${IG_ICON.comment} Comments (${num(d.comments.length)})</div>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${grid(postsPane)}</div>
      <div class="ig-pane" data-pane="saved">${grid(savedPane)}</div>
      <div class="ig-pane" data-pane="liked">${grid(likedPane)}</div>
      <div class="ig-pane" data-pane="comments"><div class="ig-comments">${commentsPane}</div></div>
    </div>

    <div class="ig-modal" id="ig-modal">
      <div class="ig-modal__box">
        <div class="ig-modal__head">
          <small id="ig-modal-sub"></small><h3 id="ig-modal-title"></h3>
          <button id="ig-modal-close" aria-label="Close">&times;</button>
        </div>
        <div class="ig-modal__list" id="ig-modal-list"></div>
      </div>
    </div>`;

  // Tab switching.
  view.querySelectorAll<HTMLElement>('.ig-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const pane = tab.dataset.pane;
      view.querySelectorAll('.ig-tab').forEach(t => t.classList.toggle('is-active', t === tab));
      view.querySelectorAll<HTMLElement>('.ig-pane').forEach(pn => pn.classList.toggle('is-active', pn.dataset.pane === pane));
    });
  });

  // Followers / following modal.
  const modal = view.querySelector<HTMLElement>('#ig-modal')!;
  const openModal = (kind: 'followers' | 'following') => {
    const list = kind === 'followers' ? d.followers : d.following;
    const total = kind === 'followers' ? p.followers : p.following;
    (view.querySelector('#ig-modal-title') as HTMLElement).textContent = kind === 'followers' ? 'Followers' : 'Following';
    (view.querySelector('#ig-modal-sub') as HTMLElement).textContent = `showing ${num(list.length)} of ${num(total)}`;
    (view.querySelector('#ig-modal-list') as HTMLElement).innerHTML = list.map(h => `
      <div class="ig-row">
        <div class="ig-row__avatar" style="background:${hashColor(h)}">${esc(h.charAt(0).toUpperCase())}</div>
        <a class="ig-row__handle" href="https://www.instagram.com/${esc(h)}" target="_blank" rel="noopener">${esc(h)}</a>
        <span class="ig-row__follow">Follow</span>
      </div>`).join('');
    modal.classList.add('is-open');
  };
  view.querySelectorAll<HTMLElement>('.ig-head__stat[data-modal]').forEach(s =>
    s.addEventListener('click', () => openModal(s.dataset.modal as 'followers' | 'following')));
  const closeModal = () => modal.classList.remove('is-open');
  view.querySelector('#ig-modal-close')!.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
}

// ─── LINKEDIN VIEW ───────────────────────────────────────────────────────────

const LI_ICON = {
  home: '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  net: '<svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M17 11a4 4 0 1 0-3-6.6M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M17 15a4 4 0 0 1 4 4v2"/></svg>',
  jobs: '<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  msg: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  like: '<svg viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-6 0v4H5a2 2 0 0 0-2 2l1 7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2l1-7a2 2 0 0 0-2-2z"/></svg>',
  comment: '<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',
  repost: '<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
  send: '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
};

// Real LinkedIn profile (parsed by extract_li.py -> PORTAL_DATA["linkedin"]).
interface LIData {
  profile: { name: string; headline: string; location: string; followers: number; connections: string; open_to_work: string; current: string; url: string };
  experience: { title: string; company: string; dates: string; location?: string }[];
  education: { school: string; degree: string; dates: string }[];
  skills: string[];
}

function initials(name: string): string {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w.charAt(0).toUpperCase()).join('');
}

function renderLinkedin(): void {
  const view = document.getElementById('li-view');
  if (!view) return;
  const d = (globalThis as { PORTAL_DATA?: Record<string, LIData> }).PORTAL_DATA?.linkedin;
  if (!d) { view.innerHTML = '<p class="li-empty">LinkedIn data not loaded.</p>'; return; }
  const p = d.profile;

  const navItem = (icon: string, label: string) => `<div class="li-nav__item">${icon}<span>${label}</span></div>`;

  const section = (title: string, body: string) =>
    `<section class="li-card li-section"><h2 class="li-section__title">${title}</h2>${body}</section>`;
  const needExport = '<p class="li-need">Not in the saved profile page — add from your LinkedIn data export (Settings → Get a copy of your data).</p>';

  const expBody = d.experience.length
    ? d.experience.map(e => `
      <div class="li-item">
        <div class="li-item__logo">${esc(e.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${esc(e.title)}</div>
          <div class="li-item__sub">${esc(e.company)}</div>
          <div class="li-item__meta">${esc(e.dates)}${e.location ? ' · ' + esc(e.location) : ''}</div>
        </div>
      </div>`).join('')
    : needExport;

  const eduBody = d.education.length
    ? d.education.map(e => `
      <div class="li-item">
        <div class="li-item__logo">${esc(e.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${esc(e.school)}</div>
          <div class="li-item__sub">${esc(e.degree)}</div>
          <div class="li-item__meta">${esc(e.dates)}</div>
        </div>
      </div>`).join('')
    : needExport;

  const skillsBody = d.skills.length
    ? `<div class="li-skills">${d.skills.map(s => `<span class="li-skill">${esc(s)}</span>`).join('')}</div>`
    : needExport;

  view.innerHTML = `
    <nav class="li-nav">
      <div class="li-nav__inner">
        <span class="li-nav__logo">in</span>
        <div class="li-nav__search"><input placeholder="Search"></div>
        <div class="li-nav__items">
          ${navItem(LI_ICON.home, 'Home')}
          ${navItem(LI_ICON.net, 'Network')}
          ${navItem(LI_ICON.jobs, 'Jobs')}
          ${navItem(LI_ICON.msg, 'Messaging')}
          ${navItem(LI_ICON.bell, 'Notifications')}
        </div>
      </div>
    </nav>
    <div class="li-prof">
      <div class="li-prof__main">
        <section class="li-card li-phead">
          <div class="li-phead__banner"></div>
          <div class="li-phead__avatar" style="background:${AVATAR_COLORS[3]}">${esc(initials(p.name))}</div>
          <div class="li-phead__body">
            <h1 class="li-phead__name">${esc(p.name)}</h1>
            <p class="li-phead__headline">${esc(p.headline)}</p>
            <p class="li-phead__loc">${esc(p.location)} · <a href="https://${esc(p.url)}" target="_blank" rel="noopener">Contact info</a></p>
            <p class="li-phead__meta"><strong>${p.connections}</strong> connections · <strong>${p.followers.toLocaleString()}</strong> followers</p>
            ${p.open_to_work ? `<div class="li-phead__open"><strong>Open to work</strong><br>${esc(p.open_to_work)}</div>` : ''}
            <div class="li-phead__actions">
              <button class="li-btn li-btn--primary">Connect</button>
              <button class="li-btn">Message</button>
              <button class="li-btn">More</button>
            </div>
          </div>
        </section>
        ${section('Experience', expBody)}
        ${section('Education', eduBody)}
        ${section('Skills', skillsBody)}
      </div>
      <aside class="li-prof__rail">
        <div class="li-card li-side">
          <div class="li-side__title">Profile</div>
          <div class="li-side__row"><span>Current</span><strong>${esc(p.current)}</strong></div>
          <div class="li-side__row"><span>Location</span><strong>${esc(p.location.split(',')[0])}</strong></div>
          <div class="li-side__row"><span>Profile</span><a href="https://${esc(p.url)}" target="_blank" rel="noopener">${esc(p.url)}</a></div>
        </div>
      </aside>
    </div>`;
}

// ─── PINTEREST VIEW ──────────────────────────────────────────────────────────

const PIN_ICON = {
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',
};

// Varied pin heights → real masonry feel (deterministic, no Math.random).
const PIN_HEIGHTS = [220, 300, 180, 340, 260, 200, 320, 240, 280];

function renderPinterest(): void {
  const view = document.getElementById('pin-view');
  if (!view) return;

  // Pins built from communities (emoji + name) + scraps (as captioned pins).
  const pinData = [
    ...COMMUNITIES.map((c, i) => ({ title: c.name, emoji: c.emoji, color: c.color, author: c.name, grad: i })),
    ...SCRAPS.map((s, i) => ({ title: s.text.slice(0, 60), emoji: '\u{1F4CC}', color: s.color, author: s.author, grad: i + 3 })),
  ];

  const pins = pinData.map((p, i) => {
    const h = PIN_HEIGHTS[i % PIN_HEIGHTS.length];
    return `
    <div class="pin-card">
      <div class="pin-card__media" style="height:${h}px;background:${gradientFor(p.grad)}">
        ${p.emoji}
        <div class="pin-card__overlay"><span class="pin-card__save">Save</span></div>
      </div>
      <div class="pin-card__title">${p.title}</div>
      <div class="pin-card__meta">
        <span class="pin-card__avatar" style="background:${p.color}">${p.author.charAt(0)}</span>
        <span>${p.author.split(' ')[0]}</span>
      </div>
    </div>`;
  }).join('');

  view.innerHTML = `
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Home</a>
        <a href="#" class="pin-nav__tab">Explore</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${PIN_ICON.bell}${PIN_ICON.chat}<span class="pin-nav__avatar" style="background:${AVATAR_COLORS[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-board">${pins}</div>`;
}

// ─── THEME SWITCHER ──────────────────────────────────────────────────────────

type Theme = 'orkut' | 'instagram' | 'linkedin' | 'pinterest';
const THEME_KEY = 'mySocials.theme';

function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch { /* private mode */ }
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.classList.toggle('is-active', (btn as HTMLElement).dataset.themeBtn === theme);
  });
  window.scrollTo(0, 0);
}

function initThemeSwitcher(): void {
  const saved = (localStorage.getItem(THEME_KEY) as Theme) || 'orkut';
  setTheme(['orkut', 'instagram', 'linkedin', 'pinterest'].includes(saved) ? saved : 'orkut');
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', () => setTheme((btn as HTMLElement).dataset.themeBtn as Theme));
  });
}

// ─── INIT ───────────────────────────────────────────────────────────────────

function init(): void {
  renderFriends();
  renderScraps();
  renderCommunities();
  renderTestimonials();
  renderPhotos();
  renderInstagram();
  renderLinkedin();
  renderPinterest();
  initThemeSwitcher();

  // Animate trust meter bars on load
  setTimeout(() => {
    document.querySelectorAll('.trust-meter__fill').forEach(bar => {
      (bar as HTMLElement).style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  }, 300);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
