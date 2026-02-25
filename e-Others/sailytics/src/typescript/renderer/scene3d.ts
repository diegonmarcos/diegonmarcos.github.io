import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color,
  AmbientLight,
  DirectionalLight,
  PlaneGeometry,
  Mesh,
  GridHelper,
  BufferGeometry,
  BufferAttribute,
  MeshBasicMaterial,
  DoubleSide,
  RingGeometry,
  BoxGeometry,
  Group,
  Shape,
  ExtrudeGeometry,
  MeshStandardMaterial,
  CylinderGeometry,
  ArrowHelper,
  Vector3,
  LineSegments,
  LineBasicMaterial,
  Float32BufferAttribute,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Config, PhysicsState, Vec2D } from '../types/index';
import * as V from '../physics/vec';
import { AnimatedWater } from './water-shader';
import { UnderwaterTerrain } from './terrain';
import { FishSystem } from './fish-system';
import { WindParticles } from './wind-particles';
import { SkyDome } from './sky';

function mathTo3D(v: Vec2D): Vector3 {
  return new Vector3(v.x, 0, -v.y);
}

function setArr(arr: ArrowHelper, vecMath: Vec2D, scaleFactor = 0.008, minL = 0.5): void {
  const mag = V.magnitude(vecMath);
  if (mag < 0.1) {
    arr.setLength(0.01);
    return;
  }
  arr.setDirection(mathTo3D(V.normalize(vecMath)));
  arr.setLength(Math.max(minL, mag * scaleFactor), 2.5, 1.5);
}

function unRotate(v: Vec2D, angleDeg: number): Vec2D {
  const r = angleDeg * (Math.PI / 180);
  const cos = Math.cos(r);
  const sin = Math.sin(r);
  return {
    x: v.x * cos + v.y * sin,
    y: -v.x * sin + v.y * cos,
  };
}

export class Scene3DRenderer {
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private controls: OrbitControls;
  private observer: ResizeObserver;

  // Scene objects
  private boat: Group;
  private sailGrp: Group;
  private rotorGrp: Group;
  private cyl: Mesh;
  private wake: Mesh;
  private wake2: Mesh;
  private rudder: Mesh;

  // Arrow helpers
  private twArr: ArrowHelper;
  private awArr: ArrowHelper;
  private drArr: ArrowHelper;
  private hlArr: ArrowHelper;
  private kDragArr: ArrowHelper;
  private sLiftArr: ArrowHelper;
  private sDragArr: ArrowHelper;
  private rLiftArr: ArrowHelper;
  private rDragArr: ArrowHelper;

  // Enhanced 3D systems
  private animatedWater: AnimatedWater;
  private terrain: UnderwaterTerrain;
  private fishSystem: FishSystem;
  private windParticles: WindParticles;
  private skyDome: SkyDome;

