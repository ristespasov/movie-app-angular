import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, NgxPaginationModule],
  exports: [LoaderComponent, NgxPaginationModule],
})
export class CoreModule {}
