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

  numUncategorized(): number {
    return this.n.filter(t => t.categories == null).length;
  }

  deltaAll(): string {
    let delta = 0;
    for (let t of this.n) {
      delta += t.amount.valueFloat
    }
    return delta.toLocaleString('de-DE', { style: 'currency', currency: "EUR" });
  }

  inAll(): string {
    let _in = 0;
    for (let t of this.n) {
      if (t.amount.value>0) 
      _in += t.amount.valueFloat
    }
    return _in.toLocaleString('de-DE', { style: 'currency', currency: "EUR" });
  }

  outAll(): string {
    let out = 0;
    for (let t of this.n) {
      if (t.amount.value<0) 
        out += t.amount.valueFloat
    }
    return out.toLocaleString('de-DE', { style: 'currency', currency: "EUR" });
  }

}
