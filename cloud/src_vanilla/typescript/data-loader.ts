/**
 * Data Loader Module
 * Handles loading infrastructure data from either:
 * - Local mode: Uses LOCAL_DATA from local-data.js (exported by cloud_dash.py --export js)
 * - API mode: Fetches from Flask backend API
 */

// Types for infrastructure data
export interface VMData {
    id: string;
    name: string;
    provider: string;
    category: string;
    instanceType: string;
    specs: {
        cpu: string;
        ram: string;
        storage: string;
    };
    network: {
        publicIp: string;
        privateIp?: string;
    };
    ssh: {
        user: string;
        command: string;
    };
    services: string[];
    status: string;
    runtimeStatus?: {
        online: boolean;
        ping: boolean;
        ssh: boolean;
        ramPercent?: number;
        lastCheck?: string;
    };
}

export interface ServiceData {
    id: string;
    name: string;
    vm: string;
    mode: string;
    proxyAddress?: string;
    publicUrl?: string;
    port?: number;
    status: string;
}

export interface InfrastructureData {
    version: string;
    lastUpdated: string;
    providers: Record<string, any>;
    vmCategories: Record<string, any>;
    virtualMachines: Record<string, VMData>;
    services: Record<string, ServiceData>;
    domains?: Record<string, any>;
    costs?: Record<string, any>;
}

// Data source mode
type DataMode = 'local' | 'api';

// Current mode (default to local if LOCAL_DATA exists)
let currentMode: DataMode = 'local';

// API base URL
const API_BASE = 'http://84.235.234.87:5000/api';

// Check if LOCAL_DATA is available
declare const LOCAL_DATA: InfrastructureData | undefined;
declare const LOCAL_DATA_TIMESTAMP: string | undefined;

/**
 * Check if local data is available
 */
export function hasLocalData(): boolean {
    return typeof LOCAL_DATA !== 'undefined' && LOCAL_DATA !== null;
}

/**
 * Get the current data mode
 */
export function getDataMode(): DataMode {
    return currentMode;
}

/**
 * Set the data mode
 */
export function setDataMode(mode: DataMode): void {
    currentMode = mode;
    console.log(`[DataLoader] Mode set to: ${mode}`);

    // Dispatch event for UI updates
    document.dispatchEvent(new CustomEvent('data-mode-changed', { detail: { mode } }));
}

/**
 * Toggle between local and API mode
 */
export function toggleDataMode(): DataMode {
    const newMode = currentMode === 'local' ? 'api' : 'local';
    setDataMode(newMode);
    return newMode;
}

/**
 * Get local data timestamp
 */
export function getLocalDataTimestamp(): string | null {
    if (typeof LOCAL_DATA_TIMESTAMP !== 'undefined') {
        return LOCAL_DATA_TIMESTAMP;
    }
    return null;
}

/**
 * Load infrastructure data based on current mode
 */
export async function loadInfrastructureData(): Promise<InfrastructureData | null> {
    if (currentMode === 'local') {
        return loadLocalData();
    } else {
        return loadApiData();
    }
}

/**
 * Load data from LOCAL_DATA constant
 */
function loadLocalData(): InfrastructureData | null {
    if (!hasLocalData()) {
        console.warn('[DataLoader] LOCAL_DATA not available');
        return null;
    }
    console.log('[DataLoader] Loading from LOCAL_DATA');
    return LOCAL_DATA as InfrastructureData;
}

/**
 * Load data from API
 */
async function loadApiData(): Promise<InfrastructureData | null> {
    try {
        console.log('[DataLoader] Loading from API');
        const response = await fetch(`${API_BASE}/config`);
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('[DataLoader] API fetch failed:', error);
        return null;
    }
}

/**
 * Get all VMs
 */
export async function getVMs(): Promise<VMData[]> {
    const data = await loadInfrastructureData();
    if (!data) return [];
    return Object.values(data.virtualMachines || {});
}

/**
 * Get all services
 */
export async function getServices(): Promise<ServiceData[]> {
    const data = await loadInfrastructureData();
    if (!data) return [];
    return Object.values(data.services || {});
}

/**
 * Get VM by ID
 */
export async function getVM(vmId: string): Promise<VMData | null> {
    const data = await loadInfrastructureData();
    if (!data) return null;
    return data.virtualMachines?.[vmId] || null;
}

/**
 * Get service by ID
 */
export async function getService(serviceId: string): Promise<ServiceData | null> {
    const data = await loadInfrastructureData();
    if (!data) return null;
    return data.services?.[serviceId] || null;
}

/**
 * Get VM runtime metrics (API only)
 */
export async function getVMMetrics(vmId: string): Promise<any | null> {
    if (currentMode === 'local') {
        // Return cached runtime status from local data
        const vm = await getVM(vmId);
        return vm?.runtimeStatus || null;
    }

    try {
        const response = await fetch(`${API_BASE}/vms/${vmId}/status`);
        if (!response.ok) return null;
        return await response.json();
    } catch {
        return null;
    }
}

/**
 * Initialize data loader
 */
export function initDataLoader(): void {
    // Default to local mode if LOCAL_DATA exists
    if (hasLocalData()) {
        currentMode = 'local';
        console.log('[DataLoader] Initialized with LOCAL_DATA');
    } else {
        currentMode = 'api';
        console.log('[DataLoader] LOCAL_DATA not found, using API mode');
    }
}

// Auto-initialize
initDataLoader();
