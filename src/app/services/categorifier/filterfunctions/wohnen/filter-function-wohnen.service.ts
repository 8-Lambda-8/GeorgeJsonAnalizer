import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionWohnenService {
  //add all functions here
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterMiete,
    this.filterBetriebskosten,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterMiete(transaction: Transaction): Category | null {
    if (transaction.partnerName == "JET 0275") {
      return new Category(categoryIds.wohnen.miete);
    }
    return null;
  }
  private filterBetriebskosten(transaction: Transaction): Category | null {
    if (transaction.partnerName?.toUpperCase().includes("HAUSHALT")) {
      return new Category(categoryIds.wohnen.betriebskosten);
    }
    return null;
  }

  constructor() {
    return;
  }
}
