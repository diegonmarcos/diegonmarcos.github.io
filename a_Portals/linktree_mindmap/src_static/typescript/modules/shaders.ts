// ==========================================================================
// WebGL Shaders for Galaxy Background
// ==========================================================================

/**
 * Vertex shader - positions vertices on screen
 */
export const vertexShader = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute float a_speed;
  attribute float a_phase;

  uniform float u_time;
  uniform vec2 u_resolution;

  varying float v_brightness;
  varying float v_size;

  void main() {
    // Slow vertical drift with individual phase offset
    float drift = mod(u_time * a_speed + a_phase, 1.0);

    // Parallax layers based on size (larger = closer = faster)
    float parallax = a_size * 0.5;
    float adjustedY = mod(a_position.y + drift * parallax, 1.0);

    // Convert from 0-1 to clip space (-1 to 1)
    vec2 clipSpace = (vec2(a_position.x, adjustedY) * 2.0 - 1.0);
    gl_Position = vec4(clipSpace, 0.0, 1.0);

    // Point size in pixels
    gl_PointSize = a_size * (u_resolution.y / 1080.0);

    // Twinkle effect - varies per star with phase offset
    float twinkle = sin(u_time * 2.0 + a_phase * 6.28) * 0.3 + 0.7;
    v_brightness = twinkle * (0.3 + a_size * 0.7);
    v_size = a_size;
  }
`;

/**
 * Fragment shader - renders each star pixel
 */
export const fragmentShader = `
  precision mediump float;

  varying float v_brightness;
  varying float v_size;

  void main() {
    // Distance from center of point (0.0 at center, 0.5 at edge)
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);

    // Soft glow with size-based falloff
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 2.0);

    // Add sharper core for larger stars
    if (v_size > 2.5) {
      float core = 1.0 - smoothstep(0.0, 0.15, dist);
      core = pow(core, 3.0);
      glow = max(glow, core);
    }

    // Color variation - subtle blue to white gradient based on size
    vec3 color;
    if (v_size > 3.0) {
      // Bright white stars (larger)
      color = vec3(1.0, 0.98, 0.95);
    } else if (v_size > 2.0) {
      // White-blue stars (medium)
      color = vec3(0.95, 0.97, 1.0);
    } else {
      // Faint blue stars (smaller, more distant)
      color = vec3(0.7, 0.8, 1.0);
    }

    // Apply brightness and glow
    float alpha = glow * v_brightness;
    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

/**
 * Nebula background shader (fullscreen quad)
 */
export const nebulVertexShader = `
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

/**
 * Nebula fragment shader - animated noise-based nebula clouds
 */
export const nebulaFragmentShader = `
  precision mediump float;

  uniform float u_time;
  uniform vec2 u_resolution;

  varying vec2 v_uv;

  // Simplex-like noise function
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }

    return value;
  }

  void main() {
    vec2 uv = v_uv;
    vec2 p = uv * 3.0;

    // Animated nebula clouds
    float t = u_time * 0.02;
    float n1 = fbm(p + vec2(t * 0.3, t * 0.2));
    float n2 = fbm(p * 1.5 + vec2(-t * 0.2, t * 0.3));
    float n3 = fbm(p * 2.0 + vec2(t * 0.1, -t * 0.1));

    // Combine noise layers
    float nebula = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);
    nebula = smoothstep(0.3, 0.8, nebula);

    // Color gradient - deep purple to blue
    vec3 color1 = vec3(0.05, 0.02, 0.15); // Deep purple
    vec3 color2 = vec3(0.02, 0.08, 0.2);  // Dark blue
    vec3 color3 = vec3(0.1, 0.05, 0.25);  // Lighter purple

    vec3 color = mix(color1, color2, n1);
    color = mix(color, color3, n2 * 0.5);

    // Apply nebula intensity
    color *= nebula * 0.3;

    gl_FragColor = vec4(color, 1.0);
  }
`;
