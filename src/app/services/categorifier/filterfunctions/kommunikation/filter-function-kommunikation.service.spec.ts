import { TestBed } from "@angular/core/testing";

import { FilterFunctionKommunikationService } from "./filter-function-kommunikation.service";

describe("FilterFunctionKommunikationService", () => {
  let service: FilterFunctionKommunikationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionKommunikationService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
