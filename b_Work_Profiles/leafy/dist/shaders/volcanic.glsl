// Volcanic Shader - Adapted from Shadertoy by iq
// Original: https://www.shadertoy.com/view/4df3Rn

precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;

float hash(float n) {
    return fract(sin(n) * 43758.5453);
}

float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);

    float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(mix(mix(hash(n), hash(n + 1.0), f.x),
                   mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
               mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                   mix(hash(n + 170.0), hash(n + 171.0), f.x), f.y), f.z);
}

float fbm(vec3 p) {
    float f = 0.0;
    f += 0.5000 * noise(p); p *= 2.02;
    f += 0.2500 * noise(p); p *= 2.03;
    f += 0.1250 * noise(p); p *= 2.01;
    f += 0.0625 * noise(p);
    return f;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= resolution.x / resolution.y;

    float t = time * 0.3;

    // Lava flow
    vec3 q = vec3(p * 2.0, t);
    float lava = fbm(q);
    lava = pow(lava, 2.0);

    // Cracks
    float cracks = fbm(vec3(p * 8.0, t * 0.5));
    cracks = pow(cracks, 4.0);

    // Colors
    vec3 darkRock = vec3(0.1, 0.05, 0.02);
    vec3 hotLava = vec3(1.0, 0.3, 0.0);
    vec3 brightLava = vec3(1.0, 0.8, 0.3);

    vec3 col = darkRock;
    col = mix(col, hotLava, lava * 1.5);
    col = mix(col, brightLava, cracks * lava * 3.0);

    // Glow
    col += vec3(0.5, 0.1, 0.0) * lava * 0.5;

    gl_FragColor = vec4(col * intensity, 1.0);
}
