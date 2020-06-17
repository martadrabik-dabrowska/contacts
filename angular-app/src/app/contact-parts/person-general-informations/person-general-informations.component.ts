import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';

import {Contact, Person} from '../../contacts/services/contact.service';
import {PersonService} from '../../contacts/services/person.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-person-general-informations',
  templateUrl: './person-general-informations.component.html',
  styleUrls: ['./person-general-informations.component.css']
})


@Injectable({
  providedIn: 'root'
})
export class PersonGeneralInformationsComponent {
  @Input()
  public person: Person = new Person();
  contact: Contact = new Contact();
  submitted = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private personService: PersonService, private router: Router) { }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Podaj email';
    }

    return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/people']);
  }

}
