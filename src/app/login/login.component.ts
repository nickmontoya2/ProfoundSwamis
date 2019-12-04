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

  constructor(private loginService: UserLoginService) { }

  ngOnInit() {
  }

}
