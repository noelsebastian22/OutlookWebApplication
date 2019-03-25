import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from 'src/app/services/email/email.service';
import { Email } from 'src/app/models/email.model';
import { EmailListService } from 'src/app/services/email-list/email-list.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Input() emailList: Email[];
  @Input() searchString: string;
  flag: boolean;
  constructor(
    private emailService: EmailService,
    private emailListService: EmailListService,
  ) { }

  ngOnInit() {
    this.getFlagged();
    this.markAsRead();
  }

  markAsRead(){
    this.emailListService.getMarkRead()
    .subscribe(mark=>{
      if(mark){
        this.emailList.forEach(mail=>{
          mail.unread=false;
        })
      }
      console.log(this.emailList)
    })
  }

  getFlagged() {
    this.emailListService.getflagged()
      .subscribe(this.getFlaggedSuccess, this.getFlaggedFailure)
  }
  getFlaggedSuccess = (flag: boolean) => {
    this.flag = flag;
  }

  getFlaggedFailure = (error: HttpErrorResponse) => {
    console.log("Error in getting the flagged value", error)
  }


  onSelect(email: Email): void {
    if (email.unread) {
      email.unread = false;
    }
    this.emailService.setEmail(email);
    window.localStorage.setItem("emailList", JSON.stringify(this.emailList));
  }

  deleteEmail(email) {
    this.emailList.splice(this.emailList.indexOf(email), 1);
    this.emailListService.deletedFiles.push(email);
    window.localStorage.setItem("deletedFiles", JSON.stringify(this.emailListService.deletedFiles))
    window.localStorage.setItem("emailList", JSON.stringify(this.emailList));
  }
  flagEmail(email: Email) {
    email.flagged = !email.flagged;
    window.localStorage.setItem("emailList", JSON.stringify(this.emailList));
  }
}
