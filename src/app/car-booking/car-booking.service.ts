import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cars, autoParts } from './car-booking.interface';

@Injectable({
  providedIn: 'root',
})
export class CarBookingService {
  constructor(private httpClient: HttpClient) {}

  private carsURL =
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Cars9096be5.json';

  private autoPartsURL =
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/ListOfAutoParts1aaa4e5.json';

  getCars(): Observable<cars> {
    return this.httpClient.get<cars>(this.carsURL);
  }

  getAutoParts(): Observable<autoParts> {
    return this.httpClient.get<autoParts>(this.autoPartsURL);
  }
}
