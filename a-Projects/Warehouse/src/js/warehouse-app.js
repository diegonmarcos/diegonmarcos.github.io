import { SeededPRNG } from './prng.js';
import { MARBLE_DIF_CONFIG } from './marble-config.js';
import { JSONDatabaseSim } from './database-sim.js';
import { FlowSimulator } from './flow-sim.js';

export class SlabWarehouseTwin {
    constructor() {
        this.slabs = [];
        this.slabMap = new Map();
        this.selectedSlab = null;
        this.activeFilters = { search: '', type: 'All', status: 'All' };
        this.canvas = document.getElementById('render-canvas');
        this.engine = null;
        this.scene = null;
        this.camera = null;
        this.highlightLayer = null;
        this.slabTextures = {};
        this.sharedMaterials = {};
        this.shadowGenerator = null;

        // State tracker to switch loops dynamically
        this.activeTab = '3d';

        // Multitab pick tracking states
        this.currentlyHighlightedSlabId = null;

        // Multitab caching arrays
        this.cachedViewerTabs = [];
        this.activeCachedTabId = null;

        // Isolated single-slab close-up engine variables
        this.singleSlabEngine = null;
        this.singleSlabScene = null;
        this.singleSlabMesh = null;
        this.activeViewerMode = '2D';

        // 3D Carousel (Slab Slider Engine Variables)
        this.sliderEngine = null;
        this.sliderScene = null;
        this.sliderCamera = null;
        this.sliderParentNode = null;
        this.sliderSlabMeshes = [];
        this.uniqueSlabsDataset = [];
        this.activeSliderIndex = 0;

        // Visualizer Tab dynamic properties
        this.visConfig = {
            densityScale: 1.0,
            roughness: 0.12,
            goldSparkle: true
        };

        // Supply Flow dashboard valuation basis: 'accounting' (accrual, full
        // booked value at every stage) or 'cash' (only stages that have
        // actually been paid/collected count toward value).
        this.flowMode = 'accounting';
        // Which of the three Supply Flow sections (A/B/C) is on screen.
        this.flowSection = 'A';
    }

    init() {
        try {
            // 1. Fetch, parse, and load inventory dataset
            this.loadInventoryFromJSON();

            // 2. Pre-generate and cache realistic offscreen canvases
            this.pregenerateProfileCanvases();

            // 3. Load UI bindings
            this.renderDatabaseTable();
            this.setupUIHandlers();
            this.setupTopbarLayout();

            // 4. Initiate 3D Warehouse Environment
            this.init3D();

            // 5. Populate initial statistics display
            this.updateGlobalWeights();

            // 6. Lazily preload every other tab's heavy 3D assets in the
            // background right now, instead of stalling on first click.
            this.scheduleBackgroundPreload();
        } catch (e) {
            console.error("Core Initialization Error", e);
        } finally {
            const loader = document.getElementById('canvas-loader');
            if (loader) loader.classList.add('hidden');
        }
    }

    // Builds the Slab Slider's Babylon engine/scene/meshes right after the
    // main warehouse is up, while the browser is idle, so the tab is ready
    // to render the instant it's clicked instead of paying that cost then.
    // Deferred (idle callback, or a short timeout where unsupported) so it
    // never competes with the first paint of the 3D Warehouse tab.
    scheduleBackgroundPreload() {
        const runPreload = () => {
            try {
                this.initSlabSliderEngine();
            } catch (e) {
                console.error('Background preload of Slab Slider failed', e);
            }
        };
        if ('requestIdleCallback' in window) {
            requestIdleCallback(runPreload, { timeout: 2500 });
        } else {
            setTimeout(runPreload, 400);
        }
    }

    loadInventoryFromJSON() {
        const rawJSONString = JSONDatabaseSim.generateJSONDataset();
        this.slabs = JSON.parse(rawJSONString);

        const uniqueSlabsMap = new Map();
        this.slabs.forEach(slab => {
            const groupKey = `${slab.material}-${slab.size}`;
            if (!uniqueSlabsMap.has(groupKey)) {
                uniqueSlabsMap.set(groupKey, {
                    material: slab.material,
                    size: slab.size,
                    width: slab.width,
                    height: slab.height,
                    thickness: slab.thickness,
                    colour: slab.colour,
                    weight: slab.weight,
                    price: slab.price,
                    seed: slab.seed,
                    instances: []
                });
            }
            uniqueSlabsMap.get(groupKey).instances.push(slab);
        });

        this.uniqueSlabsDataset = Array.from(uniqueSlabsMap.values());
    }

    pregenerateProfileCanvases() {
        this.uniqueSlabsDataset.forEach((profile, index) => {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d');

            this.drawDeterministicMarble(ctx, profile.material, profile.seed, 512);
            profile.canvasElement = canvas;
        });
    }

