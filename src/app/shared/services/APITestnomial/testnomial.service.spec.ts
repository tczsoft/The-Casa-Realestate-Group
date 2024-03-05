import { TestBed } from '@angular/core/testing';

import { TestnomialService } from './testnomial.service';

describe('TestnomialService', () => {
  let service: TestnomialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestnomialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
