export const cubeShaderCode = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= resolution.x / resolution.y;

    float t = time * 0.3;

    // Distance from center
    float d = length(p);

    // Animated noise for organic movement
    float n = fbm(p * 2.0 + t);
    float n2 = fbm(p * 3.0 - t * 0.5);

    // Cube-shaped glow (squared distance for cube-like falloff)
    vec2 cubeP = abs(p);
    float cubeD = max(cubeP.x, cubeP.y);

    // Soft glow
    float glow = smoothstep(1.2, 0.3, cubeD);
    glow *= 0.5 + 0.5 * sin(t * 2.0 + n * 3.0);

    // Edge glow
    float edge = smoothstep(0.8, 0.5, cubeD) - smoothstep(0.5, 0.2, cubeD);
    edge *= 0.5 + 0.5 * n2;

    // Colors
    vec3 col1 = vec3(0.79, 0.64, 0.15); // Gold
    vec3 col2 = vec3(0.5, 0.3, 0.1);    // Dark gold
    vec3 col3 = vec3(0.05, 0.03, 0.02); // Dark background

    vec3 color = col3;
    color = mix(color, col2, glow * 0.5);
    color = mix(color, col1, edge * 0.3);

    // Particle-like sparkles
    float sparkle = pow(noise(p * 20.0 + t), 8.0) * glow;
    color += col1 * sparkle * 2.0;

    // Vignette
    float vig = 1.0 - d * 0.3;
    color *= vig;

    gl_FragColor = vec4(color * intensity, 1.0);
}
`;
