import { Car } from './../models/car';
import { Component, OnInit } from '@angular/core';
import { Makes } from './../models/makes';
import { HttpClient } from '@angular/common/http';
import { UserLoginService } from '../user-login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  temp: Car = new Car();
  makes = Makes;
  selectedCar = 'Aston Martin';
  picture = '';
  url = 'http://localhost:8080/cars/car';

  constructor(private http: HttpClient, public userLoginService: UserLoginService, private router: Router) { }

  ngOnInit() {}

  selectChangeHandler(event: any) {
    // update the ui
    this.selectedCar = event.target.value;
  }

  submit(): Observable<any> {
    const tx = {
      make: this.temp.make,
      model: this.temp.model,
      year: this.temp.year,
      value: this.temp.value,
      mileage: this.temp.mileage,
      fuel: this.temp.fuel,
      exteriorColor: this.temp.exteriorColor,
      interiorColor: this.temp.interiorColor,
      transmission: this.temp.transmission,
      engine: this.temp.engine,
      driveType: this.temp.driveType,
      description: this.temp.description,
      saleStatus: this.temp.saleStatus,
      photoLink: this.temp.photoLink,
      owner : {
        userId :  this.userLoginService.currUser.userId
      }
    };
    console.log(tx);
    this.temp = new Car();
    return this.http.post(this.url, tx);
  }

  postCarForSale() {
    const redirect = '/multi-car/' + this.userLoginService.currUser.userId;

    this.submit().subscribe(response => {
      console.log(response);
      this.router.navigate([redirect]);
    });
  }

  selectPicture(event: any) {

    this.temp.model = event.target.value;

    switch (this.temp.model) {
      case 'Divo':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_divo.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'black';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'W16';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Chiron':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_chiron.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'black';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'W16';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Centodieci':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_centodieci.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'white';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'W16';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Vanquish':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/Aston_Martin_Vanquish.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'grey';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V12';
        this.temp.driveType = 'rear wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Valhalla':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/aston_martin_valhalla.jpeg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'teal';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V6';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Veyron':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_veyron_vitesse.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'blue';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'W16';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Lykan':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/w_motors_lykan.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'red';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'Flat 6';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Fenryr':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/w_motors_fenyr.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'dark blue';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'Flat 6';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Huracan':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_huracan.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'black';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V19';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Sian':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_sian.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'gold';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V12';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Centenario':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_centenario.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'carbon';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V12';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Aventador':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_aventador.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'white';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V12';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Trevita':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_trevita.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'grey';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V8';
        this.temp.driveType = 'rear wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Regera':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_regera.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'red';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V8';
        this.temp.driveType = 'rear wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Jesko':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_jesko.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'white';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V8';
        this.temp.driveType = 'rear wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'One-77':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/aston_martin_one77.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'space blue';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V12';
        this.temp.driveType = 'rear wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
      case 'Agera':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_agera.jpg';
        this.temp.photoLink = this.picture;
        this.temp.fuel = 'gasoline';
        this.temp.exteriorColor = 'silver';
        this.temp.interiorColor = 'black';
        this.temp.transmission = 'automatic';
        this.temp.engine = 'V8';
        this.temp.driveType = '4 wheel drive';
        this.temp.saleStatus = 'FOR_SALE';
        return;
    }
  }
}
