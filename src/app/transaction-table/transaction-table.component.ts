import { Component, OnInit } from '@angular/core';
import { TransactionTableService } from '../transaction-table.service';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {

  listOfPurchases: Transaction[] = [];
  listOfSales: Transaction[] = [];

  constructor(private service: TransactionTableService) { }

  ngOnInit() {
    // Get all purchases
    this.service.listPurchases().subscribe(
      response => {
        this.listOfPurchases = response;
        console.log(this.listOfPurchases);
      }
    );
    // Get all sales
    this.service.listSales().subscribe(
      response => {
        this.listOfSales = response;
      }
    );
  }
}
