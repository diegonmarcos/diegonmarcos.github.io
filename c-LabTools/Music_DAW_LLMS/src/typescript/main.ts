// LMMS — minimal but functional Web Audio step sequencer / beat maker.
// Grid of tracks x steps; a lookahead scheduler triggers synthesized drums + bass.

interface TrackDef { id: string; label: string; }
const data = (globalThis as any).PORTAL_DATA?.lmms ?? {};
const STEPS: number = data.steps ?? 16;
const TRACKS: TrackDef[] = data.tracks ?? [
  { id: 'kick', label: 'Kick' }, { id: 'snare', label: 'Snare' },
  { id: 'hat', label: 'Hi-Hat' }, { id: 'bass', label: 'Bass' },
];

const ctx = new AudioContext();
const master = ctx.createGain();
master.gain.value = 0.8;
master.connect(ctx.destination);

// pattern[trackId][step] = 0|1
const pattern: Record<string, number[]> = {};
for (const t of TRACKS) pattern[t.id] = new Array(STEPS).fill(0);

// ── Synth voices ────────────────────────────────────────────────────────────
function kick(time: number) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.frequency.setValueAtTime(150, time);
  o.frequency.exponentialRampToValueAtTime(50, time + 0.12);
  g.gain.setValueAtTime(1, time);
  g.gain.exponentialRampToValueAtTime(0.001, time + 0.4);
  o.connect(g).connect(master); o.start(time); o.stop(time + 0.4);
}
function noise(time: number, dur: number, hp: number, gain: number) {
  const n = ctx.createBufferSource();
  const buf = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  n.buffer = buf;
  const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, time);
  g.gain.exponentialRampToValueAtTime(0.001, time + dur);
  n.connect(f).connect(g).connect(master); n.start(time); n.stop(time + dur);
}
const snare = (t: number) => noise(t, 0.2, 1200, 0.7);
const hat = (t: number) => noise(t, 0.05, 7000, 0.4);
function bass(time: number) {
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = 'sawtooth'; o.frequency.value = 55; // A1
  g.gain.setValueAtTime(0.5, time);
  g.gain.exponentialRampToValueAtTime(0.001, time + 0.25);
  o.connect(g).connect(master); o.start(time); o.stop(time + 0.25);
}
const voices: Record<string, (t: number) => void> = { kick, snare, hat, bass };

// ── Scheduler (lookahead) ───────────────────────────────────────────────────
let bpm = data.defaultBpm ?? 92;
let playing = false;
let current = 0;
let nextTime = 0;
const LOOKAHEAD = 0.1;      // seconds of audio to schedule ahead
let timer = 0;

function stepDur() { return 60 / bpm / 4; } // 16th notes

function schedule() {
  while (nextTime < ctx.currentTime + LOOKAHEAD) {
    for (const t of TRACKS) if (pattern[t.id][current]) voices[t.id]?.(nextTime);
    highlight(current);
    nextTime += stepDur();
    current = (current + 1) % STEPS;
  }
  timer = window.setTimeout(schedule, 25);
}

// ── UI ──────────────────────────────────────────────────────────────────────
const grid = document.getElementById('grid')!;
const cells: Record<string, HTMLElement[]> = {};

function buildGrid() {
  grid.innerHTML = '';
  for (const t of TRACKS) {
    cells[t.id] = [];
    const row = document.createElement('div'); row.className = 'row';
    const lab = document.createElement('div'); lab.className = 'row__label'; lab.textContent = t.label;
    row.appendChild(lab);
    for (let s = 0; s < STEPS; s++) {
      const c = document.createElement('button');
      c.className = 'cell' + (s % 4 === 0 ? ' cell--beat' : '');
      c.type = 'button';
      c.addEventListener('click', () => {
        pattern[t.id][s] ^= 1;
        c.classList.toggle('cell--on', !!pattern[t.id][s]);
      });
      row.appendChild(c);
      cells[t.id].push(c);
    }
    grid.appendChild(row);
  }
}

function syncCells() {
  for (const t of TRACKS)
    cells[t.id].forEach((c, s) => c.classList.toggle('cell--on', !!pattern[t.id][s]));
}

let lastCol = -1;
function highlight(step: number) {
  for (const t of TRACKS) {
    if (lastCol >= 0) cells[t.id][lastCol]?.classList.remove('cell--playing');
    cells[t.id][step]?.classList.add('cell--playing');
  }
  lastCol = step;
}

function loadPreset() {
  const p = data.preset;
  if (!p) return;
  for (const t of TRACKS) if (Array.isArray(p[t.id])) pattern[t.id] = p[t.id].slice(0, STEPS);
  syncCells();
}

// Controls
const playBtn = document.getElementById('play')!;
playBtn.addEventListener('click', async () => {
  if (ctx.state === 'suspended') await ctx.resume();
  playing = !playing;
  if (playing) {
    current = 0; nextTime = ctx.currentTime + 0.05;
    schedule();
    playBtn.textContent = '❚❚ Stop'; playBtn.classList.add('is-playing');
  } else {
    clearTimeout(timer);
    playBtn.textContent = '▶ Play'; playBtn.classList.remove('is-playing');
  }
});

const bpmInput = document.getElementById('bpm') as HTMLInputElement;
bpmInput.addEventListener('input', () => {
  bpm = Number(bpmInput.value);
  document.getElementById('disp-bpm')!.textContent = String(bpm);
});

document.getElementById('clear')!.addEventListener('click', () => {
  for (const t of TRACKS) pattern[t.id] = new Array(STEPS).fill(0);
  syncCells();
});
document.getElementById('preset')!.addEventListener('click', loadPreset);

buildGrid();
loadPreset();     // seed with Innerbloom on load

// ponytail: single sawtooth bass note (A1), 16 steps, no swing. Add note-per-step + swing if it grows into a real DAW.
