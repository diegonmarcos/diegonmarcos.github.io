// FAB Debug Module - Catch any changes to FAB elements on mobile
// Only runs on mobile devices to detect what's causing movement

interface DebugLog {
  timestamp: number;
  element: string;
  property: string;
  oldValue: string | null;
  newValue: string | null;
  stackTrace: string;
}

const debugLogs: DebugLog[] = [];
let observersActive = false;

/**
 * Detect if device is mobile
 */
function isMobileDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;
}

/**
 * Get stack trace (clean version without debug code itself)
 */
function getStackTrace(): string {
  const stack = new Error().stack || '';
  const lines = stack.split('\n');
  // Remove first 3 lines (Error, getStackTrace, logChange)
  const relevantLines = lines.slice(3, 8);
  return relevantLines.join('\n    ');
}

/**
 * Log a change to FAB element
 */
function logChange(
  element: HTMLElement,
  property: string,
  oldValue: string | null,
  newValue: string | null
): void {
  const log: DebugLog = {
    timestamp: performance.now(),
    element: element.id || element.className,
    property,
    oldValue,
    newValue,
    stackTrace: getStackTrace(),
  };

  debugLogs.push(log);

  // Console log with color coding
  const color = property.includes('transform') || property.includes('transition') || property.includes('animation')
    ? '#ff4444' // Red for transforms/animations
    : property.includes('opacity')
    ? '#ff9944' // Orange for opacity
    : property.includes('position') || property.includes('top') || property.includes('left') || property.includes('right') || property.includes('bottom')
    ? '#ffdd44' // Yellow for position
    : '#44ff44'; // Green for other

  console.group(`%c[FAB DEBUG] ${property} changed on ${element.id || element.className}`, `color: ${color}; font-weight: bold;`);
  console.log('%cOld Value:', 'color: #999;', oldValue);
  console.log('%cNew Value:', 'color: #4af;', newValue);
  console.log('%cStack Trace:', 'color: #f9f;');
  console.log(log.stackTrace);
  console.log('%cTime:', 'color: #999;', `${log.timestamp.toFixed(2)}ms since page load`);
  console.groupEnd();

  // Alert if dangerous properties are being set
  if (property === 'transition' && newValue !== 'none') {
    console.error(`%c⚠️ WARNING: FAB transition being set to "${newValue}" instead of "none"!`, 'color: red; font-size: 14px; font-weight: bold;');
  }
  if (property === 'transform' && newValue !== 'none' && newValue !== '') {
    console.error(`%c⚠️ WARNING: FAB transform being set to "${newValue}"!`, 'color: red; font-size: 14px; font-weight: bold;');
  }
  if (property === 'animation' && newValue !== 'none' && newValue !== '') {
    console.error(`%c⚠️ WARNING: FAB animation being set to "${newValue}"!`, 'color: red; font-size: 14px; font-weight: bold;');
  }
}

/**
 * Create proxy for style object to catch all style changes
 */
function wrapStyleProxy(element: HTMLElement): void {
  const originalStyle = element.style;
  const styleHandler: ProxyHandler<CSSStyleDeclaration> = {
    set(target, property, value) {
      const prop = String(property);
      const oldValue = target.getPropertyValue(prop);

      // Log the change
      logChange(element, prop, oldValue, String(value));

      // Set the actual value
      Reflect.set(target, property, value);
      return true;
    },
  };

  // Create proxy
  const proxiedStyle = new Proxy(originalStyle, styleHandler);

  // Replace element.style with proxy
  Object.defineProperty(element, 'style', {
    get: () => proxiedStyle,
    set: (newStyle) => {
      console.warn('[FAB DEBUG] Entire style object being replaced!', newStyle);
      Object.assign(originalStyle, newStyle);
    },
  });
}

/**
 * Monitor computed style changes
 */
function monitorComputedStyle(element: HTMLElement): void {
  const watchedProperties = [
    'position', 'top', 'right', 'bottom', 'left',
    'transform', 'transition', 'animation',
    'opacity', 'visibility', 'display',
    'width', 'height',
    'margin', 'padding',
  ];

  const initialValues = new Map<string, string>();
  watchedProperties.forEach(prop => {
    initialValues.set(prop, window.getComputedStyle(element).getPropertyValue(prop));
  });

  // Check for changes every 100ms
  setInterval(() => {
    const computedStyle = window.getComputedStyle(element);
    watchedProperties.forEach(prop => {
      const currentValue = computedStyle.getPropertyValue(prop);
      const oldValue = initialValues.get(prop);

      if (currentValue !== oldValue) {
        console.warn(`[FAB DEBUG] Computed style "${prop}" changed via CSS!`, {
          element: element.id || element.className,
          oldValue,
          newValue: currentValue,
        });
        initialValues.set(prop, currentValue);
      }
    });
  }, 100);
}

/**
 * Monitor attribute changes with MutationObserver
 */
