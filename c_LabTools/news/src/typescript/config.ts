const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

export const API_BASE = isLocal
  ? "http://localhost:3019/news"
  : "https://api.diegonmarcos.com/news";

export const DEFAULT_TOPICS = [
  { topic: "economy", label: "Economy" },
  { topic: "technology", label: "Technology" },
  { topic: "geopolitics", label: "Geopolitics" },
  { topic: "climate change", label: "Climate" },
  { topic: "finance markets", label: "Finance" },
  { topic: "artificial intelligence", label: "AI" },
  { topic: "energy", label: "Energy" },
  { topic: "health", label: "Health" },
];

export const REFRESH_INTERVAL = 60_000; // 1 minute
export const MAX_ARTICLES = 50;
