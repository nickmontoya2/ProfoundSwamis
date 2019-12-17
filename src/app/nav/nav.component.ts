import { CookieService } from 'ngx-cookie-service';
import { UserLoginService } from './../user-login.service';
import { Component, OnInit } from '@angular/core';

// import * as $ from 'jquery';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // loggedIn = false;
  userCookie: string;

  constructor(
    public userLoginService: UserLoginService,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    // this.loggedIn = this.userLoginService.currUser.loggedIn;
    // console.log("test: " + this.userLoginService.currUser.loggedIn);
    this.userCookie = this.cookieService.get('userId');
    console.log(this.userCookie);
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.body.style.backgroundColor = 'white';
  }
}
