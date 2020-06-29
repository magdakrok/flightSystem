import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connections } from '../models/connections';
import {environment} from './datebase/api_url';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  
  constructor(private http: HttpClient) { }

 

  getlistTourist(id_tourist: string) {
    return this.http.get(`${environment.API_URL}/${id_tourist}`);
  }
  getListFlight(id_flight: string) {
    return this.http.get(`${environment.API_URL}/api/connection/${id_flight}`);
  }
  getData() {
    return this.http.get(`${environment.API_URL}/api/connection`);
  }

  checkReservation(id_tourist: number, id_flight: number) {
    return this.http.get(`${environment.API_URL}/api/connection/${id_tourist}/${id_flight}`)
  }

  

  deleteData(id_connections: string) {
    return this.http.delete(`${environment.API_URL}/api/connection/${id_connections}`);
  }

  saveConnection(connections: Connections) {
    console.log(connections);
    return this.http.post(`${environment.API_URL}/api/connection`, connections);
  }

  deleteConnectionFlight(id_connections: string) {
    return this.http.delete(`${environment.API_URL}/api/tourist/${id_connections}`);
  }



}