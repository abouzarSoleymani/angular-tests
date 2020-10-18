import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SimpleModel } from './simple.model';

@Injectable()
export class SimpleService {
    get(): Observable<SimpleModel> {
        return of(simpleModel);
    }

    post(model: SimpleModel): Observable<number> {
        return of(0);
    }
}

const simpleModel: SimpleModel = {
    firstName: 'Ali',
    lastName: 'Yazdani'
};
