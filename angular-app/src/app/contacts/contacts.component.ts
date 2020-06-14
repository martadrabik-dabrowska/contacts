import { Component, OnInit } from '@angular/core';
import {Contact, ContactService} from './services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts: Contact[];
  public displayedColumns = ['name', 'type', 'email', 'phone' , 'edit', 'details']

  constructor(private contactRestApi: ContactService){}

  ngOnInit() {
     this.contactRestApi.getData().subscribe((res: any[]) => {
       this.contacts = res;
     });
  }

  getContactName(contact){
    if (null != contact.company){
      return contact.company.name;
    }else if (null != contact.person){
      return  contact.person.firstName + ' ' + contact.person.lastName;
    }
  }

  getContactType(contact){
    if (null != contact.company){
      return 'Firma';
    }else if (null != contact.person){
      return  'Osoba fizyczna';
    }
  }


  getEmail(contact: Contact) {
    return contact.email;
  }

  getPhoneNumber(contact: Contact) {
    return contact.phoneNumber;
  }

  getRouteLink(contact: Contact) {
    if (null != contact.company) {
      return '/edycja_firma';
    } else if (null != contact.person) {
      return  '/edycja_osoba_fizyczna';
    }
  }
  showDetails(contact: Contact) {
    if (null != contact.company) {
      return '/szczegoly_kontaktu_firma';
    } else if (null != contact.person) {
      return  '/szczegoly_kontaktu';
    }
  }




}
