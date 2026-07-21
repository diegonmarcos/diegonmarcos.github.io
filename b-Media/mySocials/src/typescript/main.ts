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
  reels: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="8" x2="21" y2="8"/><line x1="8" y1="3" x2="10" y2="8"/><line x1="14" y1="3" x2="16" y2="8"/><polygon points="10 11 15 13.5 10 16" fill="currentColor" stroke="none"/></svg>',
  tagged: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>',
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
  const d = (globalThis as { PORTAL_DATA?: Record<string, IGData> }).PORTAL_DATA?.instagram;
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

  // Posts pane: real photo(s) first (newest first), then a fabricated feed so the grid looks
  // full like the app. Meta media filenames are Snowflake-style IDs — monotonically increasing
  // with time — so sorting the trailing numeric ID descending reproduces newest-first order
  // without needing a real per-post timestamp (the export doesn't capture one).
  const mediaId = (url: string) => Number(url.match(/(\d+)(?=\.\w+$)/)?.[1] || 0);
  const sortedPosts = d.posts.slice().sort((a, b) => mediaId(b.media) - mediaId(a.media));
  const POST_GRID = 30; // ~10 rows of a 3-col grid
  const captions = [...d.saved, ...d.liked].map(s => s.caption).filter(Boolean);
  const realPosts = sortedPosts.map((post, i) => `<a class="ig-tile" href="#" data-post-idx="${i}"><img src="${post.media}" alt="post"></a>`);
  const fabricated = Array.from({ length: Math.max(0, POST_GRID - realPosts.length) }, (_, i) => `
    <a class="ig-tile ig-tile--post" href="#" style="background:${gradientFor(i)}">
      <span class="ig-tile__cap">${esc(captions[i % (captions.length || 1)] || '')}</span>
    </a>`);
  const postsPane = realPosts.length || fabricated.length
    ? [...realPosts, ...fabricated].join('')
    : '<p class="ig-empty">No posts yet.</p>';

  // Reels + Tagged panes — fabricated for the MVP (live-scrape via scrappers-api later).
  const REEL_ICON = '<svg class="ig-tile__ov" viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/></svg>';
  const reelsPane = Array.from({ length: 12 }, (_, i) => `
    <a class="ig-tile ig-tile--post" href="#" style="background:${gradientFor(i + 5)}">${REEL_ICON}
      <span class="ig-tile__cap">${esc(captions[(i + 2) % (captions.length || 1)] || '')}</span>
    </a>`).join('');
  const taggedPane = Array.from({ length: 9 }, (_, i) => `
    <a class="ig-tile ig-tile--post" href="#" style="background:${gradientFor(i + 9)}">
      <span class="ig-tile__badge">@${esc(p.username)}</span>
    </a>`).join('');

  const commentsPane = d.comments.length
    ? d.comments.map(c => `
      <div class="ig-comment">
        <div class="ig-comment__text">${esc(c.text)}</div>
        <div class="ig-comment__meta">${c.owner ? '@' + esc(c.owner) + ' · ' : ''}${esc(c.time || '')}</div>
      </div>`).join('')
    : '<p class="ig-empty">No comments.</p>';

  const grid = (html: string) => `<div class="ig-grid">${html}</div>`;
  // No real profile-picture field in the export — a random post photo isn't the profile
  // pic, so use an initials placeholder instead of misrepresenting one as the other.
  const avatar = `<div class="ig-head__avatar ig-head__avatar--ph">${esc(initials(p.name))}</div>`;

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
        <button class="ig-pill" data-pane="saved">${IG_ICON.save}<span>Saved</span><em>${num(d.saved.length)}</em></button>
        <button class="ig-pill" data-pane="liked">${IG_ICON.heart}<span>Liked</span><em>${num(d.liked.length)}</em></button>
        <button class="ig-pill" data-pane="comments">${IG_ICON.comment}<span>Comments</span><em>${num(d.comments.length)}</em></button>
      </div>

      <div class="ig-pane is-active" data-pane="posts">${grid(postsPane)}</div>
      <div class="ig-pane" data-pane="reels">${grid(reelsPane)}</div>
      <div class="ig-pane" data-pane="tagged">${grid(taggedPane)}</div>
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
  const openPost = (idx: number) => {
    const post = sortedPosts[idx];
    if (!post) return;
    activePost = post.media_all?.length ? post.media_all : [post.media];
    activeIdx = 0;
    renderPostFrame();
    postComments.innerHTML = '<p class="ig-empty">No per-post comment data in this export.</p>';
    postModal.classList.add('is-open');
  };
  view.querySelectorAll<HTMLElement>('.ig-tile[data-post-idx]').forEach(tile =>
    tile.addEventListener('click', e => { e.preventDefault(); openPost(Number(tile.dataset.postIdx)); }));
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
  education: { school: string; degree: string; dates: string }[];
  skills: string[];
  languages: { name: string; proficiency: string }[];
  projects: { title: string; description: string; url: string; dates: string }[];
}

