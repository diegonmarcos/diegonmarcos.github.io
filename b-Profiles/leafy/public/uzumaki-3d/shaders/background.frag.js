/**
 * Background Fragment Shader
 * Nebula + Aurora + Shooting Stars
 */

export const fragmentShader = `
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
varying vec2 vUv;

// Hash function
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Noise function
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1, 0)), f.x),
        mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x),
        f.y
    );
}

// Fractal Brownian Motion
float fbm(vec2 p) {
    float v = 0.0;
    v += 0.5 * noise(p); p *= 2.0;
    v += 0.25 * noise(p); p *= 2.0;
    v += 0.125 * noise(p); p *= 2.0;
    v += 0.0625 * noise(p);
    return v;
}

// Nebula effect
vec3 nebula(vec2 uv, float t) {
    vec3 col = vec3(0.0);

    float n1 = fbm(uv * 1.5 + t * 0.02);
    col += vec3(0.06, 0.01, 0.1) * smoothstep(0.35, 0.7, n1);

    float n2 = fbm(uv * 2.0 - t * 0.015);
    col += vec3(0.01, 0.04, 0.1) * smoothstep(0.4, 0.75, n2);

    return col;
}

// Aurora borealis
vec3 aurora(vec2 uv, float t) {
    vec3 col = vec3(0.0);

    for (int i = 0; i < 3; i++) {
        float fi = float(i);

        float wave = sin(uv.x * 4.0 + t * 0.2 + fi * 2.0) * 0.1;
        wave += sin(uv.x * 8.0 - t * 0.3 + fi) * 0.05;
        wave += noise(vec2(uv.x * 3.0 + t * 0.1, fi)) * 0.08;

        float bandY = 0.7 + fi * 0.06;
        float band = exp(-pow((uv.y + wave - bandY) * 6.0, 2.0));

        float rays = pow(noise(vec2(uv.x * 20.0 + t * 0.15, fi)), 1.5);
        float flicker = 0.5 + 0.5 * noise(vec2(t * 2.0 + fi * 3.0, uv.x * 6.0));

        vec3 aCol = mix(vec3(0.1, 0.8, 0.4), vec3(0.2, 0.4, 0.8), fi / 3.0);
        aCol = mix(aCol, vec3(0.5, 0.2, 0.6), fi / 3.0 * 0.5);

        col += aCol * band * rays * flicker * 0.4;
    }

    return col;
}

// Shooting star
vec3 shootingStar(vec2 uv, float t) {
    vec3 col = vec3(0.0);

    vec2 suv = uv;
    suv.x -= suv.y * 0.6;
    suv.x += t * 0.15;

    vec2 cell = floor(suv * 2.0);
    vec2 local = fract(suv * 2.0) - 0.5;

    float rnd = hash(cell);

    if (rnd > 0.9) {
        vec2 head = vec2(0.15, (rnd - 0.9) * 5.0 - 0.25);

        float tail = smoothstep(0.4, 0.0, local.x - head.x + 0.35);
        tail *= smoothstep(0.03, 0.0, abs(local.y - head.y));

        float headGlow = exp(-length(local - head) * 15.0);

        col += vec3(0.6, 0.8, 1.0) * tail * 0.5;
        col += vec3(1.0) * headGlow;
    }

    return col;
}

void main() {
    vec2 uv = vUv;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 auv = vec2((uv.x - 0.5) * aspect + 0.5, uv.y);

    vec3 col = vec3(0.0);

    // Combine effects
    col += nebula(auv, u_time) * 0.6;
    col += aurora(auv, u_time);
    col += shootingStar(auv, u_time);

    // Vignette
    float vig = 1.0 - pow(length(uv - 0.5) * 1.2, 2.0) * 0.3;
    col *= vig;

    // Alpha based on content
    float alpha = clamp(length(col) * 2.0, 0.0, 0.85);

    gl_FragColor = vec4(col, alpha);
}
`;

export default fragmentShader;
