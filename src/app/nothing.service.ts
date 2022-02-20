import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NothingService {
  constructor() {}

  getNothing(): string {
    return 'nothing to see here';
  }
}