// LinkedIn export text has NO real line breaks — this profile writes its own structure
// inline: '---' divides sections, '@word' opens a section with a label, and '- ' repeated
// marks a bullet list. Parse those conventions into real <p>/<ul>/<li> markup instead of
// dumping one unbroken run-on paragraph.
function formatLI(text: string): string {
  const linkify = (s: string) => esc(s).replace(/(https?:\/\/\S+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  const blocks = text.split(/\s*-{3,}\s*/).map(b => b.trim()).filter(Boolean);
  return blocks.map(block => {
    const m = block.match(/^@(\S+)\s+([\s\S]*)$/);
    const label = m?.[1];
    const body = (m ? m[2] : block).trim().replace(/^>\s*/, '');
    const heading = label ? `<div class="li-desc__label">${esc(label)}</div>` : '';
    const items = body.split(/\s-\s/).map(s => s.trim()).filter(Boolean);
    return heading + (items.length >= 3
      ? `<ul class="li-desc__list">${items.map(it => `<li>${linkify(it)}</li>`).join('')}</ul>`
      : `<p class="li-desc__p">${linkify(body)}</p>`);
  }).join('');
}

function initials(name: string): string {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w.charAt(0).toUpperCase()).join('');
}

// Per-section visible-item caps. LinkedIn dumps a lot of rows; show a handful
// and tuck the rest behind a "Show N more" toggle so no box runs away.
const LI_CAP: Record<string, number> = { experience: 3, education: 3, skills: 12, projects: 2 };

// Render `items` with only `limit` visible; the remainder go into a
// display:contents wrapper revealed by the trailing "Show N more" button
// (toggle handler wired in renderLinkedin via event delegation).
function liCap<T>(items: T[], limit: number, render: (x: T) => string, noun = 'more'): string {
  if (items.length <= limit) return items.map(render).join('');
  const shown = items.slice(0, limit).map(render).join('');
  const rest = items.slice(limit).map(render).join('');
  const label = `Show ${items.length - limit} ${noun}`;
  return `${shown}<div class="li-more-wrap">${rest}</div>` +
    `<button type="button" class="li-more" aria-expanded="false" data-label="${label}">${label}</button>`;
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

  // Everything shows, unconditionally — no "Show N more" cap, no hidden rows.
  const expBody = d.experience.length
    ? liCap(d.experience, LI_CAP.experience, e => `
      <div class="li-item">
        <div class="li-item__logo">${esc(e.company.charAt(0))}</div>
        <div>
          <div class="li-item__title">${esc(e.title)}</div>
          <div class="li-item__sub">${esc(e.company)}</div>
          <div class="li-item__meta">${esc(e.dates)}${e.location ? ' · ' + esc(e.location) : ''}</div>
          ${e.description ? `<div class="li-item__desc">${formatLI(e.description)}</div>` : ''}
        </div>
      </div>`, 'roles')
    : needExport;

  const eduBody = d.education.length
    ? liCap(d.education, LI_CAP.education, e => `
      <div class="li-item">
        <div class="li-item__logo">${esc(e.school.charAt(0))}</div>
        <div>
          <div class="li-item__title">${esc(e.school)}</div>
          <div class="li-item__sub">${esc(e.degree)}</div>
          <div class="li-item__meta">${esc(e.dates)}</div>
        </div>
      </div>`, 'schools')
    : needExport;

  const skillsBody = d.skills.length
    ? `<div class="li-skills">${liCap(d.skills, LI_CAP.skills, s => `<span class="li-skill">${esc(s)}</span>`, 'skills')}</div>`
    : needExport;

  const aboutBody = d.about
    ? `<div class="li-about">${formatLI(d.about)}</div>`
    : needExport;

  const langBody = d.languages.length
    ? d.languages.map(l => `
      <div class="li-lang">
        <span class="li-lang__name">${esc(l.name)}</span>
        <span class="li-lang__level">${esc(l.proficiency)}</span>
      </div>`).join('')
    : needExport;

  const projBody = d.projects.length
    ? liCap(d.projects, LI_CAP.projects, pr => `
      <div class="li-item li-item--proj">
        <div>
          <div class="li-item__title">${esc(pr.title)}${pr.url ? ` · <a href="${esc(pr.url)}" target="_blank" rel="noopener">link</a>` : ''}</div>
          ${pr.dates ? `<div class="li-item__meta">${esc(pr.dates)}</div>` : ''}
          <div class="li-item__desc">${formatLI(pr.description)}</div>
        </div>
      </div>`, 'projects')
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

  // "Show N more" toggles: reveal/hide the capped remainder in place.
  view.querySelectorAll<HTMLButtonElement>('.li-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrap = btn.previousElementSibling;
      if (!(wrap instanceof HTMLElement) || !wrap.classList.contains('li-more-wrap')) return;
      const open = wrap.classList.toggle('li-more-wrap--open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Show less' : (btn.dataset.label ?? 'Show more');
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
  interface TidPlaylist { name: string; tracks: number; duration_s?: number; description?: string; cover: string; url: string }
  interface TidData { profile: { username: string; playlists: number; tracks: number }; playlists: TidPlaylist[] }
  const d = (globalThis as { PORTAL_DATA?: Record<string, TidData> }).PORTAL_DATA?.tidal;
  const lists = d?.playlists ?? [];
  const prof = d?.profile;

  const fmtDur = (s?: number) => {
    if (!s) return '';
    const h = Math.floor(s / 3600), m = Math.round((s % 3600) / 60);
    return h ? `${h}h ${m}m` : `${m} min`;
  };

  const cards = lists.map((p, i) => {
    const media = p.cover
      ? `<img class="tid-card__img" src="${esc(p.cover)}" alt="${esc(p.name)}" loading="lazy">`
      : `<div class="tid-card__ph" style="background:${gradientFor(i)}">\u{266B}</div>`;
    return `
    <a class="tid-card" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="tid-card__cover">${media}<span class="tid-card__play">▶</span></div>
      <div class="tid-card__name">${esc(p.name)}</div>
      <div class="tid-card__meta">${p.tracks} tracks${p.duration_s ? ' · ' + fmtDur(p.duration_s) : ''}</div>
    </a>`;
  }).join('');

  view.innerHTML = `
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
        <div class="tid-head__sub">${prof?.playlists ?? lists.length} playlists · ${prof?.tracks ?? 0} tracks</div>
      </header>
      <div class="tid-grid">${cards || '<p class="tid-empty">Playlists load once the Tidal profile ID is set.</p>'}</div>
    </div>`;
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
  const ig = g.instagram as IGData | undefined;

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

function renderMyProfile(): void {
  const view = document.getElementById('me-view');
  if (!view) return;
  const g = (globalThis as { PORTAL_DATA?: Record<string, IGData & LIData> }).PORTAL_DATA || {};
  const ig = g.instagram as IGData | undefined;
  const li = g.linkedin as LIData | undefined;

  const name = li?.profile.name || ig?.profile.name || 'Diego Nepomuceno Marcos';
  const headline = li?.profile.headline || '';
  const location = li?.profile.location || '';
  const bio = ig?.profile.bio || '';

  // Each card jumps to that network's view. Metrics are real, from the parsed data.
  const tidalD = (globalThis as { PORTAL_DATA?: Record<string, { profile: { playlists: number } }> }).PORTAL_DATA?.tidal;

  const cards: { theme: Theme; label: string; meta: string; color: string }[] = [
    { theme: 'linkedin', label: 'LinkedIn', meta: li ? `${li.profile.connections} connections · ${li.profile.followers.toLocaleString()} followers` : 'profile', color: '#0a66c2' },
    { theme: 'instagram', label: 'Instagram', meta: ig ? `${ig.profile.followers.toLocaleString()} followers · ${ig.profile.posts} post${ig.profile.posts === 1 ? '' : 's'}` : 'profile', color: '#dc2743' },
    { theme: 'pinterest', label: 'Pinterest', meta: 'boards & pins', color: '#e60023' },
    { theme: 'tidal', label: 'TIDAL', meta: tidalD ? `${tidalD.profile.playlists} playlists` : 'playlists', color: '#00ffff' },
    { theme: 'strava', label: 'Strava', meta: 'activities & routes', color: '#fc5200' },
    { theme: 'youtube', label: 'YouTube', meta: 'playlists & videos', color: '#ff0000' },
    { theme: 'orkut', label: 'Orkut', meta: 'the classic profile', color: '#e9008c' },
    { theme: 'icq', label: 'ICQ', meta: 'retro IM · user details', color: '#0a870a' },
  ];

  view.innerHTML = `
    <div class="me-hub">
      <div class="me-card">
        <div class="me-avatar"></div>
        <h1 class="me-name">${esc(name)}</h1>
        ${headline ? `<p class="me-headline">${esc(headline)}</p>` : ''}
        ${location ? `<p class="me-loc">${esc(location)}</p>` : ''}
        ${bio ? `<p class="me-bio">${esc(bio)}</p>` : ''}
      </div>
      <div class="me-links">
        ${cards.map(c => `
          <button class="me-link" data-goto="${c.theme}" style="--accent:${c.color}">
            <span class="me-link__dot"></span>
            <span class="me-link__body">
              <span class="me-link__name">${c.label}</span>
              <span class="me-link__meta">${esc(c.meta)}</span>
            </span>
            <span class="me-link__arrow">→</span>
          </button>`).join('')}
      </div>
    </div>`;

  view.querySelectorAll<HTMLElement>('.me-link').forEach(btn =>
    btn.addEventListener('click', () => navigate(btn.dataset.goto as Theme)));
}

// ─── THEME SWITCHER ──────────────────────────────────────────────────────────

type Theme = 'myprofile' | 'orkut' | 'instagram' | 'linkedin' | 'pinterest' | 'tidal' | 'strava' | 'youtube' | 'icq';
const THEMES: Theme[] = ['myprofile', 'orkut', 'instagram', 'linkedin', 'pinterest', 'tidal', 'strava', 'youtube', 'icq'];

// Each theme is a real static page (orkut.html, instagram.html, ...; myprofile = index.html).
// Every page ships the full bundle, so switching just flips the in-DOM view — no fetch needed.
function pageFor(theme: Theme): string {
  return theme === 'myprofile' ? './' : `${theme}.html`;
}

function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.classList.toggle('is-active', (btn as HTMLElement).dataset.themeBtn === theme);
  });
  window.scrollTo(0, 0);
}

// Swap in place AND update the address bar to the theme's real page, so
// reload/share/back-forward all land on a real, bookmarkable file.
function navigate(theme: Theme, push = true): void {
  setTheme(theme);
  if (push) history.pushState({ theme }, '', pageFor(theme));
}

function initThemeSwitcher(): void {
  // The page's own baked-in data-theme is authoritative on load (deep links work).
  const current = (document.documentElement.dataset.theme as Theme) || 'myprofile';
  setTheme(THEMES.includes(current) ? current : 'myprofile');
  document.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', () => navigate((btn as HTMLElement).dataset.themeBtn as Theme));
  });
  window.addEventListener('popstate', (e) => {
    const theme = (e.state?.theme as Theme) || 'myprofile';
    setTheme(theme);
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
  renderTidal();
  renderStrava();
  renderYoutube();
  renderICQ();
  renderMyProfile();
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
