import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Car } from '../models/car';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {

  car: Car = new Car();
  status = '';

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    public loginService: UserLoginService
  ) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void {
    const carId = +this.route.snapshot.paramMap.get('carId');
    this.carService.getCar(carId).subscribe(response => {
      this.car = response;
      console.log(this.car);
      console.log(this.loginService.currUser.balance);
      if (this.car.saleStatus === 'FOR_SALE') {
        this.status = 'for sale.';
      } else {
        this.status = 'not for sale.';
      }
    });
  }

  purchase(): void {
    // Wire to backend to actually complete purchase here
    console.log('Buyer id: ', this.loginService.currUser.userId);
    console.log('Seller id: ', this.car.owner.userId);
    console.log('Car id: ', this.car.carId);
    console.log('Car price: ', this.car.value);
    const redirect = '/multi-car/' + this.loginService.currUser.userId;

    this.carService.purchaseCar(
      this.loginService.currUser.userId,
      this.car.owner.userId,
      this.car.carId,
      this.car.value
      ).subscribe(response => {
        console.log(response);
        this.router.navigate([redirect]);
        this.loginService.currUser.balance -= this.car.value;
    });
  }

  delete(): void {
    console.log('pressed delete button');
    const redirect = '/multi-car/' + this.loginService.currUser.userId;

    this.carService.deleteCar(this.car.carId).subscribe(response => {
      console.log(response);
      this.router.navigate([redirect]);
    });
  }

  setNotForSale(): void {
    console.log('should change status to not being for sale');
    const redirect = '/multi-car/' + this.loginService.currUser.userId;

    this.carService.updateStatus(this.car.carId, 'NOT_FOR_SALE').subscribe(response => {
      console.log(response);
      this.router.navigate([redirect]);
    });
  }

  setForSale(): void {
    console.log('should change status to being for sale');
    const redirect = '/multi-car/' + this.loginService.currUser.userId;

    this.carService.updateStatus(this.car.carId, 'FOR_SALE').subscribe(response => {
      console.log(response);
      this.router.navigate([redirect]);
    });
  }

}
