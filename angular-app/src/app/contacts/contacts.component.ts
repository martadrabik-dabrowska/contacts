import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Address, Contact, ContactService} from './services/contact.service';
import {Observable} from 'rxjs';
import {Employee} from './services/employee.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactRestApi: ContactService, private router: Router) {}
  contacts: Observable<Contact[]>;
  // public displayedColumns = ['name', 'type', 'email', 'phone' , 'edit', 'delete'];
  // private contact: Contact;

  items = [];
  pageOfItems: Array<Contact>;

onChangePage(pageOfItems: Array<Contact>) {
    this.pageOfItems = pageOfItems;
  }
  ngOnInit() {
    this.reloadData();
  }
  getContactName(contact) {
    if (null != contact.company) {
      return contact.company.name;
    } else if (null != contact.person) {
      return  contact.person.firstName + ' ' + contact.person.lastName;
    }
  }

getContactType(contact) {
    if (null != contact.company) {
      return 'Firma';
    } else if (null != contact.person) {
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

deleteContact(id: number) {
    this.contactRestApi.deleteContact(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
reloadData() {
    this.contactRestApi.getContactsList().subscribe(con => this.items = con);
  }
}
