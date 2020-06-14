import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Address, Contact, ContactService} from '../contacts/services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressService} from '../contacts/services/address.service';

@Component({
  selector: 'app-details-company',
  templateUrl: './details-company.component.html',
  styleUrls: ['./details-company.component.css']
})
export class DetailsCompanyComponent implements OnInit {

  id: number;
  contact: Contact;
  public addresses: Address[] = [];

  constructor(private route: ActivatedRoute, private router: Router,
              private contactService: ContactService, private addressService: AddressService, private ref: ChangeDetectorRef) {
  }

  showAll() {
    this.router.navigate(['/edycja_firma']);
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
}
