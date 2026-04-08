import { DEFAULT_TOPICS } from "./config";
import { renderArticleTable, renderTopicPills, renderTopicCards } from "./render";
import { renderTimeline } from "./timeline";
import { renderToneChart } from "./tone";
import type { GdeltArticle, TopicSummary, TimelinePoint, ToneEntry } from "./types";

// ── Demo data (static, no API calls) ──

const DEMO_ARTICLES: Record<string, GdeltArticle[]> = {
  "economy": [
    { url: "#", title: "Global GDP Growth Forecast Revised Upward for 2026", seendate: "20260408T120000Z", socialimage: "", domain: "reuters.com", language: "English", sourcecountry: "US", tone: 3.2 },
    { url: "#", title: "Central Banks Signal Coordinated Rate Adjustments", seendate: "20260408T110000Z", socialimage: "", domain: "ft.com", language: "English", sourcecountry: "UK", tone: 1.5 },
    { url: "#", title: "Supply Chain Disruptions Ease as Shipping Costs Decline", seendate: "20260408T100000Z", socialimage: "", domain: "bloomberg.com", language: "English", sourcecountry: "US", tone: 4.1 },
    { url: "#", title: "Emerging Markets See Record Foreign Investment Inflows", seendate: "20260408T090000Z", socialimage: "", domain: "wsj.com", language: "English", sourcecountry: "US", tone: 5.8 },
    { url: "#", title: "European Manufacturing PMI Shows Unexpected Contraction", seendate: "20260408T080000Z", socialimage: "", domain: "ecb.europa.eu", language: "English", sourcecountry: "DE", tone: -2.3 },
    { url: "#", title: "US Labor Market Adds 280K Jobs Exceeding Expectations", seendate: "20260407T160000Z", socialimage: "", domain: "cnbc.com", language: "English", sourcecountry: "US", tone: 6.1 },
    { url: "#", title: "China Trade Surplus Narrows Amid Shifting Global Demand", seendate: "20260407T140000Z", socialimage: "", domain: "scmp.com", language: "English", sourcecountry: "HK", tone: -0.5 },
    { url: "#", title: "Commodity Prices Stabilize After Volatile Quarter", seendate: "20260407T120000Z", socialimage: "", domain: "commodities-now.com", language: "English", sourcecountry: "UK", tone: 1.2 },
  ],
  "technology": [
    { url: "#", title: "Quantum Computing Breakthrough Achieves 1000-Qubit Milestone", seendate: "20260408T120000Z", socialimage: "", domain: "nature.com", language: "English", sourcecountry: "UK", tone: 8.5 },
    { url: "#", title: "Open Source AI Models Close Gap with Proprietary Systems", seendate: "20260408T100000Z", socialimage: "", domain: "arxiv.org", language: "English", sourcecountry: "US", tone: 5.2 },
    { url: "#", title: "Global Semiconductor Shortage Finally Declared Over", seendate: "20260408T080000Z", socialimage: "", domain: "techcrunch.com", language: "English", sourcecountry: "US", tone: 7.1 },
    { url: "#", title: "EU Passes Comprehensive Digital Markets Enforcement Act", seendate: "20260407T150000Z", socialimage: "", domain: "politico.eu", language: "English", sourcecountry: "BE", tone: -1.8 },
    { url: "#", title: "Cybersecurity Spending Expected to Reach $300B by 2027", seendate: "20260407T130000Z", socialimage: "", domain: "gartner.com", language: "English", sourcecountry: "US", tone: 2.4 },
  ],
  "artificial intelligence": [
    { url: "#", title: "Claude 4.6 Sets New Benchmarks in Reasoning and Code Generation", seendate: "20260408T120000Z", socialimage: "", domain: "anthropic.com", language: "English", sourcecountry: "US", tone: 7.8 },
    { url: "#", title: "AI Agents Now Handle 40% of Enterprise Customer Service", seendate: "20260408T100000Z", socialimage: "", domain: "mckinsey.com", language: "English", sourcecountry: "US", tone: 4.2 },
    { url: "#", title: "Researchers Warn About Concentration in AI Training Data", seendate: "20260408T080000Z", socialimage: "", domain: "mit.edu", language: "English", sourcecountry: "US", tone: -3.1 },
    { url: "#", title: "AI-Powered Drug Discovery Enters Phase III Clinical Trials", seendate: "20260407T140000Z", socialimage: "", domain: "science.org", language: "English", sourcecountry: "US", tone: 6.5 },
    { url: "#", title: "Japan Invests $10B in National AI Infrastructure", seendate: "20260407T120000Z", socialimage: "", domain: "nikkei.com", language: "English", sourcecountry: "JP", tone: 5.0 },
    { url: "#", title: "AI Regulation Framework Adopted by G7 Nations", seendate: "20260407T100000Z", socialimage: "", domain: "bbc.com", language: "English", sourcecountry: "UK", tone: 1.3 },
  ],
};

