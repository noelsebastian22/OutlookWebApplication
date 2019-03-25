import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/app/models/email.model';
import { EmailListService } from 'src/app/services/email-list/email-list.service';

@Component({
  selector: 'app-deleted-emails',
  templateUrl: './deleted-emails.component.html',
  styleUrls: ['./deleted-emails.component.css']
})
export class DeletedEmailsComponent implements OnInit {

  @Input() searchString: string;
  deletedList: Email[];

  constructor(
    private emailListService: EmailListService
  ) { }

  ngOnInit() {
    this.deletedList=this.emailListService.deletedFiles
  }

}
