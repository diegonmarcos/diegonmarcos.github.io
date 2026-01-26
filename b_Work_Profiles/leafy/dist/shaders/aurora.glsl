// Aurora Shader - Adapted from Shadertoy by nimitz
// Original: https://www.shadertoy.com/view/ldl3W8

precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float intensity;

mat2 mm2(float a) {
    float c = cos(a), s = sin(a);
    return mat2(c, s, -s, c);
}

float tri(float x) {
    return clamp(abs(fract(x) - 0.5), 0.01, 0.49);
}

vec2 tri2(vec2 p) {
    return vec2(tri(p.x) + tri(p.y), tri(p.y + tri(p.x)));
}

float triNoise2d(vec2 p, float spd) {
    float z = 1.8;
    float z2 = 2.5;
    float rz = 0.0;
    p *= mm2(p.x * 0.06);
    vec2 bp = p;

    for(float i = 0.0; i < 5.0; i++) {
        vec2 dg = tri2(bp * 1.85) * 0.75;
        dg *= mm2(time * spd);
        p -= dg / z2;

        bp *= 1.3;
        z2 *= 0.45;
        z *= 0.42;
        p *= 1.21 + (rz - 1.0) * 0.02;

        rz += tri(p.x + tri(p.y)) * z;
        p *= -1.0;
    }
    return clamp(1.0 / pow(rz * 29.0, 1.3), 0.0, 0.55);
}

float hash21(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

vec4 aurora(vec3 ro, vec3 rd) {
    vec4 col = vec4(0);
    vec4 avgCol = vec4(0);

    for(float i = 0.0; i < 50.0; i++) {
        float of = 0.006 * hash21(gl_FragCoord.xy) * smoothstep(0.0, 15.0, i);
        float pt = ((0.8 + pow(i, 1.4) * 0.002) - ro.y) / (rd.y * 2.0 + 0.4);
        pt -= of;
        vec3 bpos = ro + pt * rd;
        vec2 p = bpos.zx;
        float rzt = triNoise2d(p, 0.06);
        vec4 col2 = vec4(0, 0, 0, rzt);
        col2.rgb = (sin(1.0 - vec3(2.15, -0.5, 1.2) + i * 0.043) * 0.5 + 0.5) * rzt;
        avgCol = mix(avgCol, col2, 0.5);
        col += avgCol * exp2(-i * 0.065 - 2.5) * smoothstep(0.0, 5.0, i);
    }

    col *= clamp(rd.y * 15.0 + 0.4, 0.0, 1.0);

    return col * 1.8;
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    uv = uv * 2.0 - 1.0;
    uv.x *= resolution.x / resolution.y;

    vec3 ro = vec3(0, 0, -6.7);
    vec3 rd = normalize(vec3(uv, 1.0));

    vec2 mo = vec2(time * 0.1, cos(time * 0.05) * 0.2);
    mo = (mo - 0.5) * 2.0;
    rd.xz *= mm2(mo.x);
    rd.xy *= mm2(mo.y);

    vec3 col = vec3(0);
    vec3 brd = rd;

    float fade = smoothstep(0.0, 0.01, abs(brd.y)) * 0.1 + 0.9;

    col = vec3(0.02, 0.03, 0.05) * fade;

    if(rd.y > 0.0) {
        vec4 apts = aurora(ro, rd);
        col += apts.rgb;
    }

    gl_FragColor = vec4(col * intensity, 1.0);
}
