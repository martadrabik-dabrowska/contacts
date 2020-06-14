import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Address, Contact, ContactService, Person} from '../contacts/services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../contacts/services/person.service';
import {AddressService} from '../contacts/services/address.service';

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
              private contactService: ContactService, private addressService: AddressService, private ref: ChangeDetectorRef) {
  }

  showAll() {
    this.router.navigate(['/edycja_osoba_fizyczna']);
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

  // this.id = this.route.snapshot.params[this.id];
}
