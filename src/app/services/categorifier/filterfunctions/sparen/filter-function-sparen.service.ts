import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";
@Injectable({
  providedIn: "root",
})
export class FilterFunctionSparenService {
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterBausparen,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterBausparen(transaction: Transaction): Category | null {
    if (
      transaction.partnerName?.toUpperCase().includes("BAUSPAR") ||
      transaction.reference?.toUpperCase().includes("BAUSPAR")
    ) {
      return new Category(categoryIds.sparen.bausparen);
    }
    return null;
  }

  constructor() {
    return;
  }
}
