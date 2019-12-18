import { User } from './user';

export class Car {
  carId: number;
  make: string;
  model: string;
  year: number;
  value: number;
  mileage: number;
  fuel: string;
  exteriorColor: string;
  interiorColor: string;
  transmission: string;
  engine: string;
  driveType: string;
  description: string;
  // status will tell whether or not car is for sale
  // using an ENUM here on the backend to define these states (FOR_SALE & NOT_FOR_SALE)
  saleStatus: string;
  // ownerId will be FK to user table
  owner: User;
  // Link to where the photo is stored in S3 bucket
  photoLink: string;
  constructor() {
    this.photoLink = '';
  }
}
