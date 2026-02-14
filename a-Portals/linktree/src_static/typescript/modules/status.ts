// Status Diagnostics Module - Comprehensive system diagnostics

interface DiagnosticData {
  network: NetworkDiagnostics;
  cache: CacheDiagnostics;
  system: SystemInfo;
  assets: AssetInfo[];
  performance: PerformanceMetrics;
  gpuCpu: GPUCPUMetrics;
}

interface NetworkDiagnostics {
  downloadSpeed: string;
  uploadSpeed: string;
  latency: string;
  jitter: string;
  connectionType: string;
  effectiveType: string;
  downlink: string;
  rtt: string;
  clientIP: string;
  serverIP: string;
  protocol: string;
}

interface CacheDiagnostics {
  status: string;
  cacheAge: string;
  cachedFiles: number;
  totalCachedSize: string;
  lastUpdate: string;
  validUntil: string;
}

interface SystemInfo {
  browser: string;
  browserVersion: string;
  os: string;
  platform: string;
  language: string;
  timezone: string;
  screenResolution: string;
  viewportSize: string;
  deviceMemory: string;
  hardwareConcurrency: string;
  cookiesEnabled: string;
  doNotTrack: string;
}

interface AssetInfo {
  url: string;
  type: string;
  size: string;
  cached: boolean;
  loadTime: string;
}

interface PerformanceMetrics {
  pageLoadTime: string;
  domContentLoaded: string;
  firstPaint: string;
  firstContentfulPaint: string;
  transferSize: string;
  resourceCount: string;
  memoryUsage: string;
}

interface GPUCPUMetrics {
  cpuUsage: number; // 0-100%
  gpuUsage: number; // 0-100%
  gpuRenderer: string;
  gpuVendor: string;
  cpuStatus: string; // "Low" | "Medium" | "High" | "Critical"
  gpuStatus: string; // "Low" | "Medium" | "High" | "Critical"
  fps: number;
  frameTiming: string;
}

