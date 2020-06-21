import {Component, Injectable, Input, OnInit, Output} from '@angular/core';
import {Company} from '../../services/contact.service';
import {CompanyService} from '../../services/company.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-company-general-informations',
  templateUrl: './company-general-information.component.html',
  styleUrls: ['./company-general-information.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CompanyGeneralInformationComponent {
  @Input()
  public companyForm: FormGroup;

  constructor(private companyService: CompanyService, private router: Router) { }
  @Input()
  public companyy: Company = new Company();
  submitted = false;
  forms: Form[] = [
    {value: 'STOCK_COMPANY', viewValue: 'Spółka akcyja'},
    {value: 'PARTNERSHIP_COMPANY', viewValue: 'Spółka cywilna'},
    {value: 'SLAW_COMPANY', viewValue: 'Spółka prawna'},
    {value: 'LIMITED_COMPANY', viewValue: 'Spółka zoo'},
    {value: 'OTHER', viewValue: 'Inne'}
  ];

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/kontakt']);
  }



  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.initializeForm();
  }



  private initializeForm() {

    // @ts-ignore
    this.companyForm = new FormGroup({
      name : new FormControl(null, Validators.required),
      nip :  new FormControl(null, [Validators.pattern('[0-9]{10}'), Validators.required]),
      regon :  new FormControl(null),
      krs :  new FormControl(null),
      legalForm :  new FormControl(null)
    });
  }

}

export interface Form {
  value: string;
  viewValue: string;
}
