import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ContactsComponent} from './contacts/contacts.component';
import {AddContactComponent} from './contacts/add-contact/add-contact.component';
import {EditCompanyComponent} from './contacts/edit-company/edit-company.component';
import {EditPersonComponent} from './contacts/edit-person/edit-person.component';
import {DetailsPersonComponent} from './details/details-person/details-person.component';
import {DetailsCompanyComponent} from './details/details-company/details-company.component';
import {AddEmployeesComponent} from './details/details-company/employees/add-employees/add-employees.component';
import {EmployeesListComponent} from './details/details-company/employees/employees-list/employees-list.component';
import {EditEmployeeComponent} from './details/details-company/employees/edit-employee/edit-employee.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  },
  {
    path: 'kontakty',
    component: ContactsComponent
  },
  {
    path: 'dodaj_kontakt',
    component: AddContactComponent
  },
  {
    path: 'edycja_firma',
    component: EditCompanyComponent
  },
  {
    path: 'edycja_osoba_fizyczna',
    component: EditPersonComponent
  },
  {
    path: 'szczegoly_kontaktu',
    component: DetailsPersonComponent
  },
  {
    path: 'szczegoly_kontaktu_firma',
    component: DetailsCompanyComponent
  },
  {
    path: 'szczegoly_kontaktu_pracownicy',
    component: EmployeesListComponent
  },
  {
    path: 'dodaj_pracownika',
    component: AddEmployeesComponent
  },
  {
    path: 'edycja_pracownik',
    component: EditEmployeeComponent
  }


  ];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
