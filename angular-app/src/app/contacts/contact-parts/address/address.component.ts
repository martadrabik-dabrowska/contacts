import {Component, Injectable, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {Router} from '@angular/router';
import {AddressService} from '../../services/address.service';
import {Address} from '../../services/contact.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


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
  public addressForm: FormGroup;

  @Input()
  public addresses: Address[] = [];
  constructor(private addressService: AddressService, private router: Router) { }

  ngOnInit() {
    this.addresses.push(new Address());
    this.initializeForm();
  }

  newAddress(): void {
    this.addresses.push(new Address());
  }

  canDeleteAddress(): boolean {
    return this.addresses.length > 1;
  }

  deleteAddress(address: Address): void {
    const idx = this.addresses.indexOf(address);
    this.addresses.splice(idx, 1);
  }

  ngOnDestroy(): void {
  }

  private initializeForm() {

    // @ts-ignore
    this.addressForm = new FormGroup({
      nameAddress : new FormControl(null),
      street :  new FormControl(null),
      houseNumber :  new FormControl(null),
      apartmentNumber :  new FormControl(null),
      zipCode :  new FormControl(null, Validators.pattern('[0-9]{2}\-[0-9]{3}')),
      city :  new FormControl(null),
    });
  }

}
