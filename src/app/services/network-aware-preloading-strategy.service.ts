import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of, timer} from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkAwarePreloadingStrategyService implements PreloadingStrategy{
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const connection = typeof window !== 'undefined' ? (navigator as any).connection : undefined;
    if (connection?.saveData) {
      return of(null);
    }
    const speed = connection?.effectiveType;
    const slowConnections = ['slow-2g', '2g'];
    if (slowConnections.includes(speed!)) {
      return of(null);
    }
    return fn();
  }
  constructor() { }
}
