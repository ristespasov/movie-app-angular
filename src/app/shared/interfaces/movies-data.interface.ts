import { IMovieResponse } from './movie.interface';

export interface IMoviesDataResponse {
  page: number;
  results: Array<IMovieResponse>;
  total_pages: number;
  total_results: number;
}
