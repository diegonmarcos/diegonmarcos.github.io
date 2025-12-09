/**
 * Admin Actions Module
 * OAuth2-protected infrastructure management actions
 * Requires GitHub authentication to perform admin operations
 */

import { showNotification } from './notification';
import { getDataMode } from './data-loader';

// API Base URL
const API_BASE = 'http://34.55.55.234:5000/api';

// GitHub OAuth2 constants
const GITHUB_CLIENT_ID = 'Ov23liQPvqLvZgQQrI7C';
const GITHUB_REDIRECT_URI = window.location.origin + '/cloud/oauth-callback.html';
const GITHUB_ALLOWED_USERS = ['diegonmarcos'];

// Auth storage keys (matches backend cloud_dash.py)
const AUTH_TOKEN_KEY = 'github_token';
const AUTH_USER_KEY = 'github_user';

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
    return !!localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * Get current user info
 */
export function getCurrentUser(): { login: string; avatar_url: string } | null {
    const userData = localStorage.getItem(AUTH_USER_KEY);
    if (!userData) return null;
    try {
        return JSON.parse(userData);
    } catch {
        return null;
    }
}

/**
 * Get access token
 */
function getAccessToken(): string | null {
    return localStorage.getItem(AUTH_TOKEN_KEY);
}

/**
 * Check if user is authorized (authenticated + in allowed list)
 */
export function isAuthorized(): boolean {
    const user = getCurrentUser();
    return user !== null && GITHUB_ALLOWED_USERS.includes(user.login);
}

/**
 * Initiate GitHub OAuth2 login
 */
