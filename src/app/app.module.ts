import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MoviesModule } from './feature/movies/movies.module';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, MoviesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
