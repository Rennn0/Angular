import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { country } from '../interfaces/country.interface';
import { WeatherApiService } from './weather-api.service';
import { popupField } from '../interfaces/popup.interface';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private selectedCountry$ = new BehaviorSubject<country | null>(null);
  private weatherData$ = new BehaviorSubject<any>(null);
  private popupDialogData$ = new BehaviorSubject<popupField | null>(null);
  private activeWindowIndex$ = new BehaviorSubject<number>(0);
  private inProgressData: Array<any> = [];
  private inProgressDataCount$ = new BehaviorSubject<number>(
    this.inProgressData.length
  );
  #selectedProgressCard = new BehaviorSubject<number | undefined>(undefined);
  selectedProgressCard$ = this.#selectedProgressCard.asObservable();
  #cardToPayment = new BehaviorSubject<any>(null);
  #selectedWindowIndex = new BehaviorSubject<number>(0);
  selectedWindowIndex$ = this.#selectedWindowIndex.asObservable();

  constructor(private weatherApi: WeatherApiService) {}

  setSelectedWindowIndex(index: number) {
    this.#selectedWindowIndex.next(index);
  }

  selectProgressCard(cardIndex: number) {
    this.#selectedProgressCard.next(cardIndex);
  }

  setPaymentData(cardData: popupField) {
    this.#cardToPayment.next(cardData);
  }

  getPaymentData() {
    return this.#cardToPayment.asObservable();
  }
  setSelectedCountry(country: country) {
    this.selectedCountry$.next(country);
  }

  getSelectedCountry() {
    return this.selectedCountry$.asObservable();
  }

  fetchWeatherData(city: string) {
    this.weatherApi.getWeather(city).subscribe((data) => {
      this.weatherData$.next(data);
    });
  }

  getWeatherData() {
    return this.weatherData$.asObservable();
  }

  setPopupDialogData(data: popupField) {
    this.popupDialogData$.next(data);
    if (this.popupDialogData$.value) {
      this.inProgressData.push(this.popupDialogData$.value);
      this.inProgressDataCount$.next(this.inProgressData.length);
    }
  }

  getInProgressData() {
    return this.inProgressData;
  }

  setActiveWindowIndex(index: number) {
    this.activeWindowIndex$.next(index);
  }

  getActiveWindowIndex() {
    return this.activeWindowIndex$.asObservable();
  }

  getInProgressCount(): Observable<number> {
    return this.inProgressDataCount$.asObservable();
  }
}
