import { Component, OnInit } from '@angular/core';
import { EmailListService } from 'src/app/services/email-list/email-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EmailService } from 'src/app/services/email/email.service';
import { DirectoryListService } from 'src/app/services/directory-list/directory-list.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  emailList: any[];
  searchString: any;

  constructor(
    private emailListService: EmailListService,
    private emailService: EmailService,
    private directoryListService: DirectoryListService
  ) { }

  ngOnInit() {
    this.getEmails();
    this.getSearchString();
  }

  getSearchString() {
    this.directoryListService.getsearchString()
      .subscribe(this.getSearchStringSuccess, this.getSearchStringError);
  }

  getSearchStringSuccess = (str: any) => {
    this.searchString = str;
  }
  getSearchStringError = (error: HttpErrorResponse) => {
    console.log("getSearchString API Failed", error);
  }


  private getEmails(): void {
    this.emailListService.getEmailList()
      .subscribe(this.getEmailsSuccess, this.getEmailsFailure);
  }

  private getEmailsSuccess = (emails: any[]) => {
    this.emailList = emails;
  }

  private getEmailsFailure = (error: HttpErrorResponse) => {
    console.log("The get email list api failed: ", error);
  }

  onSelect(email): void {
    this.emailService.setEmail(email);
  }
}
