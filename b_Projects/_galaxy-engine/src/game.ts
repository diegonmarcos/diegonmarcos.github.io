// Pure game-loop step for the flight game — no three/threlte/DOM. Wraps a
// FlightTelemetry stream (from flight.ts) into phase state: spawn → flying →
// landed/crashed → back to spawn. No imports beyond flight types.

import type { FlightTelemetry } from './flight';

const nz = (x: number | undefined): number => (x != null && Number.isFinite(x) ? x : 0);

export type GamePhase = 'spawn' | 'flying' | 'landed' | 'crashed';

export interface GameState {
  phase: GamePhase;
  airborneTime: number;
  landings: number;
  crashes: number;
  crashTimer: number;
}

export interface GameParams {
  maxLandSink: number;      // m/s max sink for a good landing
  maxLandBank: number;      // rad
  maxLandPitch: number;     // rad
  maxLandSpeed: number;     // m/s horizontal (drone/heli); airplane uses maxLandSpeedFwd
  maxLandSpeedFwd: number;  // m/s for runway landings
  needsGear: boolean;
  crashRespawnDelay: number; // s
  minAirborneAGL: number;    // m — above this counts as airborne
}

export function touchdownVerdict(t: FlightTelemetry, params: GameParams): 'good' | 'crash' {
  const vspeed = nz(t.vspeed);
  const bank = nz(t.bank);
  const pitch = nz(t.pitch);
  const speed = nz(t.speed);
  const gearDown = !!t.gearDown;

  const speedLimit = params.needsGear ? params.maxLandSpeedFwd : params.maxLandSpeed;

  const good =
    Math.abs(vspeed) <= params.maxLandSink &&
    Math.abs(bank) <= params.maxLandBank &&
    Math.abs(pitch) <= params.maxLandPitch &&
    speed <= speedLimit &&
    (!params.needsGear || gearDown);

  return good ? 'good' : 'crash';
}

export function stepGame(state: GameState, t: FlightTelemetry, params: GameParams, dt: number): GamePhase {
  const dtSafe = nz(dt);
  const altAGL = nz(t.altAGL);
  const minAirborneAGL = nz(params.minAirborneAGL);

  switch (state.phase) {
    case 'spawn': {
      if (altAGL > minAirborneAGL) {
        state.phase = 'flying';
        state.airborneTime = 0;
      }
      break;
    }
    case 'flying': {
      state.airborneTime = nz(state.airborneTime) + dtSafe;
      if (altAGL <= 0.5 && state.airborneTime > 2) {
        if (touchdownVerdict(t, params) === 'good') {
          state.phase = 'landed';
          state.landings = nz(state.landings) + 1;
        } else {
          state.phase = 'crashed';
          state.crashes = nz(state.crashes) + 1;
          state.crashTimer = nz(params.crashRespawnDelay);
        }
      }
      break;
    }
    case 'landed': {
      if (altAGL > minAirborneAGL) {
        state.phase = 'flying';
        state.airborneTime = 0;
      }
      break;
    }
    case 'crashed': {
      state.crashTimer = nz(state.crashTimer) - dtSafe;
      if (state.crashTimer <= 0) {
        state.phase = 'spawn';
        state.airborneTime = 0;
      }
      break;
    }
  }

  return state.phase;
}
