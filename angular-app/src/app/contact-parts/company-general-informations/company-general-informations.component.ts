import {Component, Injectable, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Company} from '../../contacts/services/contact.service';
import {CompanyService} from '../../contacts/services/company.service';
@Component({
  selector: 'app-company-general-informations',
  templateUrl: './company-general-informations.component.html',
  styleUrls: ['./company-general-informations.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class CompanyGeneralInformationsComponent{
  @Input()
  public companyy: Company = new Company();
  submitted = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private companyService: CompanyService, private router: Router) { }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Podaj email';
    }

    return this.email.hasError('email') ? 'Niepoprawny adres email' : '';
  }
  newECompany(): void {
    this.submitted = false;
    this.companyy = new Company();
  }

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