  constructor(container: HTMLElement) {
    this.scene = new Scene();
    this.scene.background = new Color('#020617');

    this.camera = new PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.set(25, 15, 25);

    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.sortObjects = true;
    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    // Lighting
    this.scene.add(new AmbientLight(0xffffff, 0.6));
    const sun = new DirectionalLight(0xffffff, 0.8);
    sun.position.set(50, 50, 20);
    this.scene.add(sun);

    // Enhanced 3D systems
    this.skyDome = new SkyDome();
    this.scene.add(this.skyDome.mesh);

    this.terrain = new UnderwaterTerrain(500, 64);
    this.scene.add(this.terrain.mesh);

    this.animatedWater = new AnimatedWater(500, 128);
    this.scene.add(this.animatedWater.mesh);

    this.fishSystem = new FishSystem(200);
    this.scene.add(this.fishSystem.mesh);

    this.windParticles = new WindParticles(500);
    this.scene.add(this.windParticles.points);

    this.scene.add(new GridHelper(200, 50, 0x1e293b, 0x0f172a));

    // Wake
    const wakeGeo = new BufferGeometry();
    wakeGeo.setAttribute('position', new BufferAttribute(new Float32Array([0, 0, 0, -3, 0, 10, 3, 0, 10]), 3));
    this.wake = new Mesh(wakeGeo, new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, side: DoubleSide }));
    this.wake.position.y = 0.05;
    this.scene.add(this.wake);

    // 3D compass rose
    const rose = new Mesh(
      new RingGeometry(20, 22, 64),
      new MeshBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.3, side: DoubleSide }),
    );
    rose.rotation.x = -Math.PI / 2;
    rose.position.y = -0.5;
    this.scene.add(rose);

    const nMarker = new Mesh(new BoxGeometry(1, 1, 4), new MeshBasicMaterial({ color: 0x38bdf8 }));
    nMarker.position.set(0, -0.5, -21);
    this.scene.add(nMarker);

    // Boat group
    this.boat = new Group();
    this.scene.add(this.boat);

    // Hull
    const hullShape = new Shape();
    hullShape.moveTo(0, 7);
    hullShape.bezierCurveTo(2, 4, 3, -4, 2, -7);
    hullShape.lineTo(-2, -7);
    hullShape.bezierCurveTo(-3, -4, -2, 4, 0, 7);
    const hullGeo = new ExtrudeGeometry(hullShape, { depth: 2, bevelEnabled: true, bevelSize: 0.3, bevelThickness: 0.3 });
    hullGeo.rotateX(Math.PI / 2);
    hullGeo.translate(0, 0.5, 0);
    this.boat.add(new Mesh(hullGeo, new MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 })));

    // Keel
    const keel = new Mesh(new BoxGeometry(0.4, 3, 4), new MeshStandardMaterial({ color: 0x334155 }));
    keel.position.set(0, -1.5, 0);
    this.boat.add(keel);

    // Deck
    const deck = new Mesh(new PlaneGeometry(4.5, 13.5), new MeshStandardMaterial({ color: 0x451a03 }));
    deck.rotation.x = -Math.PI / 2;
    deck.position.y = 2.51;
    this.boat.add(deck);

    // Sail group
    this.sailGrp = new Group();
    this.boat.add(this.sailGrp);
    const mast = new Mesh(new CylinderGeometry(0.15, 0.15, 18), new MeshStandardMaterial({ color: 0x0f172a }));
    mast.position.y = 9;
    this.sailGrp.add(mast);
    const sailGeo = new PlaneGeometry(6, 14);
    sailGeo.translate(0, 8, 3.5);
    this.sailGrp.add(new Mesh(sailGeo, new MeshStandardMaterial({ color: 0xfde047, side: DoubleSide, transparent: true, opacity: 0.95 })));

    // Rotor group
    this.rotorGrp = new Group();
    this.boat.add(this.rotorGrp);
    this.cyl = new Mesh(
      new CylinderGeometry(1.25, 1.25, 1, 32),
      new MeshStandardMaterial({ color: 0xfdba74, roughness: 0.5 }),
    );
    this.rotorGrp.add(this.cyl);
    for (let i = 0; i < 4; i++) {
      const rib = new Mesh(new BoxGeometry(0.15, 1, 2.6), new MeshStandardMaterial({ color: 0xea580c }));
      rib.rotation.y = (Math.PI / 4) * i;
      this.cyl.add(rib);
    }

    // Rudder
    this.rudder = new Mesh(
      new BoxGeometry(0.3, 2.5, 1.5),
      new MeshStandardMaterial({ color: 0x334155 }),
    );
    this.rudder.position.set(0, -0.5, -7.5);
    this.boat.add(this.rudder);

    // Rigging lines (forestay + backstay)
    const riggingGeo = new BufferGeometry();
    const riggingVerts = new Float32Array([
      0, 18, 0,   0, 2.5, 7,   // Forestay: mast top to bow
      0, 18, 0,   0, 2.5, -6,  // Backstay: mast top to stern
    ]);
    riggingGeo.setAttribute('position', new Float32BufferAttribute(riggingVerts, 3));
    const rigging = new LineSegments(
      riggingGeo,
      new LineBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.6 }),
    );
    this.sailGrp.add(rigging);

    // Second wake trail (for higher speeds)
    const wake2Geo = new BufferGeometry();
    wake2Geo.setAttribute('position', new BufferAttribute(new Float32Array([0, 0, 0, -5, 0, 15, 5, 0, 15]), 3));
    this.wake2 = new Mesh(wake2Geo, new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15, side: DoubleSide }));
    this.wake2.position.y = 0.03;
    this.scene.add(this.wake2);

    // Arrow helpers — global
    this.twArr = new ArrowHelper(new Vector3(0, 0, -1), new Vector3(0, 15, 0), 10, 0x3b82f6, 2.5, 1.5);
    this.scene.add(this.twArr);

    // Arrow helpers — boat local
    this.awArr = new ArrowHelper(new Vector3(), new Vector3(0, 3, -7), 10, 0x22d3ee, 2.5, 1.5);
    this.boat.add(this.awArr);
    this.drArr = new ArrowHelper(new Vector3(), new Vector3(0, 3, 0), 10, 0x22c55e, 3, 2);
    this.boat.add(this.drArr);
    this.hlArr = new ArrowHelper(new Vector3(), new Vector3(0, 3, 0), 10, 0xef4444, 3, 2);
    this.boat.add(this.hlArr);
    this.kDragArr = new ArrowHelper(new Vector3(0, 0, 1), new Vector3(0, -2, 0), 10, 0x4f46e5, 2.5, 1.5);
    this.boat.add(this.kDragArr);

    // Arrow helpers — sail local
    this.sLiftArr = new ArrowHelper(new Vector3(), new Vector3(0, 6, 0), 10, 0xf472b6, 2.5, 1.5);
    this.sailGrp.add(this.sLiftArr);
    this.sDragArr = new ArrowHelper(new Vector3(), new Vector3(0, 6, 0), 10, 0xfb923c, 2.5, 1.5);
    this.sailGrp.add(this.sDragArr);

    // Arrow helpers — rotor local
    this.rLiftArr = new ArrowHelper(new Vector3(), new Vector3(0, 6, 0), 10, 0xf472b6, 2.5, 1.5);
    this.rotorGrp.add(this.rLiftArr);
    this.rDragArr = new ArrowHelper(new Vector3(), new Vector3(0, 6, 0), 10, 0xfb923c, 2.5, 1.5);
    this.rotorGrp.add(this.rDragArr);

    // Resize observer with debounce to avoid loop errors
    let resizeTimeout: number;
    this.observer = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        this.resize(container);
      }, 0);
    });
    this.observer.observe(container);
  }

  private resize(container: HTMLElement): void {
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Only resize if dimensions are valid
    if (width > 0 && height > 0) {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }
  }

  setMode(mode: Config['mode']): void {
    this.sailGrp.visible = mode === 'sail' || mode === 'hybrid';
    this.rotorGrp.visible = mode === 'rotor' || mode === 'hybrid';
    this.sLiftArr.visible = this.sailGrp.visible;
    this.sDragArr.visible = this.sailGrp.visible;
    this.rLiftArr.visible = this.rotorGrp.visible;
    this.rDragArr.visible = this.rotorGrp.visible;

    this.sailGrp.position.z = mode === 'hybrid' ? -2.5 : 0;
    this.rotorGrp.position.z = mode === 'hybrid' ? 3 : 0;
  }

  update(cfg: Config, phys: PhysicsState, dt: number): void {
    // Update enhanced 3D systems
    this.animatedWater.update();
    this.animatedWater.setWindDirection(cfg.twd, cfg.tws);
    this.fishSystem.update(dt);
    this.windParticles.setWindDirection(cfg.twd, cfg.tws);
    this.windParticles.update(dt);

    // Boat heading + heel animation
    this.boat.rotation.y = -cfg.hdg * (Math.PI / 180);

    // Compute heel angle from forces (simplified)
    const mastH = 10;
    const heelingMoment = phys.heelN * mastH;
    const rightingMoment = cfg.mass * 9.81 * 0.35;
    const heelRad = rightingMoment > 0
      ? Math.asin(Math.min(1, Math.max(-1, heelingMoment / rightingMoment)))
      : 0;
    this.boat.rotation.z = heelRad * 0.5; // Damped heel for visual effect

    this.sailGrp.rotation.y = -cfg.sang * (Math.PI / 180);

    // Rotor animation
    if (this.rotorGrp.visible) {
      this.cyl.rotation.y -= (cfg.rpm * 2 * Math.PI / 60) * dt;
      this.cyl.scale.set(1, cfg.rh, 1);
      this.cyl.position.y = cfg.rh / 2 + 2.5;
      this.rLiftArr.position.y = cfg.rh / 2 + 2.5;
      this.rDragArr.position.y = cfg.rh / 2 + 2.5;
    }

    // Wake — scales with speed
    this.wake.position.set(this.boat.position.x, 0.05, this.boat.position.z);
    this.wake.rotation.y = this.boat.rotation.y;
    const wkScl = Math.max(0, (cfg.bs - 2) / 5);
    this.wake.scale.set(wkScl, 1, wkScl * 2);
    this.wake.visible = cfg.bs > 2;

    // Second wake trail (wider, appears at higher speeds)
    this.wake2.position.set(this.boat.position.x, 0.03, this.boat.position.z);
    this.wake2.rotation.y = this.boat.rotation.y;
    const wk2Scl = Math.max(0, (cfg.bs - 5) / 4);
    this.wake2.scale.set(wk2Scl, 1, wk2Scl * 1.5);
    this.wake2.visible = cfg.bs > 5;

    // Global arrows
    setArr(this.twArr, phys.vTW, 1.5, 2);

    // Apparent wind in boat-local space
    const hdgRad = cfg.hdg * (Math.PI / 180);
    const localAW: Vec2D = {
      x: phys.vAW.x * Math.cos(hdgRad) + phys.vAW.y * Math.sin(hdgRad),
      y: -phys.vAW.x * Math.sin(hdgRad) + phys.vAW.y * Math.cos(hdgRad),
    };
    setArr(this.awArr, localAW, 1.5, 2);

    // Drive & heel — linear scale with clamped max
    const forceScale = (val: number) => Math.min(Math.abs(val) * 0.005, 15);

    if (Math.abs(phys.driveN) > 1) {
      this.drArr.setDirection(mathTo3D(V.normalize({ x: 0, y: phys.driveN })));
      this.drArr.setLength(Math.max(1, forceScale(phys.driveN)), 2.5, 1.5);
    } else {
      this.drArr.setLength(0.01);
    }

    if (Math.abs(phys.heelN) > 1) {
      this.hlArr.setDirection(mathTo3D(V.normalize({ x: phys.heelN, y: 0 })));
      this.hlArr.setLength(Math.max(1, forceScale(phys.heelN)), 2.5, 1.5);
    } else {
      this.hlArr.setLength(0.01);
    }

    if (phys.hullDragN > 1) {
      this.kDragArr.setLength(Math.max(1, forceScale(phys.hullDragN)), 2.5, 1.5);
    } else {
      this.kDragArr.setLength(0.01);
    }

    // Sail arrows (un-rotate by heading + sail angle)
    if (this.sailGrp.visible) {
      const sLAng = cfg.hdg + cfg.sang;
      setArr(this.sLiftArr, unRotate(phys.sail.vL, sLAng), 0.008);
      setArr(this.sDragArr, unRotate(phys.sail.vD, sLAng), 0.008);
    }

    // Rotor arrows (un-rotate by heading only)
    if (this.rotorGrp.visible) {
      setArr(this.rLiftArr, unRotate(phys.rotor.vL, cfg.hdg), 0.008);
      setArr(this.rDragArr, unRotate(phys.rotor.vD, cfg.hdg), 0.008);
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}
