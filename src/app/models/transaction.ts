import { Car } from './car';
import { User } from './user';

export class Transaction {
  id: number;
  buyer: User;
  seller: User;
  price: number;
  date: string;
  car: Car;

  constructor() {
    this.id = null;
    this.price = null;
    this.date = null;
  }
}