function monitorAttributeChanges(element: HTMLElement): void {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        const attributeName = mutation.attributeName;
        if (!attributeName) return;

        const oldValue = mutation.oldValue;
        const newValue = element.getAttribute(attributeName);

        logChange(element, `attribute:${attributeName}`, oldValue, newValue);
      }
    });
  });

  observer.observe(element, {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['class', 'style', 'data-fab'],
  });
}

/**
 * Monitor classList changes
 */
function monitorClassList(element: HTMLElement): void {
  const originalAdd = element.classList.add.bind(element.classList);
  const originalRemove = element.classList.remove.bind(element.classList);
  const originalToggle = element.classList.toggle.bind(element.classList);

  element.classList.add = function(...classes: string[]) {
    console.log(`[FAB DEBUG] classList.add(${classes.join(', ')}) on ${element.id || element.className}`);
    logChange(element, 'classList.add', element.className, element.className + ' ' + classes.join(' '));
    return originalAdd(...classes);
  };

  element.classList.remove = function(...classes: string[]) {
    console.log(`[FAB DEBUG] classList.remove(${classes.join(', ')}) on ${element.id || element.className}`);
    logChange(element, 'classList.remove', element.className, element.className.replace(classes.join(' '), ''));
    return originalRemove(...classes);
  };

  element.classList.toggle = function(className: string, force?: boolean) {
    console.log(`[FAB DEBUG] classList.toggle(${className}, ${force}) on ${element.id || element.className}`);
    logChange(element, 'classList.toggle', element.className, '(toggled)');
    return originalToggle(className, force);
  };
}

/**
 * Monitor getBoundingClientRect to detect reflows
 */
function monitorReflows(element: HTMLElement): void {
  const originalGetBoundingClientRect = element.getBoundingClientRect.bind(element);

  element.getBoundingClientRect = function() {
    console.log(`%c[FAB DEBUG] getBoundingClientRect() called on ${element.id || element.className} (FORCES REFLOW!)`, 'color: orange; font-weight: bold;');
    console.trace('Reflow triggered by:');
    return originalGetBoundingClientRect();
  };
}

/**
 * Show visual alert on screen when FAB moves
 */
