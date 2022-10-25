import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [LoaderComponent, HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule, NgxPaginationModule, RouterModule, SharedModule],
  exports: [
    LoaderComponent,
    HeaderComponent,
    PageNotFoundComponent,
    NgxPaginationModule,
  ],
})
export class CoreModule {}
