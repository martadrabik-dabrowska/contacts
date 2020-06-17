import {AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Router} from '@angular/router';

import {Contact, ContactService} from '../contacts/services/contact.service';
import {PersonGeneralInformationsComponent} from '../contact-parts/person-general-informations/person-general-informations.component';

import {AddressComponent} from '../contact-parts/address/address.component';
import {CompanyGeneralInformationsComponent} from '../contact-parts/company-general-informations/company-general-informations.component';
import { ActivatedRoute } from '@angular/router';
import {WayOfObtainingComponent} from '../contact-parts/way-of-obtaining/way-of-obtaining.component';


export interface Way {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit, AfterViewInit {


  // @ts-ignore
  @ViewChild('company', {read: CompanyGeneralInformationsComponent, static: false})
  company: CompanyGeneralInformationsComponent;
  // @ts-ignore
  @ViewChild('person', {read: PersonGeneralInformationsComponent, static: false})
  person: PersonGeneralInformationsComponent;
  // @ts-ignore
  @ViewChild('wayOfObtainingComponent', {read: WayOfObtainingComponent, static: false})
  wayOfObtaining: WayOfObtainingComponent;
  // @ts-ignore
  @ViewChild('address', {read: AddressComponent, static: false})
  addressComponent: AddressComponent;



  // tslint:disable-next-line:max-line-length
  constructor(private contactService: ContactService, private router: Router) {

  }

  contact: Contact = new Contact();
  submitted = false;
  isShow = 'PERSON';
  address: AddressComponent;
  recomendate: WayOfObtainingComponent;
  // wayControl = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  // ways: Way[] = [
  //   {value: 'recommendation', viewValue: 'Rekomendacja'},
  //   {value: 'conference', viewValue: 'konferencja i szkolenie'},
  //   {value: 'social media', viewValue: 'media społęcznościowe'},
  //   {value: 'web page', viewValue: 'strona www'},
  //   {value: 'other', viewValue: 'inne'}
  // ];


  ngOnInit(): void {
    this.contact = new Contact();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Podaj email';
    }

    return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
  }

  newContact(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
  //  this.contact.addresses.push( this.address.address);
    if (this.isShow === 'PERSON') {
      this.contact.person = this.person.person;
    } else if (this.isShow === 'COMPANY') {
      this.contact.company = this.company.companyy;
    }
    this.contact.wayOfObtaining = this.wayOfObtaining.wayOfObtaining;
    this.contact.addresses = this.addressComponent.addresses;
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

  ngAfterViewInit(): void {
  }






}
