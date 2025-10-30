document.addEventListener('DOMContentLoaded', () => {

    const cookieConsentBanner = document.getElementById('cookie-consent-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');

    // Function to set a cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to handle cookie consent
    function handleCookieConsent() {
        const consent = getCookie('cookie_consent');

        if (consent === 'accepted') {
            // Cookies accepted, hide banner and potentially fire GTM events
            cookieConsentBanner.style.display = 'none';
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        } else if (consent === 'declined') {
            // Cookies declined, hide banner and ensure GTM doesn't fire tracking cookies
            cookieConsentBanner.style.display = 'none';
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });
        } else {
            // No consent yet, show banner
            cookieConsentBanner.style.display = 'flex';
        }
    }

    // Event listeners for consent buttons
    acceptCookiesBtn.addEventListener('click', () => {
        setCookie('cookie_consent', 'accepted', 365);
        handleCookieConsent();
        // Reload the page to ensure GTM re-evaluates consent
        location.reload();
    });

    declineCookiesBtn.addEventListener('click', () => {
        setCookie('cookie_consent', 'declined', 365);
        handleCookieConsent();
        // Reload the page to ensure GTM re-evaluates consent
        location.reload();
    });

    // Initial check for cookie consent
    handleCookieConsent();

    const videos = [
        'assets/videos/background.mp4',
        'assets/videos/background2.mp4',
        'assets/videos/background3.mp4',
        'assets/videos/background4.mp4'
    ];

    const videoElement = document.getElementById('background-video');
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    videoElement.src = randomVideo;

    const sections = document.querySelectorAll('.link-section');

    sections.forEach(section => {
        const title = section.querySelector('.section-title');
        const links = section.querySelector('.links-container');

        title.addEventListener('click', () => {
            if (links.style.display === 'block' || links.style.display === '') {
                links.style.display = 'none';
            } else {
                links.style.display = 'block';
            }
        });
    });

    const linkIcons = document.querySelectorAll('.link .icon');
    const linkPreview = document.getElementById('link-preview');
    const previewToggle = document.getElementById('preview-toggle');

    let previewsEnabled = localStorage.getItem('previewsEnabled') === 'true';
    previewToggle.checked = previewsEnabled;

    const togglePreviews = () => {
        previewsEnabled = previewToggle.checked;
        localStorage.setItem('previewsEnabled', previewsEnabled);
    };

    previewToggle.addEventListener('change', togglePreviews);

    if (window.innerWidth > 768) {
        linkIcons.forEach(icon => {
            icon.addEventListener('mouseover', (e) => {
                if (!previewsEnabled) return;
                const link = e.target.parentElement;
                const previewUrl = link.getAttribute('data-preview');
                if (previewUrl) {
                    linkPreview.style.backgroundImage = `url(${previewUrl})`;
                    linkPreview.style.display = 'block';
                }
            });

            icon.addEventListener('mousemove', (e) => {
                if (!previewsEnabled) return;
                linkPreview.style.left = `${e.pageX + 10}px`;
                linkPreview.style.top = `${e.pageY + 10}px`;
            });

            icon.addEventListener('mouseout', () => {
                linkPreview.style.display = 'none';
            });
        });
    }
});
