import {Component, Injectable, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AddressService} from '../../contacts/services/address.service';
import {Address} from '../../contacts/services/contact.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AddressComponent implements OnInit {
  address: Address = new Address();
  submitted = false;
  // addNewAddress = 'A';
  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit() {
  }

  newAddress(): void {
    this.submitted = false;
    this.address = new Address();
  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/kontakty']);
  }



}
