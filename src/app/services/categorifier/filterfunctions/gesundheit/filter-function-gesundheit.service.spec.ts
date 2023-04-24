import { TestBed } from "@angular/core/testing";

import { FilterFunctionGesundheitService } from "./filter-function-gesundheit.service";

describe("FilterFunctionGesundheitService", () => {
  let service: FilterFunctionGesundheitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionGesundheitService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
