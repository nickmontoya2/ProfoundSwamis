import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from './models/car';
import { MOCK_CARS } from './mock-cars';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    // Hit backend to return all cars listed FOR_SALE
    const api = 'cars';
    return this.http.get(this.url + api);
  }

  getCar(carId: number): Observable<any> {
    // Eventually will be GET request to find specific car
    return of(MOCK_CARS.find(car => car.carId === carId));
  }

  getUsersCars(userId: number): Observable<any> {
    // Send request to backend & return list of all their cars
    // Will use session on backend to grab userId
    const api = 'cars/user/' + userId;
    return this.http.get(this.url + api);
    // return of(MOCK_CARS.filter(car => car.ownerId === userId));
  }
}
