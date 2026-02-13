const CLOUD_API = 'https://api.diegonmarcos.com';
const VM_LABEL = 'oci-flex';

let vmId: string | null = null;
let vmStatusUrl: string | null = null;
let vmStartUrl: string | null = null;
let vmStopUrl: string | null = null;
let vmResetUrl: string | null = null;

let startBtn: HTMLButtonElement | null = null;
let stopBtn: HTMLButtonElement | null = null;
let resetBtn: HTMLButtonElement | null = null;
let wakeStatus: HTMLElement | null = null;
let statusDot: HTMLElement | null = null;
let statusText: HTMLElement | null = null;

interface VmDiscoveryResponse {
  vms?: Record<string, { label?: string }>;
}

interface VmHealthResponse {
  provider_state?: string;
  health?: string;
  ping?: boolean;
}

async function discoverVmId(): Promise<string | null> {
  if (vmId) return vmId;
  try {
    const res = await fetch(`${CLOUD_API}/rust/health/ids`, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const data: VmDiscoveryResponse = await res.json();
    for (const [id, vm] of Object.entries(data.vms || {})) {
      if (vm.label === VM_LABEL) {
        vmId = id;
        vmStatusUrl = `${CLOUD_API}/rust/health/${id}`;
        vmStartUrl = `${CLOUD_API}/rust/vms/${id}/start`;
        vmStopUrl = `${CLOUD_API}/rust/vms/${id}/stop`;
        vmResetUrl = `${CLOUD_API}/rust/vms/${id}/reset`;
        return id;
      }
    }
  } catch (e) {
    console.log('VM discovery failed:', (e as Error).message);
  }
  return null;
}

function updateStatusIndicator(state: string, message?: string): void {
  if (!statusDot || !statusText) return;

  statusDot.className = 'status-dot';
  if (state === 'RUNNING') {
    statusDot.classList.add('online');
    statusText.textContent = message || 'Server Online';
  } else if (state === 'STOPPED' || state === 'STOPPING') {
    statusDot.classList.add('offline');
    statusText.textContent = message || 'Server Offline (Sleeping)';
  } else if (state === 'STARTING') {
    statusDot.classList.add('checking');
    statusText.textContent = message || 'Server Starting...';
  } else {
    statusDot.classList.add('checking');
    statusText.textContent = message || 'Checking...';
  }
}

function updateButtonStates(vmState: string): void {
  if (!startBtn || !stopBtn || !resetBtn) return;

  // Reset is always available — API handles both running (SOFTRESET) and stopped (START)
  resetBtn.disabled = false;

  if (vmState === 'running') {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } else if (vmState === 'stopped') {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  } else {
    startBtn.disabled = true;
    stopBtn.disabled = true;
  }
}

async function checkServerStatus(): Promise<void> {
  try {
    await discoverVmId();
    if (!vmStatusUrl) throw new Error('VM not discovered');
    const statusResponse = await fetch(vmStatusUrl, {
      method: 'GET',
      signal: AbortSignal.timeout(8000)
    });

    if (statusResponse.ok) {
      const data: VmHealthResponse = await statusResponse.json();
      const vmState = data.provider_state;

      if (data.health === 'online' || data.ping === true) {
        updateStatusIndicator('RUNNING', 'Server Online');
        updateButtonStates('running');
        if (wakeStatus) wakeStatus.textContent = '';
      } else if (vmState === 'STARTING') {
        updateStatusIndicator('STARTING', 'Server Starting...');
        updateButtonStates('loading');
        if (wakeStatus) wakeStatus.textContent = 'VM is starting up...';
      } else if (vmState === 'RUNNING') {
        updateStatusIndicator('STOPPED', 'Server Degraded (Not Responding)');
        updateButtonStates('running');
        if (wakeStatus) wakeStatus.textContent = 'Server is running but not responding. Try Reset.';
      } else {
        updateStatusIndicator('STOPPED', 'Server Offline (Sleeping)');
        updateButtonStates('stopped');
        if (wakeStatus) wakeStatus.textContent = 'Drive server is sleeping.';
      }
    } else {
      throw new Error('API unavailable');
    }
  } catch (error) {
    console.log('Status check error:', (error as Error).message);
    updateStatusIndicator('STOPPED', 'Status Unknown');
    updateButtonStates('stopped');
    if (wakeStatus) wakeStatus.textContent = 'Could not check server status.';
  }
}

async function vmAction(action: 'start' | 'stop' | 'reset'): Promise<void> {
  if (!vmId) await discoverVmId();
  if (!vmId) {
    if (wakeStatus) wakeStatus.textContent = 'VM not discovered — retrying...';
    await discoverVmId();
  }
  if (!vmId) {
    if (wakeStatus) wakeStatus.textContent = 'Could not discover VM. Check API connectivity.';
    return;
  }

  const urls: Record<string, string | null> = { start: vmStartUrl, stop: vmStopUrl, reset: vmResetUrl };
  const url = urls[action];
  if (!url) return;

  updateButtonStates('loading');
  if (wakeStatus) wakeStatus.textContent = `Sending ${action} command...`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const messages: Record<string, string> = { start: 'VM starting...', stop: 'VM stopping...', reset: 'VM resetting...' };
      if (wakeStatus) wakeStatus.textContent = messages[action];
      updateStatusIndicator(action === 'stop' ? 'STOPPING' : 'STARTING');

      setTimeout(() => checkServerStatus(), 10000);
      setTimeout(() => checkServerStatus(), 30000);
      setTimeout(() => checkServerStatus(), 60000);
    } else {
      const errorData = await response.json().catch(() => ({}));
      if (wakeStatus) wakeStatus.textContent = (errorData as { message?: string }).message || `${action} failed`;
      await checkServerStatus();
    }
  } catch {
    if (wakeStatus) wakeStatus.textContent = 'Could not reach API.';
    await checkServerStatus();
  }
}

export function initVmControl(): void {
  startBtn = document.getElementById('vm-start-btn') as HTMLButtonElement | null;
  stopBtn = document.getElementById('vm-stop-btn') as HTMLButtonElement | null;
  resetBtn = document.getElementById('vm-reset-btn') as HTMLButtonElement | null;
  wakeStatus = document.getElementById('wake-status');
  statusDot = document.getElementById('status-dot');
  statusText = document.getElementById('status-text');

  // Wire up button click handlers
  if (startBtn) startBtn.addEventListener('click', () => vmAction('start'));
  if (stopBtn) stopBtn.addEventListener('click', () => vmAction('stop'));
  if (resetBtn) resetBtn.addEventListener('click', () => vmAction('reset'));

  // Initial check and polling
  checkServerStatus();
  setInterval(checkServerStatus, 30000);
}
