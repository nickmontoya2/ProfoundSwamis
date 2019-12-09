import { Car } from './car';
import { Transaction } from './transaction';
import { NullTemplateVisitor } from '@angular/compiler';

export class User {
  userId: number;
  name: string;
  username: string;
  password: string;
  balance: number;
  cars: Car[];
  transactions: Transaction[];
  loggedIn: boolean;

  constructor() {
    this.userId = null;
    this.name = null;
    this.username = null;
    this.password = null;
    this.balance = null;
    this.cars = [];
    this.transactions = [];
    this.loggedIn = false;
  }
}
