import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionOnlineService {
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterAliexpress,
    this.filterAmazon,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterAliexpress(transaction: Transaction): Category | null {
    if (transaction.partnerName?.includes("ALIEXPRESS")) {
      return new Category(categoryIds.online.aliexpress);
    }
    return null;
  }

  private filterAmazon(transaction: Transaction): Category | null {
    if (transaction.partnerName?.includes("AMAZON")) {
      return new Category(categoryIds.online.amazon);
    }
    return null;
  }

  constructor() {
    return;
  }
}
