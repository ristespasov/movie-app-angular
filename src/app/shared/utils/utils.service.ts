import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  formatMinutesToHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  };

  roundValue(value: number, decimal: number) {
    const multiplier = Math.pow(10, decimal || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}
