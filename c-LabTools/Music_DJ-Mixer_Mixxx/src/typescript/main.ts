// Mixxx — minimal but functional Web Audio DJ mixer.
// Two decks, each: <audio> element -> gain -> lowpass filter -> crossfader gain -> master.
// Crossfader uses an equal-power curve so total loudness stays roughly constant.

const ctx = new AudioContext();
const master = ctx.createGain();
master.connect(ctx.destination);

interface Deck {
  audio: HTMLAudioElement;
  vol: GainNode;      // per-deck volume
  filter: BiquadFilterNode;
  xfade: GainNode;    // crossfader contribution
}

function makeDeck(id: 'a' | 'b'): Deck {
  const audio = new Audio();
  audio.crossOrigin = 'anonymous';
  const src = ctx.createMediaElementSource(audio);
  const vol = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 20000;
  const xfade = ctx.createGain();
  src.connect(vol).connect(filter).connect(xfade).connect(master);
  return { audio, vol, filter, xfade };
}

const decks: Record<'a' | 'b', Deck> = { a: makeDeck('a'), b: makeDeck('b') };

const $ = (id: string) => document.getElementById(id) as HTMLElement;
const $i = (id: string) => document.getElementById(id) as HTMLInputElement;

function wireDeck(id: 'a' | 'b') {
  const d = decks[id];

  $i(`file-${id}`).addEventListener('change', (e) => {
    const f = (e.target as HTMLInputElement).files?.[0];
    if (!f) return;
    d.audio.src = URL.createObjectURL(f);
    $(`track-${id}`).textContent = f.name.replace(/\.[^.]+$/, '');
  });

  const playBtn = $(`play-${id}`);
  playBtn.addEventListener('click', async () => {
    if (ctx.state === 'suspended') await ctx.resume();
    if (d.audio.paused) {
      if (!d.audio.src) return;
      await d.audio.play();
      playBtn.textContent = '❚❚';
      playBtn.classList.add('is-playing');
    } else {
      d.audio.pause();
      playBtn.textContent = '▶';
      playBtn.classList.remove('is-playing');
    }
  });

  $(`cue-${id}`).addEventListener('click', () => {
    d.audio.currentTime = 0;
  });

  const tempo = $i(`tempo-${id}`);
  tempo.addEventListener('input', () => {
    const pct = Number(tempo.value);
    d.audio.playbackRate = pct / 100;
    $(`disp-tempo-${id}`).textContent = `${pct}%`;
  });

  const eq = $i(`eq-${id}`);
  eq.addEventListener('input', () => {
    const hz = Number(eq.value);
    d.filter.frequency.value = hz;
    $(`disp-eq-${id}`).textContent = `${hz} Hz`;
  });

  const vol = $i(`vol-${id}`);
  vol.addEventListener('input', () => {
    const pct = Number(vol.value);
    d.vol.gain.value = pct / 100;
    $(`disp-vol-${id}`).textContent = `${pct}%`;
  });
}

wireDeck('a');
wireDeck('b');

// Crossfader — equal-power curve.
const xf = $i('xfader');
function applyXfade() {
  const t = Number(xf.value) / 100;         // 0 = full A, 1 = full B
  decks.a.xfade.gain.value = Math.cos(t * Math.PI / 2);
  decks.b.xfade.gain.value = Math.cos((1 - t) * Math.PI / 2);
}
xf.addEventListener('input', applyXfade);
applyXfade();

// Seed-track label from data-driven PORTAL_DATA.
const seed = (globalThis as any).PORTAL_DATA?.mixxx?.seedTrack;
if (seed) $('seed-track').textContent = `${seed.artist} — ${seed.title} · ${seed.bpm} BPM`;

// ponytail: crossfader is equal-power only; add EQ-kill / beatmatch sync if it ever needs real mixing.
