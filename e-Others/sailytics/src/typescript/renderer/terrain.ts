import {
  Mesh,
  PlaneGeometry,
  MeshStandardMaterial,
  DoubleSide,
} from 'three';

/**
 * Procedural underwater terrain using Perlin-like noise
 * Semi-transparent so terrain visible through water
 */
export class UnderwaterTerrain {
  mesh: Mesh;
  private geometry: PlaneGeometry;

  constructor(size: number = 500, segments: number = 64) {
    this.geometry = new PlaneGeometry(size, size, segments, segments);

    // Generate heightmap using simple multi-octave noise
    this.generateHeightmap();

    const material = new MeshStandardMaterial({
      color: 0x2d5f7a,
      transparent: true,
      opacity: 0.8,
      roughness: 0.9,
      metalness: 0.1,
      side: DoubleSide,
      emissive: 0x0a2030,
      emissiveIntensity: 0.3,
    });

    this.mesh = new Mesh(this.geometry, material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = -5; // Closer to surface for visibility
  }

  /**
   * Generate procedural heightmap using multi-octave noise
   */
  private generateHeightmap(): void {
    const positions = this.geometry.attributes.position;
    const vertex = { x: 0, y: 0, z: 0 };

    for (let i = 0; i < positions.count; i++) {
      vertex.x = positions.getX(i);
      vertex.y = positions.getY(i);
      vertex.z = positions.getZ(i);

      // Multi-octave noise (simplified)
      const scale = 0.02;
      const height =
        this.noise2D(vertex.x * scale, vertex.y * scale) * 8 +
        this.noise2D(vertex.x * scale * 2, vertex.y * scale * 2) * 4 +
        this.noise2D(vertex.x * scale * 4, vertex.y * scale * 4) * 2;

      positions.setZ(i, height - 5); // Offset down
    }

    positions.needsUpdate = true;
    this.geometry.computeVertexNormals();
  }

  /**
   * Simple 2D noise function (hash-based, deterministic)
   */
  private noise2D(x: number, y: number): number {
    // Simple hash-based noise
    const X = Math.floor(x);
    const Y = Math.floor(y);

    const sx = x - X;
    const sy = y - Y;

    // Interpolation weights
    const u = sx * sx * (3 - 2 * sx);
    const v = sy * sy * (3 - 2 * sy);

    // Hash values
    const a = this.hash2D(X, Y);
    const b = this.hash2D(X + 1, Y);
    const c = this.hash2D(X, Y + 1);
    const d = this.hash2D(X + 1, Y + 1);

    // Bilinear interpolation
    return this.lerp(this.lerp(a, b, u), this.lerp(c, d, u), v);
  }

  /**
   * Simple 2D hash function
   */
  private hash2D(x: number, y: number): number {
    let h = x * 374761393 + y * 668265263;
    h = (h ^ (h >>> 13)) * 1274126177;
    h = h ^ (h >>> 16);
    return (h & 0xffffffff) / 0xffffffff;
  }

  private lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  /**
   * Set heightmap from external data (e.g., bathymetry API)
   */
  setHeightmap(data: { x: number; y: number; depth: number }[]): void {
    // Future: interpolate external bathymetry data to geometry vertices
    const positions = this.geometry.attributes.position;

    for (const point of data) {
      // Find nearest vertices and update heights
      // (Simplified: would need spatial indexing for performance)
      for (let i = 0; i < positions.count; i++) {
        const vx = positions.getX(i);
        const vy = positions.getY(i);

        const dist = Math.sqrt((vx - point.x) ** 2 + (vy - point.y) ** 2);
        if (dist < 5) {
          positions.setZ(i, -point.depth);
        }
      }
    }

    positions.needsUpdate = true;
    this.geometry.computeVertexNormals();
  }

  destroy(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as MeshStandardMaterial).dispose();
  }
}
