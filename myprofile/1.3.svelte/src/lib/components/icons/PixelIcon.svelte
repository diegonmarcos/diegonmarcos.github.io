<script lang="ts">
	export let icon: string = 'default';
	export let size: number = 32;
	export let color: string = '#a855f7';

	// Pixel art patterns (8x8 grid)
	const icons: Record<string, string> = {
		home: '00111100/01111110/11111111/11011011/11111111/11111111/01111110/00111100',
		photo: '11111111/10000001/10111101/10100101/10100101/10111101/10000001/11111111',
		music: '00011000/00111100/01111110/01111110/01111110/00111100/00011000/00000000',
		stats: '00100100/01101100/11111110/11111110/01101100/00100100/00000000/00000000',
		mario: '00111100/01111110/11111111/11011011/11111111/01111110/00111100/00000000',
		pacman: '00111100/01111100/11111000/11110000/11111000/01111100/00111100/00000000',
		bird: '00011000/00111100/01111110/11111111/01111110/00111100/00011000/00000000',
		gamepad: '01111110/11111111/11011011/11111111/11111111/11011011/01111110/00111100',
		heart: '01101100/11111110/11111110/01111100/00111000/00010000/00000000/00000000',
		star: '00010000/00111000/01111100/11111110/01111100/00111000/00010000/00000000',
		profile: '00111100/01111110/01111110/00111100/01111110/11111111/11111111/01111110',
		pinball: '00111100/01111110/11111111/11011011/11111111/01111110/00111100/00011000'
	};

	$: pattern = icons[icon] || icons.default;
	$: rows = pattern.split('/');
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 8 8"
	xmlns="http://www.w3.org/2000/svg"
	class="pixel-icon"
	style="--icon-color: {color}"
>
	{#each rows as row, y}
		{#each row.split('') as pixel, x}
			{#if pixel === '1'}
				<rect {x} {y} width="1" height="1" fill={color} class="pixel" />
			{/if}
		{/each}
	{/each}
</svg>

<style lang="scss">
	.pixel-icon {
		image-rendering: pixelated;
		image-rendering: -moz-crisp-edges;
		image-rendering: crisp-edges;
		display: inline-block;

		.pixel {
			transition: fill 0.2s ease;
		}

		&:hover .pixel {
			fill: var(--icon-color);
			filter: brightness(1.2);
		}
	}
</style>
