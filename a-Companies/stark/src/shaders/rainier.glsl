precision mediump float;
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
float drop(vec2 uv, vec2 pos, float size) {
    vec2 d = uv - pos;
    d.y *= 3.0; // Elongate
    return smoothstep(size, 0.0, length(d));
}
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= resolution.x / resolution.y;
    float t = time;
    // Background - rainy atmosphere
    vec3 col = vec3(0.1, 0.12, 0.15);
    // Rain streaks
    float rain = 0.0;
    for(float i = 0.0; i < 20.0; i++) {
        vec2 pos = vec2(
            hash(vec2(i, 0.0)) * 4.0 - 2.0,
            mod(hash(vec2(i, 1.0)) * 2.0 - t * (0.5 + hash(vec2(i, 2.0)) * 0.5), 2.0) - 1.0
        );
        rain += drop(p, pos, 0.02 + hash(vec2(i, 3.0)) * 0.02);
    }
    col += vec3(0.3, 0.35, 0.4) * rain;
    // Window glass effect
    float distort = noise(p * 10.0 + t * 0.5) * 0.02;
    // Blurred lights in background
    for(float i = 0.0; i < 8.0; i++) {
        vec2 lightPos = vec2(
            hash(vec2(i * 7.0, 0.0)) * 4.0 - 2.0,
            hash(vec2(i * 7.0, 1.0)) * 2.0 - 1.0
        );
        float d = length(p + vec2(distort) - lightPos);
        vec3 lightCol = vec3(
            hash(vec2(i, 10.0)),
            hash(vec2(i, 11.0)) * 0.5,
            hash(vec2(i, 12.0)) * 0.3
        );
        col += lightCol * exp(-d * 2.0) * 0.3;
    }
    // Vignette
    float vig = 1.0 - length(p) * 0.3;
    col *= vig;
    gl_FragColor = vec4(col * intensity, 1.0);
}
