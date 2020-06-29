import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tourist } from '../models/tourist';
import {environment} from './datebase/api_url';


@Injectable({
  providedIn: 'root'
})
export class TouristService {

  //apiUrl: `https://flight-system-server.herokuapp.com`;
  constructor(private http: HttpClient) { }

  getTourists() {
    return this.http.get(`${environment.API_URL}/api/tourist`);
  }
  getTourist(id_tourist: string) {
    return this.http.get(`${environment.API_URL}/api/tourist/${id_tourist}`);
  }

  checkTourist(first_name: string, last_name: string, date_of_birth: Date)
  {
    return this.http.get(`${environment.API_URL}/api/tourist/${first_name}/${last_name}/${date_of_birth}`);
  }

  getTouristName(first_name: string, last_name: string) {
    return this.http.get(`${environment.API_URL}/api/tourist/${first_name}/${last_name}`)
  }

  saveTourist(tourist: Tourist) {
    return this.http.post(`${environment.API_URL}/api/tourist`, tourist);
  }
  deleteTourist(id_tourist: string) {
    return this.http.delete(`${environment.API_URL}/api/tourist/${id_tourist}`);
  }
  updateTourist(id_tourist: number, updateTourist: Tourist) {
    return this.http.put(`${environment.API_URL}/api/tourist`, updateTourist);
  }

 
}
