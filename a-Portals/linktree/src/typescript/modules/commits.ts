// Commits panel — the repository's recent history plus aggregate stats,
// pulled live from the public GitHub REST API (no token: 60 requests/hour
// per IP, which is far more than a human clicking a menu item will use).

import { openPanel } from './panel';

const REPO = 'diegonmarcos/front';
const REPO_URL = `https://github.com/${REPO}`;
const PAGE_SIZE = 100;
const ACTIVITY_WEEKS = 12;

export interface RepoCommit {
  sha: string;
  message: string;
  author: string;
  date: string; // ISO — formatted at render time, kept sortable here
  url: string;
}

export async function getRepoCommits(path?: string): Promise<RepoCommit[]> {
  try {
    const query = new URLSearchParams({ per_page: String(PAGE_SIZE) });
    if (path) query.set('path', path);
    const response = await fetch(`https://api.github.com/repos/${REPO}/commits?${query}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });
    if (!response.ok) return [];
    const data = (await response.json()) as Array<{
      sha: string;
      html_url: string;
      commit: { message: string; author: { name: string; date: string } };
    }>;
    return data.map((c) => ({
      sha: c.sha.slice(0, 7),
      message: c.commit.message.split('\n')[0] ?? '',
      author: c.commit.author.name,
      date: c.commit.author.date,
      url: c.html_url,
    }));
  } catch {
    return [];
  }
}

// Escape before interpolating — commit subjects are arbitrary author text
// and land inside an innerHTML template.
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch] ?? ch,
  );
}

function dayKey(iso: string): string {
  return iso.slice(0, 10);
}

export interface CommitStats {
  total: number;
  authors: Array<{ name: string; count: number }>;
  spanDays: number;
  perWeek: string;
  busiestDay: { day: string; count: number } | null;
  activity: Array<{ label: string; count: number }>;
}

export function computeStats(commits: RepoCommit[]): CommitStats {
  const byAuthor = new Map<string, number>();
  const byDay = new Map<string, number>();
  for (const c of commits) {
    byAuthor.set(c.author, (byAuthor.get(c.author) ?? 0) + 1);
    byDay.set(dayKey(c.date), (byDay.get(dayKey(c.date)) ?? 0) + 1);
  }

  const times = commits.map((c) => new Date(c.date).getTime());
  const newest = Math.max(...times);
  const oldest = Math.min(...times);
  const spanDays = Math.max(1, Math.round((newest - oldest) / 86_400_000));

  const busiest = [...byDay.entries()].sort((a, b) => b[1] - a[1])[0];

  // Weekly buckets counting back from the most recent commit, oldest first.
  const week = 7 * 86_400_000;
  const activity = Array.from({ length: ACTIVITY_WEEKS }, (_, i) => {
    const end = newest - i * week;
    const count = times.filter((t) => t <= end && t > end - week).length;
    return { label: `${i === 0 ? 'now' : `-${i}w`}`, count };
  }).reverse();

  return {
    total: commits.length,
    authors: [...byAuthor.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count),
    spanDays,
    perWeek: (commits.length / (spanDays / 7)).toFixed(1),
    busiestDay: busiest ? { day: busiest[0], count: busiest[1] } : null,
    activity,
  };
}

function renderStats(stats: CommitStats): string {
  const peak = Math.max(1, ...stats.activity.map((a) => a.count));
  const topAuthors = stats.authors.slice(0, 6);

  return `
    <div class="diag-section">
      <h3>Stats</h3>
      <div class="diag-grid">
        <div class="diag-item"><span class="diag-label">Commits:</span><span class="diag-value">${stats.total}</span></div>
        <div class="diag-item"><span class="diag-label">Authors:</span><span class="diag-value">${stats.authors.length}</span></div>
        <div class="diag-item"><span class="diag-label">Span:</span><span class="diag-value">${stats.spanDays} days</span></div>
        <div class="diag-item"><span class="diag-label">Average:</span><span class="diag-value">${stats.perWeek} / week</span></div>
        ${stats.busiestDay
          ? `<div class="diag-item"><span class="diag-label">Busiest day:</span><span class="diag-value">${stats.busiestDay.day} (${stats.busiestDay.count})</span></div>`
          : ''}
      </div>

      <h4 class="diag-subhead">Activity (last ${ACTIVITY_WEEKS} weeks)</h4>
      <div class="commit-activity">
        ${stats.activity.map((a) => `
          <div class="commit-activity__col" title="${a.label}: ${a.count} commits">
            <div class="commit-activity__bar" style="height:${Math.round((a.count / peak) * 100)}%"></div>
            <span class="commit-activity__label">${a.label}</span>
          </div>`).join('')}
      </div>

      <h4 class="diag-subhead">By author</h4>
      <div class="commit-authors">
        ${topAuthors.map((a) => `
          <div class="commit-author">
            <span class="commit-author__name">${escapeHtml(a.name)}</span>
            <span class="commit-author__bar" style="width:${Math.round((a.count / stats.total) * 100)}%"></span>
            <span class="commit-author__count">${a.count}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderCommits(commits: RepoCommit[]): string {
  if (commits.length === 0) {
    return `<div class="diagnostics-container">
      <p class="diag-no-data">Could not fetch commits — GitHub API rate limit reached, or you are offline.</p>
    </div>`;
  }

  const stats = computeStats(commits);

  return `
    <div class="diagnostics-container">
      ${renderStats(stats)}

      <div class="diag-section">
        <h3>History (last ${commits.length})</h3>
        <div class="diag-commits">
          ${commits.map((c) => `
            <div class="diag-commit">
              <a class="diag-commit-sha" href="${c.url}" target="_blank" rel="noopener">${c.sha}</a>
              <span class="diag-commit-msg">${escapeHtml(c.message)}</span>
              <span class="diag-commit-meta">${escapeHtml(c.author)} · ${new Date(c.date).toLocaleDateString()}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="diag-section">
        <h3>Sources</h3>
        <div class="diag-sources">
          <a class="diag-source-link" href="${REPO_URL}/commits/main" target="_blank" rel="noopener">
            <img src="public/icons/brand-github.svg" alt="" width="16" height="16"> Full history
          </a>
          <a class="diag-source-link" href="${REPO_URL}/tree/main/a-Portals/linktree" target="_blank" rel="noopener">
            <img src="public/icons/brand-github.svg" alt="" width="16" height="16"> Repo
          </a>
          <a class="diag-source-link" href="${REPO_URL}/releases" target="_blank" rel="noopener">
            <img src="public/icons/brand-github.svg" alt="" width="16" height="16"> Releases
          </a>
        </div>
      </div>
    </div>`;
}

export function initCommitsPanel(): void {
  document.getElementById('commits-toggle')?.addEventListener('click', () => {
    openPanel({
      title: 'Commits',
      loadingLabel: 'Fetching commit history…',
      render: async () => renderCommits(await getRepoCommits()),
    });
  });
}
