import { TestBed } from '@angular/core/testing';

import { FilterFunctionOnlineService } from './filter-function-online.service';

describe('FilterFunctionOnlineService', () => {
  let service: FilterFunctionOnlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionOnlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
