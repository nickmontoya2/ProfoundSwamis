import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './models/user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  // users: User[] = of(USERS);
  users: User[] = USERS;
  currUser: User = new User();

  constructor() { }

  /*
  * This method will eventually be a post request to the backend
  * checking if the provided info is a valid user.
  * For now it's just checking if the user exists in the mock-users data
  * I believe the portion to create a session with userId should happen on the server side
  * I don't think login is a situation to create an observable since it will just be 1 post request
  */
  login(currUser: User): boolean {
    console.log('Username: ', currUser.username, 'Password: ', currUser.password);
    for (const user of USERS) {
      if (user.username === currUser.username && user.password === currUser.password) {
        this.currUser = user;
        this.currUser.loggedIn = true;
        console.log(this.currUser.name);
        return this.currUser.loggedIn;
      }
    }
    this.currUser.loggedIn = false;
    return this.currUser.loggedIn;
  }
}
