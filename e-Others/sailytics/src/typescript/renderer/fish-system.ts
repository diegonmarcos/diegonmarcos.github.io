import {
  InstancedMesh,
  ConeGeometry,
  MeshStandardMaterial,
  Matrix4,
  Vector3,
  Quaternion,
  Euler,
} from 'three';

interface Boid {
  position: Vector3;
  velocity: Vector3;
}

/**
 * Fish school using Boids algorithm (separation, alignment, cohesion)
 * Rendered with InstancedMesh for single draw call
 */
export class FishSystem {
  mesh: InstancedMesh;
  private boids: Boid[];
  private count: number;
  private bounds: { min: Vector3; max: Vector3 };

  constructor(fishCount: number = 200) {
    this.count = fishCount;
    this.boids = [];

    // Bounding box for fish (closer to surface for visibility)
    this.bounds = {
      min: new Vector3(-80, -6, -80),
      max: new Vector3(80, -2, 80),
    };

    // Initialize boids
    for (let i = 0; i < fishCount; i++) {
      this.boids.push({
        position: new Vector3(
          Math.random() * 80 - 40,
          Math.random() * -4 - 2,
          Math.random() * 80 - 40
        ),
        velocity: new Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 2),
      });
    }

    // Larger low-poly fish geometry (cone)
    const geometry = new ConeGeometry(0.5, 1.8, 5);
    geometry.rotateX(Math.PI / 2);

    const material = new MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.6,
      metalness: 0.3,
      emissive: 0x1e8ab8,
      emissiveIntensity: 0.4,
    });

    this.mesh = new InstancedMesh(geometry, material, fishCount);
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = false;
  }

  update(dt: number): void {
    const separationDist = 2.0;
    const alignmentDist = 5.0;
    const cohesionDist = 8.0;

    const maxSpeed = 3.0;
    const maxForce = 0.5;

    // Boids algorithm
    for (let i = 0; i < this.count; i++) {
      const boid = this.boids[i];

      const separation = new Vector3();
      const alignment = new Vector3();
      const cohesion = new Vector3();

      let sepCount = 0;
      let aliCount = 0;
      let cohCount = 0;

      // Check neighbors
      for (let j = 0; j < this.count; j++) {
        if (i === j) continue;

        const other = this.boids[j];
        const dist = boid.position.distanceTo(other.position);

        // Separation - steer away from nearby boids
        if (dist < separationDist && dist > 0) {
          const diff = new Vector3().subVectors(boid.position, other.position).normalize().divideScalar(dist);
          separation.add(diff);
          sepCount++;
        }

        // Alignment - match velocity of nearby boids
        if (dist < alignmentDist) {
          alignment.add(other.velocity);
          aliCount++;
        }

        // Cohesion - steer towards average position of nearby boids
        if (dist < cohesionDist) {
          cohesion.add(other.position);
          cohCount++;
        }
      }

      // Apply steering forces
      if (sepCount > 0) {
        separation.divideScalar(sepCount).normalize().multiplyScalar(maxSpeed).sub(boid.velocity).clampLength(0, maxForce);
        boid.velocity.add(separation.multiplyScalar(1.5)); // Stronger separation
      }

      if (aliCount > 0) {
        alignment.divideScalar(aliCount).normalize().multiplyScalar(maxSpeed).sub(boid.velocity).clampLength(0, maxForce);
        boid.velocity.add(alignment);
      }

      if (cohCount > 0) {
        cohesion.divideScalar(cohCount).sub(boid.position).normalize().multiplyScalar(maxSpeed).sub(boid.velocity).clampLength(0, maxForce);
        boid.velocity.add(cohesion);
      }

      // Boundary avoidance
      const boundaryForce = 0.3;
      if (boid.position.x < this.bounds.min.x) boid.velocity.x += boundaryForce;
      if (boid.position.x > this.bounds.max.x) boid.velocity.x -= boundaryForce;
      if (boid.position.y < this.bounds.min.y) boid.velocity.y += boundaryForce;
      if (boid.position.y > this.bounds.max.y) boid.velocity.y -= boundaryForce;
      if (boid.position.z < this.bounds.min.z) boid.velocity.z += boundaryForce;
      if (boid.position.z > this.bounds.max.z) boid.velocity.z -= boundaryForce;

      // Limit speed
      boid.velocity.clampLength(0, maxSpeed);

      // Update position
      boid.position.add(boid.velocity.clone().multiplyScalar(dt));

      // Update instance matrix
      const matrix = new Matrix4();
      const quaternion = new Quaternion();

      // Align fish with velocity direction
      const direction = boid.velocity.clone().normalize();
      const up = new Vector3(0, 1, 0);
      const axis = new Vector3().crossVectors(up, direction).normalize();
      const angle = Math.acos(up.dot(direction));

      if (!isNaN(angle)) {
        quaternion.setFromAxisAngle(axis, angle);
      }

      matrix.compose(boid.position, quaternion, new Vector3(1, 1, 1));
      this.mesh.setMatrixAt(i, matrix);
    }

    this.mesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Set fish positions from external data (e.g., sonar API)
   */
  setPositions(data: { x: number; y: number; z: number; size: number }[]): void {
    for (let i = 0; i < Math.min(data.length, this.count); i++) {
      this.boids[i].position.set(data[i].x, data[i].y, data[i].z);
    }
  }

  destroy(): void {
    this.mesh.geometry.dispose();
    (this.mesh.material as MeshStandardMaterial).dispose();
  }
}
