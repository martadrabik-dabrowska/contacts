import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8096/kontakty';

  constructor(private http: HttpClient) { }

  getCompanyById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addCompany(company: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, company);
  }

  updateCompany(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  showCompanies(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
