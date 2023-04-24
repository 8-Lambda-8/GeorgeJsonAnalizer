import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { MatOptionSelectionChange } from "@angular/material/core";
import { Category, categoryTreeList, ICategory } from "../models/category";
import { Transaction } from "../models/transaction";
import { TransactionService } from "../services/transaction/transaction.service";

export interface Filter {
  transactions: Transaction[];
  categories: Category[];
  startDate: Date;
  endDate: Date;
  direction?: "in" | "out" | "both";
}

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Input() filter: Filter;
  @Input()
  filterFields: ("direction" | "categories" | "time")[] = [
    "categories",
    "time",
  ];
  @Input() allowBothDirections = false;
  @Output() filterChange = new EventEmitter<Filter>();

  selectedPreset = "1 Year";
  dateRanges: string[] = [
    "Custom",
    "This Year",
    "Last Year",
    "1 Year",
    "2 Years",
    "3 Years",
    "This Month",
    "Last Month",
    "1 Month",
    "3 Months",
    "6 Months",
    "9 Months",
    "All",
  ];

  categoryTreeList = categoryTreeList;

  constructor(private transactionservice: TransactionService) {
    const now = new Date();
    this.filter = {
      transactions: [],
      categories: [],
      startDate: new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
      endDate: now,
    };
  }
  ngOnInit(): void {
    this.selectDateRangeChange(this.selectedPreset);
  }

  updateTransactions() {
    this.filter.transactions = this.transactionservice.getFiltered(
      this.filter.categories,
      this.filter.startDate,
      this.filter.endDate,
      this.filter.direction
    );
    this.filterChange.emit(this.filter);
  }

  selectDateRangeChange(value: string) {
    switch (value) {
      case "This Year":
        this.filter.startDate = new Date(new Date().getFullYear(), 0, 1);
        this.filter.endDate = new Date(new Date().getFullYear() + 1, 0, 0);
        break;
      case "Last Year":
        this.filter.startDate = new Date(new Date().getFullYear() - 1, 0, 1);
        this.filter.endDate = new Date(new Date().getFullYear(), 0, 0);
        break;
      case "1 Year":
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setFullYear(
          this.filter.startDate.getFullYear() - 1
        );
        break;
      case "2 Years":
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setFullYear(
          this.filter.startDate.getFullYear() - 2
        );
        break;
      case "3 Years":
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setFullYear(
          this.filter.startDate.getFullYear() - 3
        );
        break;
      case "This Month":
        this.filter.startDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        );
        this.filter.endDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0
        );
        break;
      case "Last Month":
        this.filter.startDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          1
        );
        this.filter.endDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          0
        );
        break;
      case "1 Month":
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 1);
        break;
      case "3 Months":
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 4);
        break;
      case "6 Months":
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 7);
        break;
      case "9 Months":
        this.filter.startDate = new Date();
        this.filter.endDate = new Date();

        this.filter.startDate.setMonth(this.filter.startDate.getMonth() - 10);
        break;
      case "All":
        this.filter.startDate = this.transactionservice.getEarlyestDate();
        this.filter.endDate = new Date();
        break;
      default:
        break;
    }
    this.updateTransactions();
  }

  selectCategoryChange(cats: Category[]) {
    console.log("cats", cats);
    this.updateTransactions();
  }

  parrentCatSelectionChanged(selChange: MatOptionSelectionChange<Category>) {
    //console.log(selChange.source)
    const cat: Category = selChange.source.value;
    //this.filter.categories.some(c => c.categoryId == cat.categoryId)

    const subs =
      categoryTreeList.find((c) => cat.categoryId == c.id)?.sub ?? [];
    if (selChange.source.selected) {
      console.log("selected Parrent", cat);
      for (const c of subs) {
        const i = this.filter.categories.findIndex(
          (cc) => cc.categoryId == c.id
        );
        console.log(i, c.id);
        if (c.id != null) {
          i === -1 ? this.filter.categories.push(new Category(c.id)) : null;
        }
      }
    } else {
      console.log("deselected Parrent", cat);
      for (const c of subs) {
        const i = this.filter.categories.findIndex(
          (cc) => cc.categoryId == c.id
        );
        if (c.id != null && i !== -1) {
          this.filter.categories.splice(i, 1);
        }
      }
    }
    console.log(this.filter.categories);
  }
  subCatSelectionChanged(selChange: MatOptionSelectionChange<Category>) {
    if (selChange.source.selected) {
      return;
    } else {
      return;
    }
  }

  ICatToCat(cat: ICategory): Category {
    return new Category(cat.id ?? 99);
  }
}
