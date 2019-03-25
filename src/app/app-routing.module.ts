import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmailComponent } from './home/email-list/email/email.component';
import { DeletedEmailsComponent } from './home/email-list/deleted-emails/deleted-emails.component';
import { EmailListComponent } from './home/email-list/email-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: AppComponent,
      children: [
        {
          path: 'email-list',
          component: EmailListComponent,
          children: [
            { path: 'email-list/inbox', component: EmailComponent },
            { path: 'email-list/delete', component: DeletedEmailsComponent }
          ]
        },

      ]
    },

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
