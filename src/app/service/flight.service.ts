import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight';
import {environment} from './datebase/api_url';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

 
  constructor(private http: HttpClient) { }

  getFlys() {
    return this.http.get(`${environment.API_URL}/api/flys`);
  }
  getFly(id_flight: number) {
    return this.http.get(`${environment.API_URL}/api/flys/${id_flight}`);
  }

  checkFly(departure_date: Date, arrival_date: Date){
    return this.http.get(`${environment.API_URL}/api/flys/${departure_date}/${arrival_date}`);
  }
  
  saveFlight(flight: Flight) {
    return this.http.post(`${environment.API_URL}/api/flys`, flight);
  }
  deleteFly(id_flight: string) {
    return this.http.delete(`${environment.API_URL}/api/flys/${id_flight}`);
  }
  updateFlight(id_flight: number, updateFlight: Flight) {
    return this.http.put(`${environment.API_URL}/api/flys`, updateFlight);
  }
}
