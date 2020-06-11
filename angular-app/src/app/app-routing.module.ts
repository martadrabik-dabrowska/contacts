import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ContactsComponent} from './contacts/contacts.component';
import {AddContactComponent} from './add-contact/add-contact.component';


const routes: Routes = [
  {
    path: 'kontakty',
    component: ContactsComponent
  },
  {
    path: 'dodaj_kontakt',
    component: AddContactComponent
  }];

// const appRoutes:Routes =[
//
// ];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
