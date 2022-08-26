import { TestBed } from '@angular/core/testing';

import { CompteRenduServService } from './compte-rendu-serv.service';

describe('CompteRenduServService', () => {
  let service: CompteRenduServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteRenduServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
