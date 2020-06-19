import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Company} from '../../services/contact.service';
import {CompanyService} from '../../services/company.service';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-company-general-informations',
  templateUrl: './company-general-informations.component.html',
  styleUrls: ['./company-general-informations.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class CompanyGeneralInformationsComponent {
  constructor(private companyService: CompanyService, private router: Router) { }
  @Input()
  public companyy: Company = new Company();
  submitted = false;

  email = new FormControl('', [Validators.required, Validators.email]);

  forms: Form[] = [
    {value: 'STOCK_COMPANY', viewValue: 'Spółka akcyja'},
    {value: 'PARTNERSHIP_COMPANY', viewValue: 'Spółka cywilna'},
    {value: 'SLAW_COMPANY', viewValue: 'Spółka prawna'},
    {value: 'LIMITED_COMPANY', viewValue: 'Spółka zoo'},
    {value: 'OTHER', viewValue: 'Inne'}
  ];
  save() {
    this.companyService.addCompany(this.companyy)
      .subscribe(data => console.log(data), error => console.log(error));
    this.companyy = new Company();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/kontakt']);
  }
}

export interface Form {
  value: string;
  viewValue: string;
}
