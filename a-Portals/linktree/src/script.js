"use strict";
(() => {
  // git/front/a-Portals/linktree/src/typescript/modules/ascii-anim.ts
  var FRAMES = [
    `
  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
  \u2502  \u2554\u2550\u2550\u2557  \u250C\u2500\u2500\u2510  \u2502
  \u2502  \u2551\u2593\u2593\u2551  \u2502\u2591\u2591\u2502  \u2502
  \u2502  \u255A\u2550\u2550\u255D  \u2514\u2500\u2500\u2518  \u2502
  \u2502   \u25C4 loading \u25BA \u2502
  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`,
    `
  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
  \u2502  \u2554\u2550\u2550\u2557  \u250C\u2500\u2500\u2510  \u2502
  \u2502  \u2551\u2591\u2591\u2551  \u2502\u2593\u2593\u2502  \u2502
  \u2502  \u255A\u2550\u2550\u255D  \u2514\u2500\u2500\u2518  \u2502
  \u2502   \u25C4 loading \u25BA \u2502
  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`,
    `
  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
  \u2551 \u2592\u2592\u2592\u2593\u2593\u2593\u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2592 \u2551
  \u2551  { compiling }  \u2551
  \u2551 \u2592\u2593\u2593\u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2592\u2592\u2592  \u2551
  \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D`,
    `
  \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557
  \u2551 \u2593\u2593\u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2592\u2592\u2592\u2592 \u2551
  \u2551  { compiling }  \u2551
  \u2551 \u2592\u2592\u2592\u2593\u2593\u2593\u2588\u2588\u2588\u2588\u2588\u2593\u2593  \u2551
  \u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D`,
    `
     \u2571\u2572    \u2571\u2572
    \u2571  \u2572  \u2571  \u2572
   \u2571 \u2593\u2593 \u2572\u2571 \u2591\u2591 \u2572
   \u2572 \u2591\u2591 \u2571\u2572 \u2593\u2593 \u2571
    \u2572  \u2571  \u2572  \u2571
     \u2572\u2571    \u2572\u2571`,
    `
     \u2571\u2572    \u2571\u2572
    \u2571  \u2572  \u2571  \u2572
   \u2571 \u2591\u2591 \u2572\u2571 \u2593\u2593 \u2572
   \u2572 \u2593\u2593 \u2571\u2572 \u2591\u2591 \u2571
    \u2572  \u2571  \u2572  \u2571
     \u2572\u2571    \u2572\u2571`,
    `
  \u250C\u2500\u2510 \u250C\u2500\u2510 \u250C\u2500\u2510 \u250C\u2500\u2510
  \u2502<\u2502 \u2502/\u2502 \u2502>\u2502 \u2502_\u2502
  \u2514\u2500\u2518 \u2514\u2500\u2518 \u2514\u2500\u2518 \u2514\u2500\u2518
   \u2593\u2593\u2592\u2592\u2591\u2591  \u2591\u2591\u2592\u2592\u2593\u2593
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550`,
    `
  \u250C\u2500\u2510 \u250C\u2500\u2510 \u250C\u2500\u2510 \u250C\u2500\u2510
  \u2502_\u2502 \u2502<\u2502 \u2502/\u2502 \u2502>\u2502
  \u2514\u2500\u2518 \u2514\u2500\u2518 \u2514\u2500\u2518 \u2514\u2500\u2518
   \u2591\u2591\u2592\u2592\u2593\u2593  \u2593\u2593\u2592\u2592\u2591\u2591
  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550`,
    `
    \u250C\u2500\u2500\u2524 SYS \u251C\u2500\u2500\u2510
    \u2502 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 \u2502
    \u2502 \u2593\u2593\u2593\u2593\u2593\u2593\u2591\u2591\u2591 \u2502
    \u2502 \u2588\u2588\u2588\u2588\u2593\u2593\u2591\u2591\u2591 \u2502
    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
      [ 73% OK ]`,
    `
    \u250C\u2500\u2500\u2524 SYS \u251C\u2500\u2500\u2510
    \u2502 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591 \u2502
    \u2502 \u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2593\u2591 \u2502
    \u2502 \u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2593\u2591 \u2502
    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
      [ 91% OK ]`
  ];
  var el = null;
  var frameIdx = 0;
  var intervalId = null;
  function startAsciiAnim() {
    el = document.getElementById("ascii-art");
    if (!el)
      return;
    el.textContent = FRAMES[0].trimStart();
    frameIdx = 0;
    intervalId = setInterval(() => {
      frameIdx = (frameIdx + 1) % FRAMES.length;
      if (el)
        el.textContent = FRAMES[frameIdx].trimStart();
    }, 400);
  }
  function stopAsciiAnim() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // git/front/a-Portals/linktree/src/typescript/modules/loader.ts
  var CRITICAL_ASSETS = [
    "public/videos/background.mp4",
    "public/videos/background2.mp4",
    "public/videos/background3.mp4",
    "public/videos/background4.mp4",
    "public/images/background_static.jpg",
    "public/images/professional.png",
    "public/images/personal.png",
    "public/images/venture1.png",
    "public/images/venture2.png",
    "public/images/tools.png"
  ];
  var MINDMAP_URL = "https://diegonmarcos.github.io/linktree_mindmap/";
  var CACHE_KEY = "linktree_assets_cache_v1";
  var SPEED_TEST_URL = "public/images/background_static.jpg";
  var loadingScreen;
  var progressBar;
  var progressText;
  var downloadSpeedEl;
  var latencyEl;
  var assetsLoadedEl;
  var cacheStatusEl;
  var transferRateEl;
  var loadingDetailsEl;
  function isFileProtocol() {
    return window.location.protocol === "file:";
  }
  async function testLatency() {
    if (isFileProtocol()) {
      return 0;
    }
    const startTime = performance.now();
    try {
      await fetch(SPEED_TEST_URL + "?t=" + Date.now(), {
        method: "HEAD",
        cache: "no-store"
      });
      const endTime = performance.now();
      return Math.round(endTime - startTime);
    } catch {
      return 0;
    }
  }
  async function testDownloadSpeed() {
    if (isFileProtocol()) {
      return 0;
    }
    const startTime = performance.now();
    try {
      const response = await fetch(SPEED_TEST_URL + "?t=" + Date.now(), {
        cache: "no-store"
      });
      const blob = await response.blob();
      const endTime = performance.now();
      const duration = (endTime - startTime) / 1e3;
      const sizeInBits = blob.size * 8;
      const speedMbps = sizeInBits / duration / (1024 * 1024);
      return Math.round(speedMbps * 100) / 100;
    } catch {
      return 0;
    }
  }
  async function runNetworkDiagnostics() {
    updateDetails("Running network diagnostics...");
    updateDetails("Measuring latency...");
    const latency = await testLatency();
    latencyEl.textContent = `${latency}ms`;
    updateDetails("Testing download speed...");
    const downloadSpeed = await testDownloadSpeed();
    downloadSpeedEl.textContent = `${downloadSpeed} Mbps`;
    localStorage.setItem("last_download_speed", `${downloadSpeed} Mbps`);
    const transferRate = Math.round(downloadSpeed / 8 * 100) / 100;
    transferRateEl.textContent = `${transferRate} MB/s`;
    return { downloadSpeed, latency, transferRate };
  }
  function checkCacheStatus() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const cacheData = JSON.parse(cached);
        const cacheAge = Date.now() - cacheData.timestamp;
        const maxAge = 24 * 60 * 60 * 1e3;
        if (cacheAge < maxAge) {
          cacheStatusEl.textContent = "Cached";
          cacheStatusEl.style.color = "#10b981";
          return true;
        }
      }
    } catch (e) {
      console.warn("Cache check failed:", e);
    }
    cacheStatusEl.textContent = "Not Cached";
    cacheStatusEl.style.color = "#f59e0b";
    return false;
  }
  function preloadAsset(url) {
    return new Promise((resolve, reject) => {
      const ext = url.split(".").pop()?.toLowerCase();
      if (ext === "mp4" || ext === "webm") {
        const video = document.createElement("video");
        video.preload = "auto";
        video.onloadeddata = () => resolve();
        video.onerror = () => reject(new Error(`Failed to load video: ${url}`));
        video.src = url;
      } else {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
      }
    });
  }
  function preloadMindmap() {
    return new Promise((resolve) => {
      const iframe = document.createElement("iframe");
      iframe.style.position = "absolute";
      iframe.style.width = "0";
      iframe.style.height = "0";
      iframe.style.border = "none";
      iframe.style.visibility = "hidden";
      const timeout = setTimeout(() => {
        document.body.removeChild(iframe);
        resolve();
      }, 1e4);
      iframe.onload = () => {
        clearTimeout(timeout);
        setTimeout(() => {
          document.body.removeChild(iframe);
          resolve();
        }, 1e3);
      };
      iframe.onerror = () => {
        clearTimeout(timeout);
        document.body.removeChild(iframe);
        resolve();
      };
      document.body.appendChild(iframe);
      iframe.src = MINDMAP_URL;
    });
  }
  async function preloadAssets(isCached) {
    const total = CRITICAL_ASSETS.length + 1;
    let loaded = 0;
    assetsLoadedEl.textContent = `${loaded} / ${total}`;
    if (isCached) {
      updateDetails("Loading from cache...");
      for (let i = 0; i < total; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        loaded++;
        updateProgress({ loaded, total, percentage: Math.round(loaded / total * 100) });
      }
      return;
    }
    updateDetails("Downloading assets...");
    const assetPromises = CRITICAL_ASSETS.map(async (url) => {
      try {
        await preloadAsset(url);
        loaded++;
        updateProgress({ loaded, total, percentage: Math.round(loaded / total * 100) });
        updateDetails(`Loaded: ${url.split("/").pop()}`);
      } catch (error) {
        console.warn(`Asset load failed: ${url}`, error);
        loaded++;
        updateProgress({ loaded, total, percentage: Math.round(loaded / total * 100) });
      }
    });
    const mindmapPromise = preloadMindmap().then(() => {
      loaded++;
      updateProgress({ loaded, total, percentage: Math.round(loaded / total * 100) });
      updateDetails("Loaded: mindmap");
    });
    await Promise.all([...assetPromises, mindmapPromise]);
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        assets: CRITICAL_ASSETS
      }));
    } catch (e) {
      console.warn("Failed to set cache:", e);
    }
  }
  function updateProgress(progress) {
    progressBar.style.width = `${progress.percentage}%`;
    progressText.textContent = `${progress.percentage}%`;
    assetsLoadedEl.textContent = `${progress.loaded} / ${progress.total}`;
  }
  function updateDetails(text) {
    loadingDetailsEl.textContent = text;
  }
  function hideLoadingScreen() {
    updateDetails("Complete! Entering experience...");
    stopAsciiAnim();
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.classList.remove("active");
        loadingScreen.style.display = "none";
      }, 500);
    }, 500);
  }
  async function initLoader() {
    loadingScreen = document.getElementById("loading-screen");
    progressBar = document.getElementById("progress-bar");
    progressText = document.getElementById("progress-text");
    downloadSpeedEl = document.getElementById("download-speed");
    latencyEl = document.getElementById("latency");
    assetsLoadedEl = document.getElementById("assets-loaded");
    cacheStatusEl = document.getElementById("cache-status");
    transferRateEl = document.getElementById("transfer-rate");
    loadingDetailsEl = document.getElementById("loading-details");
    if (!loadingScreen) {
      console.warn("Loading screen not found");
      return;
    }
    loadingScreen.classList.add("active");
    startAsciiAnim();
    try {
      const isCached = checkCacheStatus();
      await runNetworkDiagnostics();
      await preloadAssets(isCached);
      hideLoadingScreen();
    } catch (error) {
      console.error("Loading failed:", error);
      hideLoadingScreen();
    }
  }

  // git/front/a-Portals/linktree/src/typescript/modules/status.ts
  var DIAGNOSTIC_ASSETS = [
    "public/videos/background.mp4",
    "public/videos/background2.mp4",
    "public/videos/background3.mp4",
    "public/videos/background4.mp4",
    "public/images/background_static.jpg",
    "public/images/professional.png",
    "public/images/personal.png",
    "public/images/venture1.png",
    "public/images/venture2.png",
    "public/images/tools.png"
  ];
  function isFileProtocol2() {
    return window.location.protocol === "file:";
  }
  async function getClientIP() {
    if (isFileProtocol2()) {
      return "localhost (file://)";
    }
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch {
      return "Unable to fetch";
    }
  }
  async function testLatencyDetailed() {
    if (isFileProtocol2()) {
      return { avg: 0, jitter: 0 };
    }
    const pings = [];
    const testUrl = "public/images/background_static.jpg";
    for (let i = 0; i < 5; i++) {
      const start = performance.now();
      try {
        await fetch(testUrl + "?t=" + Date.now() + "&ping=" + i, {
          method: "HEAD",
          cache: "no-store"
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
  async function getNetworkDiagnostics() {
    const latency = await testLatencyDetailed();
    const clientIP = await getClientIP();
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return {
      downloadSpeed: localStorage.getItem("last_download_speed") || "Unknown",
      uploadSpeed: "N/A",
      latency: `${latency.avg}ms`,
      jitter: `${latency.jitter}ms`,
      connectionType: connection?.type || "Unknown",
      effectiveType: connection?.effectiveType || "Unknown",
      downlink: connection?.downlink ? `${connection.downlink} Mbps` : "Unknown",
      rtt: connection?.rtt ? `${connection.rtt}ms` : "Unknown",
      clientIP,
      serverIP: window.location.hostname,
      protocol: window.location.protocol.replace(":", "")
    };
  }
  function getCacheDiagnostics() {
    try {
      const cacheData = JSON.parse(localStorage.getItem("linktree_assets_cache_v1") || "{}");
      const timestamp = cacheData.timestamp || 0;
      const cacheAge = Date.now() - timestamp;
      const maxAge = 24 * 60 * 60 * 1e3;
      const validUntil = new Date(timestamp + maxAge);
      return {
        status: cacheAge < maxAge && timestamp > 0 ? "Valid" : "Expired",
        cacheAge: `${Math.round(cacheAge / 1e3 / 60)} minutes`,
        cachedFiles: cacheData.assets?.length || 0,
        totalCachedSize: "Calculating...",
        lastUpdate: timestamp > 0 ? new Date(timestamp).toLocaleString() : "Never",
        validUntil: timestamp > 0 ? validUntil.toLocaleString() : "N/A"
      };
    } catch {
      return {
        status: "Unknown",
        cacheAge: "N/A",
        cachedFiles: 0,
        totalCachedSize: "N/A",
        lastUpdate: "N/A",
        validUntil: "N/A"
      };
    }
  }
  function getSystemInfo() {
    const nav = navigator;
    return {
      browser: getBrowserName(),
      browserVersion: getBrowserVersion(),
      os: getOS(),
      platform: nav.platform || "Unknown",
      language: nav.language || "Unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      deviceMemory: nav.deviceMemory ? `${nav.deviceMemory} GB` : "Unknown",
      hardwareConcurrency: nav.hardwareConcurrency ? `${nav.hardwareConcurrency} cores` : "Unknown",
      cookiesEnabled: nav.cookieEnabled ? "Yes" : "No",
      doNotTrack: nav.doNotTrack === "1" ? "Yes" : "No"
    };
  }
  function getBrowserName() {
    const ua = navigator.userAgent;
    if (ua.indexOf("Firefox") > -1)
      return "Firefox";
    if (ua.indexOf("Edg") > -1)
      return "Edge";
    if (ua.indexOf("Chrome") > -1)
      return "Chrome";
    if (ua.indexOf("Safari") > -1)
      return "Safari";
    if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1)
      return "Opera";
    return "Unknown";
  }
  function getBrowserVersion() {
    const ua = navigator.userAgent;
    const match = ua.match(/(Firefox|Chrome|Safari|Edge|Opera|OPR)\/([0-9.]+)/);
    return match ? match[2] : "Unknown";
  }
  function getOS() {
    const ua = navigator.userAgent;
    if (ua.indexOf("Win") > -1)
      return "Windows";
    if (ua.indexOf("Mac") > -1)
      return "macOS";
    if (ua.indexOf("X11") > -1)
      return "UNIX";
    if (ua.indexOf("Linux") > -1)
      return "Linux";
    if (ua.indexOf("Android") > -1)
      return "Android";
    if (ua.indexOf("iOS") > -1)
      return "iOS";
    return "Unknown";
  }
  async function getAssetInfo() {
    const assets = [];
    if (isFileProtocol2()) {
      const perfEntries = performance.getEntriesByType("resource");
      for (const url of DIAGNOSTIC_ASSETS) {
        const entry = perfEntries.find((e) => e.name.includes(url));
        const type = url.split(".").pop()?.toUpperCase() || "Unknown";
        if (entry) {
          assets.push({
            url: url.split("/").pop() || url,
            type,
            size: entry.transferSize ? formatBytes(entry.transferSize) : "Local",
            cached: entry.transferSize === 0,
            loadTime: `${Math.round(entry.duration)}ms`
          });
        } else {
          assets.push({
            url: url.split("/").pop() || url,
            type,
            size: "Local",
            cached: false,
            loadTime: "Pending"
          });
        }
      }
      return assets;
    }
    for (const url of DIAGNOSTIC_ASSETS) {
      const startTime = performance.now();
      try {
        const response = await fetch(url, { method: "HEAD" });
        const loadTime = performance.now() - startTime;
        const size = response.headers.get("content-length");
        const type = url.split(".").pop()?.toUpperCase() || "Unknown";
        assets.push({
          url: url.split("/").pop() || url,
          type,
          size: size ? formatBytes(parseInt(size)) : "Unknown",
          cached: response.headers.get("x-cache") === "HIT",
          loadTime: `${Math.round(loadTime)}ms`
        });
      } catch {
        assets.push({
          url: url.split("/").pop() || url,
          type: "Error",
          size: "N/A",
          cached: false,
          loadTime: "Failed"
        });
      }
    }
    return assets;
  }
  function getPerformanceMetrics() {
    const perf = performance.getEntriesByType("navigation")[0];
    const memory = performance.memory;
    const paintEntries = performance.getEntriesByType("paint");
    const firstPaint = paintEntries.find((e) => e.name === "first-paint");
    const fcp = paintEntries.find((e) => e.name === "first-contentful-paint");
    return {
      pageLoadTime: perf ? `${Math.round(perf.loadEventEnd - perf.fetchStart)}ms` : "Unknown",
      domContentLoaded: perf ? `${Math.round(perf.domContentLoadedEventEnd - perf.fetchStart)}ms` : "Unknown",
      firstPaint: firstPaint ? `${Math.round(firstPaint.startTime)}ms` : "N/A",
      firstContentfulPaint: fcp ? `${Math.round(fcp.startTime)}ms` : "N/A",
      transferSize: perf?.transferSize ? formatBytes(perf.transferSize) : "Unknown",
      resourceCount: `${performance.getEntriesByType("resource").length}`,
      memoryUsage: memory ? formatBytes(memory.usedJSHeapSize) : "Unknown"
    };
  }
  async function getGPUCPUMetrics() {
    let gpuRenderer = "Unknown";
    let gpuVendor = "Unknown";
    let gpuUsage = 0;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          gpuRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "Unknown";
          gpuVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "Unknown";
        }
        const glMemory = gl.getParameter(gl.GPU_DISJOINT_EXT);
        if (glMemory !== void 0) {
          gpuUsage = Math.min(glMemory / 1e3, 100);
        }
      }
    } catch (e) {
      console.warn("Could not get GPU info:", e);
    }
    const fps = await measureFPS();
    let cpuUsage = 0;
    const longTasks = performance.getEntriesByType?.("longtask") || [];
    if (longTasks.length > 0) {
      const totalLongTaskTime = longTasks.reduce((sum, task) => sum + task.duration, 0);
      cpuUsage = Math.min(totalLongTaskTime / 1e4 * 100, 100);
    } else {
      if (fps < 30) {
        cpuUsage = 60;
      } else if (fps < 50) {
        cpuUsage = 30;
      } else {
        cpuUsage = 10;
      }
    }
    if (fps >= 55) {
      gpuUsage = Math.max(gpuUsage, 40);
    } else if (fps < 30 && cpuUsage < 40) {
      gpuUsage = 80;
    } else {
      gpuUsage = Math.max(gpuUsage, 60);
    }
    const getCPUStatus = (usage) => {
      if (usage < 25)
        return "Low";
      if (usage < 50)
        return "Medium";
      if (usage < 75)
        return "High";
      return "Critical";
    };
    const getGPUStatus = (usage) => {
      if (usage < 30)
        return "Low";
      if (usage < 60)
        return "Medium";
      if (usage < 85)
        return "High";
      return "Critical";
    };
    return {
      cpuUsage: Math.round(cpuUsage),
      gpuUsage: Math.round(gpuUsage),
      gpuRenderer,
      gpuVendor,
      cpuStatus: getCPUStatus(cpuUsage),
      gpuStatus: getGPUStatus(gpuUsage),
      fps: Math.round(fps),
      frameTiming: `${(1e3 / fps).toFixed(2)}ms`
    };
  }
  function measureFPS() {
    return new Promise((resolve) => {
      let frames = 0;
      const startTime = performance.now();
      function countFrame() {
        frames++;
        const elapsed = performance.now() - startTime;
        if (elapsed < 1e3) {
          requestAnimationFrame(countFrame);
        } else {
          const fps = frames / elapsed * 1e3;
          resolve(fps);
        }
      }
      requestAnimationFrame(countFrame);
    });
  }
  function formatBytes(bytes) {
    if (bytes === 0)
      return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  }
  function renderDiagnostics(data) {
    const totalSize = data.assets.reduce((sum, asset) => {
      const match = asset.size.match(/([0-9.]+)\s*(B|KB|MB|GB)/);
      if (!match)
        return sum;
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
          <div class="diag-item"><span class="diag-label">Status:</span><span class="diag-value ${data.cache.status === "Valid" ? "status-good" : "status-warn"}">${data.cache.status}</span></div>
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
          ${data.assets.map((asset) => `
            <div class="assets-table-row">
              <span class="asset-name">${asset.url}</span>
              <span class="asset-type">${asset.type}</span>
              <span class="asset-size">${asset.size}</span>
              <span class="asset-loadtime">${asset.loadTime}</span>
              <span class="asset-cached ${asset.cached ? "cached-yes" : "cached-no"}">${asset.cached ? "\u2713" : "\u2717"}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
  }
  function initStatusModal() {
    const statusToggle = document.getElementById("status-toggle");
    const statusModal = document.getElementById("status-modal");
    const statusModalClose = document.getElementById("status-modal-close");
    const statusModalBody = document.getElementById("status-modal-body");
    if (!statusToggle || !statusModal || !statusModalClose || !statusModalBody)
      return;
    statusToggle.addEventListener("click", async () => {
      statusModal.style.display = "flex";
      statusModalBody.innerHTML = `
      <div class="status-loading">
        <div class="status-spinner"></div>
        <p>Gathering diagnostics...</p>
      </div>
    `;
      const diagnosticData = {
        network: await getNetworkDiagnostics(),
        cache: getCacheDiagnostics(),
        system: getSystemInfo(),
        assets: await getAssetInfo(),
        performance: getPerformanceMetrics(),
        gpuCpu: await getGPUCPUMetrics()
      };
      statusModalBody.innerHTML = renderDiagnostics(diagnosticData);
    });
    statusModalClose.addEventListener("click", () => {
      statusModal.style.display = "none";
    });
    statusModal.addEventListener("click", (e) => {
      if (e.target === statusModal) {
        statusModal.style.display = "none";
      }
    });
  }

  // git/front/a-Portals/linktree/src/typescript/utils/dom.ts
  function getElementById(id) {
    return document.getElementById(id);
  }
  function querySelector(selector, parent = document) {
    return parent.querySelector(selector);
  }
  function querySelectorAll(selector, parent = document) {
    return parent.querySelectorAll(selector);
  }
  function setCSSProperty(element, property, value) {
    element.style.setProperty(property, value);
  }
  function addClass(element, className) {
    element.classList.add(className);
  }
  function removeClass(element, className) {
    element.classList.remove(className);
  }
  function hasClass(element, className) {
    return element.classList.contains(className);
  }

  // git/front/a-Portals/linktree/src/typescript/modules/collapsible.ts
  function updateParentHeights(element) {
    let parentCollapsible = element.parentElement?.closest(".collapsible-content");
    while (parentCollapsible) {
      if (hasClass(parentCollapsible, "open")) {
        const currentHeight = parentCollapsible.style.maxHeight;
        parentCollapsible.style.maxHeight = "none";
        const actualHeight = parentCollapsible.scrollHeight;
        parentCollapsible.style.maxHeight = currentHeight;
        void parentCollapsible.offsetHeight;
        parentCollapsible.style.maxHeight = actualHeight + "px";
      }
      parentCollapsible = parentCollapsible.parentElement?.closest(".collapsible-content");
    }
  }
  function initCollapsibleHeights() {
    const contents = querySelectorAll(".collapsible-content");
    contents.forEach((content) => {
      if (hasClass(content, "open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  }
  function handleToggleClick(toggle) {
    const targetId = toggle.getAttribute("data-target");
    if (!targetId)
      return;
    const content = getElementById(targetId);
    if (!content)
      return;
    if (hasClass(content, "open")) {
      removeClass(content, "open");
      removeClass(toggle, "open");
      const plusIcon = toggle.querySelector(".plus-icon");
      if (plusIcon)
        plusIcon.classList.add("was-open");
      content.style.maxHeight = "0px";
      setTimeout(() => updateParentHeights(content), 100);
    } else {
      addClass(content, "open");
      addClass(toggle, "open");
      const plusIcon = toggle.querySelector(".plus-icon");
      if (plusIcon)
        plusIcon.classList.remove("was-open");
      content.style.maxHeight = content.scrollHeight + "px";
      setTimeout(() => {
        if (hasClass(content, "open")) {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }, 50);
      setTimeout(() => updateParentHeights(content), 100);
      setTimeout(() => updateParentHeights(content), 300);
      setTimeout(() => updateParentHeights(content), 500);
    }
  }
  function initCollapsibleSections() {
    initCollapsibleHeights();
    const toggles = querySelectorAll(".more-toggle");
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => handleToggleClick(toggle));
    });
  }
  function initControlsToggle() {
    const controlsFab = getElementById("controls-fab");
    const controlsList = getElementById("controls-list");
    const container = controlsFab?.parentElement;
    if (!controlsFab || !controlsList || !container)
      return;
    let autoCloseTimeout = null;
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const closeControls = () => {
      removeClass(controlsList, "open");
      removeClass(controlsFab, "open");
      if (autoCloseTimeout) {
        clearTimeout(autoCloseTimeout);
        autoCloseTimeout = null;
      }
    };
    const openControls = (withAutoClose = true) => {
      addClass(controlsList, "open");
      addClass(controlsFab, "open");
      if (withAutoClose && !isMobile) {
        autoCloseTimeout = window.setTimeout(() => {
          closeControls();
        }, 1e3);
      }
    };
    const cancelAutoClose = () => {
      if (autoCloseTimeout) {
        clearTimeout(autoCloseTimeout);
        autoCloseTimeout = null;
      }
    };
    const restartAutoClose = () => {
      cancelAutoClose();
      if (hasClass(controlsList, "open") && !isMobile) {
        autoCloseTimeout = window.setTimeout(() => {
          closeControls();
        }, 1e3);
      }
    };
    if (!isMobile) {
      controlsFab.addEventListener("mouseenter", () => {
        cancelAutoClose();
        if (!hasClass(controlsList, "open")) {
          openControls(true);
        }
      });
      controlsList.addEventListener("mouseenter", () => {
        cancelAutoClose();
      });
      container.addEventListener("mouseleave", () => {
        restartAutoClose();
      });
    }
    controlsFab.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (hasClass(controlsList, "open")) {
        closeControls();
      } else {
        openControls(!isMobile);
      }
    });
    if (isMobile) {
      controlsFab.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (hasClass(controlsList, "open")) {
          closeControls();
        } else {
          openControls(false);
        }
      }, { passive: false });
    }
  }

  // git/front/a-Portals/linktree/src/typescript/modules/videoBackground.ts
  var VIDEOS = [
    "public/videos/background.mp4",
    "public/videos/background2.mp4",
    "public/videos/background3.mp4",
    "public/videos/background4.mp4"
  ];
  var STATIC_BACKGROUND = "public/images/background_static.jpg";
  var videoElement = null;
  var isPlaying = true;
  function getRandomVideo() {
    return VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
  }
  function initVideoBackground() {
    videoElement = getElementById("background-video");
    if (videoElement) {
      videoElement.src = getRandomVideo();
      videoElement.poster = STATIC_BACKGROUND;
    }
  }
  function initVideoToggle() {
    const toggle = getElementById("video-toggle");
    if (!toggle || !videoElement)
      return;
    const savedPref = localStorage.getItem("videoPlaying");
    if (savedPref === "false") {
      isPlaying = false;
      removeClass(toggle, "active");
      pauseAndShowStatic();
    } else {
      isPlaying = true;
      addClass(toggle, "active");
    }
    toggle.addEventListener("click", () => {
      if (isPlaying) {
        pauseAndShowStatic();
        removeClass(toggle, "active");
      } else {
        playVideo();
        addClass(toggle, "active");
      }
      localStorage.setItem("videoPlaying", String(isPlaying));
    });
  }
  function pauseAndShowStatic() {
    if (!videoElement)
      return;
    videoElement.pause();
    videoElement.removeAttribute("src");
    videoElement.load();
    isPlaying = false;
  }
  function playVideo() {
    if (!videoElement)
      return;
    videoElement.src = getRandomVideo();
    videoElement.play().catch(() => {
    });
    isPlaying = true;
  }

  // git/front/a-Portals/linktree/src/typescript/modules/carousel.ts
  var selectedCarousel = "professional";
  var professionalSwiper;
  var personalSwiper;
  var impersonalSwiper;
  var professionalRow;
  var personalRow;
  var impersonalRow;
  var professionalPrev;
  var professionalNext;
  var personalPrev;
  var personalNext;
  var impersonalPrev;
  var impersonalNext;
  var trackpadDebounce = false;
  var TRACKPAD_DEBOUNCE_TIME = 300;
  var swiperConfig = {
    effect: "creative",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    creativeEffect: {
      prev: {
        shadow: false,
        translate: ["-120%", 0, -500],
        rotate: [0, 0, -15],
        opacity: 0,
        scale: 0.8
      },
      next: {
        shadow: false,
        translate: ["120%", 0, -500],
        rotate: [0, 0, 15],
        opacity: 0,
        scale: 0.8
      }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    touchRatio: 1,
    resistanceRatio: 0.85,
    touchStartPreventDefault: false,
    touchStartForcePreventDefault: false,
    touchMoveStopPropagation: false,
    simulateTouch: true,
    allowTouchMove: true,
    touchEventsTarget: "container",
    threshold: 10,
    passiveListeners: true,
    speed: 900
  };
  function getCarouselSet(type) {
    if (type === "professional") {
      return { swiper: professionalSwiper, row: professionalRow, prev: professionalPrev, next: professionalNext, el: querySelector(".professional-swiper") };
    } else if (type === "impersonal") {
      return { swiper: impersonalSwiper, row: impersonalRow, prev: impersonalPrev, next: impersonalNext, el: querySelector(".impersonal-swiper") };
    }
    return { swiper: personalSwiper, row: personalRow, prev: personalPrev, next: personalNext, el: querySelector(".personal-swiper") };
  }
  var allTypes = ["professional", "personal", "impersonal"];
  function selectCarousel(carousel) {
    selectedCarousel = carousel;
    for (const t of allTypes) {
      const set = getCarouselSet(t);
      if (t === carousel) {
        addClass(set.row, "selected");
      } else {
        removeClass(set.row, "selected");
      }
    }
  }
  function updateArrowStates() {
    for (const t of allTypes) {
      const set = getCarouselSet(t);
      if (!set.el)
        continue;
      if (t === selectedCarousel) {
        set.prev.style.opacity = "1";
        set.next.style.opacity = "1";
        set.prev.style.pointerEvents = "auto";
        set.next.style.pointerEvents = "auto";
        set.swiper.allowTouchMove = true;
        set.swiper.enable();
        addClass(set.el, "swiper-enabled");
        removeClass(set.el, "swiper-disabled");
      } else {
        set.prev.style.opacity = "0.3";
        set.next.style.opacity = "0.3";
        set.prev.style.pointerEvents = "none";
        set.next.style.pointerEvents = "none";
        set.swiper.allowTouchMove = false;
        set.swiper.disable();
        addClass(set.el, "swiper-disabled");
        removeClass(set.el, "swiper-enabled");
      }
    }
  }
  function handleTrackpadSwipe(e, swiper) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (!trackpadDebounce) {
        trackpadDebounce = true;
        if (e.deltaX > 30) {
          swiper.slidePrev();
        } else if (e.deltaX < -30) {
          swiper.slideNext();
        }
        setTimeout(() => {
          trackpadDebounce = false;
        }, TRACKPAD_DEBOUNCE_TIME);
        e.preventDefault();
      }
    }
  }
  function professionalTrackpadHandler(e) {
    handleTrackpadSwipe(e, professionalSwiper);
  }
  function personalTrackpadHandler(e) {
    handleTrackpadSwipe(e, personalSwiper);
  }
  function impersonalTrackpadHandler(e) {
    handleTrackpadSwipe(e, impersonalSwiper);
  }
  function updateTrackpadListeners() {
    professionalRow.removeEventListener("wheel", professionalTrackpadHandler);
    personalRow.removeEventListener("wheel", personalTrackpadHandler);
    impersonalRow.removeEventListener("wheel", impersonalTrackpadHandler);
    if (selectedCarousel === "professional") {
      professionalRow.addEventListener("wheel", professionalTrackpadHandler, { passive: false });
    } else if (selectedCarousel === "personal") {
      personalRow.addEventListener("wheel", personalTrackpadHandler, { passive: false });
    } else {
      impersonalRow.addEventListener("wheel", impersonalTrackpadHandler, { passive: false });
    }
  }
  function initTwoFingerSwipe() {
    let isTwoFingerSwipe = false;
    const rows = [professionalRow, personalRow, impersonalRow];
    const types = ["professional", "personal", "impersonal"];
    rows.forEach((row, index) => {
      row.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
          isTwoFingerSwipe = true;
        }
      }, { passive: true });
      row.addEventListener("touchmove", (e) => {
        if (isTwoFingerSwipe && e.touches.length === 2) {
        }
      }, { passive: true });
      row.addEventListener("touchend", () => {
        if (isTwoFingerSwipe) {
          selectCarousel(types[index]);
          updateArrowStates();
          isTwoFingerSwipe = false;
        }
      }, { passive: true });
    });
  }
  function initKeyboardNavigation() {
    const order = ["professional", "personal", "impersonal"];
    document.addEventListener("keydown", (e) => {
      const currentSwiper = getCarouselSet(selectedCarousel).swiper;
      if (e.key === "ArrowLeft") {
        currentSwiper.slidePrev();
      } else if (e.key === "ArrowRight") {
        currentSwiper.slideNext();
      } else if (e.key === "ArrowDown") {
        const idx = order.indexOf(selectedCarousel);
        if (idx < order.length - 1) {
          selectCarousel(order[idx + 1]);
          updateArrowStates();
        }
      } else if (e.key === "ArrowUp") {
        const idx = order.indexOf(selectedCarousel);
        if (idx > 0) {
          selectCarousel(order[idx - 1]);
          updateArrowStates();
        }
      }
    });
  }
  function initClickSelection() {
    const pairs = [
      [professionalRow, "professional"],
      [personalRow, "personal"],
      [impersonalRow, "impersonal"]
    ];
    for (const [row, type] of pairs) {
      row.addEventListener("click", (e) => {
        if (e.target.closest("a, button"))
          return;
        selectCarousel(type);
        updateArrowStates();
        updateTrackpadListeners();
      });
    }
  }
  function initCarousels() {
    if (typeof Swiper === "undefined") {
      console.warn("Swiper not loaded - carousel disabled");
      return;
    }
    const profRow = querySelector(".professional-section .carousel-row");
    const persRow = querySelector(".personal-section .carousel-row");
    const imperRow = querySelector(".impersonal-section .carousel-row");
    if (!profRow || !persRow || !imperRow)
      return;
    professionalRow = profRow;
    personalRow = persRow;
    impersonalRow = imperRow;
    const profPrev = querySelector(".professional-prev");
    const profNext = querySelector(".professional-next");
    const persPrev = querySelector(".personal-prev");
    const persNext = querySelector(".personal-next");
    const imperPrev = querySelector(".impersonal-prev");
    const imperNext = querySelector(".impersonal-next");
    if (!profPrev || !profNext || !persPrev || !persNext || !imperPrev || !imperNext)
      return;
    professionalPrev = profPrev;
    professionalNext = profNext;
    personalPrev = persPrev;
    personalNext = persNext;
    impersonalPrev = imperPrev;
    impersonalNext = imperNext;
    professionalSwiper = new Swiper(".professional-swiper", {
      ...swiperConfig,
      navigation: {
        nextEl: ".professional-next",
        prevEl: ".professional-prev"
      },
      pagination: {
        el: ".professional-pagination",
        clickable: true
      }
    });
    personalSwiper = new Swiper(".personal-swiper", {
      ...swiperConfig,
      navigation: {
        nextEl: ".personal-next",
        prevEl: ".personal-prev"
      },
      pagination: {
        el: ".personal-pagination",
        clickable: true
      }
    });
    impersonalSwiper = new Swiper(".impersonal-swiper", {
      ...swiperConfig,
      navigation: {
        nextEl: ".impersonal-next",
        prevEl: ".impersonal-prev"
      },
      pagination: {
        el: ".impersonal-pagination",
        clickable: true
      }
    });
    addClass(professionalRow, "selected");
    updateArrowStates();
    initTwoFingerSwipe();
    initKeyboardNavigation();
    initClickSelection();
    updateTrackpadListeners();
  }
  function getSelectedCarousel() {
    return selectedCarousel;
  }

  // git/front/a-Portals/linktree/src/typescript/modules/mobileScroll.ts
  var professionalRow2 = null;
  var personalRow2 = null;
  var impersonalRow2 = null;
  function throttle(func, limit) {
    let inThrottle = false;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }
  function getElementCenterY(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height / 2;
  }
  function selectCarouselByScroll() {
    if (!professionalRow2 || !personalRow2 || !impersonalRow2)
      return;
    const viewportCenter = window.innerHeight / 2;
    const distances = [
      [Math.abs(viewportCenter - getElementCenterY(professionalRow2)), "professional"],
      [Math.abs(viewportCenter - getElementCenterY(personalRow2)), "personal"],
      [Math.abs(viewportCenter - getElementCenterY(impersonalRow2)), "impersonal"]
    ];
    distances.sort((a, b) => a[0] - b[0]);
    const closest = distances[0][1];
    if (getSelectedCarousel() !== closest) {
      selectCarousel(closest);
      updateArrowStates();
    }
  }
  function initMobileScrollSelection() {
    professionalRow2 = querySelector(".professional-section .carousel-row");
    personalRow2 = querySelector(".personal-section .carousel-row");
    impersonalRow2 = querySelector(".impersonal-section .carousel-row");
    if (!professionalRow2 || !personalRow2 || !impersonalRow2)
      return;
    const throttledSelect = throttle(selectCarouselByScroll, 100);
    window.addEventListener("scroll", throttledSelect, { passive: true });
    requestAnimationFrame(() => {
      requestAnimationFrame(selectCarouselByScroll);
    });
    window.addEventListener("resize", throttle(selectCarouselByScroll, 200), { passive: true });
  }

  // git/front/a-Portals/linktree/src/typescript/modules/gallery.ts
  var galleryEnabled = false;
  function setThumbnailBackgrounds() {
    const links = querySelectorAll(".link");
    links.forEach((link) => {
      const previewUrl = link.getAttribute("data-preview");
      if (previewUrl) {
        setCSSProperty(link, "--thumbnail-url", `url(${previewUrl})`);
      }
    });
  }
  function toggleGalleryMode(button) {
    galleryEnabled = !galleryEnabled;
    localStorage.setItem("galleryEnabled", String(galleryEnabled));
    if (galleryEnabled) {
      setThumbnailBackgrounds();
      addClass(document.body, "gallery-mode");
      addClass(button, "active");
    } else {
      removeClass(document.body, "gallery-mode");
      removeClass(button, "active");
    }
  }
  function initGalleryToggle() {
    const galleryToggle = getElementById("gallery-toggle");
    if (!galleryToggle)
      return;
    galleryEnabled = localStorage.getItem("galleryEnabled") === "true";
    if (galleryEnabled) {
      setThumbnailBackgrounds();
      addClass(document.body, "gallery-mode");
      addClass(galleryToggle, "active");
    }
    galleryToggle.addEventListener("click", () => toggleGalleryMode(galleryToggle));
  }

  // git/front/a-Portals/linktree/src/typescript/modules/performanceMode.ts
  var isLiteMode = false;
  function enableLiteMode() {
    document.body.classList.add("lite-mode");
    isLiteMode = true;
    const videoToggle = getElementById("video-toggle");
    if (videoToggle && videoToggle.classList.contains("active")) {
      videoToggle.click();
    }
  }
  function disableLiteMode() {
    document.body.classList.remove("lite-mode");
    isLiteMode = false;
    const videoToggle = getElementById("video-toggle");
    if (videoToggle && !videoToggle.classList.contains("active")) {
      videoToggle.click();
    }
  }
  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function initPerformanceMode() {
    const toggle = getElementById("lite-toggle");
    if (prefersReducedMotion()) {
      enableLiteMode();
      if (toggle)
        addClass(toggle, "active");
      return;
    }
    if (!toggle)
      return;
    const savedPref = localStorage.getItem("liteMode");
    if (savedPref === "true") {
      isLiteMode = true;
      addClass(toggle, "active");
      enableLiteMode();
    }
    toggle.addEventListener("click", () => {
      if (isLiteMode) {
        disableLiteMode();
        removeClass(toggle, "active");
      } else {
        enableLiteMode();
        addClass(toggle, "active");
      }
      localStorage.setItem("liteMode", String(isLiteMode));
    });
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", (e) => {
      if (e.matches && !isLiteMode) {
        enableLiteMode();
        addClass(toggle, "active");
      }
    });
  }

  // git/front/a-Portals/linktree/src/typescript/modules/mindmap-overlay.ts
  function initMindmapOverlay() {
    const mindmapBtn = getElementById("mindmap-btn");
    const mindmapControlBtn = getElementById("btn-mindmap");
    const overlay = getElementById("mindmap-overlay");
    const closeBtn = getElementById("mindmap-overlay-close");
    const iframe = getElementById("mindmap-iframe");
    const backgroundVideo = getElementById("background-video");
    if (!mindmapBtn || !overlay || !closeBtn || !iframe)
      return;
    const mindmapUrl = mindmapBtn.href;
    let hoverTimeout = null;
    let iframeLoaded = false;
    const openOverlay = () => {
      if (!iframeLoaded) {
        iframe.src = mindmapUrl;
        iframeLoaded = true;
        console.log("Loading mindmap iframe for first time:", mindmapUrl);
      }
      if (backgroundVideo) {
        backgroundVideo.pause();
        console.log("Paused background video (GPU optimization)");
      }
      addClass(overlay, "active");
      addClass(mindmapBtn, "hidden");
    };
    const closeOverlay = () => {
      removeClass(overlay, "active");
      removeClass(mindmapBtn, "hidden");
      if (backgroundVideo) {
        backgroundVideo.play().catch((err) => {
          console.warn("Could not resume background video:", err);
        });
      }
    };
    mindmapBtn.addEventListener("mouseenter", () => {
      hoverTimeout = window.setTimeout(() => {
        openOverlay();
      }, 500);
    });
    mindmapBtn.addEventListener("mouseleave", () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
    });
    mindmapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openOverlay();
    });
    if (mindmapControlBtn) {
      mindmapControlBtn.addEventListener("click", () => {
        openOverlay();
      });
    }
    closeBtn.addEventListener("click", () => {
      closeOverlay();
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeOverlay();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeOverlay();
      }
    });
  }

  // git/front/a-Portals/linktree/src/typescript/modules/vmControl.ts
  var API_BASE = "https://api.diegonmarcos.com";
  var VM_LABEL = "oci-flex";
  var isLoading = false;
  var apiAvailable = false;
  var vmId = null;
  async function discoverVmId() {
    if (vmId)
      return vmId;
    try {
      console.debug("[vmControl] discovering VM via /rust/health/ids ...");
      const response = await fetch(`${API_BASE}/rust/health/ids`, {
        signal: AbortSignal.timeout(1e4)
      });
      if (!response.ok) {
        console.debug("[vmControl] discovery HTTP", response.status);
        return null;
      }
      const data = await response.json();
      console.debug("[vmControl] discovered VMs:", Object.keys(data.vms || {}));
      for (const [id, vm] of Object.entries(data.vms || {})) {
        if (vm.label === VM_LABEL) {
          vmId = id;
          console.debug("[vmControl] matched VM:", id);
          return id;
        }
      }
      console.debug("[vmControl] no VM with label", VM_LABEL);
    } catch (e) {
      console.debug("[vmControl] discovery failed:", e.message);
    }
    return null;
  }
  function setIndicator(color) {
    const indicator = getElementById("vm-status-indicator");
    if (!indicator)
      return;
    removeClass(indicator, "status-green");
    removeClass(indicator, "status-red");
    removeClass(indicator, "status-yellow");
    removeClass(indicator, "status-blue");
    addClass(indicator, `status-${color}`);
    const titles = {
      green: "VM Online",
      red: "VM Offline",
      yellow: "Command Running...",
      blue: "Status Unknown"
    };
    indicator.title = titles[color];
  }
  async function checkVmStatus() {
    setIndicator("yellow");
    try {
      const id = await discoverVmId();
      if (!id) {
        setIndicator("blue");
        return;
      }
      const url = `${API_BASE}/rust/health/up/${id}`;
      console.debug("[vmControl] checking health:", url);
      const t0 = performance.now();
      const response = await fetch(url, { signal: AbortSignal.timeout(1e4) });
      console.debug("[vmControl] health response:", response.status, `(${((performance.now() - t0) / 1e3).toFixed(1)}s)`);
      if (response.ok) {
        const data = await response.json();
        console.debug("[vmControl] health data:", JSON.stringify(data));
        apiAvailable = true;
        setIndicator(data.health === "online" ? "green" : "red");
      } else {
        apiAvailable = false;
        setIndicator("blue");
      }
    } catch (e) {
      console.debug("[vmControl] health check failed:", e.message);
      apiAvailable = false;
      setIndicator("blue");
    }
  }
  async function executeVmAction(action) {
    if (!vmId)
      await discoverVmId();
    if (!vmId)
      await discoverVmId();
    if (!apiAvailable || !vmId) {
      showToast("API not available", true);
      return false;
    }
    try {
      isLoading = true;
      setIndicator("yellow");
      const rustAction = action === "reboot" ? "reset" : action;
      const url = `${API_BASE}/rust/vms/${vmId}/${rustAction}`;
      console.debug("[vmControl] action:", action, "\u2192 POST", url);
      const t0 = performance.now();
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(3e4)
      });
      console.debug("[vmControl] action response:", response.status, `(${((performance.now() - t0) / 1e3).toFixed(1)}s)`);
      if (!response.ok)
        throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      console.debug("[vmControl] action result:", JSON.stringify(data));
      if (data.status) {
        const msgs = { start: "VM starting...", stop: "VM stopping...", reboot: "VM rebooting..." };
        showToast(msgs[action] || data.message || "Done");
        setTimeout(() => checkVmStatus(), 1e4);
        setTimeout(() => checkVmStatus(), 3e4);
        setTimeout(() => checkVmStatus(), 6e4);
        return true;
      } else {
        throw new Error("Action failed");
      }
    } catch (error) {
      console.error(`VM ${action} failed:`, error);
      showToast("Action failed", true);
      return false;
    } finally {
      isLoading = false;
      await checkVmStatus();
    }
  }
  function showToast(message, isError = false) {
    const toast = document.createElement("div");
    toast.className = `vm-toast ${isError ? "vm-toast-error" : "vm-toast-success"}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => addClass(toast, "vm-toast-visible"));
    setTimeout(() => {
      removeClass(toast, "vm-toast-visible");
      setTimeout(() => toast.remove(), 300);
    }, 3e3);
  }
  function initVmControl() {
    const startBtn = getElementById("vm-start-btn");
    const stopBtn = getElementById("vm-stop-btn");
    const rebootBtn = getElementById("vm-reboot-btn");
    const refreshBtn = getElementById("vm-refresh-btn");
    if (!startBtn || !stopBtn || !rebootBtn)
      return;
    startBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!isLoading)
        await executeVmAction("start");
    });
    stopBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!isLoading)
        await executeVmAction("stop");
    });
    rebootBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      if (!isLoading)
        await executeVmAction("reboot");
    });
    if (refreshBtn)
      refreshBtn.addEventListener("click", (e) => {
        e.preventDefault();
        checkVmStatus();
      });
    checkVmStatus();
    setInterval(checkVmStatus, 3e4);
  }

  // git/front/a-Portals/linktree/src/typescript/modules/profilePicSwiper.ts
  function initProfilePicSwiper() {
    document.querySelectorAll(".profile-pic-swiper").forEach((container) => {
      const slides = container.querySelectorAll(".profile-pic-slide");
      if (slides.length < 2)
        return;
      let current = 0;
      let startX = 0;
      function show(index) {
        slides.forEach((s, i) => s.classList.toggle("active", i === index));
        current = index;
      }
      container.addEventListener("click", () => {
        show((current + 1) % slides.length);
      });
      container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      }, { passive: true });
      container.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 30) {
          show(dx < 0 ? Math.min(current + 1, slides.length - 1) : Math.max(current - 1, 0));
        }
      }, { passive: true });
    });
  }

  // git/front/a-Portals/linktree/src/typescript/modules/cardSwiper.ts
  function initCardSwiper() {
    document.querySelectorAll(".card-swiper").forEach((container) => {
      const slides = container.querySelectorAll(".card-slide");
      if (slides.length < 2)
        return;
      let current = 0;
      let startX = 0;
      function show(index) {
        slides.forEach((s, i) => s.classList.toggle("active", i === index));
        current = index;
      }
      container.addEventListener("click", () => {
        show((current + 1) % slides.length);
      });
      container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      }, { passive: true });
      container.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 30) {
          show(dx < 0 ? Math.min(current + 1, slides.length - 1) : Math.max(current - 1, 0));
        }
      }, { passive: true });
    });
  }

  // git/front/a-Portals/linktree/src/typescript/main.ts
  function initApp() {
    initCollapsibleSections();
    initProfilePicSwiper();
    initCardSwiper();
    initControlsToggle();
    initStatusModal();
    initMindmapOverlay();
    initVideoBackground();
    initVideoToggle();
    initCarousels();
    initMobileScrollSelection();
    initGalleryToggle();
    initPerformanceMode();
    initVmControl();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const controlsFab = document.querySelector(".controls-fab-container");
        const mindmapBtn = document.getElementById("mindmap-btn");
        const pixelworldBtn = document.getElementById("pixelworld-btn");
        if (controlsFab) {
          controlsFab.style.visibility = "visible";
        }
        if (mindmapBtn) {
          mindmapBtn.style.visibility = "visible";
        }
        if (pixelworldBtn) {
          pixelworldBtn.style.visibility = "visible";
        }
      });
    });
  }
  function startApp() {
    requestAnimationFrame(() => {
      requestAnimationFrame(initApp);
    });
  }
  document.addEventListener("DOMContentLoaded", async () => {
    await initLoader();
    if (typeof Swiper !== "undefined") {
      startApp();
    } else {
      const timeout = setTimeout(startApp, 5e3);
      window.addEventListener("swiperReady", () => {
        clearTimeout(timeout);
        startApp();
      });
    }
  });
})();
//# sourceMappingURL=script.js.map
