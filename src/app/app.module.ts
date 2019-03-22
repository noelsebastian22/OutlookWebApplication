import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { DirectoryListComponent } from './home/directory-list/directory-list.component';
import { EmailListComponent } from './home/email-list/email-list.component';
import { MessageDisplayComponent } from './home/message-display/message-display.component';
import { EmailComponent } from './home/email-list/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    DirectoryListComponent,
    EmailListComponent,
    MessageDisplayComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
