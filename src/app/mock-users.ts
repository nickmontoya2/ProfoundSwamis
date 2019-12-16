import { User } from './models/user';

// Sample users to use for login page
export const USERS: User[] = [
  {
    userId: 1,
    name: 'Marc',
    username: 'user',
    password: 'pass',
    balance: 5000000,
    cars: [],
    transactions: [],
    loggedIn: false
  },
  {
    userId: 2,
    name: 'Nick',
    username: 'otherUser',
    password: 'password',
    balance: 5000000,
    cars: [],
    transactions: [],
    loggedIn: false
  }
];
