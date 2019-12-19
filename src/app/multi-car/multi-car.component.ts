import { Car } from '../models/car';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multi-car',
  templateUrl: './multi-car.component.html',
  styleUrls: ['./multi-car.component.css']
})
export class MultiCarComponent implements OnInit {

  cars: Car[] = [];
  header = 0;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (+this.route.snapshot.paramMap.get('userId')) {
      // Call function to grab cars for specific user
      console.log('Looking for specific users cars');
      this.getUsersCars(+this.route.snapshot.paramMap.get('userId'));
      this.header = 2;
    } else {
      // grab all FOR_SALE cars
      this.getCars();
      this.header = 1;
    }
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

  getUsersCars(userId: number): void {
    console.log('Grabbing specific users cars');
    this.carService.getUsersCars(userId).subscribe(response => {
        this.cars = response;
        console.log(this.cars);
      });
  }

  // Get cars based on userId, won't pass userId from front-end,
  // grabbed from backend session storage

}
