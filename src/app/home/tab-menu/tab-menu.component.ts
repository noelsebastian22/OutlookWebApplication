import { Component, OnInit } from '@angular/core';
import { EmailListService } from 'src/app/services/email-list/email-list.service';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})
export class TabMenuComponent implements OnInit {

  marked = false;
  theCheckbox = false;
  constructor(
    private emailListService:EmailListService
  ) { }

  ngOnInit() {
  }

  toggleVisibility(e){
    this.marked= e.target.checked;
    this.emailListService.setflagged(this.marked);
  }

  markAsRead(){
    this.emailListService.setMarkRead(true);
  }

}
