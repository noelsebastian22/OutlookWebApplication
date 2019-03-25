import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Email } from 'src/app/models/email.model';

@Injectable()
export class EmailListService {

    flagged = new Subject<boolean>();
    flagged$ = this.flagged.asObservable();

    markRead = new Subject<boolean>();
    markRead$ = this.markRead.asObservable();

    unreadCount = new Subject<number>();
    unreadCount$=this.unreadCount.asObservable();

    deletedFiles: Email[] = [];
    constructor(private http: HttpClient) {
    }

    setunreadCount(count:number):void{
        this.unreadCount.next(count)
    }
    getunreadCount():Observable<number>{
        return this.unreadCount;
    }

    setMarkRead(mark:boolean):void{
        this.markRead.next(mark)
    }
    getMarkRead():Observable<boolean>{
        return this.markRead;
    }

    setflagged(dir: boolean): void {
        this.flagged.next(dir);
    }
    getflagged(): Observable<boolean> {
        return this.flagged;
    }


    getEmailList(): Observable<Email[]> {
        const url: string = "./app/mock/inbox.json";
        return this.http.get<Email[]>(url);
    }

    getSentList(): Observable<Email[]> {
        const url: string = "./app/mock/sent-items.json";
        return this.http.get<Email[]>(url);
    }

    getJunkList(): Observable<Email[]> {
        const url: string = "./app/mock/spam.json";
        return this.http.get<Email[]>(url);
    }
}