import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SimpleModel } from './simple.model';

@Injectable()
export class SimpleService {

    get(): Observable<SimpleModel> {
        return of(simpleModel).pipe(debounceTime(200));
    }

    post(model: SimpleModel): Observable<number> {
        return of(0);
    }
}

const simpleModel: SimpleModel = {
    firstName: 'Ali',
    lastName: 'Yazdani'
};
