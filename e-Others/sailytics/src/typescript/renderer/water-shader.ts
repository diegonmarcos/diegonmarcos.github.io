import {
  Mesh,
  PlaneGeometry,
  ShaderMaterial,
  DoubleSide,
  Clock,
  Vector2,
} from 'three';

/**
 * Animated ocean surface using Gerstner waves
 * 3-4 wave components, foam at peaks
 */
export class AnimatedWater {
  mesh: Mesh;
  private material: ShaderMaterial;
  private clock: Clock;

  constructor(size: number = 500, segments: number = 128) {
    this.clock = new Clock();

    const geometry = new PlaneGeometry(size, size, segments, segments);

    // Gerstner wave shader
    this.material = new ShaderMaterial({
      side: DoubleSide,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uWaveA: { value: new Vector2(1.0, 0.5) },    // Direction + steepness
        uWaveB: { value: new Vector2(0.5, 1.2) },
        uWaveC: { value: new Vector2(-0.7, 0.8) },
        uWaveD: { value: new Vector2(-1.0, -0.6) },
        uWaterColor: { value: [0.05, 0.29, 0.43] },  // #0c4a6e
        uFoamColor: { value: [0.9, 0.95, 1.0] },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uWaveA, uWaveB, uWaveC, uWaveD;

        varying float vHeight;
        varying vec3 vNormal;

        vec3 gerstnerWave(vec2 dir, float steepness, float wavelength, vec3 p, float t, inout vec3 tangent, inout vec3 binormal) {
          float k = 2.0 * 3.14159 / wavelength;
          float c = sqrt(9.8 / k);
          vec2 d = normalize(dir);
          float f = k * (dot(d, p.xz) - c * t);
          float a = steepness / k;

          tangent += vec3(
            -d.x * d.x * (steepness * sin(f)),
            d.x * (steepness * cos(f)),
            -d.x * d.y * (steepness * sin(f))
          );

          binormal += vec3(
            -d.x * d.y * (steepness * sin(f)),
            d.y * (steepness * cos(f)),
            -d.y * d.y * (steepness * sin(f))
          );

          return vec3(
            d.x * (a * cos(f)),
            a * sin(f),
            d.y * (a * cos(f))
          );
        }

        void main() {
          vec3 p = position;
          vec3 tangent = vec3(1, 0, 0);
          vec3 binormal = vec3(0, 0, 1);

          p += gerstnerWave(uWaveA, 0.25, 20.0, position, uTime, tangent, binormal);
          p += gerstnerWave(uWaveB, 0.15, 12.0, position, uTime, tangent, binormal);
          p += gerstnerWave(uWaveC, 0.1, 8.0, position, uTime, tangent, binormal);
          p += gerstnerWave(uWaveD, 0.05, 5.0, position, uTime, tangent, binormal);

          vNormal = normalize(cross(binormal, tangent));
          vHeight = p.y;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uWaterColor;
        uniform vec3 uFoamColor;

        varying float vHeight;
        varying vec3 vNormal;

        void main() {
          // Foam at wave peaks
          float foam = smoothstep(0.5, 1.2, vHeight);

          vec3 color = mix(uWaterColor, uFoamColor, foam);

          // Fresnel-like effect
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0, 1, 0))), 2.0);
          color = mix(color, uFoamColor * 0.3, fresnel * 0.2);

          gl_FragColor = vec4(color, 0.55 + foam * 0.15);
        }
      `,
    });

    this.mesh = new Mesh(geometry, this.material);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = 0;
  }

  update(): void {
    this.material.uniforms.uTime.value = this.clock.getElapsedTime() * 0.5;
  }

  setWindDirection(directionDeg: number, speed: number): void {
    // Adjust wave directions based on wind (for future API integration)
    const rad = (directionDeg * Math.PI) / 180;
    const scale = Math.min(speed / 15, 2);

    this.material.uniforms.uWaveA.value.set(Math.sin(rad) * scale, Math.cos(rad) * 0.5);
    this.material.uniforms.uWaveB.value.set(Math.sin(rad + 0.5) * scale, Math.cos(rad + 0.5) * 0.8);
  }

  destroy(): void {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
