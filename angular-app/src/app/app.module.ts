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

// @ts-ignore

import {MatButtonModule, MatCommonModule, MatFormFieldModule, MatSelectModule, MatTableModule} from '@angular/material';

// @ts-ignore
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';

import { AddressComponent } from './add-contact/address/address.component';
import { CompanyGeneralInformationsComponent } from './add-contact/company-general-informations/company-general-informations.component';
import { PersonGeneralInformationsComponent } from './add-contact/person-general-informations/person-general-informations.component';
import { MethodOfAcquisitionComponent } from './add-contact/method-of-acquisition/method-of-acquisition.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AddContactComponent} from './add-contact/add-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';





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
    MethodOfAcquisitionComponent,
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
    MatCommonModule
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
