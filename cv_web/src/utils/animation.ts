// Animation utility functions

/**
 * Easing function for smooth animations (ease-in-out quad)
 */
export function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

/**
 * Smooth scroll to a target Y position
 */
export function smoothScrollTo(endY: number, duration: number): void {
  const startY = window.pageYOffset;
  const distanceY = endY - startY;
  let startTime: number | null = null;

  function animation(currentTime: number): void {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startY, distanceY, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

/**
 * Animate element opacity and transform
 */
export function animateElement(
  element: HTMLElement,
  targetOpacity: number,
  targetTransformY: number,
  duration: number
): void {
  if (targetOpacity > 0) {
    element.style.visibility = 'visible';
  }

  const startOpacity = parseFloat(window.getComputedStyle(element).opacity);
  const matrix = new DOMMatrix(window.getComputedStyle(element).transform);
  const startTransformY = matrix.m42;
  let startTime: number | null = null;

  function animationStep(timestamp: number): void {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
    const currentTransformY = startTransformY + (targetTransformY - startTransformY) * progress;

    element.style.opacity = String(currentOpacity);
    element.style.transform = `translateY(${currentTransformY}px)`;

    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      if (targetOpacity === 0) {
        element.style.visibility = 'hidden';
      }
    }
  }

  requestAnimationFrame(animationStep);
}

/**
 * Create particle burst effect
 */
export function createStarburst(particleCount: number = 50): void {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);

    const startX = Math.random() * screenWidth;
    const startY = Math.random() * screenHeight;

    const angle = Math.random() * 360;
    const distance = Math.random() * 100 + 50;
    const endX = startX + Math.cos((angle * Math.PI) / 180) * distance;
    const endY = startY + Math.sin((angle * Math.PI) / 180) * distance;

    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    // Trigger animation
    setTimeout(() => {
      particle.style.left = `${endX}px`;
      particle.style.top = `${endY}px`;
    }, 10);

    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, 7000);
  }
}
