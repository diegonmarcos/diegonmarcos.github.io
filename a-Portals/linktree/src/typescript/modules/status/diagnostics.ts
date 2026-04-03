// Status Diagnostics - Data gathering functions

import type {
  NetworkDiagnostics,
  CacheDiagnostics,
  SystemInfo,
  AssetInfo,
  PerformanceMetrics,
  GPUCPUMetrics,
} from './types';

// Asset lists
export const DIAGNOSTIC_ASSETS = [
  'public/videos/background.mp4',
  'public/videos/background2.mp4',
  'public/videos/background3.mp4',
  'public/videos/background4.mp4',
  'public/images/background_static.jpg',
  'public/images/professional.png',
  'public/images/personal.png',
  'public/images/venture1.png',
  'public/images/venture2.png',
  'public/images/tools.png',
];

/**
 * Check if running on file:// protocol
 */
export function isFileProtocol(): boolean {
  return window.location.protocol === 'file:';
}

/**
 * Get client IP address (web only)
 */
export async function getClientIP(): Promise<string> {
  if (isFileProtocol()) {
    return 'localhost (file://)';
  }

  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch {
    return 'Unable to fetch';
  }
}

/**
 * Test latency with multiple pings (web only, fallback for local)
 */
export async function testLatencyDetailed(): Promise<{ avg: number; jitter: number }> {
  if (isFileProtocol()) {
    // Fallback for local file:// - no latency
    return { avg: 0, jitter: 0 };
  }

  const pings: number[] = [];
  const testUrl = 'public/images/background_static.jpg';

  for (let i = 0; i < 5; i++) {
    const start = performance.now();
    try {
      await fetch(testUrl + '?t=' + Date.now() + '&ping=' + i, {
        method: 'HEAD',
        cache: 'no-store',
      });
      pings.push(performance.now() - start);
    } catch {
      pings.push(0);
    }
  }

  const avg = pings.reduce((a, b) => a + b, 0) / pings.length;
  const variance = pings.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / pings.length;
  const jitter = Math.sqrt(variance);

  return { avg: Math.round(avg), jitter: Math.round(jitter) };
}

/**
 * Get network information
 */
export async function getNetworkDiagnostics(): Promise<NetworkDiagnostics> {
  const latency = await testLatencyDetailed();
  const clientIP = await getClientIP();

  // @ts-ignore - Network Information API
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  return {
    downloadSpeed: localStorage.getItem('last_download_speed') || 'Unknown',
    uploadSpeed: 'N/A',
    latency: `${latency.avg}ms`,
    jitter: `${latency.jitter}ms`,
    connectionType: connection?.type || 'Unknown',
    effectiveType: connection?.effectiveType || 'Unknown',
    downlink: connection?.downlink ? `${connection.downlink} Mbps` : 'Unknown',
    rtt: connection?.rtt ? `${connection.rtt}ms` : 'Unknown',
    clientIP,
    serverIP: window.location.hostname,
    protocol: window.location.protocol.replace(':', ''),
  };
}

/**
 * Get cache diagnostics
 */
export function getCacheDiagnostics(): CacheDiagnostics {
  try {
    const cacheData = JSON.parse(localStorage.getItem('linktree_assets_cache_v1') || '{}');
    const timestamp = cacheData.timestamp || 0;
    const cacheAge = Date.now() - timestamp;
    const maxAge = 24 * 60 * 60 * 1000;
    const validUntil = new Date(timestamp + maxAge);

    return {
      status: cacheAge < maxAge && timestamp > 0 ? 'Valid' : 'Expired',
      cacheAge: `${Math.round(cacheAge / 1000 / 60)} minutes`,
      cachedFiles: cacheData.assets?.length || 0,
      totalCachedSize: 'Calculating...',
      lastUpdate: timestamp > 0 ? new Date(timestamp).toLocaleString() : 'Never',
      validUntil: timestamp > 0 ? validUntil.toLocaleString() : 'N/A',
    };
  } catch {
    return {
      status: 'Unknown',
      cacheAge: 'N/A',
      cachedFiles: 0,
      totalCachedSize: 'N/A',
      lastUpdate: 'N/A',
      validUntil: 'N/A',
    };
  }
}

/**
 * Get system information
 */
