import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {ContactsComponent} from './contacts/contacts.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {EditCompanyComponent} from './edit-company/edit-company.component';
import {EditPersonComponent} from './edit-person/edit-person.component';
import {DetailsPersonComponent} from './details-person/details-person.component';
import {DetailsCompanyComponent} from './details-company/details-company.component';
import {AddEmployeesComponent} from './employees/add-employees/add-employees.component';
import {EmployeesListComponent} from './details-company/employees-list/employees-list.component';
import {EditEmployeeComponent} from './employees/edit-employee/edit-employee.component';


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
