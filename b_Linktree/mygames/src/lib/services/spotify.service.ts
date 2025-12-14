// Spotify API Service
// Handles Spotify OAuth flow and API calls for music data

import type { Track, Artist, Playlist, TimeRange } from '$lib/types';

// Spotify API configuration
const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

// Environment variables (from .env)
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID || '';
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || '';
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI || '';
const SCOPES = import.meta.env.VITE_SPOTIFY_SCOPES || 'user-top-read user-read-recently-played playlist-read-private';

// Token storage keys
const ACCESS_TOKEN_KEY = 'spotify_access_token';
const REFRESH_TOKEN_KEY = 'spotify_refresh_token';
const TOKEN_EXPIRY_KEY = 'spotify_token_expiry';

/**
 * Generate Spotify authorization URL for OAuth flow
 */
export function getAuthorizationUrl(): string {
	const params = new URLSearchParams({
		client_id: CLIENT_ID,
		response_type: 'code',
		redirect_uri: REDIRECT_URI,
		scope: SCOPES,
		show_dialog: 'true'
	});

	return `${SPOTIFY_AUTH_ENDPOINT}?${params.toString()}`;
}

/**
 * Exchange authorization code for access token
 */
export async function getAccessToken(code: string): Promise<void> {
	const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
		},
		body: new URLSearchParams({
			grant_type: 'authorization_code',
			code,
			redirect_uri: REDIRECT_URI
		})
	});

	if (!response.ok) {
		throw new Error('Failed to get access token');
	}

	const data = await response.json();
	storeTokens(data.access_token, data.refresh_token, data.expires_in);
}

/**
 * Refresh the access token using refresh token
 */
export async function refreshAccessToken(): Promise<void> {
	const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

	if (!refreshToken) {
		throw new Error('No refresh token available');
	}

	const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken
		})
	});

	if (!response.ok) {
		throw new Error('Failed to refresh token');
	}

	const data = await response.json();
	storeTokens(data.access_token, data.refresh_token || refreshToken, data.expires_in);
}

/**
 * Store tokens in localStorage
 */
function storeTokens(accessToken: string, refreshToken: string, expiresIn: number): void {
	const expiryTime = Date.now() + expiresIn * 1000;
	localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
	localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
	localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
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

	return Date.now() < parseInt(expiry);
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
 * Make authenticated API request to Spotify
 */
async function fetchSpotify(endpoint: string): Promise<any> {
	const token = await getValidToken();

	const response = await fetch(`${SPOTIFY_API_BASE}${endpoint}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});

	if (!response.ok) {
		throw new Error(`Spotify API error: ${response.statusText}`);
	}

	return response.json();
}

/**
 * Convert Spotify time range to API parameter
 */
function getTimeRangeParam(timeRange: TimeRange): string {
	const rangeMap = {
		'4weeks': 'short_term',
		'6months': 'medium_term',
		'alltime': 'long_term'
	};
	return rangeMap[timeRange];
}

/**
 * Get user's top tracks for a given time range
 */
export async function getTopTracks(timeRange: TimeRange = '4weeks', limit: number = 10): Promise<Track[]> {
	const range = getTimeRangeParam(timeRange);
	const data = await fetchSpotify(`/me/top/tracks?time_range=${range}&limit=${limit}`);

	return data.items.map((track: any) => ({
		id: track.id,
		name: track.name,
		artist: track.artists[0].name,
		album: track.album.name,
		albumArt: track.album.images[0]?.url || '',
		playedAt: new Date(), // Top tracks don't have playedAt
		spotifyUrl: track.external_urls.spotify
	}));
}

/**
 * Get user's top artists for a given time range
 */
export async function getTopArtists(timeRange: TimeRange = '4weeks', limit: number = 10): Promise<Artist[]> {
	const range = getTimeRangeParam(timeRange);
	const data = await fetchSpotify(`/me/top/artists?time_range=${range}&limit=${limit}`);

	return data.items.map((artist: any) => ({
		id: artist.id,
		name: artist.name,
		image: artist.images[0]?.url || '',
		genres: artist.genres,
		spotifyUrl: artist.external_urls.spotify
	}));
}

/**
 * Get user's recently played tracks
 */
export async function getRecentlyPlayed(limit: number = 20): Promise<Track[]> {
	const data = await fetchSpotify(`/me/player/recently-played?limit=${limit}`);

	return data.items.map((item: any) => ({
		id: item.track.id,
		name: item.track.name,
		artist: item.track.artists[0].name,
		album: item.track.album.name,
		albumArt: item.track.album.images[0]?.url || '',
		playedAt: new Date(item.played_at),
		spotifyUrl: item.track.external_urls.spotify
	}));
}

/**
 * Get user's playlists
 */
export async function getUserPlaylists(limit: number = 20): Promise<Playlist[]> {
	const data = await fetchSpotify(`/me/playlists?limit=${limit}`);

	return data.items.map((playlist: any) => ({
		id: playlist.id,
		name: playlist.name,
		coverImage: playlist.images[0]?.url || '',
		trackCount: playlist.tracks.total,
		spotifyUrl: playlist.external_urls.spotify
	}));
}

/**
 * Clear all stored tokens (logout)
 */
export function logout(): void {
	localStorage.removeItem(ACCESS_TOKEN_KEY);
	localStorage.removeItem(REFRESH_TOKEN_KEY);
	localStorage.removeItem(TOKEN_EXPIRY_KEY);
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
	return isTokenValid();
}
