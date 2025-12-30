// ==========================================
// CARTO - ARCANUM TRIAD
// TypeScript Main Script
// ==========================================

// ==========================================
// TYPES
// ==========================================

interface CardElement {
    el: HTMLElement;
    isHero: boolean;
    heroId: string | null;
    isSupport: boolean;
    supportIndex?: number;
    index?: number;
}

interface SequenceItem {
    pct: number;
    heroId: string;
    sup: [number, number];
    txt: string;
}

interface HeroConfig {
    past: string;
    pres: string;
    fut: string;
}

interface CardMeta {
    name: string;
    mean: string;
}

// ==========================================
// CONSTANTS
// ==========================================

const RWS_ASSETS: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_03_Empress.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/RWS_Tarot_04_Emperor.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8d/RWS_Tarot_05_Hierophant.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/36/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f7/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/30/RWS_Tarot_10_Wheel_of_Fortune.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e0/RWS_Tarot_11_Justice.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2b/RWS_Tarot_12_Hanged_Man.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f8/RWS_Tarot_14_Temperance.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/55/RWS_Tarot_15_Devil.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/dc/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d1/RWS_Tarot_17_Star.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7f/RWS_Tarot_18_Moon.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d0/RWS_Tarot_20_Judgement.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/RWS_Tarot_21_World.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3c/Cups01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/Cups02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5e/Cups05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Wands09.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg'
];

const SUPPORT_IMGS: string[] = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8_of_hearts.svg/300px-8_of_hearts.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/23/The_Ship_-_Nuremberg_chronicle_-_f_10r.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Queen_of_spades_en.svg/300px-Queen_of_spades_en.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/2/2d/Breviary_Grimani_-_Book_Cover.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ace_of_diamonds.svg/300px-Ace_of_diamonds.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg'
];

const HERO_CONFIG: HeroConfig = {
    past: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg',
    pres: 'https://upload.wikimedia.org/wikipedia/commons/8/88/RWS_Tarot_02_High_Priestess.jpg',
    fut: 'https://upload.wikimedia.org/wikipedia/commons/1/17/RWS_Tarot_19_Sun.jpg'
};

const DECK_SIZE = 78;

// ==========================================
// STATE
// ==========================================

const table = document.getElementById('table') as HTMLElement;
let deck: CardElement[] = [];

// ==========================================
// CORE FUNCTIONS
// ==========================================

function init(): void {
    table.innerHTML = '';
    deck = [];

    for (let i = 0; i < DECK_SIZE; i++) {
        const img = RWS_ASSETS[i % RWS_ASSETS.length];
        createCard(i, img);
    }

    assignHero(10, 'hero-past', HERO_CONFIG.past);
    assignHero(35, 'hero-pres', HERO_CONFIG.pres);
    assignHero(60, 'hero-fut', HERO_CONFIG.fut);
}

function createCard(i: number, imgUrl: string): void {
    const card = document.createElement('div');
    card.className = 'card';

    const x = Math.random() * (window.innerWidth + 100) - 50;
    const y = Math.random() * (window.innerHeight + 100) - 50;
    const rot = Math.random() * 360;

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    card.style.setProperty('--rot', `${rot}deg`);
    card.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;
    card.style.animationDelay = `${Math.random() * 5}s`;

    card.innerHTML = `
        <div class="card-inner">
            <div class="face face-front" style="background-image: url('${imgUrl}')"></div>
            <div class="face face-back"></div>
        </div>
    `;

    table.appendChild(card);
    deck.push({ el: card, isHero: false, heroId: null, isSupport: false, index: i });
}

function assignHero(idx: number, heroId: string, imgUrl: string): void {
    const c = deck[idx];
    c.isHero = true;
    c.heroId = heroId;
    const frontFace = c.el.querySelector('.face-front') as HTMLElement;
    frontFace.style.backgroundImage = `url('${imgUrl}')`;
}

async function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==========================================
// CARD ACTIONS
// ==========================================

