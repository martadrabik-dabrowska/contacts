import {Component, Injectable, Input, OnDestroy, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AddressService} from '../../services/address.service';
import {Address} from '../../services/contact.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AddressComponent implements OnInit, OnDestroy  {
  @Input()
  public addresses: Address[] = [];
  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit() {
    this.addresses.push(new Address());
  }

  newAddress(): void {
    this.addresses.push(new Address());
  }

  deleteAddress(address: Address) {
    const idx = this.addresses.indexOf(address);
    this.addresses.splice(idx, 1);
  }

  ngOnDestroy(): void {
  }
}
