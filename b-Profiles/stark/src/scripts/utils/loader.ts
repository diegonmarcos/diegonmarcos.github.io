export class LoaderManager {
    private loader: HTMLElement | null;
    private loaderProgress: HTMLElement | null;
    private progress: number = 0;

    constructor() {
        this.loader = document.querySelector('.loader');
        this.loaderProgress = document.querySelector('.loader-progress');

        console.log('✓ Loader initialized');

        // Start loading animation immediately
        this.updateLoader();

        // Force hide after 2 seconds regardless
        setTimeout(() => {
            console.log('✓ Forcing loader to hide...');
            if (this.loader) {
                this.loader.classList.add('hidden');
                console.log('✓ Loader should now be hidden');
            }
        }, 2000);
    }

    private updateLoader = (): void => {
        this.progress += Math.random() * 15;
        if (this.progress > 100) this.progress = 100;

        if (this.loaderProgress) {
            this.loaderProgress.style.width = this.progress + '%';
        }

        if (this.progress < 100) {
            setTimeout(this.updateLoader, 50 + Math.random() * 100);
        } else {
            console.log('✓ Loading complete at 100%');
            setTimeout(() => {
                this.loader?.classList.add('hidden');
            }, 300);
        }
    }
}
