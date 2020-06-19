import {Component, Injectable, Input} from '@angular/core';
import {Contact, Person} from '../../services/contact.service';


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
  constructor() { }
}
