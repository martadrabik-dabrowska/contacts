import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'http://localhost:8096';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api + '/contacts/');
  }



//
  getContactId(id: number): Observable<any> {
    return this.httpClient.get<any[]>(this.api + id);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.api, contact);
  }

  // @ts-ignore
  updateCompany(id: number, value: any): Observable<RootObject> {
    // return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  // @ts-ignore
  deleteCompany(id: number): Observable<any> {
    // return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  // @ts-ignore
  showCompanies(): Observable<any> {
    // return this.http.get(`${this.baseUrl}`);
  }











}

export class Company {
  id: number;
  name: string;
  nip: number;
  regon: number;
  krs: string;
  legalForm: string;
  legalFormOther: string;
}

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  pesel: number;
}

export class Address {
  id: number;
  street: string;
  houseNumber: string;
  flatNumber: string;
  zipCode: string;
  city: string;
  name: string;
}

export  class Contact {
  id: number;
  phoneNumber: string;
  email: string;
  additionalInfo: string;
  company: Company;
  person: Person;
  addresses: Address[];
}

export class Employee {
  id: number;
  firstName: string;
  surname: string;
  position: string;
  phoneNumber: number;
  isActive: string;
  company: Company;
}
