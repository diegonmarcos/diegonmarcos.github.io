precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;
float hash(float n) {
    return fract(sin(n) * 43758.5453123);
}
float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 157.0 + 113.0 * p.z;
    return mix(mix(mix(hash(n), hash(n + 1.0), f.x),
                   mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
               mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
                   mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}
float fbm(vec3 p) {
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
    // Flame shape
    float flame = 1.0 - length(p * vec2(1.0, 0.5));
    flame = pow(max(flame, 0.0), 1.5);
    // Turbulence
    vec3 q = vec3(p * 3.0, time * 2.0);
    float turb = fbm(q);
    // Distort flame with turbulence
    flame *= turb * 2.0;
    flame = pow(max(flame, 0.0), 1.2);
    // Color gradient
    vec3 col = vec3(0.0);
    col = mix(col, vec3(1.0, 0.2, 0.0), flame);
    col = mix(col, vec3(1.0, 0.8, 0.2), flame * flame);
    col = mix(col, vec3(1.0, 1.0, 0.8), flame * flame * flame);
    // Add glow
    float glow = exp(-length(p) * 1.5) * 0.5;
    col += vec3(1.0, 0.4, 0.1) * glow;
    gl_FragColor = vec4(col * intensity, 1.0);
}
