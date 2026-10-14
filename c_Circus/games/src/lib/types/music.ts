// Music & Spotify Types
// Based on 01-spec.md specifications

export interface Track {
  id: string;
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  playedAt: Date;
  spotifyUrl: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
  spotifyUrl: string;
}

export interface Playlist {
  id: string;
  name: string;
  coverImage: string;
  trackCount: number;
  spotifyUrl: string;
}

export type TimeRange = '4weeks' | '6months' | 'alltime';
