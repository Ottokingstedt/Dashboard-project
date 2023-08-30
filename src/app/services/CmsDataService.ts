import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "src/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private apiUrl = "http://localhost:1337/api/";

  constructor(private http: HttpClient, private authToken: AuthService) {}

  /*   token = async () => {
    const tokenValue = await this.authToken.getToken();
    return tokenValue;
  };

  private readonly headers = new HttpHeaders({
    Authorization: "Bearer" + this.token(),
  });

  getCMSData(endpoint: string, selectedLanguage: string) {
    const url = `${this.apiUrl}${endpoint}?_sort=id&locale=${selectedLanguage}`;
    console.log(this.token()); 
    console.log(this.headers);
    return this.http.get<any[]>(url, { headers: this.headers });
  } */

async getCMSData(endpoint: string, selectedLanguage: string) {
  const cmsdata = await this.authToken.getToken().then((token) => {
    const headers = new HttpHeaders();
    const url = `${this.apiUrl}${endpoint}?_sort=id&locale=${selectedLanguage}`;
    headers.delete('Authorization');

    return this.http.get<any[]>(url, { headers: headers, withCredentials: false });
  });
  return cmsdata;
}

  
}
