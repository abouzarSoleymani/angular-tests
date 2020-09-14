import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  getTestMessage(): string {
    return 'test-message';
  }
}
