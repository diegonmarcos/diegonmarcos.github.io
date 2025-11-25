// Status monitoring and animation
export class StatusMonitor {
  private statusElements: NodeListOf<HTMLElement>;
  private intervalId: number | null = null;

  constructor() {
    this.statusElements = document.querySelectorAll('.card-status');
    this.init();
  }

  private init(): void {
    this.intervalId = window.setInterval(() => {
      this.statusElements.forEach(status => {
        if (Math.random() > 0.95) {
          this.pulseAnimation(status);
        }
      });
    }, 2000);
  }

  private pulseAnimation(element: HTMLElement): void {
    element.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
      element.style.animation = '';
    }, 500);
  }

  public destroy(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
