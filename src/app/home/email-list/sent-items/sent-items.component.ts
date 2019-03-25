import { Component, OnInit, Input } from '@angular/core';
import { EmailListService } from 'src/app/services/email-list/email-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sent-items',
  templateUrl: './sent-items.component.html',
  styleUrls: ['./sent-items.component.css']
})
export class SentItemsComponent implements OnInit {

  @Input() searchString: string;
  sentEmailList: any
  constructor(
    private emailListService: EmailListService,
  ) { }

  ngOnInit() {
    this.getSentEmails();
  }

  private getSentEmails(): void {

    let savedEmailList = window.localStorage.getItem("sentEmailList");
    if (savedEmailList) {
      this.emailListService.deletedFiles = JSON.parse(window.localStorage.getItem("deletedFiles"));
      this.sentEmailList = JSON.parse(window.localStorage.getItem("sentEmailList"));
    } else {
      this.emailListService.getSentList()
      .subscribe(this.getSentEmailsSuccess, this.getSentEmailsFailure);
    }
    
  }

  private getSentEmailsSuccess = (emails: any[]) => {
    this.sentEmailList = emails;
  }

  private getSentEmailsFailure = (error: HttpErrorResponse) => {
    console.log("The get email list api failed: ", error);
  }

  
  deleteEmail(email) {
    this.sentEmailList.splice(this.sentEmailList.indexOf(email), 1);
    this.emailListService.deletedFiles.push(email);
    window.localStorage.setItem("deletedFiles", JSON.stringify(this.emailListService.deletedFiles))
    window.localStorage.setItem("sentEmailList", JSON.stringify(this.sentEmailList));
  }
}
