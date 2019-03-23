import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() toggle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  newEmail():void{
    alert("Create a new Email.");
  }

  markAsRead(): void{
    alert("Mark As Read is clicked.");
  }

  toggleSideBar():void{
    this.toggle.emit(true);
  }

}
