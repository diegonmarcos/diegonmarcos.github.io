precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;
#define ITERATIONS 12
vec2 cmul(vec2 a, vec2 b) {
    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}
float fractal(vec2 p) {
    vec2 c = p;
    vec2 z = vec2(0.0);
    float d = 1e10;
    for(int i = 0; i < ITERATIONS; i++) {
        z = cmul(z, z) + c;
        d = min(d, length(z));
        if(length(z) > 4.0) break;
    }
    return d;
}
void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= resolution.x / resolution.y;
    // Zoom and pan animation
    float zoom = 2.0 + sin(time * 0.1) * 0.5;
    vec2 offset = vec2(sin(time * 0.05), cos(time * 0.07)) * 0.3;
    vec2 p = uv / zoom + offset;
    float f = fractal(p);
    // Coloring
    vec3 col = vec3(0.0);
    col.r = sin(f * 10.0 + time) * 0.5 + 0.5;
    col.g = sin(f * 10.0 + time + 2.1) * 0.5 + 0.5;
    col.b = sin(f * 10.0 + time + 4.2) * 0.5 + 0.5;
    col *= smoothstep(0.0, 0.5, f);
    gl_FragColor = vec4(col * intensity, 1.0);
}
