import {Component, Injectable, Input, Output} from '@angular/core';
import {Contact, Person} from '../../services/contact.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-person-general-informations',
  templateUrl: './person-general-information.component.html',
  styleUrls: ['./person-general-information.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class PersonGeneralInformationComponent {
  @Input()
  public personForm: FormGroup;
  @Input()
  public person: Person = new Person();
  contact: Contact = new Contact();
  submitted = false;
  constructor() { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.initializeForm();
  }

  private initializeForm() {
    // @ts-ignore
    this.personForm = new FormGroup({
      firstName : new FormControl(null),
      surname :  new FormControl(null, Validators.required),
      pesel :  new FormControl(null, [Validators.pattern('[0-9]{11}'), Validators.required])
    });
  }


}
