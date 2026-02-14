<script lang="ts">
  import { onMount } from 'svelte';

  // Terminal state
  let terminalLines = $state<{ type: 'system' | 'user' | 'ai'; text: string }[]>([]);
  let userInput = $state('');
  let isTyping = $state(false);
  let isLoading = $state(true);
  let terminalRef = $state<HTMLElement | null>(null);

  // User data
  interface UserData {
    city: string;
    country: string;
    browser: string;
    os: string;
    screenSize: string;
    language: string;
    visitCount: number;
    timezone: string;
  }

  let userData = $state<UserData | null>(null);

  // Coding jokes for responses
  const codingJokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
    "Why do Java developers wear glasses? Because they don't C#!",
    "There are only 10 types of people in the world: those who understand binary and those who don't.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself!",
    "A programmer's wife tells him: 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He comes back with 12 loaves of bread.",
    "Why do programmers hate nature? It has too many bugs!",
    "!false - It's funny because it's true!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
    "Why did the developer go broke? Because he used up all his cache!",
    "What's a programmer's favorite hangout place? Foo Bar!",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
    "Algorithm: A word used by programmers when they don't want to explain what they did.",
    "There's no place like 127.0.0.1",
    "I would tell you a UDP joke, but you might not get it.",
    "A TCP packet walks into a bar and says 'I'd like a beer.' The bartender replies 'You want a beer?' The TCP packet says 'Yes, I want a beer.'",
    "Why do Python programmers have low self-esteem? They're constantly comparing their self to others.",
    "The best thing about a Boolean is that even if you're wrong, you're only off by a bit.",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
    "It works on my machine! Then we'll ship your machine."
  ];

  // Detect browser
  function detectBrowser(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  }

  // Detect OS
  function detectOS(): string {
    const platform = navigator.platform;
    if (platform.includes('Win')) return 'Windows';
    if (platform.includes('Mac')) return 'macOS';
    if (platform.includes('Linux')) return 'Linux';
    return 'Unknown';
  }

  // Fetch user data
  async function fetchUserData() {
    try {
      // Get visit count from localStorage
      let visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
      localStorage.setItem('visitCount', visitCount.toString());

      userData = {
        city: 'Unknown',
        country: 'Unknown',
        browser: detectBrowser(),
        os: detectOS(),
        screenSize: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        visitCount,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      // Try to get location (simplified - no external API needed)
      userData.city = 'Your City';
      userData.country = 'Your Country';
    } catch {
      // Fallback
    }
    isLoading = false;
  }

  // AI personality messages based on user data
  function generateAIGreeting(): string[] {
    if (!userData) return [];

    const { city, country, browser, os, screenSize, language, visitCount, timezone } = userData;

    const greetings = [
      `> INITIALIZING AI PERSONALITY MODULE...`,
      `> SCANNING VISITOR DATA...`,
      `> READING COOKIES & ANALYTICS...`,
      ``,
      `Hello there, mysterious visitor from ${city}, ${country}!`,
      ``
    ];

    const funnyQuestions = [
      `I see you're using ${browser} on ${os}... Bold choice! ${browser === 'Chrome' ? "Did you enjoy feeding all your RAM to Google today?" : browser === 'Firefox' ? "Did the fox tell you any secrets?" : browser === 'Safari' ? "Did Apple approve this visit?" : "Did your browser survive the journey here?"}`,
      ``,
      `Hmm, your screen is ${screenSize}... ${parseInt(screenSize.split('x')[0]) > 1920 ? "Fancy display! Are you a designer or just really into spreadsheets?" : "Cozy screen! Perfect for coding in a coffee shop, right?"}`,
      ``,
      `Your timezone says ${timezone}... ${timezone.includes('America') ? "Ah, coding at weird hours I see!" : timezone.includes('Europe') ? "European efficiency! Or European procrastination?" : timezone.includes('Asia') ? "The future is NOW where you are!" : "Time is just a construct anyway!"}`,
      ``,
      `This is visit #${visitCount}. ${visitCount === 1 ? "First time here? Don't worry, I only judge a little." : visitCount < 5 ? "Back again? I'm flattered!" : "Visit #" + visitCount + "?! Are you stalking me or should I be worried?"}`,
      ``,
      `Your browser language is '${language}'... ${language.startsWith('en') ? "English speaker! Or at least your browser thinks so." : "Ooh, international visitor! Fancy!"}`,
      ``
    ];

    const analyticsInfo = [
      `> ANALYTICS REPORT:`,
      ``,
      `Oh, and I'm also tracking your every move with Matomo analytics!`,
      `Every click, every scroll, every hover... I see it all.`,
      ``,
      `Your session has a unique visitor ID stored in cookies.`,
      `Don't worry, it's self-hosted - your data stays with me, not Big Tech!`,
      ``,
      `I can see: page views, time spent, scroll depth, button clicks...`,
      `Basically, I know you read this far. Impressive attention span!`,
      ``,
      `> FUN FACT: This site uses first-party cookies only.`,
      `> No third-party trackers stalking you across the web!`,
      ``,
      `Your referrer? ${typeof document !== 'undefined' && document.referrer ? `You came from: ${document.referrer}` : "Direct visit - you typed the URL yourself or used a bookmark!"}`,
      ``,
      `> This demo shows how much data websites can collect about you.`,
      `> All analytics here are privacy-respecting and GDPR compliant.`,
      `> Type anything below and I'll respond with programmer humor!`,
      ``
    ];

    return [...greetings, ...funnyQuestions, ...analyticsInfo];
  }

  // Typewriter effect
  async function typeText(text: string, type: 'system' | 'ai') {
    isTyping = true;
    let currentText = '';

    for (const char of text) {
      currentText += char;
      terminalLines[terminalLines.length - 1] = { type, text: currentText };
      await new Promise(resolve => setTimeout(resolve, 15));
      scrollToBottom();
    }

    isTyping = false;
  }

  function addLine(text: string, type: 'system' | 'user' | 'ai') {
    terminalLines = [...terminalLines, { type, text }];
    scrollToBottom();
  }

  async function typeLines(lines: string[]) {
    for (const line of lines) {
      if (line === '') {
        addLine('', 'ai');
      } else if (line.startsWith('>')) {
        addLine('', 'system');
        await typeText(line, 'system');
      } else {
        addLine('', 'ai');
        await typeText(line, 'ai');
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  async function handleSubmit() {
    if (!userInput.trim() || isTyping) return;

    const input = userInput;
    addLine(`$ ${input}`, 'user');
    userInput = '';

    await new Promise(resolve => setTimeout(resolve, 300));

    // Random joke response
    const randomJoke = codingJokes[Math.floor(Math.random() * codingJokes.length)];
    addLine('', 'ai');
    await typeText(`> ${randomJoke}`, 'ai');
  }

  function scrollToBottom() {
    if (terminalRef) {
      terminalRef.scrollTop = terminalRef.scrollHeight;
    }
  }

  function handleKeyup(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  // Lifecycle
  onMount(async () => {
    await fetchUserData();
    const greeting = generateAIGreeting();
    await typeLines(greeting);
  });
</script>

<div class="terminal-ai-container">
  <div class="terminal-header">
    <div class="terminal-dots">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
    <span class="terminal-title">AI_TERMINAL // VISITOR ANALYSIS</span>
  </div>

  <div bind:this={terminalRef} class="terminal-body">
    <!-- Terminal lines -->
    {#if isLoading}
      <div class="terminal-loading">
        <span class="blink">Scanning your digital footprint...</span>
      </div>
    {/if}

    {#each terminalLines as line}
      <div class="terminal-line {line.type}">
        {line.text}
      </div>
    {/each}

    <!-- Input line -->
    <div class="terminal-input-line">
      <span class="prompt">visitor@dnm:~$</span>
      <input
        bind:value={userInput}
        type="text"
        class="terminal-input"
        placeholder="Type something..."
        disabled={isTyping}
        onkeyup={handleKeyup}
      />
      <span class="cursor blink"></span>
    </div>
  </div>
</div>
