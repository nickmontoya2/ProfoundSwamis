import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionTableService } from '../transaction-table.service';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {

  listOfTransactions: Transaction[] = [];

  constructor(private service: TransactionTableService) { }

  ngOnInit() {
    this.service.list().subscribe(
      response => {
        this.listOfTransactions = response;
      }
    );
    console.log(this.listOfTransactions);
  }



}
