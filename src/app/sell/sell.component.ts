import { Car } from './../models/car';
import { Component, OnInit } from '@angular/core';
import { Makes } from './../models/makes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  url = 'http://localhost:8080/chinook/';

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  selectChangeHandler(event: any) {
    // update the ui
    this.selectedCar = event.target.value;
  }

  submit(car: Car): Observable<any> {
    console.log(this.temp);
    this.temp = new Car();
    // alert('Your car has been posted for sale!');
    return this.http.post(this.url, car);
  }

  selectPicture(event: any) {

    this.temp.model = event.target.value;

    switch (this.temp.model) {
      case 'Divo':
        this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_divo.jpg';
        this.temp.photoLink = this.picture;
        return;
      case 'Chiron':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_chiron.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Centodieci':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_centodieci.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Vanquish':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/Aston_Martin_Vanquish.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Valhalla':
            this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/aston_martin_valhalla.jpeg';
            this.temp.photoLink = this.picture;
            return;
      case 'Veyron':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/bugatti_veyron_vitesse.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Lykan':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/w_motors_lykan.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Fenryr':
            this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/w_motors_fenyr.jpg';
            this.temp.photoLink = this.picture;
            return;
      case 'Huracan':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_huracan.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Sian':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_sian.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Centenario':
            this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_centenario.jpg';
            this.temp.photoLink = this.picture;
            return;
      case 'Aventador':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/lamborghini_aventador.jp';
          this.temp.photoLink = this.picture;
          return;
      case 'Trevita':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_trevita.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Regera':
            this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_regera.jpg';
            this.temp.photoLink = this.picture;
            return;
      case 'Jesko':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_jesko.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'One-77':
          this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/aston_martin_one77.jpg';
          this.temp.photoLink = this.picture;
          return;
      case 'Agera':
            this.picture = 'https://angular-car-sales.s3.amazonaws.com/Car+Photos/koenigsegg_agera.jpg';
            this.temp.photoLink = this.picture;
            return;
    }
  }
}
