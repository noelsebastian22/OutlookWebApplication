import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatTreeModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { DirectoryListComponent } from './home/directory-list/directory-list.component';
import { EmailListComponent } from './home/email-list/email-list.component';
import { MessageDisplayComponent } from './home/message-display/message-display.component';
import { EmailComponent } from './home/email-list/email/email.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectoryListService } from './services/directory-list/directory-list.service';
import { EmailListService } from './services/email-list/email-list.service';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule
  ],
  providers: [
    DirectoryListService,
    EmailListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
