import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from "../services/transaction.service";


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  n: Transaction[];

  constructor(private transactionService: TransactionService) { 
    this.n = this.transactionService.transactions
  }

  ngOnInit(): void {
  }

}
