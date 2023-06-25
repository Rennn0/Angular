import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { country } from '../interfaces/country.interface';
import { WeatherApiService } from './weather-api.service';
import { finalData, popupField } from '../interfaces/popup.interface';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private selectedCountry$ = new BehaviorSubject<country | null>(null);
  private weatherData$ = new BehaviorSubject<any>(null);
  private popupDialogData$ = new BehaviorSubject<popupField | null>(null);
  private activeWindowIndex$ = new BehaviorSubject<number>(0);
  private inProgressData = new BehaviorSubject<Array<any>>([]);
  private inProgressDataCount$ = new BehaviorSubject<number>(
    this.inProgressData.value.length
  );
  private renderCondition$ = new BehaviorSubject<boolean>(false);
  private bookedTripData = new BehaviorSubject<Array<finalData>>([]);

  #selectedProgressCard = new BehaviorSubject<number | undefined>(undefined);
  selectedProgressCard$ = this.#selectedProgressCard.asObservable();
  #cardToPayment = new BehaviorSubject<any>(null);
  #selectedWindowIndex = new BehaviorSubject<number>(0);
  selectedWindowIndex$ = this.#selectedWindowIndex.asObservable();

  public renderInProgress = false;
  private renderBooked = new BehaviorSubject<boolean>(false);

  constructor(private weatherApi: WeatherApiService) {}

  getRenderBooked() {
    return this.renderBooked.asObservable();
  }

  setTrueRenderBooked() {
    this.renderBooked.next(true);
  }
  getBookedTripData() {
    return this.bookedTripData.asObservable();
  }

  setBookedTripData(obj: finalData) {
    this.bookedTripData.next([...this.bookedTripData.value, obj]);
  }
  getRenderCondition$() {
    return this.renderCondition$.asObservable();
  }
  setRenderConditino(condition: boolean) {
    this.renderCondition$.next(condition);
  }
  removeProgresData(elem: any) {
    const updated = this.inProgressData.value.filter((e) => e !== elem);
    this.inProgressData.next(updated);
    this.inProgressDataCount$.next(updated.length);
  }

  setSelectedWindowIndex(index: number) {
    this.#selectedWindowIndex.next(index);
  }

  selectProgressCard(cardIndex: number) {
    this.#selectedProgressCard.next(cardIndex);
  }

  setPaymentData(cardData: popupField | null, clear: boolean = false) {
    if (clear) {
      this.#cardToPayment.next({});
    } else {
      this.#cardToPayment.next(cardData);
    }
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
      this.inProgressData.next([
        ...this.inProgressData.value,
        this.popupDialogData$.value,
      ]);
      this.inProgressDataCount$.next(this.inProgressData.value.length);
    }
  }

  // getInProgressData() {
  //   return this.inProgressData;
  // }

  getInProgressData(): Observable<any> {
    return this.inProgressData.asObservable();
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
