precision mediump float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;

#define PI 3.14159265359

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float hash21(float p) {
    return fract(sin(p * 127.1) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    mat2 rot = mat2(0.87, 0.5, -0.5, 0.87);
    for (int i = 0; i < 6; i++) {
        v += a * noise(p);
        p = rot * p * 2.0;
        a *= 0.5;
    }
    return v;
}

// Elegant curved flow lines
float curvedLines(vec2 p, float t) {
    float lines = 0.0;

    // Multiple sets of curved flowing lines
    for (float i = 0.0; i < 8.0; i++) {
        float offset = i * 0.15 - 0.5;
        float freq = 1.5 + i * 0.3;
        float speed = 0.2 + hash21(i) * 0.15;

        // Curved path
        float curve = sin(p.x * freq + t * speed + i) * 0.3;
        curve += sin(p.x * freq * 0.5 - t * speed * 0.7) * 0.15;

        float y = offset + curve;
        float thickness = 0.015 + sin(p.x * 3.0 + t + i) * 0.008;
        float line = smoothstep(thickness, 0.0, abs(p.y - y));

        // Fade at edges
        line *= smoothstep(1.2, 0.3, abs(p.x));
        line *= 0.4 + 0.3 * sin(p.x * 2.0 + t * 0.5 + i * 2.0);

        lines += line * (0.3 + 0.2 * hash21(i + 10.0));
    }

    return lines;
}

// Vertical accent lines
float verticalAccents(vec2 p, float t) {
    float lines = 0.0;

    for (float i = 0.0; i < 6.0; i++) {
        float x = (i - 2.5) * 0.35;
        float wave = sin(p.y * 3.0 + t * 0.3 + i * 1.5) * 0.08;
        float thickness = 0.008;
        float line = smoothstep(thickness, 0.0, abs(p.x - x - wave));
        line *= smoothstep(0.8, 0.2, abs(p.y));
        line *= 0.2 + 0.15 * sin(p.y * 5.0 - t + i);
        lines += line * 0.25;
    }

    return lines;
}

// Crossing diagonal lines
float diagonalGrid(vec2 p, float t) {
    float lines = 0.0;

    // Forward diagonals
    for (float i = 0.0; i < 5.0; i++) {
        float offset = (i - 2.0) * 0.4;
        float d = (p.x + p.y) * 0.7 + offset;
        float wave = sin(d * 8.0 - t * 0.4 + i) * 0.5 + 0.5;
        float line = smoothstep(0.02, 0.0, abs(fract(d + t * 0.05) - 0.5) - 0.45);
        line *= wave * 0.15;
        lines += line;
    }

    // Backward diagonals
    for (float i = 0.0; i < 5.0; i++) {
        float offset = (i - 2.0) * 0.4;
        float d = (p.x - p.y) * 0.7 + offset;
        float wave = sin(d * 8.0 + t * 0.3 + i) * 0.5 + 0.5;
        float line = smoothstep(0.02, 0.0, abs(fract(d - t * 0.04) - 0.5) - 0.45);
        line *= wave * 0.12;
        lines += line;
    }

    return lines;
}

// Concentric ripples
float ripples(vec2 p, float t) {
    float r = length(p);
    float ripple = sin(r * 15.0 - t * 1.5) * 0.5 + 0.5;
    ripple = pow(ripple, 8.0);
    ripple *= smoothstep(1.0, 0.2, r);
    ripple *= smoothstep(0.05, 0.15, r);
    return ripple * 0.25;
}

// Particle dust
float particles(vec2 p, float t) {
    float dust = 0.0;
    for (float i = 0.0; i < 20.0; i++) {
        vec2 pos = vec2(
            hash21(i * 17.3) * 2.4 - 1.2,
            hash21(i * 31.7 + 50.0) * 2.0 - 1.0
        );
        // Slow drift
        pos.x += sin(t * 0.2 + i * 0.5) * 0.15;
        pos.y += cos(t * 0.15 + i * 0.7) * 0.1;

        float d = length(p - pos);
        float blink = sin(t * 2.0 + i * 3.0) * 0.5 + 0.5;
        blink = pow(blink, 3.0);
        dust += smoothstep(0.03, 0.0, d) * blink * 0.6;
    }
    return dust;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 p = (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;
    float t = time * 0.5;

    // Noise layers for organic feel
    float n1 = fbm(p * 2.0 + t * 0.1);
    float n2 = fbm(p * 3.0 - t * 0.08 + 10.0);
    float n3 = fbm(p * 1.5 + vec2(t * 0.05, -t * 0.07));

    // Dark but rich base colors
    vec3 black = vec3(0.015, 0.01, 0.008);
    vec3 darkBrown = vec3(0.05, 0.03, 0.02);
    vec3 brown = vec3(0.1, 0.06, 0.03);
    vec3 amber = vec3(0.25, 0.15, 0.05);
    vec3 gold = vec3(0.55, 0.4, 0.12);
    vec3 brightGold = vec3(0.85, 0.65, 0.2);
    vec3 whiteGold = vec3(1.0, 0.9, 0.5);

    // Build base
    vec3 color = mix(black, darkBrown, n1 * 0.7);
    color = mix(color, brown, n2 * n1 * 0.5);

    // Add all the line systems
    float curved = curvedLines(p, t);
    float vertical = verticalAccents(p, t);
    float diagonal = diagonalGrid(p, t);
    float rings = ripples(p, t);
    float dust = particles(p, t);

    // Layer the effects with gold colors
    color += gold * curved;
    color += amber * vertical;
    color += gold * diagonal * 0.7;
    color += brightGold * rings;
    color += whiteGold * dust;

    // Subtle noise-based gold veins
    float veins = pow(n1 * n2, 2.0) * 0.6;
    color += amber * veins;

    // Central soft glow
    float dist = length(p);
    float glow = exp(-dist * 2.0) * 0.2;
    color += amber * glow;

    // Secondary glow points
    for (float i = 0.0; i < 3.0; i++) {
        vec2 glowPos = vec2(
            sin(t * 0.3 + i * 2.1) * 0.35,
            cos(t * 0.25 + i * 2.5) * 0.25
        );
        float g = exp(-length(p - glowPos) * 4.0) * 0.12;
        color += gold * g;
    }

    // Edge highlight shimmer
    float edge = smoothstep(0.5, 0.8, dist) * smoothstep(1.2, 0.9, dist);
    edge *= sin(atan(p.y, p.x) * 8.0 + t) * 0.5 + 0.5;
    color += amber * edge * 0.15;

    // Vignette - softer
    float vig = 1.0 - pow(dist * 0.55, 2.0);
    vig = max(vig, 0.4);
    color *= vig;

    // Fine film grain
    float grain = (hash(uv * 600.0 + fract(time * 0.1)) - 0.5) * 0.025;
    color += grain;

    // Ensure we don't clip but allow nice brightness
    color = min(color, vec3(0.9));

    gl_FragColor = vec4(color * intensity, 1.0);
}
