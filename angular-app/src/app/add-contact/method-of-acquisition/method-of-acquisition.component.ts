import {Component, Injectable, OnInit} from '@angular/core';
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

  submitted = false;
  constructor() { }
  wayControl = new FormControl('', [Validators.required]);
  ways: Way[] = [
    {value: 'recommendation', viewValue: 'Rekomendacja'},
    {value: 'conference', viewValue: 'konferencja i szkolenie'},
    {value: 'social media', viewValue: 'media społęcznościowe'},
    {value: 'web page', viewValue: 'strona www'},
    {value: 'other', viewValue: 'inne'}
  ];

  ngOnInit() {
  }

}
