import {Component, Inject, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../../contacts/services/employee.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact, ContactService} from '../../contacts/services/contact.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

import {AddEmployeesComponent} from '../../employees/add-employees/add-employees.component';
import {EditEmployeeComponent} from '../../employees/edit-employee/edit-employee.component';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Observable<Employee[]>;
  private contact: Contact;

  constructor(private employeeService: EmployeeService, private contactService: ContactService, private router: Router, private route: ActivatedRoute, private dialog: MatDialog) { }

  // () {
  // }

  // tslint:disable-next-line:use-lifecycle-interface



ngOnInit() {

    let id = null;
    this.route.queryParams.subscribe(params => id = params.id);

    if (null != id) {
      this.contactService.getContactId(id)
        .subscribe(((res: any[]) => {
          this.contact = res[0];
        }));
    }
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesByCompany(this.contact.company.id);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  editEmployee(employee: Employee) {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      width: '700px',
      height: '600px',
      data: {employee}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadData();
    });
  }


  addEmployee() {
    const dialogRef = this.dialog.open(AddEmployeesComponent, {
      width: '700px',
      height: '600px',
      data: {company: this.contact.company }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.reloadData();
    });

  }

   getStatus(employee: Employee): string {
    if (employee.active) {
      return 'Aktywny';
    } else {
      return 'Nieaktywny';
    }
  }


  // setStatus(employee: Employee) {
  //   const dialogRef = this.dialog.open(SetStatus, {
  //     width: '100px',
  //     height: '100px',
  //     data: {employee}
  //   });
  // }
}

// export class SetStatus {
//
//   constructor(public dialogRef: MatDialogRef <EmployeesListComponent>) {
//
//   }
//
// }




