// ==========================================================================
// Camera - PixiJS stage transforms (GPU composited)
// ==========================================================================

import type { Application } from 'pixi.js';
import { TILE_SIZE, CAMERA_SCALE, CAMERA_LERP } from '../config';
import type { CameraState } from '../types';
import { lerp } from '../utils/math';

let pixiApp: Application | null = null;
let state: CameraState = { x: 0, y: 0, targetX: 0, targetY: 0, scale: CAMERA_SCALE };

export function initCamera(app: Application): void {
  pixiApp = app;
}

/** Set the camera target to center on a pixel position. */
export function setCameraTarget(px: number, py: number): void {
  state.targetX = px;
  state.targetY = py;
}

/** Snap camera immediately (no lerp) to target. */
export function snapCamera(px: number, py: number): void {
  state.targetX = px;
  state.targetY = py;
  state.x = px;
  state.y = py;
  applyTransform();
}

/** Update camera position with smooth lerp. Called each frame. */
export function updateCamera(): void {
  state.x = lerp(state.x, state.targetX, CAMERA_LERP);
  state.y = lerp(state.y, state.targetY, CAMERA_LERP);
  applyTransform();
}

function applyTransform(): void {
  if (!pixiApp) return;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  pixiApp.stage.x = vw / 2 - state.x * state.scale;
  pixiApp.stage.y = vh / 2 - state.y * state.scale;
  pixiApp.stage.scale.set(state.scale);
}

/** Resize handler: re-center on current position. */
export function resizeCamera(): void {
  applyTransform();
}

/** Convert screen coordinates to world tile coordinates. */
export function screenToTile(screenX: number, screenY: number): { x: number; y: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const tx = vw / 2 - state.x * state.scale;
  const ty = vh / 2 - state.y * state.scale;
  const worldX = (screenX - tx) / state.scale;
  const worldY = (screenY - ty) / state.scale;
  return {
    x: Math.floor(worldX / TILE_SIZE),
    y: Math.floor(worldY / TILE_SIZE),
  };
}
