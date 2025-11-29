// Video background module

import { getElementById } from '../utils/dom';

const VIDEOS = [
  'public/videos/background.mp4',
  'public/videos/background2.mp4',
  'public/videos/background3.mp4',
  'public/videos/background4.mp4'
];

/**
 * Get a random video from the list
 */
function getRandomVideo(): string {
  return VIDEOS[Math.floor(Math.random() * VIDEOS.length)];
}

/**
 * Initialize random background video
 */
export function initVideoBackground(): void {
  const videoElement = getElementById<HTMLVideoElement>('background-video');

  if (videoElement) {
    videoElement.src = getRandomVideo();
  }
}
