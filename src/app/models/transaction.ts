import { User } from './user';

export class Transaction {
  id: number;
  //buyerId: number;
  //sellerId: number;
  price: number;
  date: string;
  //carId: number;

  constructor() {
    this.id = null;
    this.price = null;
    this.date = null;
  }
}
