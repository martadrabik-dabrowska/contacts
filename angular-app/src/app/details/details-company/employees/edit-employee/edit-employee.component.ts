import {Component, Inject, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../../../../contacts/services/employee.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  submitted = false;
  employee: Employee;
  // tslint:disable-next-line:max-line-length
  constructor( @Inject(MAT_DIALOG_DATA) private employeeObj: any, private employeeService: EmployeeService, private router: Router, public dialogRef: MatDialogRef<EditEmployeeComponent> ) {
    this.employee = employeeObj.employee;
  }

  ngOnInit( ) {
  }

  save() {
    //  this.contact.addresses.push( this.address.address);
    this.employeeService.addEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.dialogRef.close();
  //  this.gotoList();

  }
  gotoList() {
    this.router.navigate(['/szczegoly_kontaktu_pracownicy']);
  }

}