// Asset lists
const DIAGNOSTIC_ASSETS = [
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
function isFileProtocol(): boolean {
  return window.location.protocol === 'file:';
}

/**
 * Get client IP address (web only)
 */
async function getClientIP(): Promise<string> {
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
async function testLatencyDetailed(): Promise<{ avg: number; jitter: number }> {
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
async function getNetworkDiagnostics(): Promise<NetworkDiagnostics> {
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
function getCacheDiagnostics(): CacheDiagnostics {
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
function getSystemInfo(): SystemInfo {
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
function getBrowserName(): string {
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
function getBrowserVersion(): string {
  const ua = navigator.userAgent;
  const match = ua.match(/(Firefox|Chrome|Safari|Edge|Opera|OPR)\/([0-9.]+)/);
  return match ? match[2] : 'Unknown';
}

/**
 * Get operating system
 */
function getOS(): string {
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
async function getAssetInfo(): Promise<AssetInfo[]> {
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
function getPerformanceMetrics(): PerformanceMetrics {
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
async function getGPUCPUMetrics(): Promise<GPUCPUMetrics> {
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
function measureFPS(): Promise<number> {
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
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * Render diagnostics HTML
 */
function renderDiagnostics(data: DiagnosticData): string {
  const totalSize = data.assets.reduce((sum, asset) => {
    const match = asset.size.match(/([0-9.]+)\s*(B|KB|MB|GB)/);
    if (!match) return sum;
    const value = parseFloat(match[1]);
    const unit = match[2];
    const multiplier = { B: 1, KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 }[unit] || 1;
    return sum + value * multiplier;
  }, 0);

  return `
    <div class="diagnostics-container">
      <!-- GPU/CPU Usage Section -->
      <div class="diag-section">
        <h3>GPU & CPU Usage</h3>
        <div class="gpu-cpu-grid">
          <div class="usage-card cpu-card">
            <div class="usage-header">CPU Usage</div>
            <div class="usage-percentage ${data.gpuCpu.cpuStatus.toLowerCase()}">${data.gpuCpu.cpuUsage}%</div>
            <div class="usage-status">Status: ${data.gpuCpu.cpuStatus}</div>
            <div class="usage-details">Cores: ${data.system.hardwareConcurrency}</div>
          </div>
          <div class="usage-card gpu-card">
            <div class="usage-header">GPU Usage</div>
            <div class="usage-percentage ${data.gpuCpu.gpuStatus.toLowerCase()}">${data.gpuCpu.gpuUsage}%</div>
            <div class="usage-status">Status: ${data.gpuCpu.gpuStatus}</div>
            <div class="usage-details">FPS: ${data.gpuCpu.fps} (${data.gpuCpu.frameTiming})</div>
          </div>
        </div>
        <div class="diag-grid">
          <div class="diag-item"><span class="diag-label">GPU Renderer:</span><span class="diag-value">${data.gpuCpu.gpuRenderer}</span></div>
          <div class="diag-item"><span class="diag-label">GPU Vendor:</span><span class="diag-value">${data.gpuCpu.gpuVendor}</span></div>
        </div>
      </div>

      <!-- Network Section -->
      <div class="diag-section">
        <h3>Network Information</h3>
        <div class="diag-grid">
          <div class="diag-item"><span class="diag-label">Download Speed:</span><span class="diag-value">${data.network.downloadSpeed}</span></div>
          <div class="diag-item"><span class="diag-label">Latency:</span><span class="diag-value">${data.network.latency}</span></div>
          <div class="diag-item"><span class="diag-label">Jitter:</span><span class="diag-value">${data.network.jitter}</span></div>
          <div class="diag-item"><span class="diag-label">Connection Type:</span><span class="diag-value">${data.network.connectionType}</span></div>
          <div class="diag-item"><span class="diag-label">Effective Type:</span><span class="diag-value">${data.network.effectiveType}</span></div>
          <div class="diag-item"><span class="diag-label">Downlink:</span><span class="diag-value">${data.network.downlink}</span></div>
          <div class="diag-item"><span class="diag-label">RTT:</span><span class="diag-value">${data.network.rtt}</span></div>
          <div class="diag-item"><span class="diag-label">Client IP:</span><span class="diag-value">${data.network.clientIP}</span></div>
          <div class="diag-item"><span class="diag-label">Server:</span><span class="diag-value">${data.network.serverIP}</span></div>
          <div class="diag-item"><span class="diag-label">Protocol:</span><span class="diag-value">${data.network.protocol}</span></div>
        </div>
      </div>

      <!-- Cache Section -->
      <div class="diag-section">
        <h3>Cache Status</h3>
        <div class="diag-grid">
          <div class="diag-item"><span class="diag-label">Status:</span><span class="diag-value ${data.cache.status === 'Valid' ? 'status-good' : 'status-warn'}">${data.cache.status}</span></div>
          <div class="diag-item"><span class="diag-label">Cache Age:</span><span class="diag-value">${data.cache.cacheAge}</span></div>
          <div class="diag-item"><span class="diag-label">Cached Files:</span><span class="diag-value">${data.cache.cachedFiles}</span></div>
          <div class="diag-item"><span class="diag-label">Total Size:</span><span class="diag-value">${formatBytes(totalSize)}</span></div>
          <div class="diag-item"><span class="diag-label">Last Update:</span><span class="diag-value">${data.cache.lastUpdate}</span></div>
          <div class="diag-item"><span class="diag-label">Valid Until:</span><span class="diag-value">${data.cache.validUntil}</span></div>
        </div>
      </div>

      <!-- System Section -->
      <div class="diag-section">
        <h3>System Information</h3>
        <div class="diag-grid">
          <div class="diag-item"><span class="diag-label">Browser:</span><span class="diag-value">${data.system.browser} ${data.system.browserVersion}</span></div>
          <div class="diag-item"><span class="diag-label">OS:</span><span class="diag-value">${data.system.os}</span></div>
          <div class="diag-item"><span class="diag-label">Platform:</span><span class="diag-value">${data.system.platform}</span></div>
          <div class="diag-item"><span class="diag-label">Language:</span><span class="diag-value">${data.system.language}</span></div>
          <div class="diag-item"><span class="diag-label">Timezone:</span><span class="diag-value">${data.system.timezone}</span></div>
          <div class="diag-item"><span class="diag-label">Screen:</span><span class="diag-value">${data.system.screenResolution}</span></div>
          <div class="diag-item"><span class="diag-label">Viewport:</span><span class="diag-value">${data.system.viewportSize}</span></div>
          <div class="diag-item"><span class="diag-label">Device Memory:</span><span class="diag-value">${data.system.deviceMemory}</span></div>
          <div class="diag-item"><span class="diag-label">CPU Cores:</span><span class="diag-value">${data.system.hardwareConcurrency}</span></div>
          <div class="diag-item"><span class="diag-label">Cookies:</span><span class="diag-value">${data.system.cookiesEnabled}</span></div>
        </div>
      </div>

      <!-- Performance Section -->
      <div class="diag-section">
        <h3>Performance Metrics</h3>
        <div class="diag-grid">
          <div class="diag-item"><span class="diag-label">Page Load Time:</span><span class="diag-value">${data.performance.pageLoadTime}</span></div>
          <div class="diag-item"><span class="diag-label">DOM Content Loaded:</span><span class="diag-value">${data.performance.domContentLoaded}</span></div>
          <div class="diag-item"><span class="diag-label">First Paint:</span><span class="diag-value">${data.performance.firstPaint}</span></div>
          <div class="diag-item"><span class="diag-label">First Contentful Paint:</span><span class="diag-value">${data.performance.firstContentfulPaint}</span></div>
          <div class="diag-item"><span class="diag-label">Transfer Size:</span><span class="diag-value">${data.performance.transferSize}</span></div>
          <div class="diag-item"><span class="diag-label">Resources Loaded:</span><span class="diag-value">${data.performance.resourceCount}</span></div>
          <div class="diag-item"><span class="diag-label">Memory Usage:</span><span class="diag-value">${data.performance.memoryUsage}</span></div>
        </div>
      </div>

      <!-- Assets Section -->
      <div class="diag-section">
        <h3>Asset Information (${data.assets.length} files)</h3>
        <div class="assets-table">
          <div class="assets-table-header">
            <span>File</span>
            <span>Type</span>
            <span>Size</span>
            <span>Load Time</span>
            <span>Cached</span>
          </div>
          ${data.assets.map(asset => `
            <div class="assets-table-row">
              <span class="asset-name">${asset.url}</span>
              <span class="asset-type">${asset.type}</span>
              <span class="asset-size">${asset.size}</span>
              <span class="asset-loadtime">${asset.loadTime}</span>
              <span class="asset-cached ${asset.cached ? 'cached-yes' : 'cached-no'}">${asset.cached ? '✓' : '✗'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize status modal
 */
export function initStatusModal(): void {
  const statusToggle = document.getElementById('status-toggle');
  const statusModal = document.getElementById('status-modal');
  const statusModalClose = document.getElementById('status-modal-close');
  const statusModalBody = document.getElementById('status-modal-body');

  if (!statusToggle || !statusModal || !statusModalClose || !statusModalBody) return;

  statusToggle.addEventListener('click', async () => {
    statusModal.style.display = 'flex';

    // Show loading spinner
    statusModalBody.innerHTML = `
      <div class="status-loading">
        <div class="status-spinner"></div>
        <p>Gathering diagnostics...</p>
      </div>
    `;

    // Gather all diagnostic data
    const diagnosticData: DiagnosticData = {
      network: await getNetworkDiagnostics(),
      cache: getCacheDiagnostics(),
      system: getSystemInfo(),
      assets: await getAssetInfo(),
      performance: getPerformanceMetrics(),
      gpuCpu: await getGPUCPUMetrics(),
    };

    // Render diagnostics
    statusModalBody.innerHTML = renderDiagnostics(diagnosticData);
  });

  statusModalClose.addEventListener('click', () => {
    statusModal.style.display = 'none';
  });

  // Close on outside click
  statusModal.addEventListener('click', (e) => {
    if (e.target === statusModal) {
      statusModal.style.display = 'none';
    }
  });
}
