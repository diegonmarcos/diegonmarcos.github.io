// Audio Toggle Module
// Mutes / unmutes the background video from the bottom-right controls FAB.
// Audio is OFF by default — the <video> ships with `muted`, and autoplay
// policies require it to stay muted until a real user gesture, which this
// button provides.

import { getElementById, addClass, removeClass } from '../utils/dom';

/**
 * Initialize the audio on/off toggle.
 */
export function initAudioToggle(): void {
  const btn = getElementById<HTMLButtonElement>('audio-toggle');
  const video = getElementById<HTMLVideoElement>('background-video');

  if (!btn || !video) return;

  // Explicit default: audio off.
  video.muted = true;
  btn.setAttribute('aria-pressed', 'false');
  btn.title = 'Audio: off';

  btn.addEventListener('click', () => {
    const enable = video.muted;
    video.muted = !enable;

    if (enable) {
      // Unmuting counts as the user gesture, so a paused autoplay video
      // can start here too.
      void video.play().catch(() => {
        /* autoplay still blocked — leave muted state as-is */
      });
      addClass(btn, 'active');
    } else {
      removeClass(btn, 'active');
    }

    btn.setAttribute('aria-pressed', String(enable));
    btn.title = enable ? 'Audio: on' : 'Audio: off';
  });
}
