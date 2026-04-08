export interface GdeltArticle {
  url: string;
  title: string;
  seendate: string;
  socialimage: string;
  domain: string;
  language: string;
  sourcecountry: string;
  tone: number;
}

export interface ArticlesResponse {
  query: string;
  count: number;
  articles: GdeltArticle[];
}

export interface TimelinePoint {
  date: string;
  value: number;
}

export interface TimelineResponse {
  query: string;
  points: number;
  timeline: TimelinePoint[];
}

export interface ToneEntry {
  url: string;
  title: string;
  tone: number;
  domain: string;
}

export interface ToneResponse {
  query: string;
  count: number;
  tone: ToneEntry[];
}

export interface TopicSummary {
  topic: string;
  label: string;
  articleCount: number;
  avgTone: number;
  lastFetch: string;
}

export interface TopicsResponse {
  topics: TopicSummary[];
}
