// Lazy-loads Eruda mobile devtools and toggles it on demand.

declare const eruda: { init(): void; destroy(): void };

let loaded = false;
let visible = false;

export function initErudaToggle(): void {
  const btn = document.getElementById('eruda-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!loaded) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/eruda';
      script.onload = () => { eruda.init(); loaded = true; visible = true; };
      document.head.appendChild(script);
    } else if (visible) {
      eruda.destroy();
      loaded = false;
      visible = false;
    } else {
      eruda.init();
      visible = true;
    }
  });
}
