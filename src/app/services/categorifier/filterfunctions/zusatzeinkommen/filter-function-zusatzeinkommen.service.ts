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
    this.filterRückerstattung,
  ];

  public getFilter(): ((transaction: Transaction) => Category | null)[] {
    return this.filterFunctions;
  }

  private filterBareinzahlung(transaction: Transaction): Category | null {
    if (transaction.reference?.includes("SB-Eigenerlag")) {
      return new Category(categoryIds.zusatzeinkommen.bareinzahlung);
    }
    return null;
  }

  private filterRückerstattung(transaction: Transaction): Category | null {
    if (
      transaction.reference?.toUpperCase().includes("RUECKZAHLUNG") ||
      transaction.reference?.toUpperCase().includes("RÜCKZAHLUNG")
    ) {
      return new Category(categoryIds.zusatzeinkommen.rückerstattung);
    }
    return null;
  }

  constructor() {
    return;
  }
}
