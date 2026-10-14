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
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg',
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
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Tarot_Nine_of_Wands.jpg',
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

// Lenormand 36 cards - using symbolic representations since no complete public domain deck exists
const LENORMAND_CARDS: { name: string; symbol: string; meaning: string }[] = [
    { name: '1. Rider', symbol: '🏇', meaning: 'News, messages, arrival' },
    { name: '2. Clover', symbol: '🍀', meaning: 'Luck, opportunity, small fortune' },
    { name: '3. Ship', symbol: '🚢', meaning: 'Travel, journey, trade' },
    { name: '4. House', symbol: '🏠', meaning: 'Home, family, stability' },
    { name: '5. Tree', symbol: '🌳', meaning: 'Health, growth, roots' },
    { name: '6. Clouds', symbol: '☁️', meaning: 'Confusion, doubt, uncertainty' },
    { name: '7. Snake', symbol: '🐍', meaning: 'Deception, complications, wisdom' },
    { name: '8. Coffin', symbol: '⚰️', meaning: 'Endings, transformation, grief' },
    { name: '9. Bouquet', symbol: '💐', meaning: 'Gift, beauty, happiness' },
    { name: '10. Scythe', symbol: '🔪', meaning: 'Sudden change, danger, harvest' },
    { name: '11. Whip', symbol: '🏏', meaning: 'Conflict, repetition, discussion' },
    { name: '12. Birds', symbol: '🐦', meaning: 'Communication, gossip, couples' },
    { name: '13. Child', symbol: '👶', meaning: 'New beginning, innocence, small' },
    { name: '14. Fox', symbol: '🦊', meaning: 'Cunning, work, deception' },
    { name: '15. Bear', symbol: '🐻', meaning: 'Power, boss, mother figure' },
    { name: '16. Stars', symbol: '⭐', meaning: 'Hope, guidance, success' },
    { name: '17. Stork', symbol: '🦢', meaning: 'Change, improvement, pregnancy' },
    { name: '18. Dog', symbol: '🐕', meaning: 'Loyalty, friendship, trust' },
    { name: '19. Tower', symbol: '🏰', meaning: 'Authority, isolation, institution' },
    { name: '20. Garden', symbol: '🌷', meaning: 'Social events, public, gathering' },
    { name: '21. Mountain', symbol: '⛰️', meaning: 'Obstacle, delay, challenge' },
    { name: '22. Crossroads', symbol: '🔀', meaning: 'Choices, decisions, options' },
    { name: '23. Mice', symbol: '🐭', meaning: 'Loss, worry, theft' },
    { name: '24. Heart', symbol: '❤️', meaning: 'Love, romance, emotions' },
    { name: '25. Ring', symbol: '💍', meaning: 'Commitment, contract, cycle' },
    { name: '26. Book', symbol: '📖', meaning: 'Secrets, knowledge, education' },
    { name: '27. Letter', symbol: '✉️', meaning: 'Documents, written message' },
    { name: '28. Man', symbol: '👨', meaning: 'Male querent or significant male' },
    { name: '29. Woman', symbol: '👩', meaning: 'Female querent or significant female' },
    { name: '30. Lily', symbol: '🌸', meaning: 'Peace, maturity, sensuality' },
    { name: '31. Sun', symbol: '☀️', meaning: 'Success, joy, vitality' },
    { name: '32. Moon', symbol: '🌙', meaning: 'Intuition, emotions, recognition' },
    { name: '33. Key', symbol: '🔑', meaning: 'Solution, importance, certainty' },
    { name: '34. Fish', symbol: '🐟', meaning: 'Finances, business, abundance' },
    { name: '35. Anchor', symbol: '⚓', meaning: 'Stability, perseverance, goal' },
    { name: '36. Cross', symbol: '✝️', meaning: 'Burden, fate, spirituality' }
];

let currentDeck: 'tarot' | 'lenormand' = 'tarot';

// ==========================================
// TREE OF LIFE CONSTANTS
// ==========================================