    drawDeterministicMarble(ctx, materialType, seedHex, size) {
        const seedVal = parseInt(seedHex.replace("0x", ""), 16);
        const prng = new SeededPRNG(seedVal);
        const config = MARBLE_DIF_CONFIG[materialType];

        const gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, config.base);
        gradient.addColorStop(1, this.blendHexColour(config.base, "#000000", 0.12));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        ctx.globalAlpha = 0.18;
        for (let i = 0; i < 8; i++) {
            const radius = prng.nextRange(size * 0.12, size * 0.38);
            const cX = prng.nextRange(0, size);
            const cY = prng.nextRange(0, size);
            const blobGrad = ctx.createRadialGradient(cX, cY, 0, cX, cY, radius);
            blobGrad.addColorStop(0, config.veins[0]);
            blobGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = blobGrad;
            ctx.beginPath();
            ctx.arc(cX, cY, radius, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.globalAlpha = 1.0;
        config.veins.forEach((veinColor, idx) => {
            ctx.strokeStyle = veinColor;
            const veinCount = (idx === 0) ? 8 : 4;

            for (let v = 0; v < veinCount; v++) {
                ctx.lineWidth = (idx === 0) ? prng.nextRange(1.8, 3.8) : prng.nextRange(0.5, 1.2);

                ctx.beginPath();
                let currX = prng.nextRange(0, size);
                let currY = (v % 2 === 0) ? 0 : prng.nextRange(0, size);
                ctx.moveTo(currX, currY);

                const steps = 14;
                for (let step = 0; step < steps; step++) {
                    const angle = (v % 2 === 0) ? (Math.PI / 2) : 0;
                    const dX = Math.cos(angle) * (size / steps) + prng.nextRange(-size / 6, size / 6);
                    const dY = Math.sin(angle) * (size / steps) + prng.nextRange(-size / 6, size / 6);
                    currX += dX;
                    currY += dY;
                    ctx.lineTo(currX, currY);
                }
                ctx.stroke();
            }
        });

        if (materialType === 'Calacatta Gold') {
            ctx.globalAlpha = 0.85;
            ctx.fillStyle = '#dfb33d';
            for (let i = 0; i < 40; i++) {
                ctx.beginPath();
                ctx.arc(prng.nextRange(0, size), prng.nextRange(0, size), prng.nextRange(1.2, 3.2), 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    init3D() {
        this.engine = new BABYLON.Engine(this.canvas, true, { antialias: true, stencil: true, limitDeviceRatio: 2.0 });
        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0.015, 0.02, 0.035, 1.0);

        this.highlightLayer = new BABYLON.HighlightLayer("slabHighlighter", this.scene);
        this.highlightLayer.blurHorizontalSize = 1.6;
        this.highlightLayer.blurVerticalSize = 1.6;

        // Start with Isometric projection parameters directly as default
        this.camera = new BABYLON.ArcRotateCamera("WarehouseCamera", -Math.PI / 4, Math.PI / 3.1, 18.0, new BABYLON.Vector3(0, 1.2, 0), this.scene);
        this.camera.attachControl(this.canvas, true, false, 0);
        this.camera.lowerRadiusLimit = 1.5;
        this.camera.upperRadiusLimit = 55.0;
        this.camera.lowerBetaLimit = 0.05;
        this.camera.upperBetaLimit = Math.PI / 2 - 0.02;
        this.camera.wheelPrecision = 40;

        const ambientLight = new BABYLON.HemisphericLight("ambientLight", new BABYLON.Vector3(0, 1, 0), this.scene);
        ambientLight.intensity = 0.55;
        ambientLight.groundColor = new BABYLON.Color3(0.02, 0.04, 0.08);

        const dirLight = new BABYLON.DirectionalLight("sunlight", new BABYLON.Vector3(-0.55, -1.0, -0.35), this.scene);
        dirLight.position = new BABYLON.Vector3(15, 35, 10);
        dirLight.intensity = 1.25;

        this.shadowGenerator = new BABYLON.ShadowGenerator(2048, dirLight);
        this.shadowGenerator.useBlurExponentialShadowMap = true;
        this.shadowGenerator.blurKernel = 40;
        this.shadowGenerator.bias = 0.0004;

        this.createWarehouseEnvironment();
        this.initMaterials();
        this.buildAFrameRacksAndSlabs();
        this.setupPostProcessing();
        this.setupInteractivePicking();

        this.engine.runRenderLoop(() => {
            if (this.activeTab === '3d') {
                this.scene.render();
                document.getElementById('render-fps').innerText = Math.round(this.engine.getFps()) + " FPS";
            }
        });

        window.addEventListener('resize', () => this.engine.resize());
    }

    createWarehouseEnvironment() {
        const ground = BABYLON.MeshBuilder.CreateGround("warehouseFloor", { width: 100, height: 100 }, this.scene);
        ground.receiveShadows = true;

        const floorMat = new BABYLON.StandardMaterial("concreteFloor", this.scene);
        floorMat.diffuseColor = new BABYLON.Color3(0.04, 0.05, 0.08);
        floorMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);
        ground.material = floorMat;

        const gridLines = [];
        for (let i = -50; i <= 50; i += 5) {
            gridLines.push([new BABYLON.Vector3(i, 0.005, -50), new BABYLON.Vector3(i, 0.005, 50)]);
            gridLines.push([new BABYLON.Vector3(-50, 0.005, i), new BABYLON.Vector3(50, 0.005, i)]);
        }
        const grids = BABYLON.MeshBuilder.CreateLineSystem("floorGrid", { lines: gridLines }, this.scene);
        grids.color = new BABYLON.Color3(0.06, 0.1, 0.18);

        const shieldMat = new BABYLON.StandardMaterial("lampShield", this.scene);
        shieldMat.diffuseColor = new BABYLON.Color3(0.12, 0.14, 0.18);
        shieldMat.specularColor = new BABYLON.Color3(0.1, 0.1, 0.1);

        for (let aisle = 1; aisle <= 5; aisle++) {
            const aisleX = (aisle - 3) * 4.5;
            for (let zOffset of [-12, 0, 12]) {
                const cable = BABYLON.MeshBuilder.CreateCylinder(`cable-${aisle}-${zOffset}`, { height: 4.5, diameter: 0.04 }, this.scene);
                cable.position = new BABYLON.Vector3(aisleX, 11.75, zOffset);
                cable.material = shieldMat;

                const shield = BABYLON.MeshBuilder.CreateCylinder(`shield-${aisle}-${zOffset}`, { height: 0.4, diameterTop: 0.2, diameterBottom: 1.2 }, this.scene);
                shield.position = new BABYLON.Vector3(aisleX, 9.5, zOffset);
                shield.material = shieldMat;
            }
        }
    }

    initMaterials() {
        const steelMat = new BABYLON.StandardMaterial("rackSteel", this.scene);
        steelMat.diffuseColor = new BABYLON.Color3(0.08, 0.09, 0.12);
        steelMat.specularColor = new BABYLON.Color3(0.3, 0.3, 0.3);
        this.sharedMaterials['rackSteel'] = steelMat;

        const woodMat = new BABYLON.StandardMaterial("rackWood", this.scene);
        woodMat.diffuseColor = new BABYLON.Color3(0.32, 0.2, 0.12);
        woodMat.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05);
        this.sharedMaterials['rackWood'] = woodMat;

        this.uniqueSlabsDataset.forEach((profile, index) => {
            const mat = new BABYLON.StandardMaterial(`profile-mat-${index}`, this.scene);

            const dynTex = new BABYLON.DynamicTexture(`dynTex-profile-${index}`, { width: 512, height: 512 }, this.scene, true);
            const ctx = dynTex.getContext();
            ctx.drawImage(profile.canvasElement, 0, 0);
            dynTex.update();

            mat.diffuseTexture = dynTex;
            mat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            mat.specularPower = 64;

            this.sharedMaterials[`profile-${profile.material}-${profile.size}`] = mat;
        });
    }

    buildAFrameRacksAndSlabs() {
        const steelMat = this.sharedMaterials['rackSteel'];
        const woodMat = this.sharedMaterials['rackWood'];
        const leanAngle = 0.12;

        for (let line = 1; line <= 5; line++) {
            const aisleX = (line - 3) * 4.5;

            for (let aFrame = 1; aFrame <= 7; aFrame++) {
                const zCenter = (aFrame - 4) * 2.75;

                const baseRailL = BABYLON.MeshBuilder.CreateBox(`af-basel-${line}-${aFrame}`, { width: 0.14, height: 0.08, depth: 1.8 }, this.scene);
                baseRailL.position = new BABYLON.Vector3(aisleX - 0.52, 0.04, zCenter);
                baseRailL.material = steelMat;
                this.shadowGenerator.addShadowCaster(baseRailL);
                baseRailL.receiveShadows = true;

                const baseRailR = BABYLON.MeshBuilder.CreateBox(`af-baser-${line}-${aFrame}`, { width: 0.14, height: 0.08, depth: 1.8 }, this.scene);
                baseRailR.position = new BABYLON.Vector3(aisleX + 0.52, 0.04, zCenter);
                baseRailR.material = steelMat;
                this.shadowGenerator.addShadowCaster(baseRailR);
                baseRailR.receiveShadows = true;

                for (let zOffset of [-0.8, 0, 0.8]) {
                    const tie = BABYLON.MeshBuilder.CreateBox(`af-tie-${line}-${aFrame}-${zOffset}`, { width: 1.18, height: 0.06, depth: 0.1 }, this.scene);
                    tie.position = new BABYLON.Vector3(aisleX, 0.04, zCenter + zOffset);
                    tie.material = steelMat;
                    this.shadowGenerator.addShadowCaster(tie);
                }

                for (let zOffset of [-0.8, 0.8]) {
                    const frameH = 2.1;
                    const strutL = BABYLON.MeshBuilder.CreateBox(`af-strutl-${line}-${aFrame}-${zOffset}`, { width: 0.06, height: frameH, depth: 0.1 }, this.scene);
                    strutL.setPivotPoint(new BABYLON.Vector3(0, -frameH/2, 0));
                    strutL.position = new BABYLON.Vector3(aisleX - 0.46, 0.08, zCenter + zOffset);
                    strutL.rotation.z = -leanAngle;
                    strutL.material = steelMat;
                    this.shadowGenerator.addShadowCaster(strutL);

                    const strutR = BABYLON.MeshBuilder.CreateBox(`af-strutr-${line}-${aFrame}-${zOffset}`, { width: 0.06, height: frameH, depth: 0.1 }, this.scene);
                    strutR.setPivotPoint(new BABYLON.Vector3(0, -frameH/2, 0));
                    strutR.position = new BABYLON.Vector3(aisleX + 0.46, 0.08, zCenter + zOffset);
                    strutR.rotation.z = leanAngle;
                    strutR.material = steelMat;
                    this.shadowGenerator.addShadowCaster(strutR);
                }

                const timberL = BABYLON.MeshBuilder.CreateBox(`af-timberl-${line}-${aFrame}`, { width: 0.18, height: 0.04, depth: 1.7 }, this.scene);
                timberL.position = new BABYLON.Vector3(aisleX - 0.52, 0.09, zCenter);
                timberL.material = woodMat;
                this.shadowGenerator.addShadowCaster(timberL);

                const timberR = BABYLON.MeshBuilder.CreateBox(`af-timberr-${line}-${aFrame}`, { width: 0.18, height: 0.04, depth: 1.7 }, this.scene);
                timberR.position = new BABYLON.Vector3(aisleX + 0.52, 0.09, zCenter);
                timberR.material = woodMat;
                this.shadowGenerator.addShadowCaster(timberR);

                const leftSlabs = this.slabs.filter(s => s.line === line && s.aFrame === aFrame && s.side === 'Left');
                const rightSlabs = this.slabs.filter(s => s.line === line && s.aFrame === aFrame && s.side === 'Right');

                leftSlabs.forEach((slab, idx) => {
                    const spacerGap = 0.02;
                    const totalStep = (slab.thickness + spacerGap) / Math.cos(leanAngle);
                    const xCoord = aisleX - 0.42 - idx * totalStep;
                    const zStaggerOffset = Math.sin(line + aFrame + idx) * 0.06;
                    const zCoord = zCenter + zStaggerOffset;

                    const slabMesh = BABYLON.MeshBuilder.CreateBox(slab.id, {
                        width: slab.thickness,
                        height: slab.height,
                        depth: slab.width
                    }, this.scene);

                    slabMesh.position = new BABYLON.Vector3(xCoord, slab.height / 2 + 0.11, zCoord);
                    slabMesh.rotation.z = -leanAngle;

                    slabMesh.material = this.sharedMaterials[`profile-${slab.material}-${slab.size}`];
                    this.shadowGenerator.addShadowCaster(slabMesh);
                    slabMesh.receiveShadows = true;
                    slabMesh.isPickable = true;

                    this.slabMap.set(slab.id, slabMesh);
                });

                rightSlabs.forEach((slab, idx) => {
                    const spacerGap = 0.02;
                    const totalStep = (slab.thickness + spacerGap) / Math.cos(leanAngle);
                    const xCoord = aisleX + 0.42 + idx * totalStep;
                    const zStaggerOffset = Math.cos(line + aFrame + idx) * 0.06;
                    const zCoord = zCenter + zStaggerOffset;

                    const slabMesh = BABYLON.MeshBuilder.CreateBox(slab.id, {
                        width: slab.thickness,
                        height: slab.height,
                        depth: slab.width
                    }, this.scene);

                    slabMesh.position = new BABYLON.Vector3(xCoord, slab.height / 2 + 0.11, zCoord);
                    slabMesh.rotation.z = leanAngle;

                    slabMesh.material = this.sharedMaterials[`profile-${slab.material}-${slab.size}`];
                    this.shadowGenerator.addShadowCaster(slabMesh);
                    slabMesh.receiveShadows = true;
                    slabMesh.isPickable = true;

                    this.slabMap.set(slab.id, slabMesh);
                });
            }
        }
    }

    setupPostProcessing() {
        const pipeline = new BABYLON.DefaultRenderingPipeline("cinematicPipeline", true, this.scene, [this.camera]);
        pipeline.bloomEnabled = true;
        pipeline.bloomThreshold = 0.85;
        pipeline.bloomWeight = 0.22;
        pipeline.bloomKernel = 48;
        pipeline.fxaaEnabled = true;
        pipeline.sharpenEnabled = true;
        pipeline.sharpen.edgeAmount = 0.25;
        pipeline.imageProcessingEnabled = true;
        pipeline.imageProcessing.contrast = 1.1;
        pipeline.imageProcessing.exposure = 1.05;
    }

    setupInteractivePicking() {
        this.scene.onPointerObservable.add((pointerInfo) => {
            // Using POINTERTAP ensures drag/pinch actions (zoom/pan) are ignored
            if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERTAP) {
                const pickInfo = pointerInfo.pickInfo;
                if (!pickInfo) return;

                const mesh = pickInfo.pickedMesh;

                // Check if a valid slab was specifically tapped
                if (mesh && this.slabMap.has(mesh.name) && mesh.visibility === 1.0) {
                    const slabId = mesh.name;
                    this.previewSlab3DOnly(slabId);
                } else {
                    // Tapped empty space, the floor, or a rack — same exit as the backdrop
                    this.exitSlabPreview();
                }
            }
        });
    }

    previewSlab3DOnly(slabId) {
        const slabData = this.slabs.find(s => s.id === slabId);
        if (!slabData) return;

        if (this.currentlyHighlightedSlabId) {
            const prevMesh = this.slabMap.get(this.currentlyHighlightedSlabId);
            if (prevMesh) this.highlightLayer.removeMesh(prevMesh);
        }

        this.currentlyHighlightedSlabId = slabId;

        const mesh = this.slabMap.get(slabId);
        if (mesh) {
            this.highlightLayer.addMesh(mesh, new BABYLON.Color3(0.9, 0.9, 1.0));

            // Align camera to sit directly face-on (looking at the flat wide side of the V-leaning rack)
            const faceOnAlpha = slabData.side === 'Left' ? Math.PI : 0;

            // Set eye-level beta, tilted slightly down for depth view
            const faceOnBeta = Math.PI / 2.1;

            // Framed beautifully so the complete slab is visible without aggressive close-up cropping,
            // clamped so the camera doesn't fly through neighboring lines' racks
            const dynamicFramingRadius = this.clampSlabViewRadius(Math.max(slabData.width, slabData.height) * 2.8);

            // Centering camera target directly to the middle of the slab's volumetric body
            const slabTargetCenter = mesh.position.clone();
            slabTargetCenter.y = slabData.height / 2 + 0.11;

            this.smoothMoveCamera(slabTargetCenter, faceOnAlpha, faceOnBeta, dynamicFramingRadius);
        }

        const card = document.getElementById('quick-preview-card');
        document.getElementById('quick-id').innerText = slabData.id;
        document.getElementById('quick-material').innerText = slabData.material;
        document.getElementById('quick-size').innerText = slabData.size;

        const statusBadge = document.getElementById('quick-status');
        statusBadge.innerText = slabData.status;

        statusBadge.className = "text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded border " +
            (slabData.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
             slabData.status === 'Reserved' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
             'bg-rose-500/10 text-rose-400 border-rose-500/20');

        document.getElementById('quick-action-btn').onclick = (e) => {
            e.stopPropagation(); // Avoid triggering background dismiss
            this.selectSlab(slabId);
        };

        card.classList.remove('translate-y-4', 'opacity-0', 'pointer-events-none');
        card.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

        // Arm the full-viewport backdrop: any tap/click outside the card
        // frame now returns to the previous 3D view, guaranteed by a plain
        // DOM click handler rather than relying on the scene's own picking.
        const backdrop = document.getElementById('slab-preview-backdrop');
        if (backdrop) backdrop.classList.remove('hidden');
    }

    clearSlabHighlight3DOnly() {
        if (this.currentlyHighlightedSlabId) {
            const mesh = this.slabMap.get(this.currentlyHighlightedSlabId);
            if (mesh) this.highlightLayer.removeMesh(mesh);
            this.currentlyHighlightedSlabId = null;
        }

        const card = document.getElementById('quick-preview-card');
        card.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
        card.classList.add('translate-y-4', 'opacity-0', 'pointer-events-none');

        const backdrop = document.getElementById('slab-preview-backdrop');
        if (backdrop) backdrop.classList.add('hidden');
    }

    // Returns from the slab preview to the previous free-roam 3D view.
    // Called from the backdrop click AND kept as the scene-picking fallback
    // (tapping the floor/racks/another slab) so both paths agree.
    exitSlabPreview() {
        if (this.currentlyHighlightedSlabId) {
            this.clearSlabHighlight3DOnly();
            this.refocusIso();
        }
    }

    // Warehouse lines sit 4.5 units apart (see aisleX in buildAFrameRacksAndSlabs / focusAisle).
    // Racks reach roughly 0.9 units into the aisle from either side, leaving a clear walkway
    // of about 2.7 units between two lines. An unclamped framing radius (width/height * 2.8,
    // which can reach 6-8 units) sends the camera straight through the neighboring line's rack —
    // for a slab on line 2 it overshoots all the way past line 1. Clamp it so the camera always
    // stays inside the local aisle gap and looks at the tapped slab from within its own line.
    clampSlabViewRadius(rawRadius) {
        const MAX_AISLE_VIEW_RADIUS = 2.2;
        return Math.min(rawRadius, MAX_AISLE_VIEW_RADIUS);
    }

    smoothMoveCamera(targetPos, alpha, beta, radius) {
        if (!this.camera) return;

        const rotateToggle = document.getElementById('auto-rotate-toggle');
        if (rotateToggle) {
            rotateToggle.checked = false;
            this.camera.useAutoRotationBehavior = false;
        }

        const startTime = performance.now();
        const duration = 800;

        const startTarget = this.camera.target.clone();
        const startAlpha = this.camera.alpha;
        const startBeta = this.camera.beta;
        const startRadius = this.camera.radius;

        let endAlpha = alpha;
        const alphaDiff = endAlpha - startAlpha;
        const wrappedAlphaDiff = Math.atan2(Math.sin(alphaDiff), Math.cos(alphaDiff));
        endAlpha = startAlpha + wrappedAlphaDiff;

        const animateFrame = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1.0);

            const t = 1 - Math.pow(1 - progress, 3);

            const currentTarget = BABYLON.Vector3.Lerp(startTarget, targetPos, t);
            this.camera.setTarget(currentTarget);

            this.camera.alpha = startAlpha + (endAlpha - startAlpha) * t;
            this.camera.beta = startBeta + (beta - startBeta) * t;
            this.camera.radius = startRadius + (radius - startRadius) * t;

            if (progress < 1.0) {
                requestAnimationFrame(animateFrame);
            }
        };

