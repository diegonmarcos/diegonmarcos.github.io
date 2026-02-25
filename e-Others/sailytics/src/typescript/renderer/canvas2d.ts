import type { Config, PhysicsState, Vec2D, PolarPoint } from '../types/index';
import * as V from '../physics/vec';
import { drawPolarOverlay, drawVMGIndicator } from './polar-overlay';
import { drawForceBalance } from './force-balance';

interface ArrowStyle {
  color: string;
  width: number;
  dash?: number[];
  glow?: boolean;
  label?: string;
}

export class Canvas2DRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private observer: ResizeObserver;

  constructor(canvas: HTMLCanvasElement, container: HTMLElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Cannot get 2D context');
    this.ctx = ctx;

    let resizeTimeout: number;
    this.observer = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => this.resize(container), 0);
    });
    this.observer.observe(container);
    this.resize(container);
  }

  private resize(container: HTMLElement): void {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width > 0 && height > 0 && (this.canvas.width !== width || this.canvas.height !== height)) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  // ─── STYLED ARROW (for force vectors) ───
  private drawStyledArrow(x: number, y: number, vx: number, vy: number, style: ArrowStyle): void {
    const mag = Math.sqrt(vx * vx + vy * vy);
    if (mag < 0.5) return;

    const head = style.glow ? 14 : 10;
    const angle = Math.atan2(vy, vx);
    const ctx = this.ctx;

    ctx.save();
    if (style.glow) {
      ctx.shadowBlur = 12;
      ctx.shadowColor = style.color;
    }
    if (style.dash) ctx.setLineDash(style.dash);

    ctx.strokeStyle = style.color;
    ctx.fillStyle = style.color;
    ctx.lineWidth = style.width;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + vx, y + vy);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x + vx, y + vy);
    ctx.lineTo(x + vx - head * Math.cos(angle - Math.PI / 7), y + vy - head * Math.sin(angle - Math.PI / 7));
    ctx.lineTo(x + vx - head * Math.cos(angle + Math.PI / 7), y + vy - head * Math.sin(angle + Math.PI / 7));
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Label at arrow tip
    if (style.label) {
      ctx.save();
      ctx.scale(1, -1);
      ctx.font = 'bold 9px Inter';
      ctx.fillStyle = style.color;
      ctx.globalAlpha = 0.9;
      const tipX = x + vx;
      const tipY = y + vy;
      const oX = Math.cos(angle) * 16;
      const oY = Math.sin(angle) * 16;
      ctx.fillText(style.label, tipX + oX - 8, -(tipY + oY) + 3);
      ctx.restore();
    }
  }

  private rotateVec(v: Vec2D, angleDeg: number): Vec2D {
    const r = angleDeg * (Math.PI / 180);
    return {
      x: v.x * Math.cos(r) - v.y * Math.sin(r),
      y: v.x * Math.sin(r) + v.y * Math.cos(r),
    };
  }

  private drawOriginDot(x: number, y: number, color: string, radius = 4): void {
    const ctx = this.ctx;
    ctx.save();
    ctx.shadowBlur = 8;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // ─── MAIN RENDER ───
  render(cfg: Config, phys: PhysicsState, polar: PolarPoint[] = [], optimalVMG = { upwind: 45, downwind: 135 }): void {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const scale = Math.min(w, h) / 100;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.scale(1, -1);

    // ═══════════════════════════════════════
    // COMPASS ROSE (directions only, NOT forces)
    // ═══════════════════════════════════════
    const crRadius = 42 * scale;

    // Outer ring with subtle glow
    ctx.save();
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#22d3ee30';
    ctx.strokeStyle = '#1a3a5c';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, crRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Inner gradient fill
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, crRadius);
    gradient.addColorStop(0, '#0f172a00');
    gradient.addColorStop(0.7, '#0f172a30');
    gradient.addColorStop(1, '#0f172a60');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, crRadius, 0, Math.PI * 2);
    ctx.fill();

    // Tick marks every 30 degrees
    for (let i = 0; i < 360; i += 30) {
      const v = V.fromAngle(i, crRadius);
      const isMajor = i % 90 === 0;
      ctx.strokeStyle = isMajor ? '#4a7a9e' : '#1e3a4e';
      ctx.lineWidth = isMajor ? 1.5 : 0.8;
      ctx.beginPath();
      ctx.moveTo(v.x * (isMajor ? 0.88 : 0.92), v.y * (isMajor ? 0.88 : 0.92));
      ctx.lineTo(v.x, v.y);
      ctx.stroke();
    }

    // Cardinal direction labels
    ctx.save();
    ctx.scale(1, -1);
    ctx.font = 'bold 10px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // N (True North)
    ctx.fillStyle = '#7eb8dc';
    ctx.fillText('N', 0, -crRadius - 10);
    // E
    ctx.fillStyle = '#4a7a9e';
    ctx.fillText('E', crRadius + 10, 0);
    // S
    ctx.fillText('S', 0, crRadius + 10);
    // W
    ctx.fillText('W', -crRadius - 10, 0);
    ctx.restore();

    // ─── MAGNETIC NORTH (directional indicator, NOT a force arrow) ───
    // Small red tick on the compass ring at declination angle
    const declRad = cfg.decl * (Math.PI / 180);
    const magOuter = crRadius * 1.02;
    const magInner = crRadius * 0.82;
    const magMid = crRadius * 0.92;

    // Red needle from inner to outer ring edge
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.save();
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(magInner * Math.sin(declRad), magInner * Math.cos(declRad));
    ctx.lineTo(magOuter * Math.sin(declRad), magOuter * Math.cos(declRad));
    ctx.stroke();

    // Small red diamond at the needle tip
    ctx.fillStyle = '#ef4444';
    const tipX = magOuter * Math.sin(declRad);
    const tipY = magOuter * Math.cos(declRad);
    ctx.beginPath();
    ctx.arc(tipX, tipY, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // "M" label
    ctx.save();
    ctx.scale(1, -1);
    ctx.font = 'bold 8px Inter';
    ctx.fillStyle = '#ef4444';
    ctx.globalAlpha = 0.85;
    const labelR = crRadius * 1.1;
    ctx.fillText('M', labelR * Math.sin(declRad) - 3, -(labelR * Math.cos(declRad)) + 3);
    ctx.restore();

    // Declination arc between True N and Magnetic N
    if (Math.abs(cfg.decl) > 0.5) {
      ctx.strokeStyle = '#ef444440';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 3]);
      ctx.beginPath();
      const arcR = crRadius * 0.86;
      // Arc from 0° (true north = +Y = PI/2 in canvas) to decl angle
      const startArc = Math.PI / 2;
      const endArc = Math.PI / 2 - declRad;
      ctx.arc(0, 0, arcR, Math.min(startArc, endArc), Math.max(startArc, endArc));
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Polar overlay
    if (polar.length > 0 && phys.twa !== undefined) {
      drawPolarOverlay(ctx, polar, phys.twa, scale, crRadius);
      drawVMGIndicator(ctx, optimalVMG.upwind, optimalVMG.downwind, crRadius);
    }

    // ═══════════════════════════════════════
    // BOAT + FORCE VECTORS (independent scaling)
    // ═══════════════════════════════════════
    const boatLen = 22 * scale;
    ctx.save();
    ctx.rotate(-cfg.hdg * (Math.PI / 180));

    // Hull
    const hullGrad = ctx.createLinearGradient(0, boatLen / 2, 0, -boatLen / 2);
    hullGrad.addColorStop(0, '#f8fafc');
    hullGrad.addColorStop(1, '#cbd5e1');
    ctx.fillStyle = hullGrad;
    ctx.beginPath();
    ctx.moveTo(0, boatLen / 2);
    ctx.bezierCurveTo(7 * scale, 5 * scale, 6 * scale, -10 * scale, 5 * scale, -boatLen / 2);
    ctx.lineTo(-5 * scale, -boatLen / 2);
    ctx.bezierCurveTo(-6 * scale, -10 * scale, -7 * scale, 5 * scale, 0, boatLen / 2);
    ctx.fill();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Deck centerline
    ctx.strokeStyle = '#47556960';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(0, boatLen / 2 - 2 * scale);
    ctx.lineTo(0, -boatLen / 2 + 2 * scale);
    ctx.stroke();
    ctx.setLineDash([]);

    // Keel
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -2 * scale);
    ctx.lineTo(0, -boatLen / 2 + 1 * scale);
    ctx.stroke();

    // Rudder
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-1.5 * scale, -boatLen / 2);
    ctx.lineTo(0, -boatLen / 2 - 2 * scale);
    ctx.lineTo(1.5 * scale, -boatLen / 2);
    ctx.stroke();

    // ─── FORCE VECTORS on boat (LARGER scaling) ───
    const bowP = { x: 0, y: boatLen / 2 };
    const sailP = { x: 0, y: cfg.mode === 'hybrid' ? 4 * scale : 2 * scale };
    const rotorP = { x: 0, y: cfg.mode === 'hybrid' ? -6 * scale : 2 * scale };
    const keelP = { x: 0, y: 0 };

    // Force scale: make vectors MUCH larger and more visible
    const maxF = Math.max(Math.abs(phys.driveN), Math.abs(phys.heelN), 500);
    const fScl = (40 * scale) / maxF;
    const awScl = scale * 2.0;

    // Apparent wind at bow
    const awLocal = this.rotateVec(phys.vAW, cfg.hdg);
    this.drawStyledArrow(bowP.x, bowP.y, awLocal.x * awScl, awLocal.y * awScl, {
      color: '#22d3ee', width: 2.5, dash: [3, 4], label: 'AW',
    });

    // Sail forces
    if (cfg.mode !== 'rotor') {
      const lLocal = this.rotateVec(phys.sail.vL, cfg.hdg);
      const dLocal = this.rotateVec(phys.sail.vD, cfg.hdg);
      this.drawOriginDot(sailP.x, sailP.y, '#f472b680');
      this.drawStyledArrow(sailP.x, sailP.y, lLocal.x * fScl, lLocal.y * fScl, {
        color: '#f472b6', width: 2, dash: [6, 4], label: 'Lift',
      });
      this.drawStyledArrow(sailP.x, sailP.y, dLocal.x * fScl, dLocal.y * fScl, {
        color: '#fb923c', width: 2, dash: [6, 4], label: 'Drag',
      });
    }

    // Rotor forces
    if (cfg.mode !== 'sail') {
      const lLocal = this.rotateVec(phys.rotor.vL, cfg.hdg);
      const dLocal = this.rotateVec(phys.rotor.vD, cfg.hdg);
      this.drawOriginDot(rotorP.x, rotorP.y, '#fdba7480');
      this.drawStyledArrow(rotorP.x, rotorP.y, lLocal.x * fScl, lLocal.y * fScl, {
        color: '#f472b6', width: 2, dash: [6, 4], label: 'R.Lift',
      });
      this.drawStyledArrow(rotorP.x, rotorP.y, dLocal.x * fScl, dLocal.y * fScl, {
        color: '#fb923c', width: 2, dash: [6, 4], label: 'R.Drag',
      });
    }

    // Hull drag at keel — solid thick with glow
    const hdLocal = this.rotateVec(phys.vHullDrag, cfg.hdg);
    this.drawOriginDot(keelP.x, keelP.y, '#4f46e580');
    this.drawStyledArrow(keelP.x, keelP.y, hdLocal.x * fScl, hdLocal.y * fScl, {
      color: '#6366f1', width: 3.5, glow: true, label: 'Hull',
    });

    ctx.restore(); // Back to global coords

    // ─── GLOBAL VECTORS ───

    // True wind (global origin)
    this.drawStyledArrow(0, 0, phys.vTW.x * awScl, phys.vTW.y * awScl, {
      color: '#3b82f6', width: 2.5, dash: [3, 5], label: 'TW',
    });

    // Total drive — solid thick with glow
    this.drawStyledArrow(0, 0, phys.vTotDrive.x * fScl, phys.vTotDrive.y * fScl, {
      color: '#22c55e', width: 4.5, glow: true, label: 'Drive',
    });

    // Drive magnitude
    const driveMag = Math.round(Math.abs(phys.driveN));
    if (driveMag > 10) {
      const dTipX = phys.vTotDrive.x * fScl;
      const dTipY = phys.vTotDrive.y * fScl;
      ctx.save();
      ctx.scale(1, -1);
      ctx.font = 'bold 11px JetBrains Mono';
      ctx.fillStyle = '#22c55e';
      ctx.globalAlpha = 0.85;
      ctx.fillText(`${driveMag} N`, dTipX + 12, -dTipY - 6);
      ctx.restore();
    }

    // Total heel — solid thick with glow
    this.drawStyledArrow(0, 0, phys.vTotHeel.x * fScl, phys.vTotHeel.y * fScl, {
      color: '#ef4444', width: 4.5, glow: true, label: 'Heel',
    });

    // Heel magnitude
    const heelMag = Math.round(Math.abs(phys.heelN));
    if (heelMag > 10) {
      const hTipX = phys.vTotHeel.x * fScl;
      const hTipY = phys.vTotHeel.y * fScl;
      ctx.save();
      ctx.scale(1, -1);
      ctx.font = 'bold 11px JetBrains Mono';
      ctx.fillStyle = '#ef4444';
      ctx.globalAlpha = 0.85;
      ctx.fillText(`${heelMag} N`, hTipX + 12, -hTipY - 6);
      ctx.restore();
    }

    ctx.restore();

    // ═══════════════════════════════════════
    // FORCE BALANCE (top-right)
    // ═══════════════════════════════════════
    const fbWidth = 160;
    const fbHeight = 130;
    drawForceBalance(ctx, phys, w - fbWidth - 12, 12, fbWidth, fbHeight);

    // ═══════════════════════════════════════
    // MULTI-VIEW INSETS
    // ═══════════════════════════════════════
    this.drawSideView(cfg, phys, w, h);
    this.drawFrontView(cfg, phys, w, h);
  }

  // ═══════════════════════════════════════════════════════════════
  // SIDE VIEW — Large profile with undersea terrain cross-section
  // ═══════════════════════════════════════════════════════════════
  private drawSideView(cfg: Config, phys: PhysicsState, w: number, h: number): void {
    const ctx = this.ctx;
    const vw = 340;
    const vh = 220;
    const vx = w - vw - 12;
    const vy = h - vh - 12;

    ctx.save();

    // Clipped rounded rect background
    ctx.beginPath();
    ctx.roundRect(vx, vy, vw, vh, 8);
    ctx.clip();

    // Background gradient: sky → water → deep
    const bgGrad = ctx.createLinearGradient(vx, vy, vx, vy + vh);
    bgGrad.addColorStop(0, '#0c1628');
    bgGrad.addColorStop(0.30, '#0a2040');
    bgGrad.addColorStop(0.32, '#062a50');
    bgGrad.addColorStop(0.60, '#04203e');
    bgGrad.addColorStop(1, '#021428');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(vx, vy, vw, vh);

    // Title bar
    ctx.fillStyle = 'rgba(56, 189, 248, 0.06)';
    ctx.fillRect(vx, vy, vw, 18);
    ctx.font = 'bold 8px Inter';
    ctx.fillStyle = '#3a6a8e';
    ctx.fillText('SIDE PROFILE', vx + 8, vy + 12);

    // Speed readout
    if (cfg.bs > 1) {
      ctx.font = 'bold 9px JetBrains Mono';
      ctx.fillStyle = '#06d6a0';
      ctx.textAlign = 'right';
      ctx.fillText(`${cfg.bs.toFixed(1)} kts`, vx + vw - 8, vy + 12);
      ctx.textAlign = 'left';
    }

    const cx = vx + vw * 0.45;
    const waterY = vy + vh * 0.32;
    const s = 1.8;

    // ─── SKY ───
    const skyGrad = ctx.createLinearGradient(vx, vy + 18, vx, waterY);
    skyGrad.addColorStop(0, 'rgba(12, 30, 60, 0.2)');
    skyGrad.addColorStop(1, 'rgba(6, 42, 80, 0.08)');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(vx, vy + 18, vw, waterY - vy - 18);

    // Stars (tiny dots in sky)
    ctx.fillStyle = '#7eb8dc20';
    for (let i = 0; i < 8; i++) {
      const sx = vx + 20 + ((i * 41) % (vw - 40));
      const sy = vy + 22 + ((i * 7) % 20);
      ctx.fillRect(sx, sy, 1, 1);
    }

    // ─── WATERLINE ───
    ctx.strokeStyle = '#06d6a070';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(vx, waterY);
    ctx.lineTo(vx + vw, waterY);
    ctx.stroke();

    // Wave ripples on surface
    ctx.strokeStyle = '#06d6a025';
    ctx.lineWidth = 0.7;
    for (let wx = vx + 6; wx < vx + vw - 6; wx += 14) {
      ctx.beginPath();
      ctx.moveTo(wx, waterY + 1);
      ctx.quadraticCurveTo(wx + 4, waterY - 2, wx + 8, waterY + 1);
      ctx.stroke();
    }

    // ─── WATER DEPTH GRADIENT ───
    const oceanGrad = ctx.createLinearGradient(vx, waterY, vx, vy + vh);
    oceanGrad.addColorStop(0, 'rgba(6, 42, 80, 0.15)');
    oceanGrad.addColorStop(0.3, 'rgba(4, 32, 60, 0.25)');
    oceanGrad.addColorStop(0.6, 'rgba(3, 22, 45, 0.4)');
    oceanGrad.addColorStop(1, 'rgba(2, 14, 30, 0.6)');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(vx, waterY + 2, vw, vy + vh - waterY - 2);

    // ─── BIOLUMINESCENT PARTICLES ───
    for (let i = 0; i < 15; i++) {
      const px = vx + 15 + ((i * 23 + 7) % (vw - 30));
      const py = waterY + 20 + ((i * 17 + 3) % (vh * 0.55));
      const size = 1 + (i % 3) * 0.5;
      ctx.fillStyle = i % 4 === 0 ? '#06d6a018' : '#38bdf815';
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // ─── UNDERSEA TERRAIN (prominent!) ───
    const terrainBase = vy + vh;
    const terrainTop = waterY + vh * 0.35;

    // Main terrain mass
    ctx.fillStyle = '#0e2a40';
    ctx.strokeStyle = '#1a4a6a';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(vx, terrainBase);
    for (let tx = 0; tx <= vw; tx += 2) {
      const nx = (tx - vw * 0.45) * 0.025;
      const h1 = Math.sin(nx * 1.3) * 20;
      const h2 = Math.sin(nx * 3.7 + 1.5) * 10;
      const h3 = Math.sin(nx * 7.1 + 0.8) * 5;
      const h4 = Math.sin(nx * 0.5) * 15;
      const terrainH = 35 + h1 + h2 + h3 + h4;
      ctx.lineTo(vx + tx, terrainBase - terrainH);
    }
    ctx.lineTo(vx + vw, terrainBase);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Terrain highlight ridges
    ctx.strokeStyle = '#1a5a8a40';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    for (let tx = 0; tx <= vw; tx += 2) {
      const nx = (tx - vw * 0.45) * 0.025;
      const h1 = Math.sin(nx * 1.3 + 0.5) * 14;
      const h2 = Math.sin(nx * 3.7 + 2.5) * 7;
      const h3 = Math.sin(nx * 0.5 + 1) * 10;
      const terrainH = 25 + h1 + h2 + h3;
      if (tx === 0) ctx.moveTo(vx + tx, terrainBase - terrainH);
      else ctx.lineTo(vx + tx, terrainBase - terrainH);
    }
    ctx.stroke();

    // Sandy sediment at base
    ctx.fillStyle = '#1a3a50';
    ctx.fillRect(vx, terrainBase - 6, vw, 6);

    // Rock formations (scattered rectangles)
    ctx.fillStyle = '#163050';
    for (let i = 0; i < 5; i++) {
      const rx = vx + 25 + ((i * 67) % (vw - 50));
      const ry = terrainBase - 12 - (i % 3) * 8;
      ctx.fillRect(rx, ry, 4 + (i % 3) * 2, 3 + (i % 2) * 2);
    }

    // ─── FISH SILHOUETTES ───
    ctx.globalAlpha = 0.5;
    for (let i = 0; i < 8; i++) {
      const fx = vx + 20 + ((i * 42 + 11) % (vw - 40));
      const fy = waterY + 25 + ((i * 19 + 5) % (vh * 0.35));
      const fSize = 4 + (i % 3) * 2;
      const fDir = i % 2 === 0 ? 1 : -1;

      ctx.fillStyle = i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#06d6a0' : '#7eb8dc';
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx + fSize * fDir, fy - fSize * 0.3);
      ctx.lineTo(fx + fSize * fDir, fy + fSize * 0.3);
      ctx.closePath();
      ctx.fill();

      // Tail
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.lineTo(fx - fSize * 0.4 * fDir, fy - fSize * 0.25);
      ctx.lineTo(fx - fSize * 0.4 * fDir, fy + fSize * 0.25);
      ctx.closePath();
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ─── BOAT PROFILE ───
    // Hull
    ctx.fillStyle = '#e2e8f0';
    ctx.strokeStyle = '#7eb8dc';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx + 38 * s, waterY);
    ctx.quadraticCurveTo(cx + 32 * s, waterY + 5 * s, cx + 20 * s, waterY + 6 * s);
    ctx.lineTo(cx - 20 * s, waterY + 6 * s);
    ctx.quadraticCurveTo(cx - 28 * s, waterY + 4 * s, cx - 32 * s, waterY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Deck
    ctx.fillStyle = '#3b1a08';
    ctx.fillRect(cx - 30 * s, waterY - 2, 60 * s, 3);

    // Cabin
    ctx.fillStyle = '#94a3b8';
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.roundRect(cx - 5 * s, waterY - 8 * s, 18 * s, 6 * s, 2);
    ctx.fill();
    ctx.stroke();

    // Keel (deep, visible underwater)
    ctx.fillStyle = '#1a3a5c';
    ctx.strokeStyle = '#2d5f7a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 3 * s, waterY + 6 * s);
    ctx.lineTo(cx - 4 * s, waterY + 22 * s);
    ctx.lineTo(cx + 4 * s, waterY + 22 * s);
    ctx.lineTo(cx + 3 * s, waterY + 6 * s);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Bulb keel
    ctx.fillStyle = '#2d5f7a';
    ctx.strokeStyle = '#3d7f9a';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.ellipse(cx, waterY + 23 * s, 7 * s, 2.5 * s, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Mast
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cx + 6 * s, waterY - 2);
    ctx.lineTo(cx + 6 * s, waterY - 44 * s);
    ctx.stroke();

    // Forestay
    ctx.strokeStyle = '#4a7a9e50';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(cx + 6 * s, waterY - 42 * s);
    ctx.lineTo(cx + 36 * s, waterY - 1);
    ctx.stroke();

    // Backstay
    ctx.beginPath();
    ctx.moveTo(cx + 6 * s, waterY - 42 * s);
    ctx.lineTo(cx - 30 * s, waterY - 1);
    ctx.stroke();

    // Sail
    if (cfg.mode !== 'rotor') {
      ctx.fillStyle = 'rgba(255, 234, 0, 0.1)';
      ctx.strokeStyle = '#fde04760';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx + 6 * s, waterY - 42 * s);
      ctx.quadraticCurveTo(cx + 24 * s, waterY - 24 * s, cx + 6 * s, waterY - 3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Rudder
    ctx.fillStyle = '#2d5f7a80';
    ctx.beginPath();
    ctx.moveTo(cx - 30 * s, waterY + 2);
    ctx.lineTo(cx - 30 * s, waterY + 10 * s);
    ctx.lineTo(cx - 28 * s, waterY + 10 * s);
    ctx.lineTo(cx - 28 * s, waterY + 2);
    ctx.closePath();
    ctx.fill();

    // Depth labels
    ctx.font = '7px Inter';
    ctx.fillStyle = '#2d5f7a80';
    ctx.fillText('0m', vx + 6, waterY - 3);
    ctx.fillText('-3m', vx + 6, waterY + 30);
    ctx.fillText('-8m', vx + 6, waterY + 60);

    // Border overlay
    ctx.strokeStyle = '#1a3a5c80';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(vx, vy, vw, vh, 8);
    ctx.stroke();

    ctx.restore();
  }

  // ═══════════════════════════════════════════════════════════════
  // FRONT VIEW — Heel angle cross-section with underwater
  // ═══════════════════════════════════════════════════════════════
  private drawFrontView(cfg: Config, phys: PhysicsState, w: number, h: number): void {
    const ctx = this.ctx;
    const vw = 200;
    const vh = 180;
    const sideVw = 340;
    const vx = w - sideVw - vw - 20;
    const vy = h - vh - 12;

    // Compute heel angle
    const mastHeight = 10;
    const heelingMoment = phys.heelN * mastHeight;
    const rightingMoment = cfg.mass * 9.81 * 0.35;
    const heelRad = rightingMoment > 0
      ? Math.asin(Math.min(1, Math.max(-1, heelingMoment / rightingMoment)))
      : 0;

    ctx.save();

    // Clipped background
    ctx.beginPath();
    ctx.roundRect(vx, vy, vw, vh, 8);
    ctx.clip();

    const bgGrad = ctx.createLinearGradient(vx, vy, vx, vy + vh);
    bgGrad.addColorStop(0, '#0c1628');
    bgGrad.addColorStop(0.38, '#0a2040');
    bgGrad.addColorStop(0.40, '#062a50');
    bgGrad.addColorStop(1, '#021428');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(vx, vy, vw, vh);

    // Title bar
    ctx.fillStyle = 'rgba(56, 189, 248, 0.06)';
    ctx.fillRect(vx, vy, vw, 18);
    ctx.font = 'bold 8px Inter';
    ctx.fillStyle = '#3a6a8e';
    ctx.fillText('FRONT VIEW', vx + 8, vy + 12);

    // Heel readout
    const heelDeg = (heelRad * 180 / Math.PI).toFixed(1);
    const heelColor = Math.abs(heelRad) > 0.35 ? '#ff5252' : Math.abs(heelRad) > 0.17 ? '#ff9f43' : '#06d6a0';
    ctx.font = 'bold 10px JetBrains Mono';
    ctx.fillStyle = heelColor;
    ctx.textAlign = 'right';
    ctx.fillText(`${heelDeg}\u00B0`, vx + vw - 8, vy + 12);
    ctx.textAlign = 'left';

    const cx = vx + vw / 2;
    const waterY = vy + vh * 0.40;
    const s = 1.8;

    // ─── WATER ───
    const oceanGrad = ctx.createLinearGradient(vx, waterY, vx, vy + vh);
    oceanGrad.addColorStop(0, 'rgba(6, 42, 80, 0.15)');
    oceanGrad.addColorStop(0.5, 'rgba(4, 28, 55, 0.3)');
    oceanGrad.addColorStop(1, 'rgba(2, 14, 30, 0.5)');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(vx, waterY, vw, vy + vh - waterY);

    // Waterline
    ctx.strokeStyle = '#06d6a060';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(vx, waterY);
    ctx.lineTo(vx + vw, waterY);
    ctx.stroke();

    // Bioluminescent dots underwater
    for (let i = 0; i < 6; i++) {
      const px = vx + 15 + ((i * 31) % (vw - 30));
      const py = waterY + 20 + ((i * 23) % (vh * 0.45));
      ctx.fillStyle = '#38bdf810';
      ctx.beginPath();
      ctx.arc(px, py, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // ─── HEEL REFERENCE ───
    // Dashed arc showing heel range
    ctx.strokeStyle = '#1a3a5c50';
    ctx.lineWidth = 0.5;
    ctx.setLineDash([2, 3]);
    ctx.beginPath();
    ctx.arc(cx, waterY, 40, -Math.PI, 0);
    ctx.stroke();

    // 10° reference ticks
    for (const deg of [-30, -20, -10, 10, 20, 30]) {
      const r = deg * Math.PI / 180;
      const ix = cx + 38 * Math.sin(r);
      const iy = waterY - 38 * Math.cos(r);
      ctx.beginPath();
      ctx.arc(ix, iy, 1, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.setLineDash([]);

    // ─── ROTATED BOAT CROSS-SECTION ───
    ctx.save();
    ctx.translate(cx, waterY);
    ctx.rotate(heelRad);

    // Hull cross-section (elliptical)
    ctx.fillStyle = '#e2e8f0';
    ctx.strokeStyle = '#7eb8dc';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(0, 4 * s, 18 * s, 7 * s, 0, 0, Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Deck
    ctx.fillStyle = '#3b1a08';
    ctx.fillRect(-18 * s, 0, 36 * s, 3);

    // Cabin
    ctx.fillStyle = '#94a3b8';
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.roundRect(-6 * s, -5 * s, 12 * s, 5 * s, 2);
    ctx.fill();
    ctx.stroke();

    // Keel
    ctx.fillStyle = '#1a3a5c';
    ctx.beginPath();
    ctx.moveTo(-2 * s, 11 * s);
    ctx.lineTo(0, 26 * s);
    ctx.lineTo(2 * s, 11 * s);
    ctx.closePath();
    ctx.fill();

    // Bulb
    ctx.fillStyle = '#2d5f7a';
    ctx.beginPath();
    ctx.ellipse(0, 27 * s, 5 * s, 2 * s, 0, 0, Math.PI * 2);
    ctx.fill();

    // Mast
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, -2);
    ctx.lineTo(0, -36 * s);
    ctx.stroke();

    // Shrouds
    ctx.strokeStyle = '#4a7a9e40';
    ctx.lineWidth = 0.7;
    ctx.beginPath();
    ctx.moveTo(0, -34 * s);
    ctx.lineTo(-17 * s, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -34 * s);
    ctx.lineTo(17 * s, 0);
    ctx.stroke();

    // Spreaders
    ctx.strokeStyle = '#4a7a9e60';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(-8 * s, -20 * s);
    ctx.lineTo(8 * s, -20 * s);
    ctx.stroke();

    ctx.restore(); // Un-rotate

    // Border
    ctx.strokeStyle = '#1a3a5c80';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(vx, vy, vw, vh, 8);
    ctx.stroke();

    ctx.restore();
  }
}
