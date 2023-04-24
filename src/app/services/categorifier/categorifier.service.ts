import { Injectable } from "@angular/core";
import { Category } from "src/app/models/category";
import { Transaction } from "../../models/transaction";
import { TransactionService } from "../transaction/transaction.service";
import { FilterFunctionWohnenService } from "./filterfunctions/wohnen/filter-function-wohnen.service";
import { FilterFunctionEssenService } from "./filterfunctions/essen/filter-function-essen.service";
import { FilterFunctionKommunikationService } from "./filterfunctions/kommunikation/filter-function-kommunikation.service";
import { FilterFunctionGesundheitService } from "./filterfunctions/gesundheit/filter-function-gesundheit.service";
import { FilterFunctionKfzService } from "./filterfunctions/kfz/filter-function-kfz.service";

import { FilterFunctionZusatzeinkommenService } from "./filterfunctions/zusatzeinkommen/filter-function-zusatzeinkommen.service";
import { FilterFunctionOnlineService } from "./filterfunctions/online/filter-function-online.service";

@Injectable({
  providedIn: "root",
})
export class CategorifierService {
  outFilterFunctions: ((transaction: Transaction) => Category | null)[] = [];
  inFilterFunctions: ((transaction: Transaction) => Category | null)[] = [];

  //TODO add all other filter (see categories)

  constructor(
    private transactionService: TransactionService,
    wohnenFilter: FilterFunctionWohnenService,
    essenFilter: FilterFunctionEssenService,
    gesundheitFilter: FilterFunctionGesundheitService,
    kommunikationFilter: FilterFunctionKommunikationService,
    kfzFilter: FilterFunctionKfzService,
    onlineFilter: FilterFunctionOnlineService,
    zusatzeinkommenFilter: FilterFunctionZusatzeinkommenService
  ) {
    //filters for outgoing transactions
    wohnenFilter //0
      .getFilter()
      .forEach((filter) => this.outFilterFunctions.push(filter));
    essenFilter //1
      .getFilter()
      .forEach((filter) => this.outFilterFunctions.push(filter));
    gesundheitFilter //2
      .getFilter()
      .forEach((filter) => this.outFilterFunctions.push(filter));
    kommunikationFilter //4
      .getFilter()
      .forEach((filter) => this.outFilterFunctions.push(filter));
    kfzFilter //7
      .getFilter()
      .forEach((filter) => this.outFilterFunctions.push(filter));
    onlineFilter //11
      .getFilter()
      .forEach((filter) => this.outFilterFunctions.push(filter));

    //filters for ingoing transactions
    zusatzeinkommenFilter
      .getFilter()
      .forEach((filter) => this.inFilterFunctions.push(filter));
  }

  private getMatchFromBasicRegex(transaction: Transaction): Category | null {
    if (transaction.amount.value < 0)
      for (const filter of this.outFilterFunctions) {
        const category = filter(transaction);
        if (category != null) {
          //found a category
          return category;
        }
      }
    else
      for (const filter of this.inFilterFunctions) {
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
