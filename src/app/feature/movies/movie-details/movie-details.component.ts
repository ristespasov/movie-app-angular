import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { endpoints } from 'src/app/shared/constants/endpoints.const';
import { IGenre } from 'src/app/shared/interfaces/genre.interface';
import { IMovieDetails } from 'src/app/shared/interfaces/movie-details.interface';
import { IProductionCompany } from 'src/app/shared/interfaces/production-company.interface';
import { IProductionCountry } from 'src/app/shared/interfaces/production-country.interface';
import { ISpokenLanguage } from 'src/app/shared/interfaces/spoken-language.interface';
import { RatingConfigModel } from 'src/app/shared/models/rating.model';
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
  productionCompanies: Array<IProductionCompany>;
  productionCompaniesNames: Array<string> = [];
  productionCountries: Array<IProductionCountry>;
  productionCountriesNames: Array<string> = [];
  spokenLanguages: Array<ISpokenLanguage>;
  spokenLanguagesNames: Array<string> = [];
  ratingFormatted: number;
  ratingConfig: RatingConfigModel;

  constructor(
    private moviesService: MoviesService,
    private utilsService: UtilsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ratingConfig = {
      selected: 0,
      hovered: 0,
    };
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
        this.productionCompanies = this.movieDetails.production_companies;
        this.productionCompanies.map((element) => {
          this.productionCompaniesNames.push(element.name);
        });
        this.productionCountries = this.movieDetails.production_countries;
        this.productionCountries.map((element) => {
          this.productionCountriesNames.push(element.name);
        });
        this.spokenLanguages = this.movieDetails.spoken_languages;
        this.spokenLanguages.map((element) => {
          this.spokenLanguagesNames.push(element.english_name);
        });
        this.ratingFormatted = this.utilsService.roundValue(
          this.movieDetails.vote_average,
          1
        );
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

  onMovieRate() {
    if (this.ratingConfig.selected) {
      this.moviesService
        .rateMovie(this.id, this.ratingConfig.selected)
        .subscribe({
          next: (response) => {
            console.log(response);
            console.log(this.ratingConfig.selected);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.isLoading = false;
          },
        });
    }
  }
}
