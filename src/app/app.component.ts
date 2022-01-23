import { Component } from '@angular/core';
import { Transaction } from './models/transaction';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GeorgeJsonAnalizer';

  transactions: Transaction[] = []
  constructor(private transactionService: TransactionService) {
    this.transactions = this.transactionService.transactions;
  }
}
