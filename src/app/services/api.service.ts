import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../enivronments/enviroment';
import { Observable } from 'rxjs';

const HttpOptions = { headers: new HttpHeaders({
    "x-api-key": environment.apiKey,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })}
@Injectable({ providedIn: 'root' })
export class ApiService{
  
     constructor(private http: HttpClient) {
          // this.getHello().subscribe((data : any) => {
          //     console.log(data)
          // });
      }
  
      public getHello(): Observable<any> {
          return this.http.get("./api/hello")
      }
   
    }
