// Pyramid Shader Code - Mystical glow effect

export const pyramidShaderCode = `
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
    for (int i = 0; i < 5; i++) {
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

    float t = time * 0.2;

    // Pyramid shape - triangle pointing up
    vec2 pyramidP = p;
    pyramidP.y -= 0.2;

    // Distance to triangle edges
    float triDist = max(abs(pyramidP.x) - (0.8 - pyramidP.y * 0.6), -pyramidP.y - 0.5);
    triDist = max(triDist, pyramidP.y - 0.6);

    // Animated energy
    float n = fbm(p * 3.0 + t);
    float n2 = fbm(p * 5.0 - t * 0.7);

    // Energy streams rising
    float streams = 0.0;
    for (float i = 0.0; i < 3.0; i++) {
        vec2 streamP = p;
        streamP.x += sin(t + i * 2.0) * 0.1;
        float stream = smoothstep(0.1, 0.0, abs(streamP.x - (i - 1.0) * 0.3));
        stream *= smoothstep(-0.5, 0.3, streamP.y);
        stream *= (0.5 + 0.5 * sin(streamP.y * 10.0 - t * 3.0 + i));
        streams += stream * 0.3;
    }

    // Glow from apex
    vec2 apex = vec2(0.0, 0.5);
    float apexGlow = 1.0 / (1.0 + length(p - apex) * 3.0);
    apexGlow *= 0.5 + 0.5 * sin(t * 2.0);

    // Edge glow
    float edgeGlow = smoothstep(0.1, 0.0, abs(triDist)) * 0.5;

    // Colors - mystical gold/amber
    vec3 col1 = vec3(0.79, 0.55, 0.15); // Gold
    vec3 col2 = vec3(0.6, 0.35, 0.1);   // Amber
    vec3 col3 = vec3(0.05, 0.03, 0.02); // Dark

    vec3 color = col3;
    color = mix(color, col2, (edgeGlow + streams) * n);
    color = mix(color, col1, apexGlow * 0.6);
    color += col1 * n2 * streams * 0.5;

    // Sparkles
    float sparkle = pow(noise(p * 30.0 + t * 2.0), 10.0);
    color += col1 * sparkle * (edgeGlow + apexGlow);

    // Vignette
    float vig = 1.0 - length(p) * 0.3;
    color *= vig;

    gl_FragColor = vec4(color * intensity, 1.0);
}
`;
