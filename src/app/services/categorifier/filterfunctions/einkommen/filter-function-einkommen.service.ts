import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionEinkommenService {
  //add all functions here
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterGehalt,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterGehalt(transaction: Transaction): Category | null {
    if (
      transaction.reference.toUpperCase().includes("GEHALT") ||
      transaction.reference.toUpperCase().includes("LOHN")
    ) {
      return new Category(categoryIds.einkommen.gehalt);
    }
    return null;
  }

  constructor() {
    return;
  }
}
