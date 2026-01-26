// Clouds Shader - Adapted from Shadertoy by iq
// Original: https://www.shadertoy.com/view/Ms2SD1

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
    return mix(
        mix(mix(hash(n), hash(n + 1.0), f.x),
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
    return f / 0.9375;
}

vec4 map(vec3 p) {
    float d = 0.1 - p.y;

    vec3 q = p - vec3(0.0, 0.1, 0.0) * time;
    float f = fbm(q);

    d += 3.0 * f;

    d = clamp(d, 0.0, 1.0);

    vec4 res = vec4(d);
    res.xyz = mix(vec3(1.0, 0.95, 0.9), vec3(0.3, 0.4, 0.5), d);

    return res;
}

vec3 raymarch(vec3 ro, vec3 rd) {
    vec4 sum = vec4(0.0);

    float t = 0.0;
    for(int i = 0; i < 64; i++) {
        if(sum.a > 0.99) break;

        vec3 pos = ro + t * rd;
        vec4 col = map(pos);

        col.xyz *= col.xyz;
        col.a *= 0.5;
        col.rgb *= col.a;

        sum += col * (1.0 - sum.a);

        t += max(0.05, 0.02 * t);
    }

    sum.xyz /= (0.001 + sum.w);

    return clamp(sum.xyz, 0.0, 1.0);
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / resolution.y;

    // Camera
    vec3 ro = vec3(0.0, 2.0, -3.0 + time * 0.5);
    vec3 rd = normalize(vec3(uv.x, uv.y + 0.5, 1.5));

    // Sky gradient
    vec3 skyColor = vec3(0.5, 0.7, 1.0) - rd.y * 0.3;

    // Sun
    float sun = clamp(dot(rd, normalize(vec3(0.5, 0.4, 0.5))), 0.0, 1.0);
    skyColor += vec3(1.0, 0.8, 0.4) * pow(sun, 32.0);

    // Clouds
    vec3 clouds = raymarch(ro, rd);

    vec3 color = mix(skyColor, clouds, min(clouds.x + clouds.y + clouds.z, 1.0) * 0.5);

    gl_FragColor = vec4(color * intensity, 1.0);
}
