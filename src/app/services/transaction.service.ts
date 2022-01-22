import { Injectable } from '@angular/core';
import { objArrayToTransactionArray, objToTransaction, Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _transactions: Transaction[] = [];
  public get transactions(): Transaction[] {
    return this._transactions;
  }

  constructor() {
    this.loadFromLocalStorage();
    console.log(this._transactions);
  }

  public addJson(json: string) {
    let importTransactions = objArrayToTransactionArray(JSON.parse(json));

    for (let transaction of importTransactions) {
      console.log(transaction)
      if (!this._transactions.some(o => o.referenceNumber == transaction.referenceNumber)) {
        this.transactions.push(transaction);
      }
    };

    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    console.log(JSON.stringify(this._transactions));
    localStorage.setItem("transactions", JSON.stringify(this._transactions).split("\"_").join("\""));
  }

  loadFromLocalStorage() {
    let stored = localStorage.getItem("transactions");
    if (stored == null) return;
    this._transactions = objArrayToTransactionArray(JSON.parse(stored));
  }
}
