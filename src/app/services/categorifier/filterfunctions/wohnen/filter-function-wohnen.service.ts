import { Injectable } from '@angular/core';
import { Category, categoryIds} from 'src/app/models/category';
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class FilterFunctionWohnenService {

  //add all functions here 
  filterFunctions: ((transaction:Transaction) => Category | null)[] = [
    this.filterMiete
  ];

  public getFilter(): ((transaction:Transaction) => Category | null)[]{
    return this.filterFunctions;
  }



  private filterMiete(transaction: Transaction): Category | null{

    //just a basic filter as an example
    if(transaction.partnerName == "JET 0275"){
      return new Category(categoryIds.wohnen.miete);
    }
    return null;
  }

  
  constructor() { }
}
