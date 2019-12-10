import { Component, OnInit } from '@angular/core';
import { Makes } from './../models/makes';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  makes = Makes;
  selectedCar = 'Aston Martin';

  constructor() { }

  ngOnInit() {}

  selectChangeHandler(event: any) {
    // update the ui
    this.selectedCar = event.target.value;
  }

}
