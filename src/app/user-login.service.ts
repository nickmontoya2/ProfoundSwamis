import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './models/user';
import { USERS } from './mock-users';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  // users: User[] = of(USERS);
  users: User[] = USERS;
  currUser: User = new User();

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
    ) { }

  /*
  * Send POST to backend to log user in & create cookie
  */
  login(currUser: User): Observable<any> {
    console.log('Username: ', currUser.username, 'Password: ', currUser.password);

    const api = 'http://localhost:8080/users/login';
    return this.http.post(api, currUser);
  }
}
