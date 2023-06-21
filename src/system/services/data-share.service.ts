import { Injectable } from '@angular/core';
import { BehaviorSubject, retry } from 'rxjs';
import { country } from '../interfaces/country.interface';
import { WeatherApiService } from './weather-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private selectedCountry$=new BehaviorSubject<country|null>(null);
  private weatherData$=new BehaviorSubject<any>(null);

  constructor(private weatherApi:WeatherApiService) { }

  setSelectedCountry(country:country){
    this.selectedCountry$.next(country);
  }

  getSelectedCountry(){
    return this.selectedCountry$.asObservable();
  }

  fetchWeatherData(city:string){
    this.weatherApi.getWeather(city).subscribe(data=>{
      this.weatherData$.next(data);
    })
  }

  getWeatherData(){
      return this.weatherData$.asObservable();
  }
}
