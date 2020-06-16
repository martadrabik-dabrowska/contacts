import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Address, Company, Contact, ContactService} from '../../contacts/services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressService} from '../../contacts/services/address.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  id: number;
  contact: Contact;

  constructor(private route: ActivatedRoute, private router: Router,
              private contactService: ContactService) {
  }

  showAll() {
    this.router.navigate(['/edycja_firma']);
  }
ngOnInit(): void {

  this.contact = new Contact();
  this.contact.company = new Company();
}

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {

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
      return '/edycja_firma';
  }

}
