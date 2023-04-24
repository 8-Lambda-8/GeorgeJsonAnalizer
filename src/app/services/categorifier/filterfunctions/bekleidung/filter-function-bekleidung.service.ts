import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionBekleidungService {
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterBekleidung,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterBekleidung(transaction: Transaction): Category | null {
    if (transaction.partnerName?.toUpperCase().includes("MODE")) {
      return new Category(categoryIds.bekleidung.bekleidung);
    }
    return null;
  }

  constructor() {
    return;
  }
}
