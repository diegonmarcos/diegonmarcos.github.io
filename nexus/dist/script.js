/**
 * Nexus Holdings - Main TypeScript
 * Vanilla SPA with hash routing
 */
const validPages = ['landing', 'vc', 'advisory', 'consulting'];
// Modal content data
const modalContent = {
    strategy: {
        title: 'Strategy & Finance',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        description: 'We develop comprehensive business plans and financial models that withstand investor scrutiny. Our approach combines strategic thinking with rigorous quantitative analysis to create roadmaps that align stakeholders and guide execution.',
        services: [
            'Business Plan Development & Validation',
            'Financial Modeling & 3-Statement Projections',
            'Unit Economics & CAC/LTV Analysis',
            'Scenario Planning & Sensitivity Models',
            'Competitive Positioning & Market Sizing',
            'Strategic Roadmap Development'
        ],
        deliverables: [
            'Executive business plan with go-to-market strategy',
            'Integrated 5-year financial model',
            'Unit economics framework',
            'Investor-ready pitch deck',
            'Strategic milestone roadmap'
        ]
    },
    growth: {
        title: 'Growth & Sales',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop',
        description: 'We architect go-to-market strategies that accelerate revenue growth. Our frameworks are battle-tested across industries and growth stages, from early-stage startups to scale-ups preparing for exit.',
        services: [
            'Go-to-Market Strategy & Channel Selection',
            'Sales Process Design & Playbook Creation',
            'Pipeline Architecture & Forecasting',
            'Pricing Strategy & Revenue Optimization',
            'Sales Team Structure & Compensation Design',
            'Customer Success Framework'
        ],
        deliverables: [
            'GTM strategy with channel prioritization',
            'Sales playbook and process documentation',
            'Pipeline and forecasting model',
            'Pricing framework and strategy',
            'Sales compensation structure'
        ]
    },
    operations: {
        title: 'Operational Excellence',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop',
        description: 'We optimize back-office operations to create scalable, efficient organizations. Process improvement that drives bottom-line results while building organizational capacity for growth.',
        services: [
            'Organizational Design & Structure',
            'HR Strategy & Talent Architecture',
            'Process Mapping & Optimization',
            'Lean Operations & Six Sigma',
            'Risk Management Framework',
            'Compliance & Governance'
        ],
        deliverables: [
            'Operating model and org chart',
            'Process documentation and SOPs',
            'HR policies and procedures',
            'Risk register and mitigation plan',
            'Performance management system'
        ]
    },
    technology: {
        title: 'Data & Technology',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2634&auto=format&fit=crop',
        description: 'We architect technology ecosystems that enable data-driven decision making. From ERP selection to AI implementation, we build scalable infrastructure that grows with your business.',
        services: [
            'Technology Strategy & Roadmap',
            'ERP/CRM Selection & Implementation',
            'Data Architecture & Governance',
            'Business Intelligence & Analytics',
            'Process Automation & RPA',
            'AI/ML Integration Strategy'
        ],
        deliverables: [
            'Technology strategy and stack recommendation',
            'Vendor evaluation and selection framework',
            'Data architecture blueprint',
            'Analytics dashboard specifications',
            'Automation roadmap and ROI analysis'
        ]
    }
};
// Current state
let currentPage = 'landing';
let activeModal = null;
// DOM Elements
const header = document.getElementById('main-header');
const pages = document.querySelectorAll('.page');
const logoBtn = document.getElementById('logo-btn');
const mobileHomeBtn = document.getElementById('mobile-home-btn');
const navButtons = document.querySelectorAll('.nav-btn');
const pathCards = document.querySelectorAll('.path-card');
const serviceCards = document.querySelectorAll('.service-card');
// Modal elements
const serviceModal = document.getElementById('service-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalClose = document.getElementById('modal-close');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalImage = document.getElementById('modal-image');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalServices = document.getElementById('modal-services');
const modalDeliverables = document.getElementById('modal-deliverables');
/**
 * Get page from URL hash
 */
function getPageFromHash() {
    const hash = window.location.hash.slice(1);
    return validPages.includes(hash) ? hash : 'landing';
}
/**
 * Update header styles based on current page
 */
function updateHeader(page) {
    header.className = 'fixed top-0 w-full z-50 transition-all duration-300';
    switch (page) {
        case 'vc':
            header.classList.add('bg-[#0A0E27]/90', 'backdrop-blur', 'border-b', 'border-indigo-500/20');
            break;
        case 'advisory':
            header.classList.add('bg-[#0A1628]/90', 'backdrop-blur', 'border-b', 'border-advisory-gold/20');
            break;
        case 'consulting':
            header.classList.add('bg-[#1C1C1C]/90', 'backdrop-blur', 'border-b', 'border-emerald-500/20');
            break;
        default:
            header.classList.add('bg-transparent', 'text-white');
    }
}
/**
 * Switch to a specific page
 */
function switchToPage(page, pushState = true) {
    if (!validPages.includes(page))
        return;
    currentPage = page;
    // Hide all pages, show the selected one
    pages.forEach(p => {
        p.classList.remove('active');
    });
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    // Update header
    updateHeader(page);
    // Scroll to top
    window.scrollTo(0, 0);
    // Update URL hash
    if (pushState) {
        window.history.pushState({ page }, '', `#${page}`);
    }
}
/**
 * Open service modal
 */
function openModal(type) {
    if (!type || !modalContent[type])
        return;
    activeModal = type;
    const content = modalContent[type];
    // Set modal content
    modalImage.style.backgroundImage = `url('${content.image}')`;
    modalTitle.textContent = content.title;
    modalDescription.textContent = content.description;
    // Set services
    modalServices.innerHTML = content.services.map(service => `
        <div class="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256" class="text-emerald-400 flex-shrink-0 mt-1"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg>
            <p class="text-gray-200">${service}</p>
        </div>
    `).join('');
    // Set deliverables
    modalDeliverables.innerHTML = content.deliverables.map(deliverable => `
        <li class="flex items-center gap-3 text-gray-300">
            <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>${deliverable}</span>
        </li>
    `).join('');
    // Show modal
    serviceModal.classList.remove('hidden');
    serviceModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}
/**
 * Close service modal
 */
function closeModal() {
    activeModal = null;
    serviceModal.classList.add('hidden');
    serviceModal.classList.remove('flex');
    document.body.style.overflow = '';
}
/**
 * Initialize navigation
 */
function initNavigation() {
    // Logo click -> landing
    logoBtn?.addEventListener('click', () => switchToPage('landing'));
    mobileHomeBtn?.addEventListener('click', () => switchToPage('landing'));
    // Nav buttons
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            if (page)
                switchToPage(page);
        });
    });
    // Path cards on landing page
    pathCards.forEach(card => {
        card.addEventListener('click', () => {
            const page = card.dataset.page;
            if (page)
                switchToPage(page);
        });
    });
    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
        if (event.state?.page && validPages.includes(event.state.page)) {
            switchToPage(event.state.page, false);
        }
        else {
            switchToPage(getPageFromHash(), false);
        }
    });
}
/**
 * Initialize modals
 */
function initModals() {
    // Service cards open modal
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalType = card.dataset.modal;
            if (modalType)
                openModal(modalType);
        });
    });
    // Close modal buttons
    modalClose?.addEventListener('click', closeModal);
    modalCloseBtn?.addEventListener('click', closeModal);
    modalBackdrop?.addEventListener('click', closeModal);
    // Escape key closes modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeModal) {
            closeModal();
        }
    });
}
/**
 * Initialize app
 */
function init() {
    // Set initial page from hash
    const initialPage = getPageFromHash();
    switchToPage(initialPage, false);
    window.history.replaceState({ page: initialPage }, '', `#${initialPage}`);
    // Initialize components
    initNavigation();
    initModals();
}
// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
