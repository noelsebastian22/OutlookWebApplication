import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {

  email: any;
  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.emailService.currentMail$.subscribe(value=>{
      this.email = value;
      
    });
  }

}