function showMovementAlert(element: HTMLElement, oldRect: DOMRect, newRect: DOMRect): void {
  // Create visual alert overlay
  const alert = document.createElement('div');
  alert.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(239, 68, 68, 0.95);
    color: white;
    padding: 20px;
    border-radius: 12px;
    font-family: monospace;
    font-size: 14px;
    z-index: 999999;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    max-width: 90vw;
    pointer-events: none;
  `;

  const deltaTop = newRect.top - oldRect.top;
  const deltaLeft = newRect.left - oldRect.left;

  alert.innerHTML = `
    <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">⚠️ FAB MOVED!</div>
    <div style="margin-bottom: 5px;"><strong>Element:</strong> ${element.id || element.className}</div>
    <div style="margin-bottom: 5px;"><strong>Old Position:</strong> top=${oldRect.top.toFixed(1)}px, left=${oldRect.left.toFixed(1)}px</div>
    <div style="margin-bottom: 5px;"><strong>New Position:</strong> top=${newRect.top.toFixed(1)}px, left=${newRect.left.toFixed(1)}px</div>
    <div style="color: #fde047;"><strong>Delta:</strong> Δtop=${deltaTop > 0 ? '+' : ''}${deltaTop.toFixed(1)}px, Δleft=${deltaLeft > 0 ? '+' : ''}${deltaLeft.toFixed(1)}px</div>
  `;

  document.body.appendChild(alert);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    alert.remove();
  }, 3000);
}

/**
 * Monitor position changes via polling
 */
function monitorPosition(element: HTMLElement): void {
  let lastRect = element.getBoundingClientRect();
  let lastViewportWidth = window.innerWidth;
  let lastViewportHeight = window.innerHeight;

  setInterval(() => {
    const currentRect = element.getBoundingClientRect();
    const currentViewportWidth = window.innerWidth;
    const currentViewportHeight = window.innerHeight;

    // Check if viewport size changed (mobile address bar, keyboard, etc.)
    const viewportChanged =
      Math.abs(currentViewportWidth - lastViewportWidth) > 0.5 ||
      Math.abs(currentViewportHeight - lastViewportHeight) > 0.5;

    if (
      Math.abs(currentRect.top - lastRect.top) > 0.5 ||
      Math.abs(currentRect.left - lastRect.left) > 0.5 ||
      Math.abs(currentRect.width - lastRect.width) > 0.5 ||
      Math.abs(currentRect.height - lastRect.height) > 0.5
    ) {
      if (viewportChanged) {
        // FAB moved because viewport resized (this is EXPECTED on mobile)
        console.warn(`%c📱 VIEWPORT RESIZE DETECTED - FAB moved with viewport`, 'color: orange; font-size: 14px; font-weight: bold;', {
          element: element.id || element.className,
          viewportChange: {
            widthDelta: (currentViewportWidth - lastViewportWidth).toFixed(2),
            heightDelta: (currentViewportHeight - lastViewportHeight).toFixed(2),
          },
          fabDelta: {
            top: (currentRect.top - lastRect.top).toFixed(2),
            left: (currentRect.left - lastRect.left).toFixed(2),
          },
          reason: currentViewportHeight < lastViewportHeight ? 'Address bar appeared / Keyboard opened' : 'Address bar hidden / Keyboard closed',
        });
      } else {
        // FAB moved but viewport didn't change (THIS IS THE PROBLEM!)
        console.error(`%c⚠️ FAB MOVED! Position/Size Changed (NO viewport resize):`, 'color: red; font-size: 16px; font-weight: bold;', {
          element: element.id || element.className,
          old: {
            top: lastRect.top.toFixed(2),
            left: lastRect.left.toFixed(2),
            width: lastRect.width.toFixed(2),
            height: lastRect.height.toFixed(2),
          },
          new: {
            top: currentRect.top.toFixed(2),
            left: currentRect.left.toFixed(2),
            width: currentRect.width.toFixed(2),
            height: currentRect.height.toFixed(2),
          },
          delta: {
            top: (currentRect.top - lastRect.top).toFixed(2),
            left: (currentRect.left - lastRect.left).toFixed(2),
            width: (currentRect.width - lastRect.width).toFixed(2),
            height: (currentRect.height - lastRect.height).toFixed(2),
          },
        });

        logChange(element, 'position/size', JSON.stringify({
          top: lastRect.top,
          left: lastRect.left,
        }), JSON.stringify({
          top: currentRect.top,
          left: currentRect.left,
        }));
      }

      lastRect = currentRect;
      lastViewportWidth = currentViewportWidth;
      lastViewportHeight = currentViewportHeight;
    }
  }, 50); // Check every 50ms
}

/**
 * Intercept requestAnimationFrame to detect animation loops
 */
function monitorAnimationFrames(): void {
  const originalRAF = window.requestAnimationFrame;
  let rafCount = 0;

  window.requestAnimationFrame = function(callback: FrameRequestCallback): number {
    rafCount++;

    const wrappedCallback: FrameRequestCallback = (time: number) => {
      // Check if any FAB elements are being modified
      const result = callback(time);
      return result;
    };

    return originalRAF(wrappedCallback);
  };

  // Log RAF rate every second
  setInterval(() => {
    if (rafCount > 0) {
      console.log(`[FAB DEBUG] requestAnimationFrame called ${rafCount} times in last second (${rafCount} fps)`);
      rafCount = 0;
    }
  }, 1000);
}

/**
 * Initialize FAB debugging
 */
export function initFabDebug(): void {
  // Only run on mobile
  if (!isMobileDevice()) {
    console.log('[FAB DEBUG] Desktop detected - debugging disabled');
    return;
  }

  console.log('%c[FAB DEBUG] Mobile detected - Enabling FAB movement debugging', 'color: #4af; font-size: 14px; font-weight: bold; background: #000; padding: 5px;');

  const mindmapBtn = document.getElementById('mindmap-btn');
  const controlsFabContainer = document.querySelector('.controls-fab-container') as HTMLElement;
  const controlsFab = document.getElementById('controls-fab');
  const controlsList = document.getElementById('controls-list');
  const testFabBtn = document.getElementById('test-fab-btn');

  const elementsToWatch = [
    mindmapBtn,
    controlsFabContainer,
    controlsFab,
    controlsList,
    testFabBtn,
  ].filter(Boolean) as HTMLElement[];

  if (elementsToWatch.length === 0) {
    console.warn('[FAB DEBUG] No FAB elements found!');
    return;
  }

  console.log(`[FAB DEBUG] Monitoring ${elementsToWatch.length} FAB elements:`, elementsToWatch.map(el => el.id || el.className));

  elementsToWatch.forEach(element => {
    console.log(`[FAB DEBUG] Setting up monitors for: ${element.id || element.className}`);

    // Wrap style proxy to catch all style changes
    wrapStyleProxy(element);

    // Monitor attribute changes
    monitorAttributeChanges(element);

    // Monitor classList changes
    monitorClassList(element);

    // Monitor computed style changes
    monitorComputedStyle(element);

    // Monitor reflows
    monitorReflows(element);

    // Monitor position changes
    monitorPosition(element);
  });

  // Monitor requestAnimationFrame
  monitorAnimationFrames();

  observersActive = true;

  console.log('[FAB DEBUG] All monitors active! Any changes to FABs will be logged.');

  // Add helper function to window for manual inspection
  (window as any).fabDebugLogs = () => {
    console.table(debugLogs);
    return debugLogs;
  };

  (window as any).fabDebugSummary = () => {
    const summary = debugLogs.reduce((acc, log) => {
      const key = `${log.element}:${log.property}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    console.log('%c[FAB DEBUG] Summary of changes:', 'color: #4af; font-weight: bold;');
    console.table(summary);
    return summary;
  };

  console.log('%cUse window.fabDebugLogs() to see all logged changes', 'color: #4af;');
  console.log('%cUse window.fabDebugSummary() to see summary of changes', 'color: #4af;');
}
