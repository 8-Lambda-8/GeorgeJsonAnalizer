import { TestBed } from "@angular/core/testing";

import { TransactionService } from "./transaction.service";

describe("DataServiceService", () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
