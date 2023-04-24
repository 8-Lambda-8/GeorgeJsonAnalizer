import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionOtherService {
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterVersicherungsprämien,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterVersicherungsprämien(
    transaction: Transaction
  ): Category | null {
    if (transaction.partnerName?.toUpperCase().includes("VERSICHERUNG")) {
      return new Category(categoryIds.other.versicherungsprämien);
    }
    return null;
  }

  constructor() {
    return;
  }
}
