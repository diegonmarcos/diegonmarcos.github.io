precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}
float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(noise(i), noise(i + vec2(1.0, 0.0)), f.x),
        mix(noise(i + vec2(0.0, 1.0)), noise(i + vec2(1.0, 1.0)), f.x),
        f.y
    );
}
float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * smoothNoise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    float t = time * 0.1;
    float n = fbm(uv * 3.0 + t);
    float n2 = fbm(uv * 2.0 - t * 0.5);
    vec3 dark = vec3(0.05, 0.04, 0.03);
    vec3 mid = vec3(0.12, 0.09, 0.06);
    vec3 gold = vec3(0.3, 0.22, 0.08);
    vec3 color = mix(dark, mid, n);
    color = mix(color, gold, n * n2 * 0.3);
    float vig = 1.0 - length(uv - 0.5) * 0.5;
    color *= vig;
    color += (noise(uv * 400.0 + time) - 0.5) * 0.02;
    gl_FragColor = vec4(color * intensity, 1.0);
}