function injectSupports(x: number, y: number): void {
    SUPPORT_IMGS.forEach((url, i) => {
        const card = document.createElement('div');
        card.className = 'card is-flipped';
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
        card.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 6 - 3}deg)`;
        card.style.zIndex = (200 + i).toString();

        card.innerHTML = `
            <div class="card-inner">
                <div class="face face-front" style="background-image: url('${url}'); background-size: contain; background-color:#fffdf0;"></div>
                <div class="face face-back"></div>
            </div>
        `;

        table.appendChild(card);
        deck.push({ el: card, isSupport: true, supportIndex: i });
    });
}

async function dealSpreads(): Promise<void> {
    const cardY = window.innerHeight * 0.4;
    const SEQUENCE: SequenceItem[] = [
        { pct: 0.17, heroId: 'hero-past', sup: [0, 1], txt: 'txt-past' },
        { pct: 0.5, heroId: 'hero-pres', sup: [2, 3], txt: 'txt-pres' },
        { pct: 0.83, heroId: 'hero-fut', sup: [4, 5], txt: 'txt-fut' }
    ];

    let globalZ = 300;

    for (const item of SEQUENCE) {
        const xPos = window.innerWidth * item.pct;
        const s1 = deck.find(c => c.supportIndex === item.sup[0])!;
        const s2 = deck.find(c => c.supportIndex === item.sup[1])!;
        const hero = deck.find(c => c.heroId === item.heroId)!;

        s1.el.style.zIndex = (globalZ++).toString();
        s1.el.classList.add('revealed-support');
        s1.el.style.left = `${xPos - 50}px`;
        s1.el.style.top = `${cardY + 40}px`;
        s1.el.style.transform = `translate(-50%, -50%) rotate(-12deg)`;

        s2.el.style.zIndex = (globalZ++).toString();
        s2.el.classList.add('revealed-support');
        s2.el.style.left = `${xPos + 50}px`;
        s2.el.style.top = `${cardY + 40}px`;
        s2.el.style.transform = `translate(-50%, -50%) rotate(12deg)`;

        await wait(200);

        hero.el.style.zIndex = (globalZ + 50).toString();
        hero.el.classList.add('revealed-tarot');
        hero.el.style.left = `${xPos}px`;
        hero.el.style.top = `${cardY}px`;
        hero.el.style.transform = `translate(-50%, -50%) rotate(0deg)`;

        await wait(600);

        hero.el.classList.remove('is-flipped');
        await wait(250);
        s1.el.classList.remove('is-flipped');
        s2.el.classList.remove('is-flipped');

        document.getElementById(item.txt)?.classList.add('visible');
        await wait(800);
    }

    document.getElementById('finalPhrase')?.classList.add('visible');
    document.getElementById('reloadContainer')?.classList.add('visible');
}

// ==========================================
// GALLERY
// ==========================================

function getCardMeta(i: number): CardMeta {
    const suits = ['Cups', 'Swords', 'Wands', 'Pentacles'];
    const ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];
    const majors = ['The Fool', 'The Magician', 'High Priestess', 'Empress', 'Emperor', 'Hierophant', 'Lovers', 'Chariot', 'Strength', 'Hermit', 'Wheel of Fortune', 'Justice', 'Hanged Man', 'Death', 'Temperance', 'Devil', 'Tower', 'Star', 'Moon', 'Sun', 'Judgement', 'World'];

    if (i < 22) {
        return { name: majors[i], mean: "Major Arcana" };
    }

    const suitIndex = Math.floor((i - 22) / 14);
    const rankIndex = (i - 22) % 14;

    if (suitIndex < 4) {
        return { name: `${ranks[rankIndex]} of ${suits[suitIndex]}`, mean: `Minor Arcana - ${suits[suitIndex]}` };
    }

    return { name: "Card", mean: "" };
}

function renderGallery(): void {
    const grid = document.getElementById('galleryGrid');
    if (!grid || grid.children.length > 0) return;

    for (let i = 0; i < RWS_ASSETS.length; i++) {
        const meta = getCardMeta(i);
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
            <div class="g-card-img" style="background-image: url('${RWS_ASSETS[i]}')"></div>
            <div class="g-name">${meta.name}</div>
            <div class="g-mean">${meta.mean}</div>
        `;
        grid.appendChild(div);
    }
}

// ==========================================
// EVENT HANDLERS
// ==========================================

document.getElementById('triggerObj')?.addEventListener('click', async () => {
    const triggerEl = document.getElementById('triggerObj') as HTMLElement;
    const mainTitle = document.getElementById('mainTitle') as HTMLElement;
    const btnInfo = document.getElementById('btnInfo') as HTMLElement;

    triggerEl.style.opacity = '0';
    triggerEl.style.pointerEvents = 'none';
    mainTitle.style.opacity = '0';
    btnInfo.style.opacity = '0';
    btnInfo.style.pointerEvents = 'none';

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    deck.forEach((c, i) => {
        c.el.style.animation = 'none';
        c.el.classList.add('is-flipped');
        c.el.style.left = `${cx}px`;
        c.el.style.top = `${cy}px`;
        c.el.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 10 - 5}deg)`;
        c.el.style.zIndex = i.toString();
    });

    await wait(1200);
    injectSupports(cx, cy);
    await wait(600);

    document.querySelectorAll('.card').forEach(el => el.classList.add('shuffling'));
    await wait(1000);
    document.querySelectorAll('.card').forEach(el => el.classList.remove('shuffling'));

    dealSpreads();
});

document.getElementById('btnRestart')?.addEventListener('click', () => {
    const triggerEl = document.getElementById('triggerObj') as HTMLElement;
    const mainTitle = document.getElementById('mainTitle') as HTMLElement;
    const btnInfo = document.getElementById('btnInfo') as HTMLElement;
    const reloadContainer = document.getElementById('reloadContainer') as HTMLElement;
    const finalPhrase = document.getElementById('finalPhrase') as HTMLElement;

    triggerEl.style.opacity = '1';
    triggerEl.style.pointerEvents = 'auto';
    mainTitle.style.opacity = '1';
    btnInfo.style.opacity = '1';
    btnInfo.style.pointerEvents = 'auto';
    reloadContainer.classList.remove('visible');
    finalPhrase.classList.remove('visible');

    document.querySelectorAll('.reading-text').forEach(el => el.classList.remove('visible'));

    init();
});

document.getElementById('btnInfo')?.addEventListener('click', () => {
    document.getElementById('galleryView')?.classList.add('active');
    renderGallery();
});

document.getElementById('btnCloseGallery')?.addEventListener('click', () => {
    document.getElementById('galleryView')?.classList.remove('active');
});

// ==========================================
// INITIALIZATION
// ==========================================

window.onload = init;
