import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of, pipe} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


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
  private contact: Contact;

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api + '/contacts/');
  }


//
  getContactId(id: string): Observable<Contact[]> {
    const url = this.api + '/contact/' + id;
    return this.httpClient.get<Contact[]>(url);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.api + '/contacts/', contact);
  }



  // deleteContact(id: number): Observable<Contact> {
  //   return this.httpClient.delete<Contact>(this.api + '/contacts/');
  // }

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


  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }

  getContactsList(): Observable<any> {
    return this.httpClient.get(this.api + '/contacts');
  }

  deleteContact(id: number): Observable<any> {
    return this.httpClient.delete(this.api + '/contacts/' + id);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(this.api + '/employees/' + id);
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
  wayOfObtaining: string;
  wayOfObtainingOther: string;
  addresses: Address[];
}

// export class Employee {
//   id: number;
//   firstName: string;
//   lastName: string;
//   position: string;
//   phoneNumber: number;
//   isActive: string;
//   company: Company;
// }
