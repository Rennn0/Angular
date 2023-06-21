import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_KEY = 'aa4f2ea33b507654cfd5c01ec900a731';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {


  constructor(private http:HttpClient) { }

  getWeather(city:string):Observable<any>{
    const url=`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    return this.http.get<any>(url);
  }
}
