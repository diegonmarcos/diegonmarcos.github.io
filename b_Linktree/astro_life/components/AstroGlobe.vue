<template>
  <div
    ref="containerRef"
    class="w-full h-[400px] bg-[#0f172a] rounded-xl border border-slate-700"
    style="touch-action: none"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as THREE from 'three';
import type { AstroLine, City } from '~/types/astro';

interface Props {
  linesData?: AstroLine[];
  cityPins?: City[];
}

const props = defineProps<Props>();

const containerRef = ref<HTMLDivElement | null>(null);
let renderer: THREE.WebGLRenderer | null = null;
let globe: THREE.Group | null = null;
let frameId: number | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;

const initEngine = () => {
  if (!containerRef.value) return;

  const w = containerRef.value.clientWidth;
  const h = containerRef.value.clientHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f172a);

  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
  camera.position.z = 18;
  camera.position.y = 5;
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  containerRef.value.appendChild(renderer.domElement);

  globe = new THREE.Group();
  scene.add(globe);

  // Earth Wireframe
  globe.add(new THREE.Mesh(
    new THREE.IcosahedronGeometry(5, 2),
    new THREE.MeshBasicMaterial({
      color: 0x475569,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
  ));

  // Blocker Sphere (Hides lines behind earth)
  globe.add(new THREE.Mesh(
    new THREE.IcosahedronGeometry(4.9, 2),
    new THREE.MeshBasicMaterial({ color: 0x0f172a })
  ));

  updateScene();
  animate();
};

const updateScene = () => {
  if (!globe) return;

  // Clear dynamic objects
  globe.children = globe.children.filter((c: any) => !c.userData.dynamic);

  // Draw Lines
  props.linesData?.forEach(line => {
    const curve = new THREE.EllipseCurve(0, 0, 5.2, 5.2, 0, 2 * Math.PI, false, 0);
    const pts = curve.getPoints(32);
    const geo = new THREE.BufferGeometry().setFromPoints(pts);

    if (line.type === 'MC') {
      geo.rotateY(line.longitudeAngle);
    } else {
      geo.rotateX(Math.PI / 3);
      geo.rotateY(line.longitudeAngle);
    }

    const mesh = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({
        color: line.planet.color,
        transparent: true,
        opacity: 0.5
      })
    );
    mesh.userData.dynamic = true;
    globe!.add(mesh);
  });

  // Draw Pins
  props.cityPins?.forEach(c => {
    const latRad = (90 - c.lat) * (Math.PI / 180);
    const lngRad = (c.lng + 180) * (Math.PI / 180);
    const r = 5.2;
    const x = -(r * Math.sin(latRad) * Math.cos(lngRad));
    const z = r * Math.sin(latRad) * Math.sin(lngRad);
    const y = r * Math.cos(latRad);

    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 4, 4),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    mesh.position.set(x, y, z);
    mesh.userData.dynamic = true;
    globe!.add(mesh);
  });
};

const animate = () => {
  frameId = requestAnimationFrame(animate);
  if (globe) globe.rotation.y += 0.001;
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
};

onMounted(() => {
  initEngine();
});

onUnmounted(() => {
  if (frameId) cancelAnimationFrame(frameId);
  if (renderer && containerRef.value && renderer.domElement) {
    try {
      containerRef.value.removeChild(renderer.domElement);
    } catch (e) {
      console.error('Error removing renderer:', e);
    }
  }
});

watch(() => [props.linesData, props.cityPins], () => {
  updateScene();
}, { deep: true });
</script>
