import { TestBed } from '@angular/core/testing';

import { FilterFunctionEinkommenService } from './filter-function-einkommen.service';

describe('FilterFunctionEinkommenService', () => {
  let service: FilterFunctionEinkommenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionEinkommenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
