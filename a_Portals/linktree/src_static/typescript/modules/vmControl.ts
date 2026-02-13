// VM Control module for OCI on-demand VPS management

import { getElementById, addClass, removeClass } from '../utils/dom';

// Configuration
const API_BASE = 'https://api.diegonmarcos.com';
const VM_LABEL = 'oci-flex'; // On-demand VPS label

// State
let isLoading = false;
let currentStatus: 'online' | 'offline' | 'unknown' = 'unknown';
let apiAvailable = false;
let vmId: string | null = null;

/**
 * Discover VM ID from Rust health/all endpoint by label
 */
async function discoverVmId(): Promise<string | null> {
  if (vmId) return vmId;
  try {
    const response = await fetch(`${API_BASE}/rust/health/ids`, {
      signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) return null;
    const data = await response.json();
    for (const [id, vm] of Object.entries(data.vms || {})) {
      if ((vm as any).label === VM_LABEL) {
        vmId = id;
        return id;
      }
    }
  } catch {}
  return null;
}

/**
 * Update status indicator UI
 */
function updateStatusIndicator(status: 'online' | 'offline' | 'loading' | 'unknown'): void {
  const indicator = getElementById<HTMLElement>('vm-status-indicator');
  if (!indicator) return;

  removeClass(indicator, 'status-online');
  removeClass(indicator, 'status-offline');
  removeClass(indicator, 'status-loading');
  removeClass(indicator, 'status-unknown');

  addClass(indicator, `status-${status}`);

  // Update title attribute
  const titles: Record<string, string> = {
    online: 'VM Online',
    offline: 'VM Offline',
    loading: 'Checking...',
    unknown: 'Status Unknown'
  };
  indicator.title = titles[status];
}

/**
 * Update button states
 */
function updateButtonStates(vmState: 'running' | 'stopped' | 'loading'): void {
  const startBtn = getElementById<HTMLButtonElement>('vm-start-btn');
  const stopBtn = getElementById<HTMLButtonElement>('vm-stop-btn');
  const rebootBtn = getElementById<HTMLButtonElement>('vm-reboot-btn');

  if (!startBtn || !stopBtn || !rebootBtn) return;

  // Reboot/reset is always available — API handles both running (SOFTRESET) and stopped (START)
  rebootBtn.disabled = false;
  removeClass(rebootBtn, 'btn-loading');
  removeClass(rebootBtn, 'btn-inactive');

  if (vmState === 'loading') {
    startBtn.disabled = true;
    stopBtn.disabled = true;
    addClass(startBtn, 'btn-loading');
    addClass(stopBtn, 'btn-loading');
    return;
  }

  removeClass(startBtn, 'btn-loading');
  removeClass(stopBtn, 'btn-loading');

  if (vmState === 'running') {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    addClass(startBtn, 'btn-inactive');
    removeClass(stopBtn, 'btn-inactive');
  } else {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    removeClass(startBtn, 'btn-inactive');
    addClass(stopBtn, 'btn-inactive');
  }
}

/**
 * Check if API is available and get VM status
 */
async function checkApiAndVmStatus(): Promise<{ apiOk: boolean; vmOnline?: boolean; providerRunning?: boolean }> {
  try {
    const id = await discoverVmId();
    if (!id) return { apiOk: false };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${API_BASE}/rust/health/${id}`, {
      method: 'GET',
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      return {
        apiOk: true,
        vmOnline: data.ping === true || data.ssh === true,
        providerRunning: data.provider_state === 'RUNNING'
      };
    }

    return { apiOk: false };
  } catch {
    return { apiOk: false };
  }
}

/**
 * Check VM status and update UI
 */
async function checkVmStatus(): Promise<void> {
  updateStatusIndicator('loading');

  const result = await checkApiAndVmStatus();
  apiAvailable = result.apiOk;

  if (result.apiOk && result.vmOnline !== undefined) {
    currentStatus = result.vmOnline ? 'online' : 'offline';
    updateStatusIndicator(currentStatus);
    updateButtonStates(result.vmOnline ? 'running' : (result.providerRunning ? 'running' : 'stopped'));
  } else {
    // API not available - show unknown state
    currentStatus = 'unknown';
    updateStatusIndicator('unknown');
    updateButtonStates('stopped');
  }
}

/**
 * Execute VM action - opens OCI Console if API not available
 */
async function executeVmAction(action: 'start' | 'stop' | 'reboot'): Promise<boolean> {
  // Retry discovery if VM not found yet
  if (!vmId) await discoverVmId();
  if (!vmId) await discoverVmId();
  if (!apiAvailable || !vmId) {
    showToast('API not available', true);
    return false;
  }

  try {
    isLoading = true;
    updateButtonStates('loading');
    updateStatusIndicator('loading');

    const rustAction = action === 'reboot' ? 'reset' : action;
    const response = await fetch(`${API_BASE}/rust/vms/${vmId}/${rustAction}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    if (data.status) {
      const actionMessages: Record<string, string> = {
        start: 'VM starting...',
        stop: 'VM stopping...',
        reboot: 'VM rebooting...'
      };
      showToast(actionMessages[action] || data.message || 'Done');

      // Poll for status change
      setTimeout(() => checkVmStatus(), 10000);
      setTimeout(() => checkVmStatus(), 30000);
      setTimeout(() => checkVmStatus(), 60000);

      return true;
    } else {
      throw new Error('Action failed');
    }
  } catch (error) {
    console.error(`VM ${action} failed:`, error);
    showToast('Action failed', true);
    return false;
  } finally {
    isLoading = false;
    await checkVmStatus();
  }
}

/**
 * Show toast notification
 */
function showToast(message: string, isError: boolean = false): void {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `vm-toast ${isError ? 'vm-toast-error' : 'vm-toast-success'}`;
  toast.textContent = message;

  // Add to DOM
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    addClass(toast, 'vm-toast-visible');
  });

  // Remove after delay
  setTimeout(() => {
    removeClass(toast, 'vm-toast-visible');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Initialize VM control buttons
 */
export function initVmControl(): void {
  const startBtn = getElementById<HTMLButtonElement>('vm-start-btn');
  const stopBtn = getElementById<HTMLButtonElement>('vm-stop-btn');
  const rebootBtn = getElementById<HTMLButtonElement>('vm-reboot-btn');

  if (!startBtn || !stopBtn || !rebootBtn) {
    return; // VM control not present on this page
  }

  // Bind click handlers
  startBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!isLoading && !startBtn.disabled) {
      await executeVmAction('start');
    }
  });

  stopBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!isLoading && !stopBtn.disabled) {
      await executeVmAction('stop');
    }
  });

  rebootBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!isLoading && !rebootBtn.disabled) {
      await executeVmAction('reboot');
    }
  });

  // Initial status check
  checkVmStatus();

  // Periodic status refresh (every 30 seconds)
  setInterval(checkVmStatus, 30000);
}
