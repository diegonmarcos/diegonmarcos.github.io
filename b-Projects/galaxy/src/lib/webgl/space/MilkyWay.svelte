<script lang="ts">
  // Simplified Milky Way constellation view (after e-Root/milky_way_map.html):
  // spiral dust disk, Sagittarius A* black hole, our Solar System (incl. Galaxy),
  // Sirius + Orion. Hidden until the free-ride galaxy reveal engages.
  import * as THREE from 'three';
  import { roundPointTexture } from '../assets/pointSprite';
  import { T, useTask } from '@threlte/core';
  import galaxyCfg from '$lib/data/galaxy.json';
  import { freeInput } from '../free/freeInput';

  const G = galaxyCfg as any;
  const group = new THREE.Group();
  group.position.set(G.anchor[0], G.anchor[1], G.anchor[2]);
  group.scale.setScalar(G.scale);
  group.visible = false;

  const v = (p: number[]) => new THREE.Vector3(p[0], p[1], p[2]);

  // radial-gradient glow sprite
  function glow(color: string, size: number) {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const x = c.getContext('2d')!;
    const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, color); g.addColorStop(0.3, color); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    s.scale.setScalar(size); return s;
  }
  function label(text: string, y: number) {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const x = c.getContext('2d')!;
    x.font = 'Bold 44px Helvetica Neue, Arial, sans-serif'; x.fillStyle = '#cfe0ff';
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 256, 64);
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, fog: false }));
    s.scale.set(80, 20, 1); s.position.y = y; s.center.set(0.5, 0);
    return s;
  }
  const marker = (pos: number[], color: string, gsize: number, name: string) => {
    const m = new THREE.Group(); m.position.copy(v(pos));
    m.add(glow(color, gsize)); m.add(label(name, gsize * 0.4 + 8));
    return m;
  };

  // --- galactic dust disk (4-arm log spiral) ---
  const D = G.disk;
  const pos = new Float32Array(D.count * 3);
  const col = new Float32Array(D.count * 3);
  const cInner = new THREE.Color('#ffd9a0'), cOuter = new THREE.Color('#7da2ff'), tmp = new THREE.Color();
  for (let i = 0; i < D.count; i++) {
    const arm = i % D.arms;
    const r = D.inner + Math.pow(Math.random(), 0.6) * (D.outer - D.inner);
    const armAngle = (arm / D.arms) * Math.PI * 2;
    const swirl = Math.log(r) * 2.2;
    const scatter = (Math.random() - 0.5) * 0.5 * (r / D.outer);
    const a = armAngle + swirl + scatter;
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = (Math.random() - 0.5) * (D.thickness / D.outer) * (1 - r / D.outer) * 20;
    pos[i * 3 + 2] = Math.sin(a) * r;
    tmp.copy(cInner).lerp(cOuter, r / D.outer);
    col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
  }
  const diskGeo = new THREE.BufferGeometry();
  diskGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  diskGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const disk = new THREE.Points(diskGeo, new THREE.PointsMaterial({ size: D.size, map: roundPointTexture(), vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  group.add(disk);

  // --- Sagittarius A* (black hole) at centre ---
  const bh = new THREE.Group();
  bh.add(new THREE.Mesh(new THREE.SphereGeometry(G.blackHole.core, 32, 32), new THREE.MeshBasicMaterial({ color: 0x000000, fog: false })));
  const ring = new THREE.Mesh(new THREE.TorusGeometry(G.blackHole.ringR, G.blackHole.ringT, 16, 64), new THREE.MeshBasicMaterial({ color: G.blackHole.color, fog: false }));
  ring.rotation.x = Math.PI / 2; bh.add(ring);
  bh.add(glow(G.blackHole.color, G.blackHole.glow));
  bh.add(label(G.blackHole.label, G.blackHole.glow * 0.4));
  group.add(bh);

  // --- Solar System marker (our system, incl. Galaxy) + Sirius + Orion ---
  group.add(marker(G.solar.pos, G.solar.color, G.solar.glow, G.solar.label));
  for (const st of G.stars) {
    const m = marker(st.pos, st.color, st.glow, st.label);
    m.add(new THREE.Mesh(new THREE.SphereGeometry(st.radius, 16, 16), new THREE.MeshBasicMaterial({ color: st.color, fog: false })));
    if (st.companion) {
      const comp = new THREE.Mesh(new THREE.SphereGeometry(st.companion.radius, 12, 12), new THREE.MeshBasicMaterial({ color: st.companion.color, fog: false }));
      comp.position.copy(v(st.companion.pos).sub(v(st.pos)));
      m.add(comp); m.add(glow(st.companion.color, st.companion.glow));
    }
    group.add(m);
  }

  useTask((delta) => {
    const t = THREE.MathUtils.clamp(freeInput.galaxy ?? 0, 0, 1);
    group.visible = t > 0.03;
    if (!group.visible) return;
    group.scale.setScalar(G.scale * (0.6 + t * 0.4));
    disk.rotation.y += delta * 0.02;
    ring.rotation.z += delta * 0.3;
  });
</script>

<T is={group} />
