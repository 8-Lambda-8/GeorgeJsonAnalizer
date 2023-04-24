import { TestBed } from '@angular/core/testing';

import { FilterFunctionZusatzeinkommenService } from './filter-function-zusatzeinkommen.service';

describe('FilterFunctionZusatzeinkommenService', () => {
  let service: FilterFunctionZusatzeinkommenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionZusatzeinkommenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
