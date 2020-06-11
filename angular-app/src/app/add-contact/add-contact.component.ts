import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {Router} from "@angular/router";

import {Contact, ContactService} from '../contacts/services/contact.service';
export interface Way {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  contact: Contact = new Contact();
  submitted = false;
  isShow = 'A';


  wayControl = new FormControl('', [Validators.required]);



  email = new FormControl('', [Validators.required, Validators.email]);

  ways: Way[] = [
    {value: 'recommendation', viewValue: 'Rekomendacja'},
    {value: 'conference', viewValue: 'konferencja i szkolenie'},
    {value: 'social media', viewValue: 'media społęcznościowe'},
    {value: 'web page', viewValue: 'strona www'},
    {value: 'other', viewValue: 'inne'}
  ];

  ngOnInit() {
  }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Podaj email';
    }

    return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
  }





  newEmployee(): void {
    this.submitted = false;
    this.contact = new Contact();
  }

  save() {
    this.contactService.addContact(this.contact)
      .subscribe(data => console.log(data), error => console.log(error));
    this.contact = new Contact();
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
