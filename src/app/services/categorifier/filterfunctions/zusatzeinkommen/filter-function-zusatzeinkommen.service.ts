import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionZusatzeinkommenService {
  //add all functions here
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterBareinzahlung,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterBareinzahlung(transaction: Transaction): Category | null {
    //just a basic filter as an example

    if (transaction.reference?.includes("SB-Eigenerlag")) {
      return new Category(categoryIds.zusatzeinkommen.bareinzahlung);
    }
    return null;
  }

  constructor() {
    return;
  }
}
