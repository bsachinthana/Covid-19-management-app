import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClientStatsService {
  BASE_URL = 'http://localhost:3000/api/stats';
  constructor(private http: HttpClient) {

  }

  getCurrentStats() {
    return this.http.get(this.BASE_URL + '/current');
  }

  getTodayStats() {
    return this.http.get(this.BASE_URL + '/today');
  }

  getWeeklyStats() {
    return this.http.get(this.BASE_URL + '/week');
  }

  getDistrictStats() {
    return this.http.get(this.BASE_URL + '/districtWise');
  }
}
