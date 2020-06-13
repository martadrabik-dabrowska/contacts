import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ContactsComponent} from './contacts/contacts.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {EditCompanyComponent} from './edit-company/edit-company.component';
import {EditPersonComponent} from './edit-person/edit-person.component';


const routes: Routes = [
  {
    path: 'kontakty',
    component: ContactsComponent
  },
  {
    path: 'dodaj_kontakt',
    component: AddContactComponent
  },
  {
    path: 'edytuj_firme',
    component: EditCompanyComponent
  },
  {
    path: 'edytuj_osobe',
    component: EditPersonComponent
  }];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
