/**
 * Universal Cookie Consent Manager
 * Full-screen consent banner with granular controls
 * Integrates with GTM consent mode
 */

(function() {
    'use strict';

    const COOKIE_NAME = 'cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;

    // Check if consent already given
    if (getCookie(COOKIE_NAME)) {
        // Consent already exists, update GTM consent mode
        const consent = JSON.parse(getCookie(COOKIE_NAME));
        updateGTMConsent(consent);
        return;
    }

    // Inject consent banner HTML
    injectConsentBanner();

    // Setup event listeners
    setupEventListeners();

    function injectConsentBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-overlay';
        banner.innerHTML = `
            <div class="cookie-consent-container">
                <div class="cookie-consent-content">
                    <h2 class="cookie-consent-title">🍪 Cookie Preferences</h2>
                    <p class="cookie-consent-description">
                        We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content.
                        Your privacy matters to us.
                    </p>

                    <!-- Main View -->
                    <div id="consent-main-view" class="consent-view active">
                        <div class="consent-buttons">
                            <button id="consent-ok-btn" class="consent-btn consent-btn-primary">
                                ✓ OK, I Accept
                            </button>
                            <button id="consent-options-btn" class="consent-btn consent-btn-secondary">
                                ⚙ Options
                            </button>
                        </div>
                    </div>

                    <!-- Options View -->
                    <div id="consent-options-view" class="consent-view">
                        <div class="consent-options-list">
                            <!-- Necessary Cookies -->
                            <div class="consent-option">
                                <div class="consent-option-header">
                                    <div class="consent-option-info">
                                        <h3>Necessary Cookies</h3>
                                        <p>Essential for the website to function properly</p>
                                    </div>
                                    <div class="consent-toggle">
                                        <input type="checkbox" id="consent-necessary" checked disabled>
                                        <label for="consent-necessary" class="toggle-label disabled">
                                            <span class="toggle-switch"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- Analytics Cookies -->
                            <div class="consent-option">
                                <div class="consent-option-header">
                                    <div class="consent-option-info">
                                        <h3>Analytics Cookies</h3>
                                        <p>Help us understand how visitors interact with our website</p>
                                    </div>
                                    <div class="consent-toggle">
                                        <input type="checkbox" id="consent-analytics" checked>
                                        <label for="consent-analytics" class="toggle-label">
                                            <span class="toggle-switch"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- Marketing Cookies -->
                            <div class="consent-option">
                                <div class="consent-option-header">
                                    <div class="consent-option-info">
                                        <h3>Marketing Cookies</h3>
                                        <p>Used to track visitors across websites for advertising purposes</p>
                                    </div>
                                    <div class="consent-toggle">
                                        <input type="checkbox" id="consent-marketing">
                                        <label for="consent-marketing" class="toggle-label">
                                            <span class="toggle-switch"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="consent-buttons">
                            <button id="consent-save-btn" class="consent-btn consent-btn-primary">
                                ✓ Save Preferences
                            </button>
                            <button id="consent-back-btn" class="consent-btn consent-btn-secondary">
                                ← Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
    }

    function setupEventListeners() {
        // OK button - Accept all
        document.getElementById('consent-ok-btn').addEventListener('click', function() {
            acceptAll();
        });

        // Options button - Show options view
        document.getElementById('consent-options-btn').addEventListener('click', function() {
            showOptionsView();
        });

        // Back button - Return to main view
        document.getElementById('consent-back-btn').addEventListener('click', function() {
            showMainView();
        });

        // Save button - Save preferences
        document.getElementById('consent-save-btn').addEventListener('click', function() {
            savePreferences();
        });
    }

    function acceptAll() {
        const consent = {
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString()
        };
        saveConsent(consent);
        hideBanner();
        updateGTMConsent(consent);
    }

    function savePreferences() {
        const consent = {
            necessary: true, // Always true
            analytics: document.getElementById('consent-analytics').checked,
            marketing: document.getElementById('consent-marketing').checked,
            timestamp: new Date().toISOString()
        };
        saveConsent(consent);
        hideBanner();
        updateGTMConsent(consent);
    }

    function showOptionsView() {
        document.getElementById('consent-main-view').classList.remove('active');
        document.getElementById('consent-options-view').classList.add('active');
    }

    function showMainView() {
        document.getElementById('consent-options-view').classList.remove('active');
        document.getElementById('consent-main-view').classList.add('active');
    }

    function saveConsent(consent) {
        const cookieValue = JSON.stringify(consent);
        const expiryDate = new Date();
        expiryDate.setTime(expiryDate.getTime() + (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
        document.cookie = COOKIE_NAME + '=' + cookieValue + ';expires=' + expiryDate.toUTCString() + ';path=/;SameSite=Lax';
    }

    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function hideBanner() {
        const banner = document.getElementById('cookie-consent-overlay');
        if (banner) {
            banner.style.opacity = '0';
            setTimeout(function() {
                banner.remove();
            }, 300);
        }
    }

    function updateGTMConsent(consent) {
        // Update GTM consent mode
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'ad_storage': consent.marketing ? 'granted' : 'denied',
                'analytics_storage': consent.analytics ? 'granted' : 'denied',
                'ad_personalization': consent.marketing ? 'granted' : 'denied',
                'ad_user_data': consent.marketing ? 'granted' : 'denied'
            });
        }

        // Also update Matomo if present
        if (typeof window.MATOMO_CONFIG !== 'undefined' && window.MATOMO_CONFIG.enabled) {
            window.MATOMO_CONFIG.enabled = consent.analytics;
        }

        console.log('✅ Consent updated:', consent);
    }

})();
