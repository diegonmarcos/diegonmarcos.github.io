// Status Modal - UI/modal rendering

import type { DiagnosticData } from './types';
import {
  getNetworkDiagnostics,
  getCacheDiagnostics,
  getSystemInfo,
  getAssetInfo,
  getPerformanceMetrics,
  getGPUCPUMetrics,
  formatBytes,
} from './diagnostics';

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
              <span class="asset-cached ${asset.cached ? 'cached-yes' : 'cached-no'}">${asset.cached ? '\u2713' : '\u2717'}</span>
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
