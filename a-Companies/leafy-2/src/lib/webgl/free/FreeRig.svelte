<script lang="ts">
  // Free-ride controller: procedural bicycle + rider you steer with the joystick.
  // Camera orbits behind the rider's back with two independent params:
  //   dist  = boom length  (pinch / wheel)        first-person(close) .. far
  //   pitch = elevation    (2-finger drag / shift-wheel)  parallel .. isometric .. top-down
  import * as THREE from 'three';
  import { T, useTask } from '@threlte/core';
  import type { SceneConfig } from '../types';
  import { freeInput } from './freeInput';

  let { cfg }: { cfg: SceneConfig } = $props();
  const F = (cfg as any).free;
  const CAM = F.cam;

  // ---------------- procedural bicycle + rider ----------------
  const bike = new THREE.Group();
  const frameMat = new THREE.MeshStandardMaterial({ color: '#3ad07f', roughness: 0.4, metalness: 0.5 });
  const darkMat = new THREE.MeshStandardMaterial({ color: '#15181c', roughness: 0.8 });
  const skinMat = new THREE.MeshStandardMaterial({ color: '#d9a679', roughness: 0.7 });
  const clothMat = new THREE.MeshStandardMaterial({ color: '#2b3a55', roughness: 0.9 });

  const wheelGeo = new THREE.TorusGeometry(1.1, 0.16, 8, 24);
  wheelGeo.rotateY(Math.PI / 2);
  const wheelF = new THREE.Mesh(wheelGeo, darkMat); wheelF.position.set(0, 1.1, 1.5);
  const wheelB = new THREE.Mesh(wheelGeo, darkMat); wheelB.position.set(0, 1.1, -1.5);
  bike.add(wheelF, wheelB);

  const tube = (len: number, r = 0.09) => new THREE.CylinderGeometry(r, r, len, 6);
  const bar = (geo: THREE.BufferGeometry, mat: THREE.Material, pos: [number, number, number], rot: [number, number, number]) => {
    const m = new THREE.Mesh(geo, mat); m.position.set(...pos); m.rotation.set(...rot); return m;
  };
  bike.add(bar(tube(3.0), frameMat, [0, 1.5, 0], [Math.PI / 2, 0, 0]));
  bike.add(bar(tube(1.6), frameMat, [0, 1.9, -0.9], [0.5, 0, 0]));
  bike.add(bar(tube(1.7), frameMat, [0, 1.9, 1.1], [-0.5, 0, 0]));
  bike.add(bar(tube(1.1, 0.06), darkMat, [0, 2.7, 1.35], [0, 0, Math.PI / 2]));
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.18, 0.9), darkMat); seat.position.set(0, 2.7, -0.95); bike.add(seat);

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.5, 1.1, 4, 8), clothMat);
  torso.position.set(0, 3.5, -0.4); torso.rotation.x = 0.5; bike.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 10), skinMat);
  head.position.set(0, 4.4, 0.15); bike.add(head);
  bike.add(bar(tube(1.4, 0.1), clothMat, [0, 3.6, 0.55], [-0.9, 0, 0]));
  const legL = new THREE.Mesh(tube(1.6, 0.13), clothMat); legL.position.set(0.28, 2.6, -0.2); bike.add(legL);
  const legR = new THREE.Mesh(tube(1.6, 0.13), clothMat); legR.position.set(-0.28, 2.6, -0.2); bike.add(legR);
  bike.scale.setScalar(F.bikeScale);

  // ---------------- state ----------------
  let heading = 0;
  const pos = new THREE.Vector3(F.start[0], 0, F.start[1]);
  const forward = new THREE.Vector3();
  const camGoal = new THREE.Vector3();
  const lookGoal = new THREE.Vector3();
  const lookAt = new THREE.Vector3();
  let camera = $state<THREE.PerspectiveCamera>();
  let pedal = 0;
  let dist = CAM.start.dist;   // eased actuals
  let pitch = CAM.start.pitch;

  const lerp = THREE.MathUtils.lerp;
  const rad = THREE.MathUtils.degToRad;

  useTask((delta) => {
    if (!camera) return;
    const inp = freeInput;

    // steer (steerSign fixes the inversion) + drive
    heading += inp.steer * F.turn * (F.steerSign ?? 1) * delta;
    forward.set(Math.sin(heading), 0, Math.cos(heading));
    const vel = inp.throttle * F.speed;
    pos.addScaledVector(forward, vel * delta);
    pos.x = THREE.MathUtils.clamp(pos.x, -F.bounds, F.bounds);
    pos.z = THREE.MathUtils.clamp(pos.z, -F.bounds, F.bounds);
    bike.position.copy(pos);
    bike.rotation.y = heading;

    // wheels + pedalling
    const spin = vel * delta * 0.9;
    wheelF.rotation.x += spin; wheelB.rotation.x += spin;
    pedal += spin;
    legL.rotation.x = 0.4 + Math.sin(pedal) * 0.5;
    legR.rotation.x = 0.4 + Math.sin(pedal + Math.PI) * 0.5;

    // ease dist/pitch toward input targets (so presets glide)
    const e = 1 - Math.exp(-7 * delta);
    dist += (THREE.MathUtils.clamp(inp.dist, 0, 1) - dist) * e;
    pitch += (THREE.MathUtils.clamp(inp.pitch, 0, 1) - pitch) * e;

    // orbit behind the rider's back: pitch tilts, dist zooms — always perpendicular to their back
    const boom = lerp(CAM.distRange[0], CAM.distRange[1], dist);
    const elev = rad(lerp(CAM.pitchDeg[0], CAM.pitchDeg[1], pitch));
    const horiz = Math.cos(elev) * boom;
    const vert = Math.sin(elev) * boom;
    camGoal.copy(pos).addScaledVector(forward, -horiz).setY(pos.y + vert + CAM.baseHeight);
    lookGoal.copy(pos).addScaledVector(forward, lerp(14, 0, pitch)).setY(pos.y + lerp(2.4, 0.8, pitch));

    const k = 1 - Math.exp(-6 * delta);
    camera.position.lerp(camGoal, k);
    lookAt.lerp(lookGoal, k);
    camera.lookAt(lookAt);
  });
</script>

<T.PerspectiveCamera makeDefault bind:ref={camera} fov={cfg.camera.fov} near={cfg.camera.near} far={cfg.camera.far} />
<T is={bike} />
