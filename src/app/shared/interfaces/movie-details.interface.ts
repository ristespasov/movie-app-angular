import { IGenre } from './genre.interface';

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Object;
  budget: number;
  genres: Array<IGenre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Object>;
  production_countries: Array<Object>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<Object>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
