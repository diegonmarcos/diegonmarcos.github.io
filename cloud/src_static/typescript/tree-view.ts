/**
 * Tree View functionality for Cloud Dashboard
 */

export function initViewToggle(): void {
    const viewButtons = document.querySelectorAll<HTMLButtonElement>('.view-btn');
    
    const views: Record<string, HTMLElement | null> = {
        'cards': document.getElementById('cards-view'),
        'tree': document.getElementById('tree-view'),
        'architecture': document.getElementById('architecture-view')
    };

    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewName = btn.dataset.view;
            if (!viewName) return;

            // Update button states
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Toggle views
            Object.keys(views).forEach(key => {
                const viewElement = views[key];
                if (viewElement) {
                    if (key === viewName) {
                        viewElement.classList.add('active');
                    } else {
                        viewElement.classList.remove('active');
                    }
                }
            });
        });
    });
}

export function initTreeExpand(): void {
    const expandableNodes = document.querySelectorAll<HTMLElement>('.tree-node[data-expanded]');

    expandableNodes.forEach(node => {
        const header = node.querySelector('.node-header');
        const expandIcon = node.querySelector('.expand-icon');
        // Get the next sibling that is a tree-children element
        const children = node.nextElementSibling;

        if (header && children?.classList.contains('tree-children')) {
            header.addEventListener('click', (e) => {
                e.stopPropagation();

                const isExpanded = node.dataset.expanded === 'true';

                if (isExpanded) {
                    // Collapse
                    node.dataset.expanded = 'false';
                    expandIcon?.classList.remove('expanded');
                    children.classList.remove('expanded');
                } else {
                    // Expand
                    node.dataset.expanded = 'true';
                    expandIcon?.classList.add('expanded');
                    children.classList.add('expanded');
                }
            });
        }
    });
}

export function initTreeServiceClick(): void {
    const serviceNodes = document.querySelectorAll<HTMLElement>('.tree-node.service-node.clickable');

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

export function expandAllTreeNodes(): void {
    const nodes = document.querySelectorAll<HTMLElement>('.tree-node[data-expanded]');
    nodes.forEach(node => {
        node.dataset.expanded = 'true';
        node.querySelector('.expand-icon')?.classList.add('expanded');
        const children = node.nextElementSibling;
        if (children?.classList.contains('tree-children')) {
            children.classList.add('expanded');
        }
    });
}

export function collapseAllTreeNodes(): void {
    const nodes = document.querySelectorAll<HTMLElement>('.tree-node[data-expanded]');
    nodes.forEach(node => {
        node.dataset.expanded = 'false';
        node.querySelector('.expand-icon')?.classList.remove('expanded');
        const children = node.nextElementSibling;
        if (children?.classList.contains('tree-children')) {
            children.classList.remove('expanded');
        }
    });
}

export function initTreeControls(): void {
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');

    expandAllBtn?.addEventListener('click', expandAllTreeNodes);
    collapseAllBtn?.addEventListener('click', collapseAllTreeNodes);
}
