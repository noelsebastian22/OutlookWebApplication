import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private currentEmail = new Subject<any>();

  currentMail$ = this.currentEmail.asObservable();

  constructor() { }

  setEmail(email: any): void {
    this.currentEmail.next(email);
  }

  getCurrentEmail(): any {
    return this.currentEmail;
  }

}
