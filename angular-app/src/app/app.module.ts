import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
// import {AddContactComponent} from "./add-contact/add-contact.component";
// import {Router, RouterModule, Routes} from "@angular/router";
// @ts-ignore
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';



import {
  _MatMenuDirectivesModule,
  MatButtonModule,
  MatCommonModule, MatDialogModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule,
  MatSelectModule,
  MatTableModule, MatTabsModule
} from '@angular/material';

// @ts-ignore
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { AddressComponent } from './contacts/contact-parts/address/address.component';
import { CompanyGeneralInformationsComponent } from './contacts/contact-parts/company-general-informations/company-general-informations.component';
import { PersonGeneralInformationsComponent } from './contacts/contact-parts/person-general-informations/person-general-informations.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddContactComponent} from './contacts/add-contact/add-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditCompanyComponent } from './contacts/edit-company/edit-company.component';
import { EditPersonComponent } from './contacts/edit-person/edit-person.component';

import { JwPaginationComponent } from 'jw-angular-pagination';
// @ts-ignore

import { DetailsCompanyComponent } from './details/details-company/details-company.component';
import { DetailsPersonComponent } from './details/details-person/details-person.component';
import { AddEmployeesComponent } from './details/details-company/employees/add-employees/add-employees.component';
import { EmployeesListComponent } from './details/details-company/employees/employees-list/employees-list.component';
import { SummaryComponent } from './details/details-company/summary/summary.component';
import { EditEmployeeComponent } from './details/details-company/employees/edit-employee/edit-employee.component';
import {WayOfObtainingComponent} from './contacts/contact-parts/way-of-obtaining/way-of-obtaining.component';







// const appRoutes :Routes =[
//   {
//     path: 'kontakty',
//     component:ContactsComponent
//   },
//   {
//     path: 'dodaj_kontakt',
//     component: AddContactComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactComponent,
    AddressComponent,
    CompanyGeneralInformationsComponent,
    PersonGeneralInformationsComponent,
    WayOfObtainingComponent,
    EditCompanyComponent,
    EditPersonComponent,
    DetailsCompanyComponent,
    DetailsPersonComponent,
    AddEmployeesComponent,
    EmployeesListComponent,
    SummaryComponent,
    EditEmployeeComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatCommonModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule

  ],
  exports: [
    MatRadioModule,
    MatCommonModule,
    MatNativeDateModule,
    MatRippleModule,

  ],
  providers: [
    // {
    //   provide: MAT_RADIO_DEFAULT_OPTIONS,
    //   useValue: { color: 'accent' },
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
