import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Contact, ContactService} from '../services/contact.service';
import {PersonGeneralInformationsComponent} from '../contact-parts/person-general-informations/person-general-informations.component';
import {AddressComponent} from '../contact-parts/address/address.component';
import {CompanyGeneralInformationsComponent} from '../contact-parts/company-general-informations/company-general-informations.component';
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
  companyComponent: CompanyGeneralInformationsComponent;
  // @ts-ignore
  @ViewChild('person', {read: PersonGeneralInformationsComponent, static: false})
  personComponent: PersonGeneralInformationsComponent;
  // @ts-ignore
  @ViewChild('wayOfObtainingComponent', {read: WayOfObtainingComponent, static: false})
  wayOfObtainingComponent: WayOfObtainingComponent;
  // @ts-ignore
  @ViewChild('address', {read: AddressComponent, static: false})
  addressComponent: AddressComponent;
  constructor(private contactService: ContactService, private router: Router) {

  }
  contact: Contact = new Contact();
  submitted = false;
  isShow = 'PERSON';
  address: AddressComponent;
  email = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
    this.contact = new Contact();
  }

  save() {
    if (this.isShow === 'PERSON') {
      this.contact.person = this.personComponent.person;
    } else if (this.isShow === 'COMPANY') {
      this.contact.company = this.companyComponent.companyy;
    }
    this.contact.wayOfObtaining = this.wayOfObtainingComponent.wayOfObtaining;
    this.contact.recommending = this.wayOfObtainingComponent.recommending;
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
