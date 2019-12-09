import { Car } from './../car';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-multi-car',
  templateUrl: './multi-car.component.html',
  styleUrls: ['./multi-car.component.css']
})
export class MultiCarComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  // Get cars based on userId, won't pass userId from front-end,
  // grabbed from backend session storage

}
