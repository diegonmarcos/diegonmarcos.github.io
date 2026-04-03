// Status Diagnostics Types

export interface DiagnosticData {
  network: NetworkDiagnostics;
  cache: CacheDiagnostics;
  system: SystemInfo;
  assets: AssetInfo[];
  performance: PerformanceMetrics;
  gpuCpu: GPUCPUMetrics;
}

export interface NetworkDiagnostics {
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

export interface CacheDiagnostics {
  status: string;
  cacheAge: string;
  cachedFiles: number;
  totalCachedSize: string;
  lastUpdate: string;
  validUntil: string;
}

export interface SystemInfo {
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

export interface AssetInfo {
  url: string;
  type: string;
  size: string;
  cached: boolean;
  loadTime: string;
}

export interface PerformanceMetrics {
  pageLoadTime: string;
  domContentLoaded: string;
  firstPaint: string;
  firstContentfulPaint: string;
  transferSize: string;
  resourceCount: string;
  memoryUsage: string;
}

export interface GPUCPUMetrics {
  cpuUsage: number; // 0-100%
  gpuUsage: number; // 0-100%
  gpuRenderer: string;
  gpuVendor: string;
  cpuStatus: string; // "Low" | "Medium" | "High" | "Critical"
  gpuStatus: string; // "Low" | "Medium" | "High" | "Critical"
  fps: number;
  frameTiming: string;
}
