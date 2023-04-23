import { TestBed } from "@angular/core/testing";

import { CategorifierService } from "./categorifier.service";

describe("CategorifierService", () => {
  let service: CategorifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorifierService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
