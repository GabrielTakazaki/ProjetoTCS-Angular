import { TestBed } from '@angular/core/testing';

import { ControllerClienteService } from './controller-cliente.service';

describe('ControllerClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControllerClienteService = TestBed.get(ControllerClienteService);
    expect(service).toBeTruthy();
  });
});
