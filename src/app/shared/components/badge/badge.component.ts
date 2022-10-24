import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BadgeComponent implements OnInit {
  @Input() size: string = 'medium';
  @Input() color: string = 'standard';
  @Input() label: string;
  customClasses: string;

  constructor() {}

  ngOnInit(): void {
    this.customClasses = this.size + ' ' + this.color;
  }
}
