import { TestBed } from '@angular/core/testing';

import { ProtocoleServService } from './protocole-serv.service';

describe('ProtocoleServService', () => {
  let service: ProtocoleServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtocoleServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
