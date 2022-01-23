import { TestBed } from '@angular/core/testing';

import { FilterFunctionWohnenService } from './filter-function-wohnen.service';

describe('FilterFunctionWohnenService', () => {
  let service: FilterFunctionWohnenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionWohnenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
