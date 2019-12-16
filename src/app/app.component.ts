import { UserLoginService } from './user-login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-car-sales';
  // loggedIn = false;

  constructor(public userLoginService: UserLoginService, router: Router) {

  //   if (userLoginService.currUser != null) {
  //     if (userLoginService.currUser.loggedIn) {
  //       router.navigate(['dashboard']);
  //     }
  //   }
  }
}
