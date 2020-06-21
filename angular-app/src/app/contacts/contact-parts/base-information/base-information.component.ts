import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../../services/contact.service';

@Component({
  selector: 'app-base-information',
  templateUrl: './base-information.component.html',
  styleUrls: ['./base-information.component.css']
})
export class BaseInformationComponent implements OnInit {
  @Input()
  public baseForm: FormGroup;
  @Input()
  contact: Contact = new Contact();
  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
    this.initializeForm();
  }


  private initializeForm() {
    this.baseForm = new FormGroup({
      phoneNumber : new FormControl(null),
      email :  new FormControl(null, [Validators.email, Validators.required]),
      additionalInformation :  new FormControl(null)
    });
  }
}
