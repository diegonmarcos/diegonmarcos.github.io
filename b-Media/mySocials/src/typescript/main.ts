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
};

function gradientFor(i: number): string {
  const a = PHOTO_COLORS[i % PHOTO_COLORS.length];
  const b = AVATAR_COLORS[i % AVATAR_COLORS.length];
  return `linear-gradient(135deg, ${a}, ${b})`;
}

function renderInstagram(): void {
  const view = document.getElementById('ig-view');
  if (!view) return;

  const stories = FRIENDS.map(f => `
    <div class="ig-story">
      <div class="ig-story__ring"><div class="ig-story__avatar" style="background:${f.color}">${f.initial}</div></div>
      <span class="ig-story__name">${f.name.split(' ')[0].toLowerCase()}</span>
    </div>`).join('');

  const posts = SCRAPS.map((s, i) => {
    const likes = 40 + ((i * 137) % 900);
    return `
    <article class="ig-post">
      <div class="ig-post__head">
        <div class="ig-post__avatar" style="background:${s.color}">${s.initial}</div>
        <span class="ig-post__user">${s.author.split(' ')[0].toLowerCase()}_${s.initial.toLowerCase()}</span>
        <span class="ig-post__time">${s.time}</span>
        <span class="ig-post__more">···</span>
      </div>
      <div class="ig-post__image" style="background:${gradientFor(i)}">\u{1F4F7}</div>
      <div class="ig-post__actions">
        ${IG_ICON.heart}${IG_ICON.comment}${IG_ICON.share}<span class="ig-post__save">${IG_ICON.save}</span>
      </div>
      <div class="ig-post__likes">${likes.toLocaleString()} likes</div>
      <p class="ig-post__caption"><span class="ig-post__user">${s.author.split(' ')[0].toLowerCase()}_${s.initial.toLowerCase()}</span>${s.text}</p>
      <div class="ig-post__comments">View all ${2 + (i % 30)} comments</div>
      <div class="ig-post__addcomment"><input placeholder="Add a comment..."><button>Post</button></div>
    </article>`;
  }).join('');

  const suggestions = FRIENDS.slice(0, 5).map(f => `
    <div class="ig-sugg">
      <div class="ig-sugg__avatar" style="background:${f.color}">${f.initial}</div>
      <div>
        <div class="ig-sugg__name">${f.name.split(' ')[0].toLowerCase()}_${f.initial.toLowerCase()}</div>
        <div class="ig-sugg__meta">Followed by others</div>
      </div>
      <span class="ig-sugg__follow">Follow</span>
    </div>`).join('');

  view.innerHTML = `
    <nav class="ig-nav">
      <div class="ig-nav__inner">
        <a href="#" class="ig-nav__logo">My Socials</a>
        <div class="ig-nav__search"><input placeholder="Search"></div>
        <div class="ig-nav__icons">${IG_ICON.home}${IG_ICON.heart}${IG_ICON.comment}${IG_ICON.share}</div>
      </div>
    </nav>
    <div class="ig-main">
      <div class="ig-feed">
        <div class="ig-stories">${stories}</div>
        ${posts}
      </div>
      <aside class="ig-aside">
        <div class="ig-me">
          <div class="ig-me__avatar" style="background:${AVATAR_COLORS[3]}">D</div>
          <div>
            <div class="ig-me__name">diego_marcos</div>
            <div class="ig-me__sub">Diego N. Marcos</div>
          </div>
          <span class="ig-me__switch">Switch</span>
        </div>
        <div class="ig-suggest__head"><span>Suggestions for you</span><span>See All</span></div>
        ${suggestions}
      </aside>
    </div>`;
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

function renderLinkedin(): void {
  const view = document.getElementById('li-view');
  if (!view) return;

  const navItem = (icon: string, label: string) => `<div class="li-nav__item">${icon}<span>${label}</span></div>`;

  // Feed: testimonials read as recommendations, scraps as posts.
  const feedSource = [...TESTIMONIALS, ...SCRAPS.map(s => ({ author: s.author, date: s.time, text: s.text }))];
  const posts = feedSource.map((p, i) => {
    const f = FRIENDS[i % FRIENDS.length];
    const reactions = 12 + ((i * 91) % 400);
    return `
    <article class="li-card li-post">
      <div class="li-post__head">
        <div class="li-post__avatar" style="background:${f.color}">${p.author.charAt(0)}</div>
        <div>
          <div class="li-post__name">${p.author}</div>
          <div class="li-post__headline">Software Engineer · ${p.date}</div>
        </div>
      </div>
      <p class="li-post__text">${p.text}</p>
      <div class="li-post__stats"><span>\u{1F44D}❤️ ${reactions}</span><span>·</span><span>${2 + (i % 40)} comments</span></div>
      <div class="li-post__actions">
        <div class="li-act">${LI_ICON.like}<span>Like</span></div>
        <div class="li-act">${LI_ICON.comment}<span>Comment</span></div>
        <div class="li-act">${LI_ICON.repost}<span>Repost</span></div>
        <div class="li-act">${LI_ICON.send}<span>Send</span></div>
      </div>
    </article>`;
  }).join('');

  const news = COMMUNITIES.slice(0, 5).map(c => `
    <div class="li-newsitem">
      <div class="li-newsitem__head">${c.name}</div>
      <div class="li-newsitem__meta">${(c.members / 1000).toFixed(0)}K followers</div>
    </div>`).join('');

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
    <div class="li-main">
      <div class="li-rail-left">
        <div class="li-card li-profile">
          <div class="li-profile__banner"></div>
          <div class="li-profile__avatar" style="background:${AVATAR_COLORS[3]}">D</div>
          <div class="li-profile__body">
            <div class="li-profile__name">Diego N. Marcos</div>
            <div class="li-profile__tag">Software Engineer & Explorer · Berlin</div>
            <div class="li-profile__stats">
              <div class="li-profile__stat"><span>Connections</span><strong>142</strong></div>
              <div class="li-profile__stat"><span>Profile views</span><strong>95</strong></div>
            </div>
          </div>
        </div>
      </div>
      <div class="li-feed">
        <div class="li-card li-startpost">
          <div class="li-startpost__avatar" style="background:${AVATAR_COLORS[3]}">D</div>
          <button>Start a post</button>
        </div>
        ${posts}
      </div>
      <div class="li-rail-right">
        <div class="li-card li-news">
          <div class="li-news__title">My Socials News</div>
          ${news}
        </div>
      </div>
    </div>`;
}

// ─── THEME SWITCHER ──────────────────────────────────────────────────────────

type Theme = 'orkut' | 'instagram' | 'linkedin';
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
  setTheme(['orkut', 'instagram', 'linkedin'].includes(saved) ? saved : 'orkut');
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
