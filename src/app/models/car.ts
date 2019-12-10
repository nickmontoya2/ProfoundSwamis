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
  // this can be a look up table: 0 = "not for sale"; 1 = "for sale"
  // maybe use an ENUM here on the backend to define these states (wouldn't be 0,1 based anymore)
  status: number;
  // ownerId will be FK to user table
  ownerId: number;
  // Link to where the photo is stored in S3 bucket
  photoLink: string;
  constructor() {}
}