export function initiateLogin(): void {
    const state = Math.random().toString(36).substring(2);
    sessionStorage.setItem('oauth_state', state);

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(GITHUB_REDIRECT_URI)}&scope=read:user&state=${state}`;
    window.location.href = authUrl;
}

/**
 * Logout and clear auth data
 */
export function logout(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    document.dispatchEvent(new CustomEvent('auth-changed'));
    showNotification('Logged out');
}

/**
 * Make authenticated API request
 */
async function apiRequest(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const token = getAccessToken();
    if (!token) {
        throw new Error('Not authenticated');
    }

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...options.headers
    };

    return fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers
    });
}

/**
 * Container actions
 */
export async function stopContainer(vmId: string, container: string): Promise<boolean> {
    if (getDataMode() === 'local') {
        showNotification('Cannot stop containers in Local mode. Switch to API mode.');
        return false;
    }

    try {
        showNotification(`Stopping ${container}...`);
        const response = await apiRequest(`/vm/${vmId}/container/${container}/stop`, { method: 'POST' });
        const data = await response.json();

        if (response.ok) {
            showNotification(`Container ${container} stopped`);
            document.dispatchEvent(new CustomEvent('container-state-changed', { detail: { vmId, container, state: 'stopped' } }));
            return true;
        } else {
            showNotification(data.error || 'Failed to stop container');
            return false;
        }
    } catch (error) {
        showNotification('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        return false;
    }
}

export async function startContainer(vmId: string, container: string): Promise<boolean> {
    if (getDataMode() === 'local') {
        showNotification('Cannot start containers in Local mode. Switch to API mode.');
        return false;
    }

    try {
        showNotification(`Starting ${container}...`);
        const response = await apiRequest(`/vm/${vmId}/container/${container}/start`, { method: 'POST' });
        const data = await response.json();

        if (response.ok) {
            showNotification(`Container ${container} started`);
            document.dispatchEvent(new CustomEvent('container-state-changed', { detail: { vmId, container, state: 'running' } }));
            return true;
        } else {
            showNotification(data.error || 'Failed to start container');
            return false;
        }
    } catch (error) {
        showNotification('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        return false;
    }
}

export async function restartContainer(vmId: string, container: string): Promise<boolean> {
    if (getDataMode() === 'local') {
        showNotification('Cannot restart containers in Local mode. Switch to API mode.');
        return false;
    }

    try {
        showNotification(`Restarting ${container}...`);
        const response = await apiRequest(`/vm/${vmId}/container/${container}/restart`, { method: 'POST' });
        const data = await response.json();

        if (response.ok) {
            showNotification(`Container ${container} restarted`);
            document.dispatchEvent(new CustomEvent('container-state-changed', { detail: { vmId, container, state: 'running' } }));
            return true;
        } else {
            showNotification(data.error || 'Failed to restart container');
            return false;
        }
    } catch (error) {
        showNotification('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        return false;
    }
}

export async function updateContainer(vmId: string, container: string): Promise<boolean> {
    if (getDataMode() === 'local') {
        showNotification('Cannot update containers in Local mode. Switch to API mode.');
        return false;
    }

    try {
        showNotification(`Updating ${container}... (pulling new image)`);
        const response = await apiRequest(`/vm/${vmId}/container/${container}/update`, { method: 'POST' });
        const data = await response.json();

        if (response.ok) {
            showNotification(`Container ${container} updated`);
            return true;
        } else {
            showNotification(data.error || 'Failed to update container');
            return false;
        }
    } catch (error) {
        showNotification('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        return false;
    }
}

/**
 * Get container logs
 */
export async function getContainerLogs(vmId: string, container: string, lines: number = 100): Promise<string | null> {
    try {
        // Logs endpoint doesn't require auth
        const response = await fetch(`${API_BASE}/vm/${vmId}/container/${container}/logs?lines=${lines}`);
        const data = await response.json();

        if (response.ok) {
            return data.logs;
        } else {
            showNotification(data.error || 'Failed to get logs');
            return null;
        }
    } catch (error) {
        showNotification('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        return null;
    }
}

/**
 * Service deployment
 */
export async function deployService(serviceId: string): Promise<boolean> {
    if (getDataMode() === 'local') {
        showNotification('Cannot deploy in Local mode. Switch to API mode.');
        return false;
    }

    try {
        showNotification(`Deploying ${serviceId}...`);
        const response = await apiRequest(`/service/${serviceId}/deploy`, { method: 'POST' });
        const data = await response.json();

        if (response.ok) {
            showNotification(`Service ${serviceId} deployment started`);
            return true;
        } else {
            showNotification(data.error || 'Failed to deploy service');
            return false;
        }
    } catch (error) {
        showNotification('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        return false;
    }
}

/**
 * VM backup
 */
export async function backupVM(vmId: string): Promise<boolean> {
    if (getDataMode() === 'local') {
        showNotification('Cannot backup in Local mode. Switch to API mode.');
        return false;
    }

    try {
        showNotification(`Starting backup for ${vmId}...`);
        const response = await apiRequest(`/vm/${vmId}/backup`, { method: 'POST' });
        const data = await response.json();

        if (response.ok) {
            showNotification(`Backup completed: ${data.backup_dir}`);
            return true;
        } else {
            showNotification(data.error || 'Failed to backup');
            return false;
        }
    } catch (error) {
        showNotification('Error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        return false;
    }
}

/**
 * Show logs modal
 */
export function showLogsModal(vmId: string, container: string): void {
    const overlay = document.createElement('div');
    overlay.className = 'ssh-modal-overlay logs-modal-overlay';
    overlay.innerHTML = `
        <div class="ssh-modal logs-modal">
            <h3>Logs: ${container}</h3>
            <div class="logs-controls">
                <select id="logs-lines">
                    <option value="50">50 lines</option>
                    <option value="100" selected>100 lines</option>
                    <option value="200">200 lines</option>
                    <option value="500">500 lines</option>
                </select>
                <button class="refresh-logs-btn" data-action="refresh">Refresh</button>
            </div>
            <pre class="logs-content">Loading...</pre>
            <button class="close-modal-btn" data-action="close">Close</button>
        </div>
    `;

    const logsContent = overlay.querySelector('.logs-content') as HTMLPreElement;
    const linesSelect = overlay.querySelector('#logs-lines') as HTMLSelectElement;

    const loadLogs = async () => {
        logsContent.textContent = 'Loading...';
        const logs = await getContainerLogs(vmId, container, parseInt(linesSelect.value));
        logsContent.textContent = logs || 'No logs available';
    };

    overlay.addEventListener('click', (e) => {
        const action = (e.target as HTMLElement).dataset.action;
        if (e.target === overlay || action === 'close') {
            overlay.remove();
        } else if (action === 'refresh') {
            loadLogs();
        }
    });

    linesSelect.addEventListener('change', loadLogs);

    document.body.appendChild(overlay);
    loadLogs();
}

/**
 * Create admin action buttons for a container
 */
export function createContainerAdminButtons(vmId: string, container: string): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'admin-actions';
    wrapper.dataset.vmId = vmId;
    wrapper.dataset.container = container;

    if (!isAuthorized()) {
        wrapper.classList.add('disabled');
    }

    wrapper.innerHTML = `
        <button class="admin-btn btn-logs" data-action="logs" title="View Logs">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </button>
        <button class="admin-btn btn-restart" data-action="restart" title="Restart Container">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        </button>
        <button class="admin-btn btn-stop" data-action="stop" title="Stop Container">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="6" width="12" height="12"/></svg>
        </button>
        <button class="admin-btn btn-start" data-action="start" title="Start Container">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
        <button class="admin-btn btn-update" data-action="update" title="Update Container">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </button>
    `;

    wrapper.addEventListener('click', async (e) => {
        e.stopPropagation();
        const btn = (e.target as HTMLElement).closest('.admin-btn') as HTMLButtonElement;
        if (!btn) return;

        const action = btn.dataset.action;

        if (!isAuthorized() && action !== 'logs') {
            showNotification('Login required for admin actions');
            initiateLogin();
            return;
        }

        switch (action) {
            case 'logs':
                showLogsModal(vmId, container);
                break;
            case 'restart':
                await restartContainer(vmId, container);
                break;
            case 'stop':
                await stopContainer(vmId, container);
                break;
            case 'start':
                await startContainer(vmId, container);
                break;
            case 'update':
                if (confirm(`Update container ${container}? This will pull the latest image and restart.`)) {
                    await updateContainer(vmId, container);
                }
                break;
        }
    });

    return wrapper;
}

/**
 * Create login/logout button
 */
export function createAuthButton(): HTMLElement {
    const btn = document.createElement('button');
    btn.className = 'auth-btn';

    const updateButton = () => {
        const user = getCurrentUser();
        if (user) {
            btn.innerHTML = `
                <img src="${user.avatar_url}" alt="${user.login}" class="auth-avatar">
                <span>${user.login}</span>
            `;
            btn.classList.add('authenticated');
            btn.title = 'Click to logout';
        } else {
            btn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                <span>Login</span>
            `;
            btn.classList.remove('authenticated');
            btn.title = 'Login with GitHub to enable admin actions';
        }
    };

    btn.addEventListener('click', () => {
        if (isAuthenticated()) {
            logout();
        } else {
            initiateLogin();
        }
    });

    document.addEventListener('auth-changed', updateButton);
    updateButton();

    return btn;
}

/**
 * Update admin buttons visibility based on auth state
 */
export function updateAdminButtonsState(): void {
    const authorized = isAuthorized();
    document.querySelectorAll('.admin-actions').forEach(el => {
        if (authorized) {
            el.classList.remove('disabled');
        } else {
            el.classList.add('disabled');
        }
    });
}

/**
 * Initialize admin module
 */
export function initAdminActions(): void {
    // Listen for auth changes
    document.addEventListener('auth-changed', updateAdminButtonsState);

    // Initial state
    updateAdminButtonsState();

    console.log('[AdminActions] Initialized, authorized:', isAuthorized());
}
