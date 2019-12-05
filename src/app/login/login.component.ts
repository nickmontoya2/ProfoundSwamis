import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currUser = new User();
  error = false;

  constructor(private loginService: UserLoginService) { }

  ngOnInit() {
  }

  login(): void {
    this.error = !(this.loginService.login(this.currUser));
    this.currUser = new User();
  }
}
