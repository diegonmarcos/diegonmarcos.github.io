precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;
float hash(float n) {
    return fract(sin(n) * 43758.5453);
}
float noise(vec2 x) {
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0;
    return mix(mix(hash(n), hash(n + 1.0), f.x),
               mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y);
}
float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5000 * noise(p); p *= 2.02;
    f += 0.2500 * noise(p); p *= 2.03;
    f += 0.1250 * noise(p); p *= 2.01;
    f += 0.0625 * noise(p);
    return f / 0.9375;
}
float terrain(vec2 p) {
    return fbm(p * 0.5) * 2.0;
}
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= resolution.x / resolution.y;
    float t = time * 0.1;
    // Camera movement
    vec3 ro = vec3(t * 2.0, 2.0, t * 3.0);
    vec3 rd = normalize(vec3(p.x, p.y - 0.3, 1.5));
    // Simple raymarching for terrain
    float d = 0.0;
    vec3 col = vec3(0.5, 0.7, 1.0); // Sky
    for(int i = 0; i < 64; i++) {
        vec3 pos = ro + rd * d;
        float h = terrain(pos.xz);
        if(pos.y < h) {
            // Hit terrain
            float slope = (terrain(pos.xz + vec2(0.01, 0.0)) - h) / 0.01;
            // Terrain colors
            vec3 grass = vec3(0.2, 0.5, 0.1);
            vec3 rock = vec3(0.4, 0.35, 0.3);
            vec3 snow = vec3(0.9, 0.9, 0.95);
            col = mix(grass, rock, smoothstep(0.5, 1.5, h));
            col = mix(col, snow, smoothstep(1.5, 2.0, h));
            // Simple lighting
            float sun = max(dot(normalize(vec3(1.0, 0.5, 0.5)), vec3(-slope, 1.0, 0.0)), 0.0);
            col *= 0.5 + 0.5 * sun;
            // Fog
            float fog = 1.0 - exp(-d * 0.02);
            col = mix(col, vec3(0.5, 0.7, 1.0), fog);
            break;
        }
        d += 0.1;
        if(d > 50.0) break;
    }
    gl_FragColor = vec4(col * intensity, 1.0);
}
