import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmailListService {
    constructor(private http: HttpClient) {

    }

    getEmailList(): Observable<any[]> {
        const url: string = "./app/mock/inbox.json";
        return this.http.get<any[]>(url);
    }
}