import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from 'src/app/models/email.model';

@Injectable()
export class EmailListService {
    constructor(private http: HttpClient) {

    }

    getEmailList(): Observable<Email[]> {
        const url: string = "./app/mock/inbox.json";
        return this.http.get<Email[]>(url);
    }
}