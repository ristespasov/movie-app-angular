import { IMovie } from './movie.interface';

export interface IMoviesData {
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
}
