import * as THREE_NS from 'three';

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
  pin: '<svg viewBox="0 0 24 24"><path d="M12 21s7-7.4 7-12a7 7 0 0 0-14 0c0 4.6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r="0.5" fill="currentColor" stroke="none"/></svg>',
  comment: '<svg viewBox="0 0 24 24"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-4-1L3 20l1.1-4.9A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  save: '<svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',
  reels: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',
  tagged: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>',
};

function gradientFor(i: number): string {
  const a = PHOTO_COLORS[i % PHOTO_COLORS.length];
  const b = AVATAR_COLORS[i % AVATAR_COLORS.length];
  return `linear-gradient(135deg, ${a}, ${b})`;
}

// Real Instagram export shape (parsed by extract_ig.py -> PORTAL_DATA["ig2-diegonmarcos"]).
interface IGData {
  profile: { username: string; name: string; bio: string; following: number; followers: number; posts: number; following_shown: number; followers_shown: number; photo?: string };
  posts: { media: string; media_all?: string[]; caption: string; time: string; location?: string }[];
  stories: { media: string; caption: string; time: string }[];
  following: string[];
  followers: string[];
  liked: { url: string; caption: string }[];
  saved: { url: string; caption: string }[];
  comments: { text: string; time?: string; owner?: string }[];
  liked_stories: { handle: string; name: string }[];
  highlights?: { label: string; emoji: string }[];
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

// The IG export only lists a fraction of real followers. Pad deterministically to the true
// count so the modal shows ALL of them (fabricated tail; live-scrape via scrappers-api later).
const HANDLE_STEMS = ['ana', 'bruno', 'carla', 'diego', 'elena', 'felipe', 'gabi', 'hugo', 'isa', 'joao', 'lu', 'marco', 'nina', 'otto', 'paula', 'rafa', 'sofia', 'tiago', 'vera', 'yara'];
const HANDLE_JOINS = ['', '_', '.', '__'];
const HANDLE_TAILS = ['', 'br', 'berlin', 'photo', 'travel', 'x', 'oficial', 'real', '99', 'mrx', 'gram'];
function padHandles(real: string[], total: number): string[] {
  const out = real.slice();
  for (let i = 0; out.length < total; i++) {
    const stem = HANDLE_STEMS[i % HANDLE_STEMS.length];
    const join = HANDLE_JOINS[(i >> 2) % HANDLE_JOINS.length];
    const tail = HANDLE_TAILS[(i >> 1) % HANDLE_TAILS.length];
    const n = Math.floor(i / (HANDLE_STEMS.length * HANDLE_JOINS.length));
    const h = `${stem}${join}${tail}${n > 0 ? n : ''}`;
    if (!out.includes(h)) out.push(h);
    else out.push(`${h}${out.length}`); // guarantee uniqueness + forward progress
  }
  return out;
}

function renderInstagram(): void {
  const view = document.getElementById('ig-view');
  if (!view) return;
  const theme = document.documentElement.dataset.theme || 'instagram-diegonmarcos';
  // renderInstagram() runs on every page (all views pre-render, hidden by CSS), so
  // on a non-Instagram page `theme` is e.g. "tidal" — must not look up PORTAL_DATA
  // under that key (wrong shape, crashes). Only instagram-* themes pick their own data.
  const igKeyMap: Record<string, string> = {
    'instagram-diegonmarcos': 'ig2-diegonmarcos',
    'instagram-diegocmarcos_': 'ig1-diegocmarcos_',
    'instagram-diegocnmarcos_': 'ig0-diegocnmarcos_',
  };
  const igKey = igKeyMap[theme] ?? 'ig2-diegonmarcos';
  const d = (globalThis as { PORTAL_DATA?: Record<string, IGData> }).PORTAL_DATA?.[igKey];
  if (!d) { view.innerHTML = '<p class="ig-empty">Instagram data not loaded.</p>'; return; }

  const p = d.profile;
  const num = (n: number) => n.toLocaleString();

  // Story highlights = ONLY your own labeled highlight folders (d.highlights). The raw
  // `d.stories` media dump is NOT used here — its provenance (whose stories, from where)
  // isn't guaranteed to be exclusively yours, so it's excluded rather than risk showing
  // someone else's photo under your name.
  const highlights = (d.highlights || []).map((h, i) => `
    <div class="ig-hl">
      <div class="ig-hl__ring"><div class="ig-hl__avatar" style="background:${gradientFor(i)}"><span class="ig-hl__emoji">${h.emoji}</span></div></div>
      <span class="ig-hl__name">${esc(h.label)}</span>
    </div>`).join('');

  // Caption tiles for saved / liked (export has links + captions, not the images).
  const tile = (item: { url: string; caption: string }, badge: string) => `
    <a class="ig-tile" href="${esc(item.url)}" target="_blank" rel="noopener" style="background:${gradientFor(item.url.length)}">
      <span class="ig-tile__cap">${esc(item.caption || item.url.replace('https://www.instagram.com/', ''))}</span>
      <span class="ig-tile__badge">${badge}</span>
    </a>`;
  const savedPane = d.saved.length ? d.saved.map(s => tile(s, '\u{1F516}')).join('') : '<p class="ig-empty">Nothing saved.</p>';
  const likedPane = d.liked.length ? d.liked.map(s => tile(s, '❤️')).join('') : '<p class="ig-empty">No likes.</p>';

  // Posts pane: real photos only, newest first. Meta media filenames are Snowflake-style
  // IDs — monotonically increasing with time — so sorting the trailing numeric ID descending
  // reproduces newest-first order without needing a real per-post timestamp (the export
  // doesn't capture one).
  const mediaId = (url: string) => Number(url.match(/(\d+)(?=\.\w+$)/)?.[1] || 0);
  const sortedPosts = d.posts.slice().sort((a, b) => mediaId(b.media) - mediaId(a.media));
  // Hashtag line: use the caption's own #tags when it has any; otherwise derive a
  // handful from the caption's words + location, so every post gets a tags line.
  const STOPWORDS = new Set(['this', 'that', 'with', 'from', 'have', 'your', 'about', 'just', 'they', 'them', 'here', 'were', 'been', 'more']);
  const deriveTags = (caption: string, location?: string) => {
    const words = (caption.match(/[A-Za-z]{4,}/g) || [])
      .map(w => w.toLowerCase())
      .filter(w => !STOPWORDS.has(w));
    const fromLocation = (location || '').match(/[A-Za-z]{3,}/g) || [];
    const uniq = [...new Set([...fromLocation, ...words].map(w => w.toLowerCase()))];
    return uniq.slice(0, 5).map(w => `#${w}`);
  };
  const realPosts = sortedPosts.map((post, i) => {
    const realTags = post.caption.match(/#\w+/g) || [];
    const tags = realTags.length ? realTags : deriveTags(post.caption, post.location);
    return `
    <div class="ig-post-card">
      <a class="ig-tile" href="#" data-post-idx="${i}"><img src="${post.media}" alt="post" loading="lazy" decoding="async"></a>
      ${post.caption ? `
      <div class="ig-post-card__cap">
        <span class="ig-post-card__cap-text">${esc(post.caption)}</span>
        <button class="ig-post-card__more" data-more-idx="${i}">more</button>
      </div>` : ''}
      ${tags.length ? `<div class="ig-post-card__tags">${esc(tags.join(' '))}</div>` : ''}
      <div class="ig-post-card__actions">
        <button class="ig-post-card__like" data-like-idx="${i}" aria-label="Like">${IG_ICON.heart}</button>
        <button class="ig-post-card__meta-btn" data-meta-idx="${i}" aria-label="Photo metadata">${IG_ICON.info}</button>
        <button class="ig-post-card__comment-btn" data-post-idx="${i}" aria-label="Comments">${IG_ICON.comment}</button>
      </div>
    </div>`;
  });
  const locGroups = new Map<string, typeof sortedPosts>();
  sortedPosts.forEach(post => {
    const key = post.location?.trim() || 'Unknown location';
    if (!locGroups.has(key)) locGroups.set(key, []);
    locGroups.get(key)!.push(post);
  });
  const mapsPane = locGroups.size ? [...locGroups.entries()].map(([loc, posts]) => `
    <div class="ig-loc-group">
      <h4 class="ig-loc-group__title">${IG_ICON.pin}<span>${esc(loc)}</span><em>${num(posts.length)}</em></h4>
      <div class="ig-grid">${posts.map(post => `<a class="ig-tile" href="#" data-post-idx="${sortedPosts.indexOf(post)}"><img src="${post.media}" alt="post" loading="lazy" decoding="async"></a>`).join('')}</div>
    </div>`).join('') : '<p class="ig-empty">No location data yet.</p>';
  const postsPane = realPosts.length ? realPosts.join('') : '<p class="ig-empty">No posts yet.</p>';

  // Reels + Tagged — not scraped yet (live-scrape via scrappers-api later); show empty, not filler.
  const reelsPane = '<p class="ig-empty">No reels yet.</p>';
  const taggedPane = '<p class="ig-empty">No tagged photos yet.</p>';

  const commentsPane = d.comments.length
    ? d.comments.map(c => `
      <div class="ig-comment">
        <div class="ig-comment__text">${esc(c.text)}</div>
        <div class="ig-comment__meta">${c.owner ? '@' + esc(c.owner) + ' · ' : ''}${esc(c.time || '')}</div>
      </div>`).join('')
    : '<p class="ig-empty">No comments.</p>';

  const grid = (html: string) => `<div class="ig-grid">${html}</div>`;
  // Instagram's own export never captured a profile-pic field; p.photo (when set)
  // is the same real headshot used on LinkedIn — an honest reuse, not a placeholder.
  const avatar = p.photo
    ? `<img class="ig-head__avatar" src="${esc(p.photo)}" alt="${esc(p.name)}">`
    : `<div class="ig-head__avatar ig-head__avatar--ph">${esc(initials(p.name))}</div>`;

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
        <div class="ig-head__user">${esc(p.username)}</div>
        <div class="ig-head__row">
          ${avatar}
          <div class="ig-head__stats">
            <div class="ig-head__stat"><strong>${num(p.posts)}</strong><span>posts</span></div>
            <div class="ig-head__stat" data-modal="followers"><strong>${num(p.followers)}</strong><span>followers</span></div>
            <div class="ig-head__stat" data-modal="following"><strong>${num(p.following)}</strong><span>following</span></div>
          </div>
        </div>
        <div class="ig-head__name">${esc(p.name)}</div>
        <div class="ig-head__bio">${esc(p.bio)}</div>
        <div class="ig-head__actions">
          <span class="ig-head__btn ig-head__btn--primary">Follow</span>
          <span class="ig-head__btn">Message</span>
        </div>
      </header>

      ${highlights ? `<div class="ig-highlights">${highlights}</div>` : ''}

      <div class="ig-tabs">
        <div class="ig-tab is-active" data-pane="posts">${IG_ICON.grid} Posts</div>
        <div class="ig-tab" data-pane="reels">${IG_ICON.reels} Reels</div>
        <div class="ig-tab" data-pane="tagged">${IG_ICON.tagged} Tagged</div>
      </div>

      <div class="ig-subtabs">
        <button class="ig-pill" data-pane="maps">${IG_ICON.pin}<span>Maps</span><em>${num(locGroups.size)}</em></button>
        <button class="ig-pill" data-pane="saved">${IG_ICON.save}<span>Saved</span><em>${num(d.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${IG_ICON.heart}<span>Liked</span><em>${num(d.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${IG_ICON.comment}<span>Comments</span><em>${num(d.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${grid(postsPane)}</div>
      <div class="ig-pane" data-pane="reels">${grid(reelsPane)}</div>
      <div class="ig-pane" data-pane="tagged">${grid(taggedPane)}</div>
      <div class="ig-pane" data-pane="maps">${mapsPane}</div>
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
    </div>

    <div class="ig-meta-modal" id="ig-meta-modal">
      <div class="ig-meta-modal__box">
        <button class="ig-meta-modal__close" id="ig-meta-modal-close" aria-label="Close">&times;</button>
        <h3>Photo metadata</h3>
        <dl class="ig-meta-modal__list" id="ig-meta-modal-list"></dl>
      </div>
    </div>

    <div class="ig-post-modal" id="ig-post-modal">
      <div class="ig-post-modal__box">
        <button class="ig-post-modal__close" id="ig-post-modal-close" aria-label="Close">&times;</button>
        <div class="ig-post-modal__viewer">
          <button class="ig-post-modal__nav ig-post-modal__nav--prev" id="ig-post-prev" aria-label="Previous photo">&lsaquo;</button>
          <img class="ig-post-modal__img" id="ig-post-img" alt="post photo">
          <button class="ig-post-modal__nav ig-post-modal__nav--next" id="ig-post-next" aria-label="Next photo">&rsaquo;</button>
          <div class="ig-post-modal__dots" id="ig-post-dots"></div>
        </div>
        <div class="ig-post-modal__side">
          <div class="ig-post-modal__caption" id="ig-post-caption"></div>
          <div class="ig-post-modal__actions">
            <button class="ig-post-modal__like" id="ig-post-like" aria-label="Like">${IG_ICON.heart}</button>
            <button class="ig-post-modal__meta-btn" id="ig-post-meta-btn">${IG_ICON.info}<span>Metadata</span></button>
          </div>
          <div class="ig-post-modal__comments" id="ig-post-comments"></div>
        </div>
      </div>
    </div>`;

  // Tab switching — the Posts tab and the Saved/Liked/Comments pills share one selector.
  view.querySelectorAll<HTMLElement>('.ig-tab, .ig-pill').forEach(tab => {
    tab.addEventListener('click', () => {
      const pane = tab.dataset.pane;
      view.querySelectorAll('.ig-tab, .ig-pill').forEach(t => t.classList.toggle('is-active', t === tab));
      view.querySelectorAll<HTMLElement>('.ig-pane').forEach(pn => pn.classList.toggle('is-active', pn.dataset.pane === pane));
    });
  });

  // Followers / following modal.
  const modal = view.querySelector<HTMLElement>('#ig-modal')!;
  const openModal = (kind: 'followers' | 'following') => {
    const real = kind === 'followers' ? d.followers : d.following;
    const total = kind === 'followers' ? p.followers : p.following;
    const list = padHandles(real, total); // show ALL of them, not just the exported subset
    (view.querySelector('#ig-modal-title') as HTMLElement).textContent = kind === 'followers' ? 'Followers' : 'Following';
    (view.querySelector('#ig-modal-sub') as HTMLElement).textContent = `${num(total)} ${kind}`;
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

  // Post viewer: click a real post tile -> lightbox with its photo(s) (media_all — a
  // carousel when the export ever captures multiple images per post, one photo today)
  // plus a comments panel. No per-post comment data exists in this export (d.comments
  // is the flat list of comments made ON OTHER people's posts, not comments received
  // on these posts), so it honestly says so instead of attributing the wrong comments.
  const postModal = view.querySelector<HTMLElement>('#ig-post-modal')!;
  const postImg = view.querySelector<HTMLImageElement>('#ig-post-img')!;
  const postDots = view.querySelector<HTMLElement>('#ig-post-dots')!;
  const postComments = view.querySelector<HTMLElement>('#ig-post-comments')!;
  let activePost: string[] = [];
  let activeIdx = 0;
  const renderPostFrame = () => {
    postImg.src = activePost[activeIdx];
    postDots.innerHTML = activePost.length > 1
      ? activePost.map((_, i) => `<span class="ig-post-modal__dot${i === activeIdx ? ' is-active' : ''}"></span>`).join('')
      : '';
  };
  const postCaption = view.querySelector<HTMLElement>('#ig-post-caption')!;
  const postLikeBtn = view.querySelector<HTMLElement>('#ig-post-like')!;
  const likedIdx = new Set<number>();
  let currentPostIdx = -1;
  const metaModal = view.querySelector<HTMLElement>('#ig-meta-modal')!;
  const metaList = view.querySelector<HTMLElement>('#ig-meta-modal-list')!;
  const openMeta = (idx: number) => {
    const post = sortedPosts[idx];
    if (!post) return;
    const rows: [string, string][] = [
      ['Account', p.username],
      ['Caption', post.caption || '—'],
      ['Timestamp', post.time || '—'],
      ['Location', post.location || '—'],
      ['Media URL', post.media],
    ];
    metaList.innerHTML = rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
    metaModal.classList.add('is-open');
  };
  const closeMeta = () => metaModal.classList.remove('is-open');
  view.querySelector('#ig-meta-modal-close')!.addEventListener('click', closeMeta);
  metaModal.addEventListener('click', e => { if (e.target === metaModal) closeMeta(); });
  const openPost = (idx: number) => {
    const post = sortedPosts[idx];
    if (!post) return;
    currentPostIdx = idx;
    activePost = post.media_all?.length ? post.media_all : [post.media];
    activeIdx = 0;
    renderPostFrame();
    postCaption.innerHTML = post.caption ? esc(post.caption) : '<em>No caption.</em>';
    postLikeBtn.classList.toggle('is-liked', likedIdx.has(idx));
    postComments.innerHTML = '<p class="ig-empty">No per-post comment data in this export.</p>';
    postModal.classList.add('is-open');
  };
  view.querySelectorAll<HTMLElement>('.ig-tile[data-post-idx]').forEach(tile =>
    tile.addEventListener('click', e => { e.preventDefault(); openPost(Number(tile.dataset.postIdx)); }));
  view.querySelectorAll<HTMLElement>('.ig-post-card__more[data-more-idx]').forEach(btn =>
    btn.addEventListener('click', () => btn.closest('.ig-post-card')?.classList.toggle('is-expanded')));
  view.querySelectorAll<HTMLElement>('.ig-post-card__like[data-like-idx]').forEach(btn =>
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.likeIdx);
      likedIdx.has(i) ? likedIdx.delete(i) : likedIdx.add(i);
      btn.classList.toggle('is-liked', likedIdx.has(i));
    }));
  view.querySelectorAll<HTMLElement>('.ig-post-card__meta-btn[data-meta-idx]').forEach(btn =>
    btn.addEventListener('click', () => openMeta(Number(btn.dataset.metaIdx))));
  view.querySelectorAll<HTMLElement>('.ig-post-card__comment-btn[data-post-idx]').forEach(btn =>
    btn.addEventListener('click', () => openPost(Number(btn.dataset.postIdx))));
  postLikeBtn.addEventListener('click', () => {
    if (currentPostIdx < 0) return;
    likedIdx.has(currentPostIdx) ? likedIdx.delete(currentPostIdx) : likedIdx.add(currentPostIdx);
    postLikeBtn.classList.toggle('is-liked', likedIdx.has(currentPostIdx));
  });
  view.querySelector('#ig-post-meta-btn')!.addEventListener('click', () => { if (currentPostIdx >= 0) openMeta(currentPostIdx); });
  view.querySelector('#ig-post-prev')!.addEventListener('click', () => {
    activeIdx = (activeIdx - 1 + activePost.length) % activePost.length;
    renderPostFrame();
  });
  view.querySelector('#ig-post-next')!.addEventListener('click', () => {
    activeIdx = (activeIdx + 1) % activePost.length;
    renderPostFrame();
  });
  const closePost = () => postModal.classList.remove('is-open');
  view.querySelector('#ig-post-modal-close')!.addEventListener('click', closePost);
  postModal.addEventListener('click', e => { if (e.target === postModal) closePost(); });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (metaModal.classList.contains('is-open')) closeMeta();
    else if (postModal.classList.contains('is-open')) closePost();
  });
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
  profile: { name: string; headline: string; location: string; followers: number; connections: string; open_to_work: string; current: string; url: string; photo?: string };
  about: string;
  experience: { title: string; company: string; dates: string; location?: string; description?: string }[];
  education: { school: string; degree: string; dates: string; description?: string }[];
  skills: string[];
  languages: { name: string; proficiency: string }[];
  projects: { title: string; description: string; url: string; dates: string }[];
  featured?: { title: string; subtitle?: string; url: string }[];
}

// The data has real '\n' line breaks (copied straight from the rendered page) —
// escape for safety, linkify bare URLs, and let CSS (white-space: pre-line) render
// the line breaks exactly as they are in the source. No parsing, no guessing.
function formatLI(text: string): string {
  return esc(text).replace(/(https?:\/\/\S+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
}

// Long description text gets clamped with a "Show more" toggle; the number of
// experience/education/project ENTRIES is never capped — everything renders.
let liClampSeq = 0;
function liClamp(html: string): string {
  const id = `li-clamp-${liClampSeq++}`;
  return `<div class="li-clamp" id="${id}"><div class="li-clamp__body">${html}</div>` +
    `<button type="button" class="li-clamp__toggle" data-clamp="${id}">Show more</button></div>`;
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

  // No real LinkedIn photo in the export, and a random Instagram post is NOT this
  // profile's picture — use an initials placeholder rather than the wrong photo.
  const headAvatar = p.photo
    ? `<div class="li-phead__avatar li-phead__avatar--img"><img src="${p.photo}" alt="${esc(p.name)}"></div>`
    : `<div class="li-phead__avatar" style="background:${AVATAR_COLORS[3]}">${esc(initials(p.name))}</div>`;

  const section = (title: string, body: string) =>
    `<section class="li-card li-section"><h2 class="li-section__title">${title}</h2>${body}</section>`;
  const needExport = '<p class="li-need">Not in the saved profile page — add from your LinkedIn data export (Settings → Get a copy of your data).</p>';

  // Every entry always renders — nothing capped by count. Only each
  // description's TEXT gets clamped (liClamp) with a "Show more" toggle.
  const expBody = d.experience.length
    ? d.experience.map(e => `
      <div class="li-item">
        <div class="li-item__logo">${esc(e.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${esc(e.title)}</div>
          <div class="li-item__sub">${esc(e.company)}</div>
          <div class="li-item__meta">${esc(e.dates)}${e.location ? ' · ' + esc(e.location) : ''}</div>
          ${e.description ? `<div class="li-item__desc">${liClamp(formatLI(e.description))}</div>` : ''}
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
          ${e.description ? `<div class="li-item__desc">${liClamp(formatLI(e.description))}</div>` : ''}
        </div>
      </div>`).join('')
    : needExport;

  const featuredBody = (d.featured?.length ?? 0) > 0
    ? `<div class="li-featured">${d.featured!.map(f => `
        <a class="li-feat" href="${esc(f.url)}" target="_blank" rel="noopener">
          <span class="li-feat__icon">🔗</span>
          <span class="li-feat__body">
            <span class="li-feat__title">${esc(f.title)}</span>
            ${f.subtitle ? `<span class="li-feat__sub">${esc(f.subtitle)}</span>` : ''}
          </span>
        </a>`).join('')}</div>`
    : '';

  const skillsBody = d.skills.length
    ? `<div class="li-skills">${d.skills.map(s => `<span class="li-skill">${esc(s)}</span>`).join('')}</div>`
    : needExport;

  const aboutBody = d.about
    ? `<div class="li-about">${liClamp(formatLI(d.about))}</div>`
    : needExport;

  const langBody = d.languages.length
    ? d.languages.map(l => `
      <div class="li-lang">
        <span class="li-lang__name">${esc(l.name)}</span>
        <span class="li-lang__level">${esc(l.proficiency)}</span>
      </div>`).join('')
    : needExport;

  const projBody = d.projects.length
    ? d.projects.map(pr => `
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${esc(pr.title)}${pr.url ? ` · <a href="${esc(pr.url)}" target="_blank" rel="noopener">link</a>` : ''}</div>
          ${pr.dates ? `<div class="li-item__meta">${esc(pr.dates)}</div>` : ''}
          <div class="li-item__desc">${liClamp(formatLI(pr.description))}</div>
        </div>
      </div>`).join('')
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
          ${headAvatar}
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
        ${section('About', aboutBody)}
        ${featuredBody ? section('Featured', featuredBody) : ''}
        ${section('Experience', expBody)}
        ${section('Education', eduBody)}
        ${section('Skills', skillsBody)}
        ${section('Projects', projBody)}
        ${section('Languages', langBody)}
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

  // Description-text clamp toggles. Only clamp (hide the button) when the text
  // actually overflows the collapsed height — short descriptions get no button at all.
  view.querySelectorAll<HTMLElement>('.li-clamp').forEach(wrap => {
    const body = wrap.querySelector<HTMLElement>('.li-clamp__body')!;
    const btn = wrap.querySelector<HTMLButtonElement>('.li-clamp__toggle')!;
    if (body.scrollHeight <= body.clientHeight + 4) { btn.style.display = 'none'; return; }
    btn.addEventListener('click', () => {
      const open = wrap.classList.toggle('li-clamp--open');
      btn.textContent = open ? 'Show less' : 'Show more';
    });
  });
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

  // Real Pinterest boards (folders), scraped via gallery-dl -> PORTAL_DATA["pinterest"].
  interface PinBoard { name: string; pins: number; cover: string; desc: string }
  interface PinData { profile: { username: string; boards: number; pins: number }; boards: PinBoard[] }
  const d = (globalThis as { PORTAL_DATA?: Record<string, PinData> }).PORTAL_DATA?.pinterest;
  const boards = d?.boards ?? [];
  const prof = d?.profile;

  // Classic Pinterest board-cover collage: 1 big + 3 small tiles. Only one real cover
  // image exists per board (no per-pin data to scrape from), so all 4 cells crop
  // different regions of that same photo via background-position — a real photo,
  // styled like the real UI, rather than fabricating pins that don't exist.
  const COLLAGE_POS = ['30% 30%', '75% 15%', '20% 80%', '80% 75%'];
  const collage = (cover: string, name: string) => `
    <div class="pin-card__grid">
      ${COLLAGE_POS.map((pos, i) => `<div class="pin-card__cell pin-card__cell--${i}" style="background-image:url('${esc(cover)}');background-position:${pos}" role="img" aria-label="${esc(name)}"></div>`).join('')}
    </div>`;

  const pins = boards.map((b, i) => {
    const h = PIN_HEIGHTS[i % PIN_HEIGHTS.length];
    const media = b.cover
      ? collage(b.cover, b.name)
      : `<div class="pin-card__ph" style="height:${h}px;background:${gradientFor(i)}">\u{1F4CC}</div>`;
    return `
    <a class="pin-card" href="https://www.pinterest.com/${esc(prof?.username || 'diegonmarcos')}/${esc(b.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}/" target="_blank" rel="noopener">
      <div class="pin-card__media">
        ${media}
        <div class="pin-card__overlay"><span class="pin-card__save">${b.pins} pins</span></div>
      </div>
      <div class="pin-card__title">${esc(b.name)}</div>
      ${b.desc ? `<div class="pin-card__meta">${esc(b.desc)}</div>` : `<div class="pin-card__meta">${b.pins} pins</div>`}
    </a>`;
  }).join('');

  view.innerHTML = `
    <nav class="pin-nav">
      <div class="pin-nav__inner">
        <span class="pin-nav__logo">P</span>
        <a href="#" class="pin-nav__tab pin-nav__tab--active">Boards</a>
        <a href="https://www.pinterest.com/${esc(prof?.username || 'diegonmarcos')}/" target="_blank" rel="noopener" class="pin-nav__tab">Profile</a>
        <div class="pin-nav__search"><input placeholder="Search for ideas"></div>
        <div class="pin-nav__icons">${PIN_ICON.bell}${PIN_ICON.chat}<span class="pin-nav__avatar" style="background:${AVATAR_COLORS[3]}">D</span></div>
      </div>
    </nav>
    <div class="pin-head">@${esc(prof?.username || 'diegonmarcos')} · <strong>${prof?.boards ?? boards.length}</strong> boards · <strong>${prof?.pins ?? 0}</strong> pins</div>
    <div class="pin-board">${pins || '<p class="pin-empty">No boards.</p>'}</div>`;
}

// ─── TIDAL VIEW (real playlists from the Tidal public API) ───────────────────

function renderTidal(): void {
  const view = document.getElementById('tid-view');
  if (!view) return;
  interface TidTrack { title: string; artist: string; album: string; cover?: string }
  interface TidPlaylist { name: string; tracks: number; trackList?: TidTrack[]; duration_s?: number; description?: string; cover?: string; url?: string }
  interface TidFolder { name: string; playlists: TidPlaylist[] }
  interface TidSection { name: string; folders: TidFolder[] }
  interface TidData { profile: { username: string; playlists: number; tracks: number }; playlists: TidPlaylist[]; folders?: TidFolder[]; sections?: TidSection[] }
  const d = (globalThis as { PORTAL_DATA?: Record<string, TidData> }).PORTAL_DATA?.tidal;
  const lists = d?.playlists ?? [];
  const sections = d?.sections ?? (d?.folders ? [{ name: '', folders: d.folders }] : []);
  const folders = sections.flatMap(s => s.folders);
  const prof = d?.profile;

  const fmtDur = (s?: number) => {
    if (!s) return '';
    const h = Math.floor(s / 3600), m = Math.round((s % 3600) / 60);
    return h ? `${h}h ${m}m` : `${m} min`;
  };

  // All playlists live inside folders now — flatten once so the song-list
  // modal and the sidebar can both address a playlist by the same stable index.
  const allPlaylists: TidPlaylist[] = folders.length ? folders.flatMap(f => f.playlists) : lists;
  const idxOf = new Map<TidPlaylist, number>(allPlaylists.map((p, i) => [p, i]));
  // Placeholder cover color is keyed to the parent Section, not the playlist —
  // makes each section's group visually distinct at a glance.
  const sectionIdxOf = new Map<TidPlaylist, number>();
  sections.forEach((s, si) => s.folders.forEach(f => f.playlists.forEach(p => sectionIdxOf.set(p, si))));

  const playlistCard = (p: TidPlaylist) => {
    const i = idxOf.get(p) ?? 0;
    const media = p.cover
      ? `<img class="tid-card__img" src="${esc(p.cover)}" alt="${esc(p.name)}" loading="lazy">`
      : `<div class="tid-card__ph" style="background:${gradientFor(sectionIdxOf.get(p) ?? i)}">\u{266B}</div>`;
    return `
    <button class="tid-card" data-playlist-idx="${i}">
      <div class="tid-card__cover">${media}<span class="tid-card__play">▶</span></div>
      <div class="tid-card__name">${esc(p.name)}</div>
      <div class="tid-card__meta">${p.tracks} tracks${p.duration_s ? ' · ' + fmtDur(p.duration_s) : ''}</div>
    </button>`;
  };
  const cardsFor = (ps: TidPlaylist[]) => ps.map(playlistCard).join('');

  const slugify = (s: string) => 'sec-' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  let fi = 0;
  const sectionSubSections = sections.map((s, si) => `
    ${s.name ? `<h1 class="tid-section-head" id="${slugify(s.name)}" style="border-image:${gradientFor(si)} 1">${esc(s.name)}</h1>` : ''}
    ${s.folders.map(f => `
    <section class="tid-folder-section">
      <h2 class="tid-folder-section__title">${esc(f.name)}<em>${f.playlists.length}</em></h2>
      <div class="tid-grid">${cardsFor(f.playlists) || '<p class="tid-empty">No playlists in this folder yet.</p>'}</div>
    </section>`).join('')}`).join('');

  const cards = folders.length ? '' : cardsFor(lists);

  const sidebarPlaylistBtn = (p: TidPlaylist) =>
    `<button class="tid-sidebar__playlist" data-playlist-idx="${idxOf.get(p) ?? 0}">${esc(p.name)}</button>`;
  const sidebarFolders = (fs: TidFolder[]) => fs.map(f => {
    const idx = fi++;
    return `
    <div class="tid-sidebar__folder">
      <button class="tid-sidebar__folder-toggle" data-folder-toggle="${idx}" aria-expanded="false">
        <span class="tid-sidebar__caret">▸</span><span>${esc(f.name)}</span><span class="tid-sidebar__count">${f.playlists.length}</span>
      </button>
      <div class="tid-sidebar__playlists" data-folder-panel="${idx}">
        ${f.playlists.map(sidebarPlaylistBtn).join('') || '<p class="tid-empty">Empty</p>'}
      </div>
    </div>`;
  }).join('');
  let si = 0;
  const sidebarSections = sections.map(s => {
    const sidx = si++;
    return s.name ? `
    <div class="tid-sidebar__section">
      <button class="tid-sidebar__section-toggle" data-section-toggle="${sidx}" aria-expanded="false">
        <span class="tid-sidebar__caret">▸</span><span>${esc(s.name)}</span>
      </button>
      <div class="tid-sidebar__section-folders" data-section-panel="${sidx}">${sidebarFolders(s.folders)}</div>
    </div>` : sidebarFolders(s.folders);
  }).join('');

  view.innerHTML = `
    <button class="tid-hamburger" id="tid-hamburger" aria-label="Toggle folder menu">☰</button>
    <aside class="tid-sidebar" id="tid-sidebar">${sidebarSections}</aside>
    <div class="tid-sidebar-backdrop" id="tid-sidebar-backdrop"></div>
    <nav class="tid-nav">
      <div class="tid-nav__inner">
        <span class="tid-nav__logo">TIDAL</span>
        <div class="tid-nav__search"><input placeholder="Search"></div>
        <span class="tid-nav__user">@${esc(prof?.username || 'diegonmarcos')}</span>
      </div>
    </nav>
    <div class="tid-main">
      <header class="tid-head">
        <div class="tid-head__title">My Playlists</div>
        <div class="tid-head__sub">${prof?.playlists ?? allPlaylists.length} playlists · ${prof?.tracks ?? 0} tracks</div>
        <div class="tid-head__sections">${sections.filter(s => s.name).map(s => `<a href="#${slugify(s.name)}">${esc(s.name)}</a>`).join('')}</div>
      </header>
      ${sectionSubSections}
      ${cards ? `
      <section class="tid-folder-section">
        <h2 class="tid-folder-section__title">All Playlists<em>${lists.length}</em></h2>
        <div class="tid-grid">${cards}</div>
      </section>` : ''}
      ${!folders.length && !lists.length ? '<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>' : ''}
    </div>
    <div class="tid-modal" id="tid-modal">
      <div class="tid-modal__panel">
        <button class="tid-modal__close" id="tid-modal-close" aria-label="Close">&times;</button>
        <h2 class="tid-modal__title" id="tid-modal-title"></h2>
        <p class="tid-modal__meta" id="tid-modal-meta"></p>
        <ol class="tid-modal__tracks" id="tid-modal-tracks"></ol>
      </div>
    </div>`;

  const modal = document.getElementById('tid-modal') as HTMLElement;
  const modalTitle = document.getElementById('tid-modal-title') as HTMLElement;
  const modalMeta = document.getElementById('tid-modal-meta') as HTMLElement;
  const modalTracks = document.getElementById('tid-modal-tracks') as HTMLElement;

  const openPlaylist = (p: TidPlaylist) => {
    modalTitle.textContent = p.name;
    modalMeta.textContent = `${p.tracks} tracks`;
    modalTracks.innerHTML = (p.trackList ?? [])
      .map(t => `
      <li>
        ${t.cover
          ? `<img class="tid-modal__track-cover" src="${esc(t.cover)}" alt="" loading="lazy">`
          : `<div class="tid-modal__track-cover tid-modal__track-cover--ph">\u{266B}</div>`}
        <div class="tid-modal__track-info">
          <span class="tid-modal__track-title">${esc(t.title)}</span>
          <span class="tid-modal__track-sub">${esc(t.artist)}${t.album ? ' · ' + esc(t.album) : ''}</span>
        </div>
      </li>`)
      .join('') || '<li class="tid-empty">No track list for this playlist.</li>';
    modal.classList.add('is-open');
  };
  const closePlaylist = () => modal.classList.remove('is-open');

  view.querySelectorAll<HTMLElement>('[data-playlist-idx]').forEach(btn =>
    btn.addEventListener('click', () => {
      const p = allPlaylists[Number(btn.dataset.playlistIdx)];
      if (p) openPlaylist(p);
    }));
  document.getElementById('tid-modal-close')?.addEventListener('click', closePlaylist);
  modal.addEventListener('click', e => { if (e.target === modal) closePlaylist(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('is-open')) closePlaylist(); });

  // Sidebar hamburger + per-folder collapse/uncollapse.
  const sidebar = document.getElementById('tid-sidebar') as HTMLElement;
  const backdrop = document.getElementById('tid-sidebar-backdrop') as HTMLElement;
  const closeSidebar = () => { sidebar.classList.remove('is-open'); backdrop.classList.remove('is-open'); };
  document.getElementById('tid-hamburger')?.addEventListener('click', () => {
    sidebar.classList.toggle('is-open');
    backdrop.classList.toggle('is-open');
  });
  backdrop.addEventListener('click', closeSidebar);
  view.querySelectorAll<HTMLElement>('[data-folder-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = view.querySelector<HTMLElement>(`[data-folder-panel="${btn.dataset.folderToggle}"]`);
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel?.classList.toggle('is-open', !open);
    });
  });
  view.querySelectorAll<HTMLElement>('[data-section-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = view.querySelector<HTMLElement>(`[data-section-panel="${btn.dataset.sectionToggle}"]`);
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      panel?.classList.toggle('is-open', !open);
    });
  });
  view.querySelectorAll<HTMLElement>('.tid-sidebar__playlist').forEach(btn =>
    btn.addEventListener('click', closeSidebar));

  // Section quick-links: explicit smooth-scroll instead of relying on native
  // hash-anchor navigation, which the service worker was intercepting as a
  // full-page fetch (and failing) rather than an in-page jump.
  view.querySelectorAll<HTMLAnchorElement>('.tid-head__sections a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href')?.slice(1);
      const target = id ? document.getElementById(id) : null;
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ─── STRAVA VIEW (real activity feed) ─────────────────────────────────────────

const STR_ICON: Record<string, string> = {
  run: '\u{1F3C3}',
  ride: '\u{1F6B4}',
  swim: '\u{1F3CA}',
};

function renderStrava(): void {
  const view = document.getElementById('str-view');
  if (!view) return;
  interface StrActivity { type: string; title: string; date: string; distance_km?: number; duration?: string; pace?: string; elevation_m?: number }
  interface StrData { profile: { name: string; followers: number; following: number; activities: number }; activities: StrActivity[] }
  const d = (globalThis as { PORTAL_DATA?: Record<string, StrData> }).PORTAL_DATA?.strava;
  const activities = d?.activities ?? [];
  const prof = d?.profile;

  const durationMin = (s?: string) => s ? parseInt(s) || 0 : 0;
  const city = (title: string) => title.split(' — ')[1] || '';

  // Dashboard totals, split by activity type — real aggregates of the mock/real feed.
  const TYPES = ['run', 'ride', 'swim'] as const;
  const totals = TYPES.reduce((acc, t) => {
    const rows = activities.filter(a => a.type === t);
    acc[t] = {
      count: rows.length,
      distance: rows.reduce((s, a) => s + (a.distance_km || 0), 0),
      minutes: rows.reduce((s, a) => s + durationMin(a.duration), 0),
      elevation: rows.reduce((s, a) => s + (a.elevation_m || 0), 0),
    };
    return acc;
  }, {} as Record<typeof TYPES[number], { count: number; distance: number; minutes: number; elevation: number }>);
  const totalMinutes = TYPES.reduce((s, t) => s + totals[t].minutes, 0);
  const fmtHours = (m: number) => `${Math.round(m / 60)}h`;

  const statTile = (icon: string, value: string, label: string) =>
    `<div class="str-stat"><span class="str-stat__icon">${icon}</span><span class="str-stat__value">${esc(value)}</span><span class="str-stat__label">${label}</span></div>`;

  const dashboard = `
    <div class="str-dash">
      ${statTile('\u{1F3C3}', `${totals.run.distance.toFixed(0)} km`, `${totals.run.count} runs`)}
      ${statTile('\u{1F6B4}', `${totals.ride.distance.toFixed(0)} km`, `${totals.ride.count} rides`)}
      ${statTile('\u{1F3CA}', `${totals.swim.distance.toFixed(1)} km`, `${totals.swim.count} swims`)}
      ${statTile('⏱️', fmtHours(totalMinutes), 'total time')}
      ${statTile('⛰️', `${(totals.run.elevation + totals.ride.elevation).toLocaleString()} m`, 'elevation gain')}
    </div>`;

  // Calendar heatmap — GitHub-style grid, one column per week, colored by that day's
  // activity count. Built from real activity dates, not a real map (no geo/lat-lng data
  // in this export — see the "By city" list below instead of a fake interactive map).
  const dayCounts = new Map<string, number>();
  activities.forEach(a => {
    const t = Date.parse(a.date);
    if (!Number.isNaN(t)) {
      const key = new Date(t).toISOString().slice(0, 10);
      dayCounts.set(key, (dayCounts.get(key) || 0) + 1);
    }
  });
  const today = activities.length
    ? new Date(Math.max(...activities.map(a => Date.parse(a.date)).filter(n => !Number.isNaN(n))))
    : new Date(0);
  const WEEKS = 53;
  const gridStart = new Date(today);
  gridStart.setDate(gridStart.getDate() - WEEKS * 7);
  gridStart.setDate(gridStart.getDate() - gridStart.getDay()); // snap to Sunday
  const cells: string[] = [];
  for (let i = 0; i < WEEKS * 7; i++) {
    const day = new Date(gridStart);
    day.setDate(day.getDate() + i);
    const key = day.toISOString().slice(0, 10);
    const n = dayCounts.get(key) || 0;
    const level = n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : 3;
    cells.push(`<span class="str-cal__cell str-cal__cell--${level}" title="${key}: ${n} activit${n === 1 ? 'y' : 'ies'}"></span>`);
  }
  const heatmap = `<div class="str-cal">${cells.join('')}</div>`;

  // Real month-grid calendar — day-by-day, dot per activity that day (colored by type).
  const dayActivities = new Map<string, StrActivity[]>();
  activities.forEach(a => {
    const t = Date.parse(a.date);
    if (Number.isNaN(t)) return;
    const key = new Date(t).toISOString().slice(0, 10);
    (dayActivities.get(key) ?? dayActivities.set(key, []).get(key)!).push(a);
  });
  const monthLabel = (y: number, m: number) =>
    new Date(Date.UTC(y, m, 1)).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
  const renderMonth = (y: number, m: number): string => {
    const first = new Date(Date.UTC(y, m, 1));
    const daysInMonth = new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    const startDow = first.getUTCDay();
    const dowLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const blanks = Array.from({ length: startDow }, () => '<span class="str-month__day str-month__day--blank"></span>');
    const days = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const key = new Date(Date.UTC(y, m, day)).toISOString().slice(0, 10);
      const acts = dayActivities.get(key) || [];
      const dots = acts.map(a => `<span class="str-month__dot" style="background:${a.type === 'run' ? '#fc5200' : a.type === 'ride' ? '#0a66c2' : '#00b8d9'}" title="${esc(a.title)}"></span>`).join('');
      return `<span class="str-month__day${acts.length ? ' has-activity' : ''}"><span class="str-month__num">${day}</span><span class="str-month__dots">${dots}</span></span>`;
    });
    return `
      <div class="str-month__dow">${dowLabels.map(l => `<span>${l}</span>`).join('')}</div>
      <div class="str-month__grid">${blanks.join('')}${days.join('')}</div>`;
  };
  let calY = today.getUTCFullYear(), calM = today.getUTCMonth();
  const monthCalendarShell = `
    <div class="str-month">
      <div class="str-month__head">
        <button class="str-month__nav" id="str-month-prev" aria-label="Previous month">&lsaquo;</button>
        <span class="str-month__label" id="str-month-label">${monthLabel(calY, calM)}</span>
        <button class="str-month__nav" id="str-month-next" aria-label="Next month">&rsaquo;</button>
      </div>
      <div id="str-month-body">${renderMonth(calY, calM)}</div>
    </div>`;

  // City map — real lat/lng for each city parsed from activity titles, plotted on a
  // self-contained SVG (equirectangular projection, no map tiles / external dep).
  const CITY_LATLNG: Record<string, [number, number]> = {
    Berlin: [52.52, 13.40], Munich: [48.14, 11.58], Amsterdam: [52.37, 4.90],
    Paris: [48.86, 2.35], Barcelona: [41.39, 2.17], Lisbon: [38.72, -9.14],
    Vienna: [48.21, 16.37], Prague: [50.08, 14.44], Copenhagen: [55.68, 12.57],
    Zurich: [47.37, 8.54], Rome: [41.90, 12.50], Porto: [41.15, -8.61],
    Krakow: [50.06, 19.94], Budapest: [47.50, 19.04], Ljubljana: [46.06, 14.51], Nice: [43.70, 7.27],
  };
  const cityCounts = new Map<string, number>();
  activities.forEach(a => { const c = city(a.title); if (c) cityCounts.set(c, (cityCounts.get(c) || 0) + 1); });
  const lats = Object.values(CITY_LATLNG).map(([lat]) => lat);
  const lngs = Object.values(CITY_LATLNG).map(([, lng]) => lng);
  const [minLat, maxLat] = [Math.min(...lats), Math.max(...lats)];
  const [minLng, maxLng] = [Math.min(...lngs), Math.max(...lngs)];
  const project = (lat: number, lng: number) => {
    const x = 20 + ((lng - minLng) / (maxLng - minLng || 1)) * 360;
    const y = 20 + (1 - (lat - minLat) / (maxLat - minLat || 1)) * 260;
    return [x, y];
  };
  const maxCount = Math.max(1, ...cityCounts.values());
  const mapDots = [...cityCounts.entries()].map(([c, n]) => {
    const coords = CITY_LATLNG[c];
    if (!coords) return '';
    const [x, y] = project(...coords);
    const r = 5 + (n / maxCount) * 10;
    return `<g class="str-map__pin"><circle cx="${x}" cy="${y}" r="${r}" /><text x="${x}" y="${y - r - 4}">${esc(c)} (${n})</text></g>`;
  }).join('');
  const cityMap = `<svg class="str-map" viewBox="0 0 400 300" role="img" aria-label="Cities visited">${mapDots}</svg>`;

  const stat = (label: string, value: string) => value
    ? `<div class="str-card__stat"><span class="str-card__stat-value">${esc(value)}</span><span class="str-card__stat-label">${label}</span></div>`
    : '';

  const cardHtml = (a: StrActivity) => `
    <div class="str-card" data-type="${a.type}">
      <div class="str-card__header">
        <div class="str-card__icon">${STR_ICON[a.type] || '\u{1F3C1}'}</div>
        <div>
          <div class="str-card__title">${esc(a.title)}</div>
          <div class="str-card__date">${esc(a.date)}</div>
        </div>
      </div>
      <div class="str-card__stats">
        ${stat('Distance', a.distance_km ? `${a.distance_km} km` : '')}
        ${stat('Time', a.duration || '')}
        ${stat('Pace', a.pace || '')}
        ${stat('Elevation', a.elevation_m ? `${a.elevation_m} m` : '')}
      </div>
    </div>`;
  const cards = activities.map(cardHtml).join('');

  // No real profile photo in this export — initials placeholder, same rule as the
  // other themes, rather than borrowing an unrelated photo.
  const avatar = `<div class="str-head__avatar">${esc(initials(prof?.name || 'Diego Nepomuceno Marcos'))}</div>`;

  view.innerHTML = `
    <nav class="str-nav">
      <div class="str-nav__inner">
        <span class="str-nav__logo">Strava</span>
        <div class="str-nav__search"><input placeholder="Search"></div>
        <span class="str-nav__user">${esc(prof?.name || 'diegonmarcos')}</span>
      </div>
    </nav>
    <div class="str-main">
      <header class="str-head">
        ${avatar}
        <div>
          <div class="str-head__name">${esc(prof?.name || 'Diego Nepomuceno Marcos')}</div>
        </div>
        <div class="str-head__stats">
          <div class="str-head__stat"><span class="str-head__stat-value">${prof?.activities ?? activities.length}</span><span class="str-head__stat-label">Activities</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${prof?.followers ?? 0}</span><span class="str-head__stat-label">Followers</span></div>
          <div class="str-head__stat"><span class="str-head__stat-value">${prof?.following ?? 0}</span><span class="str-head__stat-label">Following</span></div>
        </div>
      </header>

      ${dashboard}

      <section class="str-section">
        <h3 class="str-section__title">Calendar</h3>
        ${monthCalendarShell}
        <div class="str-cal__heatmap-label">Last 12 months</div>
        ${heatmap}
      </section>

      ${mapDots ? `<section class="str-section">
        <h3 class="str-section__title">Map — cities visited</h3>
        ${cityMap}
      </section>` : ''}

      <div class="str-filters">
        <button class="str-filter is-active" data-type="all">All</button>
        <button class="str-filter" data-type="run">${STR_ICON.run} Run</button>
        <button class="str-filter" data-type="ride">${STR_ICON.ride} Ride</button>
        <button class="str-filter" data-type="swim">${STR_ICON.swim} Swim</button>
      </div>

      <div class="str-feed">${cards || '<p class="str-empty">No activities yet. Strava data loads once the profile is exported.</p>'}</div>
    </div>`;

  view.querySelectorAll<HTMLElement>('.str-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      view.querySelectorAll('.str-filter').forEach(b => b.classList.toggle('is-active', b === btn));
      const type = btn.dataset.type;
      view.querySelectorAll<HTMLElement>('.str-card').forEach(card => {
        card.style.display = (type === 'all' || card.dataset.type === type) ? '' : 'none';
      });
    });
  });

  const monthBody = view.querySelector<HTMLElement>('#str-month-body')!;
  const monthLabelEl = view.querySelector<HTMLElement>('#str-month-label')!;
  const shiftMonth = (delta: number) => {
    calM += delta;
    if (calM < 0) { calM = 11; calY--; }
    if (calM > 11) { calM = 0; calY++; }
    monthLabelEl.textContent = monthLabel(calY, calM);
    monthBody.innerHTML = renderMonth(calY, calM);
  };
  view.querySelector('#str-month-prev')!.addEventListener('click', () => shiftMonth(-1));
  view.querySelector('#str-month-next')!.addEventListener('click', () => shiftMonth(1));
}

// ─── YOUTUBE VIEW (playlists + video grid) ────────────────────────────────────

function renderYoutube(): void {
  const view = document.getElementById('yt-view');
  if (!view) return;
  interface YtVideo { title: string; thumbnail: string; duration?: string; channel?: string; views?: number; date?: string; url?: string }
  interface YtPlaylist { name: string; videos: YtVideo[] }
  interface YtData { profile: { channel: string; subscribers: number; videos: number }; playlists: YtPlaylist[]; videos: YtVideo[] }
  const d = (globalThis as { PORTAL_DATA?: Record<string, YtData> }).PORTAL_DATA?.youtube;
  const videos = d?.videos ?? [];
  const playlists = d?.playlists ?? [];
  const prof = d?.profile;

  const videoCard = (v: YtVideo, i: number) => {
    const media = v.thumbnail
      ? `<img class="yt-card__img" src="${esc(v.thumbnail)}" alt="${esc(v.title)}" loading="lazy">`
      : `<div class="yt-card__ph" style="background:${gradientFor(i)}">\u{25B6}</div>`;
    return `
    <a class="yt-card" href="${esc(v.url || '#')}" target="_blank" rel="noopener">
      <div class="yt-card__thumb">${media}${v.duration ? `<span class="yt-card__duration">${esc(v.duration)}</span>` : ''}</div>
      <div class="yt-card__title">${esc(v.title)}</div>
      ${v.channel ? `<div class="yt-card__channel">${esc(v.channel)}</div>` : ''}
      <div class="yt-card__meta">${v.views !== undefined ? `${v.views.toLocaleString()} views` : ''}${v.views !== undefined && v.date ? ' · ' : ''}${v.date ? esc(v.date) : ''}</div>
    </a>`;
  };

  const shelves = playlists.map(pl => `
    <section class="yt-shelf">
      <div class="yt-shelf__title">${esc(pl.name)}</div>
      <div class="yt-shelf__row">${pl.videos.map((v, i) => videoCard(v, i)).join('')}</div>
    </section>`).join('');

  const videoGrid = videos.length ? `<div class="yt-grid">${videos.map((v, i) => videoCard(v, i)).join('')}</div>` : '';

  const hasContent = playlists.length || videos.length;

  view.innerHTML = `
    <nav class="yt-nav">
      <div class="yt-nav__inner">
        <span class="yt-nav__logo">YouTube</span>
        <div class="yt-nav__search"><input placeholder="Search"></div>
        <span class="yt-nav__user">@${esc(prof?.channel || 'diegonmarcos')}</span>
      </div>
    </nav>
    <div class="yt-main">
      <header class="yt-head">
        <div>
          <div class="yt-head__title">${esc(prof?.channel || 'diegonmarcos')}</div>
          <div class="yt-head__sub">${prof?.subscribers ?? 0} subscribers · ${prof?.videos ?? videos.length} videos</div>
        </div>
      </header>
      ${hasContent ? `${shelves}${videoGrid}` : '<p class="yt-empty">No videos or playlists yet. YouTube data loads once the channel is scraped.</p>'}
    </div>`;
}

// ─── ICQ VIEW (retro Win98 IM — aggregates the real profile data) ────────────

// The real ICQ mascot: 7 green petals + 1 red petal around a yellow
// center, every shape black-outlined (classic 1998-2014 emblem).
// `dim` renders a hollow/greyed flower for the offline status.
const icqFlower = (dim = false): string => {
  const green = dim ? '#c7cbb9' : '#8fbf3f';
  const red = dim ? '#c7cbb9' : '#ef4a2b';
  const yellow = dim ? '#e4e4d8' : '#ffd400';
  const stroke = dim ? '#9a9d90' : '#1a1a12';
  const petals = Array.from({ length: 8 }, (_, i) => {
    const angle = i * 45;
    const fill = i === 0 ? red : green;
    return `<ellipse cx="8" cy="2.9" rx="1.9" ry="2.9" fill="${fill}" stroke="${stroke}" stroke-width="0.5" transform="rotate(${angle} 8 8)"/>`;
  }).join('');
  return `<svg class="icq-flower" viewBox="0 0 16 16" aria-hidden="true">${petals}<circle cx="8" cy="8" r="2.4" fill="${yellow}" stroke="${stroke}" stroke-width="0.5"/></svg>`;
};

// Same flower, spinning/pulsing — the classic "connecting..." animation.
const icqFlowerConnecting = (): string =>
  icqFlower().replace('class="icq-flower"', 'class="icq-flower icq-flower--connecting"');

const ICQ_STATUS = {
  online: false, away: false, dnd: false, offline: true,
};

function renderICQ(): void {
  const view = document.getElementById('icq-view');
  if (!view) return;
  const g = (globalThis as { PORTAL_DATA?: Record<string, IGData & LIData> }).PORTAL_DATA || {};
  const li = g.linkedin as LIData | undefined;
  const ig = g['ig2-diegonmarcos'] as IGData | undefined;

  const name = li?.profile.name || 'Diego Nepomuceno Marcos';
  const nick = ig?.profile.username || 'diegonmarcos';
  const first = name.split(' ')[0];
  const last = name.split(' ').slice(1).join(' ');
  const loc = (li?.profile.location || 'Berlin, Germany').split(',').map(s => s.trim());
  const city = loc[0] || '';
  const country = loc[loc.length - 1] || '';
  const job = li?.experience?.[0];
  const about = li?.about || ig?.profile.bio || '';
  const interests = li?.skills || [];
  const langs = li?.languages || [];
  const uin = '184-042-518'; // vintage ICQ UIN (fabricated)

  // Contact list seeded from the real friends, with a deterministic status spread.
  const statuses: (keyof typeof ICQ_STATUS)[] = ['online', 'online', 'away', 'online', 'dnd', 'away', 'offline', 'offline', 'offline'];
  const contacts = FRIENDS.map((f, i) => ({ ...f, status: statuses[i % statuses.length] }));
  const online = contacts.filter(c => c.status !== 'offline');
  const offline = contacts.filter(c => c.status === 'offline');
  const contactRow = (c: { name: string; status: keyof typeof ICQ_STATUS }) =>
    `<li class="icq-contact">${icqFlower(ICQ_STATUS[c.status])}<span>${esc(c.name)}</span></li>`;

  // User-details tabs (data-driven).
  const row = (k: string, v: string) => v ? `<div class="icq-field"><span class="icq-field__k">${esc(k)}</span><span class="icq-field__v">${esc(v)}</span></div>` : '';
  const tabs = [
    {
      id: 'main', label: 'Main', body: `
        ${row('Nickname', nick)}
        ${row('First Name', first)}
        ${row('Last Name', last)}
        ${row('ICQ#', uin)}
        ${row('Email', 'me@diegonmarcos.com')}
        ${row('Headline', li?.profile.headline || '')}`,
    },
    {
      id: 'home', label: 'Home', body: `
        ${row('City', city)}
        ${row('Country', country)}
        ${row('Homepage', li?.profile.url || 'linktree.diegonmarcos.com')}
        ${langs.length ? `<div class="icq-field"><span class="icq-field__k">Languages</span><span class="icq-field__v">${langs.map(l => esc(l.name)).join(', ')}</span></div>` : ''}`,
    },
    {
      id: 'work', label: 'Work', body: job ? `
        ${row('Company', job.company)}
        ${row('Title', job.title)}
        ${row('Since', job.dates)}
        ${row('Location', job.location || '')}` : '<p class="icq-empty">No work info.</p>',
    },
    {
      id: 'about', label: 'About', body: about
        ? `<p class="icq-about">${esc(about)}</p>`
        : '<p class="icq-empty">No about info.</p>',
    },
    {
      id: 'interests', label: 'Interests', body: interests.length
        ? `<div class="icq-interests">${interests.map(s => `<span class="icq-chip">${esc(s)}</span>`).join('')}</div>`
        : '<p class="icq-empty">No interests listed.</p>',
    },
  ];

  const winBtns = '<span class="icq-win__btns"><i>_</i><i>□</i><i>✕</i></span>';

  view.innerHTML = `
    <div class="icq-desk">
      <!-- Contact list window -->
      <div class="icq-win icq-win--list">
        <div class="icq-win__bar">${icqFlower('#ffffff')}<span class="icq-win__title">ICQ</span>${winBtns}</div>
        <div class="icq-list">
          <div class="icq-group icq-group--online">Online (${online.length})</div>
          <ul>${online.map(contactRow).join('')}</ul>
          <div class="icq-group icq-group--offline">Offline (${offline.length})</div>
          <ul>${offline.map(contactRow).join('')}</ul>
        </div>
        <div class="icq-list__foot">${icqFlower(ICQ_STATUS.online)}<span>Online</span><span class="icq-uin">#${uin}</span></div>
      </div>

      <!-- User details window -->
      <div class="icq-win icq-win--details">
        <div class="icq-win__bar icq-win__bar--alt">${icqFlower('#ffffff')}<span class="icq-win__title">User Details — ${esc(nick)}</span>${winBtns}</div>
        <div class="icq-detail">
          <div class="icq-detail__head">
            <div class="icq-detail__avatar">${esc(initials(name))}</div>
            <div>
              <div class="icq-detail__name">${esc(name)}</div>
              <div class="icq-detail__nick">"${esc(nick)}" · #${uin}</div>
            </div>
          </div>
          <div class="icq-tabs">
            ${tabs.map((t, i) => `<button class="icq-tab${i === 0 ? ' is-active' : ''}" data-icq-pane="${t.id}">${t.label}</button>`).join('')}
          </div>
          ${tabs.map((t, i) => `<div class="icq-pane${i === 0 ? ' is-active' : ''}" data-icq-pane="${t.id}">${t.body}</div>`).join('')}
        </div>
      </div>
    </div>`;

  // Tab switching within the details window.
  view.querySelectorAll<HTMLElement>('.icq-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const pane = tab.dataset.icqPane;
      view.querySelectorAll('.icq-tab').forEach(t => t.classList.toggle('is-active', t === tab));
      view.querySelectorAll<HTMLElement>('.icq-pane').forEach(pn => pn.classList.toggle('is-active', pn.dataset.icqPane === pane));
    });
  });
}

// ─── MY PROFILE (personal hub, aggregates the real social data) ──────────────

function renderMySocials(): void {
  const view = document.getElementById('me-view');
  if (!view) return;
  const g = (globalThis as { PORTAL_DATA?: Record<string, IGData & LIData> }).PORTAL_DATA || {};
  const ig = g['ig2-diegonmarcos'] as IGData | undefined;
  const li = g.linkedin as LIData | undefined;

  // Each card jumps to that network's view. Metrics + sample images are real, from the parsed data.
  const tidalD = (globalThis as { PORTAL_DATA?: Record<string, { profile: { playlists: number } }> }).PORTAL_DATA?.tidal;
  const pin = g.pinterest as unknown as PinData | undefined;
  const yt = (globalThis as { PORTAL_DATA?: Record<string, { playlists?: { videos?: { thumbnail: string }[] }[] }> }).PORTAL_DATA?.youtube;
  const shelfD = g.shelf as unknown as ShelfData | undefined;
  const vinylD = g.vinyl as unknown as VinylData | undefined;
  const barCellarD = g['bar-cellar'] as unknown as BarCellarData | undefined;
  const menuD = g['menu'] as unknown as MenuData | undefined;

  const bookCover = (isbn: string) => `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
  const vinylCover = (mbid: string) => `https://coverartarchive.org/release/${mbid}/front-250`;

  const name = li?.profile.name || ig?.profile.name || 'Diego Nepomuceno Marcos';
  const headline = li?.profile.headline || '';
  const location = li?.profile.location || '';
  const bio = ig?.profile.bio || '';
  const photo = li?.profile.photo || ig?.profile.photo;

  type Card = { theme: Theme; label: string; meta: string; color: string; imgs: string[] };
  const sections: { label: string; cards: Card[] }[] = [
    { label: 'Media', cards: [
      { theme: 'instagram-diegonmarcos', label: 'Instagram @ diegonmarcos', meta: ig ? `${ig.profile.followers.toLocaleString()} followers · ${ig.profile.posts} post${ig.profile.posts === 1 ? '' : 's'}` : 'profile', color: '#dc2743', imgs: (ig?.posts || []).slice(0, 3).map(p => p.media).filter(Boolean) },
      { theme: 'instagram-diegocmarcos_', label: 'Instagram @ diegocmarcos_', meta: 'profile', color: '#dc2743', imgs: [] },
      { theme: 'instagram-diegocnmarcos_', label: 'Instagram @ diegocnmarcos_', meta: 'profile', color: '#dc2743', imgs: [] },
      { theme: 'pinterest', label: 'Pinterest', meta: 'boards & pins', color: '#e60023', imgs: (pin?.boards || []).slice(0, 3).map(b => b.cover).filter(Boolean) },
      { theme: 'youtube', label: 'YouTube', meta: 'playlists & videos', color: '#ff0000', imgs: (yt?.playlists || []).slice(0, 3).map(p => p.videos?.[0]?.thumbnail).filter(Boolean) as string[] },
    ] },
    { label: 'Music', cards: [
      { theme: 'tidal', label: 'TIDAL', meta: tidalD ? `${tidalD.profile.playlists} playlists` : 'playlists', color: '#00ffff', imgs: [] },
      { theme: 'vinyl', label: 'Vinyl', meta: 'record store · 3D', color: '#c17f24', imgs: (vinylD?.vinyls || []).slice(0, 3).map(v => vinylCover(v.mbid)) },
    ] },
    { label: 'Books', cards: [
      { theme: 'shelf', label: 'Shelf', meta: 'book shelf · 3D', color: '#8b6914', imgs: (shelfD?.books || []).slice(0, 3).map(b => bookCover(b.isbn)) },
    ] },
    { label: 'Project', cards: [
      { theme: 'linkedin', label: 'LinkedIn', meta: li ? `${li.profile.connections} connections · ${li.profile.followers.toLocaleString()} followers` : 'profile', color: '#0a66c2', imgs: li?.profile.photo ? [li.profile.photo] : [] },
    ] },
    { label: 'Food & Drink', cards: [
      { theme: 'bar-cellar', label: 'Bar Cellar', meta: 'wine cellar · 3D', color: '#6b1a1a', imgs: [] },
      { theme: 'menu', label: 'Menu', meta: 'casa marcos · cuisine & vins', color: '#8b6914', imgs: [] },
    ] },
    { label: 'Others', cards: [
      { theme: 'orkut', label: 'Orkut', meta: 'the classic profile', color: '#e9008c', imgs: [] },
      { theme: 'icq', label: 'ICQ', meta: 'retro IM · user details', color: '#0a870a', imgs: [] },
    ] },
  ];

  const cardHtml = (c: Card) => `
          <button class="hub-card" data-goto="${c.theme}" style="--accent:${c.color}">
            <span class="hub-card__media hub-card__media--${c.imgs.length}">
              <canvas class="hub-card__fx3d" data-accent="${c.color}"></canvas>
              ${c.imgs.map(src => `<span class="hub-card__img" style="background-image:url('${esc(src)}')"></span>`).join('')}
            </span>
            <span class="hub-card__label">${c.label}</span>
            <span class="hub-card__meta">${esc(c.meta)}</span>
          </button>`;

  view.innerHTML = `
    <div class="me-hub">
      <div class="me-card">
        <canvas class="me-hero3d" id="me-hero3d"></canvas>
        ${photo ? `<img class="me-avatar" src="${esc(photo)}" alt="${esc(name)}">` : `<div class="me-avatar"></div>`}
        <h1 class="me-name">${esc(name)}</h1>
        ${headline ? `<p class="me-headline">${esc(headline)}</p>` : ''}
        ${location ? `<p class="me-loc">${esc(location)}</p>` : ''}
        ${bio ? `<p class="me-bio">${esc(bio)}</p>` : ''}
      </div>

      ${sections.map(s => `
        <div class="hub-section">
          <h2 class="hub-section__label">${esc(s.label)}</h2>
          <div class="hub-grid">
            ${s.cards.map(cardHtml).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>`;

  view.querySelectorAll<HTMLElement>('.hub-card').forEach(btn =>
    btn.addEventListener('click', () => navigate(btn.dataset.goto as Theme)));

  bootHero3D();
  bootHubCards3D();
}

// Real three.js per card: a lit, tilting plane behind each hub card's media
// area. Mouse position over the card drives the mesh tilt and light position;
// intensity ramps up on hover. One WebGLRenderer per card (only ~10 on this
// page), driven by a single shared rAF loop. Errors are swallowed — purely
// decorative, must never break navigation.
function bootHubCards3D(): void {
  const canvases = document.querySelectorAll<HTMLCanvasElement>('.hub-card__fx3d');
  if (!canvases.length) return;
  try {
    const T = THREE_NS as unknown as {
      Scene: new () => { add(...o: object[]): void };
      PerspectiveCamera: new (fov: number, asp: number, n: number, f: number) => { position: { set(x: number, y: number, z: number): void } };
      WebGLRenderer: new (opts: object) => { setSize(w: number, h: number, updateStyle?: boolean): void; setPixelRatio(r: number): void; render(s: object, c: object): void };
      PlaneGeometry: new (w: number, h: number) => object;
      MeshStandardMaterial: new (opts: object) => object;
      Mesh: new (g: object, m: object) => { rotation: { x: number; y: number } };
      AmbientLight: new (c: string, i: number) => object;
      PointLight: new (c: string, i: number, d: number) => { position: { set(x: number, y: number, z: number): void }; intensity: number };
    };

    type Rig = { renderer: InstanceType<typeof T.WebGLRenderer>; scene: InstanceType<typeof T.Scene>; camera: InstanceType<typeof T.PerspectiveCamera>; mesh: InstanceType<typeof T.Mesh>; light: InstanceType<typeof T.PointLight>; pointer: () => { mx: number; my: number; hover: boolean } };
    const rigs: Rig[] = [];

    canvases.forEach(canvas => {
      const card = canvas.closest<HTMLElement>('.hub-card');
      if (!card) return;
      const accent = canvas.dataset.accent || '#8a94ac';
      const W = canvas.clientWidth || 220;
      const H = canvas.clientHeight || 275;

      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(35, W / H, 0.1, 20);
      camera.position.set(0, 0, 3.2);

      const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      renderer.setSize(W, H, false);

      const mesh = new T.Mesh(
        new T.PlaneGeometry(2.4, 3),
        new T.MeshStandardMaterial({ color: accent, metalness: 0.3, roughness: 0.45, transparent: true, opacity: 0.4 })
      );
      scene.add(mesh as unknown as object);
      scene.add(new T.AmbientLight('#1a2030', 0.5) as unknown as object);

      const light = new T.PointLight(accent, 4, 6);
      light.position.set(0, 0, 2);
      scene.add(light as unknown as object);

      let mx = 0, my = 0, hover = false;
      card.addEventListener('pointermove', (e: PointerEvent) => {
        const r = card.getBoundingClientRect();
        mx = ((e.clientX - r.left) / r.width) * 2 - 1;
        my = ((e.clientY - r.top) / r.height) * 2 - 1;
      });
      card.addEventListener('pointerenter', () => { hover = true; });
      card.addEventListener('pointerleave', () => { hover = false; mx = 0; my = 0; });

      rigs.push({ renderer, scene, camera, mesh, light, pointer: () => ({ mx, my, hover }) });
    });

    const tick = () => {
      rigs.forEach(rig => {
        const p = rig.pointer();
        rig.mesh.rotation.y += (p.mx * 0.5 - rig.mesh.rotation.y) * 0.12;
        rig.mesh.rotation.x += (-p.my * 0.4 - rig.mesh.rotation.x) * 0.12;
        rig.light.position.set(p.mx * 1.4, -p.my * 1.1, 1.6);
        rig.light.intensity += ((p.hover ? 9 : 3) - rig.light.intensity) * 0.1;
        rig.renderer.render(rig.scene as unknown as object, rig.camera as unknown as object);
      });
      requestAnimationFrame(tick);
    };
    tick();
  } catch (err) {
    console.error('[hub3d] boot failed', err);
  }
}

// Static (single-frame, no animation loop) hero render: a lit object in a dark
// room, viewed head-on. Purely decorative — errors are swallowed so a WebGL
// failure never breaks the rest of the hub.
function bootHero3D(): void {
  const canvas = document.getElementById('me-hero3d') as HTMLCanvasElement | null;
  if (!canvas) return;
  try {
    const T = THREE_NS as unknown as {
      Scene: new () => { add(...o: object[]): void; background: unknown; fog: unknown };
      Color: new (c: string) => object;
      Fog: new (c: string, near: number, far: number) => object;
      PerspectiveCamera: new (fov: number, asp: number, n: number, f: number) => { position: { set(x: number, y: number, z: number): void }; lookAt(x: number, y: number, z: number): void; aspect: number; updateProjectionMatrix(): void };
      WebGLRenderer: new (opts: object) => { setSize(w: number, h: number): void; setPixelRatio(r: number): void; toneMapping: number; toneMappingExposure: number; outputColorSpace?: unknown; render(s: object, c: object): void };
      ACESFilmicToneMapping: number;
      SRGBColorSpace?: unknown;
      TorusKnotGeometry: new (r: number, tube: number, tSeg: number, rSeg: number) => object;
      MeshStandardMaterial: new (opts: object) => object;
      Mesh: new (g: object, m: object) => { position: { set(x: number, y: number, z: number): void }; rotation: { x: number; y: number } };
      AmbientLight: new (c: string, i: number) => object;
      PointLight: new (c: string, i: number, d: number) => { position: { set(x: number, y: number, z: number): void } };
      SpotLight: new (c: string, i: number, d: number, angle: number, penumbra: number) => { position: { set(x: number, y: number, z: number): void }; target: object };
    };

    const W = canvas.clientWidth || canvas.parentElement?.clientWidth || 320;
    const H = 220;

    const scene = new T.Scene();
    scene.background = new T.Color('#0a0c12');
    scene.fog = new T.Fog('#0a0c12', 3, 9);

    const camera = new T.PerspectiveCamera(40, W / H, 0.1, 50);
    camera.position.set(0, 0, 5.2);
    camera.lookAt(0, 0, 0);

    const renderer = new T.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.setSize(W, H);
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const geo = new T.TorusKnotGeometry(1.05, 0.34, 180, 24);
    const mat = new T.MeshStandardMaterial({ color: '#8a94ac', metalness: 0.85, roughness: 0.25 });
    const mesh = new T.Mesh(geo, mat);
    mesh.rotation.x = 0.4;
    mesh.rotation.y = -0.5;
    scene.add(mesh as unknown as object);

    // Dark-room key/rim/fill rig — the object, not the room, does the talking.
    scene.add(new T.AmbientLight('#1a2030', 0.6) as unknown as object);

    const key = new T.PointLight('#7fd4ff', 18, 12);
    key.position.set(3, 2.5, 3);
    scene.add(key as unknown as object);

    const rim = new T.PointLight('#ff5fa2', 12, 12);
    rim.position.set(-3, -1, -2);
    scene.add(rim as unknown as object);

    const fill = new T.PointLight('#ffffff', 4, 10);
    fill.position.set(0, 3, 4);
    scene.add(fill as unknown as object);

    renderer.render(scene as unknown as object, camera as unknown as object);
  } catch (err) {
    console.error('[hero3d] boot failed', err);
  }
}

// Shared by renderShelf() (vertical spine text) and renderVinyl() (horizontal
// crate/sleeve labels): draws text onto a canvas and wraps it as a CanvasTexture.
function makeLabelTexture(THREE: Record<string, unknown>, text: string, opts: { width: number; height: number; bg: string; fg: string; vertical?: boolean; rules?: boolean }): object | null {
  const canvas = document.createElement('canvas');
  canvas.width = opts.width; canvas.height = opts.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.fillStyle = opts.bg; ctx.fillRect(0, 0, opts.width, opts.height);
  ctx.fillStyle = opts.fg;
  ctx.font = `bold ${Math.floor(opts.width * 0.16)}px Georgia, serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  if (opts.vertical) {
    ctx.save();
    ctx.translate(opts.width / 2, opts.height / 2);
    ctx.rotate(Math.PI / 2);
    ctx.fillText(text.slice(0, 28), 0, 0);
    ctx.restore();
  } else {
    ctx.fillText(text.slice(0, 20), opts.width / 2, opts.height / 2);
  }
  if (opts.rules) {
    ctx.strokeStyle = opts.fg; ctx.lineWidth = Math.max(2, opts.width * 0.02);
    ctx.beginPath(); ctx.moveTo(opts.width * 0.15, opts.height * 0.1); ctx.lineTo(opts.width * 0.85, opts.height * 0.1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(opts.width * 0.15, opts.height * 0.9); ctx.lineTo(opts.width * 0.85, opts.height * 0.9); ctx.stroke();
  }
  const CanvasTexture = (THREE as unknown as { CanvasTexture: new (c: HTMLCanvasElement) => object }).CanvasTexture;
  return new CanvasTexture(canvas);
}

// ─── SHELTER ─────────────────────────────────────────────────────────────────

interface ShelfBook { title: string; author: string; isbn: string; spine: string; }
interface ShelfVinyl { title: string; artist: string; year: number; mbid: string; color: string; }
interface ShelfData { books: ShelfBook[]; vinyls: ShelfVinyl[]; }

// Darken a "#rrggbb" colour by `factor` (0..1) and return it as a 0xRRGGBB number,
// used for the plain side/back faces of books and sleeves.
function darkenHex(hex: string, factor: number): number {
  const c = parseInt(hex.replace('#', ''), 16) || 0x333333;
  const r = Math.floor(((c >> 16) & 255) * factor);
  const g = Math.floor(((c >> 8) & 255) * factor);
  const b = Math.floor((c & 255) * factor);
  return (r << 16) | (g << 8) | b;
}

// Shared swipe/drag-to-pan + momentum + click-suppression state, used by both
// renderShelf() and renderVinyl() — they lay out the same 4-row column grid.
interface DragPanState { offset: number; target: number; velocity: number; dragging: boolean; lastX: number; moved: number; step: () => void; }
function attachDragPan(canvas: HTMLElement, maxOffset: number): DragPanState {
  const state: DragPanState = { offset: 0, target: 0, velocity: 0, dragging: false, lastX: 0, moved: 0, step: () => {} };
  const clamp = (v: number) => Math.max(0, Math.min(maxOffset, v));
  const start = (x: number) => { state.dragging = true; state.lastX = x; state.moved = 0; state.velocity = 0; };
  const move = (x: number) => {
    if (!state.dragging) return;
    const dx = x - state.lastX;
    state.lastX = x;
    state.moved += Math.abs(dx);
    state.target = clamp(state.target - dx * 0.012);
    state.velocity = -dx * 0.012;
  };
  const end = () => { state.dragging = false; };
  canvas.addEventListener('pointerdown', (e: PointerEvent) => start(e.clientX));
  canvas.addEventListener('pointermove', (e: PointerEvent) => move(e.clientX));
  window.addEventListener('pointerup', end);
  canvas.addEventListener('touchstart', (e: TouchEvent) => { if (e.touches[0]) start(e.touches[0].clientX); }, { passive: true });
  canvas.addEventListener('touchmove', (e: TouchEvent) => { if (e.touches[0]) move(e.touches[0].clientX); }, { passive: true });
  canvas.addEventListener('touchend', end);
  // Per-frame update: momentum decay while not dragging, clamp, then ease offset toward target.
  state.step = () => {
    if (!state.dragging) {
      state.target = clamp(state.target + state.velocity);
      state.velocity *= 0.92;
    }
    state.offset += (state.target - state.offset) * 0.15;
  };
  return state;
}

let _shelfDone = false;

function renderShelf(): void {
  const el = document.getElementById('shelf-view');
  if (!el || _shelfDone) return;
  el.innerHTML = '<div class="view--shelf__loading">building shelf…</div>';

  const data = (globalThis as Record<string, unknown> & { PORTAL_DATA?: Record<string, unknown> }).PORTAL_DATA?.shelf as ShelfData | undefined;
  if (!data?.books?.length) { el.innerHTML = '<div class="view--shelf__error">no data</div>'; return; }

  _shelfDone = true;

  function _boot(THREE: Record<string, unknown>): void {
    el!.innerHTML = '';
    const W = el!.clientWidth || 900;
    const H = el!.clientHeight || 600;

    const Renderer = (THREE as unknown as { WebGLRenderer: new (opts: object) => { setSize(w: number, h: number): void; setPixelRatio(r: number): void; shadowMap: { enabled: boolean }; toneMapping?: number; toneMappingExposure?: number; render(s: object, c: object): void; dispose(): void; domElement: HTMLCanvasElement } }).WebGLRenderer;
    const renderer = new Renderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    el!.appendChild(renderer.domElement);

    const T = THREE as unknown as {
      Scene: new () => { add(o: object): void; background: object; fog: object };
      Color: new (c: number | string) => object;
      Fog: new (c: number, n: number, f: number) => object;
      PerspectiveCamera: new (fov: number, asp: number, n: number, f: number) => { position: { set(x: number, y: number, z: number): void; x: number }; lookAt(x: number, y: number, z: number): void; aspect: number; updateProjectionMatrix(): void };
      AmbientLight: new (c: number, i: number) => object;
      PointLight: new (c: number, i: number, d: number) => { position: { set(x: number, y: number, z: number): void }; castShadow: boolean };
      DirectionalLight: new (c: number, i: number) => { position: { set(x: number, y: number, z: number): void }; castShadow: boolean };
      MeshLambertMaterial: new (opts: object) => object;
      BoxGeometry: new (w: number, h: number, d: number) => object;
      PlaneGeometry: new (w: number, h: number) => object;
      Mesh: new (g: object, m: object | object[]) => { position: { set(x: number, y: number, z: number): void }; castShadow: boolean; receiveShadow: boolean; material: object | object[] };
      TextureLoader: new () => { crossOrigin: string; load(url: string, cb: (t: object) => void): void };
      LinearFilter: number;
      ACESFilmicToneMapping: number;
      ResizeObserver: new (cb: () => void) => { observe(el: Element): void; disconnect(): void };
    };

    const scene = new T.Scene();
    (scene as { background: object }).background = new T.Color(0x1a1208);
    // Push fog far back so it never darkens the visible shelf.
    (scene as { fog: object }).fog = new T.Fog(0x1a1208, 15, 40);

    const COL_PITCH = 2.2;
    const ROWS = 4;
    const totalCols = Math.max(3, Math.ceil(data!.books.length / ROWS));
    const maxOffset = (totalCols - 3) * COL_PITCH;
    const baseX = COL_PITCH; // centre of columns 0,1,2 at pan offset 0

    const camera = new T.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.set(baseX, 1.0, 6.8);
    camera.lookAt(baseX, 0.35, -0.5);

    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Simple, bright warm lighting — every cover must read clearly.
    scene.add(new T.AmbientLight(0xfff4e0, 0.85));
    const key = new T.DirectionalLight(0xffcc88, 1.2);
    key.position.set(-2, 5, 5); key.castShadow = true; scene.add(key);

    function box(w: number, h: number, d: number, mat: object, x: number, y: number, z: number, shadow = false): void {
      const m = new T.Mesh(new T.BoxGeometry(w, h, d), mat);
      m.position.set(x, y, z);
      if (shadow) { m.castShadow = true; m.receiveShadow = true; }
      scene.add(m);
    }

    const wood    = new T.MeshLambertMaterial({ color: 0x8B6914 });
    const dwood   = new T.MeshLambertMaterial({ color: 0x3a2413 });
    const shelf   = new T.MeshLambertMaterial({ color: 0xC49A3C });
    const floor   = new T.MeshLambertMaterial({ color: 0x6B4226 });

    const shelfWidth = totalCols * COL_PITCH + 4;
    box(shelfWidth, 0.15, 6, floor, baseX, -1.5, 0, true);
    box(shelfWidth, 4.5, 0.2, wood, baseX, 0.5, -2.2);
    box(0.2, 4.5, 4.5, wood, baseX - shelfWidth / 2, 0.5, -0.1);
    box(0.2, 4.5, 4.5, dwood, baseX + shelfWidth / 2, 0.5, -0.1);
    box(shelfWidth + 0.5, 0.3, 6, dwood, baseX, 2.85, -0.2);
    box(shelfWidth + 0.5, 0.2, 0.2, dwood, baseX, 2.6, 1.9);

    const shelfYs = [-0.85, -0.05, 0.75, 1.55];
    for (const sy of shelfYs) {
      box(shelfWidth, 0.07, 0.38, shelf, baseX, sy, -0.6, true);
      box(shelfWidth + 0.1, 1.1, 0.06, dwood, baseX, sy + 0.5, -1.05, false);
      box(shelfWidth, 0.04, 0.04, shelf, baseX, sy - 0.015, -0.41, false);
    }

    const loader = new T.TextureLoader();
    loader.crossOrigin = 'anonymous';

    // Simple uniform grid: one BoxGeometry per book, cover art on the front
    // face (+z, material index 4), dark colour on every other face.
    const BW = 0.65, BH = 1.0, BD = 0.12;
    const bookMeshes: { mesh: { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; rotation: { x: number; y: number; z: number } }; x: number; y: number; z: number }[] = [];
    for (let col = 0; col < totalCols; col++) {
      for (let row = 0; row < ROWS; row++) {
        const idx = col * ROWS + row;
        const bk = data!.books[idx % data!.books.length];
        const bx = col * COL_PITCH;
        const by = shelfYs[row] + 0.55;
        const bz = -0.6;
        const dark = darkenHex(bk.spine, 0.35);
        const darkMat = new T.MeshLambertMaterial({ color: dark });
        const mats: object[] = [darkMat, darkMat, darkMat, darkMat, darkMat, darkMat];
        const mesh = new T.Mesh(new T.BoxGeometry(BW, BH, BD), mats) as unknown as { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; rotation: { x: number; y: number; z: number }; castShadow: boolean };
        mesh.position.set(bx, by, bz);
        mesh.castShadow = true;
        scene.add(mesh as unknown as object);
        bookMeshes.push({ mesh, x: bx, y: by, z: bz });
        loader.load(`https://covers.openlibrary.org/b/isbn/${bk.isbn}-M.jpg`, (tex) => {
          (tex as { minFilter: number }).minFilter = T.LinearFilter;
          mats[4] = new T.MeshLambertMaterial({ map: tex });
          (mesh as unknown as { material: object[] }).material = mats;
        });

        // Title label plane under the book.
        const labelTex = makeLabelTexture(THREE, bk.title, { width: 256, height: 48, bg: '#00000000', fg: '#e8dcc0' });
        if (labelTex) {
          const labelMat = new (T as unknown as { MeshBasicMaterial: new (o: object) => object }).MeshBasicMaterial({ map: labelTex, transparent: true });
          const label = new T.Mesh(new T.PlaneGeometry(BW, 0.12), labelMat);
          label.position.set(bx, by - BH / 2 - 0.1, bz + BD / 2);
          scene.add(label);
        }
      }
    }

    let t = 0;
    let focused: typeof bookMeshes[number] | null = null;
    const Raycaster = (THREE as unknown as { Raycaster: new () => { setFromCamera(p: object, c: object): void; intersectObjects(o: object[]): { object: object }[] } }).Raycaster;
    const Vector2 = (THREE as unknown as { Vector2: new (x: number, y: number) => object }).Vector2;
    const raycaster = new Raycaster();
    const pan = attachDragPan(renderer.domElement, maxOffset);
    renderer.domElement.addEventListener('click', (ev: MouseEvent) => {
      if (pan.moved > 6) return;
      const r = renderer.domElement.getBoundingClientRect();
      const ndc = new Vector2(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera as unknown as object);
      const hits = raycaster.intersectObjects(bookMeshes.map(b => b.mesh as unknown as object));
      const hit = hits[0] && bookMeshes.find(b => b.mesh === hits[0].object);
      focused = hit && hit !== focused ? hit : null;
    });

    const camPos = camera.position as unknown as { x: number; y: number; z: number };
    function animate() {
      requestAnimationFrame(animate);
      t += 0.004;
      pan.step();
      for (const b of bookMeshes) {
        if (b === focused) {
          b.mesh.position.z += ((b.z + 0.8) - b.mesh.position.z) * 0.08;
          b.mesh.rotation.y += 0.01;
        } else if (b.mesh.rotation.y !== 0 || b.mesh.position.z !== b.z) {
          b.mesh.position.z += (b.z - b.mesh.position.z) * 0.08;
          b.mesh.rotation.y += (0 - b.mesh.rotation.y) * 0.08;
        }
      }
      if (focused) {
        camPos.x += (focused.x - camPos.x) * 0.06;
        camPos.y += (focused.y - camPos.y) * 0.06;
        camPos.z += (focused.z + 1.6 - camPos.z) * 0.06;
        camera.lookAt(focused.x, focused.y, focused.z);
      } else {
        const viewX = baseX + pan.offset;
        camPos.x += (viewX - camPos.x) * 0.15;
        camPos.y += (1.0 - camPos.y) * 0.06;
        camPos.z += (6.8 - camPos.z) * 0.06;
        camera.lookAt(viewX, 0.35, -0.5);
      }
      renderer.render(scene, camera);
    }
    animate();

    const ro = new (window as unknown as { ResizeObserver: new (cb: () => void) => { observe(el: Element): void; disconnect(): void } }).ResizeObserver(() => {
      const nW = el!.clientWidth, nH = el!.clientHeight;
      renderer.setSize(nW, nH);
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
    });
    ro.observe(el!);
  }

  try {
    _boot(THREE_NS as unknown as Record<string, unknown>);
  } catch (err) {
    console.error('[shelf] THREE boot failed', err);
    (window as { consoleLogs?: { captureException?: (e: unknown) => void } }).consoleLogs?.captureException?.(err);
    el!.innerHTML = `<div class="view--shelf__error">shelf failed to render: ${esc(String((err as Error)?.message ?? err))}</div>`;
  }
}

// ─── VINYL ───────────────────────────────────────────────────────────────────

interface VinylRecord { title: string; artist: string; year: number; mbid: string; color: string; }
interface VinylData { vinyls: VinylRecord[]; }

interface BarCellarWine { name: string; producer: string; year: number; region: string; variety: string; foil: string; glass: string; }
interface BarCellarData { wines: BarCellarWine[]; }

interface MenuItem { name: string; description: string; price: string; }
interface MenuSection { title: string; items: MenuItem[]; }
interface MenuData { name: string; subtitle: string; sections: MenuSection[]; }

let _vinylDone = false;

function renderVinyl(): void {
  const el = document.getElementById('vinyl-view');
  if (!el || _vinylDone) return;
  el.innerHTML = '<div class="view--vinyl__loading">loading record store…</div>';

  const data = (globalThis as Record<string, unknown> & { PORTAL_DATA?: Record<string, unknown> }).PORTAL_DATA?.vinyl as VinylData | undefined;
  if (!data?.vinyls?.length) { el.innerHTML = '<div class="view--vinyl__error">no data</div>'; return; }

  _vinylDone = true;

  function _boot(THREE: Record<string, unknown>): void {
    el!.innerHTML = '';
    const W = el!.clientWidth || 900;
    const H = el!.clientHeight || 600;

    const Renderer = (THREE as unknown as { WebGLRenderer: new (opts: object) => { setSize(w: number, h: number): void; setPixelRatio(r: number): void; shadowMap: { enabled: boolean }; render(s: object, c: object): void; dispose(): void; domElement: HTMLCanvasElement } }).WebGLRenderer;
    const renderer = new Renderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    el!.appendChild(renderer.domElement);

    const T = THREE as unknown as {
      Scene: new () => { add(o: object): void; background: object; fog: object };
      Color: new (c: number | string) => object;
      Fog: new (c: number, n: number, f: number) => object;
      PerspectiveCamera: new (fov: number, asp: number, n: number, f: number) => { position: { set(x: number, y: number, z: number): void; x: number }; lookAt(x: number, y: number, z: number): void; aspect: number; updateProjectionMatrix(): void };
      AmbientLight: new (c: number, i: number) => object;
      PointLight: new (c: number, i: number, d: number) => { position: { set(x: number, y: number, z: number): void }; castShadow: boolean };
      DirectionalLight: new (c: number, i: number) => { position: { set(x: number, y: number, z: number): void }; castShadow: boolean };
      MeshLambertMaterial: new (opts: object) => object;
      MeshBasicMaterial: new (opts: object) => object;
      BoxGeometry: new (w: number, h: number, d: number) => object;
      PlaneGeometry: new (w: number, h: number) => object;
      CylinderGeometry: new (rt: number, rb: number, h: number, seg: number) => object;
      Group: new () => { add(o: object): void; position: { set(x: number, y: number, z: number): void; x: number; y: number; z: number }; rotation: { x: number; y: number; z: number }; children: object[] };
      Mesh: new (g: object, m: object | object[]) => { position: { set(x: number, y: number, z: number): void }; castShadow: boolean; receiveShadow: boolean; material: object | object[] };
      TextureLoader: new () => { crossOrigin: string; load(url: string, cb: (t: object) => void): void };
      LinearFilter: number;
    };

    const scene = new T.Scene();
    // Dark grey-blue, not pure black — background must never read as blank.
    (scene as { background: object }).background = new T.Color(0x0d0d14);
    // No fog near the shelf: push it far past the visible grid.
    (scene as { fog: object }).fog = new T.Fog(0x0d0d14, 20, 60);

    const COL_PITCH = 2.2;
    const ROWS = 4;
    const totalCols = Math.max(3, Math.ceil(data!.vinyls.length / ROWS));
    const maxOffset = (totalCols - 3) * COL_PITCH;
    const baseX = COL_PITCH;

    const camera = new T.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.set(baseX, 1.0, 6.8);
    camera.lookAt(baseX, 0.35, -0.5);

    // Underground record-store mood, but everything must stay clearly
    // visible: a bright-enough ambient + overhead white key light carry
    // the actual visibility, with magenta/cyan only as low accent colour.
    scene.add(new T.AmbientLight(0xccd5ff, 0.55));
    const keyLight = new T.DirectionalLight(0xffffff, 0.9);
    keyLight.position.set(0, 5, 4); keyLight.castShadow = true; scene.add(keyLight);
    const magenta = new T.PointLight(0xff2288, 0.5, 10);
    magenta.position.set(-3, 1, 2); scene.add(magenta);
    const cyan = new T.PointLight(0x22ddff, 0.5, 10);
    cyan.position.set(3, 1, 2); scene.add(cyan);

    function box(w: number, h: number, d: number, mat: object, x: number, y: number, z: number, shadow = false): void {
      const m = new T.Mesh(new T.BoxGeometry(w, h, d), mat);
      m.position.set(x, y, z);
      if (shadow) { m.castShadow = true; m.receiveShadow = true; }
      scene.add(m);
    }

    // Dark crates + a concrete floor. MeshLambertMaterial throughout (not
    // MeshStandardMaterial) — Lambert reads brightly off ambient + directional
    // light alone, which is what keeps this scene visible instead of black.
    const wood    = new T.MeshLambertMaterial({ color: 0x1c1614 });
    const dwood   = new T.MeshLambertMaterial({ color: 0x0e0c0a });
    const shelf   = new T.MeshLambertMaterial({ color: 0x2a221c });
    const concrete = new T.MeshLambertMaterial({ color: 0x35353a });

    const shelfWidth = totalCols * COL_PITCH + 4;
    const floorPlane = new T.Mesh(new T.PlaneGeometry(shelfWidth + 4, 8), concrete) as unknown as { rotation: { x: number }; position: { set(x: number, y: number, z: number): void }; receiveShadow: boolean };
    floorPlane.rotation.x = -Math.PI / 2;
    floorPlane.position.set(baseX, -1.5, 0);
    floorPlane.receiveShadow = true;
    scene.add(floorPlane as unknown as object);

    box(shelfWidth, 4.5, 0.2, wood, baseX, 0.5, -2.2);
    box(0.2, 4.5, 4.5, wood, baseX - shelfWidth / 2, 0.5, -0.1);
    box(0.2, 4.5, 4.5, dwood, baseX + shelfWidth / 2, 0.5, -0.1);
    box(shelfWidth + 0.5, 0.3, 6, dwood, baseX, 2.85, -0.2);
    box(shelfWidth + 0.5, 0.2, 0.2, dwood, baseX, 2.6, 1.9);

    const shelfYs = [-0.85, -0.05, 0.75, 1.55];
    for (const sy of shelfYs) {
      // Open crate: bottom + two side walls + front lip.
      box(shelfWidth, 0.07, 0.6, dwood, baseX, sy, -0.6, true);
      box(shelfWidth, 0.12, 0.07, shelf, baseX, sy + 0.06, -0.31);
    }

    const loader = new T.TextureLoader();
    loader.crossOrigin = 'anonymous';

    // Each record: a flat sleeve (cover art on the +z face) with a plain
    // black disc + colored centre-label peeking out above it.
    const vinyls = data!.vinyls;
    const sleeveBack = new T.MeshLambertMaterial({ color: 0x111113 });
    const discMat = new T.MeshLambertMaterial({ color: 0x0a0a0a });
    const vinylMeshes: { group: { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; rotation: { x: number; y: number; z: number } }; sleeve: { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void } }; disc: { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; rotation: { x: number; y: number; z: number } }; x: number; y: number; z: number }[] = [];
    for (let col = 0; col < totalCols; col++) {
      for (let row = 0; row < ROWS; row++) {
        const idx = col * ROWS + row;
        const v = vinyls[idx % vinyls.length];
        const vx = col * COL_PITCH;
        const vy = shelfYs[row] + 0.55;
        const vz = -0.6;

        const group = new T.Group() as unknown as { add(o: object): void; position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; rotation: { x: number; y: number; z: number } };
        group.position.set(vx, vy, vz);

        const sleeveMats: object[] = [sleeveBack, sleeveBack, sleeveBack, sleeveBack, sleeveBack, sleeveBack];
        const sleeve = new T.Mesh(new T.BoxGeometry(1.0, 1.0, 0.06), sleeveMats) as unknown as { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; castShadow: boolean; material: object[] };
        sleeve.position.set(0, 0, 0);
        sleeve.castShadow = true;
        group.add(sleeve as unknown as object);

        const disc = new T.Mesh(new T.CylinderGeometry(0.5, 0.5, 0.03, 48), discMat) as unknown as { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; rotation: { x: number; y: number; z: number }; castShadow: boolean };
        disc.position.set(0, 0.65, -0.03);
        disc.rotation.x = Math.PI / 2;
        disc.castShadow = true;
        group.add(disc as unknown as object);

        const labelColor = new (T as unknown as { Color: new (c: string) => object }).Color(v.color);
        const label = new T.Mesh(new T.CylinderGeometry(0.16, 0.16, 0.032, 24), new T.MeshLambertMaterial({ color: labelColor })) as unknown as { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; rotation: { x: number } };
        label.position.set(0, 0.65, -0.01);
        label.rotation.x = Math.PI / 2;
        group.add(label as unknown as object);

        scene.add(group as unknown as object);
        vinylMeshes.push({ group, sleeve, disc, x: vx, y: vy, z: vz });
        loader.load(`https://coverartarchive.org/release/${v.mbid}/front-250`, (tex) => {
          (tex as { minFilter: number }).minFilter = T.LinearFilter;
          sleeveMats[4] = new T.MeshLambertMaterial({ map: tex });
          sleeve.material = sleeveMats;
        });

        // Title label plane under each record.
        const labelTex = makeLabelTexture(THREE, v.title, { width: 256, height: 48, bg: '#00000000', fg: v.color });
        if (labelTex) {
          const titleMat = new (T as unknown as { MeshBasicMaterial: new (o: object) => object }).MeshBasicMaterial({ map: labelTex, transparent: true });
          const titleLabel = new T.Mesh(new T.PlaneGeometry(1.0, 0.12), titleMat);
          titleLabel.position.set(vx, vy - 0.62, vz + 0.04);
          scene.add(titleLabel);
        }
      }
    }

    let t = 0;
    let focused: typeof vinylMeshes[number] | null = null;
    const Raycaster = (THREE as unknown as { Raycaster: new () => { setFromCamera(p: object, c: object): void; intersectObjects(o: object[], recursive?: boolean): { object: object }[] } }).Raycaster;
    const Vector2 = (THREE as unknown as { Vector2: new (x: number, y: number) => object }).Vector2;
    const raycaster = new Raycaster();
    const pan = attachDragPan(renderer.domElement, maxOffset);
    renderer.domElement.addEventListener('click', (ev: MouseEvent) => {
      if (pan.moved > 6) return;
      const r = renderer.domElement.getBoundingClientRect();
      const ndc = new Vector2(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
      raycaster.setFromCamera(ndc, camera as unknown as object);
      const hits = raycaster.intersectObjects(vinylMeshes.map(v => v.group as unknown as object), true);
      const hit = hits[0] && vinylMeshes.find(v => (v.group as unknown as { children: object[] }).children.includes(hits[0].object) || v.group === hits[0].object);
      focused = hit && hit !== focused ? hit : null;
    });

    const camPos = camera.position as unknown as { x: number; y: number; z: number };
    function animate() {
      requestAnimationFrame(animate);
      t += 0.004;
      pan.step();
      for (const vm of vinylMeshes) {
        if (vm === focused) {
          vm.sleeve.position.z += (0.4 - vm.sleeve.position.z) * 0.08;
          vm.disc.position.y += (1.1 - vm.disc.position.y) * 0.08;
          vm.disc.rotation.z += 0.12;
        } else {
          vm.sleeve.position.z += (0 - vm.sleeve.position.z) * 0.08;
          vm.disc.position.y += (0.65 - vm.disc.position.y) * 0.08;
        }
      }
      if (focused) {
        camPos.x += (focused.x - camPos.x) * 0.06;
        camPos.y += (focused.y - camPos.y) * 0.06;
        camPos.z += (focused.z + 1.6 - camPos.z) * 0.06;
        camera.lookAt(focused.x, focused.y, focused.z);
      } else {
        const viewX = baseX + pan.offset;
        camPos.x += (viewX - camPos.x) * 0.15;
        camPos.y += (1.0 - camPos.y) * 0.06;
        camPos.z += (6.8 - camPos.z) * 0.06;
        camera.lookAt(viewX, 0.35, -0.5);
      }
      renderer.render(scene, camera);
    }
    animate();

    const ro = new (window as unknown as { ResizeObserver: new (cb: () => void) => { observe(el: Element): void; disconnect(): void } }).ResizeObserver(() => {
      const nW = el!.clientWidth, nH = el!.clientHeight;
      renderer.setSize(nW, nH);
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
    });
    ro.observe(el!);
  }

  try {
    _boot(THREE_NS as unknown as Record<string, unknown>);
  } catch (err) {
    console.error('[vinyl] THREE boot failed', err);
    (window as { consoleLogs?: { captureException?: (e: unknown) => void } }).consoleLogs?.captureException?.(err);
    el!.innerHTML = `<div class="view--vinyl__error">vinyl failed to render: ${esc(String((err as Error)?.message ?? err))}</div>`;
  }
}

// ─── BAR CELLAR ──────────────────────────────────────────────────────────────

let _barCellarDone = false;
function renderBarCellar(): void {
  const el = document.getElementById('bar-cellar-view');
  if (!el || _barCellarDone) return;
  el.innerHTML = '<div class="view--bar-cellar__loading">uncorking…</div>';

  const data = (globalThis as Record<string, unknown> & { PORTAL_DATA?: Record<string, unknown> }).PORTAL_DATA?.['bar-cellar'] as BarCellarData | undefined;
  if (!data?.wines?.length) { el.innerHTML = '<div class="view--bar-cellar__error">no data</div>'; return; }

  _barCellarDone = true;

  function _boot(T: Record<string, unknown>): void {
    el!.innerHTML = '';
    const wines = data!.wines;
    const COLS = Math.ceil(wines.length / 3);
    const COL_PITCH = 1.8;
    const ROW_PITCH = 1.5;
    const ROWS = 3;
    const totalW = COLS * COL_PITCH;
    const baseX = -totalW / 2 + COL_PITCH / 2;

    const Scene = T.Scene as new () => Record<string, unknown>;
    const PerspectiveCamera = T.PerspectiveCamera as new (fov: number, aspect: number, near: number, far: number) => Record<string, unknown>;
    const WebGLRenderer = T.WebGLRenderer as new (opts: Record<string, unknown>) => Record<string, unknown>;
    const AmbientLight = T.AmbientLight as new (color: number, intensity: number) => Record<string, unknown>;
    const PointLight = T.PointLight as new (color: number, intensity: number, distance: number) => Record<string, unknown>;
    const MeshLambertMaterial = T.MeshLambertMaterial as new (opts: Record<string, unknown>) => Record<string, unknown>;
    const MeshBasicMaterial = T.MeshBasicMaterial as new (opts: Record<string, unknown>) => Record<string, unknown>;
    const CylinderGeometry = T.CylinderGeometry as new (rTop: number, rBot: number, h: number, seg: number) => Record<string, unknown>;
    const BoxGeometry = T.BoxGeometry as new (x: number, y: number, z: number) => Record<string, unknown>;
    const Mesh = T.Mesh as new (geo: Record<string, unknown>, mat: Record<string, unknown>) => Record<string, unknown>;
    const Color = T.Color as new (hex: number | string) => Record<string, unknown>;
    const Fog = T.Fog as new (color: number, near: number, far: number) => Record<string, unknown>;

    const scene = new Scene();
    (scene as unknown as { fog: unknown; background: unknown }).fog = new Fog(0x0a0806, 8, 22);
    (scene as unknown as { background: unknown }).background = new Color(0x0a0806);

    const w = el!.clientWidth || 800, h = el!.clientHeight || 600;
    const camera = new PerspectiveCamera(50, w / h, 0.1, 30) as unknown as {
      position: { x: number; y: number; z: number };
      aspect: number;
      lookAt(x: number, y: number, z: number): void;
      updateProjectionMatrix(): void;
    };
    camera.position.x = baseX; camera.position.y = 0.5; camera.position.z = 7.5;
    camera.lookAt(baseX, 0.5, 0);

    const renderer = new WebGLRenderer({ antialias: true }) as unknown as {
      setSize(w: number, h: number): void;
      setPixelRatio(r: number): void;
      render(scene: Record<string, unknown>, camera: Record<string, unknown>): void;
      domElement: HTMLCanvasElement;
    };
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    el!.appendChild(renderer.domElement);

    // Lighting — warm candlelight
    const amb = new AmbientLight(0x3a2010, 0.6) as unknown as { position?: unknown };
    (scene as unknown as { add(o: unknown): void }).add(amb);
    const candle1 = new PointLight(0xf5a623, 2.5, 12) as unknown as { position: { set(x: number, y: number, z: number): void } };
    candle1.position.set(baseX - 2, 2.5, 4);
    (scene as unknown as { add(o: unknown): void }).add(candle1);
    const candle2 = new PointLight(0xf5a623, 2.0, 12) as unknown as { position: { set(x: number, y: number, z: number): void } };
    candle2.position.set(baseX + 2, 2.5, 4);
    (scene as unknown as { add(o: unknown): void }).add(candle2);

    const add = (o: unknown) => (scene as unknown as { add(o: unknown): void }).add(o);

    function mesh(geo: Record<string, unknown>, mat: Record<string, unknown>, x: number, y: number, z: number): Record<string, unknown> {
      const m = new Mesh(geo, mat);
      (m as unknown as { position: { set(x: number, y: number, z: number): void } }).position.set(x, y, z);
      add(m);
      return m;
    }

    function box(sx: number, sy: number, sz: number, mat: Record<string, unknown>, x: number, y: number, z: number) {
      mesh(new BoxGeometry(sx, sy, sz), mat, x, y, z);
    }

    // Materials
    const stone = new MeshLambertMaterial({ color: 0x2a2218 });
    const wood  = new MeshLambertMaterial({ color: 0x5c3a1a });
    const dwood = new MeshLambertMaterial({ color: 0x3c2510 });

    // Stone floor and back wall
    box(totalW + 6, 0.15, 8, stone, baseX, -1.2, 0);
    box(totalW + 6, 6, 0.2, stone, baseX, 1.5, -2.5);
    box(0.2, 6, 8, stone, baseX - totalW / 2 - 2.5, 1.5, 0);
    box(0.2, 6, 8, stone, baseX + totalW / 2 + 2.5, 1.5, 0);

    // Rack frame
    box(totalW + 0.3, 0.12, 0.5, dwood, baseX, -1.0, -0.8);
    box(totalW + 0.3, 0.12, 0.5, dwood, baseX, -1.0 + ROW_PITCH, -0.8);
    box(totalW + 0.3, 0.12, 0.5, dwood, baseX, -1.0 + ROW_PITCH * 2, -0.8);
    box(totalW + 0.3, 0.12, 0.5, dwood, baseX, -1.0 + ROW_PITCH * 3, -0.8);
    box(0.12, ROW_PITCH * 3 + 0.3, 0.5, wood, baseX - totalW / 2, -1.0 + ROW_PITCH * 1.5, -0.8);
    box(0.12, ROW_PITCH * 3 + 0.3, 0.5, wood, baseX + totalW / 2, -1.0 + ROW_PITCH * 1.5, -0.8);
    for (let c = 0; c <= COLS; c++) {
      box(0.08, ROW_PITCH * 3 + 0.3, 0.5, dwood, baseX - totalW / 2 + c * COL_PITCH, -1.0 + ROW_PITCH * 1.5, -0.8);
    }

    // Wine bottles — CylinderGeometry rotated so axis goes into screen
    wines.forEach((wine, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      if (row >= ROWS) return;
      const bx = baseX - totalW / 2 + COL_PITCH * 0.5 + col * COL_PITCH;
      const by = -0.9 + row * ROW_PITCH;
      const bz = -1.0;

      const glassColor = parseInt(wine.glass.replace('#', ''), 16);
      const foilColor  = parseInt(wine.foil.replace('#', ''), 16);
      const glassMat = new MeshLambertMaterial({ color: glassColor });
      const foilMat  = new MeshBasicMaterial({ color: foilColor });

      // Bottle body (cylinder along Z axis)
      const bodyGeo = new CylinderGeometry(0.1, 0.1, 1.0, 20);
      const body = new Mesh(bodyGeo, glassMat);
      (body as unknown as { position: { set(x: number, y: number, z: number): void }; rotation: { x: number } }).position.set(bx, by, bz);
      (body as unknown as { rotation: { x: number } }).rotation.x = Math.PI / 2;
      add(body);

      // Neck
      const neckGeo = new CylinderGeometry(0.05, 0.07, 0.28, 16);
      const neck = new Mesh(neckGeo, glassMat);
      (neck as unknown as { position: { set(x: number, y: number, z: number): void }; rotation: { x: number } }).position.set(bx, by, bz - 0.62);
      (neck as unknown as { rotation: { x: number } }).rotation.x = Math.PI / 2;
      add(neck);

      // Foil cap
      const foilGeo = new CylinderGeometry(0.055, 0.055, 0.12, 16);
      const foil = new Mesh(foilGeo, foilMat);
      (foil as unknown as { position: { set(x: number, y: number, z: number): void }; rotation: { x: number } }).position.set(bx, by, bz - 0.81);
      (foil as unknown as { rotation: { x: number } }).rotation.x = Math.PI / 2;
      add(foil);
    });

    // Pan state
    let panX = baseX;
    let targetX = baseX;
    let dragStart = -1;
    let dragStartPanX = baseX;

    el!.addEventListener('pointerdown', (e: PointerEvent) => {
      dragStart = e.clientX;
      dragStartPanX = targetX;
    });
    el!.addEventListener('pointermove', (e: PointerEvent) => {
      if (dragStart < 0) return;
      const dx = (e.clientX - dragStart) / el!.clientWidth * totalW * 1.2;
      targetX = Math.max(baseX - totalW * 0.3, Math.min(baseX + totalW * 0.3, dragStartPanX - dx));
    });
    el!.addEventListener('pointerup', () => { dragStart = -1; });
    el!.addEventListener('pointerleave', () => { dragStart = -1; });

    let t = 0;
    function animate() {
      requestAnimationFrame(animate);
      t += 0.01;
      panX += (targetX - panX) * 0.08;
      // Gentle candle flicker
      (candle1 as unknown as { intensity: number }).intensity = 2.5 + Math.sin(t * 3.7) * 0.3;
      (candle2 as unknown as { intensity: number }).intensity = 2.0 + Math.sin(t * 4.1 + 1.2) * 0.25;
      camera.position.x += (panX - camera.position.x) * 0.1;
      camera.lookAt(panX, 0.5, 0);
      renderer.render(scene as unknown as Record<string, unknown>, camera as unknown as Record<string, unknown>);
    }
    animate();

    const ro = new (window as unknown as { ResizeObserver: new (cb: () => void) => { observe(el: Element): void; disconnect(): void } }).ResizeObserver(() => {
      const nW = el!.clientWidth, nH = el!.clientHeight;
      renderer.setSize(nW, nH);
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
    });
    ro.observe(el!);
  }

  try {
    _boot(THREE_NS as unknown as Record<string, unknown>);
  } catch (err) {
    console.error('[bar-cellar] THREE boot failed', err);
    (window as { consoleLogs?: { captureException?: (e: unknown) => void } }).consoleLogs?.captureException?.(err);
    el!.innerHTML = `<div class="view--bar-cellar__error">bar cellar failed to render: ${esc(String((err as Error)?.message ?? err))}</div>`;
  }
}

// ─── MENU ────────────────────────────────────────────────────────────────────

function renderMenu(): void {
  const el = document.getElementById('menu-view');
  if (!el) return;

  const data = (globalThis as Record<string, unknown> & { PORTAL_DATA?: Record<string, unknown> }).PORTAL_DATA?.['menu'] as MenuData | undefined;
  if (!data?.sections?.length) { el.innerHTML = '<div class="view--menu__error">no data</div>'; return; }

  const sections = data.sections.map(s => `
    <div class="menu-card__section">
      <h3 class="menu-card__section-title">${esc(s.title)}</h3>
      ${s.items.map(item => `
        <div class="menu-card__item">
          <div class="menu-card__item-info">
            <span class="menu-card__item-name">${esc(item.name)}</span>
            <span class="menu-card__item-desc">${esc(item.description)}</span>
          </div>
          <span class="menu-card__item-price">${esc(item.price)} €</span>
        </div>
      `).join('')}
    </div>
  `).join('');

  el.innerHTML = `
    <div class="menu-card">
      <header class="menu-card__header">
        <h1 class="menu-card__name">${esc(data.name)}</h1>
        <p class="menu-card__subtitle">${esc(data.subtitle)}</p>
      </header>
      ${sections}
      <footer class="menu-card__footer">bon appétit &middot; bom proveito</footer>
    </div>
  `;
}

// ─── THEME SWITCHER ──────────────────────────────────────────────────────────

type Theme = 'mysocials' | 'orkut' | 'instagram-diegonmarcos' | 'instagram-diegocmarcos_' | 'instagram-diegocnmarcos_' | 'linkedin' | 'pinterest' | 'tidal' | 'youtube' | 'icq' | 'shelf' | 'vinyl' | 'bar-cellar' | 'menu';
const THEMES: Theme[] = ['mysocials', 'orkut', 'instagram-diegonmarcos', 'instagram-diegocmarcos_', 'instagram-diegocnmarcos_', 'linkedin', 'pinterest', 'tidal', 'youtube', 'icq', 'shelf', 'vinyl', 'bar-cellar', 'menu'];

// Each theme is a real static page (orkut.html, instagram.html, ...) — except
// 'mysocials', whose page is index.html (the site's front door).
// Every page ships the full bundle, so switching just flips the in-DOM view — no fetch needed.
function pageFor(theme: Theme): string {
  return theme === 'mysocials' ? 'index.html' : `${theme}.html`;
}

// The 3 instagram-*.html pages are symlinked to one shared source file (same
// markup, same bundle), so a baked-in data-theme attribute can't tell them
// apart anymore. The page's own filename is the one thing that's actually
// distinct per URL, so it's authoritative over any baked attribute.
function themeFromFilename(): Theme | null {
  const name = (location.pathname.split('/').pop() || '').replace(/\.html$/, '') || 'index';
  const theme = name === 'index' ? 'mysocials' : name;
  return (THEMES as string[]).includes(theme) ? (theme as Theme) : null;
}

// CSS is split per theme (style.css = shared base; style-<key>.css = that theme's
// own rules) so each page ships only the CSS it needs. In-place theme switches
// (everything except the 3 Instagram account pages, which do a real page load)
// need their target theme's stylesheet lazy-loaded on first switch.
function cssKeyFor(theme: Theme): string {
  return theme.startsWith('instagram-') ? 'instagram' : theme;
}
function ensureThemeCss(theme: Theme): void {
  const href = `style-${cssKeyFor(theme)}.css`;
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function setTheme(theme: Theme): void {
  ensureThemeCss(theme);
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.classList.toggle('is-active', (btn as HTMLElement).dataset.themeBtn === theme);
  });
  window.scrollTo(0, 0);
}

// Swap in place AND update the address bar to the theme's real page, so
// reload/share/back-forward all land on a real, bookmarkable file.
//
// Exception: the three Instagram accounts each bake their OWN PORTAL_DATA into
// their own HTML file (instagram-<account>.html) and render #ig-view once at
// init from that page's data-theme. Swapping data-theme in place does NOT
// re-render #ig-view, so an in-place switch between accounts silently kept
// showing the previous account's posts under the new account's URL/nav state.
// A real page load is required here — same as any other bookmarkable link.
function navigate(theme: Theme, push = true): void {
  if (theme.startsWith('instagram-')) {
    location.href = pageFor(theme);
    return;
  }
  setTheme(theme);
  if (push) history.pushState({ theme }, '', pageFor(theme));
}

function initThemeSwitcher(): void {
  // The page's own baked-in data-theme is authoritative on load (deep links work).
  const current = (document.documentElement.dataset.theme as Theme) || 'mysocials';
  setTheme(THEMES.includes(current) ? current : 'mysocials');
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', () => navigate((btn as HTMLElement).dataset.themeBtn as Theme));
  });
  window.addEventListener('popstate', (e) => {
    const theme = (e.state?.theme as Theme) || 'mysocials';
    setTheme(theme);
  });
}

// ─── INIT ───────────────────────────────────────────────────────────────────

function init(): void {
  const urlTheme = themeFromFilename();
  if (urlTheme) document.documentElement.setAttribute('data-theme', urlTheme);

  renderFriends();
  renderScraps();
  renderCommunities();
  renderTestimonials();
  renderPhotos();
  renderInstagram();
  renderLinkedin();
  renderPinterest();
  renderTidal();
  renderYoutube();
  renderICQ();
  renderMySocials();
  renderShelf();
  renderVinyl();
  renderBarCellar();
  renderMenu();
  initThemeSwitcher();

  // Animate trust meter bars on load
  setTimeout(() => {
    document.querySelectorAll('.trust-meter__fill').forEach(bar => {
      (bar as HTMLElement).style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  }, 300);
}

// ─── SELF-DIAGNOSTIC ──────────────────────────────────────────────────────────
// Gated debug report — zero cost unless the URL has `?debug` / `#debug`, or the
// caller runs `window.__debugReport()`. Dumps ONE JSON blob covering the things
// that actually strand this page: which service-worker/bundle is controlling the
// tab, what caches exist (names carry the build hash), whether the theme nav is
// really wired (live click-test), and what element sits under the nav pixel.
// Copy-paste the blob back to reproduce any "works here, not there" report.
async function debugReport(): Promise<Record<string, unknown>> {
  const nav = document.getElementById('theme-switch');
  const btns = [...document.querySelectorAll<HTMLElement>('[data-theme-btn]')];

  // Live wiring test: click a non-active pill, see if the theme changes, restore.
  const before = document.documentElement.dataset.theme ?? '';
  const probe = btns.find(b => b.dataset.themeBtn !== before);
  probe?.click();
  const navWired = document.documentElement.dataset.theme !== before;
  if (navWired && before) setTheme(before as Theme); // restore

  // Which SW/bundle controls this tab, and what caches exist.
  let controller = 'none', regs: string[] = [], cacheInfo: Record<string, number> = {};
  try {
    controller = navigator.serviceWorker?.controller?.scriptURL ?? 'none';
    const rs = await navigator.serviceWorker?.getRegistrations?.() ?? [];
    regs = rs.map(r => [r.installing && 'installing', r.waiting && 'waiting', r.active && `active:${r.active.scriptURL}`].filter(Boolean).join(','));
    for (const k of await caches.keys()) cacheInfo[k] = (await (await caches.open(k)).keys()).length;
  } catch { /* SW/caches unavailable (file://, private mode) — leave defaults */ }

  // What is actually under the nav pixel.
  let hit = 'n/a';
  if (nav) {
    const r = nav.getBoundingClientRect();
    const el = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    hit = `<${el?.tagName}.${(el?.className || '').toString().trim()}> inNav:${nav.contains(el)}`;
  }

  const report = {
    url: location.href,
    theme: document.documentElement.dataset.theme,
    navButtons: btns.length,
    navWired,             // false ⇒ the running bundle never wired the nav (stale cache)
    swController: controller,
    swRegistrations: regs,
    caches: cacheInfo,    // cache names embed the build hash — stale name ⇒ old bundle
    navHitTest: hit,
    ua: navigator.userAgent,
  };
  console.info('[mySocials debug]', JSON.stringify(report));
  return report;
}
(window as unknown as { __debugReport: typeof debugReport }).__debugReport = debugReport;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

if (/\bdebug\b/.test(location.search) || /\bdebug\b/.test(location.hash)) {
  // Run after init so the wiring test reflects the real post-init state.
  setTimeout(() => { void debugReport(); }, 500);
}
