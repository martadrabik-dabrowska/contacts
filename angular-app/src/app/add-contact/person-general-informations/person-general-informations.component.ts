import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Contact, Person} from '../../contacts/services/contact.service';
import {PersonService} from '../../contacts/services/person.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-person-general-informations',
  templateUrl: './person-general-informations.component.html',
  styleUrls: ['./person-general-informations.component.css']
})
export class PersonGeneralInformationsComponent implements OnInit {
  person: Person = new Person();
  contact: Contact = new Contact();
  submitted = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Podaj email';
    }

    return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
  }
  newPerson():void{
    this.submitted = false;
    this.person = new Person();
  }

  save(){
    this.personService.addPerson(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new Person();
    this.gotoList();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/people']);
  }

}
