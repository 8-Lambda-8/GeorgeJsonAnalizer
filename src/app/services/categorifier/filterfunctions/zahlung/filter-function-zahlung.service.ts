import { Injectable } from "@angular/core";
import { Category, categoryIds } from "src/app/models/category";
import { Transaction } from "src/app/models/transaction";

@Injectable({
  providedIn: "root",
})
export class FilterFunctionZahlungService {
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [
    this.filterEigenüberträge,
    this.filterGebühren,
    this.filterRückzahlung,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterEigenüberträge(transaction: Transaction): Category | null {
    if (transaction.reference.toUpperCase().includes("GEORGE-ÜBERWEISUNG")) {
      return new Category(categoryIds.zahlung.gebühren);
    }
    return null;
  }

  private filterGebühren(transaction: Transaction): Category | null {
    if (
      transaction.reference.toUpperCase().includes("KONTOFÜHRUNG") ||
      transaction.reference.includes("Bereitstellung s Kreditkarte")
    ) {
      return new Category(categoryIds.zahlung.gebühren);
    }
    return null;
  }

  private filterRückzahlung(transaction: Transaction): Category | null {
    if (transaction.reference.toUpperCase().includes("RÜCKZAHLUNG")) {
      return new Category(categoryIds.zahlung.rückzahlungen);
    }
    return null;
  }

  constructor() {
    return;
  }
}
