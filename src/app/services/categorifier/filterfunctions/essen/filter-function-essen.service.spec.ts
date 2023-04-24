import { TestBed } from "@angular/core/testing";

import { FilterFunctionEssenService } from "./filter-function-essen.service";

describe("FilterFunctionEssenService", () => {
  let service: FilterFunctionEssenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionEssenService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
