import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { endpoints } from 'src/app/shared/constants/endpoints.const';
import { IGenre } from 'src/app/shared/interfaces/genre.interface';
import { IMovieDetails } from 'src/app/shared/interfaces/movie-details.interface';
import { RuntimeModel } from 'src/app/shared/models/runtime.model';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieDetailsComponent implements OnInit {
  isLoading = false;
  posterBaseUrl: string = endpoints.posterbaseUrl;
  id: string;
  responseMessage: string;
  movieDetails: IMovieDetails;
  releaseDate: Date;
  runtimeFormatted: RuntimeModel;
  genres: Array<IGenre>;
  ratingFormatted: number;

  constructor(
    private moviesService: MoviesService,
    private utilsService: UtilsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieDetails(this.id);
    });
  }

  getMovieDetails(id: string) {
    this.isLoading = true;
    this.moviesService.getMovieDetails(id).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.movieDetails = response;
        this.releaseDate = new Date(this.movieDetails.release_date);
        this.runtimeFormatted =
          this.utilsService.formatMinutesToHoursAndMinutes(
            this.movieDetails.runtime
          );
        this.genres = this.movieDetails.genres;
        this.ratingFormatted = this.utilsService.roundValue(
          this.movieDetails.vote_average,
          1
        );
        console.log(this.movieDetails);
      },
      error: (err) => {
        this.isLoading = false;
        this.responseMessage = err?.error?.status_message;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
