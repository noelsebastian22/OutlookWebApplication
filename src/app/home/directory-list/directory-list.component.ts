import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { DirectoryListService } from 'src/app/services/directory-list/directory-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Directory } from 'src/app/models/directory.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {


  // @Output() currentDirectory = new EventEmitter<any>();

  directoryList: Directory[];

  constructor(private directoryListService: DirectoryListService) {

  }

  ngOnInit() {
    this.getDirectoryList();
    this.onChanges();
  }

  searchForm = new FormGroup({
    searchInput: new FormControl('')
  });
  onSubmit() {
    console.warn(this.searchForm.value);
  }

  onChanges() {
    this.searchForm.get('searchInput').valueChanges.subscribe(val => {
      this.directoryListService.setsearchString(val)
    });
  }

  private getDirectoryList(): void {
    this.directoryListService.getDirectoryList().subscribe(this.getDirectoryListSuccess, this.getDirectoryListFailure);
  }

  private getDirectoryListSuccess = (directoryList: Directory[]) => {
    this.directoryList = directoryList;
    this.directoryListService.setcurrentDirectory(directoryList[0])
  }

  private getDirectoryListFailure = (error: HttpErrorResponse) => {
    console.log("The get directory list api failed: ", error);
  }

  directorySelect(directory) {
    this.directoryListService.setcurrentDirectory(directory)
    this.directoryList.forEach(dir => {
      if(dir.dirId==directory.dirId){
        dir.selected=true;
      }
      else{
        dir.selected=false;
      }
    })
  }
}