export function getSystemInfo(): SystemInfo {
  const nav = navigator as any;

  return {
    browser: getBrowserName(),
    browserVersion: getBrowserVersion(),
    os: getOS(),
    platform: nav.platform || 'Unknown',
    language: nav.language || 'Unknown',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
    screenResolution: `${screen.width}x${screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    deviceMemory: nav.deviceMemory ? `${nav.deviceMemory} GB` : 'Unknown',
    hardwareConcurrency: nav.hardwareConcurrency ? `${nav.hardwareConcurrency} cores` : 'Unknown',
    cookiesEnabled: nav.cookieEnabled ? 'Yes' : 'No',
    doNotTrack: nav.doNotTrack === '1' ? 'Yes' : 'No',
  };
}

/**
 * Get browser name
 */
export function getBrowserName(): string {
  const ua = navigator.userAgent;
  if (ua.indexOf('Firefox') > -1) return 'Firefox';
  if (ua.indexOf('Edg') > -1) return 'Edge';
  if (ua.indexOf('Chrome') > -1) return 'Chrome';
  if (ua.indexOf('Safari') > -1) return 'Safari';
  if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) return 'Opera';
  return 'Unknown';
}

/**
 * Get browser version
 */
export function getBrowserVersion(): string {
  const ua = navigator.userAgent;
  const match = ua.match(/(Firefox|Chrome|Safari|Edge|Opera|OPR)\/([0-9.]+)/);
  return match ? match[2] : 'Unknown';
}

/**
 * Get operating system
 */
export function getOS(): string {
  const ua = navigator.userAgent;
  if (ua.indexOf('Win') > -1) return 'Windows';
  if (ua.indexOf('Mac') > -1) return 'macOS';
  if (ua.indexOf('X11') > -1) return 'UNIX';
  if (ua.indexOf('Linux') > -1) return 'Linux';
  if (ua.indexOf('Android') > -1) return 'Android';
  if (ua.indexOf('iOS') > -1) return 'iOS';
  return 'Unknown';
}

/**
 * Get asset information (web optimized, fallback for local)
 */
export async function getAssetInfo(): Promise<AssetInfo[]> {
  const assets: AssetInfo[] = [];

  if (isFileProtocol()) {
    // Fallback for file:// - use performance API
    const perfEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

    for (const url of DIAGNOSTIC_ASSETS) {
      const entry = perfEntries.find(e => e.name.includes(url));
      const type = url.split('.').pop()?.toUpperCase() || 'Unknown';

      if (entry) {
        assets.push({
          url: url.split('/').pop() || url,
          type,
          size: entry.transferSize ? formatBytes(entry.transferSize) : 'Local',
          cached: entry.transferSize === 0,
          loadTime: `${Math.round(entry.duration)}ms`,
        });
      } else {
        // Not yet loaded, mark as pending
        assets.push({
          url: url.split('/').pop() || url,
          type,
          size: 'Local',
          cached: false,
          loadTime: 'Pending',
        });
      }
    }
    return assets;
  }

  // Web version - use fetch
  for (const url of DIAGNOSTIC_ASSETS) {
    const startTime = performance.now();
    try {
      const response = await fetch(url, { method: 'HEAD' });
      const loadTime = performance.now() - startTime;
      const size = response.headers.get('content-length');
      const type = url.split('.').pop()?.toUpperCase() || 'Unknown';

      assets.push({
        url: url.split('/').pop() || url,
        type,
        size: size ? formatBytes(parseInt(size)) : 'Unknown',
        cached: response.headers.get('x-cache') === 'HIT',
        loadTime: `${Math.round(loadTime)}ms`,
      });
    } catch {
      assets.push({
        url: url.split('/').pop() || url,
        type: 'Error',
        size: 'N/A',
        cached: false,
        loadTime: 'Failed',
      });
    }
  }

  return assets;
}

/**
 * Get performance metrics
 */
export function getPerformanceMetrics(): PerformanceMetrics {
  const perf = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const memory = (performance as any).memory;

  const paintEntries = performance.getEntriesByType('paint');
  const firstPaint = paintEntries.find((e) => e.name === 'first-paint');
  const fcp = paintEntries.find((e) => e.name === 'first-contentful-paint');

  return {
    pageLoadTime: perf ? `${Math.round(perf.loadEventEnd - perf.fetchStart)}ms` : 'Unknown',
    domContentLoaded: perf ? `${Math.round(perf.domContentLoadedEventEnd - perf.fetchStart)}ms` : 'Unknown',
    firstPaint: firstPaint ? `${Math.round(firstPaint.startTime)}ms` : 'N/A',
    firstContentfulPaint: fcp ? `${Math.round(fcp.startTime)}ms` : 'N/A',
    transferSize: perf?.transferSize ? formatBytes(perf.transferSize) : 'Unknown',
    resourceCount: `${performance.getEntriesByType('resource').length}`,
    memoryUsage: memory ? formatBytes(memory.usedJSHeapSize) : 'Unknown',
  };
}

/**
 * Get GPU and CPU usage metrics
 */
export async function getGPUCPUMetrics(): Promise<GPUCPUMetrics> {
  // Get GPU info via WebGL
  let gpuRenderer = 'Unknown';
  let gpuVendor = 'Unknown';
  let gpuUsage = 0;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;

    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'Unknown';
        gpuVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || 'Unknown';
      }

      // Estimate GPU usage from memory if available
      const glMemory = (gl as any).getParameter((gl as any).GPU_DISJOINT_EXT);
      if (glMemory !== undefined) {
        gpuUsage = Math.min(glMemory / 1000, 100); // Rough estimate
      }
    }
  } catch (e) {
    console.warn('Could not get GPU info:', e);
  }

  // Measure FPS over 1 second
  const fps = await measureFPS();

  // Estimate CPU usage from frame timing and long tasks
  let cpuUsage = 0;
  const longTasks = (performance as any).getEntriesByType?.('longtask') || [];
  if (longTasks.length > 0) {
    // If we have long tasks, CPU is busy
    const totalLongTaskTime = longTasks.reduce((sum: number, task: any) => sum + task.duration, 0);
    cpuUsage = Math.min((totalLongTaskTime / 10000) * 100, 100); // Normalize to percentage
  } else {
    // Estimate from FPS - if FPS is low, CPU or GPU is busy
    // If GPU is rendering well (>30fps), but still slow, it's CPU
    if (fps < 30) {
      cpuUsage = 60; // Likely CPU-bound
    } else if (fps < 50) {
      cpuUsage = 30;
    } else {
      cpuUsage = 10; // Healthy
    }
  }

  // Estimate GPU usage from frame timing
  // If we're getting 60fps, GPU is keeping up (low usage means efficient)
  // If we're getting <30fps and CPU is low, GPU is bottleneck
  if (fps >= 55) {
    gpuUsage = Math.max(gpuUsage, 40); // Efficiently rendering
  } else if (fps < 30 && cpuUsage < 40) {
    gpuUsage = 80; // GPU bottleneck
  } else {
    gpuUsage = Math.max(gpuUsage, 60); // Working hard
  }

  // Determine status
  const getCPUStatus = (usage: number): string => {
    if (usage < 25) return 'Low';
    if (usage < 50) return 'Medium';
    if (usage < 75) return 'High';
    return 'Critical';
  };

  const getGPUStatus = (usage: number): string => {
    if (usage < 30) return 'Low';
    if (usage < 60) return 'Medium';
    if (usage < 85) return 'High';
    return 'Critical';
  };

  return {
    cpuUsage: Math.round(cpuUsage),
    gpuUsage: Math.round(gpuUsage),
    gpuRenderer,
    gpuVendor,
    cpuStatus: getCPUStatus(cpuUsage),
    gpuStatus: getGPUStatus(gpuUsage),
    fps: Math.round(fps),
    frameTiming: `${(1000 / fps).toFixed(2)}ms`,
  };
}

/**
 * Measure FPS over 1 second
 */
export function measureFPS(): Promise<number> {
  return new Promise((resolve) => {
    let frames = 0;
    const startTime = performance.now();

    function countFrame() {
      frames++;
      const elapsed = performance.now() - startTime;

      if (elapsed < 1000) {
        requestAnimationFrame(countFrame);
      } else {
        const fps = (frames / elapsed) * 1000;
        resolve(fps);
      }
    }

    requestAnimationFrame(countFrame);
  });
}

/**
 * Format bytes to human readable
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}
