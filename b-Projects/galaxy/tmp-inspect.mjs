import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const here = dirname(fileURLToPath(import.meta.url));
const dir = resolve(here, '../../front-assets-cdn/a-Companies/leafy-2/static/assets/models/nature');
const files = ['birch-trees','pine-trees','maple-trees','palm-trees','dead-trees','trees','bushes','flower-bushes','flowers','grass','rocks','big-tree'];

const loader = new GLTFLoader();
const parse = (buf) => new Promise((res, rej) => {
  const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  loader.parse(ab, '', res, rej);
});

for (const name of files) {
  const buf = readFileSync(resolve(dir, name + '.glb'));
  try {
    const gltf = await parse(buf);
    const scene = gltf.scene;
    const kids = scene.children;
    let meshCount = 0;
    scene.traverse((o) => { if (o.isMesh) meshCount++; });
    const box = new THREE.Box3().setFromObject(scene);
    const sz = new THREE.Vector3(); box.getSize(sz);
    const ctr = new THREE.Vector3(); box.getCenter(ctr);
    console.log(`\n### ${name}.glb — top children=${kids.length}, meshes=${meshCount}`);
    console.log(`   whole size=(${sz.x.toFixed(2)},${sz.y.toFixed(2)},${sz.z.toFixed(2)}) center=(${ctr.x.toFixed(2)},${ctr.y.toFixed(2)},${ctr.z.toFixed(2)})`);
    kids.forEach((c, i) => {
      const b = new THREE.Box3().setFromObject(c);
      const s = new THREE.Vector3(); b.getSize(s);
      const cc = new THREE.Vector3(); b.getCenter(cc);
      console.log(`   [${i}] ${c.name || '(unnamed)'} size=(${s.x.toFixed(1)},${s.y.toFixed(1)},${s.z.toFixed(1)}) center=(${cc.x.toFixed(1)},${cc.y.toFixed(1)},${cc.z.toFixed(1)})`);
    });
  } catch (e) {
    console.log(`\n### ${name}.glb — PARSE ERROR: ${e.message || e}`);
  }
}
