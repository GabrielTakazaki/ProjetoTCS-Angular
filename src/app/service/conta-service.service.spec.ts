import { TestBed } from '@angular/core/testing';

import { ContaServiceService } from '../conta-service.service';

describe('ContaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaServiceService = TestBed.get(ContaServiceService);
    expect(service).toBeTruthy();
  });
});
