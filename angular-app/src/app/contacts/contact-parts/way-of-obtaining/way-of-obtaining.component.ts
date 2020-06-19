import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Way} from '../../add-contact/add-contact.component';


@Component({
  selector: 'app-way-of-obtaining',
  templateUrl: './way-of-obtaining.component.html',
  styleUrls: ['./way-of-obtaining.component.css']
})
export class WayOfObtainingComponent implements OnInit {

  @Input()
  public wayOfObtaining: string;

  @Input()
  public recommending: string;

  submitted = false;
  constructor() { }
  wayControl = new FormControl('', [Validators.required]);
  ways: Way[] = [
    {value: 'RECOMENDATION', viewValue: 'Rekomendacja'},
    {value: 'CONFERENCE_OR_TRAINING', viewValue: 'konferencja i szkolenie'},
    {value: 'SOCIAL_MEDIA', viewValue: 'media społęcznościowe'},
    {value: 'WWWW', viewValue: 'strona www'}
  ];

  ngOnInit() {
  }

}
