export class Car {
  carId: number;
  make: string;
  model: string;
  year: number;
  value: number;
  mileage: number;
  fuel: string;
  color: string;
  transmission: string;
  description: string;
  // status will tell whether or not car is for sale
  // this can be a look up table: 0 = "not for sale"; 1 = "for sale"
  // maybe use an ENUM here on the backend to define these states (wouldn't be 0,1 based anymore)
  status: number;

  constructor() {}
}