const THEME_STORAGE_KEY = 'cloud-dashboard-theme';
const DEFAULT_THEME = 'minimalistic';
export function getCurrentTheme() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'minimalistic' || stored === 'blurred') {
        return stored;
    }
    return DEFAULT_THEME;
}
export function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeLabel(theme);
}
export function toggleTheme() {
    const current = getCurrentTheme();
    const next = current === 'minimalistic' ? 'blurred' : 'minimalistic';
    setTheme(next);
}
function updateThemeLabel(theme) {
    const label = document.querySelector('.theme-label');
    if (label) {
        label.textContent = theme === 'minimalistic' ? 'Blurred' : 'Minimalistic';
    }
}
export function initThemeSwitcher() {
    // Apply saved theme on load
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);
    // Set up toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
}
//# sourceMappingURL=theme-switcher.js.map