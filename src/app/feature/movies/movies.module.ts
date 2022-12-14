import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbRatingModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MoviesRoutingModule,
    NgbRatingModule,
    NgbToastModule,
  ],
})
export class MoviesModule {}
