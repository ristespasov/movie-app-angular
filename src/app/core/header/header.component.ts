import { Component, OnInit } from '@angular/core';
import { IRoute } from 'src/app/shared/interfaces/route.interface';
import { routes } from '../../shared/constants/routes.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  routes: Array<IRoute>;

  constructor() {}

  ngOnInit(): void {
    this.routes = routes;
  }
}
