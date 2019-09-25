import { TestBed } from '@angular/core/testing';

import { CredServService } from './cred-serv.service';

describe('CredServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CredServService = TestBed.get(CredServService);
    expect(service).toBeTruthy();
  });
});