interface ToLPosition {
    id: number;
    name: string;
    hebrew: string;
    meaning: string;
    description: string;
    pillar: 'left' | 'middle' | 'right';
    // Position as fraction of viewport: xPct, row index
    xPct: number;
    row: number;
}

const TOL_POSITIONS: ToLPosition[] = [
    { id: 1, name: 'Keter', hebrew: 'Crown', meaning: 'Spiritual purpose', description: 'The root of the issue. The spiritual "why."', pillar: 'middle', xPct: 0.5, row: 0 },
    { id: 2, name: 'Chokmah', hebrew: 'Wisdom', meaning: 'Creative force', description: 'The initial impulse or creative energy.', pillar: 'right', xPct: 0.75, row: 1 },
    { id: 3, name: 'Binah', hebrew: 'Understanding', meaning: 'Structure', description: 'The structure that gives the idea form.', pillar: 'left', xPct: 0.25, row: 1 },
    { id: 4, name: 'Chesed', hebrew: 'Mercy', meaning: 'Expansion', description: 'What is expanding or being given freely.', pillar: 'right', xPct: 0.75, row: 3 },
    { id: 5, name: 'Gevurah', hebrew: 'Severity', meaning: 'Boundaries', description: 'Obstacles or things that need to be cut away.', pillar: 'left', xPct: 0.25, row: 3 },
    { id: 6, name: 'Tiferet', hebrew: 'Beauty', meaning: 'Balance', description: 'The heart of the matter. Finding harmony.', pillar: 'middle', xPct: 0.5, row: 4 },
    { id: 7, name: 'Netzach', hebrew: 'Victory', meaning: 'Desires', description: 'Your emotions, desires, and what keeps you going.', pillar: 'right', xPct: 0.75, row: 5 },
    { id: 8, name: 'Hod', hebrew: 'Splendor', meaning: 'Intellect', description: 'Logic, communication, and mental processing.', pillar: 'left', xPct: 0.25, row: 5 },
    { id: 9, name: 'Yesod', hebrew: 'Foundation', meaning: 'Subconscious', description: 'Hidden patterns and the bridge to reality.', pillar: 'middle', xPct: 0.5, row: 6 },
    { id: 10, name: 'Malkuth', hebrew: 'Kingdom', meaning: 'Outcome', description: 'The physical manifestation. The grounded result.', pillar: 'middle', xPct: 0.5, row: 7 },
];

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
        deck.push({ el: card, isHero: false, heroId: null, isSupport: true, supportIndex: i });
    });
}

