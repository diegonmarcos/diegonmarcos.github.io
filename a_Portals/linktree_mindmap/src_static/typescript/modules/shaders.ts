// ==========================================================================
// WebGL Shaders for Galaxy Background
// ==========================================================================

/**
 * Vertex shader - positions stars with fractal turbulence
 */
export const vertexShader = `
  attribute vec2 a_position;
  attribute float a_size;
  attribute float a_speed;
  attribute float a_phase;
  attribute float a_cluster;

  uniform float u_time;
  uniform vec2 u_resolution;

  varying float v_brightness;
  varying float v_size;
  varying float v_flicker;

  // Hash for pseudo-random values
  float hash(float n) {
    return fract(sin(n) * 43758.5453);
  }

  // Noise function for turbulence
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i.x + i.y * 57.0);
    float b = hash(i.x + 1.0 + i.y * 57.0);
    float c = hash(i.x + (i.y + 1.0) * 57.0);
    float d = hash(i.x + 1.0 + (i.y + 1.0) * 57.0);

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal turbulence
  float turbulence(vec2 p, float t) {
    float sum = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;

    for (int i = 0; i < 4; i++) {
      sum += amplitude * abs(noise(p * frequency + t * 0.1));
      amplitude *= 0.5;
      frequency *= 2.0;
    }

    return sum;
  }

  void main() {
    float t = u_time * 0.3;

    // Slow vertical drift with individual phase offset
    float baseDrift = mod(t * a_speed + a_phase, 1.0);

    // Add fractal turbulence to position
    vec2 turbPos = a_position * 10.0 + vec2(t * 0.1, t * 0.05);
    float turbX = turbulence(turbPos, t) * 0.03;
    float turbY = turbulence(turbPos + vec2(100.0), t) * 0.02;

    // Cluster-based movement (stars in same cluster move together)
    float clusterPhase = a_cluster * 6.28;
    float clusterDrift = sin(t * 0.5 + clusterPhase) * 0.015;

    // Parallax layers based on size (larger = closer = faster)
    float parallax = a_size * 0.5;
    float adjustedY = mod(a_position.y + baseDrift * parallax + turbY + clusterDrift, 1.0);
    float adjustedX = a_position.x + turbX + sin(t * 0.3 + a_phase * 6.28) * 0.01;

    // Wrap x coordinate
    adjustedX = mod(adjustedX + 1.0, 1.0);

    // Convert from 0-1 to clip space (-1 to 1)
    vec2 clipSpace = (vec2(adjustedX, adjustedY) * 2.0 - 1.0);
    gl_Position = vec4(clipSpace, 0.0, 1.0);

    // Dynamic point size with pulsation
    float pulse = sin(t * 3.0 + a_phase * 12.56) * 0.2 + 1.0;
    gl_PointSize = a_size * (u_resolution.y / 1080.0) * pulse;

    // Complex twinkle effect with multiple frequencies
    float twinkle1 = sin(t * 2.0 + a_phase * 6.28) * 0.5 + 0.5;
    float twinkle2 = sin(t * 4.5 + a_phase * 3.14) * 0.3 + 0.7;
    float twinkle3 = sin(t * 1.3 + a_cluster * 6.28) * 0.2 + 0.8;
    float twinkle = twinkle1 * twinkle2 * twinkle3;

    // Flicker effect for smaller stars
    float flicker = 1.0;
    if (a_size < 2.5) {
      flicker = hash(a_phase + floor(t * 3.0)) > 0.15 ? 1.0 : 0.3;
    }

    v_brightness = twinkle * (0.2 + a_size * 0.8) * flicker;
    v_size = a_size;
    v_flicker = flicker;
  }
`;

/**
 * Fragment shader - renders chaotic stars with energy halos
 */
