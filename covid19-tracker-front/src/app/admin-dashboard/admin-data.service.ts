import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  private BASE_URL = 'http://localhost:3000/api';
  private countries: Array<any>;
  constructor(private http: HttpClient) {
    this.countries = new Array();
  }

  login(credentials) {
    return this.http.post(this.BASE_URL + '/auth/login', credentials);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  getPatients() {
    return this.http.get(this.BASE_URL + '/patients');
  }

  addPatient(patient) {
    return this.http.post(this.BASE_URL + '/patients/add', patient);
  }
}
