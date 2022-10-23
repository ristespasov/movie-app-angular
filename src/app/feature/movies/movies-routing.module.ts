import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MoviesRoutingModule {}
