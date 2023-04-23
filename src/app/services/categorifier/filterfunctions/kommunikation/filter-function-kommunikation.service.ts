import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionKommunikationService {
  //add all functions here
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterTV,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterTV(transaction: Transaction): Category | null {
    //just a basic filter as an example

    if (transaction.partnerName?.includes("NETFLIX")) {
      return new Category(categoryIds.kommunikation.tv);
    }
    return null;
  }

  constructor() {}
}
