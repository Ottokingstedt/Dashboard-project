import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enivronments/enviroment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': `${environment.apiKey}`,
  }),
};
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private baseUrl = 'https://xq56sjann7.execute-api.eu-north-1.amazonaws.com/prod/';

  constructor(private http: HttpClient) { }

  getData() : Promise<any>{
    const url = `${this.baseUrl}`;
    return this.http.get(url + 'brands/', httpOptions).toPromise();
  }
}
