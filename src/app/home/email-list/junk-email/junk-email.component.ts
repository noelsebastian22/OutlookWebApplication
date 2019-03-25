import { Component, OnInit } from '@angular/core';
import { EmailListService } from 'src/app/services/email-list/email-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-junk-email',
  templateUrl: './junk-email.component.html',
  styleUrls: ['./junk-email.component.css']
})
export class JunkEmailComponent implements OnInit {

  constructor(
    private emailListService: EmailListService,
  ) { }

  junkEmail:any;
  ngOnInit() {
    this.getJunkEmails();
  }

  private getJunkEmails(): void {

    let junkEmailList = window.localStorage.getItem("junkEmailList");
    if (junkEmailList) {
      this.emailListService.deletedFiles = JSON.parse(window.localStorage.getItem("deletedFiles"));
      this.junkEmail = JSON.parse(window.localStorage.getItem("junkEmailList"));
    } else {
      this.emailListService.getJunkList()
        .subscribe(this.getSentEmailsSuccess, this.getSentEmailsFailure);
    }

  }

  private getSentEmailsSuccess = (emails: any[]) => {
    console.log("sent emails", emails)
    this.junkEmail = emails;
  }

  private getSentEmailsFailure = (error: HttpErrorResponse) => {
    console.log("The get email list api failed: ", error);
  }


  deleteEmail(email) {
    this.junkEmail.splice(this.junkEmail.indexOf(email), 1);
    this.emailListService.deletedFiles.push(email);
    window.localStorage.setItem("deletedFiles", JSON.stringify(this.emailListService.deletedFiles))
    window.localStorage.setItem("junkEmailList", JSON.stringify(this.junkEmail));
  }

}
