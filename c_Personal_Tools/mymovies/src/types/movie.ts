export interface Movie {
  imdbID: string
  Title: string
  Year: string
  Type: 'movie' | 'series' | 'episode'
  Poster: string
  imdbRating?: string
  Plot?: string
  Genre?: string
  Director?: string
  Actors?: string
  Runtime?: string
  streamer?: string
}

export interface OmdbSearchResponse {
  Search?: Movie[]
  totalResults?: string
  Response: 'True' | 'False'
  Error?: string
}

export interface OmdbDetailResponse extends Movie {
  Response: 'True' | 'False'
  Error?: string
}

export type ViewType =
  | 'home' | 'search' | 'movies2025' | 'series2025' | 'staffpicks' | 'ghibli'
  | 'spielberg' | 'scorsese' | 'streep' | 'nicholson' | 'hepburn' | 'eastwood'
  | 'bulk'
