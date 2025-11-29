/**
 * Tree View functionality for Cloud Dashboard
 */
const validViews = ['cards', 'tree', 'architecture', 'ai-architecture'];
function getViewFromHash() {
    const hash = window.location.hash.slice(1);
    return validViews.includes(hash) ? hash : 'cards';
}
function switchToView(viewName, pushState = true) {
    const viewButtons = document.querySelectorAll('.view-btn');
    const views = {
        'cards': document.getElementById('cards-view'),
        'tree': document.getElementById('tree-view'),
        'architecture': document.getElementById('architecture-view'),
        'ai-architecture': document.getElementById('ai-architecture-view')
    };
    // Update button states
    viewButtons.forEach(b => {
        if (b.dataset.view === viewName) {
            b.classList.add('active');
        }
        else {
            b.classList.remove('active');
        }
    });
    // Toggle views
    Object.keys(views).forEach(key => {
        const viewElement = views[key];
        if (viewElement) {
            if (key === viewName) {
                viewElement.classList.add('active');
            }
            else {
                viewElement.classList.remove('active');
            }
        }
    });
    // Update URL hash (push to history for back button support)
    if (pushState) {
        window.history.pushState({ view: viewName }, '', `#${viewName}`);
    }
}
export function initViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    // Set initial view from hash
    const initialView = getViewFromHash();
    switchToView(initialView, false);
    window.history.replaceState({ view: initialView }, '', `#${initialView}`);
    // Handle button clicks
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewName = btn.dataset.view;
            if (viewName && validViews.includes(viewName)) {
                switchToView(viewName);
            }
        });
    });
    // Handle browser back/forward buttons
    window.addEventListener('popstate', (event) => {
        var _a;
        if (((_a = event.state) === null || _a === void 0 ? void 0 : _a.view) && validViews.includes(event.state.view)) {
            switchToView(event.state.view, false);
        }
        else {
            switchToView(getViewFromHash(), false);
        }
    });
}
export function initTreeExpand() {
    const expandableNodes = document.querySelectorAll('.tree-node[data-expanded]');
    expandableNodes.forEach(node => {
        const header = node.querySelector('.node-header');
        const expandIcon = node.querySelector('.expand-icon');
        // Get the next sibling that is a tree-children element
        const children = node.nextElementSibling;
        if (header && (children === null || children === void 0 ? void 0 : children.classList.contains('tree-children'))) {
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = node.dataset.expanded === 'true';
                if (isExpanded) {
                    // Collapse
                    node.dataset.expanded = 'false';
                    expandIcon === null || expandIcon === void 0 ? void 0 : expandIcon.classList.remove('expanded');
                    children.classList.remove('expanded');
                }
                else {
                    // Expand
                    node.dataset.expanded = 'true';
                    expandIcon === null || expandIcon === void 0 ? void 0 : expandIcon.classList.add('expanded');
                    children.classList.add('expanded');
                }
            });
        }
    });
}
export function initTreeServiceClick() {
    const serviceNodes = document.querySelectorAll('.tree-node.service-node.clickable');
    serviceNodes.forEach(node => {
        node.addEventListener('click', () => {
            const service = node.dataset.service;
            if (service) {
                // Trigger the same click handler as cards
                const event = new CustomEvent('service-click', { detail: { service } });
                document.dispatchEvent(event);
            }
        });
    });
}
export function expandAllTreeNodes() {
    const nodes = document.querySelectorAll('.tree-node[data-expanded]');
    nodes.forEach(node => {
        var _a;
        node.dataset.expanded = 'true';
        (_a = node.querySelector('.expand-icon')) === null || _a === void 0 ? void 0 : _a.classList.add('expanded');
        const children = node.nextElementSibling;
        if (children === null || children === void 0 ? void 0 : children.classList.contains('tree-children')) {
            children.classList.add('expanded');
        }
    });
}
export function collapseAllTreeNodes() {
    const nodes = document.querySelectorAll('.tree-node[data-expanded]');
    nodes.forEach(node => {
        var _a;
        node.dataset.expanded = 'false';
        (_a = node.querySelector('.expand-icon')) === null || _a === void 0 ? void 0 : _a.classList.remove('expanded');
        const children = node.nextElementSibling;
        if (children === null || children === void 0 ? void 0 : children.classList.contains('tree-children')) {
            children.classList.remove('expanded');
        }
    });
}
export function initTreeControls() {
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    expandAllBtn === null || expandAllBtn === void 0 ? void 0 : expandAllBtn.addEventListener('click', expandAllTreeNodes);
    collapseAllBtn === null || collapseAllBtn === void 0 ? void 0 : collapseAllBtn.addEventListener('click', collapseAllTreeNodes);
}
//# sourceMappingURL=tree-view.js.map