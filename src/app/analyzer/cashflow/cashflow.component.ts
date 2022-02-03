import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.scss']
})
export class CashflowComponent implements OnInit {

  startDate: Date = new Date;
  endDate: Date = new Date;

  selectedPreset: String = 'This Year';
  dateRanges: String[] = [
    'Custom',
    'This Year', 'Last Year', '1 Year',
    '2 Years', '3 Years',
    'This Month', 'Last Month', '1 Month',
    '3 Months', '6 Months', '9 Months',
    'All'
  ];

  
  resolution = 'Monthly';
  resolutions: String[] = [
    'Yearly',
    'Monthly',
    'Daily',
  ];

  diagramType: String = "Bar";
  diagramTypes: String[] = ["Bar", "Line"];

  transactions: Transaction[] = [];

  constructor(
    private transactionservice: TransactionService
  ) {
    this.selectChange('This Year')
  }

  ngOnInit(): void {
    this.updateTransactions();
  }

  updateTransactions() {
    console.log(this.startDate, this.endDate)
    this.transactions = this.transactionservice.getFiltered([], this.startDate, this.endDate);

    console.log(this.transactions)
    console.log(this.transactions.length)
  }

  selectChange(value: string) {
    switch (value) {
      case 'This Year':
        this.startDate = new Date(new Date().getFullYear(), 0, 1);
        this.endDate = new Date(new Date().getFullYear() + 1, 0, 0);
        break;
      case 'Last Year':
        this.startDate = new Date(new Date().getFullYear() - 1, 0, 1);
        this.endDate = new Date(new Date().getFullYear(), 0, 0);
        break;
      case '1 Year':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setFullYear(this.startDate.getFullYear() - 1);
        break;
      case '2 Years':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setFullYear(this.startDate.getFullYear() - 2);
        break;
      case '3 Years':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setFullYear(this.startDate.getFullYear() - 3);
        break;
      case 'This Month':
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        this.endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        break;
      case 'Last Month':
        this.startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
        this.endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        break;
      case '1 Month':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 1);
        break;
      case '3 Months':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 4);
        break;
      case '6 Months':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 7);
        break;
      case '9 Months':
        this.startDate = new Date();
        this.endDate = new Date();

        this.startDate.setMonth(this.startDate.getMonth() - 10);
        break;
      case 'All':
        this.startDate = this.transactionservice.getEarlyestDate();
        this.endDate = new Date();
        break;
      default:
        break;
    }
    this.updateTransactions()
  }

}
