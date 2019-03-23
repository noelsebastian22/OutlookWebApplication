import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {Email} from '../../models/email.model'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private currentEmail = new Subject<any>();

  currentMail$ = this.currentEmail.asObservable();

  constructor() { }

  setEmail(email: Email): void {
    this.currentEmail.next(email);
  }

  getCurrentEmail(): Observable<Email> {
    return this.currentEmail;
  }

}
