import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Greeting } from './model/greeting';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private http: HttpClient) { }

  getGreeting(): Observable<Greeting> {
    return this.http.get<Greeting>('api/greeting');
  }
}
