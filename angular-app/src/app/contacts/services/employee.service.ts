import { Injectable } from '@angular/core';
import {Company, Contact} from './contact.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private api = 'http://localhost:8096';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private employee: Employee;


  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.api + '/employees', employee);
  }

  getEmployeesList(): Observable<any> {
    return this.httpClient.get(this.api + '/employees');
  }


  getEmployeesByCompany(companyId: number): Observable<any> {
    return this.httpClient.get(this.api + '/employeesList/' + companyId);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(this.api + '/employees/' + id);
  }
}

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  phoneNumber: number;
  active: boolean;
  company: Company;
}
