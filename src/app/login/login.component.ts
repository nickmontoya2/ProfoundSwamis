import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  error = false;

  constructor(public loginService: UserLoginService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {

    this.loginService.login(this.user).subscribe(currUser => {
      this.user = currUser;
    });
    // handle errors here

    // this.error = !(this.loginService.login(this.user));
    if (this.user.name) {
      this.user = new User();
      this.router.navigate(['/multi-car']);
    }
  }
}
