import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {

  car: Car;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const carId = +this.route.snapshot.paramMap.get('carId');
    this.carService.getCar(carId).subscribe(car => {
      this.car = car;
    });
  }

}
