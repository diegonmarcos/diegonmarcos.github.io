import { DEFAULT_TOPICS, REFRESH_INTERVAL } from "./config";
import { fetchArticles, fetchTimeline, fetchTone, fetchTopics } from "./api";
import { renderArticleTable, renderTopicPills, renderTopicCards } from "./render";
import { renderTimeline } from "./timeline";
import { renderToneChart } from "./tone";
import type { TopicSummary } from "./types";

let activeTopic = "economy";
let topicData: TopicSummary[] = DEFAULT_TOPICS.map((t) => ({
  ...t,
  articleCount: 0,
  avgTone: 0,
  lastFetch: "",
}));

// ── DOM refs ──
const clockEl = document.getElementById("clock") as HTMLElement;
const pillsEl = document.getElementById("topic-pills") as HTMLElement;
const articleListEl = document.getElementById("article-list") as HTMLElement;
const articleCountEl = document.getElementById("article-count") as HTMLElement;
const timelineEl = document.getElementById("timeline-chart") as HTMLElement;
const toneEl = document.getElementById("tone-chart") as HTMLElement;
const topicCardsEl = document.getElementById("topic-cards") as HTMLElement;
const searchInput = document.getElementById("search-input") as HTMLInputElement;
const searchBtn = document.getElementById("search-btn") as HTMLElement;
const statusEl = document.getElementById("status-text") as HTMLElement;

// ── Clock ──
function updateClock(): void {
  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
}

// ── Status ──
function setStatus(text: string): void {
  statusEl.textContent = text;
}

// ── Render pills ──
function renderPills(): void {
  pillsEl.innerHTML = renderTopicPills(topicData, activeTopic);
  pillsEl.querySelectorAll(".topic-pill").forEach((el) => {
    el.addEventListener("click", () => {
      const topic = (el as HTMLElement).dataset.topic;
      if (topic) {
        activeTopic = topic;
        loadTopic(activeTopic);
      }
    });
  });
}

// ── Load topic data ──
async function loadTopic(topic: string): Promise<void> {
  setStatus(`LOADING ${topic.toUpperCase()}...`);
  renderPills();

  const [artRes, tlRes, toneRes] = await Promise.all([
    fetchArticles(topic),
    fetchTimeline(topic),
    fetchTone(topic),
  ]);

  // Articles
  const articles = artRes?.articles ?? [];
  articleListEl.innerHTML = renderArticleTable(articles);
  articleCountEl.textContent = String(articles.length);

  // Timeline
  renderTimeline(timelineEl, tlRes?.timeline ?? []);

  // Tone
  renderToneChart(toneEl, toneRes?.tone ?? []);

  setStatus("READY");
}

// ── Load topics overview ──
async function loadTopics(): Promise<void> {
  const res = await fetchTopics();
  if (res?.topics) {
    topicData = res.topics;
    renderPills();
    topicCardsEl.innerHTML = renderTopicCards(topicData);

    // Click on topic cards
    topicCardsEl.querySelectorAll(".topic-card").forEach((el) => {
      el.addEventListener("click", () => {
        const topic = (el as HTMLElement).dataset.topic;
        if (topic) {
          activeTopic = topic;
          loadTopic(activeTopic);
        }
      });
    });
  }
}

// ── Search ──
function handleSearch(): void {
  const q = searchInput.value.trim();
  if (q) {
    activeTopic = q;
    loadTopic(q);
  }
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") handleSearch();
});

// ── Keyboard shortcuts ──
document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.target === searchInput) return;
  switch (e.key) {
    case "F1":
      e.preventDefault();
      break;
    case "F2":
      e.preventDefault();
      // Cycle topics
      {
        const idx = topicData.findIndex((t) => t.topic === activeTopic);
        const next = (idx + 1) % topicData.length;
        activeTopic = topicData[next].topic;
        loadTopic(activeTopic);
      }
      break;
    case "F3":
      e.preventDefault();
      searchInput.focus();
      break;
    case "F4":
      e.preventDefault();
      loadTopic(activeTopic);
      loadTopics();
      break;
  }
});

// ── Init ──
updateClock();
setInterval(updateClock, 1000);

renderPills();
loadTopics();
loadTopic(activeTopic);

// Auto-refresh
setInterval(() => {
  loadTopic(activeTopic);
  loadTopics();
}, REFRESH_INTERVAL);
