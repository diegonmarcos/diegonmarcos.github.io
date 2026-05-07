// Strava API Service
// Handles Strava OAuth flow and API calls for activity data

import type { Activity, ActivityStats, Achievement } from '$lib/types';

// Strava API configuration
const STRAVA_AUTH_ENDPOINT = 'https://www.strava.com/oauth/authorize';
const STRAVA_TOKEN_ENDPOINT = 'https://www.strava.com/oauth/token';
const STRAVA_API_BASE = 'https://www.strava.com/api/v3';

// Environment variables (from .env)
const CLIENT_ID = import.meta.env.VITE_STRAVA_CLIENT_ID || '';
const CLIENT_SECRET = import.meta.env.VITE_STRAVA_CLIENT_SECRET || '';
const REDIRECT_URI = import.meta.env.VITE_STRAVA_REDIRECT_URI || '';
const SCOPES = import.meta.env.VITE_STRAVA_SCOPES || 'activity:read_all,profile:read_all';

// Token storage keys
const ACCESS_TOKEN_KEY = 'strava_access_token';
const REFRESH_TOKEN_KEY = 'strava_refresh_token';
const TOKEN_EXPIRY_KEY = 'strava_token_expiry';

// Cache keys
const CACHE_PREFIX = 'strava_cache_';
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

/**
 * Generate Strava authorization URL for OAuth flow
 */
export function getAuthorizationUrl(): string {
	const params = new URLSearchParams({
		client_id: CLIENT_ID,
		response_type: 'code',
		redirect_uri: REDIRECT_URI,
		approval_prompt: 'auto',
		scope: SCOPES
	});

	return `${STRAVA_AUTH_ENDPOINT}?${params.toString()}`;
}

/**
 * Exchange authorization code for access token
 */
export async function getAccessToken(code: string): Promise<void> {
	const response = await fetch(STRAVA_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			client_id: CLIENT_ID,
			client_secret: CLIENT_SECRET,
			code,
			grant_type: 'authorization_code'
		})
	});

	if (!response.ok) {
		throw new Error('Failed to get access token');
	}

	const data = await response.json();
	storeTokens(data.access_token, data.refresh_token, data.expires_at);
}

/**
 * Refresh the access token using refresh token
 */
export async function refreshAccessToken(): Promise<void> {
	const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

	if (!refreshToken) {
		throw new Error('No refresh token available');
	}

	const response = await fetch(STRAVA_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			client_id: CLIENT_ID,
			client_secret: CLIENT_SECRET,
			refresh_token: refreshToken,
			grant_type: 'refresh_token'
		})
	});

	if (!response.ok) {
		throw new Error('Failed to refresh token');
	}

	const data = await response.json();
	storeTokens(data.access_token, data.refresh_token, data.expires_at);
}

/**
 * Store tokens in localStorage
 */
function storeTokens(accessToken: string, refreshToken: string, expiresAt: number): void {
	localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
	localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
	localStorage.setItem(TOKEN_EXPIRY_KEY, expiresAt.toString());
}

/**
 * Check if the access token is valid
 */
export function isTokenValid(): boolean {
	const token = localStorage.getItem(ACCESS_TOKEN_KEY);
	const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

	if (!token || !expiry) {
		return false;
	}

	return Date.now() / 1000 < parseInt(expiry);
}

/**
 * Get the current access token, refreshing if necessary
 */
async function getValidToken(): Promise<string> {
	if (!isTokenValid()) {
		await refreshAccessToken();
	}

	const token = localStorage.getItem(ACCESS_TOKEN_KEY);
	if (!token) {
		throw new Error('No access token available');
	}

	return token;
}

/**
 * Make authenticated API request to Strava
 */
async function fetchStrava(endpoint: string): Promise<any> {
	const token = await getValidToken();

	const response = await fetch(`${STRAVA_API_BASE}${endpoint}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	if (!response.ok) {
		throw new Error(`Strava API error: ${response.statusText}`);
	}

	return response.json();
}

/**
 * Get from cache or fetch fresh data
 */
async function getCachedOrFetch<T>(cacheKey: string, fetchFn: () => Promise<T>): Promise<T> {
	const cached = localStorage.getItem(CACHE_PREFIX + cacheKey);

	if (cached) {
		const { data, timestamp } = JSON.parse(cached);
		if (Date.now() - timestamp < CACHE_DURATION) {
			return data;
		}
	}

	const freshData = await fetchFn();
	localStorage.setItem(
		CACHE_PREFIX + cacheKey,
		JSON.stringify({ data: freshData, timestamp: Date.now() })
	);

	return freshData;
}

/**
 * Get athlete's activities for a specific year
 */
export async function getActivities(year: number, limit: number = 100): Promise<Activity[]> {
	const cacheKey = `activities_${year}`;

	return getCachedOrFetch(cacheKey, async () => {
		// Calculate Unix timestamps for the year
		const after = Math.floor(new Date(`${year}-01-01`).getTime() / 1000);
		const before = Math.floor(new Date(`${year + 1}-01-01`).getTime() / 1000);

		const data = await fetchStrava(`/athlete/activities?after=${after}&before=${before}&per_page=${limit}`);

		return data.map((activity: any) => ({
			id: activity.id.toString(),
			name: activity.name,
			type: activity.type,
			distance: activity.distance,
			duration: activity.moving_time,
			elevationGain: activity.total_elevation_gain,
			date: new Date(activity.start_date),
			mapPolyline: activity.map?.summary_polyline,
			stravaUrl: `https://www.strava.com/activities/${activity.id}`
		}));
	});
}