async function dealSpreads(): Promise<void> {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw <= 900;

    const SEQUENCE: SequenceItem[] = [
        { pct: 0.17, heroId: 'hero-past', sup: [0, 1], txt: 'txt-past' },
        { pct: 0.5, heroId: 'hero-pres', sup: [2, 3], txt: 'txt-pres' },
        { pct: 0.83, heroId: 'hero-fut', sup: [4, 5], txt: 'txt-fut' }
    ];

    // Enable scrolling for the reading layout
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.body.style.minHeight = '100vh';

    let globalZ = 300;
    const revealH = isMobile ? 180 : (vw >= 1200 ? 290 : 220);
    const supportH = isMobile ? 95 : 115;

    // Mobile: stack vertically; Desktop: 3 columns
    let cardY: number;

    if (isMobile) {
        cardY = 80;
        let currentY = cardY;

        for (let i = 0; i < SEQUENCE.length; i++) {
            const item = SEQUENCE[i];
            const xPos = vw / 2;
            const s1 = deck.find(c => c.supportIndex === item.sup[0])!;
            const s2 = deck.find(c => c.supportIndex === item.sup[1])!;
            const hero = deck.find(c => c.heroId === item.heroId)!;

            s1.el.style.zIndex = (globalZ++).toString();
            s1.el.classList.add('revealed-support');
            s1.el.style.left = `${xPos - 40}px`;
            s1.el.style.top = `${currentY + 30}px`;
            s1.el.style.transform = `translate(-50%, -50%) rotate(-12deg)`;

            s2.el.style.zIndex = (globalZ++).toString();
            s2.el.classList.add('revealed-support');
            s2.el.style.left = `${xPos + 40}px`;
            s2.el.style.top = `${currentY + 30}px`;
            s2.el.style.transform = `translate(-50%, -50%) rotate(12deg)`;

            await wait(200);

            hero.el.style.zIndex = (globalZ + 50).toString();
            hero.el.classList.add('revealed-tarot');
            hero.el.style.left = `${xPos}px`;
            hero.el.style.top = `${currentY}px`;
            hero.el.style.transform = `translate(-50%, -50%) rotate(0deg)`;

            await wait(600);

            hero.el.classList.remove('is-flipped');
            await wait(250);
            s1.el.classList.remove('is-flipped');
            s2.el.classList.remove('is-flipped');

            // Position reading text under this card
            const txtEl = document.getElementById(item.txt);
            if (txtEl) {
                txtEl.classList.add('visible');
                txtEl.style.position = 'absolute';
                txtEl.style.left = '5%';
                txtEl.style.width = '90%';
                txtEl.style.maxWidth = 'none';
                txtEl.style.top = `${currentY + revealH / 2 + supportH / 2 + 15}px`;
                txtEl.style.zIndex = '500';
            }

            currentY += revealH / 2 + supportH / 2 + 160;
            await wait(800);
        }

        // Final phrase after all cards+texts
        const finalEl = document.getElementById('finalPhrase');
        if (finalEl) {
            finalEl.classList.add('visible');
            finalEl.style.top = `${currentY + 10}px`;
            finalEl.style.bottom = 'auto';
        }

        // Extend body to fit all content
        document.body.style.minHeight = `${currentY + 100}px`;

    } else {
        // Desktop: 3 columns
        cardY = vh * 0.25;

        for (const item of SEQUENCE) {
            const xPos = vw * item.pct;
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

            // Position reading text under its card
            const txtEl = document.getElementById(item.txt);
            if (txtEl) {
                txtEl.classList.add('visible');
                txtEl.style.position = 'absolute';
                txtEl.style.left = `${xPos}px`;
                txtEl.style.transform = 'translateX(-50%)';
                txtEl.style.top = `${cardY + revealH / 2 + supportH / 2 + 20}px`;
                txtEl.style.zIndex = '500';
            }

            await wait(800);
        }

        // Final phrase below reading texts
        const textBottom = cardY + revealH / 2 + supportH / 2 + 200;
        const finalEl = document.getElementById('finalPhrase');
        if (finalEl) {
            finalEl.classList.add('visible');
            finalEl.style.top = `${textBottom}px`;
            finalEl.style.bottom = 'auto';
        }

        document.body.style.minHeight = `${textBottom + 80}px`;
    }

    document.getElementById('reloadContainer')?.classList.add('visible');
}

// ==========================================
// TREE OF LIFE SPREAD
// ==========================================

function shuffleArray<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

