import { TestBed } from '@angular/core/testing';

import { FilterFunctionZahlungService } from './filter-function-zahlung.service';

describe('FilterFunctionZahlungService', () => {
  let service: FilterFunctionZahlungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFunctionZahlungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
