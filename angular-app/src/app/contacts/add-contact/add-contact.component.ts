import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Contact, ContactService} from '../services/contact.service';
import {PersonGeneralInformationComponent} from '../contact-parts/person-general-informations/person-general-information.component';
import {AddressComponent} from '../contact-parts/address/address.component';
import {WayOfObtainingComponent} from '../contact-parts/way-of-obtaining/way-of-obtaining.component';
import {CompanyGeneralInformationComponent} from '../contact-parts/company-general-informations/company-general-information.component';
import {BaseInformationComponent} from '../contact-parts/base-information/base-information.component';


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
  @ViewChild('company', {read: CompanyGeneralInformationComponent, static: false})
  companyComponent: CompanyGeneralInformationComponent;
  // @ts-ignore
  @ViewChild('person', {read: PersonGeneralInformationComponent, static: false})
  personComponent: PersonGeneralInformationComponent;
  // @ts-ignore
  @ViewChild('wayOfObtainingComponent', {read: WayOfObtainingComponent, static: false})
  wayOfObtainingComponent: WayOfObtainingComponent;
  // @ts-ignore
  @ViewChild('address', {read: AddressComponent, static: false})
  addressComponent: AddressComponent;
  @ViewChild('baseInformation', {read: BaseInformationComponent, static: false})
  baseComponent: BaseInformationComponent;


  constructor(private contactService: ContactService, private router: Router) {

  }
  contact: Contact;
  submitted = false;
  isShow = 'PERSON';
  address: AddressComponent;
  contactForm: FormGroup;


  ngOnInit(): void {
  }

  save() {
    if (!this.isValid()) {
      this.markAsTouched();
      return;
    }
    this.contact = this.baseComponent.contact;
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

  private markAsTouched() {
// tslint:disable-next-line:triple-equals
    if (this.companyComponent != undefined) {
      this.companyComponent.companyForm.markAllAsTouched();
    }
    // tslint:disable-next-line:triple-equals
    if (this.personComponent != undefined) {
      this.personComponent.personForm.markAllAsTouched();
    }
    this.addressComponent.addressForm.markAllAsTouched();
    this.baseComponent.baseForm.markAllAsTouched();
  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/kontakty']);
  }

  ngAfterViewInit(): void {
  }



  isValid() {
    let isValidCompanyOrPerson;
    if (this.isShow === 'PERSON') {
      isValidCompanyOrPerson = this.personComponent.personForm.valid;
    } else {
      isValidCompanyOrPerson = this.companyComponent.companyForm.valid;
    }
    return this.baseComponent.baseForm.valid && isValidCompanyOrPerson && this.addressComponent.addressForm.valid;
  }
}
