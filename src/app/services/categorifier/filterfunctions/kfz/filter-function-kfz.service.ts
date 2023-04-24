import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionKfzService {
  //add all functions here
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterTreibstoff,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterTreibstoff(transaction: Transaction): Category | null {
    if (transaction.partnerName?.includes("DISK")) {
      return new Category(categoryIds.kfz.treibstoff);
    }
    return null;
  }

  constructor() {
    return;
  }
}
