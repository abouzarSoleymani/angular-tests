import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

@Injectable()
export class HelpService {
    constructor(private http: HttpClient) {}
    updateHelpSubsection(id: string, subSection: any) {
        return this.http.put<any>(`url`, subSection).pipe(first());
    }
}

