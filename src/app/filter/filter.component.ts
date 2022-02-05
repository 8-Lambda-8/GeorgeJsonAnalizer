import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'; import { Category } from '../models/category';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction/transaction.service';

export interface Filter {
  transactions: Transaction[],
  categories: Category[],
  startDate: Date,
  endDate: Date,
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filter: Filter;
  @Output() filterChange = new EventEmitter<Filter>();

  selectedPreset: string = '1 Year';
  dateRanges: string[] = [
    'Custom',
    'This Year', 'Last Year', '1 Year',
    '2 Years', '3 Years',
    'This Month', 'Last Month', '1 Month',
    '3 Months', '6 Months', '9 Months',
    'All'
  ];

  constructor(
    private transactionservice: TransactionService,
  ) {
    let now = new Date();
    this.filter = { transactions: [], categories: [], startDate: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()), endDate: now };
  }
  ngOnInit(): void {
    this.selectChange(this.selectedPreset);
  }

  updateTransactions() {
    this.filter.transactions = this.transactionservice.getFiltered([], this.filter.startDate, this.filter.endDate);
    this.filterChange.emit(this.filter);
  }

  selectChange(value: string) {
    switch (value) {
      case 'This Year':
        this.filter.startDate = new Date(new Date().getFullYear(), 0, 1);
        this.filter.endDate = new Date(new Date().getFullYear() + 1, 0, 0);
        break;
      case 'Last Year':
        this.filter.startDate = new Date(new Date().getFullYear() - 1, 0, 1);
        this.filter.endDate = new Date(new Date().getFullYear(), 0, 0);
        break;
      case '1 Year':
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setFullYear(this.filter.startDate.getFullYear() - 1);
        break;
      case '2 Years':
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setFullYear(this.filter.startDate.getFullYear() - 2);
        break;
      case '3 Years':
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setFullYear(this.filter.startDate.getFullYear() - 3);
        break;
      case 'This Month':
        this.filter.startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        this.filter.endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        break;
      case 'Last Month':
        this.filter.startDate = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
        this.filter.endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        break;
      case '1 Month':
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 1);
        break;
      case '3 Months':
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 4);
        break;
      case '6 Months':
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 7);
        break;
      case '9 Months':
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 10);
        break;
      case 'All':
        this.filter.startDate = this.transactionservice.getEarlyestDate();
        this.filter.endDate = new Date();
        break;
      default:
        break;
    }
    this.updateTransactions();
  }

}
