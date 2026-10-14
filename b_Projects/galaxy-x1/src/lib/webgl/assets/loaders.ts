// One configured GLTF loader for the whole app: Draco (geometry) + KTX2/Basis
// (GPU textures) + meshopt. Lets the marketplace ship compressed, separated
// assets (gltf + bin + ktx2) that download small and decode off the main path.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

// Stable, versioned decoder CDNs. Vendor into static/ later if you want zero
// third-party runtime deps; plain .glb assets never touch these.
const DRACO_CDN = 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/';
const BASIS_CDN = 'https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/libs/basis/';

let shared: GLTFLoader | null = null;

/** Configured GLTFLoader (singleton). Pass the renderer once for KTX2 support detection. */
export function gltfLoader(renderer?: THREE.WebGLRenderer): GLTFLoader {
  if (shared) return shared;
  const loader = new GLTFLoader();

  const draco = new DRACOLoader().setDecoderPath(DRACO_CDN);
  loader.setDRACOLoader(draco);

  if (renderer) {
    const ktx2 = new KTX2Loader().setTranscoderPath(BASIS_CDN).detectSupport(renderer);
    loader.setKTX2Loader(ktx2);
  }

  loader.setMeshoptDecoder(MeshoptDecoder);
  shared = loader;
  return loader;
}
