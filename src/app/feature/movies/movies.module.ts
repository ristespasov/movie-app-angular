import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [MoviesComponent, MovieDetailsComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}