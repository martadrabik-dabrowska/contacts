import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'http://localhost:8096/kontakty/employees';

  constructor(private http: HttpClient) { }

  getPersonById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addPerson(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updatePerson(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  showPeople(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
