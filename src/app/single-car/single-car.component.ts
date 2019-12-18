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
    });
  }

}
