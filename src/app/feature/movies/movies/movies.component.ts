import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { endpoints } from 'src/app/shared/constants/endpoints.const';
import { IMovieResponse } from 'src/app/shared/interfaces/movie.interface';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit {
  responseMessage: string;
  posterBaseUrl: string = endpoints.posterbaseUrl;
  popularMovies: Array<IMovieResponse>;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe({
      next: (response) => {
        this.popularMovies = response.results;
      },
      error: (err) => {
        this.responseMessage = err.error.status_message;
      },
    });
  }
}
