import { TestBed } from '@angular/core/testing';

import { FilterFunctionOtherService } from './filter-function-other.service';

describe('FilterFunctionOtherService', () => {
  let service: FilterFunctionOtherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionOtherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
