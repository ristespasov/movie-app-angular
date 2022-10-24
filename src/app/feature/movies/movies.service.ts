import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/shared/constants/api.const';
import { endpoints } from 'src/app/shared/constants/endpoints.const';
import { IMovieDetails } from 'src/app/shared/interfaces/movie-details.interface';
import { IMoviesData } from 'src/app/shared/interfaces/movies-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies(page?: any): Observable<IMoviesData> {
    let params = new HttpParams().set('page', page);
    return this.http.get<IMoviesData>(
      endpoints.baseUrl + endpoints.popularMoviesUrl + '?api_key=' + api.apiKey,
      { params: params }
    );
  }

  getMovieDetails(id: string): Observable<IMovieDetails> {
    return this.http.get<IMovieDetails>(
      endpoints.baseUrl + id + '?api_key=' + api.apiKey
    );
  }

  rateMovie(id: string, rateValue: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
    });
    const body = { value: rateValue };
    const options = { headers: headers };
    return this.http.post<any>(
      endpoints.baseUrl +
        id +
        '/' +
        endpoints.rating +
        '?api_key=' +
        api.apiKey,
      body,
      options
    );
  }
}
