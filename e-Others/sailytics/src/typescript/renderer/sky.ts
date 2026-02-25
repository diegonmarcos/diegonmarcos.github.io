import {
  Mesh,
  SphereGeometry,
  ShaderMaterial,
  BackSide,
  Vector3,
} from 'three';

/**
 * Gradient sky dome with day/dusk atmosphere
 */
export class SkyDome {
  mesh: Mesh;
  private material: ShaderMaterial;

  constructor() {
    // Hemisphere geometry (inverted sphere)
    const geometry = new SphereGeometry(450, 32, 15, 0, Math.PI * 2, 0, Math.PI / 2);

    // Gradient shader for atmospheric sky
    this.material = new ShaderMaterial({
      side: BackSide,
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;

        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,
      uniforms: {
        topColor: { value: new Vector3(0.0, 0.1, 0.3) },       // Dark blue
        bottomColor: { value: new Vector3(0.4, 0.6, 0.9) },    // Light blue horizon
        offset: { value: 33 },
        exponent: { value: 0.6 },
      },
    });

    this.mesh = new Mesh(geometry, this.material);
    this.mesh.position.y = -10;
  }

  /**
   * Update sun position (for future use)
   */
  setSunPosition(azimuth: number, elevation: number): void {
    // Future: adjust sky colors based on sun position
    // Could interpolate between day/dusk/night palettes
  }

  destroy(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
