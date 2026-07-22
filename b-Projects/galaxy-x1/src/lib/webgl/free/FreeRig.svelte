<script lang="ts">
  // Free-ride controller: procedural bicycle + rider you steer with the joystick.
  // Camera orbits behind the rider's back with two independent params:
  //   dist  = boom length  (pinch / wheel)        first-person(close) .. far
  //   pitch = elevation    (2-finger drag / shift-wheel)  parallel .. isometric .. top-down
  import * as THREE from 'three';
  import { onMount } from 'svelte';
  import { T, useTask, useThrelte } from '@threlte/core';
  import type { SceneConfig } from '../types';
  import { freeInput } from './freeInput';
  import { gltfLoader } from '../assets/loaders';
  import { meshUrl } from '../assets/catalog';
  import galaxyCfg from '$lib/data/galaxy.json';

  let { cfg }: { cfg: SceneConfig } = $props();
  const F = (cfg as any).free;
  const CAM = F.cam;

  // ---------------- procedural bicycle + rider ----------------
  const bike = new THREE.Group();
  const frameMat = new THREE.MeshStandardMaterial({ color: '#3ad07f', roughness: 0.4, metalness: 0.5 });
  const darkMat = new THREE.MeshStandardMaterial({ color: '#15181c', roughness: 0.8 });

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
  const seatGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.9, 8); // octagonal seat, no box
  const seat = new THREE.Mesh(seatGeo, darkMat); seat.position.set(0, 2.7, -0.95); seat.rotation.x = Math.PI / 2; seat.scale.set(1, 1, 0.4); bike.add(seat);

  bike.scale.setScalar(F.bikeScale);

  // real GLB rider (man) seated on the bike, animated; scale/offset/clip are data-driven
  const R = F.rider;
  const { renderer } = useThrelte();
  let mixer: THREE.AnimationMixer | undefined;
  onMount(() => {
    gltfLoader(renderer).load(
      meshUrl(R.asset),
      (g) => {
        const m = g.scene;
        m.scale.setScalar(R.scale);
        m.position.set(R.offset[0], R.offset[1], R.offset[2]);
        m.rotation.y = R.faceY ?? 0;
        bike.add(m);
        if (g.animations?.length) {
          mixer = new THREE.AnimationMixer(m);
          const clip = g.animations.find((a) => a.name === R.clip) ?? g.animations[0];
          mixer.clipAction(clip).play();
        }
      },
      undefined,
      (e) => console.warn('rider load failed', R.asset, e)
    );
  });

  // ---------------- state ----------------
  let heading = 0;
  const pos = new THREE.Vector3(F.start[0], 0, F.start[1]);
  const forward = new THREE.Vector3();
  const camGoal = new THREE.Vector3();
  const lookGoal = new THREE.Vector3();
  const lookAt = new THREE.Vector3();
  let camera = $state<THREE.PerspectiveCamera>();
  let dist = CAM.start.dist;   // eased actuals
  let pitch = CAM.start.pitch;

  const lerp = THREE.MathUtils.lerp;
  const rad = THREE.MathUtils.degToRad;

  // galaxy overview: where the camera flies when zoomed all the way out
  const GAL = galaxyCfg as any;
  const galTarget = new THREE.Vector3(GAL.anchor[0], GAL.anchor[1], GAL.anchor[2])
    .add(new THREE.Vector3(GAL.camera.target[0], GAL.camera.target[1], GAL.camera.target[2]).multiplyScalar(GAL.scale));
  const galCam = galTarget.clone().add(new THREE.Vector3(0, GAL.camera.height, GAL.camera.distance).multiplyScalar(GAL.scale));
  const galOffset = galCam.clone().sub(galTarget);
  const UP = new THREE.Vector3(0, 1, 0);
  const galOff = new THREE.Vector3();
  const galCamNow = new THREE.Vector3();

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
    mixer?.update(delta);

    // right camera joystick: held orbit (yaw) + tilt (pitch) as velocities
    inp.yaw += inp.yawRate * (CAM.stickYaw ?? 1.4) * delta;
    inp.pitch = THREE.MathUtils.clamp(inp.pitch + inp.pitchRate * (CAM.stickPitch ?? 0.9) * delta, 0, 1);

    // ease dist/pitch toward input targets (so presets glide)
    const e = 1 - Math.exp(-7 * delta);
    dist += (THREE.MathUtils.clamp(inp.dist, 0, 1) - dist) * e;
    pitch += (THREE.MathUtils.clamp(inp.pitch, 0, 1) - pitch) * e;

    // orbit behind the rider's back: pitch tilts, dist zooms — always perpendicular to their back
    const boom = lerp(CAM.distRange[0], CAM.distRange[1], dist);
    const elev = rad(lerp(CAM.pitchDeg[0], CAM.pitchDeg[1], pitch));
    const horiz = Math.cos(elev) * boom;
    const vert = Math.sin(elev) * boom;
    // camera behind the rider's back, orbitable sideways by yaw (full 3D control)
    const camAngle = heading + Math.PI + inp.yaw;
    camGoal.set(pos.x + Math.sin(camAngle) * horiz, pos.y + vert + CAM.baseHeight, pos.z + Math.cos(camAngle) * horiz);
    const lead = lerp(14, 0, pitch) * Math.cos(inp.yaw);
    lookGoal.set(pos.x + forward.x * lead, pos.y + lerp(2.4, 0.8, pitch), pos.z + forward.z * lead);

    // zoom all the way out → fly up into the Milky Way (yaw orbits the galaxy too)
    const galT = THREE.MathUtils.smoothstep(dist, GAL.reveal[0], GAL.reveal[1]);
    freeInput.galaxy = galT;
    if (galT > 0) {
      galOff.copy(galOffset).applyAxisAngle(UP, inp.yaw);
      galCamNow.copy(galTarget).add(galOff);
      camGoal.lerp(galCamNow, galT);
      lookGoal.lerp(galTarget, galT);
    }

    const k = 1 - Math.exp(-6 * delta);
    camera.position.lerp(camGoal, k);
    lookAt.lerp(lookGoal, k);
    camera.lookAt(lookAt);
  });
</script>

<T.PerspectiveCamera makeDefault bind:ref={camera} fov={cfg.camera.fov} near={cfg.camera.near} far={cfg.camera.far} />
<T is={bike} />
