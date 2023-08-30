import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { enviroment } from 'src/enivronments/enivroment.prod';
import { ExchangeRatesResponse } from '../model/exchange-rates.model';
// const httpOptions = {
//   headers: new HttpHeaders({
//   'content-type': 'application/json, charset=UTF-8',
//   'Access-Control-Allow-Origin': '*'
//   // 'Access-Control-Allow-Methods': 'GET',
//   // 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//   }),
// }
@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http: HttpClient){
  }


  private _currencyCode: string = 'EUR';
  private currency$ = new BehaviorSubject<any>({});
  currencyChanged$ = this.currency$.asObservable();
  selectedCurrency = new EventEmitter<string>();

  setCurrency(currency: any){
    this.currency$.next(currency);
  }

  get currencyCode(): string {
    return this._currencyCode;
  }

  set currencyCode(code: string) {
    this._currencyCode = code;
    this.selectedCurrency.emit(code);
  }
/* Refused to fetch API due to blocked by CORS */
//   getcurrencydata(mycurrency: string){
//     const url = 'https://api.exchangerate.host/latest?base=' + mycurrency;
//     return this.http.get(url)
// }
}