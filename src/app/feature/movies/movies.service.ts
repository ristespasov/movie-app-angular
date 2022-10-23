import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/shared/constants/api.const';
import { endpoints } from 'src/app/shared/constants/endpoints.const';
import { IMoviesDataResponse } from 'src/app/shared/interfaces/movies-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies(page?: any): Observable<IMoviesDataResponse> {
    let params = new HttpParams().set('page', page);
    return this.http.get<IMoviesDataResponse>(
      endpoints.baseUrl + endpoints.popularMoviesUrl + '?api_key=' + api.apiKey,
      { params: params }
    );
  }
}
