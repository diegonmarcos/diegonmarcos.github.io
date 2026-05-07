/**
 * Performance Utility
 * Browser capability detection
 */

export function runPerformanceCheck() {
    console.log('%c══════════════════════════════════════════', 'color: #ff8800');
    console.log('%c   BROWSER PERFORMANCE DIAGNOSTICS', 'color: #ff8800; font-weight: bold');
    console.log('%c══════════════════════════════════════════', 'color: #ff8800');

    const perf = {
        hardwareConcurrency: navigator.hardwareConcurrency || 4,
        deviceMemory: navigator.deviceMemory || 4,
        devicePixelRatio: window.devicePixelRatio,
        screenWidth: screen.width,
        screenHeight: screen.height,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        gpuRenderer: null,
        isLowEnd: false,
    };

    console.log(`  CPU Cores: ${perf.hardwareConcurrency}`);
    console.log(`  Device Memory: ${perf.deviceMemory} GB`);
    console.log(`  Pixel Ratio: ${perf.devicePixelRatio}`);
    console.log(`  Screen: ${perf.screenWidth}x${perf.screenHeight}`);
    console.log(`  Window: ${perf.windowWidth}x${perf.windowHeight}`);

    // WebGL check
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            perf.gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            console.log(`  GPU: ${perf.gpuRenderer}`);
        }

        perf.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        console.log(`  Max Texture: ${perf.maxTextureSize}`);
    }

    // Determine if low-end
    perf.isLowEnd = perf.hardwareConcurrency <= 4 || perf.deviceMemory < 4;
    console.log(`  Performance tier: ${perf.isLowEnd ? 'LOW' : 'HIGH'}`);
    console.log('%c══════════════════════════════════════════', 'color: #ff8800');

    return perf;
}

export default runPerformanceCheck;
