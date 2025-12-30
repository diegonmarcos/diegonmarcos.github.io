<script setup lang="ts">
import { useUserData } from '~/composables/useUserData'

const { userData, isLoading, fetchUserData } = useUserData()

// Terminal state
const terminalLines = ref<{ type: 'system' | 'user' | 'ai', text: string }[]>([])
const userInput = ref('')
const isTyping = ref(false)
const terminalRef = ref<HTMLElement | null>(null)

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
  "It works on my machine! Then we'll ship your machine.",
]

// AI personality messages based on user data
const generateAIGreeting = () => {
  if (!userData.value) return []

  const { city, country, browser, os, screenSize, language, visitCount, timezone } = userData.value

  const greetings = [
    `> INITIALIZING AI PERSONALITY MODULE...`,
    `> SCANNING VISITOR DATA...`,
    `> READING COOKIES & ANALYTICS...`,
    ``,
    `Hello there, mysterious visitor from ${city}, ${country}!`,
    ``,
  ]

  const funnyQuestions = [
    `I see you're using ${browser} on ${os}... Bold choice! Did ${browser === 'Chrome' ? 'you enjoy feeding all your RAM to Google today?' : browser === 'Firefox' ? 'the fox tell you any secrets?' : browser === 'Safari' ? 'Apple approve this visit?' : 'your browser survive the journey here?'}`,
    ``,
    `Hmm, your screen is ${screenSize}... ${parseInt(screenSize.split('x')[0]) > 1920 ? "Fancy display! Are you a designer or just really into spreadsheets?" : "Cozy screen! Perfect for coding in a coffee shop, right?"}`,
    ``,
    `Your timezone says ${timezone}... ${timezone.includes('America') ? "Ah, coding at weird hours I see!" : timezone.includes('Europe') ? "European efficiency! Or European procrastination?" : timezone.includes('Asia') ? "The future is NOW where you are!" : "Time is just a construct anyway!"}`,
    ``,
    `This is visit #${visitCount}. ${visitCount === 1 ? "First time here? Don't worry, I only judge a little." : visitCount < 5 ? "Back again? I'm flattered!" : "Visit #" + visitCount + "?! Are you stalking me or should I be worried?"}`,
    ``,
    `Your browser language is '${language}'... ${language.startsWith('en') ? "English speaker! Or at least your browser thinks so." : "Ooh, international visitor! Fancy!"}`,
    ``,
  ]

  const analyticsInfo = [
    `> ANALYTICS REPORT:`,
    ``,
    `Oh, and I'm also tracking your every move with Matomo analytics!`,
    `Every click, every scroll, every hover... I see it all. 👀`,
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
    `Your referrer? ${document.referrer ? `You came from: ${document.referrer}` : "Direct visit - you typed the URL yourself or used a bookmark!"}`,
    ``,
    `> This demo shows how much data websites can collect about you.`,
    `> All analytics here are privacy-respecting and GDPR compliant.`,
    `> Type anything below and I'll respond with programmer humor!`,
    ``,
  ]

  return [...greetings, ...funnyQuestions, ...analyticsInfo]
}

// Typewriter effect
const typeText = async (text: string, type: 'system' | 'ai') => {
  isTyping.value = true
  let currentText = ''

  for (const char of text) {
    currentText += char
    terminalLines.value[terminalLines.value.length - 1] = { type, text: currentText }
    await new Promise(resolve => setTimeout(resolve, 15))
    scrollToBottom()
  }

  isTyping.value = false
}

const addLine = (text: string, type: 'system' | 'user' | 'ai') => {
  terminalLines.value.push({ type, text })
  scrollToBottom()
}

const typeLines = async (lines: string[]) => {
  for (const line of lines) {
    if (line === '') {
      addLine('', 'ai')
    } else if (line.startsWith('>')) {
      addLine('', 'system')
      await typeText(line, 'system')
    } else {
      addLine('', 'ai')
      await typeText(line, 'ai')
    }
    await new Promise(resolve => setTimeout(resolve, 100))
  }
}

const handleSubmit = async () => {
  if (!userInput.value.trim() || isTyping.value) return

  const input = userInput.value
  addLine(`$ ${input}`, 'user')
  userInput.value = ''

  await new Promise(resolve => setTimeout(resolve, 300))

  // Random joke response
  const randomJoke = codingJokes[Math.floor(Math.random() * codingJokes.length)]
  addLine('', 'ai')
  await typeText(`> ${randomJoke}`, 'ai')
}

const scrollToBottom = () => {
  nextTick(() => {
    if (terminalRef.value) {
      terminalRef.value.scrollTop = terminalRef.value.scrollHeight
    }
  })
}

// Lifecycle
onMounted(async () => {
  await fetchUserData()

  // Show AI greeting
  const greeting = generateAIGreeting()
  await typeLines(greeting)
})
</script>

<template>
  <div class="terminal-ai-container">
    <div class="terminal-header">
      <div class="terminal-dots">
        <span class="dot red" />
        <span class="dot yellow" />
        <span class="dot green" />
      </div>
      <span class="terminal-title">AI_TERMINAL // VISITOR ANALYSIS</span>
    </div>

    <div ref="terminalRef" class="terminal-body">
      <!-- Terminal lines -->
      <div v-if="isLoading" class="terminal-loading">
        <span class="blink">Scanning your digital footprint...</span>
      </div>

      <div v-for="(line, index) in terminalLines" :key="index" class="terminal-line" :class="line.type">
        {{ line.text }}
      </div>

      <!-- Input line -->
      <div class="terminal-input-line">
        <span class="prompt">visitor@dnm:~$</span>
        <input
          v-model="userInput"
          type="text"
          class="terminal-input"
          placeholder="Type something..."
          :disabled="isTyping"
          @keyup.enter="handleSubmit"
        >
        <span class="cursor blink">█</span>
      </div>
    </div>
  </div>
</template>
