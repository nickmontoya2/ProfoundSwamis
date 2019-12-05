import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { MOCK_CARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Car[]> {
    // Return mock cars as observable. Eventually will be a GET request
    // where the backend will grab userId from session state & return all 'for sale' cars
    return of(MOCK_CARS);
  }
}
