import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppTestServiceService {
  valueField = 10;

  get getValueField(): number {
    return this.valueField;
  }

  set setValueField(val: number) {
    this.valueField = val;
  }

  constructor() { }

  getTestMessage(): string {
    return 'test-message';
  }

  getObservableMessage(): Observable<string> {
    return of('observedMessage');
  }

  getObservableError(): Observable<string> {
    return of('').pipe(map(x => {
      throw new Error('error happened');
    }));
  }
}
