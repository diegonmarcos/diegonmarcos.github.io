// ==========================================================================
// WebGL Galaxy Background Renderer
// ==========================================================================

import { vertexShader, fragmentShader, nebulVertexShader, nebulaFragmentShader } from './shaders';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  phase: number;
  cluster: number;
}

export class GalaxyRenderer {
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext;
  private starProgram: WebGLProgram | null = null;
  private nebulaProgram: WebGLProgram | null = null;
  private stars: Star[] = [];
  private starCount = 1500; // High star count for chaotic fractal clusters
  private animationId: number | null = null;
  private startTime: number = Date.now();

  // Star program locations
  private starLocations: {
    position?: number;
    size?: number;
    speed?: number;
    phase?: number;
    cluster?: number;
    time?: WebGLUniformLocation | null;
    resolution?: WebGLUniformLocation | null;
  } = {};

  // Nebula program locations
  private nebulaLocations: {
    position?: number;
    time?: WebGLUniformLocation | null;
    resolution?: WebGLUniformLocation | null;
  } = {};

  private starBuffer: WebGLBuffer | null = null;
  private nebulaBuffer: WebGLBuffer | null = null;

  constructor(container: HTMLElement) {
    // Create canvas
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'galaxy-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
    `;

    // Get WebGL context
    const gl = this.canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      preserveDrawingBuffer: false,
    });

    if (!gl) {
      throw new Error('WebGL not supported');
    }

    this.gl = gl;

    // Insert canvas at start of body
    document.body.insertBefore(this.canvas, document.body.firstChild);

    // Initialize
    this.resize();
    this.initShaders();
    this.initStars();
    this.initBuffers();

    // Handle resize
    window.addEventListener('resize', () => this.resize());

    // Start animation
    this.animate();
  }

  private resize(): void {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * dpr;
    this.canvas.height = window.innerHeight * dpr;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  private initShaders(): void {
    // Compile star shader program
    const starVS = this.compileShader(vertexShader, this.gl.VERTEX_SHADER);
    const starFS = this.compileShader(fragmentShader, this.gl.FRAGMENT_SHADER);
    this.starProgram = this.createProgram(starVS, starFS);

    if (this.starProgram) {
      this.starLocations = {
        position: this.gl.getAttribLocation(this.starProgram, 'a_position'),
        size: this.gl.getAttribLocation(this.starProgram, 'a_size'),
        speed: this.gl.getAttribLocation(this.starProgram, 'a_speed'),
        phase: this.gl.getAttribLocation(this.starProgram, 'a_phase'),
        cluster: this.gl.getAttribLocation(this.starProgram, 'a_cluster'),
        time: this.gl.getUniformLocation(this.starProgram, 'u_time'),
        resolution: this.gl.getUniformLocation(this.starProgram, 'u_resolution'),
      };
    }

    // Compile nebula shader program
    const nebulaVS = this.compileShader(nebulVertexShader, this.gl.VERTEX_SHADER);
    const nebulaFS = this.compileShader(nebulaFragmentShader, this.gl.FRAGMENT_SHADER);
    this.nebulaProgram = this.createProgram(nebulaVS, nebulaFS);

    if (this.nebulaProgram) {
      this.nebulaLocations = {
        position: this.gl.getAttribLocation(this.nebulaProgram, 'a_position'),
        time: this.gl.getUniformLocation(this.nebulaProgram, 'u_time'),
        resolution: this.gl.getUniformLocation(this.nebulaProgram, 'u_resolution'),
      };
    }
  }

  private compileShader(source: string, type: number): WebGLShader {
    const shader = this.gl.createShader(type);
    if (!shader) throw new Error('Failed to create shader');

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const info = this.gl.getShaderInfoLog(shader);
      this.gl.deleteShader(shader);
      throw new Error('Shader compilation failed: ' + info);
    }

    return shader;
  }

  private createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
    const program = this.gl.createProgram();
    if (!program) throw new Error('Failed to create program');

    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      const info = this.gl.getProgramInfoLog(program);
      this.gl.deleteProgram(program);
      throw new Error('Program linking failed: ' + info);
    }

    return program;
  }

  // Fractal noise for star clustering
  private noise(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);

    const u = x * x * x * (x * (x * 6 - 15) + 10);
    const v = y * y * y * (y * (y * 6 - 15) + 10);

    const a = this.hash2D(X, Y);
    const b = this.hash2D(X + 1, Y);
    const c = this.hash2D(X, Y + 1);
    const d = this.hash2D(X + 1, Y + 1);

    return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
  }

  private hash2D(x: number, y: number): number {
    const h = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    return h - Math.floor(h);
  }

  private fbm(x: number, y: number, octaves: number): number {
    let value = 0.0;
    let amplitude = 0.5;
    let frequency = 1.0;

    for (let i = 0; i < octaves; i++) {
      value += amplitude * this.noise(x * frequency, y * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  private initStars(): void {
    this.stars = [];

    // Create cluster centers using fractal noise
    const clusterCount = 8;
    const clusterCenters: { x: number; y: number; intensity: number }[] = [];

    for (let i = 0; i < clusterCount; i++) {
      const angle = (i / clusterCount) * Math.PI * 2;
      const radius = 0.3 + Math.random() * 0.3;
      clusterCenters.push({
        x: 0.5 + Math.cos(angle) * radius,
        y: 0.5 + Math.sin(angle) * radius,
        intensity: 0.5 + Math.random() * 0.5,
      });
    }

    for (let i = 0; i < this.starCount; i++) {
      let x: number, y: number, clusterId: number;

      // 60% stars in fractal clusters, 40% scattered
      if (Math.random() < 0.6) {
        // Place in cluster with fractal distribution
        const cluster = clusterCenters[Math.floor(Math.random() * clusterCount)];
        clusterId = clusterCenters.indexOf(cluster);

        // Use fractal noise for cluster shape
        const angle = Math.random() * Math.PI * 2;
        const fractalDist = this.fbm(angle * 3, i * 0.1, 4);
        const distance = fractalDist * 0.15 * cluster.intensity;

        x = cluster.x + Math.cos(angle) * distance;
        y = cluster.y + Math.sin(angle) * distance;

        // Wrap coordinates
        x = (x + 1) % 1;
        y = (y + 1) % 1;
      } else {
        // Scattered background stars with fractal noise
        x = Math.random();
        y = Math.random();

        // Add fractal variation
        const noiseValue = this.fbm(x * 10, y * 10, 3);
        x = (x + noiseValue * 0.1) % 1;
        y = (y + noiseValue * 0.1) % 1;

        clusterId = -1; // Not in a cluster
      }

      // Size distribution influenced by fractal density
      const densityNoise = this.fbm(x * 20, y * 20, 4);
      const rand = Math.random() * densityNoise;

      let size: number;
      if (rand < 0.65) {
        // Small distant stars (most common)
        size = 0.8 + Math.random() * 1.7;
      } else if (rand < 0.85) {
        // Medium stars
        size = 2.5 + Math.random() * 1.5;
      } else if (rand < 0.95) {
        // Large bright stars
        size = 4.0 + Math.random() * 1.5;
      } else {
        // Giant stars (rare)
        size = 5.5 + Math.random() * 1.5;
      }

      // Cluster stars tend to be brighter
      if (clusterId >= 0) {
        size *= 1.0 + clusterCenters[clusterId].intensity * 0.3;
      }

      // Vary speeds - larger stars move faster (parallax)
      const speed = 0.004 + (size / 7.0) * 0.012;

      // Random phase for staggered animation
      const phase = Math.random();

      // Cluster ID for coordinated movement
      const cluster = clusterId >= 0 ? clusterId / clusterCount : Math.random();

      this.stars.push({ x, y, size, speed, phase, cluster });
    }
  }

  private initBuffers(): void {
    // Star buffer
    const starData = new Float32Array(this.stars.length * 6); // x, y, size, speed, phase, cluster

    this.stars.forEach((star, i) => {
      const offset = i * 6;
      starData[offset] = star.x;
      starData[offset + 1] = star.y;
      starData[offset + 2] = star.size;
      starData[offset + 3] = star.speed;
      starData[offset + 4] = star.phase;
      starData[offset + 5] = star.cluster;
    });

    this.starBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.starBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, starData, this.gl.STATIC_DRAW);

    // Nebula buffer (fullscreen quad)
    const nebulaData = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    this.nebulaBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.nebulaBuffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, nebulaData, this.gl.STATIC_DRAW);
  }

  private animate = (): void => {
    const time = (Date.now() - this.startTime) / 1000;

    // Clear
    this.gl.clearColor(0.0, 0.0, 0.05, 1.0); // Very dark blue background
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    // Enable blending for transparency
    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

    // Render nebula background
    this.renderNebula(time);

    // Render stars
    this.renderStars(time);

    this.animationId = requestAnimationFrame(this.animate);
  };

  private renderNebula(time: number): void {
    if (!this.nebulaProgram || !this.nebulaBuffer) return;

    this.gl.useProgram(this.nebulaProgram);

    // Bind buffer
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.nebulaBuffer);

    // Set attributes
    if (this.nebulaLocations.position !== undefined) {
      this.gl.enableVertexAttribArray(this.nebulaLocations.position);
      this.gl.vertexAttribPointer(this.nebulaLocations.position, 2, this.gl.FLOAT, false, 0, 0);
    }

    // Set uniforms
    if (this.nebulaLocations.time) {
      this.gl.uniform1f(this.nebulaLocations.time, time);
    }
    if (this.nebulaLocations.resolution) {
      this.gl.uniform2f(this.nebulaLocations.resolution, this.canvas.width, this.canvas.height);
    }

    // Draw fullscreen quad
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
  }

  private renderStars(time: number): void {
    if (!this.starProgram || !this.starBuffer) return;

    this.gl.useProgram(this.starProgram);

    // Bind buffer
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.starBuffer);

    // Set attributes
    const stride = 6 * Float32Array.BYTES_PER_ELEMENT;

    if (this.starLocations.position !== undefined) {
      this.gl.enableVertexAttribArray(this.starLocations.position);
      this.gl.vertexAttribPointer(this.starLocations.position, 2, this.gl.FLOAT, false, stride, 0);
    }

    if (this.starLocations.size !== undefined) {
      this.gl.enableVertexAttribArray(this.starLocations.size);
      this.gl.vertexAttribPointer(this.starLocations.size, 1, this.gl.FLOAT, false, stride, 2 * Float32Array.BYTES_PER_ELEMENT);
    }

    if (this.starLocations.speed !== undefined) {
      this.gl.enableVertexAttribArray(this.starLocations.speed);
      this.gl.vertexAttribPointer(this.starLocations.speed, 1, this.gl.FLOAT, false, stride, 3 * Float32Array.BYTES_PER_ELEMENT);
    }

    if (this.starLocations.phase !== undefined) {
      this.gl.enableVertexAttribArray(this.starLocations.phase);
      this.gl.vertexAttribPointer(this.starLocations.phase, 1, this.gl.FLOAT, false, stride, 4 * Float32Array.BYTES_PER_ELEMENT);
    }

    if (this.starLocations.cluster !== undefined) {
      this.gl.enableVertexAttribArray(this.starLocations.cluster);
      this.gl.vertexAttribPointer(this.starLocations.cluster, 1, this.gl.FLOAT, false, stride, 5 * Float32Array.BYTES_PER_ELEMENT);
    }

    // Set uniforms
    if (this.starLocations.time) {
      this.gl.uniform1f(this.starLocations.time, time);
    }
    if (this.starLocations.resolution) {
      this.gl.uniform2f(this.starLocations.resolution, this.canvas.width, this.canvas.height);
    }

    // Draw stars as points
    this.gl.drawArrays(this.gl.POINTS, 0, this.stars.length);
  }

  public destroy(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.starBuffer) this.gl.deleteBuffer(this.starBuffer);
    if (this.nebulaBuffer) this.gl.deleteBuffer(this.nebulaBuffer);
    if (this.starProgram) this.gl.deleteProgram(this.starProgram);
    if (this.nebulaProgram) this.gl.deleteProgram(this.nebulaProgram);

    this.canvas.remove();
    window.removeEventListener('resize', () => this.resize());
  }
}