export const fragmentShader = `
  precision highp float;

  varying float v_brightness;
  varying float v_size;
  varying float v_flicker;

  // Hash for random values
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // Noise for corona texture
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

  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    float angle = atan(coord.y, coord.x);

    // Multi-layer glow system
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 1.8);

    // Sharp bright core
    float core = 1.0 - smoothstep(0.0, 0.12, dist);
    core = pow(core, 4.0);

    // Corona with fractal detail for larger stars
    float corona = 0.0;
    if (v_size > 2.0) {
      // Rotating spikes
      float spikes = abs(sin(angle * 4.0 + v_brightness * 6.28)) * 0.5 + 0.5;
      spikes = pow(spikes, 3.0);

      // Fractal noise texture
      vec2 coronaUV = coord * 8.0 + vec2(v_brightness * 2.0);
      float coronaNoise = noise(coronaUV) * 0.5 + noise(coronaUV * 2.0) * 0.25;

      corona = (1.0 - smoothstep(0.15, 0.45, dist)) * spikes * coronaNoise;
      corona *= 0.6;
    }

    // Energy halo for very large stars
    float halo = 0.0;
    if (v_size > 3.5) {
      float haloNoise = noise(coord * 6.0 + vec2(v_flicker * 10.0));
      halo = (1.0 - smoothstep(0.2, 0.5, dist)) * haloNoise;
      halo *= 0.3;
    }

    // Combine all layers
    float intensity = max(max(glow, core), max(corona, halo));

    // Complex color palette based on size and distance
    vec3 color;
    if (v_size > 4.0) {
      // Giant stars - yellow-white supergiants
      vec3 white = vec3(1.0, 0.98, 0.92);
      vec3 yellow = vec3(1.0, 0.95, 0.7);
      color = mix(white, yellow, dist * 2.0);
    } else if (v_size > 3.0) {
      // Large stars - bright white with blue corona
      vec3 white = vec3(1.0, 0.98, 0.95);
      vec3 blue = vec3(0.8, 0.9, 1.0);
      color = mix(white, blue, corona);
    } else if (v_size > 2.0) {
      // Medium stars - white-blue
      vec3 white = vec3(0.95, 0.97, 1.0);
      vec3 cyan = vec3(0.7, 0.9, 1.0);
      color = mix(white, cyan, dist);
    } else if (v_size > 1.5) {
      // Small stars - blue-white
      color = vec3(0.75, 0.85, 1.0);
    } else {
      // Tiny distant stars - deep blue
      vec3 blue = vec3(0.6, 0.7, 1.0);
      vec3 violet = vec3(0.7, 0.6, 1.0);
      color = mix(blue, violet, hash(coord));
    }

    // Add chromatic aberration for large bright stars
    if (v_size > 3.5 && dist > 0.15) {
      float r = (1.0 - smoothstep(0.15, 0.5, dist + 0.01)) * v_brightness;
      float g = (1.0 - smoothstep(0.15, 0.5, dist)) * v_brightness;
      float b = (1.0 - smoothstep(0.15, 0.5, dist - 0.01)) * v_brightness;
      color = vec3(r, g, b);
    }

    // Apply brightness and flicker
    float alpha = intensity * v_brightness * v_flicker;

    // Energy pulse for very bright moments
    if (v_brightness > 0.9 && v_size > 2.5) {
      color += vec3(0.2, 0.15, 0.3) * (v_brightness - 0.9) * 5.0;
    }

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
 * Nebula fragment shader - chaotic fractal nebula with turbulence and plasma
 */
export const nebulaFragmentShader = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;

  varying vec2 v_uv;

  // Enhanced hash function for better randomness
  vec3 hash3(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(443.897, 441.423, 437.195));
    p3 += dot(p3, p3.yzx + 19.19);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // Improved noise with smoother interpolation
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    // Quintic interpolation for smoother gradients
    f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Curl noise for swirling patterns
  vec2 curl(vec2 p, float t) {
    float eps = 0.1;
    float n1 = noise(p + vec2(0.0, eps));
    float n2 = noise(p - vec2(0.0, eps));
    float n3 = noise(p + vec2(eps, 0.0));
    float n4 = noise(p - vec2(eps, 0.0));

    return vec2(n1 - n2, n4 - n3) / (2.0 * eps);
  }

  // Turbulent FBM with 8 octaves for extreme detail
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    // Rotation matrix for each octave
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));

    for (int i = 0; i < 8; i++) {
      value += amplitude * abs(noise(p * frequency));
      p = rot * p * 2.03;
      amplitude *= 0.5;
      frequency *= 2.0;
    }

    return value;
  }

  // Domain warping for chaotic distortion
  vec2 domainWarp(vec2 p, float intensity) {
    vec2 q = vec2(fbm(p), fbm(p + vec2(5.2, 1.3)));
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2)),
                  fbm(p + 4.0 * q + vec2(8.3, 2.8)));
    return p + intensity * r;
  }

  // Voronoi for cell-like structures
  float voronoi(vec2 p) {
    vec2 n = floor(p);
    vec2 f = fract(p);

    float minDist = 1.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 neighbor = vec2(float(i), float(j));
        vec2 point = hash3(n + neighbor).xy;
        vec2 diff = neighbor + point - f;
        float dist = length(diff);
        minDist = min(minDist, dist);
      }
    }

    return minDist;
  }

  // Plasma effect
  float plasma(vec2 p, float t) {
    float c = sin(p.x * 10.0 + t);
    c += sin(p.y * 10.0 + t);
    c += sin((p.x + p.y) * 10.0 + t);
    c += sin(sqrt(p.x * p.x + p.y * p.y) * 10.0 + t);
    return c * 0.25;
  }

  void main() {
    vec2 uv = v_uv;
    vec2 p = (uv - 0.5) * 4.0;

    float t = u_time * 0.015;

    // Multi-layer domain warping for extreme chaos
    vec2 warped1 = domainWarp(p, 0.3);
    vec2 warped2 = domainWarp(p * 0.7 + vec2(t * 0.2, -t * 0.15), 0.5);
    vec2 warped3 = domainWarp(p * 1.3 - vec2(t * 0.1, t * 0.2), 0.4);

    // Swirling patterns with curl noise
    vec2 swirl = curl(p * 2.0 + vec2(t * 0.3, t * 0.2), t);
    vec2 swirled = p + swirl * 0.8;

    // Multiple FBM layers with different frequencies
    float n1 = fbm(warped1 + vec2(t * 0.3, t * 0.2));
    float n2 = fbm(warped2 * 1.5 + swirl);
    float n3 = fbm(warped3 * 2.3 - swirl * 0.5);
    float n4 = fbm(swirled * 0.8 + vec2(-t * 0.15, t * 0.25));
    float n5 = fbm(p * 4.0 + vec2(sin(t * 0.3), cos(t * 0.4)));

    // Voronoi cells for structure
    float cells = voronoi(p * 2.0 + swirl * 0.5);

    // Plasma energy tendrils
    float plasmaEffect = plasma(swirled * 0.5, t * 2.0);

    // Combine all chaos layers
    float chaos = n1 * 0.25 + n2 * 0.2 + n3 * 0.15 + n4 * 0.2 + n5 * 0.1;
    chaos += (1.0 - cells) * 0.1;
    chaos += plasmaEffect * 0.15;

    // Turbulent ridges
    chaos = abs(chaos - 0.5) * 2.0;
    chaos = smoothstep(0.2, 0.9, chaos);

    // Complex color palette with fractal variation
    vec3 deepPurple = vec3(0.08, 0.02, 0.2);
    vec3 darkBlue = vec3(0.02, 0.05, 0.25);
    vec3 violet = vec3(0.15, 0.05, 0.3);
    vec3 cyan = vec3(0.05, 0.15, 0.35);
    vec3 magenta = vec3(0.2, 0.05, 0.2);
    vec3 teal = vec3(0.03, 0.2, 0.25);

    // Multi-stage color mixing based on different noise layers
    vec3 color = mix(deepPurple, darkBlue, n1);
    color = mix(color, violet, n2 * n3);
    color = mix(color, cyan, smoothstep(0.5, 0.8, n4));
    color = mix(color, magenta, (1.0 - cells) * 0.3);
    color = mix(color, teal, abs(plasmaEffect) * 0.4);

    // Energy hotspots
    float hotspot = smoothstep(0.7, 1.0, n1 * n2);
    color += hotspot * vec3(0.2, 0.1, 0.3) * (sin(t * 3.0) * 0.5 + 0.5);

    // Vignette with fractal edge
    float vignetteNoise = noise(p * 0.5 + vec2(t * 0.05));
    float vignette = 1.0 - length(p) * 0.15 - vignetteNoise * 0.1;

    // Apply all effects
    color *= chaos * 0.4 * vignette;

    // Add subtle animated glow
    color += vec3(0.02, 0.05, 0.08) * sin(t + length(p)) * 0.3;

    gl_FragColor = vec4(color, 1.0);
  }
`;
