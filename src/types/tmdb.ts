export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  cast_id?: number;
  name: string;
  profile_path: string | null;
  character: string;
}

export interface Credits {
  cast: CastMember[];
}

export interface VideoResult {
  key: string;
  type: string;
  site: string;
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
  genres: Genre[];
  genre_ids?: number[];
  runtime: number | null;
  original_language: string;
  adult: boolean;
  release_date?: string;
  credits: Credits;
  videos: { results: VideoResult[] };
}

export interface Season {
  id: number;
  name: string;
  poster_path: string | null;
  episode_count: number;
}

export interface Series {
  id: number;
  name: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
  genres: Genre[];
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  languages: string[];
  status: string;
  seasons: Season[];
  credits?: Credits;
  videos?: { results: VideoResult[] };
}

export interface PersonMovieCredit {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
  character?: string;
}

export interface Person {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department?: string;
  birthday?: string;
  deathday?: string | null;
  place_of_birth?: string;
  biography?: string;
  gender?: number;
  also_known_as?: string[];
  movie_credits: { cast: PersonMovieCredit[] };
}

export interface WatchlistItem {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  vote_average: number;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  media_type?: string;
  genre_ids?: number[];
  runtime?: number | null;
}

export interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  media_type: "movie" | "tv" | "person";
}

export type LanguageMap = Record<string, string>;
