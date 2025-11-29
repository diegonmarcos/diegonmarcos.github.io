<script lang="ts">
	import { base } from '$app/paths';

	// Navigation Data
	const NAV_DATA: Record<string, { id: string; label: string }[]> = {
		arcade: [
			{ id: 'pacman', label: 'PAC-MAN' },
			{ id: 'mario', label: 'SUPER MARIO' },
			{ id: 'invaders', label: 'SPACE INVADERS' },
			{ id: 'pinball', label: 'NEON PINBALL' }
		],
		party: [
			{ id: 'trivia-gen', label: 'NEURAL QUIZ' },
			{ id: 'karaoke-80s', label: 'RETRO VOCALS' },
			{ id: 'trivia-cyber', label: 'CYBER LORE' }
		]
	};

	// Game Library
	interface QuizItem {
		q: string;
		opts: string[];
		a: number;
	}

	interface KaraokeItem {
		full: string;
		opts: string[];
		a: number;
	}

	interface GameContent {
		type: 'quiz' | 'karaoke';
		title: string;
		data: (QuizItem | KaraokeItem)[];
	}

	const GAME_LIBRARY: Record<string, GameContent> = {
		'trivia-gen': {
			type: 'quiz',
			title: 'NEURAL NET QUIZ',
			data: [
				{ q: 'What is the primary language of the web?', opts: ['Python', 'HTML', 'C++', 'Binary'], a: 1 },
				{ q: 'Who controls the Matrix?', opts: ['The Architect', 'Neo', 'Morpheus', 'Users'], a: 0 },
				{ q: 'Which color is #FF0000?', opts: ['Blue', 'Green', 'Red', 'Cyan'], a: 2 }
			]
		},
		'trivia-cyber': {
			type: 'quiz',
			title: 'CYBER LORE TEST',
			data: [
				{ q: 'Blade Runner is set in which year?', opts: ['2019', '2049', '2077', '1999'], a: 0 },
				{ q: "What is the 'Ghost' in the Shell?", opts: ['A Virus', 'The Soul', 'AI', 'A Demon'], a: 1 }
			]
		},
		'karaoke-80s': {
			type: 'karaoke',
			title: 'SYNTHWAVE VOCALS',
			data: [
				{ full: 'I ran so far [?]', opts: ['Away', 'Today', 'Okay', 'Astray'], a: 0 },
				{ full: 'Never gonna give you [?]', opts: ['Down', 'Up', 'In', 'Out'], a: 1 },
				{ full: "Don't you want me [?]", opts: ['Honey', 'Baby', 'Lady', 'Crazy'], a: 1 }
			]
		}
	};

	// State
	let activeCategory = $state('arcade');
	let activeGame = $state('pacman');
	let currentGame: GameContent | null = $state(null);
	let gameState = $state<'start' | 'play' | 'end'>('start');
	let score = $state(0);
	let questionIndex = $state(0);
	let selectedAnswer = $state<number | null>(null);
	let isAnswered = $state(false);

	// Computed
	let subNavItems = $derived(NAV_DATA[activeCategory] || []);
	let currentQuestion = $derived(currentGame?.data[questionIndex]);
	let isQuiz = $derived(currentGame?.type === 'quiz');
	let formattedLyrics = $derived(() => {
		if (!currentQuestion || isQuiz) return '';
		const item = currentQuestion as KaraokeItem;
		return item.full.replace('[?]', '<span class="blank">_____</span>');
	});

	function selectCategory(cat: string) {
		activeCategory = cat;
		const items = NAV_DATA[cat];
		if (items?.length) {
			selectGame(items[0].id);
		}
	}

	function selectGame(gameId: string) {
		activeGame = gameId;
		const content = GAME_LIBRARY[gameId];
		if (content) {
			currentGame = content;
			resetGame();
		} else {
			currentGame = null;
		}
	}

	function resetGame() {
		gameState = 'start';
		score = 0;
		questionIndex = 0;
		selectedAnswer = null;
		isAnswered = false;
	}

	function startGame() {
		gameState = 'play';
		score = 0;
		questionIndex = 0;
		selectedAnswer = null;
		isAnswered = false;
	}

	function handleAnswer(index: number) {
		if (isAnswered || !currentQuestion) return;

		selectedAnswer = index;
		isAnswered = true;

		const correct = currentQuestion.a;
		if (index === correct) {
			score += 500;
		}

		setTimeout(() => {
			if (currentGame && questionIndex < currentGame.data.length - 1) {
				questionIndex++;
				selectedAnswer = null;
				isAnswered = false;
			} else {
				gameState = 'end';
			}
		}, 1000);
	}

	// Initialize
	$effect(() => {
		selectGame('pacman');
	});
