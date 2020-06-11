import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8096/kontakty/employees';



  getAddressById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addAddress(address: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, address);
  }

  updateAddress(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAddress(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  showAddresses(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
