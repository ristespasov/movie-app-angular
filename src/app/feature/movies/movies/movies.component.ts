import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { endpoints } from 'src/app/shared/constants/endpoints.const';
import { IMovieResponse } from 'src/app/shared/interfaces/movie.interface';
import { PaginationConfigModel } from 'src/app/shared/models/pagination.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoviesComponent implements OnInit {
  isLoading = false;
  posterBaseUrl: string = endpoints.posterbaseUrl;
  responseMessage: string;
  popularMovies: Array<IMovieResponse>;
  paginationConfig: PaginationConfigModel;
  currentPageNumber: number;
  queryPageNumber: number;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.queryParams
      .pipe(
        switchMap((params: Params) =>
          this.moviesService.getPopularMovies(
            (this.queryPageNumber = params?.['page'])
          )
        )
      )
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.popularMovies = response?.results;
          this.currentPageNumber = 1;
          this.paginationConfig = {
            itemsPerPage: this.popularMovies.length,
            currentPage: this.queryPageNumber,
            totalItems: response.total_pages,
          };
          this.cdr.markForCheck();
          console.log(response);
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

  setPageQueryParam(page: number) {
    const queryParams: Params = {
      page: page,
    };
    if (page) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
    }
  }

  onPageChange(event: any) {
    this.currentPageNumber = event;
    this.setPageQueryParam(this.currentPageNumber);
  }
}
