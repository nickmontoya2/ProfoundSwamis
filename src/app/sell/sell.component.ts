import { Car } from './../models/car';
import { Component, OnInit } from '@angular/core';
import { Makes } from './../models/makes';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  temp: Car = new Car();
  makes = Makes;
  selectedCar = 'Aston Martin';

  constructor() { }

  ngOnInit() {}

  selectChangeHandler(event: any) {
    // update the ui
    this.selectedCar = event.target.value;
  }

  submit(car: Car) {
    console.log(this.temp);
    this.temp = new Car();
    // alert('Your car has been posted for sale!');
  }

}
