import { TestBed } from '@angular/core/testing';

import { FilterFunctionBekleidungService } from './filter-function-bekleidung.service';

describe('FilterFunctionBekleidungService', () => {
  let service: FilterFunctionBekleidungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionBekleidungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
