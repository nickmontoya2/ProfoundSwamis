import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  error = false;

  constructor(private loginService: UserLoginService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.error = !(this.loginService.login(this.user));
    this.user = new User();
    if (this.loginService.currUser.name) {
      this.router.navigate(['/multi-car']);
    }
  }
}
