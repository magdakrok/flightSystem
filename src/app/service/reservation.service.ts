import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './datebase/api_url';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  
  constructor(private http: HttpClient) { }

  getReservation(departure_date: Date, arrival_date: Date){
    return this.http.get(`${environment.API_URL}api/reservation/${departure_date}/${arrival_date}`);
  }

  checkSeats(id_flight: number) {
    return this.http.get(`${environment.API_URL}/api/reservation/${id_flight}`);
  }
  
}