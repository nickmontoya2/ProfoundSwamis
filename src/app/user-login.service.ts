import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  // users: User[] = of(USERS);

  constructor() { }

  login(username: string, password: string): boolean {
    // This method will eventually be a post request to the backend
    // checking if the provided info is a valid user.
    // For now it's just checking if the user exists in the mock-users data
    // I believe the portion to create a session with userId should happen on the server side
    // I don't think login is a situation to create an observable since it will just be 1 post request
    for (const user of USERS) {
      if (user.username === username && user.password === password) {
        return true;
      }
    }
    return false;
  }
}
