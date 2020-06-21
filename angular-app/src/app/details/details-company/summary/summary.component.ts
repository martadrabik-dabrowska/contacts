import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Address, Company, Contact, ContactService} from '../../../contacts/services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressService} from '../../../contacts/services/address.service';
import {Way} from '../../../contacts/add-contact/add-contact.component';
import {Form} from '../../../contacts/contact-parts/company-general-informations/company-general-information.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  id: number;
  contact: Contact;
  ways: Way[] = [
    {value: 'RECOMENDATION', viewValue: 'Rekomendacja'},
    {value: 'CONFERENCE_OR_TRAINING', viewValue: 'konferencja i szkolenie'},
    {value: 'SOCIAL_MEDIA', viewValue: 'media społęcznościowe'},
    {value: 'WWWW', viewValue: 'strona www'}
  ];

  forms: Form[] = [
    {value: 'STOCK_COMPANY', viewValue: 'Spółka akcyja'},
    {value: 'PARTNERSHIP_COMPANY', viewValue: 'Spółka cywilna'},
    {value: 'SLAW_COMPANY', viewValue: 'Spółka prawna'},
    {value: 'LIMITED_COMPANY', viewValue: 'Spółka zoo'},
    {value: 'OTHER', viewValue: 'Inne'}
  ];

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

  getWay(): string {
    const result = this.ways.filter(s => s.value === this.contact.wayOfObtaining).pop();
    // tslint:disable-next-line:triple-equals
    return result != undefined ? result.viewValue : '';
  }

  getForms(): string {
    const result = this.forms.filter(s => s.value === this.contact.company.legalForm).pop();
    // tslint:disable-next-line:triple-equals
    return result != undefined ? result.viewValue : '';
  }
}
