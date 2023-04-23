import { Component, Input, OnInit } from '@angular/core';
import { Amount } from '../models/amount';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.scss']
})
export class TransactionViewComponent implements OnInit {
  @Input() transaction: Transaction = new Transaction(new Date(), new Date(), null, null, new Amount(0), "", "", "", null, false, null, null, null, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, "", "", "", "", "", null, null, null, null, null);

  constructor() { }

  ngOnInit(): void {
  }

  expanded: boolean = false;

  switchExpand() {
    this.expanded = !this.expanded;
  }

  
  dateformat = Intl.DateTimeFormat("de-DE");
}
