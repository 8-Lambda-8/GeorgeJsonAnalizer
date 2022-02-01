import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss']
})
export class FilteredListComponent implements OnInit {

  transactions: Transaction[] = []
  constructor(private transactionService: TransactionService) {
    this.transactions = this.transactionService.transactions;
  }

  ngOnInit(): void {
  }

}
