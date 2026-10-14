import * as THREE from 'three';
import type { myAstroLine, City } from '../types';

let renderer: THREE.WebGLRenderer | null = null;
let globe: THREE.Group | null = null;
let frameId: number | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;

export function initGlobe(container: HTMLElement): void {
  const w = container.clientWidth;
  const h = container.clientHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0f172a);

  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
  camera.position.z = 18;
  camera.position.y = 5;
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  globe = new THREE.Group();
  scene.add(globe);

  // Wireframe Earth
  globe.add(new THREE.Mesh(
    new THREE.IcosahedronGeometry(5, 2),
    new THREE.MeshBasicMaterial({ color: 0x475569, wireframe: true, transparent: true, opacity: 0.3 })
  ));

  // Occlusion sphere
  globe.add(new THREE.Mesh(
    new THREE.IcosahedronGeometry(4.9, 2),
    new THREE.MeshBasicMaterial({ color: 0x0f172a })
  ));

  animate();
}

export function updateGlobe(linesData: myAstroLine[], cityPins: City[]): void {
  if (!globe) return;

  // Remove dynamic objects
  globe.children = globe.children.filter(c => !c.userData['dynamic']);

  linesData.forEach(line => {
    const curve = new THREE.EllipseCurve(0, 0, 5.2, 5.2, 0, 2 * Math.PI, false, 0);
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(32));

    if (line.type === 'MC') {
      geo.rotateY(line.longitudeAngle);
    } else {
      geo.rotateX(Math.PI / 3);
      geo.rotateY(line.longitudeAngle);
    }

    const mesh = new THREE.Line(geo, new THREE.LineBasicMaterial({
      color: line.planet.color, transparent: true, opacity: 0.5
    }));
    mesh.userData['dynamic'] = true;
    globe!.add(mesh);
  });

  cityPins.forEach(c => {
    const latRad = (90 - c.lat) * (Math.PI / 180);
    const lngRad = (c.lng + 180) * (Math.PI / 180);
    const r = 5.2;
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 4, 4),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    mesh.position.set(
      -(r * Math.sin(latRad) * Math.cos(lngRad)),
      r * Math.cos(latRad),
      r * Math.sin(latRad) * Math.sin(lngRad)
    );
    mesh.userData['dynamic'] = true;
    globe!.add(mesh);
  });
}

function animate(): void {
  frameId = requestAnimationFrame(animate);
  if (globe) globe.rotation.y += 0.001;
  if (renderer && scene && camera) renderer.render(scene, camera);
}

export function destroyGlobe(container: HTMLElement): void {
  if (frameId) cancelAnimationFrame(frameId);
  if (renderer?.domElement && container.contains(renderer.domElement)) {
    container.removeChild(renderer.domElement);
  }
  renderer = null;
  globe = null;
  scene = null;
  camera = null;
  frameId = null;
}
