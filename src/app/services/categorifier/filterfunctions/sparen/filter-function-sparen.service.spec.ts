import { TestBed } from '@angular/core/testing';

import { FilterFunctionSparenService } from './filter-function-sparen.service';

describe('FilterFunctionSparenService', () => {
  let service: FilterFunctionSparenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionSparenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
