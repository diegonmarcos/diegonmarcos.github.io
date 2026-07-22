<script lang="ts">
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useTask, useThrelte } from '@threlte/core';
  import type { SceneConfig, Vec3 } from './types';

  let { cfg, tooltip = undefined }: { cfg: SceneConfig; tooltip?: HTMLElement } = $props();

  const { camera: cameraStore, renderer } = useThrelte();
  const v = (p: Vec3) => new THREE.Vector3(p[0], p[1], p[2]);
  const curve = new THREE.CatmullRomCurve3(cfg.spline.points.map(v));

  // Draw a label onto a 512² canvas → CanvasTexture (map + emissiveMap). (original createCubeFaceMaterial)
  function faceMaterial(text: string, bg: string): THREE.MeshStandardMaterial {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = bg; ctx.fillRect(0, 0, 512, 512);
    ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 15; ctx.strokeRect(10, 10, 492, 492);
    ctx.font = 'Bold 70px Helvetica Neue, Arial, sans-serif';
    ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 256, 256);
    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: new THREE.Color(0x000000), roughness: 0.2, metalness: 0.8 });
  }

  // One cube per scroll stop, sitting on the path under the camera; each face a
  // separate material+link (index-parallel). (original addProjectCubeAtScrollStop)
  const group = new THREE.Group();
  const cubes: THREE.Mesh[] = [];
  for (const stop of cfg.stops) {
    const cc = stop.cube;
    const materials = cc.faces.map((f) => faceMaterial(f.label, cc.bg));
    const links = cc.faces.map((f) => f.url);
    const t = Math.min(stop.scroll, 0.985); // avoid zero-length look dir at the very end
    const camPos = curve.getPointAt(t);
    const look = curve.getPointAt(Math.min(1, t + 0.01));
    const dir = new THREE.Vector3().subVectors(look, camPos).normalize();
    const pos = camPos.clone().add(dir.multiplyScalar(6));
    pos.y -= cc.size;
    const cube = new THREE.Mesh(new THREE.BoxGeometry(cc.size, cc.size, cc.size), materials);
    cube.position.copy(pos);
    cube.userData = { links, autoRotate: true };
    group.add(cube);
    cubes.push(cube);
  }

  // ---- interaction (faithful port of onDown/onMove/onUp) ----
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let hoveredFace: { url: string } | null = null;
  let hoveredMaterial: THREE.MeshStandardMaterial | null = null;
  let isDragging = false;
  let activeCube: THREE.Mesh | null = null;
  let prev = { x: 0, y: 0 };
  let down = { x: 0, y: 0 };

  const coords = (e: PointerEvent | TouchEvent) => {
    const t = (e as TouchEvent).touches?.[0] ?? (e as TouchEvent).changedTouches?.[0];
    if (t) return { x: t.clientX, y: t.clientY };
    const m = e as PointerEvent;
    return { x: m.clientX, y: m.clientY };
  };
  const setTip = (html: string, x?: number, y?: number, show = true) => {
    if (!tooltip) return;
    tooltip.innerHTML = html;
    if (x !== undefined && y !== undefined) { tooltip.style.left = x + 15 + 'px'; tooltip.style.top = y + 15 + 'px'; }
    tooltip.style.opacity = show ? '1' : '0';
  };
  const cam = () => cameraStore.current as THREE.PerspectiveCamera;
  const faceIdx = (i: number) => Math.floor(i / 2); // BoxGeometry: 2 triangles per face → 0..5 material index

  function onDown(e: PointerEvent | TouchEvent) {
    if ((e.target as HTMLElement)?.tagName !== 'CANVAS') return; // ignore taps on UI overlays (NerdStats etc.)
    const p = coords(e);
    mouse.x = (p.x / window.innerWidth) * 2 - 1;
    mouse.y = -(p.y / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, cam());
    const hit = raycaster.intersectObjects(cubes)[0];
    if (hit) {
      if ((e as Event).cancelable) e.preventDefault(); // dual-zone: only hijack on a cube hit
      isDragging = true;
      activeCube = hit.object as THREE.Mesh;
      prev = { x: p.x, y: p.y }; down = { x: p.x, y: p.y };
      activeCube.userData.autoRotate = false;
      hoveredFace = { url: activeCube.userData.links[faceIdx(hit.faceIndex!)] };
    }
  }

  function onMove(e: PointerEvent | TouchEvent) {
    if ((e.target as HTMLElement)?.tagName !== 'CANVAS') return; // ignore hover over UI overlays
    const p = coords(e);
    if (isDragging && activeCube) {
      if ((e as Event).cancelable) e.preventDefault();
      activeCube.rotation.y += (p.x - prev.x) * 0.01;
      activeCube.rotation.x += (p.y - prev.y) * 0.01;
      prev = { x: p.x, y: p.y };
      setTip('DRAGGING…');
      return;
    }
    mouse.x = (p.x / window.innerWidth) * 2 - 1;
    mouse.y = -(p.y / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, cam());
    const hit = raycaster.intersectObjects(cubes)[0];

    if (hoveredMaterial) {
      hoveredMaterial.emissive.setHex(0x000000);
      document.body.style.cursor = 'default';
      setTip('', undefined, undefined, false);
      hoveredMaterial = null; hoveredFace = null;
      cubes.forEach((c) => (c.userData.autoRotate = true));
    }
    if (hit && !isDragging) {
      const obj = hit.object as THREE.Mesh;
      const i = faceIdx(hit.faceIndex!);
      obj.userData.autoRotate = false;
      hoveredMaterial = (obj.material as THREE.MeshStandardMaterial[])[i];
      hoveredMaterial.emissive.setHex(0xff4e50); // hover glow (bloom scatters it)
      hoveredFace = { url: obj.userData.links[i] };
      document.body.style.cursor = 'pointer';
      setTip('DRAG TO SPIN<br>CLICK TO OPEN', p.x, p.y, true);
    }
  }

  function onUp(e: PointerEvent | TouchEvent) {
    if ((e.target as HTMLElement)?.tagName !== 'CANVAS') return; // don't open cube links when tapping UI
    if (!isDragging) return;
    const p = coords(e);
    if (Math.hypot(p.x - down.x, p.y - down.y) < 5 && hoveredFace?.url) {
      window.open(hoveredFace.url, '_blank', 'noopener');
    }
    isDragging = false; activeCube = null;
    setTip('DRAG TO SPIN<br>CLICK TO OPEN', undefined, undefined, false);
  }

  onMount(() => {
    const opt = { passive: false } as AddEventListenerOptions;
    window.addEventListener('touchstart', onDown, opt);
    window.addEventListener('touchmove', onMove, opt);
    window.addEventListener('touchend', onUp);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      for (const [ev, fn] of [['touchstart', onDown], ['touchmove', onMove], ['touchend', onUp], ['mousedown', onDown], ['mousemove', onMove], ['mouseup', onUp]] as const)
        window.removeEventListener(ev, fn as EventListener);
    };
  });

  useTask(() => {
    for (const c of cubes) if (c.userData.autoRotate) { c.rotation.y += 0.002; c.rotation.x += 0.001; }
  });
</script>

<T is={group} />
