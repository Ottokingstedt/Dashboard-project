import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class KeycloakInitService {
  
  constructor(private http: HttpClient){}

  login(username: string, password: string){

    
    const headers = {'content-type': 'application/json',
                      'Access-Control-Allow-Origin': '*'}

    const body = {
      'client_id': 'angular-frontend',
      'client_secret': 'RqISVoRmViNwvHqsMKM2NJEakpqs3KEg',
      'grant_type':'password',
      'username': username,
      'password': password
    };
     return this.http.post('http://localhost:8084/auth/realms/dev/protocol/openid-connect/token', body, {'headers': headers});

  }
}
