import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DirectoryListService{
    constructor(private http: HttpClient){

    }

    getDirectoryList(): Observable<any>{
        const url = "./app/mock/directorylist.json";
        return this.http.get(url);
    }
}