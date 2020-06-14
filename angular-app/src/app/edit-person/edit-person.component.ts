import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CompanyGeneralInformationsComponent} from '../contact-parts/company-general-informations/company-general-informations.component';
import {PersonGeneralInformationsComponent} from '../contact-parts/person-general-informations/person-general-informations.component';
import {MethodOfAcquisitionComponent} from '../contact-parts/method-of-acquisition/method-of-acquisition.component';
import {AddressComponent} from '../contact-parts/address/address.component';
import {Contact, ContactService} from '../contacts/services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {Way} from '../add-contact/add-contact.component';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  // @ts-ignore
  @ViewChild('person', {read: PersonGeneralInformationsComponent, static: false})
  person: PersonGeneralInformationsComponent;
  // @ts-ignore
  @ViewChild('methodOfAcquisitionComponent', {read: MethodOfAcquisitionComponent, static: false})
  methodOfAcquisition: MethodOfAcquisitionComponent;
  // @ts-ignore
  @ViewChild('address', {read: AddressComponent, static: false})
  addressComponent: AddressComponent;



  // tslint:disable-next-line:max-line-length
  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute, private ref: ChangeDetectorRef){

  }

  contact: Contact = new Contact();
  submitted = false;
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


  ngOnInit(): void {
  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    let id = null;
    this.route.queryParams.subscribe(params => id = params.id);
    if (null != id) {
      this.contactService.getContactId(id)
        .subscribe(((res: any[]) => {
          this.contact = res[0];
          this.updateToOtherModule(this.contact);
        }));
    } else {
      this.contact = new Contact();
    }
  }


  updateToOtherModule(contact: Contact) {
    this.ref.detectChanges();
    this.person.person = contact.person;
    this.methodOfAcquisition.methodOfAcquisition = contact.wayOfObtaining
    this.addressComponent.addresses = contact.addresses;
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
    this.contact.person = this.person.person;

    this.contact.wayOfObtaining = this.methodOfAcquisition.methodOfAcquisition;
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






}