async function dealTreeOfLife(): Promise<void> {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    // Reference layout dimensions (designed at this size, then scaled to fit)
    const refW = 1000;
    const refH = 1200;
    const scaleX = vw / refW;
    const scaleY = vh / refH;
    const scale = Math.min(scaleX, scaleY, 1);
    const offsetX = (vw - refW * scale) / 2;
    const offsetY = (vh - refH * scale) / 2;

    // Pick 10 random cards
    const shuffled = shuffleArray(RWS_ASSETS);
    const pickedCards = shuffled.slice(0, 10);
    const pickedIndices = pickedCards.map(url => RWS_ASSETS.indexOf(url));

    // Clear the ToL reading container
    const tolContainer = document.getElementById('tolReadingContainer') as HTMLElement;
    tolContainer.innerHTML = '';

    // Scale both table and text container identically
    const transformCSS = `scale(${scale})`;
    const originCSS = 'top left';

    table.style.transformOrigin = originCSS;
    table.style.transform = transformCSS;
    table.style.width = `${refW}px`;
    table.style.height = `${refH}px`;
    table.style.left = `${offsetX}px`;
    table.style.top = `${offsetY}px`;

    tolContainer.style.transformOrigin = originCSS;
    tolContainer.style.transform = transformCSS;
    tolContainer.style.width = `${refW}px`;
    tolContainer.style.height = `${refH}px`;
    tolContainer.style.position = 'absolute';
    tolContainer.style.top = `${offsetY}px`;
    tolContainer.style.left = `${offsetX}px`;
    tolContainer.style.pointerEvents = 'none';

    // Card sizing at reference dimensions
    const cardW = 90;
    const cardH = 153;
    const rowSpacing = 140;
    const startY = 100;

    // Pillar X positions
    const leftX = refW * 0.2;
    const rightX = refW * 0.8;
    const centerX = refW * 0.5;

    const rowY = (row: number) => startY + row * rowSpacing;

    let globalZ = 300;

    for (let i = 0; i < TOL_POSITIONS.length; i++) {
        const pos = TOL_POSITIONS[i];
        const cardUrl = pickedCards[i];
        const cardIndex = pickedIndices[i];
        const meta = getCardMeta(cardIndex);

        let xPos: number;
        if (pos.pillar === 'left') xPos = leftX;
        else if (pos.pillar === 'right') xPos = rightX;
        else xPos = centerX;

        const yPos = rowY(pos.row);

        const deckCard = deck[i];
        if (!deckCard) continue;

        const el = deckCard.el;
        const frontFace = el.querySelector('.face-front') as HTMLElement;
        frontFace.style.backgroundImage = `url('${cardUrl}')`;

        el.style.zIndex = (globalZ++).toString();
        el.style.width = `${cardW}px`;
        el.style.height = `${cardH}px`;
        el.style.left = `${xPos}px`;
        el.style.top = `${yPos}px`;
        el.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        el.style.animation = 'none';
        el.style.filter = 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.4))';

        await wait(250);
        el.classList.remove('is-flipped');

        // "At home" bonus glow
        const isAtHome = (cardIndex + 1) === pos.id || (cardIndex >= 22 && ((cardIndex - 22) % 14) + 1 === pos.id);
        if (isAtHome) {
            el.style.filter = 'drop-shadow(0 0 25px rgba(255, 215, 0, 0.8))';
        }

        // Reading text beside the card
        const txtDiv = document.createElement('div');
        txtDiv.className = 'tol-reading-text';
        txtDiv.style.width = '160px';
        txtDiv.style.zIndex = '500';

        if (pos.pillar === 'left') {
            txtDiv.style.left = `${xPos + cardW / 2 + 8}px`;
            txtDiv.style.top = `${yPos - cardH / 2}px`;
        } else if (pos.pillar === 'right') {
            txtDiv.style.left = `${xPos - cardW / 2 - 168}px`;
            txtDiv.style.top = `${yPos - cardH / 2}px`;
        } else {
            txtDiv.style.left = `${xPos + cardW / 2 + 8}px`;
            txtDiv.style.top = `${yPos - cardH / 2}px`;
        }
        txtDiv.style.transform = 'none';

        txtDiv.innerHTML = `
            <h4>${pos.id}. ${pos.name}</h4>
            <div class="tol-sephira">${pos.hebrew} — ${pos.meaning}</div>
            <p><strong>${meta.name}</strong><br>${pos.description}</p>
        `;

        tolContainer.appendChild(txtDiv);
        await wait(150);
        txtDiv.classList.add('visible');
        await wait(300);
    }

    // Final phrase — positioned at bottom of reference frame
    const finalEl = document.getElementById('finalPhrase');
    if (finalEl) {
        finalEl.textContent = '"As above, so below. The Lightning Flash descends, and the Serpent of Wisdom ascends."';
        finalEl.style.position = 'absolute';
        finalEl.style.bottom = '10px';
        finalEl.style.top = 'auto';
        finalEl.classList.add('visible');
    }

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

