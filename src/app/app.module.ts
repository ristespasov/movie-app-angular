import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
