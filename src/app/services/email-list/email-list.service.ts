import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Email } from 'src/app/models/email.model';
import { Directory } from 'src/app/models/directory.model';

@Injectable()
export class EmailListService {

    // deletedFile = new Subject<Directory>();
    // deletedFile$ = this.deletedFile.asObservable();

    constructor(private http: HttpClient) {

    }

    // setdeletedFile(dir: Directory): void {
    //     this.deletedFile.next(dir);
    // }
    // getdeletedFile():Observable<Directory>{
    //     return this.deletedFile;
    // }


    getEmailList(): Observable<Email[]> {
        const url: string = "./app/mock/inbox.json";
        return this.http.get<Email[]>(url);
    }
}