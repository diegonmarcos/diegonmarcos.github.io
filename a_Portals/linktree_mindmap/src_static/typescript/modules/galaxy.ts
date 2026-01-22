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
}

export class GalaxyRenderer {
  private canvas: HTMLCanvasElement;
  private gl: WebGLRenderingContext;
  private starProgram: WebGLProgram | null = null;
  private nebulaProgram: WebGLProgram | null = null;
  private stars: Star[] = [];
  private starCount = 800; // Increased star count for complexity
  private animationId: number | null = null;
  private startTime: number = Date.now();

  // Star program locations
  private starLocations: {
    position?: number;
    size?: number;
    speed?: number;
    phase?: number;
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

  private initStars(): void {
    this.stars = [];

    for (let i = 0; i < this.starCount; i++) {
      // Distribute stars across screen
      const x = Math.random();
      const y = Math.random();

      // Size distribution: more small stars, fewer large stars
      const rand = Math.random();
      let size: number;
      if (rand < 0.7) {
        // 70% small distant stars
        size = 1.0 + Math.random() * 1.5;
      } else if (rand < 0.9) {
        // 20% medium stars
        size = 2.5 + Math.random() * 1.5;
      } else {
        // 10% large bright stars
        size = 4.0 + Math.random() * 2.0;
      }

      // Vary speeds - larger stars move faster (parallax)
      const speed = 0.005 + (size / 6.0) * 0.015;

      // Random phase for staggered animation
      const phase = Math.random();

      this.stars.push({ x, y, size, speed, phase });
    }
  }

  private initBuffers(): void {
    // Star buffer
    const starData = new Float32Array(this.stars.length * 5); // x, y, size, speed, phase

    this.stars.forEach((star, i) => {
      const offset = i * 5;
      starData[offset] = star.x;
      starData[offset + 1] = star.y;
      starData[offset + 2] = star.size;
      starData[offset + 3] = star.speed;
      starData[offset + 4] = star.phase;
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
    const stride = 5 * Float32Array.BYTES_PER_ELEMENT;

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
