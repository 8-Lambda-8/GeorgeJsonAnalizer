import { Injectable } from "@angular/core";
import { Category } from "src/app/models/category";
import { Transaction } from "../../models/transaction";
import { TransactionService } from "../transaction/transaction.service";
import { FilterFunctionWohnenService } from "./filterfunctions/wohnen/filter-function-wohnen.service";
import { FilterFunctionEssenService } from "./filterfunctions/essen/filter-function-essen.service";
import { FilterFunctionKommunikationService } from "./filterfunctions/kommunikation/filter-function-kommunikation.service";
import { FilterFunctionGesundheitService } from "./filterfunctions/gesundheit/filter-function-gesundheit.service";

@Injectable({
  providedIn: "root",
})
export class CategorifierService {
  filterFunctions: ((transaction: Transaction) => Category | null)[] = [];

  //TODO add all other filter (see categories)

  constructor(
    private transactionService: TransactionService,
    wohnenFilter: FilterFunctionWohnenService,
    essenFilter: FilterFunctionEssenService,
    kommunikationFilter: FilterFunctionKommunikationService,
    gesundheitFilter: FilterFunctionGesundheitService
  ) {
    wohnenFilter
      .getFilter()
      .forEach((filter) => this.filterFunctions.push(filter));
    essenFilter
      .getFilter()
      .forEach((filter) => this.filterFunctions.push(filter));
    kommunikationFilter
      .getFilter()
      .forEach((filter) => this.filterFunctions.push(filter));
    gesundheitFilter
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
