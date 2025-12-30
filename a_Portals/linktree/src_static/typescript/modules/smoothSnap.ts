// Smooth scroll snap with slower transition

let isScrolling = false;
let scrollTimeout: ReturnType<typeof setTimeout>;
const SCROLL_DURATION = 800; // Duration in ms for snap animation

/**
 * Smooth scroll to element with custom duration
 */
function smoothScrollTo(targetY: number, duration: number): void {
  const startY = window.scrollY;
  const difference = targetY - startY;
  const startTime = performance.now();

  function step(currentTime: number): void {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out cubic)
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, startY + difference * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      isScrolling = false;
    }
  }

  isScrolling = true;
  requestAnimationFrame(step);
}

/**
 * Find nearest snap point
 */
function findNearestSnapPoint(): number {
  const header = document.querySelector('header');
  const professionalSection = document.querySelector('.professional-section');
  const personalSection = document.querySelector('.personal-section');

  const snapPoints: number[] = [];

  if (header) {
    snapPoints.push(header.getBoundingClientRect().top + window.scrollY);
  }
  if (professionalSection) {
    snapPoints.push(professionalSection.getBoundingClientRect().top + window.scrollY);
  }
  if (personalSection) {
    snapPoints.push(personalSection.getBoundingClientRect().top + window.scrollY);
  }

  const currentScroll = window.scrollY;
  let nearest = snapPoints[0];
  let minDistance = Math.abs(currentScroll - nearest);

  for (const point of snapPoints) {
    const distance = Math.abs(currentScroll - point);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = point;
    }
  }

  return nearest;
}

/**
 * Handle scroll end and snap
 */
function handleScrollEnd(): void {
  if (isScrolling) return;

  const nearestSnap = findNearestSnapPoint();
  const currentScroll = window.scrollY;
  const threshold = 50; // Only snap if we're within threshold

  if (Math.abs(currentScroll - nearestSnap) > threshold) {
    smoothScrollTo(nearestSnap, SCROLL_DURATION);
  }
}

/**
 * Initialize smooth snap scrolling
 */
export function initSmoothSnap(): void {
  // Disable CSS scroll-snap and use JS instead
  document.documentElement.style.scrollSnapType = 'none';

  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScrollEnd, 500);
  }, { passive: true });
}
