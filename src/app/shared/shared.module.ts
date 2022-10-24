import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonComponent } from './components/button/button.component';
import { ValueSuffixPipe } from './pipes/value-suffix.pipe';

@NgModule({
  declarations: [BadgeComponent, ButtonComponent, ValueSuffixPipe],
  imports: [CommonModule],
  exports: [BadgeComponent, ButtonComponent, ValueSuffixPipe],
})
export class SharedModule {}
