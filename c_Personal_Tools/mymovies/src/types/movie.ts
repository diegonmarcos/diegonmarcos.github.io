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
  | 'home' | 'search' | 'series2025' | 'ghibli' | 'european' | 'newnoirs' | 'scifi'
  | 'staffpicks' | 'epics' | 'thrillers' | 'epicseries'
  | 'oscars2025' | 'oscars2024' | 'oscars2023' | 'oscars2022' | 'oscars2021' | 'oscars2020'
  | 'spielberg' | 'scorsese' | 'eastwood' | 'kubrick' | 'nolan' | 'tarantino'
  | 'streep' | 'nicholson' | 'alpacino' | 'deniro' | 'hanks' | 'dicaprio'
  | 'bulk'
