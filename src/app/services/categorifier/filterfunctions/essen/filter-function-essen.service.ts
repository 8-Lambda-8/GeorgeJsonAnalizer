import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionEssenService {
  //add all functions here
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterEinkauf,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterEinkauf(transaction: Transaction): Category | null {
    //just a basic filter as an example

    if (transaction.partnerName?.includes("SPAR")) {
      return new Category(categoryIds.essen.einkauf);
    }
    return null;
  }

  constructor() {
    return;
  }
}
