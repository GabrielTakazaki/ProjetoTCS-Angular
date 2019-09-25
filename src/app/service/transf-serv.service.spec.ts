import { TestBed } from '@angular/core/testing';

import { TransfServService } from './transf-serv.service';

describe('TransfServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransfServService = TestBed.get(TransfServService);
    expect(service).toBeTruthy();
  });
});
