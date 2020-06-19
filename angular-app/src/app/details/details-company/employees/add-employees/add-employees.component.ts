import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Company} from '../../../../contacts/services/contact.service';
import {Employee, EmployeeService} from '../../../../contacts/services/employee.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  private company: Company;
  constructor(@Inject(MAT_DIALOG_DATA) private obj: any, private employeeService: EmployeeService, private router: Router, public dialogRef: MatDialogRef<AddEmployeesComponent>) {
    this.company = obj.company;
  }


  employee: Employee = new Employee();
  submitted = false;

ngOnInit( ) {
  this.employee = new Employee();
}

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employee.active = true;
    this.employee.company = this.company;
    this.employeeService.addEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.dialogRef.close();
  }

}
