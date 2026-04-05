// Stark Industries — Industrial Grid Scanner
// Cold cyan circuit traces on deep black

precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float hash21(float p) {
    return fract(sin(p * 127.1) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

// Grid line with glow
float gridLine(float x, float width, float glow) {
    float d = abs(x);
    return smoothstep(width + glow, width, d) * 0.5 +
           smoothstep(width * 0.3, 0.0, d) * 0.8;
}

// Scanning pulse
float scanPulse(float y, float speed, float width) {
    float scan = mod(y + time * speed, 8.0);
    return smoothstep(width, 0.0, abs(scan)) * 0.6;
}

// Circuit trace — segments at grid intersections
float circuitTrace(vec2 uv, float scale) {
    vec2 grid = uv * scale;
    vec2 id = floor(grid);
    vec2 gv = fract(grid) - 0.5;
    float h = hash(id);
    float trace = 0.0;

    if (h > 0.6) {
        float seg = smoothstep(0.02, 0.005, abs(gv.y)) *
                    step(-0.4, gv.x) * step(gv.x, 0.4);
        trace += seg * 0.4;
    }
    if (h > 0.75) {
        float seg = smoothstep(0.02, 0.005, abs(gv.x)) *
                    step(-0.4, gv.y) * step(gv.y, 0.4);
        trace += seg * 0.3;
    }
    if (h > 0.85) {
        float dot = smoothstep(0.06, 0.03, length(gv));
        trace += dot * 0.5;
    }
    return trace;
}

// Animated data flow particles
float dataFlow(vec2 uv, float scale) {
    float flow = 0.0;
    vec2 grid = uv * scale;
    vec2 id = floor(grid);
    vec2 gv = fract(grid);
    float h = hash(id);
    float speed = 0.5 + h * 1.5;
    float offset = h * 6.28;

    if (h > 0.5) {
        float px = fract(time * speed * 0.3 + offset);
        float d = length(gv - vec2(px, 0.5));
        flow += smoothstep(0.08, 0.01, d) * 0.6;
    }
    if (h > 0.7) {
        float py = fract(time * speed * 0.2 + offset * 0.7);
        float d = length(gv - vec2(0.5, py));
        flow += smoothstep(0.06, 0.01, d) * 0.4;
    }
    return flow;
}

// Hexagonal pattern overlay
float hexGrid(vec2 p) {
    vec2 q = vec2(p.x * 2.0 * 0.5773503, p.y + p.x * 0.5773503);
    vec2 pi = floor(q);
    vec2 pf = fract(q);
    float v = mod(pi.x + pi.y, 3.0);
    float ca = step(1.0, v);
    float cb = step(2.0, v);
    vec2 ma = step(pf.xy, pf.yx);
    float e = dot(ma, 1.0 - pf.yx + ca * (pf.x + pf.y - 1.0) + cb * (pf.yx - 2.0 * pf.xy));
    return smoothstep(0.04, 0.02, abs(e - 0.5));
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;
    float t = time * 0.5;

    // Deep industrial black with blue tint
    vec3 col = vec3(0.02, 0.02, 0.04);

    // Subtle radial gradient
    float vignette = 1.0 - length(p) * 0.6;
    col += vec3(0.0, 0.02, 0.05) * vignette;

    // Accent colors
    vec3 cyan = vec3(0.0, 0.83, 1.0);
    vec3 cyanDark = vec3(0.0, 0.4, 0.6);
    vec3 cyanBright = vec3(0.4, 0.95, 1.0);

    // Primary grid (large)
    vec2 gridUV = p * 6.0;
    float gx = gridLine(fract(gridUV.x) - 0.5, 0.008, 0.03);
    float gy = gridLine(fract(gridUV.y) - 0.5, 0.008, 0.03);
    col += cyan * max(gx, gy) * 0.15;

    // Fine grid
    vec2 fineUV = p * 24.0;
    float fx = gridLine(fract(fineUV.x) - 0.5, 0.005, 0.015);
    float fy = gridLine(fract(fineUV.y) - 0.5, 0.005, 0.015);
    col += cyanDark * max(fx, fy) * 0.05;

    // Hex pattern (subtle)
    float hex = hexGrid(p * 4.0);
    col += cyanDark * hex * 0.04;

    // Circuit traces
    col += cyan * circuitTrace(p, 8.0) * 0.5;

    // Data flow
    col += cyanBright * dataFlow(p, 8.0);

    // CRT scanlines
    float scanline = sin(gl_FragCoord.y * 1.5) * 0.5 + 0.5;
    col *= 0.95 + scanline * 0.05;

    // Scanning pulses
    col += cyan * scanPulse(p.y, 0.15, 0.3) * 0.15;
    col += cyanDark * scanPulse(p.x, -0.08, 0.2) * 0.1;

    // Noise grain
    float grain = noise(gl_FragCoord.xy * 0.5 + time * 100.0) * 0.03;
    col += grain;

    // Center pulse glow
    float pulse = sin(time * 0.8) * 0.5 + 0.5;
    col += cyan * exp(-length(p) * 3.0) * pulse * 0.15;

    // Edge darkening
    col *= smoothstep(0.0, 0.7, vignette);

    gl_FragColor = vec4(col * intensity, 1.0);
}
