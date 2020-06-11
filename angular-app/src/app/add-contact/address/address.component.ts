import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AddressService} from '../../contacts/services/address.service';
import {Address} from '../../contacts/services/contact.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
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

  save() {
    this.addressService.addAddress(this.address)
      .subscribe(data => console.log(data), error => console.log(error));
    this.address = new Address();
    this.gotoList();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/kontakty']);
  }



}
