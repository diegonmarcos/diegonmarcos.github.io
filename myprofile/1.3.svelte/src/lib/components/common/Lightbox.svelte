<script lang="ts">
	import type { Photo } from '$lib/types';

	interface Props {
		photos: Photo[];
		currentIndex: number;
		onClose: () => void;
	}

	let { photos, currentIndex = $bindable(0), onClose }: Props = $props();

	let isOpen = $state(true);

	// Current photo
	let currentPhoto = $derived(photos[currentIndex]);

	// Navigate to next photo
	function nextPhoto() {
		if (currentIndex < photos.length - 1) {
			currentIndex++;
		}
	}

	// Navigate to previous photo
	function prevPhoto() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	// Handle keyboard navigation
	function handleKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Escape':
				closeLightbox();
				break;
			case 'ArrowLeft':
				prevPhoto();
				break;
			case 'ArrowRight':
				nextPhoto();
				break;
		}
	}

	// Close lightbox
	function closeLightbox() {
		isOpen = false;
		onClose();
	}

	// Handle backdrop click
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeLightbox();
		}
	}

	// Handle backdrop keyboard interaction
	function handleBackdropKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && event.target === event.currentTarget) {
			closeLightbox();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<div
		class="lightbox-overlay"
		onclick={handleBackdropClick}
		onkeydown={handleBackdropKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Photo viewer"
		tabindex="-1"
	>
		<div class="lightbox-container">
			<!-- Close Button -->
			<button class="lightbox-close" onclick={closeLightbox} aria-label="Close lightbox">
				✕
			</button>

			<!-- Previous Button -->
			{#if currentIndex > 0}
				<button class="lightbox-nav lightbox-nav-prev" onclick={prevPhoto} aria-label="Previous photo">
					◀
				</button>
			{/if}

			<!-- Image -->
			<div class="lightbox-content">
				<img
					src={currentPhoto.url}
					alt={currentPhoto.caption || 'Photo'}
					class="lightbox-image"
				/>

				<!-- Photo Info -->
				{#if currentPhoto.caption || currentPhoto.location}
					<div class="lightbox-info">
						{#if currentPhoto.caption}
							<p class="lightbox-caption">{currentPhoto.caption}</p>
						{/if}
						{#if currentPhoto.location}
							<p class="lightbox-location">📍 {currentPhoto.location}</p>
						{/if}
						<p class="lightbox-date">
							{currentPhoto.dateTaken.toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</p>
					</div>
				{/if}
			</div>

			<!-- Next Button -->
			{#if currentIndex < photos.length - 1}
				<button class="lightbox-nav lightbox-nav-next" onclick={nextPhoto} aria-label="Next photo">
					▶
				</button>
			{/if}

			<!-- Counter -->
			<div class="lightbox-counter">
				{currentIndex + 1} / {photos.length}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@use '../../../styles/abstracts/variables' as *;
	@use '../../../styles/abstracts/mixins' as *;

	.lightbox-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.95);
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeIn 300ms ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.lightbox-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: $space-8;

		@media (max-width: $breakpoint-md) {
			padding: $space-4;
		}
	}

	.lightbox-content {
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $space-4;
	}

	.lightbox-image {
		max-width: 100%;
		max-height: 70vh;
		object-fit: contain;
		@include pixel-border($purple-700, 4px);
		background: $gray-900;
		image-rendering: auto;

		@media (max-width: $breakpoint-md) {
			max-height: 60vh;
		}
	}

	.lightbox-close {
		position: absolute;
		top: $space-4;
		right: $space-4;
		@include pixel-border($gray-700, 3px);
		background: $gray-800;
		color: $text-primary;
		font-size: 2rem;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 10;
		transition: all 300ms;

		&:hover {
			background: $purple-700;
			border-color: $purple-500;
			transform: scale(1.1);
		}
	}

	.lightbox-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		@include pixel-border($gray-700, 3px);
		background: $gray-800;
		color: $text-primary;
		font-size: 1.5rem;
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 300ms;

		&:hover {
			background: $purple-700;
			border-color: $purple-500;
		}

		@media (max-width: $breakpoint-md) {
			width: 48px;
			height: 48px;
			font-size: 1.25rem;
		}
	}

	.lightbox-nav-prev {
		left: $space-4;
	}

	.lightbox-nav-next {
		right: $space-4;
	}

	.lightbox-info {
		@include pixel-border($purple-700, 3px);
		background: rgba($gray-800, 0.95);
		padding: $space-4;
		max-width: 600px;
		text-align: center;
	}

	.lightbox-caption {
		color: $text-primary;
		font-size: 1.125rem;
		margin-bottom: $space-2;
	}

	.lightbox-location {
		color: $purple-400;
		font-size: 0.875rem;
		margin-bottom: $space-2;
	}

	.lightbox-date {
		color: $text-secondary;
		font-size: 0.875rem;
	}

	.lightbox-counter {
		position: absolute;
		bottom: $space-4;
		left: 50%;
		transform: translateX(-50%);
		@include pixel-border($gray-700, 2px);
		background: $gray-800;
		color: $text-primary;
		padding: $space-2 $space-4;
		font-size: 0.875rem;
		font-weight: bold;
	}
</style>
