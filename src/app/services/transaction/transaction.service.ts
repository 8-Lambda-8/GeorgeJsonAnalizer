import { Injectable } from "@angular/core";
import { Category } from "src/app/models/category";
import {
  objArrayToTransactionArray,
  objToTransaction,
  Transaction,
} from "../../models/transaction";

@Injectable({
  providedIn: "root",
})
export class TransactionService {
  private _transactions: Transaction[] = [];
  public get transactions(): Transaction[] {
    return this._transactions;
  }

  constructor() {
    this.loadFromLocalStorage();
  }

  public addJson(json: string) {
    const importTransactions = objArrayToTransactionArray(JSON.parse(json));

    for (const transaction of importTransactions) {
      if (
        !this._transactions.some(
          (o) => o.referenceNumber == transaction.referenceNumber
        )
      ) {
        this._transactions.push(transaction);
      }
    }
    this._transactions = this._transactions.sort((t1, t2) => {
      return t2.booking.getTime() - t1.booking.getTime();
    });
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(
      "transactions",
      JSON.stringify(this._transactions).split('"_').join('"')
    );
  }

  loadFromLocalStorage() {
    const stored = localStorage.getItem("transactions");
    if (stored == null) return;
    this._transactions = objArrayToTransactionArray(JSON.parse(stored));
  }

  deleteLocalStorage() {
    localStorage.removeItem("transactions");
  }

  getFiltered(cats: Category[], start: Date, end: Date): Transaction[] {
    return this._transactions.filter((t) => {
      if (
        cats.length > 0 &&
        !cats.some((c) => t.categories?.categoryId == c.categoryId)
      )
        return false;
      if (
        t.booking.getTime() < start.getTime() ||
        t.booking.getTime() > end.getTime()
      )
        return false;

      return true;
    });
  }

  getEarlyestDate(): Date {
    return this._transactions[this._transactions.length - 1].booking;
  }
}
