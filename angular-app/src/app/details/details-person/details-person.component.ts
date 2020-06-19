import {Component, OnInit} from '@angular/core';
import {Address, Contact, ContactService, Person} from '../../contacts/services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrls: ['./details-person.component.css']
})
export class DetailsPersonComponent implements OnInit {
  id: number;
  contact: Contact;
  public addresses: Address[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
              private contactService: ContactService) {
  }

  ngOnInit() {
    this.contact = new Contact();

    let id = null;
    this.route.queryParams.subscribe(params => id = params.id);
    if (null != id) {
      this.contactService.getContactId(id)
        .subscribe(((res: any[]) => {
          this.contact = res[0];
        }));
    }
  }

  getRouteLink(contact: Contact) {
    return  '/edycja_osoba_fizyczna';
  }
}
