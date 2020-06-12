import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Router} from '@angular/router';

import {Contact, ContactService} from '../contacts/services/contact.service';
import {PersonGeneralInformationsComponent} from './person-general-informations/person-general-informations.component';
import {MethodOfAcquisitionComponent} from './method-of-acquisition/method-of-acquisition.component';
import {AddressComponent} from './address/address.component';
import {CompanyGeneralInformationsComponent} from './company-general-informations/company-general-informations.component';
export interface Way {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  // @ts-ignore
  @ViewChild('company')
  company: CompanyGeneralInformationsComponent;
  // @ts-ignore
  @ViewChild('person')
  person: PersonGeneralInformationsComponent;

  // tslint:disable-next-line:max-line-length
  constructor(private contactService: ContactService, private router: Router){
  }

  contact: Contact = new Contact();
  submitted = false;
  isShow = 'PERSON';
  address: AddressComponent;

  recomendate: MethodOfAcquisitionComponent;


  wayControl = new FormControl('', [Validators.required]);



  email = new FormControl('', [Validators.required, Validators.email]);

  ways: Way[] = [
    {value: 'recommendation', viewValue: 'Rekomendacja'},
    {value: 'conference', viewValue: 'konferencja i szkolenie'},
    {value: 'social media', viewValue: 'media społęcznościowe'},
    {value: 'web page', viewValue: 'strona www'},
    {value: 'other', viewValue: 'inne'}
  ];

  ngOnInit() {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Podaj email';
    }

    return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
  }





  newEmployee(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
  //  this.contact.addresses.push( this.address.address);
    if (this.isShow === 'PERSON') {
      this.contact.person = this.person.person;
    } else if (this.isShow === 'COMPANY') {
      this.contact.company = this.company.company;
    }
    this.contactService.addContact(this.contact)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contact = new Contact();
    this.gotoList();

  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/kontakty']);
  }






}