function renderGallery(deckType: 'tarot' | 'lenormand' = 'tarot'): void {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = '';
    currentDeck = deckType;

    if (deckType === 'tarot') {
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
    } else {
        for (const card of LENORMAND_CARDS) {
            const div = document.createElement('div');
            div.className = 'gallery-item lenormand-item';
            div.innerHTML = `
                <div class="g-card-symbol">${card.symbol}</div>
                <div class="g-name">${card.name}</div>
                <div class="g-mean">${card.meaning}</div>
            `;
            grid.appendChild(div);
        }
    }
}

// ==========================================
// EVENT HANDLERS
// ==========================================

function hideMainUI(): void {
    const triggersRow = document.querySelector('.triggers-row') as HTMLElement;
    const mainTitle = document.getElementById('mainTitle') as HTMLElement;
    const btnInfo = document.getElementById('btnInfo') as HTMLElement;

    triggersRow.style.opacity = '0';
    triggersRow.style.pointerEvents = 'none';
    mainTitle.style.opacity = '0';
    btnInfo.style.opacity = '0';
    btnInfo.style.pointerEvents = 'none';
}

async function gatherAndShuffle(): Promise<void> {
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

    document.querySelectorAll('.card').forEach(el => el.classList.add('shuffling'));
    await wait(1000);
    document.querySelectorAll('.card').forEach(el => el.classList.remove('shuffling'));
}

// Arcanum Triad trigger
document.getElementById('triggerObj')?.addEventListener('click', async () => {
    hideMainUI();

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

// Tree of Life trigger
document.getElementById('triggerToL')?.addEventListener('click', async () => {
    hideMainUI();
    await gatherAndShuffle();
    dealTreeOfLife();
});

document.getElementById('btnRestart')?.addEventListener('click', () => {
    const triggersRow = document.querySelector('.triggers-row') as HTMLElement;
    const mainTitle = document.getElementById('mainTitle') as HTMLElement;
    const btnInfo = document.getElementById('btnInfo') as HTMLElement;
    const reloadContainer = document.getElementById('reloadContainer') as HTMLElement;
    const finalPhrase = document.getElementById('finalPhrase') as HTMLElement;
    const tolContainer = document.getElementById('tolReadingContainer') as HTMLElement;

    triggersRow.style.opacity = '1';
    triggersRow.style.pointerEvents = 'auto';
    mainTitle.style.opacity = '1';
    btnInfo.style.opacity = '1';
    btnInfo.style.pointerEvents = 'auto';
    reloadContainer.classList.remove('visible');
    finalPhrase.classList.remove('visible');
    finalPhrase.style.top = '';
    finalPhrase.style.bottom = '';
    finalPhrase.textContent = '"From the shadows of the past, through the silence of the present, into the golden light of the future."';

    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.minHeight = '';
    window.scrollTo(0, 0);

    document.querySelectorAll('.reading-text').forEach(el => {
        (el as HTMLElement).classList.remove('visible');
        (el as HTMLElement).style.cssText = '';
    });

    tolContainer.innerHTML = '';
    tolContainer.style.cssText = '';

    // Reset table transform from ToL scaling
    const tableEl = document.getElementById('table') as HTMLElement;
    tableEl.style.transform = '';
    tableEl.style.transformOrigin = '';
    tableEl.style.width = '';
    tableEl.style.height = '';
    tableEl.style.left = '';
    tableEl.style.top = '';

    init();
});

document.getElementById('btnInfo')?.addEventListener('click', () => {
    document.getElementById('galleryView')?.classList.add('active');
    renderGallery('tarot');
    updateTabState('tarot');
});

document.getElementById('btnCloseGallery')?.addEventListener('click', () => {
    document.getElementById('galleryView')?.classList.remove('active');
});

// Gallery tab switching
document.querySelectorAll('.gallery-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const deckType = target.dataset.deck as 'tarot' | 'lenormand';
        renderGallery(deckType);
        updateTabState(deckType);
    });
});

function updateTabState(activeType: 'tarot' | 'lenormand'): void {
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        const t = tab as HTMLElement;
        if (t.dataset.deck === activeType) {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });
}

// ==========================================
// INITIALIZATION
// ==========================================

window.onload = init;
