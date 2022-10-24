import { IGenre } from './genre.interface';
import { IProductionCompany } from './production-company.interface';
import { IProductionCountry } from './production-country.interface';
import { ISpokenLanguage } from './spoken-language.interface';

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
  production_companies: Array<IProductionCompany>;
  production_countries: Array<IProductionCountry>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<ISpokenLanguage>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
