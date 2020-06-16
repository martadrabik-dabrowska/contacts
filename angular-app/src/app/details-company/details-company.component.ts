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

  constructor(private router: Router) {
  }
  ngOnInit() {

  }
}
