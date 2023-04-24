import { TestBed } from '@angular/core/testing';

import { FilterFunctionKfzService } from './filter-function-kfz.service';

describe('FilterFunctionKfzService', () => {
  let service: FilterFunctionKfzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionKfzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