</script>

<svelte:head>
	<title>Console - Fun Zone</title>
</svelte:head>

<div class="console-page">
	<!-- CRT Overlay -->
	<div class="crt-overlay"></div>

	<!-- Back Button -->
	<a href="{base}/" class="back-btn">← BACK</a>

	<div class="arcade-cabinet">
		<!-- Navigation -->
		<div class="nav-container">
			<!-- Category Tabs -->
			<div class="top-nav">
				<button
					class="cat-tab"
					class:active={activeCategory === 'arcade'}
					onclick={() => selectCategory('arcade')}
				>
					ARCADE ZONE
				</button>
				<button
					class="cat-tab"
					class:active={activeCategory === 'party'}
					onclick={() => selectCategory('party')}
				>
					PARTY LOUNGE
				</button>
			</div>

			<!-- Sub Navigation -->
			<div class="sub-nav">
				{#each subNavItems as item}
					<button
						class="game-tab"
						class:active={activeGame === item.id}
						onclick={() => selectGame(item.id)}
					>
						{item.label}
					</button>
				{/each}
			</div>
		</div>

		<!-- Game Area -->
		<div class="game-area">
			{#if currentGame}
				<!-- Interactive Game Engine -->
				<div class="engine-container">
					{#if gameState === 'start'}
						<!-- Start Screen -->
						<div class="game-screen start-screen">
							<h1 class="game-title">{currentGame.title}</h1>
							<div class="blink-text">&gt; INSERT COIN TO BEGIN_</div>
							<button class="pixel-btn" onclick={startGame}>INITIALIZE</button>
						</div>
					{:else if gameState === 'play'}
						<!-- Play Screen -->
						<div class="game-screen play-screen">
							<div class="hud-panel">
								<span>SCORE: <span class="score">{score.toString().padStart(4, '0')}</span></span>
								<span>LINK: <span class="status">STABLE</span></span>
							</div>

							<div class="question-area">
								{#if isQuiz && currentQuestion}
									<div class="question-text">{(currentQuestion as QuizItem).q}</div>
								{:else if currentQuestion}
									<div class="lyrics-box">{@html formattedLyrics()}</div>
								{/if}

								<div class="answers-grid">
									{#each currentQuestion?.opts || [] as opt, idx}
										<button
											class="pixel-btn answer-btn"
											class:correct={isAnswered && idx === currentQuestion?.a}
											class:wrong={isAnswered && selectedAnswer === idx && idx !== currentQuestion?.a}
											disabled={isAnswered}
											onclick={() => handleAnswer(idx)}
										>
											{opt}
										</button>
									{/each}
								</div>
							</div>
						</div>
					{:else if gameState === 'end'}
						<!-- End Screen -->
						<div class="game-screen end-screen">
							<h2 class="end-title">TERMINATED</h2>
							<p class="final-score">FINAL SCORE: <span>{score}</span></p>
							<button class="pixel-btn" onclick={resetGame}>MAIN MENU</button>
						</div>
					{/if}
				</div>
			{:else}
				<!-- Arcade Placeholder -->
				<div class="placeholder-container">
					<h1 class="placeholder-title">{activeGame.toUpperCase()}</h1>
					<div class="float-icon">👾</div>
					<div class="error-box">
						HARDWARE MISSING<br />PLEASE INSERT CARTRIDGE
					</div>
					<a href="{base}/{activeGame === 'pacman' ? 'pac-man' : activeGame}" class="pixel-btn play-link">
						PLAY IN BROWSER →
					</a>
				</div>
			{/if}
		</div>

		<!-- Animated City Footer -->
		<div class="pixel-city-container">
			<div class="skyline layer-1"></div>
			<div class="skyline layer-2"></div>
			<div class="pixel-car"></div>
		</div>
	</div>
</div>

<style lang="scss">
	@use 'sass:color';

	:root {
		--bg-root: #050002;
		--screen-bg: #140005;
		--nav-top-bg: #1a0005;
		--nav-sub-bg: #0f0003;
		--primary: #ff003c;
		--secondary: #00f7ff;
		--tertiary: #ffe600;
	}

	.console-page {
		min-height: 100vh;
		background-color: var(--bg-root);
		background-image:
			linear-gradient(transparent 98%, rgba(255, 0, 60, 0.08) 50%),
			linear-gradient(90deg, transparent 98%, rgba(255, 0, 60, 0.08) 50%);
		background-size: 8px 8px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		position: relative;
	}

	// Back Button
	.back-btn {
		position: fixed;
		top: 1rem;
		left: 1rem;
		font-family: 'Press Start 2P', cursive;
		font-size: 0.8rem;
		color: var(--primary);
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 2px solid var(--primary);
		background: rgba(0, 0, 0, 0.8);
		z-index: 1000;
		transition: all 0.2s;

		&:hover {
			background: var(--primary);
			color: #000;
			box-shadow: 0 0 20px var(--primary);
		}
	}

	// CRT Overlay
	.crt-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(rgba(20, 0, 10, 0.1) 50%, rgba(0, 0, 0, 0.4) 50%);
		background-size: 100% 4px;
		pointer-events: none;
		z-index: 999;
		mix-blend-mode: hard-light;
		opacity: 0.3;

		&::after {
			content: ' ';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			background: linear-gradient(to bottom, transparent, rgba(255, 0, 60, 0.2) 50%, transparent);
			height: 30%;
			animation: scanline-pass 6s linear infinite;
			pointer-events: none;
		}
	}

	@keyframes scanline-pass {
		0% { transform: translateY(-150%); }
		100% { transform: translateY(500%); }
	}

	// Arcade Cabinet
	.arcade-cabinet {
		width: 100%;
		max-width: 900px;
		height: 90vh;
		background-color: var(--screen-bg);
		border: 4px solid var(--primary);
		box-shadow: 0 0 30px var(--primary), inset 0 0 100px rgba(0, 0, 0, 0.9);
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 6px;
		overflow: hidden;
		z-index: 10;
	}

	// Navigation
	.nav-container {
		display: flex;
		flex-direction: column;
		z-index: 10;
		border-bottom: 4px solid var(--primary);
		box-shadow: 0 5px 20px rgba(255, 0, 60, 0.2);
	}

	.top-nav {
		display: flex;
		width: 100%;
		background: var(--nav-top-bg);
	}

	.cat-tab {
		flex: 1;
		padding: 1.5rem 0;
		text-align: center;
		font-family: 'Press Start 2P', cursive;
		font-size: 0.9rem;
		cursor: pointer;
		color: #804050;
		transition: 0.2s;
		border: none;
		border-right: 2px solid #2a000a;
		border-bottom: 4px solid transparent;
		background: transparent;
		text-transform: uppercase;
		position: relative;

		&:hover {
			color: #fff;
			background: #2a000a;
		}

		&.active {
			color: #000;
			background: var(--primary);
			border-bottom: 4px solid var(--tertiary);
			font-weight: bold;

			&::after {
				content: '▼';
				position: absolute;
				bottom: -18px;
				left: 50%;
				transform: translateX(-50%);
				color: var(--primary);
				font-size: 1rem;
				z-index: 20;
				text-shadow: 0 2px 5px #000;
			}
		}
	}

	.sub-nav {
		display: flex;
		background-color: var(--nav-sub-bg);
		width: 100%;
		overflow-x: auto;
		border-top: 4px solid #000;
	}

	.game-tab {
		flex: 1;
		padding: 1rem 0.5rem;
		text-align: center;
		font-family: 'Press Start 2P', cursive;
		font-size: 0.6rem;
		cursor: pointer;
		color: #666;
		transition: 0.2s;
		white-space: nowrap;
		min-width: 80px;
		border: none;
		border-right: 1px solid #333;
		background: transparent;

		&:hover {
			color: var(--secondary);
			background: #1a1a2a;
		}

		&.active {
			color: var(--bg-root);
			background: var(--secondary);
			font-weight: bold;
			box-shadow: 0 0 15px var(--secondary);
		}
	}

	// Game Area
	.game-area {
		flex: 1;
		padding: 2rem;
		position: relative;
		display: flex;
		flex-direction: column;
		z-index: 5;
		background-image: radial-gradient(rgba(255, 0, 60, 0.05) 20%, transparent 20%);
		background-size: 16px 16px;
	}

	.engine-container,
	.placeholder-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.game-screen {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	// Start Screen
	.start-screen {
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.game-title {
		font-family: 'Press Start 2P', cursive;
		font-size: 3rem;
		color: #fff;
		text-shadow: 3px 0 0 var(--primary), -3px 0 0 var(--secondary);
		animation: glitch 2s infinite;
		margin-bottom: 2rem;

		@media (max-width: 600px) {
			font-size: 1.5rem;
		}
	}

	@keyframes glitch {
		0% { transform: translate(0); }
		20% { transform: translate(-2px, 2px); }
		40% { transform: translate(-2px, -2px); }
		60% { transform: translate(0); }
	}

	.blink-text {
		margin-bottom: 3rem;
		color: #b3002a;
		font-family: 'Press Start 2P', cursive;
		font-size: 0.8rem;
		animation: blink 1s infinite steps(2);
	}

	@keyframes blink {
		0% { opacity: 1; }
		100% { opacity: 0; }
	}

	// Play Screen
	.play-screen {
		gap: 2rem;
	}

	.hud-panel {
		display: flex;
		justify-content: space-between;
		border: 1px solid var(--primary);
		background: rgba(255, 0, 60, 0.1);
		padding: 0.8rem;
		font-family: 'Press Start 2P', cursive;
		font-size: 0.8rem;
		color: #ffccd5;

		.score {
			color: var(--tertiary);
		}

		.status {
			color: var(--secondary);
		}
	}

	.question-area {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.question-text {
		text-align: center;
		margin-bottom: 2rem;
		font-family: 'Press Start 2P', cursive;
		font-size: 1.2rem;
		line-height: 1.6;
		color: #ffccd5;

		@media (max-width: 600px) {
			font-size: 0.9rem;
		}
	}

	.lyrics-box {
		border: 4px double var(--secondary);
		padding: 2rem;
		font-family: 'VT323', monospace;
		font-size: 2.2rem;
		color: var(--secondary);
		text-align: center;
		background: rgba(0, 0, 0, 0.6);
		margin-bottom: 2rem;
		text-shadow: 0 0 10px var(--secondary);
		animation: pulse 3s infinite;

		:global(.blank) {
			color: #fff;
			text-decoration: underline;
			text-shadow: 0 0 10px #fff;
		}
	}

	@keyframes pulse {
		50% { box-shadow: 0 0 25px var(--secondary); }
	}

	.answers-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;

		@media (max-width: 650px) {
			grid-template-columns: 1fr;
		}
	}

	// Buttons
	.pixel-btn {
		background: rgba(20, 0, 5, 0.8);
		border: 2px solid var(--primary);
		color: var(--primary);
		font-family: 'Press Start 2P', cursive;
		padding: 1rem 2rem;
		cursor: pointer;
		transition: 0.1s;
		text-transform: uppercase;
		font-size: 1rem;
		box-shadow: 0 0 10px rgba(255, 0, 60, 0.2);

		&:hover:not(:disabled) {
			background: var(--primary);
			color: #000;
			box-shadow: 0 0 25px var(--primary);
			border-color: var(--tertiary);
		}

		&:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}

		&.correct {
			background: var(--secondary);
			color: #000;
			border-color: var(--secondary);
			box-shadow: 0 0 25px var(--secondary);
		}

		&.wrong {
			background: var(--primary);
			color: #000;
		}
	}

	// End Screen
	.end-screen {
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.end-title {
		font-family: 'Press Start 2P', cursive;
		font-size: 2.5rem;
		color: var(--primary);
		margin-bottom: 1rem;
	}

	.final-score {
		font-family: 'Press Start 2P', cursive;
		margin-bottom: 2rem;
		color: #ffccd5;

		span {
			color: var(--tertiary);
			font-size: 1.5rem;
		}
	}

	// Placeholder
	.placeholder-container {
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.placeholder-title {
		font-family: 'Press Start 2P', cursive;
		color: var(--secondary);
		font-size: 2.5rem;
		text-shadow: 0 0 10px var(--secondary);
		margin-bottom: 1rem;
	}

	.float-icon {
		font-size: 6rem;
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-20px); }
	}

	.error-box {
		border: 2px dashed var(--primary);
		padding: 1rem;
		margin: 2rem 0;
		color: var(--primary);
		font-family: 'Press Start 2P', cursive;
		font-size: 0.8rem;
		line-height: 1.8;
	}

	.play-link {
		text-decoration: none;
	}

	// Animated City Footer
	.pixel-city-container {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 160px;
		overflow: hidden;
		z-index: 1;
		opacity: 0.85;
		pointer-events: none;
		border-top: 2px solid var(--primary);
		background: linear-gradient(to top, rgba(255, 0, 60, 0.1), transparent);
	}

	.skyline {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 200%;
		height: 100%;
		background-repeat: repeat-x;
	}

	.layer-1 {
		height: 70%;
		z-index: 1;
		opacity: 0.6;
		background-image: linear-gradient(to top, #1a0005 0%, #3a0010 100%);
		background-size: 60px 100%;
		clip-path: polygon(
			0% 100%, 10% 100%, 10% 40%, 20% 40%, 20% 10%, 30% 10%,
			30% 50%, 40% 50%, 40% 20%, 50% 20%, 50% 60%, 60% 60%,
			60% 30%, 70% 30%, 70% 80%, 80% 80%, 80% 10%, 90% 10%,
			90% 100%, 100% 100%
		);
		animation: city-scroll 40s linear infinite;
	}

	.layer-2 {
		height: 40%;
		z-index: 2;
		background-image: linear-gradient(to top, #2b000a 0%, var(--primary) 100%);
		background-size: 90px 100%;
		clip-path: polygon(
			0% 100%, 5% 100%, 5% 30%, 15% 30%, 15% 60%, 25% 60%,
			25% 10%, 35% 10%, 35% 50%, 45% 50%, 45% 20%, 55% 20%,
			55% 100%, 100% 100%
		);
		animation: city-scroll 15s linear infinite;
		box-shadow: 0 0 20px var(--primary);
	}

	.pixel-car {
		position: absolute;
		bottom: 10px;
		left: -50px;
		width: 50px;
		height: 14px;
		background: var(--secondary);
		box-shadow: -15px 0 20px var(--secondary);
		animation: car-drive 5s linear infinite;
		z-index: 3;
	}

	@keyframes city-scroll {
		100% { transform: translateX(-50%); }
	}

	@keyframes car-drive {
		100% { transform: translateX(150vw); }
	}
</style>
