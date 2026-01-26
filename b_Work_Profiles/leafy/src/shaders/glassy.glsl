// Abstract Glassy Shader - Adapted from Shadertoy by iq
// Original: https://www.shadertoy.com/view/4dsGzH

precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5000 * noise(p); p *= 2.02;
    f += 0.2500 * noise(p); p *= 2.03;
    f += 0.1250 * noise(p); p *= 2.01;
    f += 0.0625 * noise(p);
    return f / 0.9375;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= resolution.x / resolution.y;

    float t = time * 0.2;

    // Distortion
    vec2 q = p;
    q += vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) + t)) * 0.5;

    // Layers
    float f = fbm(q * 3.0 + t);
    f = f * f * 2.0;

    // Iridescent colors
    vec3 col = vec3(0.0);
    col.r = sin(f * 6.0 + t) * 0.5 + 0.5;
    col.g = sin(f * 6.0 + t + 2.1) * 0.5 + 0.5;
    col.b = sin(f * 6.0 + t + 4.2) * 0.5 + 0.5;

    // Glass-like reflections
    float ref = pow(f, 3.0);
    col = mix(col, vec3(1.0), ref * 0.3);

    // Darken edges
    float vig = 1.0 - length(p) * 0.4;
    col *= vig;

    gl_FragColor = vec4(col * intensity, 1.0);
}
