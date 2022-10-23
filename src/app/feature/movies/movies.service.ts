import { HttpClient } from '@angular/common/http';
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

  getPopularMovies(): Observable<IMoviesDataResponse> {
    return this.http.get<IMoviesDataResponse>(
      endpoints.baseUrl + endpoints.popularMoviesUrl + '?api_key=' + api.apiKey
    );
  }
}
