import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


export interface Way {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-method-of-acquisition',
  templateUrl: './method-of-acquisition.component.html',
  styleUrls: ['./method-of-acquisition.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class MethodOfAcquisitionComponent implements OnInit {
  @Input()
  public methodOfAcquisition: string;

  submitted = false;
  constructor() { }
  wayControl = new FormControl('', [Validators.required]);
  ways: Way[] = [
    {value: 'RECOMENDATION', viewValue: 'Rekomendacja'},
    {value: 'CONFERENCE_OR_TRAINING', viewValue: 'konferencja i szkolenie'},
    {value: 'SOCIAL_MEDIA', viewValue: 'media społęcznościowe'},
    {value: 'WWWW', viewValue: 'strona www'},
    {value: 'OTHER', viewValue: 'inne'}
  ];

  ngOnInit() {
  }

}