/**
 * Calculate statistics for a specific year
 */
export async function getYearStats(year: number): Promise<ActivityStats> {
	const activities = await getActivities(year);

	return {
		totalDistance: activities.reduce((sum, a) => sum + a.distance, 0),
		totalElevation: activities.reduce((sum, a) => sum + a.elevationGain, 0),
		activityCount: activities.length,
		totalTime: activities.reduce((sum, a) => sum + a.duration, 0),
		year
	};
}

/**
 * Find achievements from activities
 */
export async function getAchievements(year: number): Promise<Achievement[]> {
	const activities = await getActivities(year);
	const achievements: Achievement[] = [];

	// Find longest distance
	const longestDistance = activities.reduce((max, a) => (a.distance > max.distance ? a : max), activities[0]);
	if (longestDistance) {
		achievements.push({
			type: 'distance',
			value: longestDistance.distance / 1000, // Convert to km
			unit: 'km',
			date: longestDistance.date,
			activityId: longestDistance.id
		});
	}

	// Find highest elevation
	const highestElevation = activities.reduce((max, a) => (a.elevationGain > max.elevationGain ? a : max), activities[0]);
	if (highestElevation) {
		achievements.push({
			type: 'elevation',
			value: highestElevation.elevationGain,
			unit: 'm',
			date: highestElevation.date,
			activityId: highestElevation.id
		});
	}

	// Find fastest pace (for runs)
	const runs = activities.filter(a => a.type === 'Run');
	if (runs.length > 0) {
		const fastestRun = runs.reduce((fastest, run) => {
			const pace = run.duration / (run.distance / 1000); // seconds per km
			const fastestPace = fastest.duration / (fastest.distance / 1000);
			return pace < fastestPace ? run : fastest;
		}, runs[0]);

		const pace = fastestRun.duration / (fastestRun.distance / 1000);
		achievements.push({
			type: 'speed',
			value: pace / 60, // Convert to minutes per km
			unit: 'min/km',
			date: fastestRun.date,
			activityId: fastestRun.id
		});
	}

	// Calculate activity streak
	const sortedActivities = [...activities].sort((a, b) => a.date.getTime() - b.date.getTime());
	let currentStreak = 1;
	let maxStreak = 1;
	let streakEnd = sortedActivities[0]?.date;

	for (let i = 1; i < sortedActivities.length; i++) {
		const daysDiff = Math.floor(
			(sortedActivities[i].date.getTime() - sortedActivities[i - 1].date.getTime()) / (1000 * 60 * 60 * 24)
		);

		if (daysDiff <= 7) {
			// Activities within a week count as continuing the streak
			currentStreak++;
			if (currentStreak > maxStreak) {
				maxStreak = currentStreak;
				streakEnd = sortedActivities[i].date;
			}
		} else {
			currentStreak = 1;
		}
	}

	if (maxStreak > 1 && streakEnd) {
		achievements.push({
			type: 'streak',
			value: maxStreak,
			unit: 'activities',
			date: streakEnd,
			activityId: sortedActivities[sortedActivities.length - 1].id
		});
	}

	return achievements;
}

/**
 * Get a single activity by ID
 */
export async function getActivity(activityId: string): Promise<Activity> {
	const data = await fetchStrava(`/activities/${activityId}`);

	return {
		id: data.id.toString(),
		name: data.name,
		type: data.type,
		distance: data.distance,
		duration: data.moving_time,
		elevationGain: data.total_elevation_gain,
		date: new Date(data.start_date),
		mapPolyline: data.map?.polyline,
		stravaUrl: `https://www.strava.com/activities/${data.id}`
	};
}

/**
 * Clear all stored tokens (logout)
 */
export function logout(): void {
	localStorage.removeItem(ACCESS_TOKEN_KEY);
	localStorage.removeItem(REFRESH_TOKEN_KEY);
	localStorage.removeItem(TOKEN_EXPIRY_KEY);

	// Clear all cached data
	Object.keys(localStorage)
		.filter(key => key.startsWith(CACHE_PREFIX))
		.forEach(key => localStorage.removeItem(key));
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
	return isTokenValid();
}

/**
 * Clear cache for specific year or all cache
 */
export function clearCache(year?: number): void {
	if (year) {
		localStorage.removeItem(CACHE_PREFIX + `activities_${year}`);
	} else {
		Object.keys(localStorage)
			.filter(key => key.startsWith(CACHE_PREFIX))
			.forEach(key => localStorage.removeItem(key));
	}
}
