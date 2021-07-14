import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from '../contact/contact-list/contact-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    children: [
      {
        path: 'details',
        component: ContactListComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
