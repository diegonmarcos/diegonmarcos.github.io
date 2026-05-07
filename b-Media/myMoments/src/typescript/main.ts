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

// ─── INIT ───────────────────────────────────────────────────────────────────

function init(): void {
  renderFriends();
  renderScraps();
  renderCommunities();
  renderTestimonials();
  renderPhotos();

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
