import {
  Points,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  AdditiveBlending,
  Clock,
} from 'three';

/**
 * Wind visualization using particle streaks
 * Position updates in vertex shader for GPU acceleration
 */
export class WindParticles {
  points: Points;
  private geometry: BufferGeometry;
  private material: PointsMaterial;
  private clock: Clock;
  private windDirection: { x: number; y: number; z: number };

  constructor(particleCount: number = 500) {
    this.clock = new Clock();
    this.windDirection = { x: 0, y: 0, z: -1 };

    this.geometry = new BufferGeometry();

    // Initialize particle positions
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const lifetimes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Random positions in box above water
      positions[i3] = (Math.random() - 0.5) * 200;
      positions[i3 + 1] = Math.random() * 50 + 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 200;

      // Randomize initial velocities
      velocities[i3] = (Math.random() - 0.5) * 0.5;
      velocities[i3 + 1] = 0;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.5;

      lifetimes[i] = Math.random();
    }

    this.geometry.setAttribute('position', new BufferAttribute(positions, 3));
    this.geometry.setAttribute('velocity', new BufferAttribute(velocities, 3));
    this.geometry.setAttribute('lifetime', new BufferAttribute(lifetimes, 1));

    this.material = new PointsMaterial({
      size: 1.5,
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.8,
      blending: AdditiveBlending,
      depthWrite: false,
    });

    this.points = new Points(this.geometry, this.material);
  }

  setWindDirection(directionDeg: number, speed: number): void {
    const rad = (directionDeg * Math.PI) / 180;
    this.windDirection.x = Math.sin(rad) * speed * 0.3;
    this.windDirection.z = Math.cos(rad) * speed * 0.3;
  }

  update(dt: number): void {
    const positions = this.geometry.attributes.position;
    const velocities = this.geometry.attributes.velocity;
    const lifetimes = this.geometry.attributes.lifetime;

    for (let i = 0; i < positions.count; i++) {
      const i3 = i * 3;

      // Update position based on wind direction + velocity
      positions.array[i3] += (this.windDirection.x + velocities.array[i3]) * dt * 20;
      positions.array[i3 + 1] += velocities.array[i3 + 1] * dt * 5;
      positions.array[i3 + 2] += (this.windDirection.z + velocities.array[i3 + 2]) * dt * 20;

      // Update lifetime
      lifetimes.array[i] += dt * 0.3;

      // Reset particle if out of bounds or lifetime expired
      if (
        lifetimes.array[i] > 1.0 ||
        Math.abs(positions.array[i3]) > 150 ||
        Math.abs(positions.array[i3 + 2]) > 150
      ) {
        // Respawn at random position
        positions.array[i3] = (Math.random() - 0.5) * 200;
        positions.array[i3 + 1] = Math.random() * 50 + 5;
        positions.array[i3 + 2] = (Math.random() - 0.5) * 200;

        velocities.array[i3] = (Math.random() - 0.5) * 0.5;
        velocities.array[i3 + 1] = 0;
        velocities.array[i3 + 2] = (Math.random() - 0.5) * 0.5;

        lifetimes.array[i] = 0;
      }
    }

    positions.needsUpdate = true;
    lifetimes.needsUpdate = true;
  }

  destroy(): void {
    this.geometry.dispose();
    this.material.dispose();
  }
}
