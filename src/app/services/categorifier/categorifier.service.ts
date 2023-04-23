import { Injectable } from "@angular/core";
import { Category } from "src/app/models/category";
import { Transaction } from "../../models/transaction";
import { FilterFunctionWohnenService } from "./filterfunctions/wohnen/filter-function-wohnen.service";
import { FilterFunctionKommunikationService } from "./filterfunctions/kommunikation/filter-function-kommunikation.service";
import { TransactionService } from "../transaction/transaction.service";

@Injectable({
  providedIn: "root",
})
export class CategorifierService {
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [];

  //TODO add all other filter (see categories)

  constructor(
    private transactionService: TransactionService,
    wohnenFilter: FilterFunctionWohnenService,
    kommunikationFilter: FilterFunctionKommunikationService
  ) {
    wohnenFilter
      .getFilter()
      .forEach((filter) => this.filterFunctions.push(filter));
    kommunikationFilter
      .getFilter()
      .forEach((filter) => this.filterFunctions.push(filter));
  }

  private getMatchFromBasicRegex(transaction: Transaction): Category | null {
    for (const filter of this.filterFunctions) {
      const category = filter(transaction);
      if (category != null) {
        //found a category
        return category;
      }
    }

    //found nothing
    return null;
  }

  public determineAndAssignCategories(transactions: Transaction[]) {
    transactions.forEach((transaction) => {
      if (transaction.categories) return;
      transaction.categories = this.getMatchFromBasicRegex(transaction);
    });
    this.transactionService.saveToLocalStorage();
  }
}
