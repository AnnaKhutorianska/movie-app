export interface FilmPeople {}

export interface Film {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface FilmsResponse {
  page: number;
  results: Film[] ;
  total_pages: number;
  total_results: number;
}

export enum MediaType {
  TV = 'tv',
  MOVIE = 'movie'
}
