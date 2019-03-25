import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmailComponent } from './home/email-list/email/email.component';
import { DeletedEmailsComponent } from './home/email-list/deleted-emails/deleted-emails.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AppComponent },
    {path:'inbox',component:EmailComponent},
    {path:'delete',component:DeletedEmailsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
