// Hero Shader - Intense, dramatic gold fire effect
// For use with WebGL background

precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;

#define PI 3.14159265359

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 6; i++) {
        v += a * smoothNoise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;
    float t = time * 0.2;

    // Swirling motion
    float angle = atan(p.y, p.x);
    float radius = length(p);

    // Multiple noise layers
    float n1 = fbm(p * 3.0 + t);
    float n2 = fbm(p * 2.0 - t * 0.7 + vec2(n1));
    float n3 = fbm(vec2(angle * 2.0, radius * 5.0) + t);

    // Fiery gold colors
    vec3 c1 = vec3(0.05, 0.03, 0.02);
    vec3 c2 = vec3(0.15, 0.08, 0.03);
    vec3 c3 = vec3(0.79, 0.50, 0.10);
    vec3 c4 = vec3(1.0, 0.85, 0.4);

    float blend = n1 * n2;
    vec3 color = mix(c1, c2, n3);
    color = mix(color, c3, pow(blend, 2.0) * 0.8);
    color += c4 * pow(n1 * n2 * n3, 3.0) * 2.0;

    // Central glow
    float glow = exp(-radius * 2.0) * 0.3;
    color += vec3(0.79, 0.64, 0.15) * glow;

    // Vignette
    float vig = 1.0 - pow(radius * 0.8, 2.0);
    color *= vig;

    // Grain
    color += (noise(uv * 500.0 + time) - 0.5) * 0.05;

    gl_FragColor = vec4(color * intensity, 1.0);
}
