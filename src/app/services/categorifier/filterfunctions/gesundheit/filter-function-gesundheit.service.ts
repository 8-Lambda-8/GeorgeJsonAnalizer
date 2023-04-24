import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionGesundheitService {
  //add all functions here
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterApotheke,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterApotheke(transaction: Transaction): Category | null {
    //just a basic filter as an example

    if (transaction.partnerName?.toLowerCase().includes("apotheke")) {
      return new Category(categoryIds.gesundheit.apotheke);
    }
    return null;
  }

  constructor() {
    return;
  }
}