const DEMO_TIMELINE: TimelinePoint[] = [
  { date: "20260401", value: 120 }, { date: "20260402", value: 145 },
  { date: "20260403", value: 132 }, { date: "20260404", value: 168 },
  { date: "20260405", value: 155 }, { date: "20260406", value: 189 },
  { date: "20260407", value: 210 }, { date: "20260408", value: 195 },
];

const DEMO_TONE: ToneEntry[] = [
  { url: "#", title: "Positive outlook", tone: 6.1, domain: "reuters.com" },
  { url: "#", title: "Market analysis", tone: 3.2, domain: "bloomberg.com" },
  { url: "#", title: "Recovery signs", tone: 4.5, domain: "ft.com" },
  { url: "#", title: "Growth forecast", tone: 2.8, domain: "wsj.com" },
  { url: "#", title: "Policy concerns", tone: -1.5, domain: "politico.eu" },
  { url: "#", title: "Trade tensions", tone: -3.2, domain: "scmp.com" },
  { url: "#", title: "Stable outlook", tone: 0.8, domain: "economist.com" },
  { url: "#", title: "Debt warning", tone: -4.1, domain: "imf.org" },
  { url: "#", title: "Innovation boom", tone: 7.3, domain: "wired.com" },
  { url: "#", title: "Climate risk", tone: -5.2, domain: "nature.com" },
];

let activeTopic = "economy";
const topicData: TopicSummary[] = DEFAULT_TOPICS.map((t) => ({
  ...t,
  articleCount: (DEMO_ARTICLES[t.topic] ?? DEMO_ARTICLES["economy"]).length,
  avgTone: 2.4,
  lastFetch: new Date().toISOString(),
}));

// ── DOM refs ──
const clockEl = document.getElementById("clock") as HTMLElement;
const pillsEl = document.getElementById("topic-pills") as HTMLElement;
const articleListEl = document.getElementById("article-list") as HTMLElement;
const articleCountEl = document.getElementById("article-count") as HTMLElement;
const timelineEl = document.getElementById("timeline-chart") as HTMLElement;
const toneEl = document.getElementById("tone-chart") as HTMLElement;
const topicCardsEl = document.getElementById("topic-cards") as HTMLElement;
const statusEl = document.getElementById("status-text") as HTMLElement;

function updateClock(): void {
  clockEl.textContent = new Date().toLocaleTimeString("en-GB", { hour12: false });
}

function renderPills(): void {
  pillsEl.innerHTML = renderTopicPills(topicData, activeTopic);
  pillsEl.querySelectorAll(".topic-pill").forEach((el) => {
    el.addEventListener("click", () => {
      const topic = (el as HTMLElement).dataset.topic;
      if (topic) { activeTopic = topic; loadTopic(activeTopic); }
    });
  });
}

function loadTopic(topic: string): void {
  statusEl.textContent = "DEMO MODE";
  renderPills();
  const articles = DEMO_ARTICLES[topic] ?? DEMO_ARTICLES["economy"];
  articleListEl.innerHTML = renderArticleTable(articles);
  articleCountEl.textContent = String(articles.length);
  renderTimeline(timelineEl, DEMO_TIMELINE);
  renderToneChart(toneEl, DEMO_TONE);
}

// Init
updateClock();
setInterval(updateClock, 1000);

renderPills();
topicCardsEl.innerHTML = renderTopicCards(topicData);
topicCardsEl.querySelectorAll(".topic-card").forEach((el) => {
  el.addEventListener("click", () => {
    const topic = (el as HTMLElement).dataset.topic;
    if (topic) { activeTopic = topic; loadTopic(activeTopic); }
  });
});

loadTopic(activeTopic);
