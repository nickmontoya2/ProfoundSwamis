import { Car } from './car';
import { Transaction } from './transaction';

export class User {
  userId: number;
  name: string;
  username: string;
  password: string;
  balance: number;
  cars: Car[];
  transactions: Transaction[];

  constructor() {}
}
