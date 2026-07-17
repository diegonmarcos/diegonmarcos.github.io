<script lang="ts">
  // Freetown / Christiania-style night quarter at the end of the walk: shacks with
  // glowing windows, procedural graffiti walls, strings of warm bulbs, lanterns.
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import type { SceneConfig } from './types';

  let { cfg }: { cfg: SceneConfig } = $props();
  const G = (cfg.world as any).ghetto;
  const cx = G.center[0], cz = G.center[2];
  const z0 = cz + G.length / 2, z1 = cz - G.length / 2;
  const warm = new THREE.Color(G.warm);
  const windowCol = new THREE.Color(G.window);

  const group = new THREE.Group();

  // --- procedural graffiti wall texture (dark brick + colourful tags) ---
  function graffiti(): THREE.CanvasTexture {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const x = c.getContext('2d')!;
    x.fillStyle = '#2a2320'; x.fillRect(0, 0, 512, 512);
    x.strokeStyle = '#1b1613'; x.lineWidth = 3;
    for (let y = 0; y < 512; y += 42) { x.beginPath(); x.moveTo(0, y); x.lineTo(512, y); x.stroke(); }
    const pal = ['#e0483a', '#f5d23a', '#7d9bff', '#7dffb0', '#ff7de0', '#ff9d4d', '#ffffff'];
    for (let i = 0; i < 16; i++) {
      x.fillStyle = pal[(Math.random() * pal.length) | 0];
      x.globalAlpha = 0.6 + Math.random() * 0.4;
      const px = Math.random() * 512, py = Math.random() * 512, r = 18 + Math.random() * 70;
      x.beginPath();
      if (Math.random() < 0.5) x.fillRect(px, py, r, r * (0.4 + Math.random()));
      else { x.arc(px, py, r, 0, Math.PI * 2); x.fill(); }
    }
    x.globalAlpha = 1; x.lineWidth = 6; x.strokeStyle = '#f5f5f5';
    for (let i = 0; i < 7; i++) {
      x.beginPath(); x.moveTo(Math.random() * 512, Math.random() * 512);
      x.bezierCurveTo(Math.random() * 512, Math.random() * 512, Math.random() * 512, Math.random() * 512, Math.random() * 512, Math.random() * 512);
      x.stroke();
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }

  // --- shacks (body + slanted roof + glowing window) ---
  const shackMats = ['#4a3b2a', '#3d3226', '#5a4632', '#2f2a22'].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.95 }));
  const roofMat = new THREE.MeshStandardMaterial({ color: '#211b15', roughness: 1 });
  const winMat = new THREE.MeshBasicMaterial({ color: windowCol, fog: false });
  // no squares: hexagonal prism bodies + hexagonal pyramid roofs (flat-shaded polygons)
  const prism = new THREE.CylinderGeometry(0.62, 0.7, 1, 6);
  const roofGeo = new THREE.ConeGeometry(0.82, 1, 6);
  prism.computeVertexNormals(); roofGeo.computeVertexNormals();
  const winGeo = new THREE.PlaneGeometry(1, 1);

  function shack(x: number, z: number, ry: number) {
    const g = new THREE.Group();
    const w = 8 + Math.random() * 6, h = 7 + Math.random() * 5, d = 8 + Math.random() * 5;
    const body = new THREE.Mesh(prism, shackMats[(Math.random() * shackMats.length) | 0]);
    body.scale.set(w, h, d); body.position.y = h / 2;
    body.rotation.y = Math.random() * Math.PI; // vary facet orientation
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.scale.set(w * 0.62, h * 0.4, d * 0.62); roof.position.y = h + h * 0.2;
    roof.rotation.y = Math.random() * Math.PI; roof.rotation.z = (Math.random() - 0.5) * 0.1;
    g.add(body, roof);
    // 1-2 glowing windows on the path-facing side
    for (let k = 0; k < 1 + (Math.random() < 0.5 ? 1 : 0); k++) {
      const win = new THREE.Mesh(winGeo, winMat);
      win.scale.set(1.4 + Math.random(), 1.8 + Math.random(), 1);
      win.position.set((Math.random() - 0.5) * w * 0.6, h * (0.4 + Math.random() * 0.3), d / 2 + 0.05);
      g.add(win);
    }
    g.position.set(x, 0, z); g.rotation.y = ry;
    return g;
  }

  for (let i = 0; i < G.shacks; i++) {
    const t = i / (G.shacks - 1);
    const z = z0 + (z1 - z0) * t + (Math.random() - 0.5) * 6;
    const left = i % 2 === 0;
    const x = cx + (left ? -1 : 1) * (G.side + Math.random() * 6);
    group.add(shack(x, z, (left ? Math.PI / 2 : -Math.PI / 2) + (Math.random() - 0.5) * 0.4));
  }

  // --- graffiti walls lining the corridor ---
  const wallGeo = new THREE.PlaneGeometry(14, 12);
  for (let i = 0; i < G.walls; i++) {
    const t = i / (G.walls - 1);
    const z = z0 + (z1 - z0) * t;
    const left = i % 2 === 0;
    const wall = new THREE.Mesh(wallGeo, new THREE.MeshStandardMaterial({ map: graffiti(), roughness: 0.9 }));
    wall.position.set(cx + (left ? -1 : 1) * (G.side - 4), 6, z + 4);
    wall.rotation.y = left ? Math.PI / 2 : -Math.PI / 2;
    group.add(wall);
  }

  // --- string lights: warm additive bulbs strung in catenary lines over the path ---
  const bulbPos = new Float32Array(G.bulbs * 3);
  for (let i = 0; i < G.bulbs; i++) {
    const t = i / G.bulbs;
    const z = z0 + (z1 - z0) * t;
    const sag = Math.sin(t * Math.PI * 6) * 2; // droop
    bulbPos[i * 3] = cx + Math.sin(t * Math.PI * 8) * (G.side - 3);
    bulbPos[i * 3 + 1] = 11 + sag;
    bulbPos[i * 3 + 2] = z;
  }
  const bulbGeo = new THREE.BufferGeometry();
  bulbGeo.setAttribute('position', new THREE.BufferAttribute(bulbPos, 3));
  const bulbMat = new THREE.PointsMaterial({ color: warm, size: 2.4, sizeAttenuation: true, transparent: true, opacity: 0.95, fog: false, depthWrite: false, blending: THREE.AdditiveBlending });
  const bulbs = new THREE.Points(bulbGeo, bulbMat);
  group.add(bulbs);

  // --- lanterns: emissive bulb on a thin post ---
  const postGeo = new THREE.CylinderGeometry(0.12, 0.14, 6, 6);
  const postMat = new THREE.MeshStandardMaterial({ color: '#1c1712', roughness: 1 });
  const lampGeo = new THREE.SphereGeometry(0.7, 12, 12);
  const lampMat = new THREE.MeshBasicMaterial({ color: warm, fog: false });
  for (let i = 0; i < G.lanterns; i++) {
    const t = i / (G.lanterns - 1);
    const z = z0 + (z1 - z0) * t + (Math.random() - 0.5) * 8;
    const x = cx + (Math.random() - 0.5) * (G.side * 1.4);
    const post = new THREE.Mesh(postGeo, postMat); post.position.set(x, 3, z);
    const lamp = new THREE.Mesh(lampGeo, lampMat); lamp.position.set(x, 6.2, z);
    group.add(post, lamp);
  }

  // --- a few warm point lights so surfaces catch the glow ---
  const lights: THREE.PointLight[] = [];
  for (let i = 0; i < 3; i++) {
    const z = z0 + (z1 - z0) * (0.25 + i * 0.25);
    const l = new THREE.PointLight(warm, 6, 55, 1.4);
    l.position.set(cx + (Math.random() - 0.5) * 10, 8, z);
    group.add(l); lights.push(l);
  }

  // gentle flicker
  let t = 0;
  useTask((delta) => {
    t += delta;
    bulbMat.opacity = 0.8 + Math.sin(t * 4) * 0.15;
    lights.forEach((l, i) => (l.intensity = 5.5 + Math.sin(t * 3 + i) * 1.2));
  });
</script>

<T is={group} />