        requestAnimationFrame(animateFrame);
    }

    selectSlab(slabId) {
        const targetSlab = this.slabs.find(s => s.id === slabId);
        if (!targetSlab) return;

        this.selectedSlab = targetSlab;

        const mesh = this.slabMap.get(slabId);
        if (mesh) {
            this.highlightLayer.addMesh(mesh, new BABYLON.Color3(0.9, 0.9, 1.0));
            const targetAngle = targetSlab.side === 'Left' ? Math.PI : 0;
            const dynamicFramingRadius = this.clampSlabViewRadius(Math.max(targetSlab.width, targetSlab.height) * 2.8);
            const slabTargetCenter = mesh.position.clone();
            slabTargetCenter.y = targetSlab.height / 2 + 0.11;

            this.smoothMoveCamera(slabTargetCenter, targetAngle, Math.PI / 2.3, dynamicFramingRadius);
        }

        const tabExists = this.cachedViewerTabs.some(tab => tab.id === slabId);
        if (!tabExists) {
            this.cachedViewerTabs.push(targetSlab);
        }

        this.activeCachedTabId = slabId;

        this.renderSubTabs();
        this.activateVisualizerTab();

        this.renderSpecDetailPanel();
        this.renderVisualizerPanel();
        this.highlightDataTableRow(slabId);

        this.clearSlabHighlight3DOnly();
    }

    switchActiveSubTab(slabId) {
        this.activeCachedTabId = slabId;
        this.selectedSlab = this.slabs.find(s => s.id === slabId);

        this.renderSubTabs();
        this.renderSpecDetailPanel();
        this.renderVisualizerPanel();
        this.highlightDataTableRow(slabId);
    }

    closeSubTab(slabId) {
        this.cachedViewerTabs = this.cachedViewerTabs.filter(tab => tab.id !== slabId);

        if (this.activeCachedTabId === slabId) {
            if (this.cachedViewerTabs.length > 0) {
                this.switchActiveSubTab(this.cachedViewerTabs[this.cachedViewerTabs.length - 1].id);
            } else {
                this.activeCachedTabId = null;
                this.selectedSlab = null;
            }
        }

        this.renderSubTabs();
        this.renderSpecDetailPanel();
        this.renderVisualizerPanel();
    }

    renderSubTabs() {
        const tabsBar = document.getElementById('sub-tabs-container');
        const badge = document.getElementById('tab-cache-badge');

        tabsBar.innerHTML = '';

        const tabCount = this.cachedViewerTabs.length;
        if (tabCount === 0) {
            badge.classList.add('hidden');
            tabsBar.classList.add('hidden');
            document.getElementById('slab-visualizer-content').classList.add('hidden');
            document.getElementById('no-slab-selected-vis').classList.remove('hidden');
            return;
        }

        badge.innerText = tabCount;
        badge.classList.remove('hidden');
        tabsBar.classList.remove('hidden');
        document.getElementById('slab-visualizer-content').classList.remove('hidden');
        document.getElementById('no-slab-selected-vis').classList.add('hidden');

        const docFrag = document.createDocumentFragment();

        this.cachedViewerTabs.forEach(slab => {
            const isActive = slab.id === this.activeCachedTabId;

            const tabCapsule = document.createElement('div');
            tabCapsule.className = `flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold cursor-pointer transition-all border shrink-0 ${
                isActive
                    ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-md'
                    : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`;

            tabCapsule.onclick = () => this.switchActiveSubTab(slab.id);

            const label = document.createElement('span');
            label.innerText = slab.id;

            const closeBtn = document.createElement('span');
            closeBtn.className = "hover:bg-amber-500/20 hover:text-amber-500 rounded px-1 text-[11px] font-black transition";
            closeBtn.innerHTML = "×";
            closeBtn.onclick = (e) => {
                e.stopPropagation();
                this.closeSubTab(slab.id);
            };

            tabCapsule.appendChild(label);
            tabCapsule.appendChild(closeBtn);
            docFrag.appendChild(tabCapsule);
        });

        tabsBar.appendChild(docFrag);
    }

    refocusCameraOnSlab() {
        if (!this.selectedSlab) return;
        this.activate3DTab();

        const mesh = this.slabMap.get(this.selectedSlab.id);
        if (mesh) {
            const targetAngle = this.selectedSlab.side === 'Left' ? Math.PI : 0;
            const dynamicFramingRadius = this.clampSlabViewRadius(Math.max(this.selectedSlab.width, this.selectedSlab.height) * 2.8);
            const slabTargetCenter = mesh.position.clone();
            slabTargetCenter.y = this.selectedSlab.height / 2 + 0.11;

            this.smoothMoveCamera(slabTargetCenter, targetAngle, Math.PI / 2.3, dynamicFramingRadius);
            this.previewSlab3DOnly(this.selectedSlab.id);
        }
    }

    /* --- VIEWPORT 3D VIEWER METHOD --- */
    switchSlabViewerMode(mode) {
        this.activeViewerMode = mode;
        const btn2d = document.getElementById('toggle-view-2d');
        const btn3d = document.getElementById('toggle-view-3d');
        const canv2d = document.getElementById('texture-hd-canvas-tab');
        const canv3d = document.getElementById('render-canvas-single-slab');

        if (mode === '2D') {
            btn2d.className = "py-1 px-3.5 text-[10px] font-black rounded transition-all bg-amber-500 text-slate-950 shadow-md";
            btn3d.className = "py-1 px-3.5 text-[10px] font-black rounded transition-all text-slate-400 hover:text-white font-mono";
            canv2d.classList.remove('hidden');
            canv3d.classList.add('hidden');
        } else {
            btn3d.className = "py-1 px-3.5 text-[10px] font-black rounded transition-all bg-amber-500 text-slate-950 shadow-md font-mono";
            btn2d.className = "py-1 px-3.5 text-[10px] font-black rounded transition-all text-slate-400 hover:text-white";
            canv2d.classList.add('hidden');
            canv3d.classList.remove('hidden');
            this.updateSingleSlab3D();
        }
    }

    /* --- VIEWPORT 4: SLAB SLIDER CAROUSEL RENDER ENGINE --- */

    initSlabSliderEngine() {
        if (this.sliderEngine) return;

        const sliderCanvas = document.getElementById('render-canvas-slider');
        this.sliderEngine = new BABYLON.Engine(sliderCanvas, true, { antialias: true });
        this.sliderScene = new BABYLON.Scene(this.sliderEngine);
        this.sliderScene.clearColor = new BABYLON.Color4(0.04, 0.05, 0.07, 1.0);

        this.sliderCamera = new BABYLON.ArcRotateCamera("SliderCamera", -Math.PI / 4, Math.PI / 2.4, 4.8, new BABYLON.Vector3(0, 0, 0), this.sliderScene);

        const amb = new BABYLON.HemisphericLight("sliderAmbient", new BABYLON.Vector3(0, 1, 0), this.sliderScene);
        amb.intensity = 0.55;

        const dir = new BABYLON.DirectionalLight("sliderSun", new BABYLON.Vector3(-0.5, -1, -0.2), this.sliderScene);
        dir.position = new BABYLON.Vector3(5, 10, 5);
        dir.intensity = 1.35;

        this.sliderParentNode = new BABYLON.TransformNode("sliderRoot", this.sliderScene);
        this.sliderSlabMeshes = [];

        this.uniqueSlabsDataset.forEach((profile, index) => {
            const ped = BABYLON.MeshBuilder.CreateCylinder(`ped-${index}`, { height: 0.15, diameter: 2.2 }, this.sliderScene);
            ped.position = new BABYLON.Vector3(index * 6.0, -0.92, 0);
            ped.parent = this.sliderParentNode;

            const pedMat = new BABYLON.StandardMaterial(`pedMat-${index}`, this.sliderScene);
            pedMat.diffuseColor = new BABYLON.Color3(0.08, 0.1, 0.14);
            pedMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            ped.material = pedMat;

            const slabMesh = BABYLON.MeshBuilder.CreateBox(`slab-${index}`, {
                width: profile.thickness,
                height: profile.height,
                depth: profile.width
            }, this.sliderScene);

            slabMesh.position = new BABYLON.Vector3(index * 6.0, 0.05, 0);
            slabMesh.rotation.y = -Math.PI / 6;
            slabMesh.parent = this.sliderParentNode;

            const singlePBR = new BABYLON.StandardMaterial(`sliderPBR-${index}`, this.sliderScene);

            const singleDynTex = new BABYLON.DynamicTexture(`sliderDynTex-${index}`, { width: 512, height: 512 }, this.sliderScene, true);
            const sliderCtx = singleDynTex.getContext();
            sliderCtx.drawImage(profile.canvasElement, 0, 0);
            singleDynTex.update();

            singlePBR.diffuseTexture = singleDynTex;
            singlePBR.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            singlePBR.specularPower = 64;

            slabMesh.material = singlePBR;
            this.sliderSlabMeshes.push(slabMesh);
        });

        this.setupSliderGestures();

        this.sliderEngine.runRenderLoop(() => {
            if (this.activeTab === 'slider') {
                this.sliderScene.render();
                this.sliderSlabMeshes.forEach(mesh => {
                    if (mesh) mesh.rotation.y += 0.006;
                });
            }
        });

        window.addEventListener('resize', () => this.sliderEngine.resize());
    }

    setupSliderGestures() {
        const zone = document.getElementById('slider-drag-zone');
        let startX = 0;
        let activeDrag = false;

        zone.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            activeDrag = true;
        });

        zone.addEventListener('mouseup', (e) => {
            if (!activeDrag) return;
            activeDrag = false;
            const diffX = e.clientX - startX;
            if (Math.abs(diffX) > 60) {
                this.shiftSlider(diffX > 0 ? -1 : 1);
            }
        });

        zone.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length > 0) {
                startX = e.touches[0].clientX;
                activeDrag = true;
            }
        }, { passive: true });

        zone.addEventListener('touchend', (e) => {
            if (!activeDrag) return;
            activeDrag = false;
            if (e.changedTouches && e.changedTouches.length > 0) {
                const diffX = e.changedTouches[0].clientX - startX;
                if (Math.abs(diffX) > 40) {
                    this.shiftSlider(diffX > 0 ? -1 : 1);
                }
            }
        }, { passive: true });
    }

    shiftSlider(direction) {
        const nextIdx = this.activeSliderIndex + direction;
        if (nextIdx < 0 || nextIdx >= this.uniqueSlabsDataset.length) return;

        this.activeSliderIndex = nextIdx;

        const startTime = performance.now();
        const duration = 600;

        const startX = this.sliderParentNode.position.x;
        const endX = -this.activeSliderIndex * 6.0;

        const animateSlide = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1.0);

            const t = 1 - Math.pow(1 - progress, 3);

            this.sliderParentNode.position.x = startX + (endX - startX) * t;

            if (progress < 1.0) {
                requestAnimationFrame(animateSlide);
            }
        };

        requestAnimationFrame(animateSlide);
        this.renderSliderSpecPanel();
    }

    renderSliderSpecPanel() {
        const profile = this.uniqueSlabsDataset[this.activeSliderIndex];
        if (!profile) return;

        document.getElementById('slider-index-lbl').innerText = `${this.activeSliderIndex + 1} / ${this.uniqueSlabsDataset.length}`;
        document.getElementById('slider-material').innerText = profile.material;
        document.getElementById('slider-size').innerText = profile.size;
        document.getElementById('slider-colour').innerText = profile.colour;
        document.getElementById('slider-weight').innerText = `${profile.weight} t`;
        document.getElementById('slider-price').innerText = `$${profile.price.toLocaleString()}`;
        document.getElementById('slider-seed').innerText = profile.seed;

        document.getElementById('slider-stock-count').innerText = `${profile.instances.length} Slabs`;
    }

    redirectSliderToRegister() {
        const profile = this.uniqueSlabsDataset[this.activeSliderIndex];
        if (!profile) return;

        document.getElementById('filter-type').value = profile.material;
        document.getElementById('search-input').value = profile.size;

        this.activeFilters.type = profile.material;
        this.activeFilters.search = profile.size;

        this.applyFilters();
        this.activateRegisterTab();
        this.showNotification(`Stock register filtered: ${profile.material} (${profile.size})`);
    }

    refocusSliderActive() {
        const profile = this.uniqueSlabsDataset[this.activeSliderIndex];
        if (!profile || profile.instances.length === 0) return;

        const targetInstance = profile.instances[0];
        this.activate3DTab();
        this.selectSlab(targetInstance.id);
        this.previewSlab3DOnly(targetInstance.id);
    }

    /* --- CAD TOOLBAR PERSPECTIVE TRIGGERS --- */

    refocusGlobal() {
        this.activate3DTab();
        this.clearSlabHighlight3DOnly();
        this.smoothMoveCamera(new BABYLON.Vector3(0, 1.0, 0), -Math.PI / 2.2, Math.PI / 2.8, 22.0);
    }

    refocusIso() {
        this.activate3DTab();
        this.clearSlabHighlight3DOnly();
        this.smoothMoveCamera(new BABYLON.Vector3(0, 1.2, 0), -Math.PI / 4, Math.PI / 3.1, 18.0);
    }

    focusAisle(lineNum) {
        this.activate3DTab();
        this.clearSlabHighlight3DOnly();
        const aisleX = (lineNum - 3) * 4.5;
        this.smoothMoveCamera(new BABYLON.Vector3(aisleX, 1.2, 0), -Math.PI / 2, Math.PI / 2.5, 11.5);
    }

    triggerFocusActive() {
        if (this.selectedSlab) {
            this.selectSlab(this.selectedSlab.id);
        }
    }

    applyFilters() {
        const searchTxt = this.activeFilters.search.toLowerCase();
        const matched = this.slabs.filter(slab => {
            const matchSearch = slab.id.toLowerCase().includes(searchTxt) ||
                                slab.material.toLowerCase().includes(searchTxt) ||
                                slab.colour.toLowerCase().includes(searchTxt) ||
                                slab.warehouseLocation.toLowerCase().includes(searchTxt);
            const matchType = this.activeFilters.type === 'All' || slab.material === this.activeFilters.type;
            const matchStatus = this.activeFilters.status === 'All' || slab.status === this.activeFilters.status;
            return matchSearch && matchType && matchStatus;
        });

        document.getElementById('matching-count').innerText = `${matched.length} / 500`;
        this.renderDatabaseTable(matched);

        this.slabs.forEach(slab => {
            const mesh = this.slabMap.get(slab.id);
            if (!mesh) return;

            const isMatch = matched.some(f => f.id === slab.id);
            if (isMatch) {
                mesh.visibility = 1.0;
            } else {
                mesh.visibility = 0.06;
            }
        });

        if (this.selectedSlab) {
            const isStillMatch = matched.some(f => f.id === this.selectedSlab.id);
            if (isStillMatch) {
                this.highlightDataTableRow(this.selectedSlab.id);
            }
        }
    }

    renderDatabaseTable(dataSet = this.slabs) {
        const tbody = document.getElementById('inventory-table-body');
        tbody.innerHTML = '';

        if (dataSet.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-500 font-bold font-sans">No slabs matching active search queries.</td></tr>`;
            return;
        }

        const docFragment = document.createDocumentFragment();
        dataSet.forEach(slab => {
            const row = document.createElement('tr');
            row.id = `row-${slab.id}`;
            row.className = `cursor-pointer border-b border-slate-800/10 hover:bg-slate-800/30 transition duration-100 ${this.selectedSlab && this.selectedSlab.id === slab.id ? 'bg-amber-500/15 border-l-2 border-amber-500' : ''}`;
            row.onclick = () => this.selectSlab(slab.id);

            row.innerHTML = `
                <td class="py-3 px-4 font-mono font-bold text-white whitespace-nowrap">${slab.id}</td>
                <td class="py-3 px-2">
                    <span class="block text-slate-200 font-semibold leading-none">${slab.material}</span>
                    <span class="block text-[10px] text-slate-500 truncate max-w-[110px] mt-1">${slab.colour}</span>
                </td>
                <td class="py-3 px-2 text-slate-300 font-semibold text-[11px] leading-snug whitespace-nowrap">${slab.warehouseLocation}</td>
                <td class="py-3 px-2 text-sky-400 font-mono text-[11px] font-bold whitespace-nowrap">${slab.internalMapLocation}</td>
                <td class="py-3 px-2 font-mono text-slate-400 text-[11px] whitespace-nowrap">${slab.size}</td>
                <td class="py-3 px-4 text-right font-mono text-white font-bold whitespace-nowrap">$${slab.price.toLocaleString()}</td>
            `;
            docFragment.appendChild(row);
        });
        tbody.appendChild(docFragment);
    }

    renderSpecDetailPanel() {
        const slab = this.selectedSlab;
        if (!slab) return;

        document.getElementById('inspect-id').innerText = slab.id;
        document.getElementById('inspect-type').innerText = slab.material;
        document.getElementById('inspect-colour').innerText = slab.colour;
        document.getElementById('inspect-dim').innerText = slab.size;
        document.getElementById('inspect-weight').innerText = `${slab.weight} t`;
        document.getElementById('inspect-location').innerText = slab.warehouseLocation;
        document.getElementById('inspect-map-location').innerText = slab.internalMapLocation;
        document.getElementById('inspect-value').innerText = `$${slab.price.toLocaleString()} USD`;

        const statusTag = document.getElementById('inspect-type');
        statusTag.className = "text-sm font-black " + (slab.status === 'Available' ? 'text-emerald-400' : slab.status === 'Reserved' ? 'text-amber-400' : 'text-rose-400');
    }

    renderVisualizerPanel() {
        const slab = this.selectedSlab;
        if (!slab) return;

        document.getElementById('no-slab-selected-vis').classList.add('hidden');
        document.getElementById('slab-visualizer-content').classList.remove('hidden');

        document.getElementById('vis-id-badge').innerText = slab.id;
        document.getElementById('vis-seed').innerText = slab.seed;

        const hdCanvas = document.getElementById('texture-hd-canvas-tab');
        const hdCtx = hdCanvas.getContext('2d');
        hdCanvas.width = 1024;
        hdCanvas.height = 768;

        const parentProfile = this.uniqueSlabsDataset.find(p => p.material === slab.material && p.size === slab.size);
        hdCtx.drawImage(parentProfile.canvasElement, 0, 0, 1024, 768);

        if (this.activeViewerMode === '3D') {
            this.updateSingleSlab3D();
        }
    }

    updateSingleSlab3D() {
        const slab = this.selectedSlab;
        if (!slab) return;

        const singleCanvas = document.getElementById('render-canvas-single-slab');
        document.getElementById('single-slab-loader').classList.remove('hidden');

        if (!this.singleSlabEngine) {
            this.singleSlabEngine = new BABYLON.Engine(singleCanvas, true, { antialias: true });
            this.singleSlabScene = new BABYLON.Scene(this.singleSlabEngine);
            this.singleSlabScene.clearColor = new BABYLON.Color4(0.04, 0.05, 0.07, 1.0);

            const cam = new BABYLON.ArcRotateCamera("ShowcaseCamera", -Math.PI / 4, Math.PI / 2.5, 4.2, new BABYLON.Vector3(0, 0, 0), this.singleSlabScene);
            cam.attachControl(singleCanvas, true);
            cam.lowerRadiusLimit = 2.0;
            cam.upperRadiusLimit = 7.0;
            cam.wheelPrecision = 50;

            const amb = new BABYLON.HemisphericLight("showcaseAmbient", new BABYLON.Vector3(0, 1, 0), this.singleSlabScene);
            amb.intensity = 0.55;

            const dir = new BABYLON.DirectionalLight("showcaseSpot", new BABYLON.Vector3(-0.5, -1, -0.2), this.singleSlabScene);
            dir.position = new BABYLON.Vector3(5, 10, 5);
            dir.intensity = 1.35;

            const pedestal = BABYLON.MeshBuilder.CreateCylinder("pedestal", { height: 0.15, diameter: 2.2 }, this.singleSlabScene);
            pedestal.position.y = -0.92;

            const pedMat = new BABYLON.StandardMaterial("pedMat", this.singleSlabScene);
            pedMat.diffuseColor = new BABYLON.Color3(0.08, 0.1, 0.14);
            pedMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
            pedestal.material = pedMat;

            this.singleSlabEngine.runRenderLoop(() => {
                if (this.activeTab === 'visualizer' && this.activeViewerMode === '3D') {
                    this.singleSlabScene.render();
                }
            });

            window.addEventListener('resize', () => this.singleSlabEngine.resize());
        }

        if (this.singleSlabMesh) {
            this.singleSlabMesh.dispose(false, true);
            this.singleSlabMesh = null;
        }

        this.singleSlabMesh = BABYLON.MeshBuilder.CreateBox("detailedSlab", {
            width: slab.thickness,
            height: slab.height,
            depth: slab.width
        }, this.singleSlabScene);

        this.singleSlabMesh.position = new BABYLON.Vector3(0, 0.05, 0);

        const singlePBR = new BABYLON.StandardMaterial(`singlePBR-${slab.id}`, this.singleSlabScene);
        const parentProfile = this.uniqueSlabsDataset.find(p => p.material === slab.material && p.size === slab.size);

        const singleDynTex = new BABYLON.DynamicTexture(`singleDynTex-${slab.id}`, { width: 512, height: 512 }, this.singleSlabScene, true);
        const singleCtx = singleDynTex.getContext();
        singleCtx.drawImage(parentProfile.canvasElement, 0, 0);
        singleDynTex.update();

        singlePBR.diffuseTexture = singleDynTex;
        singlePBR.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
        singlePBR.specularPower = 64;

        this.singleSlabMesh.material = singlePBR;
        this.singleSlabMesh.rotation.y = -Math.PI / 6;

        setTimeout(() => {
            document.getElementById('single-slab-loader').classList.add('hidden');
        }, 300);
    }

    updateSlabStatus(newStatus) {
        if (!this.selectedSlab) return;

        this.selectedSlab.status = newStatus;
        this.showNotification(`Slab ${this.selectedSlab.id} status updated to "${newStatus}".`);

        const mesh = this.slabMap.get(this.selectedSlab.id);
        if (mesh) {
            this.highlightLayer.removeMesh(mesh);
            let colorGlow = new BABYLON.Color3(0.1, 0.85, 0.3);
            if (newStatus === 'Reserved') colorGlow = new BABYLON.Color3(1.0, 0.65, 0.0);
            if (newStatus === 'Sold') colorGlow = new BABYLON.Color3(0.92, 0.08, 0.15);
            this.highlightLayer.addMesh(mesh, colorGlow);
        }

        this.renderSpecDetailPanel();
        this.renderDatabaseTable();
        this.updateGlobalWeights();
    }

    updateTextureAdjustments() {
        if (!this.selectedSlab) return;

        const activeMat = this.sharedMaterials[`profile-${this.selectedSlab.material}-${this.selectedSlab.size}`];
        if (activeMat) {
            if (this.visConfig.roughness > 0.3) {
                activeMat.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05);
                activeMat.specularPower = 5;
            } else {
                activeMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
                activeMat.specularPower = 64;
            }
        }

        this.renderVisualizerPanel();
    }

    resetTextureOptions() {
        if (!this.selectedSlab) return;

        this.visConfig = {
            densityScale: 1.0,
            roughness: 0.12,
            goldSparkle: true
        };

        document.getElementById('custom-vein-slider').value = 2;
        document.getElementById('range-vein-val').innerText = "Normal";
        document.getElementById('gloss-toggle').checked = true;
        document.getElementById('metallic-toggle').checked = true;

        this.updateTextureAdjustments();
        this.showNotification("Visualizer parameters reset to baseline specifications.");
    }

    updateGlobalWeights() {
        const totalWeight = this.slabs.reduce((acc, curr) => acc + curr.weight, 0);
        const totalValue = this.slabs.reduce((acc, curr) => acc + curr.price, 0);
        document.getElementById('stat-weight').innerText = `${totalWeight.toLocaleString(undefined, {maximumFractionDigits: 1})} t`;
        document.getElementById('stat-value').innerText = `$${totalValue.toLocaleString()}`;
    }

    highlightDataTableRow(slabId) {
        const rows = document.querySelectorAll('#inventory-table-body tr');
        rows.forEach(row => row.classList.remove('bg-amber-500/15', 'border-l-2', 'border-amber-500'));

        const targetRow = document.getElementById(`row-${slabId}`);
        if (targetRow) {
            targetRow.classList.add('bg-amber-500/15', 'border-l-2', 'border-amber-500');
            targetRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    /* --- TAB NAVIGATION CONTROL SWITCHERS --- */

    // Single source of truth for which nav icon is lit up — in both the
    // top icon bar AND the side drawer, since both carry data-tab="<id>".
    static TAB_TITLES = {
        '3d': '3D Warehouse',
        register: 'Stock Register',
        visualizer: 'Slab Viewer',
        slider: 'Slab Slider',
        flow: 'Inventory Flow',
        about: 'About',
    };

    setActiveNavTab(tabId) {
        document.querySelectorAll('.nav-icon-btn, .drawer-item').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        const titleEl = document.getElementById('topbar-page-title');
        if (titleEl) titleEl.textContent = SlabWarehouseTwin.TAB_TITLES[tabId] || '';
    }

    showViewport(viewportId) {
        ['viewport-3d', 'viewport-register', 'viewport-visualizer', 'viewport-slider', 'viewport-flow', 'viewport-about'].forEach(id => {
            document.getElementById(id).classList.toggle('hidden', id !== viewportId);
        });
    }

    activate3DTab() {
        this.activeTab = '3d';
        this.showViewport('viewport-3d');
        this.setActiveNavTab('3d');
    }

    activateRegisterTab() {
        this.activeTab = 'register';
        this.showViewport('viewport-register');
        this.setActiveNavTab('register');
    }

    activateVisualizerTab() {
        this.activeTab = 'visualizer';
        this.showViewport('viewport-visualizer');
        this.setActiveNavTab('visualizer');
        this.renderVisualizerPanel();
    }

    activateSliderTab() {
        this.activeTab = 'slider';
        this.showViewport('viewport-slider');
        this.setActiveNavTab('slider');
        // No-op if the background preload already built it; this only
        // covers the (currently theoretical) case where preload hasn't run yet.
        this.initSlabSliderEngine();
        // The canvas was hidden (display:none) when the engine was built
        // during background preload, so its render target was sized 0x0.
        // Now that showViewport() just made it visible, resize to match.
        if (this.sliderEngine) this.sliderEngine.resize();
        this.renderSliderSpecPanel();
    }

    activateFlowTab() {
        this.activeTab = 'flow';
        this.showViewport('viewport-flow');
        this.setActiveNavTab('flow');
        this.renderFlowPanel();
        this.syncFlowModeThumb();
        this.setFlowSection(this.flowSection);
    }

    activateAboutTab() {
        this.activeTab = 'about';
        this.showViewport('viewport-about');
        this.setActiveNavTab('about');
    }

    // Single reusable card renderer so Inventory Flow / Sales Flow / Inventory
    // Balance all share one exact visual pattern: icon chip, stage name, unit
    // count, € value, a progress bar against the section total, and a one-line
    // resume. `usdToEur` conversion is applied by the caller before this runs.
    // `muted` + `tag` reflect the active valuation basis (Cash View zeroes out
    // and grays any stage whose money hasn't actually moved yet).
    buildFlowCard({ stage, label, count, unitLabel, valueEur, pct, resume, isTotal = false, muted = false, tag = null }) {
        const meta = FlowSimulator.STAGE_META[stage] || FlowSimulator.STAGE_META.Delivered;
        const totalClass = isTotal ? ' flow-total-card' : '';
        const mutedClass = muted ? ' muted' : '';
        const pctDisplay = pct === null ? '' : `
            <div class="flow-card-bar-track">
                <div class="flow-card-bar-fill ${meta.bar}" style="width:${pct}%"></div>
            </div>
        `;
        const tagMap = { cash: ['CASH IN', 'tag-cash'], pending: ['PENDING CASH', 'tag-pending'], accrued: ['ACCRUED', 'tag-accrued'] };
        const tagHtml = tag && tagMap[tag] ? `<span class="flow-card-tag ${tagMap[tag][1]}">${tagMap[tag][0]}</span>` : '';
        return `
            <div class="flow-card${totalClass}${mutedClass}">
                <div class="flow-card-head">
                    <span class="flow-card-icon ${meta.soft}" style="color:${meta.color}">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${meta.icon}"/></svg>
                    </span>
                    <span class="flow-card-title">${label || stage}</span>
                    ${tagHtml}
                </div>
                <div class="flow-card-body">
                    <div>
                        <span class="flow-card-units">${count}</span>
                        <span class="flow-card-units-label">&nbsp;${unitLabel}</span>
                    </div>
                    <span class="flow-card-eur" style="color:${muted ? '' : (isTotal ? '#f59e0b' : '#34d399')}">€${valueEur.toLocaleString()}</span>
                </div>
                ${pctDisplay}
                <div class="flow-card-resume">${resume}</div>
            </div>
        `;
    }

    // Three-chip reconciliation strip shown under every section head:
    // cash realized so far, what's still accrued/pending, and the accrual
    // total — always visible so the two valuation bases can be compared
    // side by side, with the currently active basis highlighted.
    renderFlowSummary(containerId, realizedEur, pendingEur, totalEur) {
        const el = document.getElementById(containerId);
        if (!el) return;
        const isCash = this.flowMode === 'cash';
        el.innerHTML = `
            <div class="flow-summary-chip${isCash ? ' emphasis' : ''}">
                <span class="flow-summary-chip-label">Cash Realized</span>
                <span class="flow-summary-chip-value" style="color:#34d399">€${realizedEur.toLocaleString()}</span>
            </div>
            <div class="flow-summary-chip">
                <span class="flow-summary-chip-label">Accrued / Pending</span>
                <span class="flow-summary-chip-value" style="color:#94a3b8">€${pendingEur.toLocaleString()}</span>
            </div>
            <div class="flow-summary-chip${!isCash ? ' emphasis' : ''}">
                <span class="flow-summary-chip-label">Total (Accrual Basis)</span>
                <span class="flow-summary-chip-value" style="color:${!isCash ? '#38bdf8' : '#fff'}">€${totalEur.toLocaleString()}</span>
            </div>
        `;
    }

    // Solid two-button toggle, no sliding-thumb overlay to keep in sync —
    // just mark whichever button matches the current mode as .active and
    // update the description line underneath.
    syncFlowModeThumb() {
        const isCash = this.flowMode === 'cash';
        document.querySelectorAll('.flow-mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === this.flowMode);
        });
        const desc = document.getElementById('flow-mode-description');
        if (desc) {
            desc.textContent = isCash
                ? 'Only stages where money has actually been paid or collected count toward value — everything else is shown as pending.'
                : 'Accrual value at every stage — money not yet moved still counts as booked value.';
        }
    }

    // A / B / C section switcher: only one of Inventory Flow, Sales Flow,
    // Inventory Balance is visible at a time, so the control bar and the
    // data it governs always share the same viewport.
    setFlowSection(sectionId) {
        this.flowSection = sectionId;
        document.querySelectorAll('.flow-section-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.section === sectionId);
        });
        ['A', 'B', 'C'].forEach(id => {
            const panel = document.getElementById(`flow-panel-${id}`);
            if (panel) panel.classList.toggle('hidden', id !== sectionId);
        });
    }

    setFlowMode(mode) {
        this.flowMode = mode;
        this.syncFlowModeThumb();
        this.renderFlowPanel();
    }

    renderFlowPanel() {
        if (!this.purchaseOrders) {
            this.purchaseOrders = FlowSimulator.generatePurchaseOrders();
        }
        const usdToEur = 0.92;
        const isCash = this.flowMode === 'cash';
        // Cash View: a stage's € figure only counts once its status is
        // "Delivered" (payment actually made/collected) — every earlier
        // stage displays €0 and is visually muted. Accounting View shows
        // the full accrued/booked value at every stage, unconditionally.
        const displayValue = (stage, valueEur) => (isCash && !FlowSimulator.isCashRealized(stage)) ? 0 : valueEur;
        const cardTag = (stage) => {
            if (FlowSimulator.isCashRealized(stage)) return isCash ? 'cash' : 'accrued';
            return isCash ? 'pending' : 'accrued';
        };

        // --- A) Inventory Flow: Requested / Shipped / Delivered (purchase orders) ---
        const procurementStats = {};
        FlowSimulator.PROCUREMENT_STAGES.forEach(stage => { procurementStats[stage] = { count: 0, value: 0 }; });
        this.purchaseOrders.forEach(po => {
            procurementStats[po.status].count++;
            procurementStats[po.status].value += po.orderValue;
        });
        const totalOrders = this.purchaseOrders.length;
        const totalOrdersValueEur = Math.round(this.purchaseOrders.reduce((s, po) => s + po.orderValue, 0) * usdToEur);
        const realizedOrdersValueEur = Math.round(procurementStats.Delivered.value * usdToEur);

        this.renderFlowSummary('flow-procurement-summary', realizedOrdersValueEur, totalOrdersValueEur - realizedOrdersValueEur, totalOrdersValueEur);

        const stagesContainer = document.getElementById('flow-procurement-stages');
        stagesContainer.innerHTML = FlowSimulator.PROCUREMENT_STAGES.map(stage => {
            const data = procurementStats[stage];
            const pct = ((data.count / totalOrders) * 100).toFixed(1);
            const valueEur = Math.round(data.value * usdToEur);
            const muted = isCash && !FlowSimulator.isCashRealized(stage);
            return this.buildFlowCard({
                stage,
                count: data.count,
                unitLabel: 'orders',
                valueEur: displayValue(stage, valueEur),
                pct,
                muted,
                tag: cardTag(stage),
                resume: muted
                    ? `€${valueEur.toLocaleString()} accrued, not yet paid to supplier`
                    : `${pct}% of all purchase orders currently ${stage.toLowerCase()}`,
            });
        }).join('');

        // Sources (quarry / supplier) breakdown table
        const bySource = new Map();
        this.purchaseOrders.forEach(po => {
            if (!bySource.has(po.source)) {
                bySource.set(po.source, {
                    location: po.sourceLocation, material: po.material,
                    Requested: 0, Shipped: 0, Delivered: 0, totalValue: 0, deliveredValue: 0,
                });
            }
            const entry = bySource.get(po.source);
            entry[po.status]++;
            entry.totalValue += po.orderValue;
            if (po.status === 'Delivered') entry.deliveredValue += po.orderValue;
        });

        const sourcesBody = document.getElementById('flow-sources-body');
        sourcesBody.innerHTML = Array.from(bySource.entries()).map(([name, d]) => `
            <tr>
                <td class="py-2.5 px-3 font-bold text-white">${name}</td>
                <td class="py-2.5 px-2 text-slate-400">${d.location}</td>
                <td class="py-2.5 px-2 text-amber-500 font-bold">${d.material}</td>
                <td class="py-2.5 px-2 text-center text-sky-400 font-bold">${d.Requested}</td>
                <td class="py-2.5 px-2 text-center text-amber-400 font-bold">${d.Shipped}</td>
                <td class="py-2.5 px-2 text-center text-emerald-400 font-bold">${d.Delivered}</td>
                <td class="py-2.5 px-3 text-right font-bold">€${Math.round((isCash ? d.deliveredValue : d.totalValue) * usdToEur).toLocaleString()}</td>
            </tr>
        `).join('');

        // --- B) Sales Flow: Available / Reserved / Bought / Delivering / Delivered ---
        const lifecycleStats = {};
        FlowSimulator.LIFECYCLE_STAGES.forEach(stage => { lifecycleStats[stage] = { count: 0, value: 0 }; });
        this.slabs.forEach(slab => {
            const stage = FlowSimulator.deriveSlabFlowStage(slab);
            lifecycleStats[stage].count++;
            lifecycleStats[stage].value += slab.price;
        });
        const totalSlabCount = this.slabs.length;
        const totalSlabValueEur = Math.round(this.slabs.reduce((s, sl) => s + sl.price, 0) * usdToEur);
        const realizedSlabValueEur = Math.round(lifecycleStats.Delivered.value * usdToEur);

        this.renderFlowSummary('flow-lifecycle-summary', realizedSlabValueEur, totalSlabValueEur - realizedSlabValueEur, totalSlabValueEur);

        const lifecycleCardsContainer = document.getElementById('flow-lifecycle-cards');
        lifecycleCardsContainer.innerHTML = FlowSimulator.LIFECYCLE_STAGES.map(stage => {
            const data = lifecycleStats[stage];
            const pct = ((data.count / totalSlabCount) * 100).toFixed(1);
            const valueEur = Math.round(data.value * usdToEur);
            const muted = isCash && !FlowSimulator.isCashRealized(stage);
            return this.buildFlowCard({
                stage,
                count: data.count,
                unitLabel: 'slabs',
                valueEur: displayValue(stage, valueEur),
                pct,
                muted,
                tag: cardTag(stage),
                resume: muted
                    ? `€${valueEur.toLocaleString()} booked, cash not yet collected`
                    : `${pct}% of total warehouse stock`,
            });
        }).join('');

        // --- C) Inventory Balance: Quantity & Value (EUR), same stages, same card ---
        const grandTotal = this.slabs.reduce((sum, s) => sum + s.price, 0);
        const grandTotalEur = Math.round(grandTotal * usdToEur);
        const grandRealizedEur = realizedSlabValueEur;

        this.renderFlowSummary('flow-balance-summary', grandRealizedEur, grandTotalEur - grandRealizedEur, grandTotalEur);

        const amountsGrid = document.getElementById('flow-amounts-grid');
        amountsGrid.innerHTML = FlowSimulator.LIFECYCLE_STAGES.map(stage => {
            const data = lifecycleStats[stage];
            const pct = ((data.count / totalSlabCount) * 100).toFixed(1);
            const valueEur = Math.round(data.value * usdToEur);
            const muted = isCash && !FlowSimulator.isCashRealized(stage);
            return this.buildFlowCard({
                stage,
                count: data.count,
                unitLabel: 'units',
                valueEur: displayValue(stage, valueEur),
                pct,
                muted,
                tag: cardTag(stage),
                resume: muted
                    ? 'Not yet cash-settled'
                    : `Avg €${data.count ? Math.round(valueEur / data.count).toLocaleString() : 0} per unit`,
            });
        }).join('') + this.buildFlowCard({
            stage: 'Delivered',
            label: 'Grand Total',
            count: this.slabs.length,
            unitLabel: 'units (all stages)',
            valueEur: isCash ? grandRealizedEur : grandTotalEur,
            pct: null,
            tag: isCash ? 'cash' : 'accrued',
            resume: isCash
                ? 'Cash actually collected across the full warehouse inventory'
                : 'Grand total (accrual) across the full warehouse inventory',
            isTotal: true,
        });
    }

    setupUIHandlers() {
        // Persistent icon-only top nav — same 6 buttons at every breakpoint.
        document.getElementById('nav-3d-btn').onclick = () => this.activate3DTab();
        document.getElementById('nav-register-btn').onclick = () => this.activateRegisterTab();
        document.getElementById('nav-visualizer-btn').onclick = () => this.activateVisualizerTab();
        document.getElementById('nav-slider-btn').onclick = () => this.activateSliderTab();
        document.getElementById('nav-flow-btn').onclick = () => this.activateFlowTab();
        document.getElementById('nav-about-btn').onclick = () => this.activateAboutTab();

        // Side drawer: opened by the hamburger, same 5 destinations, labeled.
        const hamburger = document.getElementById('hamburger-toggle');
        const drawer = document.getElementById('mobile-menu');
        const drawerOverlay = document.getElementById('mobile-menu-overlay');
        const openDrawer = () => {
            drawer.classList.remove('hidden');
            drawerOverlay.classList.remove('hidden');
        };
        const closeDrawer = () => {
            drawer.classList.add('hidden');
            drawerOverlay.classList.add('hidden');
        };
        if (hamburger) hamburger.onclick = openDrawer;
        if (drawerOverlay) drawerOverlay.onclick = closeDrawer;
        const drawerCloseBtn = document.getElementById('mobile-menu-close');
        if (drawerCloseBtn) drawerCloseBtn.onclick = closeDrawer;

        const drawerTabActions = {
            '3d': () => this.activate3DTab(),
            register: () => this.activateRegisterTab(),
            visualizer: () => this.activateVisualizerTab(),
            slider: () => this.activateSliderTab(),
            flow: () => this.activateFlowTab(),
            about: () => this.activateAboutTab(),
        };
        document.querySelectorAll('.drawer-item[data-tab]').forEach(item => {
            item.onclick = () => {
                const action = drawerTabActions[item.dataset.tab];
                if (action) action();
                closeDrawer();
            };
        });

        // Supply Flow: Cash View / Accounting View mode switcher
        const flowCashBtn = document.getElementById('flow-mode-cash');
        const flowAccountingBtn = document.getElementById('flow-mode-accounting');
        if (flowCashBtn && flowAccountingBtn) {
            flowCashBtn.onclick = () => this.setFlowMode('cash');
            flowAccountingBtn.onclick = () => this.setFlowMode('accounting');
        }

        // Supply Flow: A / B / C section switcher
        document.querySelectorAll('.flow-section-tab').forEach(tab => {
            tab.onclick = () => this.setFlowSection(tab.dataset.section);
        });

        document.getElementById('toggle-view-2d').onclick = () => this.switchSlabViewerMode('2D');
        document.getElementById('toggle-view-3d').onclick = () => this.switchSlabViewerMode('3D');

        const searchInput = document.getElementById('search-input');
        searchInput.oninput = (e) => {
            this.activeFilters.search = e.target.value;
            this.applyFilters();
        };

        document.getElementById('filter-type').onchange = (e) => {
            this.activeFilters.type = e.target.value;
            this.applyFilters();
        };

        document.getElementById('filter-status').onchange = (e) => {
            this.activeFilters.status = e.target.value;
            this.applyFilters();
        };

        document.getElementById('reset-filter-btn').onclick = () => {
            searchInput.value = '';
            document.getElementById('filter-type').value = 'All';
            document.getElementById('filter-status').value = 'All';
            this.activeFilters = { search: '', type: 'All', status: 'All' };
            this.applyFilters();
        };

        document.getElementById('custom-vein-slider').oninput = (e) => {
            const val = parseInt(e.target.value);
            if (val === 1) {
                this.visConfig.densityScale = 0.5;
                document.getElementById('range-vein-val').innerText = "Sparse Veins";
            } else if (val === 2) {
                this.visConfig.densityScale = 1.0;
                document.getElementById('range-vein-val').innerText = "Normal";
            } else {
                this.visConfig.densityScale = 1.8;
                document.getElementById('range-vein-val').innerText = "Highly Fractured";
            }
            this.updateTextureAdjustments();
        };

        document.getElementById('gloss-toggle').onchange = (e) => {
            this.visConfig.roughness = e.target.checked ? 0.12 : 0.65;
            this.updateTextureAdjustments();
        };

        document.getElementById('metallic-toggle').onchange = (e) => {
            this.visConfig.goldSparkle = e.target.checked;
            this.updateTextureAdjustments();
        };

        const rotateToggle = document.getElementById('auto-rotate-toggle');
        rotateToggle.onchange = (e) => {
            if (this.camera) {
                this.camera.useAutoRotationBehavior = e.target.checked;
                if (e.target.checked) {
                    this.camera.target = new BABYLON.Vector3(0, 1.2, 0);
                    this.camera.radius = 18;
                }
            }
        };

        // Slab preview backdrop: tap/click anywhere outside the preview
        // card's frame returns to the previous 3D view.
        const slabPreviewBackdrop = document.getElementById('slab-preview-backdrop');
        if (slabPreviewBackdrop) {
            slabPreviewBackdrop.onclick = () => this.exitSlabPreview();
        }
    }

    // Measures the real, rendered height of the fixed #app-topbar (header +
    // desktop nav, or header alone on mobile) and pushes #app-main down by
    // exactly that much. Re-measured on resize/orientation change so the
    // persistent top bar and the 3D viewport below it never fight over space,
    // regardless of what the 3D engine's own resize() does to the canvas.
    setupTopbarLayout() {
        const topbar = document.getElementById('app-topbar');
        const main = document.getElementById('app-main');
        if (!topbar || !main) return;

        const applyOffset = () => {
            const h = topbar.getBoundingClientRect().height;
            main.style.top = `${h}px`;
        };

        applyOffset();
        window.addEventListener('resize', applyOffset);
        window.addEventListener('orientationchange', applyOffset);
        if (window.ResizeObserver) {
            new ResizeObserver(applyOffset).observe(topbar);
        }
    }

    showNotification(text) {
        const toast = document.getElementById('custom-notification');
        if (toast) {
            document.getElementById('notif-text').innerText = text;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 5000);
        }
    }

    blendHexColour(c1, c2, ratio) {
        const getRGB = (hex) => {
            const clean = hex.replace("#", "");
            return {
                r: parseInt(clean.substring(0, 2), 16),
                g: parseInt(clean.substring(2, 4), 16),
                b: parseInt(clean.substring(4, 6), 16),
            };
        };
        const rgb1 = getRGB(c1);
        const rgb2 = getRGB(c2);

        const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
        const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
        const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);

        const toHex = (num) => {
            const val = num.toString(16);
            return val.length === 1 ? "0" + val : val;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
}
