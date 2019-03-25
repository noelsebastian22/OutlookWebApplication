import { Component, OnInit } from '@angular/core';
import { EmailListService } from 'src/app/services/email-list/email-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DirectoryListService } from 'src/app/services/directory-list/directory-list.service';
import { Directory } from 'src/app/models/directory.model';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  emailList: any[];
  searchString: any;
  currentDirectory: Directory;
  // deletedFiles: Email[] = [];

  constructor(
    private emailListService: EmailListService,
    private directoryListService: DirectoryListService
  ) { }

  ngOnInit() {
    this.getEmails();
    this.getSearchString();
    this.getCurrentDirectory();

  }

  getCurrentDirectory() {
    this.directoryListService.getcurrentDirectory()
      .subscribe(this.getCurrentDirectorySuccess)
  }
  getCurrentDirectorySuccess = (dir: Directory) => {
    this.currentDirectory = dir;
    if (this.currentDirectory.dirId === 1) {

    } else if (this.currentDirectory.dirId === 4) {
      // this.otherList = this.deletedFiles
    }
  }
  getCurrentDirectoryFailure = (error: HttpErrorResponse) => {
    console.log("Error in getting current directory");
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
    let savedEmailList = window.localStorage.getItem("emailList");
    if (savedEmailList) {
      this.emailListService.deletedFiles = JSON.parse(window.localStorage.getItem("deletedFiles"));
      this.emailList = JSON.parse(window.localStorage.getItem("emailList"));
    } else {
      this.emailListService.getEmailList()
        .subscribe(this.getEmailsSuccess, this.getEmailsFailure);
    }
  }

  private getEmailsSuccess = (emails: any[]) => {
    this.emailList = emails;
  }

  private getEmailsFailure = (error: HttpErrorResponse) => {
    console.log("The get email list api failed: ", error);
  }

}
