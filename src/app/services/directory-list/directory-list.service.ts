import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Directory } from 'src/app/models/directory.model';

@Injectable()
export class DirectoryListService{
    constructor(private http: HttpClient){

    }

    getDirectoryList(): Observable<Directory[]>{
        const url = "./app/mock/directorylist.json";
        return this.http.get<Directory[]>(url);
    }
}