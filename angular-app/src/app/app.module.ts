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
  MatFormFieldModule, MatIconModule, MatMenuModule, MatPaginatorModule,
  MatSelectModule,
  MatTableModule, MatTabsModule
} from '@angular/material';

// @ts-ignore
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { AddressComponent } from './contact-parts/address/address.component';
import { CompanyGeneralInformationsComponent } from './contact-parts/company-general-informations/company-general-informations.component';
import { PersonGeneralInformationsComponent } from './contact-parts/person-general-informations/person-general-informations.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddContactComponent} from './add-contact/add-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
// @ts-ignore

import { DetailsCompanyComponent } from './details-company/details-company.component';
import { DetailsPersonComponent } from './details-person/details-person.component';
import { AddEmployeesComponent } from './employees/add-employees/add-employees.component';
import { EmployeesListComponent } from './details-company/employees-list/employees-list.component';
import { SummaryComponent } from './details-company/summary/summary.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import {WayOfObtainingComponent} from './contact-parts/way-of-obtaining/way-of-obtaining.component';







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
    EditEmployeeComponent
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
    MatPaginatorModule

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
